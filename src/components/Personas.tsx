import { ArrowRight } from 'lucide-react';
import { PERSONAS } from '../data';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { Spotlight } from './Spotlight';

export function Personas() {
  return (
    <section id="who-we-assist" className="relative z-10 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <SectionHeading
          eyebrow="Who we assist"
          title={
            <>
              We service{' '}
              <em className="font-serif italic text-[#4A7144]">all levels</em>
              <br />
              of business.
            </>
          }
          sub="From first-hustle bootstrappers to established enterprises — the approach changes, the standard doesn't."
        />

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {PERSONAS.map((persona, i) => (
            <Reveal key={persona.name} delay={i * 0.12} className="h-full">
              <a href="#contact" className="group block h-full">
                <Spotlight className="bg-white rounded-3xl border border-black/10 overflow-hidden h-full flex flex-col hover:shadow-2xl hover:shadow-[#142A1E]/10 hover:-translate-y-1.5 transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}${persona.image}`}
                      alt={persona.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 liquid-glass px-3 py-1.5 rounded-full text-[11px] font-medium text-white backdrop-blur-md bg-black/20">
                      {persona.level} · {persona.size}
                    </span>
                    <span className="absolute bottom-4 right-4 font-serif italic text-white/70 text-lg">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <h3 className="font-serif text-2xl md:text-[1.7rem] text-[#142A1E] mb-3">
                      {persona.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">
                      {persona.copy}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#3C684D]">
                      {persona.cta}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Spotlight>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
