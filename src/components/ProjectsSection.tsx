import { ExternalLink, Smartphone, Globe, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'EdTech Syndicate App',
    subtitle: 'Educational Platform',
    description:
      'Comprehensive educational technology platform featuring course management, student tracking, and interactive learning modules.',
    features: [
      'Course management system',
      'Student progress tracking',
      'Interactive learning modules',
      'Assignment submission',
      'Real-time notifications',
      'Admin dashboard',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API', 'BloC'],
    icon: Smartphone,
    featured: true,
    hasDemo: false,
    hasApp: true,
    hasVideo: true,
    videoUrl: '/videos/edtech-demo.mp4',
  },
  {
    title: 'School Bus Tracking System',
    subtitle: 'Capstone Project',
    description:
      'Full-stack Flutter + Spring Boot system for real-time school bus tracking with comprehensive safety features.',
    features: [
      'Parent and driver interfaces',
      'GPS tracking with OSM maps',
      'Secure student check-in/out system',
      'Real-time notifications',
      'Admin dashboard',
      'Emergency alerts',
    ],
    technologies: ['Flutter', 'Spring Boot', 'MySQL', 'REST API', 'OSM Maps'],
    icon: Smartphone,
    featured: true,
    hasDemo: false,
    hasApp: true,
    hasVideo: false,
  },
  {
    title: 'Face Recognition App',
    subtitle: 'ML-Powered Mobile App',
    description:
      'Advanced face recognition application using ML Kit with live camera tracking capabilities and real-time detection.',
    features: [
      'Real-time face detection',
      'Live camera tracking',
      'Multiple face recognition',
      'Offline processing',
    ],
    technologies: ['Flutter', 'Dart', 'ML Kit', 'Camera Plugin', 'BloC'],
    icon: Smartphone,
    featured: false,
    hasDemo: false,
    hasApp: true,
    hasVideo: true,
    videoUrl: '/videos/face-recognition-demo.mp4',
  },
  {
    title: 'Buddy App',
    subtitle: 'Social Companion App',
    description:
      'Social networking application connecting users with shared interests and facilitating meaningful interactions.',
    features: [
      'User matching algorithm',
      'Real-time chat',
      'Activity planning',
      'Interest-based groups',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'BloC', 'Cloud Messaging'],
    icon: Smartphone,
    featured: false,
    hasDemo: false,
    hasApp: true,
    hasVideo: true,
    videoUrl: '/videos/buddy-demo.mp4',
  },
  {
    title: 'E-commerce Website',
    subtitle: 'Full-Stack Web Application',
    description:
      'Complete e-commerce platform built with ASP.NET Core MVC featuring product management, cart functionality, and secure checkout.',
    features: [
      'Product catalog',
      'Shopping cart',
      'User authentication',
      'Order management',
    ],
    technologies: ['ASP.NET Core MVC', 'C#', 'Bootstrap', 'SQL Server'],
    icon: Globe,
    featured: false,
    hasDemo: true,
    hasApp: false,
    hasVideo: false,
    demoLink: '#',
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const VideoModal = ({ isOpen, onClose, videoUrl, title }: { 
  isOpen: boolean; 
  onClose: () => void; 
  videoUrl: string;
  title: string;
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl bg-background rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title} - Demo</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="relative aspect-video bg-black">
          <video
            className="w-full h-full"
            controls
            autoPlay
            src={videoUrl}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-1/3 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle mx-auto">
            A showcase of projects demonstrating full-stack capabilities
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 group ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    <project.icon size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-secondary text-sm font-medium">{project.subtitle}</p>
                  </div>
                </div>
                {project.featured && (
                  <motion.span
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary border border-secondary/30"
                  >
                    Featured
                  </motion.span>
                )}
              </div>

              <p className="text-muted-foreground mb-6">{project.description}</p>

              <div className={`grid ${project.featured ? 'md:grid-cols-2' : ''} gap-3 mb-6`}>
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.hasVideo && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedVideo({ url: project.videoUrl!, title: project.title })}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all text-sm font-medium"
                  >
                    <Video size={16} />
                    Watch Demo
                  </motion.button>
                )}
                {project.hasApp && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all text-sm font-medium"
                  >
                    <Smartphone size={16} />
                    View App
                  </motion.button>
                )}
                {project.hasDemo && project.demoLink && (
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
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

      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}
    </section>
  );
};