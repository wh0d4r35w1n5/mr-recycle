import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Insights } from './components/Insights';
import { Nav } from './components/Nav';
import { Personas } from './components/Personas';
import { Services } from './components/Services';
import { StatsStrip } from './components/StatsStrip';
import { Testimonials } from './components/Testimonials';
import { Work } from './components/Work';

export default function App() {
  return (
    <div className="bg-[#F7F7F7] relative">
      <Nav />
      <Hero />
      <main>
        <StatsStrip />
        <Personas />
        <Services />
        <Work />
        <About />
        <Testimonials />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
