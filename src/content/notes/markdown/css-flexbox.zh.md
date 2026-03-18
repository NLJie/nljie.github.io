# CSS Flexbox 布局完全指南

## 什么是 Flexbox

Flexbox（弹性盒子布局）是 CSS3 引入的一种一维布局模型，专为解决页面组件布局和对齐问题而设计。

![Flexbox 示意图](https://picsum.photos/800/400?random=4)

## 核心概念

### 主轴与交叉轴

Flexbox 有两个轴：

- **主轴（Main Axis）**：由 `flex-direction` 定义
- **交叉轴（Cross Axis）**：垂直于主轴

```css
.container {
  display: flex;
  flex-direction: row; /* 主轴为水平方向 */
}
```

![轴示意图](https://picsum.photos/600/300?random=5)

## 容器属性

### 1. display

```css
.container {
  display: flex;        /* 块级弹性容器 */
  display: inline-flex; /* 行内弹性容器 */
}
```

### 2. flex-direction

控制主轴方向：

```css
.container {
  flex-direction: row;           /* 水平，左到右 */
  flex-direction: row-reverse;   /* 水平，右到左 */
  flex-direction: column;        /* 垂直，上到下 */
  flex-direction: column-reverse;/* 垂直，下到上 */
}
```

![方向示意图](https://picsum.photos/700/350?random=6)

### 3. justify-content

定义项目在主轴上的对齐方式：

```css
.container {
  justify-content: flex-start;  /* 默认值，左对齐 */
  justify-content: flex-end;    /* 右对齐 */
  justify-content: center;      /* 居中 */
  justify-content: space-between;/* 两端对齐 */
  justify-content: space-around; /* 间隔相等 */
  justify-content: space-evenly; /* 完全等距 */
}
```

### 4. align-items

定义项目在交叉轴上的对齐方式：

```css
.container {
  align-items: stretch;     /* 默认值，拉伸填满 */
  align-items: flex-start;  /* 顶部对齐 */
  align-items: flex-end;    /* 底部对齐 */
  align-items: center;      /* 垂直居中 */
  align-items: baseline;    /* 文字基线对齐 */
}
```

![对齐方式](https://picsum.photos/800/400?random=7)

## 项目属性

### 1. flex-grow

定义项目的放大比例：

```css
.item {
  flex-grow: 0; /* 默认值，不放大 */
  flex-grow: 1; /* 等分剩余空间 */
}

.item-double {
  flex-grow: 2; /* 占两份 */
}
```

### 2. flex-shrink

定义项目的缩小比例：

```css
.item {
  flex-shrink: 1; /* 默认值，空间不足时缩小 */
  flex-shrink: 0; /* 不缩小 */
}
```

### 3. flex-basis

定义项目在分配空间前的初始大小：

```css
.item {
  flex-basis: auto;   /* 根据内容决定 */
  flex-basis: 200px;  /* 固定宽度 */
  flex-basis: 20%;    /* 百分比 */
}
```

### 4. flex 简写

```css
.item {
  flex: 1;              /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
  flex: 0 0 200px;      /* 不放大、不缩小、固定200px */
  flex: 1 1 auto;       /* 可放大、可缩小、基于内容 */
}
```

## 实用布局示例

### 水平垂直居中

```css
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

![居中效果](https://picsum.photos/400/400?random=8)

### 响应式导航栏

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }
}
```

### 等高卡片布局

```css
.card-container {
  display: flex;
  gap: 1rem;
}

.card {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-content {
  flex: 1; /* 填充剩余空间，实现等高 */
}
```

![卡片布局](https://picsum.photos/800/350?random=9)

## 常见问题

### 1. Flex 项目高度不一致

使用 `align-items: stretch`（默认值）或给项目设置 `height: 100%`。

### 2. 最后一行左对齐

使用 `justify-content: flex-start` 配合 `margin`：

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.item {
  flex: 0 0 calc(33.333% - 1rem);
}
```

### 3. 固定侧边栏 + 自适应内容

```css
.layout {
  display: flex;
}

.sidebar {
  flex: 0 0 250px; /* 固定宽度 */
}

.main {
  flex: 1; /* 占据剩余空间 */
}
```

## 浏览器兼容性

Flexbox 支持情况：

| 浏览器 | 版本 |
|--------|------|
| Chrome | 29+ |
| Firefox | 28+ |
| Safari | 9+ |
| Edge | 12+ |
| IE | 11（部分支持）|

## 总结

Flexbox 适合的场景：

- ✅ 一维布局（单行或单列）
- ✅ 组件内部对齐
- ✅ 响应式布局
- ✅ 等高布局

不适合的场景：

- ❌ 二维网格布局（用 Grid）
- ❌ 复杂页面整体布局
