import { Server, Database, Globe, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const backendCapabilities = [
  {
    icon: Server,
    title: 'ASP.NET Core MVC' ,
    description: 'Building scalable web applications with Microsoft\'s modern framework',
  },
  // {
  //   icon: Code2,
  //   title: 'Spring Boot',
  //   description: 'Java-based microservices and enterprise applications',
  // },
  {
    icon: Globe,
    title: 'REST API Development',
    description: 'Designing and implementing RESTful services',
  },
  {
    icon: Database,
    title: 'Database Architecture',
    description: 'MySQL, SQLite, firebase, supabase, sql server and efficient data modeling',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const BackendSection = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute top-0 left-0 w-1/3 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Backend <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Full-stack development with robust server-side solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {backendCapabilities.map((capability, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              >
                <capability.icon size={24} />
              </motion.div>
              <h3 className="font-semibold text-foreground mb-2">{capability.title}</h3>
              <p className="text-sm text-muted-foreground">{capability.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
