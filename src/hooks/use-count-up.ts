import { useEffect, useState } from 'react';

interface UseCountUpOptions {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  delay?: number;
}

export const useCountUp = (
  { end, start = 0, duration = 2000, decimals = 0, delay = 0 }: UseCountUpOptions,
  trigger: boolean = false
) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    const startTime = Date.now() + delay;
    const range = end - start;

    const updateCount = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      
      if (elapsed < 0) {
        requestAnimationFrame(updateCount);
        return;
      }

      if (elapsed < duration) {
        const progress = elapsed / duration;
        // Ease out animation
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        const currentCount = start + (range * easeOutProgress);
        setCount(Number(currentCount.toFixed(decimals)));
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [trigger, end, start, duration, decimals, delay]);

  return Math.round(count);
};