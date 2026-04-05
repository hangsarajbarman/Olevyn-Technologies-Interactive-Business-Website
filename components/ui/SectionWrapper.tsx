import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fullWidth?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = "", fullWidth = false }) => {
  return (
    <section
      id={id}
      className={`py-8 lg:py-12 relative overflow-hidden scroll-mt-28 md:scroll-mt-36 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={fullWidth ? "w-full px-8 sm:px-12" : "w-full px-8 sm:px-12"}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;