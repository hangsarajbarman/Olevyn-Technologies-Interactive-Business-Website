import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Cloud, Cpu, ShieldCheck, BarChart3, Grid3X3, MoveHorizontal } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'Web Development',
    description: 'Enterprise-grade web applications with cutting-edge technologies and scalable architecture.',
    icon: Globe,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Mobile Solutions',
    description: 'Native iOS and Android applications delivering exceptional user experiences.',
    icon: Smartphone,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Secure, scalable cloud solutions optimized for performance and reliability.',
    icon: Cloud,
    color: 'from-cyan-400 to-teal-500',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent automation and predictive analytics to drive business growth.',
    icon: Cpu,
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions protecting critical business assets.',
    icon: ShieldCheck,
    color: 'from-emerald-400 to-teal-500',
  },
  {
    title: 'Data Analytics',
    description: 'Advanced analytics and visualization for data-driven decision making.',
    icon: BarChart3,
    color: 'from-blue-400 to-cyan-500',
  },
];

const Services: React.FC = () => {
  const constraintsRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [viewAll, setViewAll] = useState(false);

  return (
    <SectionWrapper id="services" className="text-white relative pt-4 lg:pt-6 pb-8 lg:pb-10">
      <div className="pt-6 pb-8 relative">
        <div className="relative z-10">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium tracking-wide">
                Our Services
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
            >
              Comprehensive Digital
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Solutions & Services
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Partner with us to transform your vision into reality through innovative technology solutions tailored to
              your business needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-500 text-sm"
            >
              {!viewAll && (
                <>
                  <div className="flex gap-1 items-center">
                    <motion.div
                      className="w-8 h-1 bg-cyan-400 rounded-full"
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="w-1 h-1 bg-slate-600 rounded-full" />
                    <div className="w-1 h-1 bg-slate-600 rounded-full" />
                  </div>
                  <span>Drag to explore</span>
                </>
              )}
              
              <motion.button
                onClick={() => setViewAll(!viewAll)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 hover:bg-cyan-500/20 transition-all duration-300"
              >
                {viewAll ? (
                  <>
                    <MoveHorizontal size={16} />
                    <span>Drag View</span>
                  </>
                ) : (
                  <>
                    <Grid3X3 size={16} />
                    <span>View All</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          </div>

          {/* Service Cards */}
          {viewAll ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="group relative select-none"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="relative h-full bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden"
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="p-8 flex flex-col gap-4 items-center text-center">
                      <motion.div
                        className={`relative w-16 h-16 mb-2 rounded-2xl bg-gradient-to-br ${service.color} p-[1px]`}
                        whileHover={{ rotate: [0, -3, 3, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                          <service.icon size={28} className="text-white" strokeWidth={1.4} />
                        </div>
                      </motion.div>

                      <h3 className="text-2xl font-semibold text-white leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 group-hover:bg-clip-text transition-all duration-300">
                        {service.title}
                      </h3>

                      <p className="text-slate-400 leading-relaxed text-base">{service.description}</p>
                    </div>

                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                    />

                    <div className="absolute bottom-0 right-0 w-28 h-28 overflow-hidden">
                      <motion.div
                        className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        style={{ borderRadius: '100% 0 0 0' }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div ref={constraintsRef} className="overflow-hidden">
              <motion.div
                ref={scrollContainerRef}
                drag="x"
                dragConstraints={constraintsRef}
                dragElastic={0.05}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 40 }}
                className="flex gap-6 md:gap-8 pb-6 cursor-grab active:cursor-grabbing"
                style={{ width: 'max-content' }}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="group relative select-none"
                    style={{ minWidth: '320px', maxWidth: '360px' }}
                  >
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="relative h-full bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden"
                    >
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      <div className="p-8 flex flex-col gap-4 items-center text-center">
                        <motion.div
                          className={`relative w-16 h-16 mb-2 rounded-2xl bg-gradient-to-br ${service.color} p-[1px]`}
                          whileHover={{ rotate: [0, -3, 3, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                            <service.icon size={28} className="text-white" strokeWidth={1.4} />
                          </div>
                        </motion.div>

                        <h3 className="text-2xl font-semibold text-white leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 group-hover:bg-clip-text transition-all duration-300">
                          {service.title}
                        </h3>

                        <p className="text-slate-400 leading-relaxed text-base">{service.description}</p>
                      </div>

                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                      />

                      <div className="absolute bottom-0 right-0 w-28 h-28 overflow-hidden">
                        <motion.div
                          className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                          style={{ borderRadius: '100% 0 0 0' }}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;