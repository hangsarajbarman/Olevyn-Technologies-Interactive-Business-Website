import React, { useRef } from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Lock, TrendingUp, Headphones } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description:
      'We stay ahead of technological trends, implementing cutting-edge solutions that give you a competitive edge.',
  },
  {
    icon: Lock,
    title: 'Security by Design',
    description:
      "Every solution is built with security at its core, protecting your data and your customers' trust.",
  },
  {
    icon: TrendingUp,
    title: 'Scalable Architecture',
    description:
      'Our solutions grow with your business, from startup to enterprise, without missing a beat.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Round-the-clock expert support ensures your systems are always running at peak performance.',
  },
];

const WhyChooseUs: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <SectionWrapper id="why-us" className="pt-8 md:pt-10 pb-12 md:pb-14 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, hsl(0 0% 2%) 50%, transparent 100%)',
          }}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center relative" ref={ref}>
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-display text-sm font-semibold tracking-wider uppercase mb-3 block">
              Why Choose Olevyn Technologies
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Built for <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
              We don&apos;t just build software — we craft digital experiences that transform businesses. Our
              commitment to quality and innovation sets us apart.
            </p>

            {/* Features list */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/40">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main card */}
              <div className="glass-card p-6 relative z-10">
                <div className="space-y-5">
                  {/* Metric bars */}
                  {[
                    { label: 'Client Satisfaction', value: 98 },
                    { label: 'Project Success Rate', value: 99 },
                    { label: 'On-Time Delivery', value: 95 },
                    { label: 'Code Quality Score', value: 97 },
                  ].map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">{metric.label}</span>
                        <span className="text-foreground font-semibold">{metric.value}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: 'linear-gradient(90deg, hsl(205 100% 52%) 0%, hsl(220 100% 60%) 100%)',
                          }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${metric.value}%` } : {}}
                          transition={{ duration: 1, delay: 0.8 + index * 0.1, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -top-3 -right-3 w-20 h-20 rounded-xl border border-primary/20"
                style={{
                  background: 'linear-gradient(135deg, hsl(205 100% 52% / 0.15) 0%, transparent 100%)',
                }}
              />
              <div
                className="absolute -bottom-3 -left-3 w-24 h-24 rounded-xl border border-accent/20"
                style={{
                  background: 'linear-gradient(135deg, hsl(220 100% 60% / 0.08) 0%, transparent 100%)',
                }}
              />
            </div>
          </motion.div>
        </div>
    </SectionWrapper>
  );
};

export default WhyChooseUs;