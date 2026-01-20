import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {/* Email */}
            <motion.a
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:ayaiskandar.inbox@gmail.com"
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 group flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Email
                </h3>
                <p className="text-muted-foreground text-sm">ayaiskandar.inbox@gmail.com</p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+96181099183"
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 group flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Phone
                </h3>
                <p className="text-muted-foreground text-sm">+961 81 099 183</p>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/aya-iskandar-10"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 group flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Github size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  GitHub
                </h3>
                <p className="text-muted-foreground text-sm">github.com/aya-iskandar-10</p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.linkedin.com/in/aya-iskandar-3635982ab"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 group flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Linkedin size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  LinkedIn
                </h3>
                <p className="text-muted-foreground text-sm">Connect with me</p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};