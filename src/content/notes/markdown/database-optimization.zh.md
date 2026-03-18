# 数据库性能优化指南

## 为什么数据库优化很重要

数据库是应用的核心组件，性能问题会直接影响用户体验和业务运行。

![数据库架构](/images/database.jpg)

## 索引优化

### 索引基础

索引就像书的目录，能快速定位数据：

```sql
-- 创建单列索引
CREATE INDEX idx_users_email ON users(email);

-- 创建复合索引
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- 创建唯一索引
CREATE UNIQUE INDEX idx_users_username ON users(username);
```

### 索引最佳实践

```sql
-- ✅ 适合创建索引的场景
-- 1. WHERE 子句中的列
SELECT * FROM users WHERE email = 'xxx';

-- 2. JOIN 条件中的列
SELECT * FROM orders o 
JOIN users u ON o.user_id = u.id;

-- 3. ORDER BY / GROUP BY 列
SELECT * FROM orders ORDER BY created_at DESC;

-- ❌ 避免创建索引的场景
-- 1. 数据量小的表
-- 2. 经常更新的列
-- 3. 区分度低的列（如性别）
```

![索引结构](/images/database.jpg)

## 查询优化

### EXPLAIN 分析

```sql
EXPLAIN ANALYZE
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id;

-- 关注指标：
-- - Seq Scan vs Index Scan
-- - Rows Removed by Filter
-- - Execution Time
```

### 避免 SELECT *

```sql
-- ❌ 不推荐
SELECT * FROM users WHERE id = 1;

-- ✅ 推荐
SELECT id, name, email FROM users WHERE id = 1;
```

### 批量操作

```sql
-- ❌ 逐条插入（慢）
INSERT INTO logs (message) VALUES ('log1');
INSERT INTO logs (message) VALUES ('log2');
INSERT INTO logs (message) VALUES ('log3');

-- ✅ 批量插入（快）
INSERT INTO logs (message) VALUES 
  ('log1'), ('log2'), ('log3');
```

## 表结构优化

### 选择合适的数据类型

| 场景 | 推荐类型 | 避免 |
|------|---------|------|
| 主键 | INT/BIGINT | VARCHAR |
| 布尔值 | BOOLEAN | TINYINT |
| 时间 | TIMESTAMP | VARCHAR |
| 金额 | DECIMAL | FLOAT |
| IP 地址 | INT UNSIGNED | VARCHAR |

### 规范化 vs 反规范化

**第三范式（3NF）：**
- 减少数据冗余
- 保证数据一致性
- 适合写多读少

**反规范化：**
- 减少 JOIN 查询
- 提高读取性能
- 适合读多写少

```sql
-- 反规范化示例：冗余存储用户名称
CREATE TABLE orders (
  id BIGINT PRIMARY KEY,
  user_id BIGINT,
  user_name VARCHAR(100),  -- 冗余字段
  total_amount DECIMAL(10,2),
  created_at TIMESTAMP
);
```

![表结构设计](/images/database.jpg)

## 连接池优化

### 配置参数

```javascript
// Node.js pg-pool 示例
const pool = new Pool({
  host: 'localhost',
  database: 'myapp',
  user: 'dbuser',
  password: 'dbpass',
  
  // 连接池配置
  min: 5,           // 最小连接数
  max: 20,          // 最大连接数
  idleTimeoutMillis: 30000,  // 空闲超时
  connectionTimeoutMillis: 2000,  // 连接超时
});
```

### 监控指标

- **活跃连接数** - 当前使用的连接
- **等待队列** - 等待连接的请求
- **连接泄漏** - 未正确释放的连接

## 缓存策略

### 查询缓存

```javascript
// Redis 缓存示例
async function getUserById(id) {
  // 1. 先查缓存
  const cacheKey = `user:${id}`;
  let user = await redis.get(cacheKey);
  
  if (user) {
    return JSON.parse(user);
  }
  
  // 2. 缓存未命中，查数据库
  user = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  
  // 3. 写入缓存（设置过期时间）
  await redis.setex(cacheKey, 3600, JSON.stringify(user));
  
  return user;
}
```

### 缓存更新策略

| 策略 | 说明 | 适用场景 |
|------|------|---------|
| Cache Aside | 先删缓存，再更新DB | 读多写少 |
| Read Through | 缓存不存在时自动加载 | 一致性要求高 |
| Write Through | 同时更新缓存和DB | 强一致性 |
| Write Behind | 异步更新DB | 高性能要求 |

![缓存架构](/images/database.jpg)

## 分区与分表

### 水平分区（Sharding）

```sql
-- 按用户 ID 分表
-- user_0: id % 4 = 0
-- user_1: id % 4 = 1
-- user_2: id % 4 = 2
-- user_3: id % 4 = 3

-- 应用层路由
function getTableName(userId) {
  return `user_${userId % 4}`;
}
```

### 垂直分区

```sql
-- 将大字段分离
-- 主表
CREATE TABLE articles (
  id BIGINT PRIMARY KEY,
  title VARCHAR(200),
  summary TEXT,
  author_id BIGINT,
  created_at TIMESTAMP
);

-- 内容表（访问频率低）
CREATE TABLE article_contents (
  article_id BIGINT PRIMARY KEY,
  content LONGTEXT
);
```

## 监控与告警

### 关键指标

```sql
-- 慢查询日志
SHOW VARIABLES LIKE 'slow_query_log';
SHOW VARIABLES LIKE 'long_query_time';

-- 性能统计
SHOW STATUS LIKE 'Threads_connected';
SHOW STATUS LIKE 'Queries';
SHOW STATUS LIKE 'Innodb_buffer_pool_read_requests';
```

### 常见告警规则

- 慢查询数量 > 10/分钟
- 连接数 > 80% 最大连接数
- QPS 突增 > 200%
- 磁盘使用率 > 85%

## 总结

数据库优化层次：

1. **SQL 优化** - 索引、查询语句
2. **表结构优化** - 数据类型、范式
3. **架构优化** - 缓存、读写分离
4. **扩展优化** - 分区、分库分表

记住：**先定位瓶颈，再针对性优化！**
