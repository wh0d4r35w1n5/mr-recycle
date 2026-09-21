import { ArrowUpRight } from 'lucide-react';
import { ARTICLES } from '../data';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Insights() {
  return (
    <section id="insights" className="relative z-10 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <SectionHeading
          eyebrow="Insights"
          title={
            <>
              From the{' '}
              <em className="font-serif italic text-[#4A7144]">journal.</em>
            </>
          }
          sub="Field notes on growth, supply chains and building best in class businesses."
        />

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {ARTICLES.map((article, i) => (
            <Reveal key={article.title} delay={i * 0.12} className="h-full">
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full bg-white rounded-3xl border border-black/10 overflow-hidden hover:shadow-2xl hover:shadow-[#142A1E]/10 hover:-translate-y-1.5 transition-all duration-500"
              >
                <div className="sheen aspect-[16/10] overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${article.image}`}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4A7144]">
                    {article.tag}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-[#142A1E] leading-snug mt-2">
                    {article.title}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 group-hover:text-[#3C684D] transition-colors">
                    Read more
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
