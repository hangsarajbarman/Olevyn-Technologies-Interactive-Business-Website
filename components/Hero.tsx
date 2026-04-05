import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import ThreeScene from './ThreeScene';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[800px] w-full flex items-center overflow-hidden">
      
      {/* 3D Background/Interactive Layer */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0 pointer-events-none" />

      {/* Content */}
      <div className="w-full px-8 sm:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-4 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md"
          >
            <span className="text-xs font-semibold text-cyan-300 tracking-wider uppercase">
              Shaping the Digital Frontier
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6"
          >
            Innovative <br />
            <span className="text-gradient-accent">Digital Solutions</span>
            <br />
            <span className="text-4xl md:text-6xl text-neutral-500 font-medium">Built for the Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-neutral-400 mb-10 max-w-lg leading-relaxed"
          >
            We architect secure, scalable, and immersive digital experiences that propel businesses into the next era of technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button showArrow onClick={() => window.open('tel:7679953929')}>
              Call Now
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Services
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-neutral-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
      </motion.div>
    </div>
  );
};

export default Hero;