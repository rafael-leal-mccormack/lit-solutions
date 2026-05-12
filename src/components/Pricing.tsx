'use client'
import React from 'react';
import { motion } from 'framer-motion';

const tiers = [
  {
    tag: 'TUNE-UP',
    name: 'Tune-up',
    description: 'A pointed engagement to fix or improve one specific thing. Fast turnaround, clear deliverable.',
    bullets: ['One audit or feature', 'Async by default', 'Code + docs handoff'],
    dark: false,
    highlighted: false,
  },
  {
    tag: 'FULL APP',
    name: 'Full App',
    description: 'End-to-end product build — scoped, designed, built, and shipped together.',
    bullets: ['Scoped MVP / feature', 'Weekly demos', 'Production deploy', 'Roadmap handoff'],
    dark: true,
    highlighted: true,
    label: 'MOST PICKED',
  },
  {
    tag: 'RETAINER',
    name: 'Retainer',
    description: 'Ongoing engineering capacity for funded teams. Cancel anytime, no minimum.',
    bullets: ['Dedicated engineer', 'Slack channel', 'Architecture review', 'On-call escalation'],
    dark: false,
    highlighted: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="mb-3 tracking-widest uppercase text-flame font-condensed text-[11px] font-medium italic">
          HOW TO ENGAGE
        </div>

        <h2
          className="leading-tight text-ink mb-3 font-sans font-bold"
          style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}
        >
          Three ways to{' '}
          <br />
          <em className="font-serif italic font-normal text-flame">
            work together.
          </em>
        </h2>
        <p className="text-sm mb-12 text-ink/55">
          Pick the shape that fits. Every engagement starts with a written scope.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-6 flex flex-col${tier.highlighted ? ' mt-6' : ''} ${
                tier.dark ? 'bg-ink' : 'bg-white border border-ink/[12%]'
              }`}
            >
              {tier.label && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full tracking-widest uppercase bg-flame text-white font-condensed text-[10px] font-bold whitespace-nowrap py-1.5 px-4"
                >
                  {tier.label}
                </div>
              )}

              <div className={`tracking-widest uppercase mb-4 font-condensed text-[10px] font-bold ${
                tier.dark ? 'text-gold/90' : 'text-ink/40'
              }`}>
                {tier.tag}
              </div>

              <h3 className={`mb-4 font-sans font-bold text-[26px] ${tier.dark ? 'text-cream' : 'text-ink'}`}>
                {tier.name}
              </h3>

              <p className={`text-sm mb-5 leading-relaxed ${tier.dark ? 'text-cream/60' : 'text-ink/55'}`}>
                {tier.description}
              </p>

              <ul className="space-y-2 mb-8 flex-1">
                {tier.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E25A1C" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span className={tier.dark ? 'text-cream/70' : 'text-ink/65'}>{b}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  sessionStorage.setItem('prefillService', tier.name);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-center text-sm font-medium py-3 rounded-full transition-opacity hover:opacity-85 cursor-pointer font-condensed ${
                  tier.dark
                    ? 'bg-flame text-white border-0'
                    : 'bg-transparent text-ink border border-ink/20'
                }`}
              >
                Email about {tier.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
