# STM32 入门完全指南

## STM32 简介

STM32 是意法半导体（STMicroelectronics）推出的基于 ARM Cortex-M 内核的 32 位微控制器系列，广泛应用于工业控制、消费电子、汽车电子等领域。

![STM32 开发板](/images/stm32.jpg)

## 开发环境搭建

### 1. 硬件准备

| 设备 | 推荐型号 | 说明 |
|------|---------|------|
| 开发板 | STM32F103C8T6（蓝色药丸） | 性价比最高，适合入门 |
| 调试器 | ST-Link V2 | 正版或兼容版均可 |
| USB转串口 | CH340/CP2102 | 串口调试必备 |

### 2. 软件安装

**Keil MDK**（推荐新手）：
```
1. 下载 Keil MDK 5.38+
2. 安装 STM32F1/F4 系列 Pack
3. 安装 ST-Link 驱动
```

**VS Code + PlatformIO**（推荐进阶）：
```json
// platformio.ini
[env:stm32f103c8]
platform = ststm32
board = genericSTM32F103C8
framework = stm32cube
upload_protocol = stlink
debug_tool = stlink
```

### 3. 第一个程序 - LED 闪烁

```c
#include "stm32f1xx_hal.h"

int main(void) {
    HAL_Init();
    SystemClock_Config();
    
    // 使能 GPIOA 时钟
    __HAL_RCC_GPIOA_CLK_ENABLE();
    
    GPIO_InitTypeDef GPIO_InitStruct = {0};
    GPIO_InitStruct.Pin = GPIO_PIN_5;          // LED 在 PA5
    GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP; // 推挽输出
    GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
    
    while (1) {
        HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);
        HAL_Delay(500);  // 延时 500ms
    }
}
```

![代码编译](/images/stm32.jpg)

## 时钟系统详解

### 时钟树结构

```
HSI (8MHz) ──┬──> SYSCLK (系统时钟) ──> AHB Prescaler ──> HCLK
             │                              │
HSE (8MHz) ──┘                              ├──> APB1 Prescaler ──> PCLK1 (36MHz max)
             ┌──> PLLCLK                     │
PLL ─────────┘ (72MHz max)                   └──> APB2 Prescaler ──> PCLK2 (72MHz max)
```

### 时钟配置代码

```c
void SystemClock_Config(void) {
    RCC_OscInitTypeDef RCC_OscInitStruct = {0};
    RCC_ClkInitTypeDef RCC_ClkInitStruct = {0};
    
    // 使能 HSE
    RCC_OscInitStruct.OscillatorType = RCC_OSCILLATORTYPE_HSE;
    RCC_OscInitStruct.HSEState = RCC_HSE_ON;
    RCC_OscInitStruct.PLL.PLLState = RCC_PLL_ON;
    RCC_OscInitStruct.PLL.PLLSource = RCC_PLLSOURCE_HSE;
    RCC_OscInitStruct.PLL.PLLMUL = RCC_PLL_MUL9;  // 8MHz * 9 = 72MHz
    HAL_RCC_OscConfig(&RCC_OscInitStruct);
    
    // 配置总线分频
    RCC_ClkInitStruct.ClockType = RCC_CLOCKTYPE_HCLK|RCC_CLOCKTYPE_SYSCLK
                                  |RCC_CLOCKTYPE_PCLK1|RCC_CLOCKTYPE_PCLK2;
    RCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_PLLCLK;
    RCC_ClkInitStruct.AHBCLKDivider = RCC_SYSCLK_DIV1;
    RCC_ClkInitStruct.APB1CLKDivider = RCC_HCLK_DIV2;  // APB1 max 36MHz
    RCC_ClkInitStruct.APB2CLKDivider = RCC_HCLK_DIV1;
    HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_2);
}
```

## GPIO 深入理解

### 8 种工作模式

| 模式 | 方向 | 特点 | 应用场景 |
|------|------|------|---------|
| 输入浮空 | 输入 | 高阻态 | 按键检测 |
| 输入上拉 | 输入 | 内部上拉 | I2C 数据线 |
| 输入下拉 | 输入 | 内部下拉 | 默认低电平检测 |
| 模拟输入 | 输入 | 直连 ADC | ADC 采样 |
| 开漏输出 | 输出 | 需外接上拉 | I2C SDA/SCL |
| 推挽输出 | 输出 | 驱动能力强 | LED、继电器 |
| 复用开漏 | 输出 | 外设使用 | USART TX/RX |
| 复用推挽 | 输出 | 外设使用 | SPI、PWM |

![GPIO 结构](/images/stm32.jpg)

## 中断与 NVIC

### 外部中断配置

```c
// 配置外部中断 - 按键检测
void EXTI0_Init(void) {
    GPIO_InitTypeDef GPIO_InitStruct = {0};
    
    // PA0 配置为输入上拉
    __HAL_RCC_GPIOA_CLK_ENABLE();
    GPIO_InitStruct.Pin = GPIO_PIN_0;
    GPIO_InitStruct.Mode = GPIO_MODE_IT_FALLING;  // 下降沿触发
    GPIO_InitStruct.Pull = GPIO_PULLUP;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
    
    // 配置 NVIC
    HAL_NVIC_SetPriority(EXTI0_IRQn, 2, 0);
    HAL_NVIC_EnableIRQ(EXTI0_IRQn);
}

// 中断服务函数
void EXTI0_IRQHandler(void) {
    HAL_GPIO_EXTI_IRQHandler(GPIO_PIN_0);
}

// 回调函数
void HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin) {
    if (GPIO_Pin == GPIO_PIN_0) {
        // 按键按下处理
        key_flag = 1;
    }
}
```

## 调试技巧

### 1. 使用 SWD 调试

```
ST-Link 连接：
- VCC  -> 3.3V
- GND  -> GND
- SWDIO -> SWDIO (PA13)
- SWCLK -> SWCLK (PA14)
- NRST  -> NRST
```

### 2. 串口打印调试

```c
// 重定向 printf 到 USART1
int _write(int file, char *ptr, int len) {
    HAL_UART_Transmit(&huart1, (uint8_t*)ptr, len, HAL_MAX_DELAY);
    return len;
}

// 使用
printf("ADC Value: %d\n", adc_value);
```

### 3. 使用 ITM/SWO 单线输出

```c
// 在关键位置插入
ITM_SendChar('A');
ITM_SendWord(0x12345678);
```

![调试界面](/images/stm32.jpg)

## 常见问题

### 1. 程序无法下载
- 检查 BOOT0/BOOT1 引脚电平
- 确认 SWD 引脚未被复用
- 尝试按住复位键再点击下载

### 2. 时钟配置错误
- 使用 STM32CubeMX 生成初始化代码
- 检查 Flash 等待周期设置
- 确认 APB1 时钟不超过 36MHz

### 3. HardFault 异常
```c
// 添加错误处理
void HardFault_Handler(void) {
    __ASM volatile("BKPT #01");  // 触发断点
    while(1);
}
```

## 学习路线建议

1. **基础阶段**：GPIO、时钟、中断、定时器
2. **进阶阶段**：DMA、ADC、USART、I2C、SPI
3. **高级阶段**：RTOS、USB、以太网、FSMC
4. **实战阶段**：完成一个完整项目

## 推荐资源

- **官方文档**：RM0008 参考手册、数据手册
- **开发工具**：STM32CubeMX、STM32CubeIDE
- **社区**：ST 官方论坛、正点原子、野火
