'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Filter = 'everything' | 'build' | 'integrate' | 'advise';

const services = [
  {
    tag: 'build' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E25A1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Custom Web Apps',
    description: 'Production web apps on a modern React stack — fast, typed, and shippable.',
    bullets: ['Design + implementation', 'Auth & data layer', 'Deploy to Vercel/AWS'],
  },
  {
    tag: 'integrate' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E25A1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/><circle cx="19" cy="5" r="3"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'AI Integrations',
    description: 'OpenAI, agents, RAG, vector search — wired in so they actually move metrics.',
    bullets: ['Prompt + eval harness', 'Embeddings + retrieval', 'Streaming UI'],
  },
  {
    tag: 'build' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E25A1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'WordPress & CMS Sites',
    description: 'Marketing sites your team can actually edit, without agency overhead.',
    bullets: ['Custom theme', 'Editor training', 'SEO baseline'],
  },
  {
    tag: 'integrate' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E25A1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: 'Database Engineering',
    description: 'Schema design, migrations, query audits. Postgres-shaped problems solved.',
    bullets: ['Schema review', 'Index + query tuning', 'Migration plan'],
  },
  {
    tag: 'integrate' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E25A1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
    title: 'Payments & Subscriptions',
    description: 'Stripe end-to-end: checkout, billing, webhooks, tax, dunning. No surprises.',
    bullets: ['Pricing implementation', 'Webhook plumbing', 'Customer portal'],
  },
  {
    tag: 'build' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E25A1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>
      </svg>
    ),
    title: 'Cloud & DevOps',
    description: 'Deploy, monitor, and scale. Vercel project or multi-region AWS — same care.',
    bullets: ['Infra as code', 'CI/CD pipeline', 'Monitoring + alerts'],
  },
  {
    tag: 'build' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E25A1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>
      </svg>
    ),
    title: 'MVP Sprints',
    description: 'Idea to live product in four weeks. One designer-developer, one focused scope.',
    bullets: ['Scope + sprint plan', 'Designed + built', 'Launched + measured'],
  },
  {
    tag: 'advise' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E25A1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    title: 'Technical Advisory',
    description: 'Fractional CTO support: architecture reviews, hiring help, co-authored roadmap.',
    bullets: ['Weekly working sessions', 'Architecture review', 'Hiring + interviews'],
  },
];

const filterLabels: { key: Filter; label: string }[] = [
  { key: 'everything', label: 'Everything' },
  { key: 'build', label: 'Build' },
  { key: 'integrate', label: 'Integrate' },
  { key: 'advise', label: 'Advise' },
];

const tagLabel: Record<string, string> = {
  build: 'BUILD',
  integrate: 'INTEGRATE',
  advise: 'ADVISE',
};

const Services: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('everything');

  const visible = filter === 'everything' ? services : services.filter((s) => s.tag === filter);

  return (
    <section id="services" className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="text-[11px] font-medium mb-3 tracking-widest uppercase text-flame font-condensed italic">
              THE CATALOG
            </div>
            <h2
              className="text-3xl lg:text-[52px] text-ink leading-tight whitespace-nowrap font-sans font-bold"
            >
              Eight services.{' '}
              <em className="font-serif italic font-normal text-flame">
                One studio.
              </em>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {filterLabels.map(({ key, label }) => {
              const count = key === 'everything' ? services.length : services.filter((s) => s.tag === key).length;
              const active = filter === key;
              return (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`text-xs px-3 py-1.5 rounded-full transition-colors font-condensed ${
                    active
                      ? 'bg-ink text-cream border-0'
                      : 'bg-transparent text-ink/50 border border-ink/[15%]'
                  }`}
                >
                  {label} {count}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visible.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-2xl p-5 border border-ink/[12%] bg-white"
            >
              {/* Icon + tag row */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-flame/[8%]">
                  {service.icon}
                </div>
                <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-ink/[6%] text-ink/45 font-condensed tracking-wider">
                  {tagLabel[service.tag]}
                </span>
              </div>

              {/* Title + description */}
              <h3 className="text-base font-bold text-ink mb-2 leading-snug font-sans">
                {service.title}
              </h3>
              <p className="text-sm mb-4 text-ink/55 leading-relaxed">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-1.5 mb-5 flex-1">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-ink/60">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E25A1C" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="pt-3 mt-auto border-t border-ink/[8%]">
                <button
                  onClick={() => {
                    sessionStorage.setItem('prefillService', service.title);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-medium transition-colors hover:text-[#c04c18] text-flame font-condensed italic"
                >
                  Inquire →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
