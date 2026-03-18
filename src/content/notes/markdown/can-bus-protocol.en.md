# CAN Bus Protocol Detailed Guide

## What is CAN

CAN (Controller Area Network) is a serial communication protocol developed by Bosch in 1986, specifically designed for automotive electronics with high reliability and real-time performance.

![CAN Bus Topology](/images/can-bus.jpg)

## CAN Features

| Feature | Description |
|---------|-------------|
| Multi-master | Any node can transmit when bus is idle |
| Non-destructive arbitration | Lower ID has priority, no data loss |
| High reliability | CRC check, error detection, auto-retransmit |
| Distance | 40m at 1Mbps, 1km at 50Kbps |
| Node count | Theoretically unlimited (limited by driver capability) |

## Physical Layer

### Differential Signaling

CAN uses twisted pair for differential signaling:

```
CAN_H ───┬───────────────┬───────
         │    Recessive(1)    │ Dominant(0)
         │   2.5V/2.5V   │ 3.5V/1.5V
CAN_L ───┴───────────────┴───────
```

- **Dominant (0)**: CAN_H = 3.5V, CAN_L = 1.5V, diff = 2V
- **Recessive (1)**: CAN_H = CAN_L = 2.5V, diff = 0V

### Termination Resistors

```
      120Ω                    120Ω
CAN_H ──\/\/\──────────────────\/\/\───
        |                          |
CAN_L ──\/\/\──────────────────\/\/\───
      Node1                      NodeN
      
// Termination resistors eliminate signal reflection
```

## Data Link Layer

### Standard Frame Format (CAN 2.0A)

```
Field          Length    Description
─────────────────────────────────
SOF            1         Dominant, frame start
Arbitration
  ├─ ID        11        Message ID, lower = higher priority
  └─ RTR       1         Remote transmission request
Control
  ├─ IDE       1         Identifier extension
  ├─ Reserved  1
  └─ DLC       4         Data length code (0-8)
Data           0-64      Actual data (0-8 bytes)
CRC            16        Cyclic redundancy check
ACK            2         Acknowledge
EOF            7         Recessive, frame end
```

![CAN Frame Format](/images/can-bus.jpg)

### Arbitration Mechanism

```
Node A: ID = 0x123 (0 0010 0100 011)
       ↓↓↓↓↓↓↓↓↓↓↓
Bus:   0 0010 0100 011...
       ↓↓↓↓↓↓↓↓↓↓↓
Node B: ID = 0x156 (0 0010 1010 110)
                 ↑
                 Difference here, Node B detects dominant, stops

Result: Node A wins arbitration, continues transmission
```

## STM32 CAN Programming

### Initialization

```c
#include "stm32f1xx_hal.h"

CAN_HandleTypeDef hcan;

void CAN_Init(void) {
    // Enable clocks
    __HAL_RCC_CAN1_CLK_ENABLE();
    __HAL_RCC_GPIOA_CLK_ENABLE();
    
    // GPIO config PA11-CAN_RX, PA12-CAN_TX
    GPIO_InitTypeDef GPIO_InitStruct = {0};
    GPIO_InitStruct.Pin = GPIO_PIN_11;
    GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
    GPIO_InitStruct.Pull = GPIO_PULLUP;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
    
    GPIO_InitStruct.Pin = GPIO_PIN_12;
    GPIO_InitStruct.Mode = GPIO_MODE_AF_PP;
    GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_HIGH;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
    
    // CAN init
    hcan.Instance = CAN1;
    hcan.Init.Prescaler = 9;
    hcan.Init.Mode = CAN_MODE_NORMAL;
    hcan.Init.SyncJumpWidth = CAN_SJW_1TQ;
    hcan.Init.TimeSeg1 = CAN_BS1_13TQ;
    hcan.Init.TimeSeg2 = CAN_BS2_2TQ;
    // Baud rate = 36MHz / 9 / (1+13+2) = 250Kbps
    HAL_CAN_Init(&hcan);
    
    // Filter config - accept all
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

### Sending Data

```c
void CAN_Send(uint16_t id, uint8_t *data, uint8_t len) {
    CAN_TxHeaderTypeDef TxHeader = {0};
    uint8_t TxData[8];
    uint32_t TxMailbox;
    
    TxHeader.StdId = id;
    TxHeader.ExtId = 0;
    TxHeader.IDE = CAN_ID_STD;
    TxHeader.RTR = CAN_RTR_DATA;
    TxHeader.DLC = len;
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
```

### Receiving Data (Interrupt)

```c
void CAN_StartReception(void) {
    HAL_CAN_ActivateNotification(&hcan, CAN_IT_RX_FIFO0_MSG_PENDING);
    HAL_CAN_Start(&hcan);
}

void HAL_CAN_RxFifo0MsgPendingCallback(CAN_HandleTypeDef *hcan) {
    CAN_RxHeaderTypeDef RxHeader;
    uint8_t RxData[8];
    
    if(HAL_CAN_GetRxMessage(hcan, CAN_RX_FIFO0, &RxHeader, RxData) == HAL_OK) {
        printf("CAN RX: ID=0x%03X, ", RxHeader.StdId);
        for(int i=0; i<RxHeader.DLC; i++) {
            printf("%02X ", RxData[i]);
        }
        printf("\n");
    }
}
```

## CAN FD (Flexible Data Rate)

### Advantages

```
              CAN 2.0       CAN FD
Data length   8 bytes       64 bytes
Data bitrate  1 Mbps        8 Mbps
Efficiency    ~50%          ~85%
```

### Frame Format

```
Arbitration: Fixed 1Mbps (for reliable arbitration)
       ↓
Control: BRS (Bit Rate Switch)
       ↓
Data: Up to 8Mbps (for efficiency)
       ↓
CRC: Back to 1Mbps
```

## Summary

CAN bus design essentials:

1. **Physical**: Twisted pair, 120Ω termination, differential signaling
2. **Arbitration**: Non-destructive, lower ID = higher priority
3. **Reliability**: CRC, ACK, error detection, auto-retransmit
4. **Baud rate**: All nodes must match
5. **Wiring**: Short stubs, hand-in-hand topology
