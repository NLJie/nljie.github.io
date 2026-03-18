# STM32 Getting Started Guide

## STM32 Introduction

STM32 is a series of 32-bit microcontrollers based on ARM Cortex-M cores, launched by STMicroelectronics. Widely used in industrial control, consumer electronics, and automotive applications.

![STM32 Development Board](/images/stm32.jpg)

## Development Environment Setup

### 1. Hardware Requirements

| Device | Recommended | Description |
|--------|-------------|-------------|
| Dev Board | STM32F103C8T6 (Blue Pill) | Best value for beginners |
| Debugger | ST-Link V2 | Original or compatible |
| USB-UART | CH340/CP2102 | For serial debugging |

### 2. Software Installation

**Keil MDK** (Recommended for beginners):
```
1. Download Keil MDK 5.38+
2. Install STM32F1/F4 series Pack
3. Install ST-Link driver
```

**VS Code + PlatformIO** (Recommended for advanced):
```json
// platformio.ini
[env:stm32f103c8]
platform = ststm32
board = genericSTM32F103C8
framework = stm32cube
upload_protocol = stlink
debug_tool = stlink
```

### 3. First Program - LED Blink

```c
#include "stm32f1xx_hal.h"

int main(void) {
    HAL_Init();
    SystemClock_Config();
    
    // Enable GPIOA clock
    __HAL_RCC_GPIOA_CLK_ENABLE();
    
    GPIO_InitTypeDef GPIO_InitStruct = {0};
    GPIO_InitStruct.Pin = GPIO_PIN_5;          // LED on PA5
    GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP; // Push-pull output
    GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
    
    while (1) {
        HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);
        HAL_Delay(500);  // Delay 500ms
    }
}
```

![Code Compilation](/images/stm32.jpg)

## Clock System Deep Dive

### Clock Tree Structure

```
HSI (8MHz) ──┬──> SYSCLK ──> AHB Prescaler ──> HCLK
             │                    │
HSE (8MHz) ──┘                    ├──> APB1 Prescaler ──> PCLK1 (36MHz max)
             ┌──> PLLCLK           │
PLL ─────────┘ (72MHz max)         └──> APB2 Prescaler ──> PCLK2 (72MHz max)
```

### Clock Configuration Code

```c
void SystemClock_Config(void) {
    RCC_OscInitTypeDef RCC_OscInitStruct = {0};
    RCC_ClkInitTypeDef RCC_ClkInitStruct = {0};
    
    // Enable HSE
    RCC_OscInitStruct.OscillatorType = RCC_OSCILLATORTYPE_HSE;
    RCC_OscInitStruct.HSEState = RCC_HSE_ON;
    RCC_OscInitStruct.PLL.PLLState = RCC_PLL_ON;
    RCC_OscInitStruct.PLL.PLLSource = RCC_PLLSOURCE_HSE;
    RCC_OscInitStruct.PLL.PLLMUL = RCC_PLL_MUL9;  // 8MHz * 9 = 72MHz
    HAL_RCC_OscConfig(&RCC_OscInitStruct);
    
    // Configure bus dividers
    RCC_ClkInitStruct.ClockType = RCC_CLOCKTYPE_HCLK|RCC_CLOCKTYPE_SYSCLK
                                  |RCC_CLOCKTYPE_PCLK1|RCC_CLOCKTYPE_PCLK2;
    RCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_PLLCLK;
    RCC_ClkInitStruct.AHBCLKDivider = RCC_SYSCLK_DIV1;
    RCC_ClkInitStruct.APB1CLKDivider = RCC_HCLK_DIV2;  // APB1 max 36MHz
    RCC_ClkInitStruct.APB2CLKDivider = RCC_HCLK_DIV1;
    HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_2);
}
```

## GPIO Deep Understanding

### 8 Working Modes

| Mode | Direction | Characteristics | Use Case |
|------|-----------|-----------------|----------|
| Input Floating | Input | High impedance | Button detection |
| Input Pull-up | Input | Internal pull-up | I2C data line |
| Input Pull-down | Input | Internal pull-down | Default low detection |
| Analog | Input | Direct to ADC | ADC sampling |
| Open-drain Output | Output | Needs external pull-up | I2C SDA/SCL |
| Push-pull Output | Output | Strong drive | LED, relay |
| Alternate Open-drain | Output | Peripheral use | USART TX/RX |
| Alternate Push-pull | Output | Peripheral use | SPI, PWM |

![GPIO Structure](/images/stm32.jpg)

## Interrupts and NVIC

### External Interrupt Configuration

```c
// Configure external interrupt - button detection
void EXTI0_Init(void) {
    GPIO_InitTypeDef GPIO_InitStruct = {0};
    
    // PA0 as input pull-up
    __HAL_RCC_GPIOA_CLK_ENABLE();
    GPIO_InitStruct.Pin = GPIO_PIN_0;
    GPIO_InitStruct.Mode = GPIO_MODE_IT_FALLING;  // Falling edge trigger
    GPIO_InitStruct.Pull = GPIO_PULLUP;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
    
    // Configure NVIC
    HAL_NVIC_SetPriority(EXTI0_IRQn, 2, 0);
    HAL_NVIC_EnableIRQ(EXTI0_IRQn);
}

// Interrupt handler
void EXTI0_IRQHandler(void) {
    HAL_GPIO_EXTI_IRQHandler(GPIO_PIN_0);
}

// Callback function
void HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin) {
    if (GPIO_Pin == GPIO_PIN_0) {
        // Button press handling
        key_flag = 1;
    }
}
```

## Debugging Tips

### 1. Using SWD Debug

```
ST-Link Connection:
- VCC  -> 3.3V
- GND  -> GND
- SWDIO -> SWDIO (PA13)
- SWCLK -> SWCLK (PA14)
- NRST  -> NRST
```

### 2. Serial Print Debug

```c
// Redirect printf to USART1
int _write(int file, char *ptr, int len) {
    HAL_UART_Transmit(&huart1, (uint8_t*)ptr, len, HAL_MAX_DELAY);
    return len;
}

// Usage
printf("ADC Value: %d\n", adc_value);
```

### 3. Using ITM/SWO Single Wire Output

```c
// Insert at key points
ITM_SendChar('A');
ITM_SendWord(0x12345678);
```

![Debug Interface](/images/stm32.jpg)

## Common Issues

### 1. Cannot Download Program
- Check BOOT0/BOOT1 pin levels
- Confirm SWD pins not remapped
- Try holding reset then click download

### 2. Clock Configuration Error
- Use STM32CubeMX to generate init code
- Check Flash wait states
- Confirm APB1 clock not exceeding 36MHz

### 3. HardFault Exception
```c
// Add error handling
void HardFault_Handler(void) {
    __ASM volatile("BKPT #01");  // Trigger breakpoint
    while(1);
}
```

## Learning Path

1. **Basic**: GPIO, Clock, Interrupt, Timer
2. **Advanced**: DMA, ADC, USART, I2C, SPI
3. **Expert**: RTOS, USB, Ethernet, FSMC
4. **Project**: Complete a real project

## Recommended Resources

- **Official Docs**: RM0008 Reference Manual, Datasheet
- **Tools**: STM32CubeMX, STM32CubeIDE
- **Communities**: ST Forum, Zhengdian Atom, Wildfire
