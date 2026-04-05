import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '#about' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Press', href: '#' },
  ],
  services: [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'Cloud Solutions', href: '#services' },
    { name: 'AI & ML', href: '#services' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Support', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'GDPR', href: '#' },
  ],
};

const socialLinks = [
  { icon: Github, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, hsl(25 100% 50% / 0.3) 50%, transparent 100%)',
        }}
      />

      <div className="w-full px-8 sm:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-10">
            <div className="lg:col-span-2">
              <motion.a
                href="#"
                className="flex items-center gap-3 mb-4 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl overflow-hidden border border-white/15 bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 group-hover:border-cyan-400/60 group-hover:bg-white/10">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-cyan-500/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <img
                    src="/olevyn-logo.png"
                    alt="Olevyn Technologies logo"
                    className="relative z-10 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <span className="font-display font-bold text-lg text-foreground group-hover:text-cyan-200 transition-colors">
                  Olevyn Technologies
                </span>
              </motion.a>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-xs">
                Building the future of digital innovation. Secure, scalable, and beautifully
                crafted solutions for modern businesses.
              </p>

              <div className="flex items-center gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-9 h-9 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-display font-semibold text-foreground uppercase text-xs tracking-wider mb-3">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-border/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Olevyn Technologies. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
                  Status
                </a>
                <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
                  Security
                </a>
                <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
                  Accessibility
                </a>
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;