import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('¡Mensaje enviado! Te contactaré pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            Contacto
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Contact Details */}
            <div className="space-y-8 p-8 bg-background/50 rounded-2xl border-2 border-foreground/10 shadow-lg">
              <div>
                <h3 className="text-xs uppercase tracking-wider text-foreground/40 mb-3">Email</h3>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-xl font-medium hover:text-[#D0CEFD] transition-colors drop-shadow-sm break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-wider text-foreground/40 mb-3">Teléfono</h3>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="text-2xl font-medium hover:text-[#D0CEFD] transition-colors drop-shadow-sm"
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-wider text-foreground/40 mb-3">Ubicación</h3>
                <p className="text-2xl font-medium drop-shadow-sm">{personalInfo.location}</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-foreground/40 mb-4">Redes Sociales</h3>
              <div className="flex gap-4">
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center border-2 border-[#D0CEFD]/30 rounded-full hover:bg-[#D0CEFD] hover:text-foreground transition-all shadow-md hover:shadow-lg"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center border-2 border-[#D0CEFD]/30 rounded-full hover:bg-[#D0CEFD] hover:text-foreground transition-all shadow-md hover:shadow-lg"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8 p-8 bg-background/50 rounded-2xl border-2 border-foreground/10 shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-3 text-foreground/60">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-transparent border-2 border-foreground/20 focus:border-[#D0CEFD] rounded-xl outline-none transition-colors text-lg shadow-sm"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-3 text-foreground/60">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-transparent border-2 border-foreground/20 focus:border-[#D0CEFD] rounded-xl outline-none transition-colors text-lg shadow-sm"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-3 text-foreground/60">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 bg-transparent border-2 border-foreground/20 focus:border-[#D0CEFD] rounded-xl outline-none transition-colors resize-none text-lg shadow-sm"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button 
                type="submit" 
                className="group w-full px-8 py-5 bg-[#D0CEFD] text-foreground rounded-full font-medium hover:bg-[#b8b5fb] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Enviar Mensaje
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}