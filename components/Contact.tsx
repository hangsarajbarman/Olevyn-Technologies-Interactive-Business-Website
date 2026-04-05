import React, { useRef, useState } from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { motion, useInView } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from './ui/Button';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <SectionWrapper id="contact" className="py-12 md:py-16 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, hsl(0 0% 2%) 30%, hsl(0 0% 2%) 70%, transparent 100%)',
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
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Build <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mx-auto">
            Ready to transform your business? Contact us today and let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 relative lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 flex h-full flex-col gap-6"
            >
              <div className="space-y-5 flex-1">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-border/30 bg-secondary/25 p-4 transition-all duration-300 focus-within:border-primary focus-within:bg-secondary/60 focus-within:shadow-[0_0_55px_rgba(14,165,233,0.6)] focus-within:ring-1 focus-within:ring-primary/40">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-none text-foreground placeholder-muted-foreground focus:outline-none focus:ring-0"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="rounded-2xl border border-border/30 bg-secondary/25 p-4 transition-all duration-300 focus-within:border-primary focus-within:bg-secondary/60 focus-within:shadow-[0_0_55px_rgba(14,165,233,0.6)] focus-within:ring-1 focus-within:ring-primary/40">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-none text-foreground placeholder-muted-foreground focus:outline-none focus:ring-0"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-border/30 bg-secondary/25 p-4 transition-all duration-300 focus-within:border-primary focus-within:bg-secondary/60 focus-within:shadow-[0_0_55px_rgba(14,165,233,0.6)] focus-within:ring-1 focus-within:ring-primary/40">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-transparent border-none text-foreground placeholder-muted-foreground focus:outline-none focus:ring-0"
                    placeholder="Your Company Name"
                  />
                </div>

                <div className="rounded-2xl border border-border/30 bg-secondary/25 p-4 transition-all duration-300 focus-within:border-primary focus-within:bg-secondary/60 focus-within:shadow-[0_0_55px_rgba(14,165,233,0.6)] focus-within:ring-1 focus-within:ring-primary/40">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border-none text-foreground placeholder-muted-foreground focus:outline-none focus:ring-0 transition-all duration-300 resize-none"
                    placeholder="Share details about your project..."
                  />
                </div>
              </div>

              <Button type="submit" variant="hero" className="w-full">
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 h-full flex flex-col"
          >
            <div className="glass-card p-6 space-y-6 flex-1">
              {[
                {
                  icon: MapPin,
                  title: 'Office Location',
                  content: '123 Innovation Drive, Tech City, TC 12345',
                },
                {
                  icon: Phone,
                  title: 'Phone Number',
                  content: '+1 (555) 123-4567',
                },
                {
                  icon: Mail,
                  title: 'Email Address',
                  content: 'hello@olevyntechnologies.com',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border/30 bg-secondary/20 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-0.5">
                      {item.title}
                    </div>
                    <div className="text-foreground text-sm">{item.content}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="glass-card p-5 mt-auto"
            >
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-4 h-4 text-primary" />
                <h4 className="font-display font-semibold text-foreground text-sm">
                  Business Hours
                </h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground">Closed</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-border/30">
                <p className="text-sm text-muted-foreground">
                  <span className="text-primary">24/7 Support</span> available for enterprise clients
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;