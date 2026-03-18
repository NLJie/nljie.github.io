# 部署指南

## GitHub Pages 部署

本项目已配置好 GitHub Actions 自动部署到 GitHub Pages。

### 首次设置

1. **创建 GitHub 仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **启用 GitHub Pages**
   - 进入仓库 Settings -> Pages
   - Source 选择 "GitHub Actions"

3. **配置仓库名称（如果使用项目页面）**
   
   如果你使用 `username.github.io/repo-name` 这样的地址，需要修改 `vite.config.ts`：
   
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',  // 修改这里
     // ...
   });
   ```

### 自动部署

每次推送到 `main` 分支时，GitHub Actions 会自动：
1. 安装依赖
2. 构建项目
3. 部署到 GitHub Pages

部署完成后，你的网站将在 `https://yourusername.github.io/your-repo-name` 访问。

### 手动触发

也可以在 GitHub 仓库的 Actions 页面手动触发部署。

---

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

---

## 目录结构说明

```
src/content/
├── categories/           # 分类配置
│   └── index.ts
└── notes/
    ├── index.ts          # 笔记元数据
    └── markdown/         # Markdown 文件
        ├── react-hooks.zh.md
        ├── react-hooks.en.md
        └── ...
```

### 添加新笔记

#### 方式 1：分离的 Markdown 文件（推荐）

1. **创建 Markdown 文件**：
   - 中文版本：`src/content/notes/markdown/your-note.zh.md`
   - 英文版本：`src/content/notes/markdown/your-note.en.md`

2. **编写 Markdown 内容**（支持完整的 Markdown + GFM 语法）：

```markdown
## 标题

这是一段正文，支持：

- **加粗**、*斜体*、~~删除线~~
- `行内代码`
- [链接](https://example.com)

### 代码块

```jsx
const [count, setCount] = useState(0);
```

### 表格

| 特性 | 支持 |
|------|------|
| GFM | ✅ |
| 表格 | ✅ |

### 任务列表

- [x] 已完成
- [ ] 未完成
```

3. **在 `src/content/notes/index.ts` 中导入**：

```typescript
// 1. 导入 Markdown 文件
import yourNoteZh from './markdown/your-note.zh.md?raw';
import yourNoteEn from './markdown/your-note.en.md?raw';

// 2. 添加到 notes 数组
export const notes: Note[] = [
  {
    id: '6',
    slug: 'your-note-slug',
    status: 'published',
    category: 'frontend',  // 分类 slug
    tags: ['React', 'Hooks'],
    createdAt: '2024-03-20',
    updatedAt: '2024-03-20',
    zh: {
      title: '你的笔记标题',
      summary: '简短摘要描述...',
      content: yourNoteZh  // 使用导入的 Markdown
    },
    en: {
      title: 'Your Note Title',
      summary: 'Short summary...',
      content: yourNoteEn
    }
  },
  // ... 其他笔记
];
```

#### 方式 2：内联 Markdown（简单笔记）

```typescript
{
  id: '7',
  slug: 'simple-note',
  // ...
  zh: {
    title: '简单笔记',
    summary: '摘要',
    content: `## 标题
    
直接用模板字符串写 Markdown 内容。

- 列表项 1
- 列表项 2
`
  }
}
```

4. **提交并推送**，网站会自动更新
