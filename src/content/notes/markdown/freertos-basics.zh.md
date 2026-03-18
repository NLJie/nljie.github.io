# FreeRTOS 实时操作系统入门

## 什么是 RTOS

RTOS（Real-Time Operating System）是专为实时应用设计的操作系统，能够保证任务在确定的时间内完成响应。

![FreeRTOS 架构](/images/freertos.jpg)

## 为什么选择 FreeRTOS

- **开源免费**：MIT 许可证，可商用
- **轻量级**：最小仅需 4-9KB ROM
- **可移植性**：支持 35+ 种处理器架构
- **广泛应用**：AWS、特斯拉等都在使用

## 核心概念

### 任务（Task）

FreeRTOS 中，任务是最基本的执行单元：

```c
// 任务函数原型
void vTaskFunction(void *pvParameters) {
    while(1) {
        // 任务主体
        printf("Task running\n");
        
        // 延时 1000 个 tick
        vTaskDelay(pdMS_TO_TICKS(1000));
    }
}

// 创建任务
int main(void) {
    xTaskCreate(
        vTaskFunction,      // 任务函数
        "TaskName",         // 任务名称
        256,                // 栈大小（字）
        NULL,               // 参数
        1,                  // 优先级
        NULL                // 任务句柄
    );
    
    vTaskStartScheduler();  // 启动调度器
    return 0;
}
```

### 任务状态

```
运行态(Running) ←────┐
     ↓               │
就绪态(Ready) ←──────┤←── 调度器选择最高优先级任务
     ↓               │
阻塞态(Blocked) ─────┘
（等待延时/信号量/事件）
     ↓
挂起态(Suspended)
（调用 vTaskSuspend）
```

![任务状态机](/images/freertos.jpg)

## 任务调度

### 优先级抢占式调度

```c
// 创建不同优先级的任务
void vHighPriorityTask(void *pv) {
    while(1) {
        printf("High priority task\n");
        vTaskDelay(1);  // 主动让出 CPU
    }
}

void vLowPriorityTask(void *pv) {
    while(1) {
        printf("Low priority task\n");
        // 如果不加延时，高优先级任务无法运行
        vTaskDelay(1);
    }
}

// 优先级数字越大，优先级越高
xTaskCreate(vHighPriorityTask, "High", 128, NULL, 2, NULL);
xTaskCreate(vLowPriorityTask, "Low", 128, NULL, 1, NULL);
```

## 同步机制

### 二值信号量

```c
SemaphoreHandle_t xBinarySemaphore;

void vProducerTask(void *pv) {
    while(1) {
        // 产生数据
        xSemaphoreGive(xBinarySemaphore);  // 释放信号量
        vTaskDelay(pdMS_TO_TICKS(100));
    }
}

void vConsumerTask(void *pv) {
    while(1) {
        // 等待信号量
        if(xSemaphoreTake(xBinarySemaphore, portMAX_DELAY) == pdTRUE) {
            printf("Data received\n");
        }
    }
}
```

### 互斥量（Mutex）

```c
SemaphoreHandle_t xMutex;
int sharedResource = 0;

void vSafeAccessTask(void *pv) {
    while(1) {
        // 获取互斥量
        if(xSemaphoreTake(xMutex, portMAX_DELAY) == pdTRUE) {
            // 临界区 - 访问共享资源
            sharedResource++;
            
            // 释放互斥量
            xSemaphoreGive(xMutex);
        }
    }
}
```

![同步机制](/images/freertos.jpg)

## 队列通信

