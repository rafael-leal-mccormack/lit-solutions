'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  { num: '30+', label: 'Projects shipped' },
  { num: '8 yrs', label: 'Full-stack' },
  { num: '100%', label: 'Fixed price' },
  { num: '24h', label: 'Reply time' },
];

const techTags = [
  'JAVASCRIPT', 'TYPESCRIPT', 'REACT', 'NEXT.JS', 'POSTGRES', 'AWS',
  'STRIPE', 'OPENAI', 'SUPABASE', 'VERCEL', 'DOCKER', 'TAILWIND',
  'WORDPRESS', 'MYSQL', 'REDIS', 'NODE.JS', 'MOBILE', 'FIGMA',
  'PYTHON', 'GITHUB', 'GRAPHQL', 'MONGODB', 'PRISMA',
];

const serviceCards = [
  {
    tag: 'BUILD',
    title: 'MVP Sprints',
    desc: '4-week scope-to-launch cycle',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E25A1C" strokeWidth="2" strokeLinecap="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>
      </svg>
    ),
  },
  {
    tag: 'INTEGRATE',
    title: 'AI Integrations',
    desc: 'OpenAI · RAG · pgvector · agents',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E25A1C" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 8v4l3 3"/><circle cx="19" cy="5" r="3"/>
      </svg>
    ),
  },
  {
    tag: 'BUILD',
    title: 'Custom Web Apps',
    desc: 'React · Next.js · TypeScript',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E25A1C" strokeWidth="2" strokeLinecap="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    tag: 'INTEGRATE',
    title: 'Payments & Subs',
    desc: 'Stripe end-to-end · webhooks',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E25A1C" strokeWidth="2" strokeLinecap="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
  },
  {
    tag: 'INFRA',
    title: 'Cloud & DevOps',
    desc: 'AWS · Vercel · CI/CD · monitoring',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E25A1C" strokeWidth="2" strokeLinecap="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>
      </svg>
    ),
  },
  {
    tag: 'INTEGRATE',
    title: 'Database Eng.',
    desc: 'Postgres · Redis · schema design',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E25A1C" strokeWidth="2" strokeLinecap="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },
  {
    tag: 'BUILD',
    title: 'WordPress & CMS',
    desc: 'Custom themes · SEO · editor training',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E25A1C" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    tag: 'ADVISE',
    title: 'Technical Advisory',
    desc: 'Fractional CTO · architecture review',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E25A1C" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
];

const cardVariants = {
  enter: { y: 48, opacity: 0, scale: 0.96 },
  center: { y: 0, opacity: 1, scale: 1 },
  exit: { y: -48, opacity: 0, scale: 0.96 },
};

const ServiceCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % serviceCards.length), 2800);
    return () => clearInterval(t);
  }, []);

  const card = serviceCards[index];

  return (
    <div className="w-full max-w-[340px] flex flex-col gap-3 mx-auto">
      {/* Cycling card */}
      <div className="relative overflow-hidden rounded-2xl bg-white border-[1.5px] border-ink/10 shadow-[0_12px_40px_rgba(17,0,67,0.12)]" style={{ minHeight: '180px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-flame/[8%]">
                {card.icon}
              </div>
              <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-ink/[6%] text-ink/45 font-condensed tracking-wider">
                {card.tag}
              </span>
            </div>
            <h3 className="font-sans font-bold text-ink text-[20px] mb-1.5">
              {card.title}
            </h3>
            <p className="font-condensed text-xs text-ink/50 leading-relaxed">
              {card.desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-1.5">
        {serviceCards.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? 'w-4 h-1.5 bg-flame'
                : 'w-1.5 h-1.5 bg-ink/20'
            }`}
          />
        ))}
      </div>

      {/* Static stat strip */}
      <div className="rounded-2xl bg-ink p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-sans font-bold text-white text-[26px] leading-none">8</div>
            <div className="font-condensed text-[10px] text-cream/40 tracking-widest uppercase mt-1">Services</div>
          </div>
          <div className="w-px h-10 bg-cream/10" />
          <div>
            <div className="font-sans font-bold text-white text-[26px] leading-none">30+</div>
            <div className="font-condensed text-[10px] text-cream/40 tracking-widest uppercase mt-1">Projects</div>
          </div>
          <div className="w-px h-10 bg-cream/10" />
          <div>
            <div className="font-sans font-bold text-white text-[26px] leading-none">24h</div>
            <div className="font-condensed text-[10px] text-cream/40 tracking-widest uppercase mt-1">Reply time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-14 bg-cream">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── Left column ── */}
          <div>

            {/* Booking pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-ink/60 border-ink/[15%] font-condensed text-xs">
                <span className="inline-block w-2 h-2 rounded-full flex-shrink-0 bg-flame" />
                Now booking · 2 spots open this quarter
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-ink mb-6 font-sans font-bold"
              style={{ fontSize: 'clamp(52px, 6vw, 70px)', lineHeight: 1.05 }}
            >
              Engineering<br />
              for{' '}
              <span className="inline-block bg-flame rounded-[10px] py-0.5 px-3.5 leading-[1.2] -rotate-[4deg] origin-center">
                <em className="font-serif italic font-normal text-white">
                  what&apos;s next
                </em>
              </span>
              <br />
              at your company.
            </motion.h1>

            {/* Lead paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-8 leading-relaxed text-ink/60 max-w-[440px] text-[15px]"
            >
              Eight productized services. Fixed-price engagements. Pick what you need from the catalog below.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <a
                href="mailto:rafael@litsolutions.dev"
                className="inline-flex items-center gap-2 rounded-full no-underline transition-opacity hover:opacity-90 bg-flame text-white font-condensed text-xs font-bold py-[10px] px-5"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                rafael@litsolutions.dev
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-1 no-underline transition-colors hover:text-flame text-ink/[55%] font-condensed text-xs font-medium"
              >
                Browse catalog →
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-10 pt-8 pb-10 border-t border-ink/10"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-bold text-ink font-sans text-[28px] leading-none">
                    {s.num}
                  </div>
                  <div className="mt-1 tracking-widest uppercase text-ink/40 font-condensed text-[10px]">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column — service carousel ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="hidden lg:flex flex-col items-center justify-center pt-8"
          >
            <ServiceCarousel />
          </motion.div>
        </div>
      </div>

      {/* ── Scrolling tech tag marquee ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-10 overflow-hidden bg-ink h-10 flex items-center"
      >
        <div className="flex whitespace-nowrap font-condensed animate-marquee">
          {[...techTags, ...techTags].map((tag, i) => (
            <span
              key={i}
              className="tracking-widest uppercase flex-shrink-0 text-cream/65 text-[11px] px-4"
            >
              {tag}
              <span className="text-cream/30 ml-4">·</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
