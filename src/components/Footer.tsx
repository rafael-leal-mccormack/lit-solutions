import React from 'react';

const Footer: React.FC = () => {
  const navLinks = [
    { label: 'Catalog', href: '#services' },
    { label: 'Packages', href: '#pricing' },
    { label: 'Work', href: '#projects' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-ink border-t border-cream/[6%]">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Row 1: Brand left | Nav center | Social right */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand */}
          <div className="flex-1">
            <div className="font-condensed font-bold uppercase text-white text-[13px] tracking-widest mb-[3px]">
              Lit Solutions
            </div>
            <p className="text-cream/30 font-condensed text-[11px]">
              Independent technology studio. Built in Miami.
            </p>
          </div>

          {/* Nav — centered on desktop */}
          <div className="flex flex-wrap gap-6 md:justify-center flex-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-condensed text-xs text-cream/40 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social — right */}
          <div className="flex items-center gap-5 flex-1 md:justify-end">
            <a
              href="https://github.com/rafael-leal-mccormack"
              target="_blank"
              rel="noreferrer"
              className="font-condensed text-xs text-cream/40 transition-colors hover:text-white"
            >
              GitHub →
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-leal-mccormack-16b657130/"
              target="_blank"
              rel="noreferrer"
              className="font-condensed text-xs text-cream/40 transition-colors hover:text-white"
            >
              LinkedIn →
            </a>
          </div>
        </div>

        {/* Row 2: Copyright left | Tagline right */}
        <div className="mt-6 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-cream/[6%]">
          <p className="text-cream/25 font-condensed text-[11px]">
            © {new Date().getFullYear()} Lit Solutions. All rights reserved.
          </p>
          <p className="text-cream/20 font-condensed text-[11px]">
            Independent. Senior. Available.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
