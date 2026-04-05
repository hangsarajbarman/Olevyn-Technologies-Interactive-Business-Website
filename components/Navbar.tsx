import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTechActive, setIsTechActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const target = document.getElementById('our-tech-dna');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsTechActive(entry.isIntersecting),
      { threshold: 0.35 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const smoothScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const start = window.scrollY;
    const headerOffset = 100;
    const targetPosition = section.getBoundingClientRect().top + window.scrollY - headerOffset;
    const distance = targetPosition - start;
    const duration = 1100;
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      window.scrollTo(0, start + distance * easedProgress);

      if (elapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full px-8 sm:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full overflow-hidden border border-white/20 bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 group-hover:border-cyan-400/60 group-hover:bg-white/10">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-cyan-500/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <img
                src="/olevyn-logo.png"
                alt="Olevyn Technologies logo"
                className="relative z-10 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <span className="font-display font-bold text-xl tracking-wide text-white group-hover:text-cyan-200 transition-colors">
              Olevyn Technologies
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button
              onClick={() => smoothScrollTo('our-tech-dna')}
              className={`group relative text-sm uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 text-neutral-200 transition-all duration-500 
                ${isTechActive ? 'text-white border-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.4)]' : 'hover:text-white hover:border-white/40'}
              `}
            >
              <span className="relative z-10">Our Tech DNA</span>
              <span 
                className={`absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent opacity-0 blur-md transition-opacity duration-500 ${
                  isTechActive ? 'opacity-100' : 'group-hover:opacity-100'
                }`} 
              />
            </button>
            <button
              onClick={() => smoothScrollTo('payment')}
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_10px_35px_rgba(6,182,212,0.35)] hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
            >
              Payment Gateway
            </button>
          </div>

          {/* Call Now Button */}
          <a
            href="tel:7679953929"
            className="hidden md:block px-5 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-cyan-50 transition-colors"
          >
            Call Now
          </a>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-neutral-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  smoothScrollTo('payment');
                }}
                className="w-full text-center text-lg font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
              >
                Payment Gateway
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  smoothScrollTo('our-tech-dna');
                }}
                className={`w-full text-center text-lg font-semibold px-6 py-3 rounded-full border border-white/10 text-white transition-all duration-300 ${
                  isTechActive ? 'border-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.35)]' : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                Our Tech DNA
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;