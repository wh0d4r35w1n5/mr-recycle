import { SERVICE_PILLARS } from '../data';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { Spotlight } from './Spotlight';

export function Services() {
  return (
    <section
      id="services"
      className="relative z-10 bg-white border-y border-black/5"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Three pillars.{' '}
              <em className="font-serif italic text-[#4A7144]">One outcome.</em>
            </>
          }
          sub="We develop and implement tailored strategies that drive cost efficiency, increase throughput, and streamline operations — from material acquisition and advanced manufacturing through to distribution and fulfilment."
        />

        <div className="border-t border-black/10">
          {SERVICE_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <Spotlight className="group border-b border-black/10 transition-colors duration-500 hover:bg-[#F7F7F7]">
                <div className="grid lg:grid-cols-[5rem_1fr_22rem] gap-6 lg:gap-10 py-8 md:py-12 px-2 md:px-4">
                  <span className="font-serif italic text-3xl md:text-4xl text-[#4A7144]/60 group-hover:text-[#4A7144] transition-colors">
                    {pillar.index}
                  </span>
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-[#142A1E] leading-tight mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
                      {pillar.blurb}
                    </p>
                  </div>
                  <ul className="flex flex-wrap lg:flex-col gap-2 content-start">
                    {pillar.services.map((service) => (
                      <li
                        key={service}
                        className="text-xs md:text-sm text-gray-700 bg-[#EFF4F0] group-hover:bg-white border border-black/5 rounded-full px-3.5 py-1.5 w-fit transition-colors"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
