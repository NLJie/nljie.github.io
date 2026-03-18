import type { Note } from '@/types/note';

// 导入 Markdown 文件内容
import reactHooksZh from './markdown/react-hooks.zh.md?raw';
import reactHooksEn from './markdown/react-hooks.en.md?raw';
import nodejsPerfZh from './markdown/nodejs-performance.zh.md?raw';
import nodejsPerfEn from './markdown/nodejs-performance.en.md?raw';
import gitWorkflowZh from './markdown/git-workflow.zh.md?raw';
import gitWorkflowEn from './markdown/git-workflow.en.md?raw';
import cssFlexboxZh from './markdown/css-flexbox.zh.md?raw';
import cssFlexboxEn from './markdown/css-flexbox.en.md?raw';
import typescriptAdvancedZh from './markdown/typescript-advanced.zh.md?raw';
import typescriptAdvancedEn from './markdown/typescript-advanced.en.md?raw';
import restfulApiZh from './markdown/restful-api.zh.md?raw';
import restfulApiEn from './markdown/restful-api.en.md?raw';
import databaseOptimizationZh from './markdown/database-optimization.zh.md?raw';
import databaseOptimizationEn from './markdown/database-optimization.en.md?raw';
import stm32GettingStartedZh from './markdown/mcu/stm32/stm32-getting-started.zh.md?raw';
import stm32GettingStartedEn from './markdown/mcu/stm32/stm32-getting-started.en.md?raw';
import freertosBasicsZh from './markdown/rtos/freertos/freertos-basics.zh.md?raw';
import freertosBasicsEn from './markdown/rtos/freertos/freertos-basics.en.md?raw';
import canBusProtocolZh from './markdown/protocols/can/can-bus-protocol.zh.md?raw';
import canBusProtocolEn from './markdown/protocols/can/can-bus-protocol.en.md?raw';
import pcbDesignGuideZh from './markdown/hardware-design/pcb/pcb-design-guide.zh.md?raw';
import pcbDesignGuideEn from './markdown/hardware-design/pcb/pcb-design-guide.en.md?raw';

