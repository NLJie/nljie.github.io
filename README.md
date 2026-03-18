# 嵌入式技术笔记

基于 React + TypeScript + Vite 构建的嵌入式技术知识库网站。

## 特性

- 📝 Markdown 笔记管理，支持中英文
- 🏷️ 多维度分类（硬件/软件/协议/工具等）
- 🔍 全文搜索与筛选
- 🌐 中英文切换
- 📱 响应式设计
- ⚡ 轻量级 Markdown 渲染

## 技术栈

- **框架**: React 19 + TypeScript
- **构建**: Vite 7
- **样式**: Tailwind CSS + shadcn/ui
- **路由**: React Router DOM
- **国际化**: i18next

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 部署到 GitHub Pages
npm run deploy
```

---

## 📁 笔记文件组织方式

### 目录结构（支持子目录）

```
src/content/notes/markdown/
├── mcu/                          # 单片机
│   ├── stm32/                    # STM32 系列
│   │   ├── getting-started.zh.md
│   │   ├── getting-started.en.md
│   │   └── ...
│   ├── esp32/                    # ESP32 系列
│   └── gd32/                     # 兆易创新
├── rtos/                         # 实时操作系统
│   ├── freertos/
│   ├── rt-thread/
│   └── zephyr/
├── protocols/                    # 通信协议
│   ├── can/
│   ├── modbus/
│   └── ethernet/
├── hardware-design/              # 硬件设计
│   ├── pcb/
│   └── altium/
├── tools/                        # 开发工具
│   ├── keil/
│   └── vscode/
└── ...
```

### 文件命名规范

```
<slug>.<lang>.md

示例：
├── stm32-getting-started.zh.md    # 中文版
├── stm32-getting-started.en.md    # 英文版
├── can-bus-protocol.zh.md
└── can-bus-protocol.en.md
```

---

## 🚀 添加新笔记的步骤

### 方式一：手动添加（推荐少量笔记）

1. **创建 Markdown 文件**

   在对应分类目录下创建文件：
   ```bash
   # 示例：添加 STM32 GPIO 教程
   touch src/content/notes/markdown/mcu/stm32/gpio-guide.zh.md
   touch src/content/notes/markdown/mcu/stm32/gpio-guide.en.md
   ```

2. **编写 Markdown 内容**

   ```markdown
   ## GPIO 基础

   STM32 的 GPIO 可以配置为多种模式...

   ```c
   GPIO_InitTypeDef GPIO_InitStruct = {0};
   GPIO_InitStruct.Pin = GPIO_PIN_5;
   GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
   HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
   ```

   ![GPIO 结构](/images/gpio.jpg)
   ```

3. **在 index.ts 中注册**

   ```typescript
   // 1. 导入文件
   import mcu_stm32_gpio_guide_zh from './markdown/mcu/stm32/gpio-guide.zh.md?raw';
   import mcu_stm32_gpio_guide_en from './markdown/mcu/stm32/gpio-guide.en.md?raw';

   // 2. 添加到 notes 数组
   export const notes: Note[] = [
     {
       id: '15',                          // 唯一 ID
       slug: 'gpio-guide',                // URL 标识
       status: 'published',               // published 或 draft
       category: 'mcu',                   // 分类 slug
       tags: ['STM32', 'GPIO', 'HAL'],    // 标签
       createdAt: '2024-04-10',
       updatedAt: '2024-04-10',
       zh: {
         title: 'STM32 GPIO 完全指南',
         summary: '从寄存器到 HAL 库，全面掌握 STM32 GPIO 配置。',
         content: mcu_stm32_gpio_guide_zh
       },
       en: {
         title: 'STM32 GPIO Complete Guide',
         summary: 'From registers to HAL library, master STM32 GPIO configuration.',
         content: mcu_stm32_gpio_guide_en
       }
     },
     // ... 其他笔记
   ];
   ```

### 方式二：使用脚本批量生成（推荐大量笔记）

当有大量 Markdown 文件时，使用脚本自动生成导入语句：

```bash
# 运行脚本
node scripts/generate-imports.cjs
```

脚本会：
1. 扫描 `markdown/` 目录下的所有 `.md` 文件
2. 自动生成合法的 import 语句
3. 生成笔记对象模板（含 TODO 标记）
4. 保存到 `src/content/notes/generated-imports.ts`

**使用步骤：**

1. 把你的 Markdown 文件放入对应子目录
2. 运行脚本生成模板
3. 复制生成的导入语句到 `index.ts`
4. 修改 TODO 项（status, tags, title, summary）

---

## 📂 分类体系

当前支持以下分类（在 `src/content/categories/index.ts` 中配置）：

| 分类 | slug | 说明 |
|------|------|------|
| 单片机/MCU | mcu | STM32、ESP32、Arduino |
| 嵌入式处理器 | mpu | ARM Cortex-A、RISC-V、Linux 嵌入式 |
| FPGA | fpga | Verilog/VHDL、数字电路设计 |
| 实时操作系统 | rtos | FreeRTOS、RT-Thread、Zephyr |
| 嵌入式 Linux | embedded-linux | 内核移植、驱动开发、Yocto |
| 固件开发 | firmware | Bare-metal、Bootloader |
| 通信协议 | protocols | CAN、Modbus、RS485、I2C、SPI |
| 网络通信 | network | TCP/IP、MQTT、LwIP |
| 开发工具 | tools | Keil、IAR、VS Code、OpenOCD |
| 硬件设计 | hardware-design | PCB Layout、Altium、KiCad |
| 汽车电子 | automotive | CAN、UDS、AutoSAR |
| 物联网 | iot | 传感器、边缘计算、OTA |
| 工业控制 | industrial | PLC、运动控制、PID |
| 嵌入式 C/C++ | embedded-c | 编程规范、内存管理、优化 |
| 算法 | algorithms | 滤波、DSP、控制算法 |

---

## 📝 Markdown 语法支持

- 标准 Markdown（标题、列表、链接、表格等）
- 代码块（支持语法高亮）
- **加粗**、*斜体*、`行内代码`
- 图片（支持本地图片，放在 `public/images/`）

```markdown
## 标题

