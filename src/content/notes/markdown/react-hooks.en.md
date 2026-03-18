## useState Tips

```jsx
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', age: 0 });
```

### Functional Updates

When the new state depends on the old state, use functional updates:

```jsx
setCount(prevCount => prevCount + 1);
```

## useEffect Dependency Management

Proper dependency management is key to avoiding infinite loops and stale closures:

```jsx
useEffect(() => {
  console.log('Component mounted');
  return () => {
    console.log('Component will unmount');
  };
}, []);
```

## useCallback and useMemo

Used for performance optimization, but overuse may be counterproductive:

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

## Custom Hooks

Extract logic into custom Hooks to improve code reusability:

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
