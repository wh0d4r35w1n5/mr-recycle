import { ArrowUpRight } from 'lucide-react';
import { ARTICLES } from '../data';
import { FadeDown } from './FadeDown';
import { SectionHeading } from './SectionHeading';

export function Insights() {
  return (
    <section id="insights" className="relative z-10 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <SectionHeading
          eyebrow="Insights"
          title="From the journal."
          sub="Field notes on growth, supply chains and building best in class businesses."
        />

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {ARTICLES.map((article, i) => (
            <FadeDown key={article.title} delay={i * 0.12}>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-3xl border border-black/10 p-6 md:p-7 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4A7144] mb-4">
                  {article.tag}
                </span>
                <h3 className="text-lg md:text-xl font-normal text-[#142A1E] leading-snug flex-1">
                  {article.title}
                </h3>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 group-hover:text-[#3C684D] transition-colors">
                  Read more
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </FadeDown>
          ))}
        </div>
      </div>
    </section>
  );
}
