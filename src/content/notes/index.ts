import type { Note } from '@/types/note';

// 笔记数据 - 直接以 TypeScript 对象存储
// 这样更可靠，且支持类型检查

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
      content: `## useState 使用技巧

\`\`\`jsx
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', age: 0 });
\`\`\`

### 函数式更新

当新状态依赖于旧状态时，使用函数式更新：

\`\`\`jsx
setCount(prevCount => prevCount + 1);
\`\`\`

## useEffect 依赖管理

正确管理依赖数组是避免无限循环和过期闭包的关键：

\`\`\`jsx
useEffect(() => {
  console.log('Component mounted');
  return () => {
    console.log('Component will unmount');
  };
}, []);
\`\`\`

## useCallback 和 useMemo

用于性能优化，但过度使用可能适得其反：

\`\`\`jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

## 自定义 Hooks

将逻辑抽离到自定义 Hooks 中，提高代码复用性：

\`\`\`jsx
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    const updateSize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
\`\`\``
    },
    en: {
      title: 'React Hooks Best Practices',
      summary: 'Deep dive into React Hooks usage patterns, including proper usage of useState, useEffect, useCallback, and useMemo.',
      content: `## useState Tips

\`\`\`jsx
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', age: 0 });
\`\`\`

### Functional Updates

When the new state depends on the old state, use functional updates:

\`\`\`jsx
setCount(prevCount => prevCount + 1);
\`\`\`

## useEffect Dependency Management

Proper dependency management is key to avoiding infinite loops and stale closures:

\`\`\`jsx
useEffect(() => {
  console.log('Component mounted');
  return () => {
    console.log('Component will unmount');
  };
}, []);
\`\`\`

## useCallback and useMemo

Used for performance optimization, but overuse may be counterproductive:

\`\`\`jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

## Custom Hooks

Extract logic into custom Hooks to improve code reusability:

\`\`\`jsx
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    const updateSize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
\`\`\``
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
      content: `## 事件循环优化

Node.js 的核心是事件循环，理解它对于性能优化至关重要：

### 避免阻塞事件循环

\`\`\`javascript
// 不好的做法
app.get('/slow', (req, res) => {
  for (let i = 0; i < 1e9; i++) {} // 阻塞！
  res.send('Done');
});

// 好的做法
app.get('/fast', async (req, res) => {
  await someAsyncOperation();
  res.send('Done');
});
\`\`\`

## 内存管理

### 监控内存使用

\`\`\`javascript
const usage = process.memoryUsage();
console.log('Heap used:', usage.heapUsed / 1024 / 1024, 'MB');
\`\`\`

### 避免内存泄漏

- 及时清理事件监听器
- 注意闭包中的引用
- 使用 WeakMap/WeakSet 管理缓存

## 集群部署

利用多核 CPU：

\`\`\`javascript
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  require('./app');
}
\`\`\``
    },
    en: {
      title: 'Node.js Performance Optimization Guide',
      summary: 'From event loop, memory management to cluster deployment, comprehensively improve Node.js application performance.',
      content: `## Event Loop Optimization

The event loop is the core of Node.js, and understanding it is crucial for performance optimization:

### Avoid Blocking the Event Loop

\`\`\`javascript
// Bad practice
app.get('/slow', (req, res) => {
  for (let i = 0; i < 1e9; i++) {} // Blocking!
  res.send('Done');
});

// Good practice
app.get('/fast', async (req, res) => {
  await someAsyncOperation();
  res.send('Done');
});
\`\`\`

## Memory Management

### Monitor Memory Usage

\`\`\`javascript
const usage = process.memoryUsage();
console.log('Heap used:', usage.heapUsed / 1024 / 1024, 'MB');
\`\`\`

### Avoid Memory Leaks

- Clean up event listeners promptly
- Watch for references in closures
- Use WeakMap/WeakSet for caching

## Cluster Deployment

Utilize multi-core CPUs:

\`\`\`javascript
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  require('./app');
}
\`\`\``
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
