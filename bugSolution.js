```javascript
import { useState, useLayoutEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log('Mounted');
    return () => {
      console.log('Unmounted');
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```