// 笔记数据
export const notes: Note[] = [
  {
    id: '1',
    slug: 'react-hooks-best-practices',
    status: 'published',
    category: 'frontend',
    tags: ['React', 'Hooks', 'Best Practices'],
    createdAt: '2026-03-15',
    updatedAt: '2026-03-18',
    zh: {
      title: 'React Hooks 最佳实践',
      summary: '深入理解 React Hooks 的使用模式，包括 useState、useEffect、useCallback 和 useMemo 的正确用法。',
      content: reactHooksZh
    },
    en: {
      title: 'React Hooks Best Practices',
      summary: 'Deep dive into React Hooks usage patterns, including proper usage of useState, useEffect, useCallback, and useMemo.',
      content: reactHooksEn
    }
  },
  {
    id: '2',
    slug: 'nodejs-performance-optimization',
    status: 'published',
    category: 'backend',
    tags: ['Node.js', 'Performance', 'Optimization'],
    createdAt: '2026-03-10',
    updatedAt: '2026-03-12',
    zh: {
      title: 'Node.js 性能优化指南',
      summary: '从事件循环、内存管理到集群部署，全面提升 Node.js 应用性能。',
      content: nodejsPerfZh
    },
    en: {
      title: 'Node.js Performance Optimization Guide',
      summary: 'From event loop, memory management to cluster deployment, comprehensively improve Node.js application performance.',
      content: nodejsPerfEn
    }
  },
  {
    id: '6',
    slug: 'git-workflow',
    status: 'published',
    category: 'devops',
    tags: ['Git', 'Workflow', 'DevOps'],
    createdAt: '2026-03-20',
    updatedAt: '2026-03-20',
    zh: {
      title: 'Git 工作流最佳实践',
      summary: '团队协作中 Git 分支管理策略与提交规范详解。',
      content: gitWorkflowZh
    },
    en: {
      title: 'Git Workflow Best Practices',
      summary: 'Branch management strategies and commit conventions for team collaboration.',
      content: gitWorkflowEn
    }
  },
  {
    id: '7',
    slug: 'css-flexbox',
    status: 'published',
    category: 'frontend',
    tags: ['CSS', 'Flexbox', 'Layout'],
    createdAt: '2026-03-22',
    updatedAt: '2026-03-22',
    zh: {
      title: 'CSS Flexbox 布局完全指南',
      summary: '从基础概念到实战技巧，全面掌握 Flexbox 弹性布局。',
      content: cssFlexboxZh
    },
    en: {
      title: 'CSS Flexbox Complete Guide',
      summary: 'From basics to practical techniques, master Flexbox layout.',
      content: cssFlexboxEn
    }
  },
  {
    id: '8',
    slug: 'typescript-advanced',
    status: 'published',
    category: 'frontend',
    tags: ['TypeScript', 'JavaScript', 'Frontend'],
    createdAt: '2026-03-25',
    updatedAt: '2026-03-25',
    zh: {
      title: 'TypeScript 高级用法',
      summary: '深入理解泛型、条件类型、映射类型等 TypeScript 高级特性。',
      content: typescriptAdvancedZh
    },
    en: {
      title: 'TypeScript Advanced Usage',
      summary: 'Deep dive into generics, conditional types, mapped types and other advanced TypeScript features.',
      content: typescriptAdvancedEn
    }
  },
  {
    id: '9',
    slug: 'restful-api-design',
    status: 'published',
    category: 'backend',
    tags: ['API', 'REST', 'Backend'],
    createdAt: '2026-03-26',
    updatedAt: '2026-03-26',
    zh: {
      title: 'RESTful API 设计最佳实践',
      summary: '从 URL 设计到状态码规范，构建高质量的 RESTful API。',
      content: restfulApiZh
    },
    en: {
      title: 'RESTful API Design Best Practices',
      summary: 'From URL design to status code conventions, build high-quality RESTful APIs.',
      content: restfulApiEn
    }
  },
  {
    id: '10',
    slug: 'database-optimization',
    status: 'published',
    category: 'backend',
    tags: ['Database', 'Performance', 'SQL'],
    createdAt: '2026-03-28',
    updatedAt: '2026-03-28',
    zh: {
      title: '数据库性能优化指南',
      summary: '索引优化、查询优化、缓存策略，全面提升数据库性能。',
      content: databaseOptimizationZh
    },
    en: {
      title: 'Database Performance Optimization Guide',
      summary: 'Index optimization, query optimization, caching strategies for comprehensive database performance.',
      content: databaseOptimizationEn
    }
  },
  {
    id: '11',
    slug: 'stm32-getting-started',
    status: 'published',
    category: 'mcu',
    tags: ['STM32', 'ARM', 'Embedded'],
    createdAt: '2026-03-30',
    updatedAt: '2026-03-30',
    zh: {
      title: 'STM32 入门完全指南',
      summary: '从开发环境搭建到第一个程序，STM32 单片机入门教程。',
      content: stm32GettingStartedZh
    },
    en: {
      title: 'STM32 Getting Started Guide',
      summary: 'From environment setup to first program, STM32 microcontroller tutorial.',
      content: stm32GettingStartedEn
    }
  },
  {
    id: '12',
    slug: 'freertos-basics',
    status: 'published',
    category: 'rtos',
    tags: ['FreeRTOS', 'RTOS', 'Embedded'],
    createdAt: '2026-04-02',
    updatedAt: '2026-04-02',
    zh: {
      title: 'FreeRTOS 实时操作系统入门',
      summary: '任务管理、信号量、队列通信，FreeRTOS 核心概念详解。',
      content: freertosBasicsZh
    },
    en: {
      title: 'FreeRTOS Real-Time Operating System Basics',
      summary: 'Task management, semaphores, queue communication, FreeRTOS core concepts.',
      content: freertosBasicsEn
    }
  },
  {
    id: '13',
    slug: 'can-bus-protocol',
    status: 'published',
    category: 'protocols',
    tags: ['CAN', 'Automotive', 'Communication'],
    createdAt: '2026-04-05',
    updatedAt: '2026-04-05',
    zh: {
      title: 'CAN 总线协议详解',
      summary: '从物理层到应用层，CAN 总线原理与 STM32 编程实战。',
      content: canBusProtocolZh
    },
    en: {
      title: 'CAN Bus Protocol Detailed Guide',
      summary: 'From physical to application layer, CAN bus principles and STM32 programming.',
      content: canBusProtocolEn
    }
  },
  {
    id: '14',
    slug: 'pcb-design-guide',
    status: 'published',
    category: 'hardware-design',
    tags: ['PCB', 'Hardware', 'Design'],
    createdAt: '2026-04-08',
    updatedAt: '2026-04-08',
    zh: {
      title: 'PCB 设计实战指南',
      summary: '布局布线、电源完整性、EMC 设计，高质量 PCB 设计要点。',
      content: pcbDesignGuideZh
    },
    en: {
      title: 'PCB Design Practical Guide',
      summary: 'Layout routing, power integrity, EMC design, high-quality PCB design essentials.',
      content: pcbDesignGuideEn
    }
  }
];

// 获取已发布的笔记
export function getPublishedNotes(): Note[] {
  return notes.filter(note => note.status === 'published');
}

// 根据 slug 获取笔记
export function getNoteBySlug(slug: string): Note | undefined {
  return notes.find(note => note.slug === slug);
}

// 根据分类获取笔记
export function getNotesByCategory(categorySlug: string): Note[] {
  return getPublishedNotes().filter(note => note.category === categorySlug);
}

// 获取所有标签
export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  getPublishedNotes().forEach(note => {
    note.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet);
}

// 搜索笔记
export function searchNotes(query: string, lang: 'zh' | 'en'): Note[] {
  const lowerQuery = query.toLowerCase();
  return getPublishedNotes().filter(note => 
    note[lang].title.toLowerCase().includes(lowerQuery) ||
    note[lang].summary.toLowerCase().includes(lowerQuery) ||
    note.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
