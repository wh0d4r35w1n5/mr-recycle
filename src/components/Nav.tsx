import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data';
import { cn } from '../lib/utils';
import { Magnetic } from './Magnetic';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 backdrop-blur-md transition-all duration-500',
        scrolled
          ? 'bg-[#F7F7F7]/90 border-b border-black/10'
          : 'bg-[#F7F7F7]/60 border-b border-transparent'
      )}
    >
      <div className="flex items-center justify-between px-4 md:px-8 h-16 md:h-[4.5rem] max-w-7xl mx-auto w-full">
        <a href="#top" className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}image.png`}
            alt="We Assist Co"
            className="h-6 md:h-7"
          />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="mailto:hello@weassistco.com"
            className="hidden sm:block text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            hello@weassistco.com
          </a>
          <Magnetic strength={0.3}>
            <a
              href="#contact"
              className="px-4 md:px-6 py-2 md:py-2.5 bg-black text-white text-sm rounded-full hover:bg-gray-900 transition-colors flex items-center gap-1.5"
            >
              Let's Chat
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </Magnetic>
          <button
            className="lg:hidden p-2 text-gray-800"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-[#F7F7F7] px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm text-gray-700 hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
