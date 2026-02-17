import { motion } from 'motion/react';
import { Bot, ScanEye, BatteryCharging, Trophy } from 'lucide-react';
import { projects } from '../data/portfolioData';

const projectIcons = {
  robot: Bot,
  cog: ScanEye,
  zap: BatteryCharging,
  trophy: Trophy
};

export function Portfolio() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-sm">
            Proyectos
          </h1>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const IconComponent = projectIcons[project.icon as keyof typeof projectIcons];
            
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  {/* Number & Info */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="text-8xl font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    <div className="p-6 bg-background/50 rounded-2xl border border-foreground/10 shadow-lg">
                      <h2 className="text-4xl font-bold mb-4 leading-tight drop-shadow-sm">
                        {project.title}
                      </h2>
                      
                      <div className="mb-6">
                        <span className="inline-block px-4 py-2 bg-[#D0CEFD] text-foreground rounded-full text-sm font-medium shadow-md">
                          {project.company}
                        </span>
                      </div>

                      <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-xs uppercase tracking-wider text-foreground/40 mb-3">Tecnologías</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 border-2 border-[#D0CEFD]/30 rounded-lg text-sm text-foreground/70 shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Icon/Visual */}
                  <div className="lg:col-span-7 flex items-center justify-center">
                    <div className="relative w-80 h-80 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#D0CEFD]/20 to-[#FFEAA7]/20 border-2 border-foreground/10 shadow-xl group-hover:shadow-2xl group-hover:border-[#D0CEFD]/30 transition-all">
                      <div className="relative">
                        <IconComponent 
                          size={160} 
                          className="text-[#D0CEFD] drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                          strokeWidth={1.5}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D0CEFD]/20 to-[#FFEAA7]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < projects.length - 1 && (
                  <div className="mt-32 border-t border-foreground/5"></div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}