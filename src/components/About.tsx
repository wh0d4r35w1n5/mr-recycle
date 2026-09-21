import { ArrowRight } from 'lucide-react';
import { TEAM } from '../data';
import { FadeDown } from './FadeDown';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="about" className="relative z-10 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About us"
              title="Book smarts meet street smarts."
              sub="We're a team of chronic business founders and developers — so we do more than offer research and industry best practice. We offer guidance from real, lived, tried-and-tested experience. Wins, losses, and all. Everything we recommend, we've been through."
            />
            <FadeDown delay={0.15}>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-[#F7F7F7] rounded-2xl border border-black/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4A7144] mb-2">
                    Our purpose
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    To help — support, guide, and galvanise — other passionate,
                    determined people to do better in the world; to do better in
                    their business.
                  </p>
                </div>
                <div className="bg-[#F7F7F7] rounded-2xl border border-black/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4A7144] mb-2">
                    Our vision
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Get businesses from A to B — and make the journey feel like
                    working with your own team, not an agency.
                  </p>
                </div>
              </div>
            </FadeDown>
            <FadeDown delay={0.25}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#3C684D] hover:text-[#2C5140] transition-colors"
              >
                Speak to us about your project
                <ArrowRight className="w-4 h-4" />
              </a>
            </FadeDown>
          </div>

          <FadeDown delay={0.2}>
            <div className="bg-[#0E2117] rounded-3xl p-6 md:p-8">
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="text-xl md:text-2xl font-normal text-[#F7F7F7]">
                  The team
                </h3>
                <span className="text-xs text-white/50">
                  Australia · China
                </span>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-6">
                {TEAM.map((member) => (
                  <li
                    key={member.name}
                    className="py-3 border-b border-white/10 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
                  >
                    <p className="text-sm font-medium text-[#F7F7F7]">
                      {member.name}
                    </p>
                    <p className="text-xs text-white/50 mt-0.5">{member.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeDown>
        </div>
      </div>
    </section>
  );
}
