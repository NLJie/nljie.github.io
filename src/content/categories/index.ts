import type { Category } from '@/types/note';

// ============================================
// 多级分类体系（树形结构）
// ============================================

export const categoryTree: Category[] = [
  {
    id: 'hardware',
    slug: 'hardware',
    icon: 'Cpu',
    order: 1,
    zh: { name: '硬件', description: '硬件平台与芯片' },
    en: { name: 'Hardware', description: 'Hardware platforms and chips' },
    children: [
      {
        id: 'mcu',
        slug: 'mcu',
        icon: 'Cpu',
        parentId: 'hardware',
        order: 1,
        zh: { name: '单片机/MCU', description: 'STM32、ESP32、Arduino 等微控制器' },
        en: { name: 'MCU', description: 'STM32, ESP32, Arduino microcontrollers' },
        children: [
          { id: 'stm32', slug: 'stm32', icon: 'Cpu', parentId: 'mcu', order: 1, zh: { name: 'STM32', description: '意法半导体 ARM Cortex-M' }, en: { name: 'STM32', description: 'ST ARM Cortex-M' } },
          { id: 'esp32', slug: 'esp32', icon: 'Wifi', parentId: 'mcu', order: 2, zh: { name: 'ESP32', description: '乐鑫 WiFi/蓝牙芯片' }, en: { name: 'ESP32', description: 'Espressif WiFi/Bluetooth' } },
          { id: 'gd32', slug: 'gd32', icon: 'Microchip', parentId: 'mcu', order: 3, zh: { name: 'GD32', description: '兆易创新 MCU' }, en: { name: 'GD32', description: 'GigaDevice MCU' } },
        ]
      },
      {
        id: 'mpu',
        slug: 'mpu',
        icon: 'Microchip',
        parentId: 'hardware',
        order: 2,
        zh: { name: '嵌入式处理器', description: 'ARM Cortex-A、RISC-V Linux 平台' },
        en: { name: 'MPU', description: 'ARM Cortex-A, RISC-V Linux platforms' },
        children: [
          { id: 'raspberry-pi', slug: 'raspberry-pi', icon: 'CircuitBoard', parentId: 'mpu', order: 1, zh: { name: '树莓派', description: 'Raspberry Pi 开发' }, en: { name: 'Raspberry Pi', description: 'Raspberry Pi development' } },
          { id: 'rockchip', slug: 'rockchip', icon: 'Microchip', parentId: 'mpu', order: 2, zh: { name: '瑞芯微', description: 'RK3566/RK3588 等' }, en: { name: 'Rockchip', description: 'RK3566/RK3588 etc.' } },
        ]
      },
      {
        id: 'fpga',
        slug: 'fpga',
        icon: 'Grid3x3',
        parentId: 'hardware',
        order: 3,
        zh: { name: 'FPGA', description: 'Xilinx、Altera 可编程逻辑' },
        en: { name: 'FPGA', description: 'Xilinx, Altera programmable logic' },
      },
    ]
  },
  {
    id: 'software',
    slug: 'software',
    icon: 'Code',
    order: 2,
    zh: { name: '软件', description: '嵌入式软件开发' },
    en: { name: 'Software', description: 'Embedded software development' },
    children: [
      {
        id: 'rtos',
        slug: 'rtos',
        icon: 'Timer',
        parentId: 'software',
        order: 1,
        zh: { name: '实时操作系统', description: 'FreeRTOS、RT-Thread、Zephyr' },
        en: { name: 'RTOS', description: 'FreeRTOS, RT-Thread, Zephyr' },
        children: [
          { id: 'freertos', slug: 'freertos', icon: 'Timer', parentId: 'rtos', order: 1, zh: { name: 'FreeRTOS', description: '开源实时操作系统' }, en: { name: 'FreeRTOS', description: 'Open source RTOS' } },
          { id: 'rt-thread', slug: 'rt-thread', icon: 'Timer', parentId: 'rtos', order: 2, zh: { name: 'RT-Thread', description: '国产实时操作系统' }, en: { name: 'RT-Thread', description: 'Chinese RTOS' } },
        ]
      },
      {
        id: 'embedded-linux',
        slug: 'embedded-linux',
        icon: 'Terminal',
        parentId: 'software',
        order: 2,
        zh: { name: '嵌入式 Linux', description: '内核、驱动、Yocto' },
        en: { name: 'Embedded Linux', description: 'Kernel, drivers, Yocto' },
        children: [
          { id: 'linux-kernel', slug: 'linux-kernel', icon: 'Terminal', parentId: 'embedded-linux', order: 1, zh: { name: '内核移植', description: 'Linux 内核裁剪与移植' }, en: { name: 'Kernel Porting', description: 'Linux kernel customization' } },
          { id: 'linux-driver', slug: 'linux-driver', icon: 'Terminal', parentId: 'embedded-linux', order: 2, zh: { name: '驱动开发', description: '字符设备、块设备、网络驱动' }, en: { name: 'Driver Dev', description: 'Character, block, network drivers' } },
        ]
      },
      {
        id: 'firmware',
        slug: 'firmware',
        icon: 'FileCode',
        parentId: 'software',
        order: 3,
        zh: { name: '固件开发', description: 'Bare-metal、Bootloader' },
        en: { name: 'Firmware', description: 'Bare-metal, Bootloader' },
      },
    ]
  },
  {
    id: 'protocols',
    slug: 'protocols',
    icon: 'Network',
    order: 3,
    zh: { name: '协议', description: '通信协议与接口' },
    en: { name: 'Protocols', description: 'Communication protocols' },
    children: [
      {
        id: 'fieldbus',
        slug: 'fieldbus',
        icon: 'Network',
        parentId: 'protocols',
        order: 1,
        zh: { name: '现场总线', description: 'CAN、Modbus、RS485' },
        en: { name: 'Fieldbus', description: 'CAN, Modbus, RS485' },
        children: [
          { id: 'can', slug: 'can', icon: 'Network', parentId: 'fieldbus', order: 1, zh: { name: 'CAN 总线', description: '控制器局域网通信' }, en: { name: 'CAN Bus', description: 'Controller Area Network' } },
          { id: 'modbus', slug: 'modbus', icon: 'Network', parentId: 'fieldbus', order: 2, zh: { name: 'Modbus', description: '工业通信协议' }, en: { name: 'Modbus', description: 'Industrial protocol' } },
        ]
      },
      {
        id: 'wireless',
        slug: 'wireless',
        icon: 'Wifi',
        parentId: 'protocols',
        order: 2,
        zh: { name: '无线通信', description: 'BLE、LoRa、Zigbee' },
        en: { name: 'Wireless', description: 'BLE, LoRa, Zigbee' },
      },
      {
        id: 'network-stack',
        slug: 'network-stack',
        icon: 'Globe',
        parentId: 'protocols',
        order: 3,
        zh: { name: '网络协议', description: 'TCP/IP、MQTT、LwIP' },
        en: { name: 'Network', description: 'TCP/IP, MQTT, LwIP' },
      },
    ]
  },
  {
    id: 'tools',
    slug: 'tools',
    icon: 'Wrench',
    order: 4,
    zh: { name: '工具', description: '开发工具与调试' },
    en: { name: 'Tools', description: 'Development tools' },
    children: [
      { id: 'ide', slug: 'ide', icon: 'Code', parentId: 'tools', order: 1, zh: { name: 'IDE', description: 'Keil、IAR、VS Code' }, en: { name: 'IDE', description: 'Keil, IAR, VS Code' } },
      { id: 'debug', slug: 'debug', icon: 'Bug', parentId: 'tools', order: 2, zh: { name: '调试工具', description: 'JTAG、SWD、逻辑分析仪' }, en: { name: 'Debug', description: 'JTAG, SWD, Logic Analyzer' } },
    ]
  },
  {
    id: 'hardware-design',
    slug: 'hardware-design',
    icon: 'CircuitBoard',
    order: 5,
    zh: { name: '硬件设计', description: 'PCB 与电路设计' },
    en: { name: 'Hardware Design', description: 'PCB and circuit design' },
    children: [
      { id: 'pcb', slug: 'pcb', icon: 'CircuitBoard', parentId: 'hardware-design', order: 1, zh: { name: 'PCB 设计', description: 'Layout、布线、信号完整性' }, en: { name: 'PCB Design', description: 'Layout, routing, SI' } },
      { id: 'eda', slug: 'eda', icon: 'Layout', parentId: 'hardware-design', order: 2, zh: { name: 'EDA 工具', description: 'Altium、KiCad、Cadence' }, en: { name: 'EDA Tools', description: 'Altium, KiCad, Cadence' } },
    ]
  },
  {
    id: 'application',
    slug: 'application',
    icon: 'Factory',
    order: 6,
    zh: { name: '应用', description: '行业应用方案' },
    en: { name: 'Applications', description: 'Industry solutions' },
    children: [
      { id: 'automotive', slug: 'automotive', icon: 'Car', parentId: 'application', order: 1, zh: { name: '汽车电子', description: 'CAN、UDS、AutoSAR' }, en: { name: 'Automotive', description: 'CAN, UDS, AutoSAR' } },
      { id: 'iot', slug: 'iot', icon: 'Radio', parentId: 'application', order: 2, zh: { name: '物联网', description: '传感器、边缘计算、OTA' }, en: { name: 'IoT', description: 'Sensors, edge computing, OTA' } },
      { id: 'industrial', slug: 'industrial', icon: 'Factory', parentId: 'application', order: 3, zh: { name: '工业控制', description: 'PLC、运动控制、PID' }, en: { name: 'Industrial', description: 'PLC, motion control, PID' } },
    ]
  },
];

// ============================================
// 扁平化列表（用于查找）
// ============================================

// 递归提取所有分类为扁平数组
export function flattenCategories(categories: Category[]): Category[] {
  const result: Category[] = [];
  
  function traverse(cats: Category[]) {
    for (const cat of cats) {
      result.push(cat);
      if (cat.children) {
        traverse(cat.children);
      }
    }
  }
  
  traverse(categories);
  return result;
}

// 所有分类的扁平列表
export const categories = flattenCategories(categoryTree);

// 根据 slug 查找分类
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};

// 获取一级分类
export const getRootCategories = (): Category[] => {
  return categoryTree.sort((a, b) => (a.order || 0) - (b.order || 0));
};

// 获取子分类
export const getChildCategories = (parentSlug: string): Category[] => {
  const parent = getCategoryBySlug(parentSlug);
  return parent?.children?.sort((a, b) => (a.order || 0) - (b.order || 0)) || [];
};
