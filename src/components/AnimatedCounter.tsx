"use client";

import { useState, useEffect, useRef } from "react";

interface Props {
  value: number | string;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2 }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || typeof value !== "number") return;
    let startTime: number;
    let animId: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [hasStarted, value, duration]);

  if (typeof value === "string") {
    return (
      <div ref={ref} className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-900 leading-tight">
        {prefix}{value}{suffix}
      </div>
    );
  }

  return (
    <div ref={ref} className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-900 leading-tight">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}
