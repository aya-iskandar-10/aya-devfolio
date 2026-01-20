import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Dart', icon: '/icons/dart.svg' },
      { name: 'Java', icon: '/icons/javaa.svg' },
      { name: 'C#', icon: '/icons/csharp.svg' },
      { name: 'HTML', icon: '/icons/html.svg' },
      { name: 'CSS', icon: '/icons/css.svg' },
      { name: 'JavaScript', icon: '/icons/javascript.svg' },
      { name: 'Python', icon: '/icons/python.svg' },
      { name: 'C++', icon: '/icons/cpp.svg' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Flutter', icon: '/icons/flutter.svg' },
      { name: '.NET Core', icon: '/icons/dotnetcore.svg' },
      { name: 'Bootstrap', icon: '/icons/bootstrapp.svg' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'GitHub', icon: 'icons/GitHub_Invertocat_White.svg' },
      { name: 'REST APIs', icon: '/icons/api.svg' },
      { name: 'Postman', icon: '/icons/postman-logo_svgstack_com_29031768825482.svg' },
      { name: 'Figma', icon: '/icons/figma.svg' },
   //   { name: 'CI/CD', icon: '/icons/cicd.svg' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: '/icons/mysql.svg' },
      { name: 'SQLite', icon: '/icons/sqlite.svg' },
 //     { name: 'GraphQL', icon: '/icons/graphql.svg' },
      { name: 'Database Design', icon: '/icons/database.svg' },
      { name: 'Firebase', icon: '/icons/firebase.svg' },
      { name: 'Supabase', icon: '/icons/supabase-icon.svg' },
    ],
  },
  {
    title: 'Concepts',
    skills: [
      { name: 'OOP', icon: '/icons/oop.svg' },
      { name: 'Clean Architecture', icon: '/icons/architecture.svg' },
      { name: 'Debugging', icon: '/icons/debug.svg' },
 //     { name: 'DSA', icon: '/icons/dsa.svg' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-1/2 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 group"
            >
              <h3 className="font-bold text-foreground mb-6 text-center">{category.title}</h3>

              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-muted/30 hover:bg-primary/10 transition-all cursor-pointer group/skill"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 object-contain group-hover/skill:scale-110 transition-transform"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-icon')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'fallback-icon w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-xs';
                          fallback.textContent = skill.name.substring(0, 2).toUpperCase();
                          parent.insertBefore(fallback, target);
                        }
                      }}
                    />
                    <span className="text-xs text-muted-foreground group-hover/skill:text-foreground transition-colors text-center leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
