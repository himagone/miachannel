import { useState, useEffect } from 'react';

export function useLoading(minDuration = 3000): boolean {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), minDuration);
    return () => clearTimeout(timer);
  }, [minDuration]);
  return isLoaded;
}
