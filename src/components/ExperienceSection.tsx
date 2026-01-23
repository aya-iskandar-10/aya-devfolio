import { Briefcase, Calendar, ExternalLink, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Mobile Developer Intern',
    company: 'Auvia Group',
    period: 'Sep - Dec 2025 (Done)',
    location: 'Office - Bechara El-khoury, Beirut, Lebanon',
    highlights: [
      'Built an audio recording and transcription app with Arabic Speech-to-Text integration',
      'Developed a face recognition app using ML Kit with live camera tracking capabilities',
      'Built an edtech syndicate app with form application membership and membership card generation features',
      'Collaborated in a team using Git for version control',
      'Gave a trial for vmware macos for ios development environment setup',
      'Got a good exposure to firebase and supabase backend services',
      'Utilized SQLite and shared preferences for efficient local data management',
      'Focused on clean UI/UX principles throughout development',
    ],
    technologies: ['Flutter', 'Dart', 'SQLite',  'Firebase', 'Supabase',  'BloC', '\nSpeech-to-Text API', 'ML Kit', 'Git', 'Figma'],
    // projects: [
    //   {
    //     title: 'Face Recognition App',
    //     description: 'ML-powered face detection with live camera tracking',
    //     icon: Cpu,
    //     link: '#',
    //   },
    // ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
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

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle mx-auto">
            Building innovative mobile solutions with modern technologies
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 group"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="p-3 rounded-xl bg-primary/10 text-primary"
                  >
                    <Briefcase size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-primary">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-3 mb-6">
                {exp.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Projects from Experience
              {exp.projects && exp.projects.length > 0 && (
                <div className="mb-6 p-4 rounded-xl bg-muted/20 border border-border/50">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Projects Developed</h4>
                  {exp.projects.map((project, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-background/50 group/project"
                    >
                      <div className="flex items-center gap-3">
                        <project.icon size={18} className="text-primary" />
                        <div>
                          <p className="font-medium text-foreground text-sm">{project.title}</p>
                          <p className="text-xs text-muted-foreground">{project.description}</p>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <ExternalLink size={14} />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              )} */}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="tech-badge"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};