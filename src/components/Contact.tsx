'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/email';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Prefill message if navigated from a service/pricing Inquire button
  useEffect(() => {
    const service = sessionStorage.getItem('prefillService');
    if (service) {
      setFormData((prev) => ({
        ...prev,
        message: `Hi, I'm interested in your ${service} service. I'd love to learn more.`,
      }));
      sessionStorage.removeItem('prefillService');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(result.error || 'Failed to send. Please try again.');
      }
    } catch {
      alert('Failed to send. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-28 px-6 bg-ink">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — heading + contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 tracking-widest uppercase text-flame font-condensed text-[11px] font-medium italic">
              LET&apos;S WORK TOGETHER
            </div>

            <h2
              className="font-sans font-bold text-white leading-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Email us about
              <br />
              <em className="font-serif italic font-normal text-flame">
                your project.
              </em>
            </h2>

            <div className="space-y-3">
              {[
                { label: 'Email', value: 'rafael@litsolutions.dev', href: 'mailto:rafael@litsolutions.dev' },
                { label: 'Phone', value: '(305) 310-1159', href: 'tel:+13053101159' },
                { label: 'Location', value: 'Miami, FL', href: null },
                { label: 'Response', value: 'Replies within 24h', href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="w-20 flex-shrink-0 text-cream/30 font-condensed text-[11px] tracking-wider uppercase">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-cream/60 transition-colors hover:text-white"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-cream/60">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="rounded-2xl p-8 text-center bg-cream/[5%] border border-cream/10">
                <div className="text-3xl mb-3">✓</div>
                <h3 className="font-sans text-white mb-2 text-[20px] font-bold">
                  Message sent!
                </h3>
                <p className="text-cream/50 text-sm">
                  We&apos;ll reply within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-6 space-y-4 bg-cream/[5%] border border-cream/10"
              >
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block mb-1.5 text-cream/50 font-condensed text-[11px] tracking-wider uppercase"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as 'name' | 'email']}
                      onChange={handleChange}
                      required
                      placeholder={field.placeholder}
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors bg-cream/[7%] border border-cream/[12%] text-cream placeholder:text-cream/30"
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1.5 text-cream/50 font-condensed text-[11px] tracking-wider uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none bg-cream/[7%] border border-cream/[12%] text-cream placeholder:text-cream/30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50 bg-flame text-white font-condensed"
                >
                  {isSubmitting ? 'Sending...' : 'Send message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
