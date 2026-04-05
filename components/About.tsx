import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="relative">
      {/* Background Animation Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-[-10%] w-[500px] h-[500px] border border-white/5 rounded-full border-dashed opacity-20"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] border border-cyan-500/10 rounded-full opacity-30"
        />
        <motion.div 
          animate={{ 
            y: [0, -50, 0],
            rotate: [0, 45, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-24 h-24 border border-purple-500/20 rounded-xl"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Visual Side */}
        <div className="relative order-2 lg:order-1">
          {/* Animated Rings Component */}
          <div className="relative aspect-square w-full" style={{ 
            transform: "translateZ(0)",
            WebkitFontSmoothing: "antialiased",
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}>
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              style={{ 
                willChange: "transform", 
                backfaceVisibility: "hidden", 
                transform: "translateZ(0) rotate(0deg)",
                WebkitFontSmoothing: "antialiased",
                imageRendering: "crisp-edges"
              }}
            />
            
            {/* Middle ring */}
            <motion.div
              className="absolute inset-8 rounded-full border-2 border-blue-500/40"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{ 
                willChange: "transform", 
                backfaceVisibility: "hidden", 
                transform: "translateZ(0) rotate(0deg)",
                WebkitFontSmoothing: "antialiased",
                imageRendering: "crisp-edges"
              }}
            />
            
            {/* Inner ring */}
            <motion.div
              className="absolute inset-16 rounded-full border-2 border-blue-500/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ willChange: "transform", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
            />

            {/* Center orb */}
            <div className="absolute inset-24 rounded-full bg-blue-500/20 flex items-center justify-center">
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: "radial-gradient(circle, hsl(217 91% 60% / 0.5) 0%, transparent 70%)",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
            </div>

            {/* Floating nodes */}
            {[0, 72, 144, 216, 288].map((rotation, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-blue-500"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${rotation}deg) translateY(-140px) translateX(-50%) translateZ(0)`,
                  boxShadow: "0 0 0 2px hsl(217 91% 60% / 0.3)",
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                  WebkitFontSmoothing: "antialiased",
                  imageRendering: "crisp-edges"
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </div>

        {/* Content Side */}
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
            Redefining what's possible in the <span className="text-white">digital realm.</span>
          </h2>
          <div className="space-y-6 text-lg text-neutral-400 font-light">
            <p>
              At Olevyn Technologies, we don't just write code; we engineer the future. Born from a vision to merge aesthetic perfection with technical robustness, we serve as the bridge between ambitious ideas and reality.
            </p>
            <p>
              Our team consists of visionary designers, elite engineers, and strategic thinkers dedicated to pushing boundaries. We specialize in creating high-performance digital ecosystems that stand the test of time.
            </p>
          </div>
          
          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Innovation First</h3>
              <p className="text-sm text-neutral-500">Leveraging cutting-edge tech stacks.</p>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Global Impact</h3>
              <p className="text-sm text-neutral-500">Solutions that scale worldwide.</p>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default About;