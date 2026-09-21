import { STATS } from '../data';
import { FadeDown } from './FadeDown';

export function StatsStrip() {
  return (
    <section className="relative z-10 bg-[#F7F7F7] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
        {STATS.map((stat, i) => (
          <FadeDown key={stat.value} delay={i * 0.1}>
            <div>
              <p className="text-3xl md:text-4xl font-light tracking-tight text-[#142A1E] tabular-nums">
                {stat.value}
              </p>
              <p className="mt-2 text-xs md:text-sm text-gray-600 leading-snug max-w-[16rem]">
                {stat.label}
              </p>
            </div>
          </FadeDown>
        ))}
      </div>
    </section>
  );
}
