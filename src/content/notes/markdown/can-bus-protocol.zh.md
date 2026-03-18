# CAN 总线协议详解

## 什么是 CAN

CAN（Controller Area Network）是博世公司于 1986 年开发的串行通信协议，专为汽车电子设计，具有高可靠性和实时性。

![CAN 总线拓扑](/images/can-bus.jpg)

## CAN 的特点

| 特性 | 说明 |
|------|------|
| 多主架构 | 任何节点都可以在总线空闲时发送 |
| 非破坏性仲裁 | ID 小的优先级高，不会丢失数据 |
| 高可靠性 | CRC 校验、错误检测、自动重发 |
| 传输距离 | 1Mbps 时 40m，50Kbps 时 1km |
| 节点数量 | 理论上无限制（实际受限于驱动能力）|

## 物理层

### 差分信号

CAN 使用双绞线传输差分信号：

```
CAN_H ───┬───────────────┬───────
         │    隐性(1)    │ 显性(0)
         │   2.5V/2.5V   │ 3.5V/1.5V
CAN_L ───┴───────────────┴───────
```

- **显性位（0）**：CAN_H = 3.5V，CAN_L = 1.5V，差分 2V
- **隐性位（1）**：CAN_H = CAN_L = 2.5V，差分 0V

### 终端电阻

```
      120Ω                    120Ω
CAN_H ──\/\/\──────────────────\/\/\───
        |                          |
CAN_L ──\/\/\──────────────────\/\/\───
      节点1                      节点N
      
// 终端电阻用于消除信号反射，必须接在总线两端
```

## 数据链路层

### 标准帧格式（CAN 2.0A）

```
位域           长度    说明
─────────────────────────────────
起始位(SOF)     1      显性位，表示帧开始
仲裁场(Arbitration)
  ├─ 标识符     11     消息 ID，越小优先级越高
  └─ RTR        1      远程传输请求位
控制场(Control)
  ├─ IDE        1      标识符扩展位
  ├─ 保留位     1
  └─ DLC        4      数据长度码(0-8)
数据场(Data)    0-64   实际数据(0-8字节)
CRC 场          16     循环冗余校验
ACK 场          2      应答位
帧结束(EOF)     7      隐性位，表示帧结束
```

![CAN 帧格式](/images/can-bus.jpg)

### 仲裁机制

```
节点A: ID = 0x123 (0 0010 0100 011)
       ↓↓↓↓↓↓↓↓↓↓↓
总线:  0 0010 0100 011...
       ↓↓↓↓↓↓↓↓↓↓↓
节点B: ID = 0x156 (0 0010 1010 110)
                 ↑
                 这里不同，节点B 检测到显性位，自动退出发送

结果：节点A 赢得仲裁，继续发送
```

## STM32 CAN 编程

### 初始化配置

```c
#include "stm32f1xx_hal.h"

CAN_HandleTypeDef hcan;

void CAN_Init(void) {
    // 使能时钟
    __HAL_RCC_CAN1_CLK_ENABLE();
    __HAL_RCC_GPIOA_CLK_ENABLE();
    
    // GPIO 配置 PA11-CAN_RX, PA12-CAN_TX
    GPIO_InitTypeDef GPIO_InitStruct = {0};
    GPIO_InitStruct.Pin = GPIO_PIN_11;
    GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
    GPIO_InitStruct.Pull = GPIO_PULLUP;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
    
    GPIO_InitStruct.Pin = GPIO_PIN_12;
    GPIO_InitStruct.Mode = GPIO_MODE_AF_PP;
    GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_HIGH;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
    
    // CAN 初始化
    hcan.Instance = CAN1;
    hcan.Init.Prescaler = 9;           // 预分频
    hcan.Init.Mode = CAN_MODE_NORMAL;  // 正常模式
    hcan.Init.SyncJumpWidth = CAN_SJW_1TQ;
    hcan.Init.TimeSeg1 = CAN_BS1_13TQ; // 时间段1
    hcan.Init.TimeSeg2 = CAN_BS2_2TQ;  // 时间段2
    // 波特率 = 36MHz / 9 / (1+13+2) = 250Kbps
    HAL_CAN_Init(&hcan);
    
    // 配置过滤器 - 接收所有消息
    CAN_FilterTypeDef canfilterconfig = {0};
    canfilterconfig.FilterBank = 0;
    canfilterconfig.FilterMode = CAN_FILTERMODE_IDMASK;
    canfilterconfig.FilterScale = CAN_FILTERSCALE_32BIT;
    canfilterconfig.FilterIdHigh = 0x0000;
    canfilterconfig.FilterIdLow = 0x0000;
    canfilterconfig.FilterMaskIdHigh = 0x0000;
    canfilterconfig.FilterMaskIdLow = 0x0000;
    canfilterconfig.FilterFIFOAssignment = CAN_RX_FIFO0;
    canfilterconfig.FilterActivation = ENABLE;
    HAL_CAN_ConfigFilter(&hcan, &canfilterconfig);
}
```

### 发送数据

