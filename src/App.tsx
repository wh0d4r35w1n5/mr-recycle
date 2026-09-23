import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CursorGlow } from './components/CursorGlow';
import { Footer } from './components/Footer';
import { Founders } from './components/Founders';
import { GrainOverlay } from './components/GrainOverlay';
import { Hero } from './components/Hero';
import { Insights } from './components/Insights';
import { LogoMarquee } from './components/LogoMarquee';
import { Nav } from './components/Nav';
import { Personas } from './components/Personas';
import { Preloader } from './components/Preloader';
import { ScrollProgress } from './components/ScrollProgress';
import { Services } from './components/Services';
import { SmoothScroll } from './components/SmoothScroll';
import { StatsStrip } from './components/StatsStrip';
import { Testimonials } from './components/Testimonials';
import { Work } from './components/Work';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <SmoothScroll>
      <div className="bg-[#F7F7F7] relative">
        <AnimatePresence>{loading && <Preloader />}</AnimatePresence>
        <ScrollProgress />
        <CursorGlow />
        <GrainOverlay />

        <Nav />
        <Hero />
        <main>
          <LogoMarquee />
          <StatsStrip />
          <Personas />
          <Services />
          <Work />
          <About />
          <Founders />
          <Testimonials />
          <Insights />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
