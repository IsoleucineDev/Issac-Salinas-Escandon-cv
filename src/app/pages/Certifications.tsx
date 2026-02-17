import { motion } from 'motion/react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certifications, achievements } from '../data/portfolioData';

export function Certifications() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-sm">
            Certificaciones
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl">
            Formación continua y reconocimientos profesionales
          </p>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <h2 className="text-4xl font-bold mb-12 drop-shadow-sm">Logros Destacados</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 border-2 border-[#D0CEFD]/30 rounded-2xl hover:border-[#D0CEFD] hover:bg-[#D0CEFD]/5 transition-all shadow-lg hover:shadow-xl"
              >
                <h3 className="text-xl font-bold mb-3 drop-shadow-sm">{achievement.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 drop-shadow-sm">Certificaciones Profesionales</h2>

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="p-8 border-2 border-foreground/20 rounded-2xl hover:border-[#D0CEFD] transition-all shadow-lg hover:shadow-xl bg-background/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 drop-shadow-sm">{cert.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-foreground/60">
                        <span className="font-medium">{cert.issuer}</span>
                        <span className="w-1 h-1 bg-foreground/30 rounded-full"></span>
                        <span className="flex items-center gap-2">
                          <Calendar size={16} />
                          {cert.date}
                        </span>
                      </div>
                      {cert.credentialId && (
                        <p className="mt-3 text-sm text-foreground/40 font-mono px-3 py-2 bg-foreground/5 rounded-lg inline-block border border-foreground/10">
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>
                    
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#D0CEFD]/30 rounded-full hover:bg-[#D0CEFD] hover:text-foreground transition-all shadow-md hover:shadow-lg"
                      >
                        Ver Credencial
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}