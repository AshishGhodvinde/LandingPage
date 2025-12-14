import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseMe from './components/WhyChooseMe';
import HowIWork from './components/HowIWork';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <main>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <WhyChooseMe />
        <div id="process">
          <HowIWork />
        </div>
        <div id="tech-stack">
          <TechStack />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="contact">
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;