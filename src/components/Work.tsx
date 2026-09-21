import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '../data';
import { FadeDown } from './FadeDown';
import { SectionHeading } from './SectionHeading';

export function Work() {
  return (
    <section id="work" className="relative z-10 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <SectionHeading
          eyebrow="Others we have assisted"
          title="Recent work."
          sub="We collaborate with determined business owners to advance their business to the next level."
        />

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {CASE_STUDIES.map((study, i) => (
            <FadeDown key={study.name} delay={i * 0.12}>
              <a
                href={study.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-3xl border border-black/10 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#2C5140] via-[#3C684D] to-[#78A873] relative flex items-center justify-center">
                  <span className="text-6xl md:text-7xl font-light text-white/20 tracking-tighter">
                    {study.monogram}
                  </span>
                  <span className="absolute top-4 left-4 text-[11px] uppercase tracking-[0.18em] text-white/70">
                    Case Study
                  </span>
                  <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-normal text-[#142A1E] mb-1.5">
                    {study.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {study.tags} — {study.category}
                  </p>
                </div>
              </a>
            </FadeDown>
          ))}
        </div>
      </div>
    </section>
  );
}
