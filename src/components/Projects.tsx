'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Saltly AI',
    description: 'AI restaurant assistant — chat, voice, email support over menus & service.',
    tech: ['Next.js', 'Supabase', 'OpenAI'],
    image: 'saltly-icon.png',
    link: 'https://saltly.ai',
    imageBg: '#FFCDD2',
  },
  {
    title: 'Kurzo',
    description: 'Online course platform empowering creators to teach what they know.',
    tech: ['Next.js', 'Stripe', 'Supabase'],
    image: 'kurzo.png',
    link: 'https://www.kurzo.com/',
    imageBg: '#1a1a1a',
  },
  {
    title: 'Mr.Arch',
    description: 'E-commerce platform for premium custom orthotics and arch support products.',
    tech: ['WordPress', 'WooCommerce', 'Stripe'],
    image: 'mrarch.png',
    link: 'https://mrarch.com',
    imageBg: '#5fb3c0',
    imageFit: 'contain' as const,
  },
  {
    title: 'Basement Browser',
    description: 'AI-powered browser built for focused research and deep work sessions.',
    tech: ['Electron', 'React', 'OpenAI'],
    image: null,
    svgLogo: 'skull',
    link: 'https://basement-mono.com',
    imageBg: '#0a0a0a',
  },
  {
    title: 'Solana Community Game',
    description: 'Community-driven on-chain game on Solana with rewards.',
    tech: ['Next.js', 'Solana', 'Postgres'],
    image: 'solana.png',
    link: 'https://solana-industries.com',
    imageBg: '#0a0a1a',
  },
  {
    title: 'Sline AI',
    description: 'Hackathon-winning social media agent management tool.',
    tech: ['Next.js', 'Supabase', 'VeniceAI'],
    image: 'sline.png',
    link: 'https://sline.ai',
    imageBg: '#0D1117',
  },
  {
    title: 'Mentr',
    description: 'White-label education platform for partner organizations.',
    tech: ['Next.js', 'Supabase', 'Stripe'],
    image: 'mentr.png',
    link: 'https://emprende.inc',
    imageBg: '#0a0a0a',
  },
  {
    title: 'Astro Artisan Jewelry',
    description: 'Storefront for an artisan jewelry brand.',
    tech: ['React', 'Tailwind', 'Etsy'],
    image: 'astro.png',
    link: 'https://astroartisanjewelry.vercel.app/',
    imageBg: '#141428',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-paper">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="mb-3 tracking-widest uppercase font-condensed text-[11px] font-medium text-flame italic">
          SELECTED WORK
        </div>

        <h2 className="text-[52px] leading-tight text-ink mb-12 font-sans font-bold">
          Live products,{' '}
          <em className="font-serif italic font-normal text-flame">
            real users.
          </em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="group flex flex-col rounded-2xl overflow-hidden border border-ink/10 bg-white"
            >
              {/* Image */}
              <div
                className="relative h-48 overflow-hidden flex-shrink-0 flex items-center justify-center"
                style={{ background: project.imageBg }}
              >
                {project.svgLogo === 'skull' ? (
                  <svg
                    width="80" height="80" viewBox="0 0 246 235" fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-80 transition-transform duration-500 group-hover:scale-105"
                  >
                    <path d="M122.184 0C185.041 0 238.387 34.482 243.192 102.591C244.957 127.605 254.019 233.69 211.078 234.73C198.559 235.036 194.128 219.741 183.939 219.666C173.64 219.591 168.22 234.724 155.499 234.73C143.447 234.736 137.944 219.675 127.973 219.666C117.005 219.656 113.112 234.621 99.7402 234.73C83.7359 234.861 73.8154 218.457 70.5938 204.944C13.3271 199.912 6.33188e-05 146.615 0 98.4434C0 30.0991 62.8023 5.15612e-06 122.184 0ZM130.845 83.9912C122.691 83.9912 116.08 90.6009 116.08 98.7549V124.583C116.08 132.737 122.691 139.347 130.845 139.347C138.999 139.347 145.608 132.737 145.608 124.583V98.7549C145.608 90.601 138.999 83.9914 130.845 83.9912ZM192.77 83.9912C184.615 83.9912 178.006 90.6009 178.006 98.7549V124.583C178.006 132.737 184.615 139.347 192.77 139.347C200.924 139.347 207.533 132.737 207.533 124.583V98.7549C207.533 90.6009 200.924 83.9912 192.77 83.9912Z" fill="white"/>
                  </svg>
                ) : (
                  <Image
                    src={`/${project.image!}`}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`transition-transform duration-500 group-hover:scale-105 ${
                      project.imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'
                    }`}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-sans font-bold text-[15px] text-ink mb-1.5">
                  {project.title}
                </h3>
                <p className="flex-1 mb-4 font-sans text-[13px] text-ink/55 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full font-condensed text-[10px] px-2.5 py-0.5 bg-ink/[6%] text-ink/50 border border-ink/[8%]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="rounded-full flex items-center justify-center flex-shrink-0 ml-2 transition-colors bg-flame group-hover:bg-[#c04c18] w-[38px] h-[38px]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
