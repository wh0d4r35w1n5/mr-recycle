import type { CSSProperties } from 'react';
import { CLIENT_LOGOS } from '../data';

export function LogoMarquee() {
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="relative z-10 bg-[#F7F7F7] border-b border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-2">
        <p className="text-center text-[10px] md:text-xs uppercase tracking-[0.28em] text-gray-400">
          Trusted by determined businesses
        </p>
      </div>
      <div className="overflow-hidden pb-8 pt-4 select-none">
        <div
          className="marquee-track items-center"
          style={{ '--marquee-duration': '36s' } as CSSProperties}
        >
          {doubled.map((logo, i) => (
            <img
              key={`${logo.name}-${i}`}
              src={`${import.meta.env.BASE_URL}${logo.src}`}
              alt={logo.name}
              className="h-7 md:h-9 w-auto mx-8 md:mx-12 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
