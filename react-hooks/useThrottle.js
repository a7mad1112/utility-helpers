import { useEffect, useRef, useState } from 'react';

function useThrottle(value, delay = 600) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());
  useEffect(() => {
    if (Date.now() >= lastExecuted.current + delay) {
      lastExecuted.current = Date.now();
      setThrottledValue(value);
    } else {
      const timerId = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottledValue(value);
      }, delay);
      return () => clearTimeout(timerId);
    }
  }, [value, delay]);
  return throttledValue;
}

export default useThrottle;
