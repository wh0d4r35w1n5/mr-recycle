import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { Spotlight } from './Spotlight';

export function Testimonials() {
  const featured = TESTIMONIALS.find((t) => t.featured)!;
  const rest = TESTIMONIALS.filter((t) => !t.featured);

  return (
    <section className="relative z-10 bg-[#0E2117] overflow-hidden">
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #4A7144 0%, transparent 65%)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <SectionHeading
          dark
          eyebrow="Client words"
          title={
            <>
              It doesn't feel like{' '}
              <em className="font-serif italic text-[#78A873]">an agency.</em>
            </>
          }
        />

        <Reveal>
          <figure className="max-w-4xl mx-auto text-center mb-14 md:mb-20">
            <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-[2.6rem] text-[#F7F7F7] leading-[1.3]">
              “{featured.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm uppercase tracking-[0.2em] text-[#78A873]">
              {featured.name}
            </figcaption>
          </figure>
        </Reveal>

        <div className="columns-1 md:columns-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {rest.map((testimonial, i) => (
            <Reveal
              key={testimonial.name}
              delay={i * 0.08}
              className="break-inside-avoid mb-4 md:mb-6"
            >
              <Spotlight dark className="h-full">
                <figure className="bg-white/[0.06] border border-white/10 rounded-3xl p-6 md:p-7 backdrop-blur-sm h-full">
                  <Quote className="w-5 h-5 text-[#78A873] mb-4" />
                  <blockquote className="text-sm md:text-[15px] text-white/75 leading-relaxed">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="mt-5 text-sm font-medium text-[#F7F7F7]">
                    {testimonial.name}
                  </figcaption>
                </figure>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
