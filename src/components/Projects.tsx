'use client'
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Solana Community Game',
    description: 'A community-driven game on the Solana blockchain',
    tech: ['NextJs', 'Solana', 'Postgres'],
    image: 'solana.png',
    link: 'https://solana-industries.com'
  },
  {
    title: 'Sline AI',
    description: 'Hackathon winning Social Media Agent Management Tool',
    tech: ['NextJs', 'Supabase', 'VeniceAI'],
    image: 'sline.png',
    link: 'https://sline.ai'
  },
  {
    title: 'Mentr',
    description: 'Whitelabeled Education Platform',
    tech: ['NextJs', 'Supabase', 'Stripe'],
    image: 'mentr.png',
    link: 'https://emprende.inc'
  },
  {
    title: "Astro Artisan Jewelry",
    description: "Etsy Landing Page for Astro Artisan Jewelry",
    tech: ['React', 'TailwindCSS', 'Etsy'],
    image: 'astro.png',
    link: 'https://astroartisanjewelry.vercel.app/'
  },
  {
    title: "Personal Portfolio",
    description: "My Personal Portfolio",
    tech: ['React', 'PhaseJS'],
    image: 'portfolio.png',
    link: 'https://rafaellealmccormack.com'
  },
  {
    title: "NBA Total Score",
    description: "Sport Analysis Tool for Recent Matchups in NBA",
    tech: ['React', 'Webscraping'],
    image: 'nba.png',
    link: 'https://www.nbatotalscores.com/'
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#FEFBF6]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#110043]">Our Projects</h2>
          <p className="text-[#110043]/70 max-w-2xl mx-auto">
            Explore some of our recent success stories and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-[#110043]/5 h-[400px]"
            >
              <div className="h-full w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <a href={project.link} rel='noreferrer' target='_blank' className="absolute inset-0 bg-gradient-to-t from-[black] via-[grey]/80 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#FEFBF6]">{project.title}</h3>
                  <p className="text-[#FEFBF6]/90 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-[#FEFBF6]/10 rounded-full text-[#FEFBF6]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 