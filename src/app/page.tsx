import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Projects from '@/components/Projects';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who will we be working with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A small, focused team led by senior engineers. The people who pitch are the people who build. No agency layer, no junior handoffs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do we know you can ship?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Six live products in the selected work section, all built from scratch. References available on request.',
      },
    },
    {
      '@type': 'Question',
      name: "What if our project doesn't fit a package?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We handle custom engagements all the time. Reach out and describe what you're building — we'll scope something that works.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you take equity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We're open to it for the right project. We've done equity arrangements before. Let's talk about what makes sense for both sides.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <Hero />
      <Services />
      <Pricing />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
