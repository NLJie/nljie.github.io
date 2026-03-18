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
import stm32GettingStartedZh from './markdown/stm32-getting-started.zh.md?raw';
import stm32GettingStartedEn from './markdown/stm32-getting-started.en.md?raw';
import freertosBasicsZh from './markdown/freertos-basics.zh.md?raw';
import freertosBasicsEn from './markdown/freertos-basics.en.md?raw';
import canBusProtocolZh from './markdown/can-bus-protocol.zh.md?raw';
import canBusProtocolEn from './markdown/can-bus-protocol.en.md?raw';
import pcbDesignGuideZh from './markdown/pcb-design-guide.zh.md?raw';
import pcbDesignGuideEn from './markdown/pcb-design-guide.en.md?raw';

// 笔记数据
export const notes: Note[] = [
  {
    id: '1',
    slug: 'react-hooks-best-practices',
    status: 'published',
    category: 'frontend',
    tags: ['React', 'Hooks', 'Best Practices'],
    createdAt: '2024-03-15',
    updatedAt: '2024-03-18',
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
    createdAt: '2024-03-10',
    updatedAt: '2024-03-12',
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
    id: '3',
    slug: 'llm-prompt-engineering',
    status: 'published',
    category: 'ai',
    tags: ['LLM', 'Prompt Engineering', 'AI'],
    createdAt: '2024-03-05',
    updatedAt: '2024-03-08',
    zh: {
      title: '大语言模型提示工程',
      summary: '掌握提示工程技巧，让 LLM 输出更准确、更有用的结果。',
      content: `## 基础技巧

### 清晰明确的指令

\`\`\`
不好的提示：
"写一些关于狗的东西"

好的提示：
"写一篇 300 字的博客文章，介绍金毛寻回犬的性格特点，
适合有小孩的家庭饲养的原因。"
\`\`\`

### 使用分隔符

\`\`\`
请总结以下文本，用 3 个要点：
"""
[长文本内容]
"""
\`\`\`

## 高级技巧

### Chain-of-Thought 思维链

引导模型逐步思考：

\`\`\`
问题：一个农场有鸡和兔子，共有 35 个头和 94 只脚。
鸡和兔子各有多少只？

请一步步思考并解决这个问题。
\`\`\`

### Few-Shot 示例

提供示例让模型学习模式：

\`\`\`
将以下中文翻译成英文：

中文：你好
英文：Hello

中文：谢谢
英文：Thank you

中文：很高兴见到你
英文：
\`\`\`

## 最佳实践

1. **迭代优化**：根据输出不断调整提示
2. **版本控制**：记录不同版本的提示效果
3. **测试覆盖**：用多种输入测试提示的鲁棒性`
    },
    en: {
      title: 'LLM Prompt Engineering',
      summary: 'Master prompt engineering techniques to get more accurate and useful results from LLMs.',
      content: `## Basic Techniques

### Clear and Specific Instructions

\`\`\`
Bad prompt:
"Write something about dogs"

Good prompt:
"Write a 300-word blog post about Golden Retriever personality traits
and why they are suitable for families with children."
\`\`\`

### Use Delimiters

\`\`\`
Please summarize the following text in 3 bullet points:
"""
[Long text content]
"""
\`\`\`

## Advanced Techniques

### Chain-of-Thought

Guide the model to think step by step:

\`\`\`
Problem: A farm has chickens and rabbits, with 35 heads and 94 legs total.
How many chickens and rabbits are there?

Please think step by step and solve this problem.
\`\`\`

### Few-Shot Examples

Provide examples for the model to learn patterns:

\`\`\`
Translate the following Chinese to English:

Chinese: 你好
English: Hello

Chinese: 谢谢
English: Thank you

Chinese: 很高兴见到你
English:
\`\`\`

## Best Practices

1. **Iterative Optimization**: Continuously adjust prompts based on outputs
2. **Version Control**: Record the effectiveness of different prompt versions
3. **Test Coverage**: Test prompt robustness with various inputs`
    }
  },
  {
    id: '4',
    slug: 'docker-kubernetes-basics',
    status: 'published',
    category: 'devops',
    tags: ['Docker', 'Kubernetes', 'Container'],
    createdAt: '2024-02-28',
    updatedAt: '2024-03-01',
    zh: {
      title: 'Docker 与 Kubernetes 入门',
      summary: '容器化技术入门指南，从 Docker 基础到 K8s 编排。',
      content: `## Docker 基础

### 什么是容器

容器是轻量级、可移植、自包含的软件运行环境。

### Dockerfile 示例

\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

### 常用命令

\`\`\`bash
# 构建镜像
docker build -t myapp:1.0 .

# 运行容器
docker run -d -p 3000:3000 myapp:1.0

# 查看运行中的容器
docker ps

# 停止容器
docker stop <container-id>
\`\`\`

## Kubernetes 入门

### 核心概念

- **Pod**: 最小的部署单元
- **Service**: 暴露应用的网络服务
- **Deployment**: 管理 Pod 的副本和更新
- **ConfigMap/Secret**: 配置管理

### Deployment 示例

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:1.0
        ports:
        - containerPort: 3000
\`\`\``
    },
    en: {
      title: 'Docker and Kubernetes Basics',
      summary: 'Containerization technology guide, from Docker basics to K8s orchestration.',
      content: `## Docker Basics

### What is a Container

A container is a lightweight, portable, self-contained software runtime environment.

### Dockerfile Example

\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

### Common Commands

\`\`\`bash
# Build image
docker build -t myapp:1.0 .

# Run container
docker run -d -p 3000:3000 myapp:1.0

# View running containers
docker ps

# Stop container
docker stop <container-id>
\`\`\`

## Kubernetes Basics

### Core Concepts

- **Pod**: Smallest deployment unit
- **Service**: Expose application network services
- **Deployment**: Manage Pod replicas and updates
- **ConfigMap/Secret**: Configuration management

### Deployment Example

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:1.0
        ports:
        - containerPort: 3000
\`\`\``
    }
  },
  {
    id: '5',
    slug: 'microservices-design-patterns',
    status: 'draft',
    category: 'architecture',
    tags: ['Microservices', 'Design Patterns', 'Architecture'],
    createdAt: '2024-02-20',
    updatedAt: '2024-02-25',
    zh: {
      title: '微服务设计模式',
      summary: '微服务架构的核心设计模式，包括服务发现、熔断、网关等。',
      content: `## 核心模式

### 服务发现

服务实例需要能够相互发现，常见方案：
- **客户端发现**：客户端直接查询服务注册中心
- **服务端发现**：通过负载均衡器转发请求

### 熔断器模式

防止故障级联，保护系统稳定性：

\`\`\`
Closed -> Open -> Half-Open
\`\`\`

### API 网关

统一入口，处理横切关注点：
- 认证授权
- 请求路由
- 限流熔断
- 协议转换

## 数据管理

### 数据库 per Service

每个服务拥有自己的数据库，确保服务独立性。

### Saga 模式

处理分布式事务，通过补偿操作保证最终一致性。`
    },
    en: {
      title: 'Microservices Design Patterns',
      summary: 'Core design patterns for microservices architecture, including service discovery, circuit breaker, gateway, etc.',
      content: `## Core Patterns

### Service Discovery

Service instances need to discover each other:
- **Client-side discovery**: Client queries service registry directly
- **Server-side discovery**: Requests forwarded through load balancer

### Circuit Breaker Pattern

Prevent cascading failures and protect system stability:

\`\`\`
Closed -> Open -> Half-Open
\`\`\`

### API Gateway

Unified entry point for cross-cutting concerns:
- Authentication and authorization
- Request routing
- Rate limiting and circuit breaking
- Protocol translation

## Data Management

### Database per Service

Each service has its own database to ensure independence.

### Saga Pattern

Handle distributed transactions through compensating operations for eventual consistency.`
    }
  },
  {
    id: '6',
    slug: 'git-workflow',
    status: 'published',
    category: 'devops',
    tags: ['Git', 'Workflow', 'DevOps'],
    createdAt: '2024-03-20',
    updatedAt: '2024-03-20',
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
    createdAt: '2024-03-22',
    updatedAt: '2024-03-22',
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
    createdAt: '2024-03-25',
    updatedAt: '2024-03-25',
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
    createdAt: '2024-03-26',
    updatedAt: '2024-03-26',
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
    createdAt: '2024-03-28',
    updatedAt: '2024-03-28',
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
    createdAt: '2024-03-30',
    updatedAt: '2024-03-30',
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
    createdAt: '2024-04-02',
    updatedAt: '2024-04-02',
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
    createdAt: '2024-04-05',
    updatedAt: '2024-04-05',
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
    createdAt: '2024-04-08',
    updatedAt: '2024-04-08',
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
