import { Github, Linkedin, Mail, MapPin, Phone, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4">
            <span className="gradient-text">Aya Iskandar</span>
          </motion.h1>

          {/* Title */}
          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-6">
            Mobile & Web Developer
          </motion.h2>

          {/* Tagline */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Flutter Developer passionate about{' '}
            <span className="text-primary">clean architectures</span>, responsive UIs, and{' '}
            <span className="text-secondary">scalable backend integrations</span>
          </motion.p>

          {/* Location */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin size={18} className="text-primary" />
            <span>Beirut, Lebanon</span>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-12">
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:ayaiskandar.inbox@gmail.com"
              className="p-3 glass-card rounded-xl glow-effect group"
              aria-label="Email"
            >
              <Mail size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+96181099183"
              className="p-3 glass-card rounded-xl glow-effect group"
              aria-label="Phone"
            >
              <Phone size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/aya-iskandar-10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-xl glow-effect group"
              aria-label="GitHub"
            >
              <Github size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/aya-iskandar-3635982ab"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-xl glow-effect group"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px hsl(280 85% 65% / 0.3)" }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="px-8 py-4 rounded-xl font-semibold text-primary-foreground transition-all duration-300"
              style={{ background: 'var(--gradient-primary)' }}
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, borderColor: "hsl(280 85% 65% / 0.5)" }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-8 py-4 rounded-xl font-semibold glass-card border border-border transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#experience" aria-label="Scroll to experience">
            <ChevronDown size={32} className="text-muted-foreground" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};