```c
QueueHandle_t xQueue;

typedef struct {
    uint8_t sensorId;
    int16_t value;
    uint32_t timestamp;
} SensorData_t;

void vSensorTask(void *pv) {
    SensorData_t data;
    while(1) {
        data.sensorId = 1;
        data.value = read_sensor();
        data.timestamp = xTaskGetTickCount();
        
        // 发送到队列（等待 100ms）
        xQueueSend(xQueue, &data, pdMS_TO_TICKS(100));
        
        vTaskDelay(pdMS_TO_TICKS(50));
    }
}

void vProcessTask(void *pv) {
    SensorData_t receivedData;
    while(1) {
        // 从队列接收（永久等待）
        if(xQueueReceive(xQueue, &receivedData, portMAX_DELAY) == pdTRUE) {
            printf("Sensor %d: %d at %lu\n", 
                   receivedData.sensorId,
                   receivedData.value,
                   receivedData.timestamp);
        }
    }
}
```

## 中断与任务交互

```c
// 中断服务程序
void TIM2_IRQHandler(void) {
    BaseType_t xHigherPriorityTaskWoken = pdFALSE;
    
    // 从 ISR 释放信号量
    xSemaphoreGiveFromISR(xBinarySemaphore, &xHigherPriorityTaskWoken);
    
    // 上下文切换（如果有更高优先级任务就绪）
    portYIELD_FROM_ISR(xHigherPriorityTaskWoken);
}
```

## 内存管理

FreeRTOS 提供 5 种堆管理方案：

| 方案 | 特点 | 适用场景 |
|------|------|---------|
| Heap_1 | 只分配不释放 | 任务不删除的应用 |
| Heap_2 | 最佳匹配（有碎片） | 不推荐 |
| Heap_3 | 使用 C 库 malloc | 简单移植 |
| Heap_4 | 首次匹配 + 合并 | **推荐使用** |
| Heap_5 | Heap_4 + 多内存区 | 有多个 RAM 块 |

```c
// Heap_4 使用示例
void *ptr = pvPortMalloc(100);  // 分配
vPortFree(ptr);                  // 释放

// 查看堆信息
size_t freeHeap = xPortGetFreeHeapSize();
size_t minFreeHeap = xPortGetMinimumEverFreeHeapSize();
```

![内存分配](/images/freertos.jpg)

## 低功耗设计

```c
// 启用 Tickless 模式
#define configUSE_TICKLESS_IDLE  1
#define configEXPECTED_IDLE_TIME_BEFORE_SLEEP 2

// 配置进入睡眠的钩子函数
void vApplicationIdleHook(void) {
    // 检查是否可以进入睡眠
    if(canEnterSleep()) {
        __WFI();  // 等待中断唤醒
    }
}
```

## 调试技巧

### 查看任务状态

```c
// 打印任务列表
void vPrintTaskList(void) {
    char buffer[512];
    vTaskList(buffer);
    printf("Task Name    State  Priority  Stack\n");
    printf("%s\n", buffer);
}

// 输出示例：
// TaskName    X   2   120
// IDLE        R   0   60
// Tmr Svc     B   5   80
```

### 运行时统计

```c
#define configGENERATE_RUN_TIME_STATS 1
#define configUSE_TRACE_FACILITY 1

void vPrintRunTimeStats(void) {
    char buffer[512];
    vTaskGetRunTimeStats(buffer);
    printf("Task Name    Abs Time    %%Time\n");
    printf("%s\n", buffer);
}
```

## 常见问题

### 1. 栈溢出
- 使用 `uxTaskGetStackHighWaterMark()` 检查栈使用情况
- 启用 `configCHECK_FOR_STACK_OVERFLOW`
- 适当增加任务栈大小

### 2. 优先级反转
- 使用互斥量而非二值信号量保护资源
- FreeRTOS 互斥量有优先级继承机制

### 3. 中断延迟
- ISR 中只设置标志，具体处理在任务中完成
- 使用 `FromISR` 结尾的 API

## 总结

FreeRTOS 核心要点：

1. **任务** - 独立执行的线程，有独立栈
2. **调度器** - 优先级抢占 + 时间片轮转
3. **同步** - 信号量、互斥量、事件组
4. **通信** - 队列、流缓冲区、消息缓冲区
5. **中断** - 使用 FromISR 版本 API
