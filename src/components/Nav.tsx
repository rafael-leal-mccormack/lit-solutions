'use client'
import React from 'react';
import Image from 'next/image';

const Nav: React.FC = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-14 bg-cream border-b border-ink/[8%]"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <Image src="/logo_no_bg.png" alt="Lit Solutions" width={32} height={32} className="h-8 w-auto" />
          <span className="font-condensed font-bold text-ink text-sm tracking-wide">Lit Solutions LLC</span>
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-7">
          {[
            { label: 'Catalog', href: '#services' },
            { label: 'Packages', href: '#pricing' },
            { label: 'Work', href: '#projects' },
            { label: 'FAQ', href: '#faq' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="no-underline transition-colors hover:text-ink text-ink/[55%] font-condensed text-xs font-normal"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA pill */}
        <a
          href="mailto:rafael@litsolutions.dev"
          className="no-underline text-white rounded-full transition-opacity hover:opacity-90 bg-flame font-condensed text-xs font-bold py-[7px] px-[18px]"
        >
          Get a quote
        </a>
      </div>
    </nav>
  );
};

export default Nav;
