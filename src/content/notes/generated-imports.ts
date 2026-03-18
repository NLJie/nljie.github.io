import type { Note } from '@/types/note';

// 导入 Markdown 文件内容

import css_flexbox_en from './markdown/css-flexbox.en.md?raw';
import css_flexbox_zh from './markdown/css-flexbox.zh.md?raw';
import database_optimization_en from './markdown/database-optimization.en.md?raw';
import database_optimization_zh from './markdown/database-optimization.zh.md?raw';
import git_workflow_en from './markdown/git-workflow.en.md?raw';
import git_workflow_zh from './markdown/git-workflow.zh.md?raw';

import hardware_design_pcb_pcb_design_guide_en from './markdown/hardware-design/pcb/pcb-design-guide.en.md?raw';
import hardware_design_pcb_pcb_design_guide_zh from './markdown/hardware-design/pcb/pcb-design-guide.zh.md?raw';

import mcu_stm32_stm32_getting_started_en from './markdown/mcu/stm32/stm32-getting-started.en.md?raw';
import mcu_stm32_stm32_getting_started_zh from './markdown/mcu/stm32/stm32-getting-started.zh.md?raw';

import nodejs_performance_en from './markdown/nodejs-performance.en.md?raw';
import nodejs_performance_zh from './markdown/nodejs-performance.zh.md?raw';

import protocols_can_can_bus_protocol_en from './markdown/protocols/can/can-bus-protocol.en.md?raw';
import protocols_can_can_bus_protocol_zh from './markdown/protocols/can/can-bus-protocol.zh.md?raw';

import react_hooks_en from './markdown/react-hooks.en.md?raw';
import react_hooks_zh from './markdown/react-hooks.zh.md?raw';
import restful_api_en from './markdown/restful-api.en.md?raw';
import restful_api_zh from './markdown/restful-api.zh.md?raw';

import rtos_freertos_freertos_basics_en from './markdown/rtos/freertos/freertos-basics.en.md?raw';
import rtos_freertos_freertos_basics_zh from './markdown/rtos/freertos/freertos-basics.zh.md?raw';

import typescript_advanced_en from './markdown/typescript-advanced.en.md?raw';
import typescript_advanced_zh from './markdown/typescript-advanced.zh.md?raw';

