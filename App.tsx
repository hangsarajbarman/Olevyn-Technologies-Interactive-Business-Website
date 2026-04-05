import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import OurTechDNA from './components/OurTechDNA';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import PaymentGateway from './components/PaymentGateway';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { Toaster } from 'sonner';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Subtle mouse follow effect for background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden">
      
      {/* Dynamic Background Glow - Increased Opacity */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-100"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 80%)`
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-30 bg-grid-pattern" />
      
      {/* Animated Ambient Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-2] pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-purple-800/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -40, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-cyan-800/20 rounded-full blur-[120px]" 
        />
        <motion.div 
           animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[40%] left-[20%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[100px]" 
        />
      </div>

      <Navbar />
      <Toaster position="top-right" richColors theme="dark" />
      
      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <OurTechDNA />
        <Testimonials />
        <PaymentGateway />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;