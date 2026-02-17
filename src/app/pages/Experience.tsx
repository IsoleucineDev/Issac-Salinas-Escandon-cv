import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export function Experience() {
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
            Experiencia
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl">
            Mi trayectoria profesional en robótica y manufactura
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="border-2 border-foreground/20 rounded-2xl p-8 md:p-10 hover:border-[#D0CEFD] transition-all shadow-lg hover:shadow-xl bg-background/50">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2 drop-shadow-sm">{exp.position}</h2>
                    <p className="text-xl text-foreground/60">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#FFEAA7]/20 text-foreground rounded-full border border-[#FFEAA7]/40 shadow-sm">
                    <Calendar size={18} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-foreground/70 leading-relaxed mb-8 p-4 bg-foreground/5 rounded-xl border border-foreground/10">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-foreground/40 mb-4">
                      Responsabilidades
                    </h3>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#D0CEFD]/5 transition-colors">
                          <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#D0CEFD] rounded-full mt-2.5 shadow-sm"></span>
                          <span className="text-foreground/70 leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Divider */}
              {index < experiences.length - 1 && (
                <div className="mt-16 border-t border-foreground/5"></div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
