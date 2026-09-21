import { Check } from 'lucide-react';
import { SERVICE_PILLARS } from '../data';
import { FadeDown } from './FadeDown';
import { SectionHeading } from './SectionHeading';

export function Services() {
  return (
    <section id="services" className="relative z-10 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <SectionHeading
          eyebrow="What we do"
          title="Three pillars. One outcome — growth."
          sub="We develop and implement tailored strategies that drive cost efficiency, increase throughput, and streamline operations — from material acquisition and advanced manufacturing through to distribution and fulfilment."
        />

        <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
          {SERVICE_PILLARS.map((pillar, i) => (
            <FadeDown key={pillar.title} delay={i * 0.12}>
              <div className="bg-[#F7F7F7] rounded-3xl border border-black/10 p-6 md:p-8 h-full flex flex-col hover:border-[#3C684D]/30 transition-colors">
                <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#3C684D] to-[#4A7144] flex items-center justify-center mb-6">
                  <pillar.icon className="w-5 h-5 text-white" />
                </span>
                <h3 className="text-xl md:text-2xl font-normal text-[#142A1E] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {pillar.blurb}
                </p>
                <ul className="mt-auto space-y-2.5">
                  {pillar.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-center gap-2.5 text-sm text-gray-700"
                    >
                      <Check className="w-4 h-4 text-[#4A7144] shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeDown>
          ))}
        </div>
      </div>
    </section>
  );
}
