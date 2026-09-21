import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { FadeDown } from './FadeDown';
import { SectionHeading } from './SectionHeading';

export function Testimonials() {
  return (
    <section className="relative z-10 bg-[#0E2117]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <SectionHeading
          dark
          eyebrow="Client words"
          title="It doesn't feel like an agency."
          sub="It feels like an extension of your own team — that's the whole point."
        />

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <FadeDown
              key={testimonial.name}
              delay={i * 0.08}
              className="break-inside-avoid mb-4 md:mb-6"
            >
              <figure className="bg-white/[0.06] border border-white/10 rounded-3xl p-6 md:p-7 backdrop-blur-sm">
                <Quote className="w-5 h-5 text-[#78A873] mb-4" />
                <blockquote className="text-sm md:text-[15px] text-white/80 leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-5 text-sm font-medium text-[#F7F7F7]">
                  {testimonial.name}
                </figcaption>
              </figure>
            </FadeDown>
          ))}
        </div>
      </div>
    </section>
  );
}
