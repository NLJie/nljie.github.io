import type { Category } from '@/types/note';

// 嵌入式技术分类体系
export const categories: Category[] = [
  // ========== 硬件平台 ==========
  {
    id: 'mcu',
    slug: 'mcu',
    icon: 'Cpu',
    zh: { 
      name: '单片机/MCU', 
      description: 'STM32、ESP32、Arduino、树莓派 Pico 等微控制器开发' 
    },
    en: { 
      name: 'MCU', 
      description: 'STM32, ESP32, Arduino, Raspberry Pi Pico development' 
    },
  },
  {
    id: 'mpu',
    slug: 'mpu',
    icon: 'Microchip',
    zh: { 
      name: '嵌入式处理器', 
      description: 'ARM Cortex-A、RISC-V、树莓派、全志、瑞芯微等 Linux 嵌入式平台' 
    },
    en: { 
      name: 'Embedded MPU', 
      description: 'ARM Cortex-A, RISC-V, Raspberry Pi, Allwinner, Rockchip Linux platforms' 
    },
  },
  {
    id: 'fpga',
    slug: 'fpga',
    icon: 'Grid3x3',
    zh: { 
      name: 'FPGA/Verilog', 
      description: 'Xilinx、Altera、Lattice FPGA 开发，Verilog/VHDL 数字电路设计' 
    },
    en: { 
      name: 'FPGA/Verilog', 
      description: 'Xilinx, Altera, Lattice FPGA, Verilog/VHDL digital design' 
    },
  },

  // ========== 嵌入式软件 ==========
  {
    id: 'rtos',
    slug: 'rtos',
    icon: 'Timer',
    zh: { 
      name: '实时操作系统', 
      description: 'FreeRTOS、RT-Thread、Zephyr、μC/OS 等 RTOS 原理与移植' 
    },
    en: { 
      name: 'RTOS', 
      description: 'FreeRTOS, RT-Thread, Zephyr, μC/OS principles and porting' 
    },
  },
  {
    id: 'embedded-linux',
    slug: 'embedded-linux',
    icon: 'Terminal',
    zh: { 
      name: '嵌入式 Linux', 
      description: 'Linux 内核移植、驱动开发、Buildroot/Yocto、设备树' 
    },
    en: { 
      name: 'Embedded Linux', 
      description: 'Linux kernel porting, driver development, Buildroot/Yocto, device tree' 
    },
  },
  {
    id: 'firmware',
    slug: 'firmware',
    icon: 'FileCode',
    zh: { 
      name: '固件开发', 
      description: 'Bare-metal 编程、启动代码、链接脚本、Bootloader' 
    },
    en: { 
      name: 'Firmware', 
      description: 'Bare-metal programming, startup code, linker scripts, Bootloader' 
    },
  },

  // ========== 通信协议 ==========
  {
    id: 'protocols',
    slug: 'protocols',
    icon: 'Network',
    zh: { 
      name: '通信协议', 
      description: 'CAN/CANFD、Modbus、RS485、I2C、SPI、UART、USB、Ethernet、BLE、LoRa' 
    },
    en: { 
      name: 'Protocols', 
      description: 'CAN/CANFD, Modbus, RS485, I2C, SPI, UART, USB, Ethernet, BLE, LoRa' 
    },
  },
  {
    id: 'network',
    slug: 'network',
    icon: 'Wifi',
    zh: { 
      name: '网络通信', 
      description: 'TCP/IP、MQTT、CoAP、HTTP、Socket、LwIP、网络栈配置' 
    },
    en: { 
      name: 'Networking', 
      description: 'TCP/IP, MQTT, CoAP, HTTP, Socket, LwIP, network stack' 
    },
  },

  // ========== 开发工具 ==========
  {
    id: 'tools',
    slug: 'tools',
    icon: 'Wrench',
    zh: { 
      name: '开发工具', 
      description: 'Keil、IAR、VS Code、PlatformIO、OpenOCD、JTAG/SWD 调试' 
    },
    en: { 
      name: 'Tools', 
      description: 'Keil, IAR, VS Code, PlatformIO, OpenOCD, JTAG/SWD debugging' 
    },
  },
  {
    id: 'hardware-design',
    slug: 'hardware-design',
    icon: 'CircuitBoard',
    zh: { 
      name: '硬件设计', 
      description: 'Altium Designer、KiCad、PCB Layout、电路设计、信号完整性' 
    },
    en: { 
      name: 'Hardware Design', 
      description: 'Altium Designer, KiCad, PCB Layout, circuit design, signal integrity' 
    },
  },

  // ========== 应用领域 ==========
  {
    id: 'automotive',
    slug: 'automotive',
    icon: 'Car',
    zh: { 
      name: '汽车电子', 
      description: '汽车总线、ECU、功能安全、Autosar、诊断协议 UDS' 
    },
    en: { 
      name: 'Automotive', 
      description: 'Automotive bus, ECU, functional safety, Autosar, UDS diagnostics' 
    },
  },
  {
    id: 'iot',
    slug: 'iot',
    icon: 'Radio',
    zh: { 
      name: '物联网/IoT', 
      description: '传感器、边缘计算、云平台对接、OTA升级、低功耗设计' 
    },
    en: { 
      name: 'IoT', 
      description: 'Sensors, edge computing, cloud integration, OTA, low power design' 
    },
  },
  {
    id: 'industrial',
    slug: 'industrial',
    icon: 'Factory',
    zh: { 
      name: '工业控制', 
      description: 'PLC、运动控制、PID算法、工业以太网、机器视觉' 
    },
    en: { 
      name: 'Industrial', 
      description: 'PLC, motion control, PID algorithms, industrial Ethernet, machine vision' 
    },
  },

  // ========== 编程与算法 ==========
  {
    id: 'embedded-c',
    slug: 'embedded-c',
    icon: 'Code',
    zh: { 
      name: '嵌入式 C/C++', 
      description: '嵌入式编程规范、内存管理、中断处理、代码优化' 
    },
    en: { 
      name: 'Embedded C/C++', 
      description: 'Embedded coding standards, memory management, interrupts, optimization' 
    },
  },
  {
    id: 'algorithms',
    slug: 'algorithms',
    icon: 'Calculator',
    zh: { 
      name: '算法与数据结构', 
      description: '滤波算法、数字信号处理、控制算法、常用数据结构' 
    },
    en: { 
      name: 'Algorithms', 
      description: 'Filter algorithms, DSP, control algorithms, data structures' 
    },
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};

// 获取主分类（用于首页展示）
export const getMainCategories = (): Category[] => {
  return categories.slice(0, 6); // 前6个作为主要分类
};

// 分类分组（用于分类页面）
export const categoryGroups = [
  { key: 'hardware', title: '硬件平台', slugs: ['mcu', 'mpu', 'fpga'] },
  { key: 'software', title: '嵌入式软件', slugs: ['rtos', 'embedded-linux', 'firmware'] },
  { key: 'communication', title: '通信与网络', slugs: ['protocols', 'network'] },
  { key: 'tools', title: '工具与设计', slugs: ['tools', 'hardware-design'] },
  { key: 'application', title: '应用领域', slugs: ['automotive', 'iot', 'industrial'] },
  { key: 'programming', title: '编程与算法', slugs: ['embedded-c', 'algorithms'] },
];
