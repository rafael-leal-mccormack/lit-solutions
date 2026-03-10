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
              className="mb-8 flex flex-col items-center"
            >
              <img
                src="/logo_no_bg.png"
                alt="Lit Solutions Logo"
                className="h-[280px] mx-auto"
              />
              <p
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  letterSpacing: '0.25em',
                  color: '#C9A84C',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginTop: '0.5rem',
                }}
              >
                Lit Solutions
              </p>
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
                <svg width="157" height="48" viewBox="0 0 59 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_678)"><path d="M58.5014 17.644H55.0938V1.0202H58.5014V17.644Z" fill="#0062E2"></path><path d="M51.5989 4.0362C50.4391 4.0362 49.5625 3.13244 49.5625 2.01642C49.5625 0.900409 50.4391 -0.00335693 51.5989 -0.00335693C52.7587 -0.00335693 53.6353 0.900409 53.6353 2.01642C53.6353 3.13244 52.7348 4.0362 51.5989 4.0362ZM53.3045 17.644H49.9207V5.77184H53.3045V17.644Z" fill="#0062E2"></path><path d="M41.0629 17.9282C38.508 17.9282 36.9219 16.552 36.9219 14.3439C36.9219 11.8757 39.006 11.2561 40.9674 10.8521L42.2704 10.5919C43.8566 10.2838 44.8492 10.0681 44.8492 8.90421C44.8492 7.88405 44.0203 7.4082 42.98 7.4082C41.9396 7.4082 41.0629 7.83612 40.9913 9.02402H37.4199C37.5393 6.53182 39.6917 5.39185 43.0277 5.39185C44.6377 5.39185 45.7736 5.67598 46.5991 6.15183C47.9942 7.00767 48.2091 8.38386 48.2091 9.78401V15.6722C48.2091 16.4561 48.233 17.1203 48.2808 17.644H44.9209V16.0282C44.2591 17.0244 43.171 17.9282 41.0629 17.9282ZM42.3864 15.6961C43.8771 15.6961 44.8015 14.7239 44.8015 13.2279V11.7319C44.5183 11.9441 43.7372 12.1838 43.0277 12.3721L42.673 12.4679C41.4177 12.8 40.5444 13.0362 40.5444 14.1077C40.5444 15.0799 41.2062 15.6996 42.3898 15.6996L42.3864 15.6961Z" fill="#0062E2"></path><path d="M27.6019 11.4683V8.80834H36.0716V17.6406H33.0187V15.5968C32.0943 16.9251 30.5593 17.9966 28.1204 17.9966C23.4369 17.9966 20.5 14.5527 20.5 9.28076C20.5 4.00879 23.8156 0.640213 28.6661 0.640213C32.5241 0.640213 35.2188 2.49225 35.884 5.53219H32.0977C31.6952 4.06014 30.3955 3.15638 28.69 3.15638C26.0157 3.15638 24.2897 5.36444 24.2897 9.30815C24.2897 13.2519 26.0157 15.4839 28.7378 15.4839C31.0573 15.4839 32.5002 13.9639 32.6673 11.4717H27.6053L27.6019 11.4683Z" fill="#0062E2"></path><path d="M11.5469 6.31611V12.372L17.5811 6.31611V0.260193L11.5469 6.31611Z" fill="#0062E2"></path><path d="M5.51486 12.372C3.85025 10.7014 3.85025 7.98669 5.51486 6.3161C6.35057 5.47738 7.44212 5.05973 8.53366 5.05973V0.780533C6.35057 0.780533 4.16407 1.61925 2.49947 3.28985C-0.833156 6.63447 -0.833156 12.0571 2.49947 15.4051C5.83209 18.7497 11.2352 18.7497 14.5713 15.4051L11.5525 12.3754C9.88786 14.046 7.18288 14.046 5.51827 12.3754L5.51486 12.372Z" fill="#0062E2"></path></g><defs><clipPath id="clip0_1_678"><rect width="58.5" height="18" fill="white"></rect></clipPath></defs></svg>
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
