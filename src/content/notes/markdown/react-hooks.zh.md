## useState 使用技巧

```jsx
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', age: 0 });
```

### 函数式更新

当新状态依赖于旧状态时，使用函数式更新：

```jsx
setCount(prevCount => prevCount + 1);
```

## useEffect 依赖管理

正确管理依赖数组是避免无限循环和过期闭包的关键：

```jsx
useEffect(() => {
  console.log('Component mounted');
  return () => {
    console.log('Component will unmount');
  };
}, []);
```

## useCallback 和 useMemo

用于性能优化，但过度使用可能适得其反：

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

## 自定义 Hooks

将逻辑抽离到自定义 Hooks 中，提高代码复用性：

```jsx
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    const updateSize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
```
