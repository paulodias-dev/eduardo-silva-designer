/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import WhatsAppOverlay from './components/WhatsAppOverlay';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <SEO />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppOverlay />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
