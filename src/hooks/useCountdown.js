import { useEffect, useRef, useState } from "react";

// Counts down to `target` (ms timestamp). Calls `onComplete` once when it reaches zero.
export default function useCountdown(target, onComplete) {
  const [left, setLeft] = useState(() => Math.max(0, target - Date.now()));
  const done = useRef(onComplete);
  done.current = onComplete; // always call the latest callback

  useEffect(() => {
    setLeft(Math.max(0, target - Date.now()));
    const id = setInterval(() => {
      const t = Math.max(0, target - Date.now());
      setLeft(t);
      if (t <= 0) {
        clearInterval(id);
        done.current();
      }
    }, 250);
    return () => clearInterval(id); // cleanup when target changes or component unmounts
  }, [target]);

  const s = Math.ceil(left / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}