// 笔记数据
export const notes: Note[] = [
  {
    id: '1',
    slug: 'css-flexbox',
    status: 'draft',  // TODO: 修改为 published
    category: 'uncategorized',
    tags: ['TODO'],  // TODO: 添加标签
    createdAt: '2026-03-18',
    updatedAt: '2026-03-18',
    zh: {
      title: 'TODO: 中文标题',
      summary: 'TODO: 中文摘要',
      content: css_flexbox_zh
    },
    en: {
      title: 'TODO: English Title',
      summary: 'TODO: English summary',
      content: css_flexbox_en
    }
  },

  {
    id: '2',
    slug: 'database-optimization',
    status: 'draft',  // TODO: 修改为 published
    category: 'uncategorized',
    tags: ['TODO'],  // TODO: 添加标签
    createdAt: '2026-03-18',
    updatedAt: '2026-03-18',
    zh: {
      title: 'TODO: 中文标题',
      summary: 'TODO: 中文摘要',
      content: database_optimization_zh
    },
    en: {
      title: 'TODO: English Title',
      summary: 'TODO: English summary',
      content: database_optimization_en
    }
  },

  {
    id: '3',
    slug: 'git-workflow',
    status: 'draft',  // TODO: 修改为 published
    category: 'uncategorized',
    tags: ['TODO'],  // TODO: 添加标签
    createdAt: '2026-03-18',
    updatedAt: '2026-03-18',
    zh: {
      title: 'TODO: 中文标题',
      summary: 'TODO: 中文摘要',
      content: git_workflow_zh
    },
    en: {
      title: 'TODO: English Title',
      summary: 'TODO: English summary',
      content: git_workflow_en
    }
  },

  {
    id: '4',
    slug: 'pcb-design-guide',
    status: 'draft',  // TODO: 修改为 published
    category: 'hardware-design',
    tags: ['TODO'],  // TODO: 添加标签
    createdAt: '2026-03-18',
    updatedAt: '2026-03-18',
    zh: {
      title: 'TODO: 中文标题',
      summary: 'TODO: 中文摘要',
      content: hardware_design_pcb_pcb_design_guide_zh
    },
    en: {
      title: 'TODO: English Title',
      summary: 'TODO: English summary',
      content: hardware_design_pcb_pcb_design_guide_en
    }
  },

  {
    id: '5',
    slug: 'stm32-getting-started',
    status: 'draft',  // TODO: 修改为 published
    category: 'mcu',
    tags: ['TODO'],  // TODO: 添加标签
    createdAt: '2026-03-18',
    updatedAt: '2026-03-18',
    zh: {
      title: 'TODO: 中文标题',
      summary: 'TODO: 中文摘要',
      content: mcu_stm32_stm32_getting_started_zh
    },
    en: {
      title: 'TODO: English Title',
      summary: 'TODO: English summary',
      content: mcu_stm32_stm32_getting_started_en
    }
  },

  {
    id: '6',
    slug: 'nodejs-performance',
    status: 'draft',  // TODO: 修改为 published
    category: 'uncategorized',
    tags: ['TODO'],  // TODO: 添加标签
    createdAt: '2026-03-18',
    updatedAt: '2026-03-18',
    zh: {
      title: 'TODO: 中文标题',
      summary: 'TODO: 中文摘要',
      content: nodejs_performance_zh
    },
    en: {
      title: 'TODO: English Title',
      summary: 'TODO: English summary',
      content: nodejs_performance_en
    }
  },

  {
    id: '7',
    slug: 'can-bus-protocol',
    status: 'draft',  // TODO: 修改为 published
    category: 'protocols',
    tags: ['TODO'],  // TODO: 添加标签
    createdAt: '2026-03-18',
    updatedAt: '2026-03-18',
    zh: {
      title: 'TODO: 中文标题',
      summary: 'TODO: 中文摘要',
      content: protocols_can_can_bus_protocol_zh
    },
    en: {
      title: 'TODO: English Title',
      summary: 'TODO: English summary',
      content: protocols_can_can_bus_protocol_en
    }
  },

  {
    id: '8',
    slug: 'react-hooks',
    status: 'draft',  // TODO: 修改为 published
    category: 'uncategorized',
    tags: ['TODO'],  // TODO: 添加标签
    createdAt: '2026-03-18',
    updatedAt: '2026-03-18',
    zh: {
      title: 'TODO: 中文标题',
      summary: 'TODO: 中文摘要',
      content: react_hooks_zh
    },
    en: {
      title: 'TODO: English Title',
      summary: 'TODO: English summary',
      content: react_hooks_en
    }
  },

  {
    id: '9',
    slug: 'restful-api',
    status: 'draft',  // TODO: 修改为 published
    category: 'uncategorized',
    tags: ['TODO'],  // TODO: 添加标签
    createdAt: '2026-03-18',
    updatedAt: '2026-03-18',
    zh: {
      title: 'TODO: 中文标题',
      summary: 'TODO: 中文摘要',
      content: restful_api_zh
    },
    en: {
      title: 'TODO: English Title',
      summary: 'TODO: English summary',
      content: restful_api_en
    }
  },

  {
    id: '10',
    slug: 'freertos-basics',
    status: 'draft',  // TODO: 修改为 published
    category: 'rtos',
    tags: ['TODO'],  // TODO: 添加标签
    createdAt: '2026-03-18',
    updatedAt: '2026-03-18',
    zh: {
      title: 'TODO: 中文标题',
      summary: 'TODO: 中文摘要',
      content: rtos_freertos_freertos_basics_zh
    },
    en: {
      title: 'TODO: English Title',
      summary: 'TODO: English summary',
      content: rtos_freertos_freertos_basics_en
    }
  },

  {
    id: '11',
    slug: 'typescript-advanced',
    status: 'draft',  // TODO: 修改为 published
    category: 'uncategorized',
    tags: ['TODO'],  // TODO: 添加标签
    createdAt: '2026-03-18',
    updatedAt: '2026-03-18',
    zh: {
      title: 'TODO: 中文标题',
      summary: 'TODO: 中文摘要',
      content: typescript_advanced_zh
    },
    en: {
      title: 'TODO: English Title',
      summary: 'TODO: English summary',
      content: typescript_advanced_en
    }
  },

];
