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
content/
├── notes/           # 笔记 Markdown 文件
│   ├── react-hooks.md
│   ├── nodejs-performance.md
│   └── ...
├── categories/      # 分类配置
│   └── index.ts
└── images/          # 笔记图片
    └── ...
```

### 添加新笔记

1. 在 `content/notes/` 目录下创建 `.md` 文件
2. 按照以下格式编写 frontmatter：

```markdown
---
id: unique-id
slug: url-slug
status: published  # 或 draft
category: frontend # 分类 slug
tags: ['Tag1', 'Tag2']
createdAt: '2024-03-15'
updatedAt: '2024-03-18'
zh:
  title: '中文标题'
  summary: '中文摘要'
en:
  title: 'English Title'
  summary: 'English summary'
---

# 正文内容（Markdown 格式）

支持代码块、列表、标题等 Markdown 语法。
```

3. 提交并推送，网站会自动更新
