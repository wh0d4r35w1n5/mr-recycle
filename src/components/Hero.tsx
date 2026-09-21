import { ArrowDown, ArrowRight, MoveDown } from 'lucide-react';
import { BoomerangVideoBg } from './BoomerangVideoBg';
import { FadeDown } from './FadeDown';
import { StaggeredFade } from './StaggeredFade';

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-[calc(100svh-4rem)] md:h-[calc(100svh-4.5rem)] min-h-[560px] flex flex-col overflow-hidden"
    >
      <div className="absolute inset-0 z-0" style={{ top: 200 }}>
        <BoomerangVideoBg />
      </div>

      <div className="flex-1 flex flex-col items-center px-4 md:px-8 relative pt-6 md:pt-10">
        <div className="relative z-10 flex flex-col items-center">
          <FadeDown delay={0.1}>
            <div className="liquid-glass mb-3 px-3 md:px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-xs md:text-sm text-gray-700">
              <span className="hidden sm:inline">Unconventional wisdom</span>
              <span className="sm:hidden">Unconventional wisdom</span>
              <span className="text-gray-400 font-light tracking-wide">
                [ uhn-kuhn-ven-shuh-nl wiz-duhm ]
              </span>
            </div>
          </FadeDown>

          <StaggeredFade
            text="We help you build best in class business."
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-normal text-center max-w-5xl mb-3 md:mb-4 px-4"
            style={{ color: '#142A1E' }}
          />

          <FadeDown delay={0.5}>
            <p className="text-center text-gray-600 max-w-3xl mb-4 md:mb-5 text-sm md:text-base lg:text-lg px-4">
              We grow, stabilise and structure businesses. Products, people,
              processes, packaging, paperwork — and every letter in between.
              Whatever it is, we're here to assist.
            </p>
          </FadeDown>

          <FadeDown delay={0.7}>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 px-4">
              <a
                href="#contact"
                className="pl-4 md:pl-6 pr-2 py-2 bg-gradient-to-r from-[#3C684D] to-[#4A7144] text-white rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity text-sm md:text-base"
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
              <a
                href="#who-we-assist"
                className="pl-4 md:pl-6 pr-2 py-2 bg-white text-gray-700 rounded-full flex items-center gap-2 hover:bg-gray-50 transition-colors text-sm md:text-base"
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
            </div>
          </FadeDown>
        </div>
      </div>

      <FadeDown
        delay={1.4}
        className="relative z-10 pb-6 flex justify-center"
      >
        <div className="flex items-center gap-2 text-xs text-white/80 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <MoveDown className="w-3.5 h-3.5 animate-bounce" />
          Scroll
        </div>
      </FadeDown>
    </section>
  );
}
