
import { Analytics } from "@vercel/analytics/react"
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <div className="min-h-screen bg-[#FEFBF6] text-[#110043]">
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
