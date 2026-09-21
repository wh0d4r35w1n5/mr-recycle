import { ArrowRight } from 'lucide-react';
import { PERSONAS } from '../data';
import { FadeDown } from './FadeDown';
import { SectionHeading } from './SectionHeading';

export function Personas() {
  return (
    <section id="who-we-assist" className="relative z-10 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <SectionHeading
          eyebrow="Who we assist"
          title={
            <>
              We service all levels
              <br />
              of business.
            </>
          }
          sub="From first-hustle bootstrappers to established enterprises — the approach changes, the standard doesn't."
        />

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {PERSONAS.map((persona, i) => (
            <FadeDown key={persona.name} delay={i * 0.12}>
              <a
                href="#contact"
                className="group bg-white rounded-3xl border border-black/10 p-6 md:p-8 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-8 md:mb-10">
                  <span className="w-11 h-11 rounded-2xl bg-[#EFF4F0] flex items-center justify-center">
                    <persona.icon className="w-5 h-5 text-[#3C684D]" />
                  </span>
                  <span className="text-xs text-gray-400 font-medium tabular-nums">
                    0{i + 1}
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4A7144] mb-1.5">
                  {persona.level} · {persona.size}
                </p>
                <h3 className="text-xl md:text-2xl font-normal text-[#142A1E] mb-3">
                  {persona.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {persona.copy}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#3C684D]">
                  {persona.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </FadeDown>
          ))}
        </div>
      </div>
    </section>
  );
}
