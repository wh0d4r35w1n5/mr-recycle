import { ArrowRight, Globe, Play, Recycle } from 'lucide-react';
import { BoomerangVideoBg } from './components/BoomerangVideoBg';
import { FadeDown } from './components/FadeDown';
import { StaggeredFade } from './components/StaggeredFade';

const NAV_LINKS = ['Recycling', 'Services', 'Materials', 'Pickup', 'Packages'];

export default function App() {
  return (
    <div className="h-screen flex flex-col bg-[#F7F7F7] relative overflow-hidden">
      <div className="fixed inset-0 z-0" style={{ top: 200 }}>
        <BoomerangVideoBg />
      </div>

      <nav className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 relative z-10">
        <div className="flex items-center gap-4 md:gap-6">
          <img src={`${import.meta.env.BASE_URL}image.png`} alt="Mr Recycle's" className="h-6 md:h-7" />
          <button className="flex items-center gap-1.5 text-sm text-black">
            <Globe className="w-4 h-4" />
            En
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="#"
            className="hidden sm:block text-sm text-gray-700 hover:text-gray-900 border border-black/20 px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-colors"
          >
            Sign In
          </a>
          <button className="px-4 md:px-6 py-2 md:py-2.5 bg-black text-white text-sm rounded-full hover:bg-gray-900 transition-colors">
            Recycle Now
          </button>
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center px-4 md:px-8 relative pt-4 md:pt-8">
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-3 px-3 md:px-4 py-1.5 md:py-2 border border-black/20 rounded-full flex items-center gap-1.5 md:gap-2 text-xs md:text-sm">
            <span>♻️</span>
            <span>→</span>
            <span>🌍</span>
            <span className="hidden sm:inline">Turning waste into resources</span>
            <span className="sm:hidden">Waste into resources</span>
            <span>→</span>
            <span>🌱</span>
          </div>

          <StaggeredFade
            text="Smart Recycling For Tomorrow, Infinite Clean Solutions"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-normal text-center max-w-5xl mb-3 md:mb-4 px-4"
            style={{ color: '#31463B' }}
          />

          <FadeDown delay={0.5}>
            <p className="text-center text-gray-600 max-w-3xl mb-4 md:mb-5 text-sm md:text-base lg:text-lg px-4">
              Sustainable Recycling Platform. Collecting, sorting, and processing
              recyclable materials for homes, businesses, and large-scale
              operations worldwide.
            </p>
          </FadeDown>

          <FadeDown delay={0.7}>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 px-4">
              <button className="pl-4 md:pl-6 pr-2 py-2 bg-gradient-to-r from-[#3C684D] to-[#4A7144] text-white rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity text-sm md:text-base">
                <Recycle className="w-4 h-4" />
                Explore Services
                <span
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(59deg, #567A5E 0%, #78A873 100%)',
                  }}
                >
                  <Play className="w-3 h-3 md:w-4 md:h-4 fill-white text-white" />
                </span>
              </button>
              <button className="pl-4 md:pl-6 pr-2 py-2 bg-white text-gray-700 rounded-full flex items-center gap-2 hover:bg-gray-50 transition-colors text-sm md:text-base">
                Start Recycling
                <span
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(59deg, #EEEEEE 0%, #CBCBCB 100%)',
                  }}
                >
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 fill-black text-black" />
                </span>
              </button>
            </div>
          </FadeDown>
        </div>
      </div>
    </div>
  );
}
