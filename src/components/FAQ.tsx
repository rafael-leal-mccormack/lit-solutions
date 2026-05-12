'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'Who will we be working with?',
    a: 'A small, focused team led by senior engineers. The people who pitch are the people who build. No agency layer, no junior handoffs.',
  },
  {
    q: 'How do we know you can ship?',
    a: 'Six live products in the selected work section, all built from scratch. References available on request.',
  },
  {
    q: "What if our project doesn't fit a package?",
    a: "We handle custom engagements all the time. Reach out and describe what you're building — we'll scope something that works.",
  },
  {
    q: 'Do you take equity?',
    a: "We're open to it for the right project. We've done equity arrangements before. Let's talk about what makes sense for both sides.",
  },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-24">
            <div className="mb-3 tracking-widest uppercase font-condensed text-[11px] font-medium text-flame italic">
              FAQ
            </div>
            <h2 className="font-sans font-bold text-[52px] leading-tight text-ink">
              Common
              <br />
              <em className="font-serif italic font-normal text-flame">
                questions.
              </em>
            </h2>
          </div>

          {/* Right — question list */}
          <div>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border-t border-ink/10${i === faqs.length - 1 ? ' border-b' : ''}`}
              >
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="font-sans text-[15px] font-semibold text-ink pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 flex items-center justify-center rounded-full transition-colors duration-200 w-[28px] h-[28px] ${open === i ? 'bg-flame' : 'bg-ink/[6%]'}`}
                  >
                    {open === i ? (
                      /* × icon when open */
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="5" y1="5" x2="19" y2="19"/>
                        <line x1="19" y1="5" x2="5" y2="19"/>
                      </svg>
                    ) : (
                      /* + icon when closed */
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(17,0,67,0.5)" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 leading-relaxed font-sans text-[13px] text-ink/60">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