```c
void CAN_Send(uint16_t id, uint8_t *data, uint8_t len) {
    CAN_TxHeaderTypeDef TxHeader = {0};
    uint8_t TxData[8];
    uint32_t TxMailbox;
    
    TxHeader.StdId = id;        // 标准 ID
    TxHeader.ExtId = 0;         // 扩展 ID
    TxHeader.IDE = CAN_ID_STD;  // 标准帧
    TxHeader.RTR = CAN_RTR_DATA;// 数据帧
    TxHeader.DLC = len;         // 数据长度
    TxHeader.TransmitGlobalTime = DISABLE;
    
    memcpy(TxData, data, len);
    
    if(HAL_CAN_AddTxMessage(&hcan, &TxHeader, TxData, &TxMailbox) == HAL_OK) {
        printf("CAN TX: ID=0x%03X, ", id);
        for(int i=0; i<len; i++) {
            printf("%02X ", data[i]);
        }
        printf("\n");
    }
}

// 使用示例
uint8_t data[] = {0x01, 0x02, 0x03, 0x04};
CAN_Send(0x123, data, 4);
```

### 接收数据（中断方式）

```c
void CAN_StartReception(void) {
    // 开启 FIFO0 消息挂起中断
    HAL_CAN_ActivateNotification(&hcan, CAN_IT_RX_FIFO0_MSG_PENDING);
    HAL_CAN_Start(&hcan);
}

// 中断回调
void HAL_CAN_RxFifo0MsgPendingCallback(CAN_HandleTypeDef *hcan) {
    CAN_RxHeaderTypeDef RxHeader;
    uint8_t RxData[8];
    
    if(HAL_CAN_GetRxMessage(hcan, CAN_RX_FIFO0, &RxHeader, RxData) == HAL_OK) {
        printf("CAN RX: ID=0x%03X, ", RxHeader.StdId);
        for(int i=0; i<RxHeader.DLC; i++) {
            printf("%02X ", RxData[i]);
        }
        printf("\n");
        
        // 处理接收到的数据
        Process_CAN_Message(RxHeader.StdId, RxData, RxHeader.DLC);
    }
}
```

## CAN FD（灵活数据速率）

### CAN FD 的优势

```
              CAN 2.0       CAN FD
数据长度       8 字节        64 字节
数据段波特率   1 Mbps        8 Mbps
有效载荷      ~50%          ~85%
```

### CAN FD 帧格式

```
仲裁段: 固定 1Mbps（保证仲裁可靠性）
       ↓
控制位: BRS (Bit Rate Switch) - 切换波特率
       ↓
数据段: 最高 8Mbps（提高传输效率）
       ↓
CRC 段: 回到 1Mbps
```

## 应用层协议

### J1939（商用车）

```c
// J1939 29 位扩展 ID 结构
typedef union {
    uint32_t ExtId;
    struct {
        uint8_t SourceAddress;      // 源地址 (8 bit)
        uint8_t PDUSpecific;        // PDU 特定字段 (8 bit)
        uint8_t PDUF:5;             // PDU 格式 (5 bit)
        uint8_t DataPage:1;         // 数据页 (1 bit)
        uint8_t ExtendedDataPage:1; // 扩展数据页 (1 bit)
        uint8_t Priority:3;         // 优先级 (3 bit)
        uint8_t Reserved:5;         // 保留 (5 bit)
    };
} J1939_ID_t;

// 示例：发动机转速 (PGN 61444)
// Priority = 3, PGN = 0xF004, SA = 0x00
uint32_t rpm_msg_id = (3 << 26) | (0xF004 << 8) | 0x00;
```

### CANopen（工业控制）

```c
// CANopen COB-ID 分配
#define COB_ID_NMT      0x000   // 网络管理
#define COB_ID_SYNC     0x080   // 同步对象
#define COB_ID_EMCY     0x080   // 紧急报文 (Node ID + 0x80)
#define COB_ID_TPDO1    0x180   // TPDO1 (Node ID + 0x180)
#define COB_ID_RPDO1    0x200   // RPDO1 (Node ID + 0x200)
#define COB_ID_TSDO     0x580   // SDO 应答 (Node ID + 0x580)
#define COB_ID_RSDO     0x600   // SDO 请求 (Node ID + 0x600)
#define COB_ID_HEARTBEAT 0x700  // 心跳报文 (Node ID + 0x700)
```

## 故障排查

### 常见错误

| 错误类型 | 原因 | 解决 |
|---------|------|------|
| 位错误 | 发送的位与回读的位不一致 | 检查物理连接、终端电阻 |
| 填充错误 | 连续 6 个相同位 | 检查波特率配置 |
| CRC 错误 | 校验失败 | 检查干扰、线缆质量 |
| 格式错误 | 固定格式位错误 | 检查收发器 |
| 应答错误 | 无 ACK | 检查是否有其他节点在线 |

### 调试工具

- **CAN 分析仪**：PCAN、周立功 CANalyst-II
- **示波器**：查看波形质量
- **逻辑分析仪**：解码 CAN 协议

![CAN 波形分析](/images/can-bus.jpg)

## 总结

CAN 总线设计要点：

1. **物理层**：双绞线、终端电阻 120Ω、差分信号
2. **仲裁**：非破坏性，ID 小优先级高
3. **可靠性**：CRC、ACK、错误检测、自动重发
4. **波特率**：所有节点必须一致
5. **布线**：支线尽量短，手牵手拓扑
