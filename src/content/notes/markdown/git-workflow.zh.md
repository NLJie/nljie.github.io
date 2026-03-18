# Git 工作流最佳实践

## 为什么需要规范的工作流

团队协作中，Git 工作流的规范化可以：

- 减少代码冲突
- 提高代码质量
- 便于代码审查
- 支持持续集成

![Git 工作流示意图](https://picsum.photos/800/400?random=1)

## 常见工作流模式

### 1. Git Flow

Git Flow 是最经典的分支管理模式：

```bash
# 创建功能分支
git checkout -b feature/user-auth develop

# 完成功能后合并回 develop
git checkout develop
git merge --no-ff feature/user-auth
```

**主要分支：**

- `main` - 生产环境代码
- `develop` - 开发环境代码
- `feature/*` - 功能分支
- `release/*` - 发布分支
- `hotfix/*` - 热修复分支

![分支模型](https://picsum.photos/800/400?random=2)

### 2. GitHub Flow

更简化的工作流，适合持续部署：

1. 从 `main` 创建功能分支
2. 提交更改
3. 创建 Pull Request
4. 代码审查
5. 合并到 `main`

```bash
# 1. 创建分支
git checkout -b feature/new-ui

# 2. 提交代码
git add .
git commit -m "feat: 添加新UI组件"

# 3. 推送分支
git push origin feature/new-ui
```

## 提交规范

使用 **Conventional Commits** 规范：

```
<type>(<scope>): <subject>

<body>

<footer>
```

**类型说明：**

| 类型 | 说明 |
|------|------|
| feat | 新功能 |
| fix | Bug 修复 |
| docs | 文档更新 |
| style | 代码格式调整 |
| refactor | 重构 |
| test | 测试相关 |
| chore | 构建/工具相关 |

**示例：**

```bash
feat(auth): 添加用户登录功能

- 实现 JWT Token 验证
- 添加登录页面
- 集成第三方登录

Closes #123
```

![提交历史](https://picsum.photos/800/300?random=3)

## 代码审查清单

提交 PR 前自查：

- [ ] 代码通过所有测试
- [ ] 新增代码有对应测试
- [ ] 文档已更新
- [ ] 无 console.log 等调试代码
- [ ] 代码符合团队规范

## 总结

选择适合团队的工作流：

- **小团队/快速迭代** → GitHub Flow
- **大团队/版本发布** → Git Flow
- **持续部署** → Trunk-based