- 列表项
- **加粗文字**
- `code`

```c
// 代码块
printf("Hello STM32!\n");
```

![图片描述](/images/example.jpg)
```

---

## 🖼 图片管理

### 本地图片

1. 把图片放入 `public/images/` 目录
2. 在 Markdown 中使用绝对路径引用：
   ```markdown
   ![STM32 开发板](/images/stm32.jpg)
   ```

### 图片命名规范

```
<category>-<description>.<ext>

示例：
├── stm32-gpio.jpg
├── freertos-task-state.png
├── can-bus-waveform.gif
└── pcb-layout.png
```

---

## 📦 部署

```bash
# 构建并部署到 GitHub Pages
npm run deploy
```

部署脚本会：
1. 运行 `npm run build` 构建项目
2. 将 `dist` 目录重命名为 `docs`
3. 提交并推送到 GitHub

---

## 📄 项目结构

```
app/
├── public/
│   └── images/              # 笔记图片
├── src/
│   ├── components/          # UI 组件
│   ├── pages/               # 页面组件
│   ├── content/
│   │   ├── notes/           # 笔记数据
│   │   │   ├── index.ts     # 笔记注册入口
│   │   │   └── markdown/    # Markdown 文件
│   │   └── categories/      # 分类配置
│   └── i18n/                # 国际化
├── scripts/
│   └── generate-imports.cjs # 批量生成脚本
├── docs/                    # 构建输出（GitHub Pages）
└── README.md
```

---

## 🛠 常见问题

### 1. 导入 Markdown 文件报错？

确保使用 `?raw` 后缀：
```typescript
import content from './markdown/file.zh.md?raw';
```

### 2. 图片不显示？

- 检查图片是否在 `public/images/` 目录
- 使用绝对路径 `/images/xxx.jpg`
- 构建后确认图片已复制到 `docs/images/`

### 3. 如何修改分类？

编辑 `src/content/categories/index.ts` 添加新分类，并在 `src/pages/` 中的图标映射中添加对应图标。

---

## 📄 License

MIT
