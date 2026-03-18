# Git Workflow Best Practices

## Why You Need a Standardized Workflow

In team collaboration, a standardized Git workflow helps:

- Reduce code conflicts
- Improve code quality
- Facilitate code review
- Support continuous integration

![Git Workflow Diagram](https://picsum.photos/800/400?random=1)

## Common Workflow Patterns

### 1. Git Flow

Git Flow is the most classic branch management model:

```bash
# Create feature branch
git checkout -b feature/user-auth develop

# Merge back to develop after completion
git checkout develop
git merge --no-ff feature/user-auth
```

**Main Branches:**

- `main` - Production code
- `develop` - Development code
- `feature/*` - Feature branches
- `release/*` - Release branches
- `hotfix/*` - Hotfix branches

![Branch Model](https://picsum.photos/800/400?random=2)

### 2. GitHub Flow

A simplified workflow suitable for continuous deployment:

1. Create feature branch from `main`
2. Commit changes
3. Create Pull Request
4. Code review
5. Merge to `main`

```bash
# 1. Create branch
git checkout -b feature/new-ui

# 2. Commit code
git add .
git commit -m "feat: add new UI component"

# 3. Push branch
git push origin feature/new-ui
```

## Commit Convention

Use **Conventional Commits**:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type Reference:**

| Type | Description |
|------|-------------|
| feat | New feature |
| fix | Bug fix |
| docs | Documentation |
| style | Code style changes |
| refactor | Refactoring |
| test | Testing |
| chore | Build/tools |

**Example:**

```bash
feat(auth): add user login feature

- Implement JWT Token verification
- Add login page
- Integrate third-party login

Closes #123
```

![Commit History](https://picsum.photos/800/300?random=3)

## Code Review Checklist

Before submitting PR:

- [ ] All tests pass
- [ ] New code has tests
- [ ] Documentation updated
- [ ] No debug code (console.log)
- [ ] Follows team coding standards

## Summary

Choose the right workflow for your team:

- **Small team/fast iteration** → GitHub Flow
- **Large team/versioned releases** → Git Flow
- **Continuous deployment** → Trunk-based
