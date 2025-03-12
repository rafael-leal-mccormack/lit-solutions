'use client'
import React from "react";
import { motion } from "framer-motion";
import HeroBackground from './HeroBackground'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <img 
                src="/logo.png" 
                alt="Company Logo" 
                className="h-[280px] mx-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-[#110043] mb-6 leading-tight">
                Turning Ideas Into
                <span className="block mt-2 bg-gradient-to-r from-[#110043] to-purple-600 bg-clip-text text-transparent pb-2">
                  Digital Reality
                </span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-[#110043]/70 mb-10 max-w-2xl mx-auto"
            >
              Full-stack developer crafting innovative solutions and 
              bringing entrepreneurial visions to life
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-[#110043] text-white rounded-full font-medium hover:bg-[#110043]/90 transition-colors duration-300"
              >
                Let's Connect
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-[#110043] text-[#110043] rounded-full font-medium hover:bg-[#110043]/10 transition-colors duration-300"
              >
                View Projects
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16"
            >
              <p className="text-[#110043]/50 mb-4">Real world enterprise experience from:</p>
              <div className="flex justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                <img src="/ukg-logo.png" alt="UKG (Ultimate Kronos Group)" className="h-12" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-[#110043]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
