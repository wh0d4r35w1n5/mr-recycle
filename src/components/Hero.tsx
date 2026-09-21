import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight, MoveDown } from 'lucide-react';
import { BoomerangVideoBg } from './BoomerangVideoBg';
import { FadeDown } from './FadeDown';
import { Magnetic } from './Magnetic';
import { RoundSeal } from './RoundSeal';
import { StaggeredFade } from './StaggeredFade';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[calc(100svh-4rem)] md:h-[calc(100svh-4.5rem)] min-h-[620px] flex flex-col overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ top: 200, y: videoY, scale: videoScale }}
      >
        <BoomerangVideoBg />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F7F7]/30 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      <p className="hidden xl:block absolute left-8 bottom-40 z-10 text-[10px] uppercase tracking-[0.3em] text-gray-500 [writing-mode:vertical-rl] rotate-180">
        Est. 2020 — Melbourne, Australia
      </p>

      <div className="flex-1 flex flex-col items-center px-4 md:px-8 relative pt-6 md:pt-10">
        <div className="relative z-10 flex flex-col items-center">
          <FadeDown delay={0.1}>
            <div className="liquid-glass mb-3 px-3 md:px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-xs md:text-sm text-gray-700">
              <span>Unconventional wisdom</span>
              <span className="hidden sm:inline text-gray-400 font-light tracking-wide">
                [ uhn-kuhn-ven-shuh-nl wiz-duhm ]
              </span>
            </div>
          </FadeDown>

          <StaggeredFade
            text="We help you build best in class business."
            accent="best in class"
            accentClassName="font-serif italic text-[#4A7144]"
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08] font-normal text-center max-w-6xl mb-4 md:mb-5 px-4"
            style={{ color: '#142A1E' }}
          />

          <FadeDown delay={0.5}>
            <p className="text-center text-gray-600 max-w-2xl mb-5 md:mb-6 text-sm md:text-base lg:text-lg px-4 leading-relaxed">
              We grow, stabilise and structure businesses. Products, people,
              processes, packaging, paperwork — and every letter in between.
              Whatever it is, we're here to assist.
            </p>
          </FadeDown>

          <FadeDown delay={0.7}>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 px-4">
              <Magnetic>
                <a
                  href="#contact"
                  className="pl-5 md:pl-6 pr-2 py-2 bg-gradient-to-r from-[#3C684D] to-[#4A7144] text-white rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity text-sm md:text-base shadow-lg shadow-[#3C684D]/20"
                >
                  Let's Talk
                  <span
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(59deg, #567A5E 0%, #78A873 100%)',
                    }}
                  >
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </span>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#who-we-assist"
                  className="pl-5 md:pl-6 pr-2 py-2 bg-white text-gray-700 rounded-full flex items-center gap-2 hover:bg-gray-50 transition-colors text-sm md:text-base border border-black/5"
                >
                  Explore Services
                  <span
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(59deg, #EEEEEE 0%, #CBCBCB 100%)',
                    }}
                  >
                    <ArrowDown className="w-3 h-3 md:w-4 md:h-4 text-black" />
                  </span>
                </a>
              </Magnetic>
            </div>
          </FadeDown>
        </div>
      </div>

      <FadeDown
        delay={1.2}
        className="absolute bottom-6 right-6 md:bottom-10 md:right-12 z-10 hidden md:block"
      >
        <RoundSeal className="w-28 h-28 lg:w-32 lg:h-32 text-[#F7F7F7] drop-shadow-lg" />
      </FadeDown>

      <FadeDown delay={1.4} className="relative z-10 pb-6 flex justify-center">
        <div className="flex items-center gap-2 text-xs text-white/80 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <MoveDown className="w-3.5 h-3.5 animate-bounce" />
          Scroll
        </div>
      </FadeDown>
    </section>
  );
}
