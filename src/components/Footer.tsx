import { CONTACT, NAV_LINKS, SOCIALS } from '../data';

export function Footer() {
  return (
    <footer className="relative z-10 bg-[#0B1A12] text-white/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-14 md:pt-20">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-14 md:pb-20">
          <div className="max-w-xs">
            <p className="font-serif text-3xl text-[#F7F7F7] mb-3">
              We Assist Co.
            </p>
            <p className="text-sm leading-relaxed text-white/50">
              In the habit of growing businesses. Business strategy, product
              sourcing and design — from Melbourne to the world.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-4">
                Explore
              </p>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-4">
                Contact
              </p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.phoneHref}
                    className="hover:text-white transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </li>
                <li>{CONTACT.location}</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-4">
                Follow
              </p>
              <ul className="space-y-2.5">
                {SOCIALS.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/40">
          <p>© 2026 We Assist Co · ACN 647841861</p>
          <p>In the habit of growing businesses</p>
        </div>
      </div>

      <div
        className="relative select-none pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <p className="font-serif text-center text-[16vw] leading-[0.78] text-white/[0.07] whitespace-nowrap translate-y-[18%]">
          We Assist Co
        </p>
      </div>
    </footer>
  );
}
