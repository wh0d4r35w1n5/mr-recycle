import { Quote } from 'lucide-react';
import { FOUNDERS } from '../data';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Founders() {
  return (
    <section id="founders" className="relative z-10 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <SectionHeading
          eyebrow="The founders"
          title={
            <>
              Chronic founders,{' '}
              <em className="font-serif italic text-[#4A7144]">
                professional helpers.
              </em>
            </>
          }
          sub="Everything we recommend, we've been through — wins, losses and all. You get the beauty of book smarts and the brawn of street smarts."
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {FOUNDERS.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 0.15} className="h-full">
              <div className="group relative h-full">
                <div className="sheen relative aspect-[3/4] rounded-3xl overflow-hidden border border-black/10">
                  <img
                    src={`${import.meta.env.BASE_URL}${founder.image}`}
                    alt={`${founder.name}, ${founder.role} at We Assist Co`}
                    loading="lazy"
                    style={{ objectPosition: founder.imagePosition }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0E2117]/85 via-[#0E2117]/30 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6 md:p-7">
                    <h3 className="font-serif text-3xl md:text-4xl text-white">
                      {founder.name}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#78A873] mt-1.5">
                      {founder.role}
                    </p>
                  </div>
                </div>

                <div className="relative -mt-8 mx-4 md:mx-6 bg-white rounded-2xl border border-black/10 p-5 shadow-xl shadow-[#142A1E]/10 rotate-[-1.5deg] group-hover:rotate-0 transition-transform duration-500">
                  <Quote className="w-4 h-4 text-[#4A7144] mb-2" />
                  <p className="font-serif italic text-sm md:text-[15px] text-gray-700 leading-relaxed">
                    “{founder.quote}”
                  </p>
                  <p className="mt-2.5 text-[11px] uppercase tracking-[0.18em] text-gray-400">
                    {founder.quoteBy}
                  </p>
                </div>

                <p className="mt-6 px-2 text-sm text-gray-600 leading-relaxed text-center">
                  {founder.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
