# FreeRTOS Real-Time Operating System Basics

## What is RTOS

RTOS (Real-Time Operating System) is designed for real-time applications, ensuring tasks complete within deterministic time constraints.

![FreeRTOS Architecture](/images/freertos.jpg)

## Why FreeRTOS

- **Open Source**: MIT license, commercial use allowed
- **Lightweight**: Minimum 4-9KB ROM
- **Portable**: Supports 35+ processor architectures
- **Widely Used**: AWS, Tesla, and more

## Core Concepts

### Tasks

In FreeRTOS, a task is the basic unit of execution:

```c
// Task function prototype
void vTaskFunction(void *pvParameters) {
    while(1) {
        // Task body
        printf("Task running\n");
        
        // Delay 1000 ticks
        vTaskDelay(pdMS_TO_TICKS(1000));
    }
}

// Create task
int main(void) {
    xTaskCreate(
        vTaskFunction,      // Task function
        "TaskName",         // Task name
        256,                // Stack size (words)
        NULL,               // Parameter
        1,                  // Priority
        NULL                // Task handle
    );
    
    vTaskStartScheduler();  // Start scheduler
    return 0;
}
```

### Task States

```
Running ←────────────────┐
     ↓                   │
Ready ←──────────────────┤←── Scheduler selects highest priority
     ↓                   │
Blocked ─────────────────┘
(waiting delay/semaphore/event)
     ↓
Suspended
(vTaskSuspend called)
```

![Task State Machine](/images/freertos.jpg)

## Task Scheduling

### Preemptive Priority Scheduling

```c
// Create tasks with different priorities
void vHighPriorityTask(void *pv) {
    while(1) {
        printf("High priority task\n");
        vTaskDelay(1);  // Yield CPU
    }
}

void vLowPriorityTask(void *pv) {
    while(1) {
        printf("Low priority task\n");
        // Without delay, high priority can't run
        vTaskDelay(1);
    }
}

// Higher number = higher priority
xTaskCreate(vHighPriorityTask, "High", 128, NULL, 2, NULL);
xTaskCreate(vLowPriorityTask, "Low", 128, NULL, 1, NULL);
```

## Synchronization

### Binary Semaphore

```c
SemaphoreHandle_t xBinarySemaphore;

void vProducerTask(void *pv) {
    while(1) {
        // Produce data
        xSemaphoreGive(xBinarySemaphore);  // Release semaphore
        vTaskDelay(pdMS_TO_TICKS(100));
    }
}

void vConsumerTask(void *pv) {
    while(1) {
        // Wait for semaphore
        if(xSemaphoreTake(xBinarySemaphore, portMAX_DELAY) == pdTRUE) {
            printf("Data received\n");
        }
    }
}
```

### Mutex

```c
SemaphoreHandle_t xMutex;
int sharedResource = 0;

void vSafeAccessTask(void *pv) {
    while(1) {
        // Take mutex
        if(xSemaphoreTake(xMutex, portMAX_DELAY) == pdTRUE) {
            // Critical section - access shared resource
            sharedResource++;
            
            // Release mutex
            xSemaphoreGive(xMutex);
        }
    }
}
```

![Synchronization](/images/freertos.jpg)

## Queue Communication

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
        
        // Send to queue (wait 100ms)
        xQueueSend(xQueue, &data, pdMS_TO_TICKS(100));
        
        vTaskDelay(pdMS_TO_TICKS(50));
    }
}

void vProcessTask(void *pv) {
    SensorData_t receivedData;
    while(1) {
        // Receive from queue (wait forever)
        if(xQueueReceive(xQueue, &receivedData, portMAX_DELAY) == pdTRUE) {
            printf("Sensor %d: %d at %lu\n", 
                   receivedData.sensorId,
                   receivedData.value,
                   receivedData.timestamp);
        }
    }
}
```

## Interrupt and Task Interaction

```c
// Interrupt service routine
void TIM2_IRQHandler(void) {
    BaseType_t xHigherPriorityTaskWoken = pdFALSE;
    
    // Give semaphore from ISR
    xSemaphoreGiveFromISR(xBinarySemaphore, &xHigherPriorityTaskWoken);
    
    // Context switch if higher priority task ready
    portYIELD_FROM_ISR(xHigherPriorityTaskWoken);
}
```

## Memory Management

FreeRTOS provides 5 heap management schemes:

| Scheme | Characteristics | Use Case |
|--------|-----------------|----------|
| Heap_1 | Allocate only, no free | Apps without task deletion |
| Heap_2 | Best fit (fragmentation) | Not recommended |
| Heap_3 | Uses C library malloc | Simple porting |
| Heap_4 | First fit + coalesce | **Recommended** |
| Heap_5 | Heap_4 + multiple regions | Multiple RAM blocks |

```c
// Heap_4 usage
void *ptr = pvPortMalloc(100);  // Allocate
vPortFree(ptr);                  // Free

// Check heap info
size_t freeHeap = xPortGetFreeHeapSize();
size_t minFreeHeap = xPortGetMinimumEverFreeHeapSize();
```

![Memory Allocation](/images/freertos.jpg)

## Low Power Design

```c
// Enable Tickless mode
#define configUSE_TICKLESS_IDLE  1
#define configEXPECTED_IDLE_TIME_BEFORE_SLEEP 2

// Configure idle hook for sleep
void vApplicationIdleHook(void) {
    // Check if can enter sleep
    if(canEnterSleep()) {
        __WFI();  // Wait for interrupt
    }
}
```

## Debugging Tips

### View Task Status

```c
// Print task list
void vPrintTaskList(void) {
    char buffer[512];
    vTaskList(buffer);
    printf("Task Name    State  Priority  Stack\n");
    printf("%s\n", buffer);
}

// Output example:
// TaskName    X   2   120
// IDLE        R   0   60
// Tmr Svc     B   5   80
```

### Runtime Statistics

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

## Common Issues

### 1. Stack Overflow
- Use `uxTaskGetStackHighWaterMark()` to check stack usage
- Enable `configCHECK_FOR_STACK_OVERFLOW`
- Increase task stack size appropriately

### 2. Priority Inversion
- Use mutex instead of binary semaphore for resource protection
- FreeRTOS mutex has priority inheritance

### 3. Interrupt Latency
- ISR only sets flags, actual processing in tasks
- Use `FromISR` suffix APIs

## Summary

FreeRTOS key points:

1. **Tasks** - Independent threads with separate stacks
2. **Scheduler** - Preemptive priority + time slicing
3. **Sync** - Semaphores, mutexes, event groups
4. **Comm** - Queues, stream buffers, message buffers
5. **Interrupts** - Use FromISR version APIs
