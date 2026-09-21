import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import { STATS } from '../data';
import { Reveal } from './Reveal';

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export function StatsStrip() {
  return (
    <section className="relative z-10 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <div className="lg:border-l lg:border-black/10 lg:pl-8 first:border-l-0 first:pl-0">
              <p className="font-serif text-5xl md:text-6xl tracking-tight text-[#142A1E]">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-xs md:text-sm text-gray-600 leading-snug max-w-[15rem]">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
