"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "PROJECTS COMPLETED", value: 1000 },
  { label: "CLIENTS SERVED", value: 100 },
  { label: "YEARS OF EXCELLENCE", value: 5 },
];

function useCountUp(target: number, duration = 1200, start: boolean) {
  const [count, setCount] = useState(0);
  const raf = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }
    let startTime: number | null = null;
    function animate(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }
    raf.current = requestAnimationFrame(animate);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [target, duration, start]);

  return count;
}

export default function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const ref = sectionRef.current;
    if (!ref) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, []);

  // ✅ call hooks in fixed order
  const counts = [
    useCountUp(stats[0].value, 1200, inView),
    useCountUp(stats[1].value, 1200, inView),
    useCountUp(stats[2].value, 1200, inView),
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-neutral-900 py-10 rounded-t-2xl font-titillium"
    >
      <div className="flex flex-wrap justify-center items-center gap-10 max-w-4xl mx-auto">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="flex flex-col items-center min-w-[120px] font-titillium"
          >
            <div className="text-5xl font-bold text-white font-titillium mb-2">
              {counts[idx]}
              <span className="text-3xl align-top text-red-500">+</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500 text-xs font-semibold tracking-widest uppercase font-exo2">
                • {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
