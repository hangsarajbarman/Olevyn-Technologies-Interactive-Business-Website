import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from './ui/SectionWrapper';
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Olevyn Technologies transformed our entire digital infrastructure. Their expertise in cloud solutions helped us scale 10x without any downtime.",
    author: "Sarah Chen",
    role: "CTO, TechFlow Inc.",
    company: "TechFlow",
  },
  {
    quote:
      "The team's attention to security and performance is unmatched. They delivered a solution that exceeded all our expectations.",
    author: "Michael Roberts",
    role: "VP Engineering, DataVault",
    company: "DataVault",
  },
  {
    quote:
      "Working with Olevyn Technologies was a game-changer. Their AI solutions helped us automate 60% of our manual processes.",
    author: "Emily Watson",
    role: "Head of Operations, Nexus AI",
    company: "Nexus AI",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <SectionWrapper id="testimonials" className="py-12 md:py-16 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        style={{
          background: "radial-gradient(circle, hsl(25 100% 50% / 0.03) 0%, transparent 50%)",
        }}
      />

      <div className="relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-wider uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card p-6 md:p-10 relative">
            <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
              <Quote className="w-5 h-5 text-primary" />
            </div>

            <div className="pt-3">
              <motion.blockquote
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl lg:text-2xl text-foreground font-light leading-relaxed mb-6"
              >
                "{testimonials[activeIndex].quote}"
              </motion.blockquote>

              <motion.div
                key={`author-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-between"
              >
                <div>
                  <div className="font-display text-base font-semibold text-foreground">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[activeIndex].role}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-10 opacity-40"
        >
          {["TechFlow", "DataVault", "Nexus AI", "CloudBase", "SecureNet"].map((company) => (
            <div key={company} className="font-display font-bold text-base md:text-lg">
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;