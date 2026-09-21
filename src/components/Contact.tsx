import type { CSSProperties } from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT } from '../data';
import { Magnetic } from './Magnetic';
import { Reveal } from './Reveal';

const MARQUEE_ITEMS = Array.from({ length: 8 });

export function Contact() {
  return (
    <section id="contact" className="relative z-10 bg-[#F7F7F7]">
      <div className="overflow-hidden border-y border-black/10 py-4 md:py-6 select-none">
        <div
          className="marquee-track"
          style={{ '--marquee-duration': '30s' } as CSSProperties}
        >
          {MARQUEE_ITEMS.map((_, i) => (
            <span
              key={i}
              className="font-serif italic text-2xl md:text-4xl text-[#142A1E] pr-8 md:pr-12 whitespace-nowrap"
            >
              Ready to grow your business?
              <span className="not-italic text-[#4A7144] pl-8 md:pl-12">—</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <Reveal>
          <div className="bg-gradient-to-br from-[#142A1E] to-[#2C5140] rounded-[2rem] md:rounded-[2.5rem] px-6 md:px-12 py-16 md:py-24 text-center relative overflow-hidden">
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-20"
              style={{
                background:
                  'radial-gradient(circle, #78A873 0%, transparent 70%)',
              }}
            />
            <div
              className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full opacity-15"
              style={{
                background:
                  'radial-gradient(circle, #78A873 0%, transparent 70%)',
              }}
            />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78A873] mb-5">
                Let's talk
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl tracking-tight text-[#F7F7F7] leading-[1.05] max-w-4xl mx-auto">
                Your next phase starts with{' '}
                <em className="italic text-[#78A873]">a conversation.</em>
              </h2>
              <p className="mt-5 md:mt-6 text-white/60 text-base md:text-lg max-w-xl mx-auto">
                Tell us where your business is and where it needs to be. We'll
                bring the well researched solution.
              </p>

              <div className="mt-9 md:mt-11 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <Magnetic>
                  <a
                    href={`mailto:${CONTACT.email}?subject=Let's Talk`}
                    className="pl-5 md:pl-6 pr-2 py-2 bg-white text-[#142A1E] rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors text-sm md:text-base font-medium"
                  >
                    {CONTACT.email}
                    <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#3C684D] to-[#4A7144] flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </span>
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href={CONTACT.phoneHref}
                    className="pl-5 md:pl-6 pr-2 py-2 border border-white/25 text-white rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors text-sm md:text-base"
                  >
                    {CONTACT.phone}
                    <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Phone className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </span>
                  </a>
                </Magnetic>
              </div>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-white/50">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {CONTACT.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  Working worldwide
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
