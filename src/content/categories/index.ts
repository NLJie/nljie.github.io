import type { Category } from '@/types/note';

export const categories: Category[] = [
  {
    id: 'frontend',
    slug: 'frontend',
    icon: 'Code',
    zh: { 
      name: '前端开发', 
      description: 'React、Vue、TypeScript等前端技术笔记' 
    },
    en: { 
      name: 'Frontend', 
      description: 'React, Vue, TypeScript and frontend technologies' 
    },
  },
  {
    id: 'backend',
    slug: 'backend',
    icon: 'Server',
    zh: { 
      name: '后端开发', 
      description: 'Node.js、Python、数据库等后端技术' 
    },
    en: { 
      name: 'Backend', 
      description: 'Node.js, Python, Database and backend technologies' 
    },
  },
  {
    id: 'ai',
    slug: 'ai',
    icon: 'Brain',
    zh: { 
      name: '人工智能', 
      description: '机器学习、深度学习、LLM等AI技术' 
    },
    en: { 
      name: 'AI', 
      description: 'Machine Learning, Deep Learning, LLM' 
    },
  },
  {
    id: 'devops',
    slug: 'devops',
    icon: 'Cloud',
    zh: { 
      name: '运维部署', 
      description: 'Docker、K8s、CI/CD等运维技术' 
    },
    en: { 
      name: 'DevOps', 
      description: 'Docker, Kubernetes, CI/CD' 
    },
  },
  {
    id: 'architecture',
    slug: 'architecture',
    icon: 'Layers',
    zh: { 
      name: '系统架构', 
      description: '系统设计、架构模式、性能优化' 
    },
    en: { 
      name: 'Architecture', 
      description: 'System Design, Patterns, Performance' 
    },
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};
