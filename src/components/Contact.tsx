'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/email";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        alert('Message sent successfully!');
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(result.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#FEFBF6]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#110043]">
            Get in Touch
          </h2>
          <p className="text-[#110043]/70 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Send us a message and
            let's discuss your project.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#110043]/5 p-8 rounded-xl"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-[#110043] font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#FEFBF6] border border-[#110043]/20 focus:border-[#110043] focus:ring-1 focus:ring-[#110043] outline-none transition-colors duration-300"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-[#110043] font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#FEFBF6] border border-[#110043]/20 focus:border-[#110043] focus:ring-1 focus:ring-[#110043] outline-none transition-colors duration-300"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-[#110043] font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-[#FEFBF6] border border-[#110043]/20 focus:border-[#110043] focus:ring-1 focus:ring-[#110043] outline-none transition-colors duration-300 resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#110043] text-[#FEFBF6] py-3 px-6 rounded-lg font-semibold hover:bg-[#110043]/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
