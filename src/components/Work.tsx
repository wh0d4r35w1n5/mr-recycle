import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '../data';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Work() {
  return (
    <section id="work" className="relative z-10 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <SectionHeading
          eyebrow="Others we have assisted"
          title={
            <>
              Recent <em className="font-serif italic text-[#4A7144]">work.</em>
            </>
          }
          sub="We collaborate with determined business owners to advance their business to the next level."
        />

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.name} delay={i * 0.12} className="h-full">
              <a
                href={study.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full bg-white rounded-3xl border border-black/10 overflow-hidden hover:shadow-2xl hover:shadow-[#142A1E]/10 hover:-translate-y-1.5 transition-all duration-500"
              >
                <div className="sheen relative aspect-[4/3] overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${study.image}`}
                    alt={`${study.name} case study`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 z-10 text-[11px] uppercase tracking-[0.18em] text-white bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
                    Case Study
                  </span>
                  <span className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white text-[#142A1E] flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-serif text-xl md:text-2xl text-[#142A1E] mb-1.5">
                    {study.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {study.tags} — {study.category}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
