import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';

const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

type Technology = {
  name: string;
  short: string;
  icon: string;
  accent: string;
  glow: string;
  description: string;
  iconBg?: string;
  iconClassName?: string;
};

const technologies: Technology[] = [
  { name: 'HTML5', short: 'H5', icon: devicon('html5/html5-original.svg'), accent: 'from-[#f97316] via-[#fb5c2a] to-[#fb923c]', glow: 'rgba(251,146,60,0.55)', description: 'Semantic, accessible web foundations.' },
  { name: 'CSS3', short: 'C3', icon: devicon('css3/css3-original.svg'), accent: 'from-[#00c6ff] via-[#0072ff] to-[#4f46e5]', glow: 'rgba(14,165,233,0.5)', description: 'Fluid layouts & cinematic visuals.' },
  { name: 'React', short: 'R', icon: devicon('react/react-original.svg'), accent: 'from-[#61dafb] via-[#34d3ff] to-[#0ea5e9]', glow: 'rgba(14,165,233,0.55)', description: 'Interactive UX powered by hooks.' },
  { name: 'Node.js', short: 'N', icon: devicon('nodejs/nodejs-plain.svg'), accent: 'from-[#38ef7d] via-[#11998e] to-[#0f766e]', glow: 'rgba(16,185,129,0.45)', description: 'Scalable APIs and edge services.', iconBg: 'bg-white' },
  { name: 'PHP', short: 'PHP', icon: devicon('php/php-original.svg'), accent: 'from-[#9f7aea] via-[#7c3aed] to-[#4c1d95]', glow: 'rgba(124,58,237,0.45)', description: 'Robust CMS & backend delivery.' },
  { name: 'MySQL', short: 'SQL', icon: devicon('mysql/mysql-original.svg'), accent: 'from-[#2dd4bf] via-[#14b8a6] to-[#0d9488]', glow: 'rgba(13,148,136,0.45)', description: 'Mission-critical relational data.' },
  { name: 'Python', short: 'Py', icon: devicon('python/python-original.svg'), accent: 'from-[#facc15] via-[#fb923c] to-[#ea580c]', glow: 'rgba(250,204,21,0.45)', description: 'Automation, AI, and ML pipelines.' },
  { name: 'WordPress', short: 'W', icon: devicon('wordpress/wordpress-plain.svg'), accent: 'from-[#60a5fa] via-[#2563eb] to-[#1e3a8a]', glow: 'rgba(96,165,250,0.45)', description: 'Custom digital publishing systems.' },
  { name: 'Java', short: 'J', icon: devicon('java/java-original.svg'), accent: 'from-[#f97316] via-[#ea580c] to-[#c2410c]', glow: 'rgba(249,115,22,0.4)', description: 'Enterprise-grade application logic.' },
  { name: 'MongoDB', short: 'Mg', icon: devicon('mongodb/mongodb-original.svg'), accent: 'from-[#34d399] via-[#2dd4bf] to-[#059669]', glow: 'rgba(5,150,105,0.45)', description: 'Flexible document data layers.' },
  { name: 'Firebase', short: 'Fb', icon: devicon('firebase/firebase-plain.svg'), accent: 'from-[#fbbf24] via-[#f97316] to-[#ef4444]', glow: 'rgba(251,191,36,0.45)', description: 'Realtime experiences & auth.' },
  { name: 'Android', short: 'A', icon: devicon('android/android-plain.svg'), accent: 'from-[#22c55e] via-[#16a34a] to-[#15803d]', glow: 'rgba(34,197,94,0.45)', description: 'Native mobility engineered fast.' },
  { name: 'Flutter', short: 'Fl', icon: devicon('flutter/flutter-original.svg'), accent: 'from-[#38bdf8] via-[#0ea5e9] to-[#2563eb]', glow: 'rgba(14,165,233,0.45)', description: 'Pixel-perfect cross-platform apps.' },
  { name: 'Laravel', short: 'L', icon: devicon('laravel/laravel-original.svg'), accent: 'from-[#fb7185] via-[#f43f5e] to-[#be123c]', glow: 'rgba(244,63,94,0.4)', description: 'Elegant backend craftsmanship.' },
  { name: 'Next.js', short: 'Nx', icon: devicon('nextjs/nextjs-original.svg'), accent: 'from-[#f5f3ff] via-[#e0e7ff] to-[#c7d2fe]', glow: 'rgba(226,232,240,0.4)', description: 'SSR, ISR, and blazing performance.', iconBg: 'bg-white' },
  { name: 'Git', short: 'Gt', icon: devicon('git/git-original.svg'), accent: 'from-[#f97316] via-[#ef4444] to-[#c2410c]', glow: 'rgba(248,113,113,0.4)', description: 'Versioned collaboration rituals.' },
  { name: 'Docker', short: 'Dk', icon: devicon('docker/docker-original.svg'), accent: 'from-[#38bdf8] via-[#1d4ed8] to-[#0f172a]', glow: 'rgba(59,130,246,0.45)', description: 'Containerized delivery at scale.' },
  { name: 'AWS', short: 'AWS', icon: devicon('amazonwebservices/amazonwebservices-original-wordmark.svg'), accent: 'from-[#fde047] via-[#f97316] to-[#ea580c]', glow: 'rgba(234,88,12,0.45)', description: 'Cloud-native reliability & reach.', iconBg: 'bg-white' },
];

