import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Technical Consulting',
    description: 'Strategic technology advisory and roadmap planning for your business growth',
    icon: '💡',
  },
  {
    title: 'Custom Development',
    description: 'Bespoke software solutions tailored to your specific needs',
    icon: '⚡',
  },
  {
    title: 'Cloud Solutions',
    description: 'Modern cloud architecture and implementation services',
    icon: '☁️',
  },
  {
    title: 'Digital Transformation',
    description: 'Guide your business through digital evolution and modernization',
    icon: '🚀',
  },
];

const Services: React.FC = () => {
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
          <h2 className="text-4xl font-bold mb-4 text-[#110043]">Our Services</h2>
          <p className="text-[#110043]/70 max-w-2xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital age
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#110043]/5 p-6 rounded-xl hover:bg-[#110043]/10 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#110043]">{service.title}</h3>
              <p className="text-[#110043]/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 