import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router';
import { personalInfo, skills, education } from '../data/portfolioData';

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Minimal & Clean */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                {/* Main Title */}
                <div className="space-y-4">
                  <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.9] drop-shadow-sm">
                    Issac
                    <br />
                    <span className="text-[#D0CEFD]">Salinas</span>
                  </h1>
                  <p className="text-2xl md:text-3xl text-foreground/60 font-light drop-shadow-sm">
                    Ingeniero Mecatrónico
                  </p>
                </div>

                {/* Description */}
                <p className="text-lg text-foreground/70 max-w-xl leading-relaxed px-6 py-4 bg-background/50 rounded-xl border border-foreground/10 shadow-sm">
                  Especializado en robótica colaborativa y manufactura inteligente. 
                  Transformando ideas innovadoras en soluciones tecnológicas de alto impacto.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link to="/portfolio">
                    <button className="group relative px-8 py-4 bg-[#D0CEFD] text-foreground rounded-full font-medium overflow-hidden transition-all hover:scale-105 active:scale-95 hover:bg-[#b8b5fb] shadow-lg hover:shadow-xl">
                      <span className="relative z-10 flex items-center gap-2">
                        Ver Proyectos
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </Link>

                  <a href="/cv-issac-salinas.pdf" download>
                    <button className="group px-8 py-4 bg-[#FFEAA7] text-foreground rounded-full font-medium hover:bg-[#fde68a] transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                      <span className="flex items-center gap-2">
                        <Download size={18} />
                        Descargar CV
                      </span>
                    </button>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border-2 border-[#D0CEFD] rounded-full hover:bg-[#D0CEFD] hover:text-foreground transition-all shadow-md hover:shadow-lg"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="w-12 h-12 flex items-center justify-center border-2 border-[#D0CEFD] rounded-full hover:bg-[#D0CEFD] hover:text-foreground transition-all shadow-md hover:shadow-lg"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D0CEFD]/20 to-[#FFEAA7]/20 rounded-3xl blur-2xl"></div>
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="relative w-full h-full object-cover rounded-3xl transition-all duration-500 border-4 border-[#D0CEFD]/30 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left - About */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-bold mb-8 drop-shadow-sm">Sobre mí</h2>
              <div className="space-y-6 text-lg text-foreground/70 leading-relaxed p-6 bg-background/50 rounded-2xl border border-foreground/10 shadow-md">
                <p>
                  Ingeniero en Mecatrónica apasionado por la robótica colaborativa y manufactura inteligente. 
                  Experiencia en automatización, diseño 3D y liderazgo técnico de proyectos innovadores. 
                  Presidente de grupo estudiantil con logros internacionales en competencias de robótica.
                </p>
              </div>
            </motion.div>

            {/* Right - Education & Skills Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Education */}
              <div className="p-6 bg-background/50 rounded-2xl border border-foreground/10 shadow-md">
                <h3 className="text-sm uppercase tracking-wider text-foreground/40 mb-4">Formación</h3>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">{education.degree}</h4>
                  <p className="text-lg text-foreground/60">{education.institution}</p>
                  <p className="text-foreground/40">{education.period}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 drop-shadow-sm">Tecnologías</h2>
            <p className="text-xl text-foreground/60">Herramientas y tecnologías que domino</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group p-6 border-2 border-[#D0CEFD]/30 rounded-2xl hover:border-[#D0CEFD] hover:bg-[#D0CEFD]/5 transition-all shadow-md hover:shadow-lg"
              >
                <p className="font-medium text-foreground">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}