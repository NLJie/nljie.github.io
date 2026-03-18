# Database Performance Optimization Guide

## Why Database Optimization Matters

The database is the core component of applications; performance issues directly impact user experience and business operations.

![Database Architecture](/images/database.jpg)

## Index Optimization

### Index Basics

Indexes are like book directories, enabling quick data location:

```sql
-- Create single-column index
CREATE INDEX idx_users_email ON users(email);

-- Create composite index
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- Create unique index
CREATE UNIQUE INDEX idx_users_username ON users(username);
```

### Index Best Practices

```sql
-- ✅ Suitable for indexing
-- 1. Columns in WHERE clause
SELECT * FROM users WHERE email = 'xxx';

-- 2. Columns in JOIN conditions
SELECT * FROM orders o 
JOIN users u ON o.user_id = u.id;

-- 3. ORDER BY / GROUP BY columns
SELECT * FROM orders ORDER BY created_at DESC;

-- ❌ Avoid indexing
-- 1. Small tables
-- 2. Frequently updated columns
-- 3. Low cardinality columns (e.g., gender)
```

![Index Structure](/images/database.jpg)

## Query Optimization

### EXPLAIN Analysis

```sql
EXPLAIN ANALYZE
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id;

-- Key metrics:
-- - Seq Scan vs Index Scan
-- - Rows Removed by Filter
-- - Execution Time
```

### Avoid SELECT *

```sql
-- ❌ Not recommended
SELECT * FROM users WHERE id = 1;

-- ✅ Recommended
SELECT id, name, email FROM users WHERE id = 1;
```

### Batch Operations

```sql
-- ❌ Individual inserts (slow)
INSERT INTO logs (message) VALUES ('log1');
INSERT INTO logs (message) VALUES ('log2');
INSERT INTO logs (message) VALUES ('log3');

-- ✅ Batch insert (fast)
INSERT INTO logs (message) VALUES 
  ('log1'), ('log2'), ('log3');
```

## Table Structure Optimization

### Choose Appropriate Data Types

| Scenario | Recommended | Avoid |
|----------|-------------|-------|
| Primary key | INT/BIGINT | VARCHAR |
| Boolean | BOOLEAN | TINYINT |
| Timestamp | TIMESTAMP | VARCHAR |
| Currency | DECIMAL | FLOAT |
| IP Address | INT UNSIGNED | VARCHAR |

### Normalization vs Denormalization

**Third Normal Form (3NF):**
- Reduce data redundancy
- Ensure data consistency
- Suitable for write-heavy workloads

**Denormalization:**
- Reduce JOIN queries
- Improve read performance
- Suitable for read-heavy workloads

```sql
-- Denormalization example: Store user name redundantly
CREATE TABLE orders (
  id BIGINT PRIMARY KEY,
  user_id BIGINT,
  user_name VARCHAR(100),  -- Redundant field
  total_amount DECIMAL(10,2),
  created_at TIMESTAMP
);
```

![Table Design](/images/database.jpg)

## Connection Pool Optimization

### Configuration

```javascript
// Node.js pg-pool example
const pool = new Pool({
  host: 'localhost',
  database: 'myapp',
  user: 'dbuser',
  password: 'dbpass',
  
  // Pool configuration
  min: 5,           // Minimum connections
  max: 20,          // Maximum connections
  idleTimeoutMillis: 30000,  // Idle timeout
  connectionTimeoutMillis: 2000,  // Connection timeout
});
```

### Monitoring Metrics

- **Active Connections** - Currently used connections
- **Waiting Queue** - Requests waiting for connections
- **Connection Leaks** - Connections not properly released

## Caching Strategy

### Query Cache

```javascript
// Redis cache example
async function getUserById(id) {
  // 1. Check cache first
  const cacheKey = `user:${id}`;
  let user = await redis.get(cacheKey);
  
  if (user) {
    return JSON.parse(user);
  }
  
  // 2. Cache miss, query database
  user = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  
  // 3. Write to cache (with expiration)
  await redis.setex(cacheKey, 3600, JSON.stringify(user));
  
  return user;
}
```

### Cache Update Strategies

| Strategy | Description | Use Case |
|----------|-------------|----------|
| Cache Aside | Delete cache first, then update DB | Read-heavy |
| Read Through | Auto-load when cache miss | High consistency |
| Write Through | Update both cache and DB | Strong consistency |
| Write Behind | Async DB update | High performance |

![Cache Architecture](/images/database.jpg)

## Partitioning and Sharding

### Horizontal Partitioning (Sharding)

```sql
-- Shard by user ID
-- user_0: id % 4 = 0
-- user_1: id % 4 = 1
-- user_2: id % 4 = 2
-- user_3: id % 4 = 3

-- Application routing
function getTableName(userId) {
  return `user_${userId % 4}`;
}
```

### Vertical Partitioning

```sql
-- Separate large fields
-- Main table
CREATE TABLE articles (
  id BIGINT PRIMARY KEY,
  title VARCHAR(200),
  summary TEXT,
  author_id BIGINT,
  created_at TIMESTAMP
);

-- Content table (less frequently accessed)
CREATE TABLE article_contents (
  article_id BIGINT PRIMARY KEY,
  content LONGTEXT
);
```

## Monitoring and Alerting

### Key Metrics

```sql
-- Slow query log
SHOW VARIABLES LIKE 'slow_query_log';
SHOW VARIABLES LIKE 'long_query_time';

-- Performance stats
SHOW STATUS LIKE 'Threads_connected';
SHOW STATUS LIKE 'Queries';
SHOW STATUS LIKE 'Innodb_buffer_pool_read_requests';
```

### Common Alert Rules

- Slow queries > 10/minute
- Connections > 80% max connections
- QPS spike > 200%
- Disk usage > 85%

## Summary

Database optimization layers:

1. **SQL Optimization** - Indexes, query statements
2. **Schema Optimization** - Data types, normalization
3. **Architecture Optimization** - Caching, read-write separation
4. **Scaling Optimization** - Partitioning, sharding

Remember: **Identify bottlenecks first, then optimize accordingly!**
