import { GraduationCap, BookOpen, Users, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const courses = [
  {
    title: 'Flutter and Dart Complete Guide',
    platform: 'Maximilian Schwarzmüller',
    year: '2025',
  },
  {
    title: 'Complete Flutter Development Bootcamp',
    platform: 'Dr. Angela Yu',
    year: '2025',
  },
  {
    title: '.NET Courses',
    platform: 'YouTube',
    year: '2025',
  },
  {
    title: 'Flutter BloC – From Zero to Hero',
    platform: 'Tiberiu Potec',
    year: '2025',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education & Courses</h2>
          <p className="section-subtitle mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8"
        >
          {/* Degree */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="p-3 rounded-xl bg-primary/10 text-primary"
              >
                <GraduationCap size={28} />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-foreground">BS in Computer Science</h3>
                <p className="text-primary">Maarif University</p>
                <p className="text-muted-foreground text-sm">Graduation: March 2025</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <BookOpen size={16} className="text-secondary" />
                  Technical Electives
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-secondary" />
                    Artificial Intelligence
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-secondary" />
                    Mobile Application Development (Native Java)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Users size={16} className="text-secondary" />
                  Tutoring Experience
                </h4>
                <p className="text-muted-foreground text-sm">
                  Data structures tutor, organized coding support sessions to help fellow students
                  master fundamental concepts
                </p>
              </div>
            </div>
          </motion.div>

          {/* Courses */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="p-3 rounded-xl bg-secondary/10 text-secondary"
              >
                <Play size={28} />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Courses</h3>
                <p className="text-secondary">Professional Development</p>
              </div>
            </div>

            <div className="space-y-3">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                >
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {course.title}
                  </h4>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm text-muted-foreground">{course.platform}</span>
                    <span className="text-xs text-primary font-mono">{course.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-8"
        >
          <div className="glass-card rounded-2xl p-8 text-center">
            <h3 className="text-lg font-bold text-foreground mb-4">Languages & Philosophy</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-muted/50 text-foreground"
              >
                🇱🇧 Arabic <span className="text-muted-foreground text-sm">(Native)</span>
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-muted/50 text-foreground"
              >
                🇬🇧 English <span className="text-muted-foreground text-sm">(Fluent)</span>
              </motion.span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Development Philosophy: Focus on <span className="text-primary">clean code</span>,{' '}
              <span className="text-secondary">maintainability</span>, and{' '}
              <span className="text-primary">user-friendly design</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};