const particles = [
  { top: '5%', left: '10%', size: '6px', delay: '0s', opacity: 0.4 },
  { top: '20%', left: '80%', size: '8px', delay: '1s', opacity: 0.35 },
  { top: '45%', left: '15%', size: '10px', delay: '0.5s', opacity: 0.3 },
  { top: '65%', left: '75%', size: '7px', delay: '1.5s', opacity: 0.4 },
  { top: '85%', left: '35%', size: '5px', delay: '2s', opacity: 0.35 },
  { top: '30%', left: '50%', size: '9px', delay: '2.4s', opacity: 0.4 },
  { top: '70%', left: '10%', size: '8px', delay: '3s', opacity: 0.35 },
  { top: '15%', left: '60%', size: '6px', delay: '3.4s', opacity: 0.4 },
];

type Tech = typeof technologies[number];

const OurTechDNA: React.FC = () => {
  const dragConstraintsRef = useRef<HTMLDivElement | null>(null);

  const renderCard = (tech: Tech, index: number, extraClassName = '') => (
    <motion.div
      key={`${tech.name}-${extraClassName || 'grid'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.6, delay: index * 0.03 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`group relative rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl overflow-hidden transition-all duration-500 ${extraClassName}`}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at top, ${tech.glow}, transparent 70%)`,
        }}
      />
      <div className="relative flex items-center gap-4">
        <div className="relative">
          <div
            className="absolute inset-0 blur-xl rounded-2xl opacity-70"
            style={{ background: tech.glow }}
          />
          <div className={`relative size-16 rounded-2xl bg-gradient-to-br ${tech.accent} border border-white/10 shadow-inner shadow-black/40 flex items-center justify-center animate-float-slow`}>
            <div className={`relative size-12 rounded-xl flex items-center justify-center shadow-lg shadow-black/20 border border-white/10 ${tech.iconBg ?? 'bg-slate-950/80'}`}>
              <motion.img 
                src={tech.icon}
                alt={`${tech.name} icon`}
                className={`w-8 h-8 object-contain ${tech.iconClassName ?? ''}`}
                loading="lazy"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 8 }}
                transition={{ type: 'spring', stiffness: 120, damping: 12 }}
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">core</p>
          <h3 className="text-2xl font-semibold text-white">{tech.name}</h3>
        </div>
      </div>
      <p className="relative mt-6 text-base text-slate-400 leading-relaxed">
        {tech.description}
      </p>
      <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none" />
      <div className="absolute -top-10 -right-6 h-20 w-20 rounded-full border border-white/10 opacity-20" />
      <div className="absolute -bottom-12 -left-4 h-24 w-24 rounded-full border border-white/5 opacity-20" />
    </motion.div>
  );

  return (
    <SectionWrapper
      id="our-tech-dna"
      className="relative py-20"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,118,110,0.08),_transparent_60%)]" />
        <div className="absolute inset-0 opacity-40">
          {particles.map((particle, index) => (
            <span
              key={index}
              className="absolute animate-particle-float rounded-full bg-cyan-400/30"
              style={{
                top: particle.top,
                left: particle.left,
                width: particle.size,
                height: particle.size,
                animationDelay: particle.delay,
                opacity: particle.opacity,
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium tracking-wide uppercase">
            our tech dna
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-display font-bold leading-tight">
            Elevated, Battle-Tested
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Product Stacks
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            A curated stack engineered for cinematic front-ends, resilient infrastructures, and future-proof scalability.
          </p>
        </motion.div>
      </div>

      <div className="relative mt-16">
        {/* Drag Slider (mobile/tablet) */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-3 mb-8 text-slate-500 text-sm"
          >
            <div className="flex gap-1 items-center">
              <motion.div
                className="w-10 h-1 bg-cyan-400 rounded-full"
                animate={{ x: [0, 12, 0] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              />
              <div className="w-1 h-1 bg-slate-600 rounded-full" />
              <div className="w-1 h-1 bg-slate-600 rounded-full" />
            </div>
            <span>Drag to explore</span>
          </motion.div>

          <div ref={dragConstraintsRef} className="overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={dragConstraintsRef}
              dragElastic={0.04}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 40 }}
              className="flex gap-5 pb-6 cursor-grab active:cursor-grabbing"
              style={{ width: 'max-content' }}
            >
              {technologies.map((tech, index) => renderCard(tech, index, 'min-w-[280px] max-w-[320px]'))}
            </motion.div>
          </div>
        </div>

        {/* Grid (desktop) */}
        <div className="hidden lg:grid gap-6 grid-cols-3 xl:grid-cols-4">
          {technologies.map((tech, index) => renderCard(tech, index))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default OurTechDNA;
