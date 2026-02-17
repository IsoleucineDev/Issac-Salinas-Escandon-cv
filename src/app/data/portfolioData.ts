// Datos del portafolio de Issac Salinas Escandon
import profileImg from "/src/assets/86ba08ad53a2269f2ec7a5aa1b4f168d5154f7d9.png";

export const personalInfo = {
  name: "Issac Salinas Escandon",
  title: "Ingeniero en Mecatrónica",
  email: "diazsalinasisssac@gmail.com",
  phone: "+52 722 2615857",
  location: "Metepec, Estado de México",
  birthDate: "26/3/2002",
  bio: "Ingeniero en Mecatrónica apasionado por la robótica colaborativa y manufactura inteligente. Experiencia en automatización, diseño 3D y liderazgo técnico de proyectos innovadores. Presidente de grupo estudiantil con logros internacionales en competencias de robótica.",
  profileImage: profileImg,
  social: {
    github: "https://github.com/issacsalinas",
    linkedin: "https://linkedin.com/in/issac-salinas",
    twitter: "https://twitter.com/issacsalinas",
  }
};

export const education = {
  institution: "Tecnológico de Monterrey Campus Toluca",
  degree: "Ingeniería en Mecatrónica",
  period: "2022 - 2026",
  logo: "https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhZGVyc2hpcCUyMHRlYW18ZW58MXx8fHwxNzcxMjE0NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
};

export const projects = [
  {
    id: 1,
    title: "Implementación de Robótica Colaborativa (Cobots)",
    titleEn: "Collaborative Robotics Implementation (Cobots)",
    description: "Colaboré en la puesta en marcha y programación de cobots FANUC CRX-30iA utilizando Tablet TP. Tomé el curso 'CXR-Series Preparación / Programación'.",
    descriptionEn: "Collaborated in the commissioning and programming of FANUC CRX-30iA cobots using Tablet TP. Completed the 'CXR-Series Setup / Programming' course.",
    icon: "robot",
    technologies: ["FANUC CRX-30iA", "Tablet TP", "Robótica Colaborativa", "Automatización"],
    technologiesEn: ["FANUC CRX-30iA", "Tablet TP", "Collaborative Robotics", "Automation"],
    company: "General Motors Toluca",
    image: "https://images.unsplash.com/photo-1715059250871-08786b8a884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3QlMjBhcm0lMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc3MTIyOTg4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Proyecto Camshaft Lock (Operational Excellence)",
    titleEn: "Camshaft Lock Project (Operational Excellence)",
    description: "Coordiné el proyecto de bloqueo de árbol de levas. Coordiné la ingeniería inversa mediante escaneo 3D y manufactura aditiva con el área de manufactura operativa, generando documentación técnica y de diseño.",
    descriptionEn: "Coordinated the camshaft lock project. Led reverse engineering through 3D scanning and additive manufacturing with the operational manufacturing area, generating technical and design documentation.",
    icon: "cog",
    technologies: ["Escaneo 3D", "Manufactura Aditiva", "Ingeniería Inversa", "Diseño CAD"],
    technologiesEn: ["3D Scanning", "Additive Manufacturing", "Reverse Engineering", "CAD Design"],
    company: "General Motors Toluca",
    image: "https://images.unsplash.com/photo-1549563316-5384a923453e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHNjYW5uaW5nJTIwZW5naW5lZXJpbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MTM0MjE1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Conversión de Vehículo de Combustión a Eléctrico",
    titleEn: "Combustion to Electric Vehicle Conversion",
    description: "Manufactura de componentes mecánicos para la integración del sistema electrónico. Diseño, montaje e integración del banco de baterías de 96V. Ejecución de soldaduras eléctricas e integración mecánica-eléctrica de componentes.",
    descriptionEn: "Manufacturing of mechanical components for electronic system integration. Design, assembly and integration of 96V battery bank. Execution of electrical welding and mechanical-electrical integration of components.",
    icon: "zap",
    technologies: ["Soldadura Eléctrica", "Integración Mecánica-Eléctrica", "Diseño 3D", "Manufactura"],
    technologiesEn: ["Electrical Welding", "Mechanical-Electrical Integration", "3D Design", "Manufacturing"],
    company: "Tec de Monterrey",
    image: "https://images.unsplash.com/photo-1766507679641-51002768af6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBiYXR0ZXJ5JTIwc3lzdGVtfGVufDF8fHx8MTc3MTM0MjE1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Robot de Competencia - Minisumo y Guerra 3lb",
    titleEn: "Competition Robot - Minisumo and 3lb BattleBot",
    description: "Diseño y manufactura integral de robots de competencia. Responsable de la selección de materiales, diseño mecánico, integración electrónica y programación para optimizar el rendimiento en combate.",
    descriptionEn: "Comprehensive design and manufacturing of competition robots. Responsible for material selection, mechanical design, electronic integration and programming to optimize combat performance.",
    icon: "trophy",
    technologies: ["SolidWorks", "Arduino", "Diseño Mecánico", "Electrónica"],
    technologiesEn: ["SolidWorks", "Arduino", "Mechanical Design", "Electronics"],
    company: "Tec de Monterrey",
    image: "https://images.unsplash.com/photo-1763788427851-e329a047356b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGNvbXBldGl0aW9uJTIwYmF0dGxlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzEzNDIxNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "#",
    github: "#"
  }
];

export const certifications = [
  {
    id: 1,
    title: "Certificación Pearson (PTE) - Inglés Intermedio B2",
    issuer: "Pearson",
    date: "2024",
    image: "https://images.unsplash.com/photo-1762329388386-22bf162a9368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjZXJ0aWZpY2F0ZSUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc3MTIxMzk5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    credentialId: "B2 Level"
  },
  {
    id: 2,
    title: "CXR-Series Preparación / Programación",
    issuer: "FANUC",
    date: "2025",
    image: "https://images.unsplash.com/photo-1762329388386-22bf162a9368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjZXJ0aWZpY2F0ZSUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc3MTIxMzk5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    credentialId: "FANUC-CXR"
  },
  {
    id: 3,
    title: "Certificación DC-3 en Soldadura con Microalambre (GMAW/MIG)",
    issuer: "STPS México",
    date: "2024",
    image: "https://images.unsplash.com/photo-1762329388386-22bf162a9368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjZXJ0aWZpY2F0ZSUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc3MTIxMzk5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    credentialId: "DC-3"
  }
];

export const experiences = [
  {
    id: 1,
    company: "General Motors Toluca",
    position: "Intern en Manufactura - Planta SGE (Small Gas Engine)",
    period: "Junio 2025",
    description: "Practicante en área de manufactura en la planta de motores de gasolina pequeños, participando en proyectos de robótica colaborativa, optimización de procesos y excelencia operacional.",
    achievements: [
      "Implementación de Robótica Colaborativa (Cobots): Colaboré en la puesta en marcha de cobots FANUC CRX-30iA",
      "Mejora de Procesos (KPIs): Logré la optimización de la línea de ensamble, reduciendo riesgos ergonómicos críticos y aumentando las JPH (Unidades por hora)",
      "Gestión de Cambios y Estandarización: Desarrollé la documentación técnica bajo metodología MDCS (Management of Change), creando Work Standards, manuales de operación y protocolos de seguridad",
      "Proyecto OSR (Operational Excellence): Coordiné el proyecto 'Camshaft Lock' mediante ingeniería inversa con escaneo 3D y manufactura aditiva",
      "Gestión de Proveedores: Comunicación técnica y negociación en inglés con proveedores internacionales para especificación y adquisición de refacciones robóticas"
    ]
  },
  {
    id: 2,
    company: "Tec de Monterrey",
    position: "Presidente y Cofundador de Grupo Estudiantil de Robótica",
    period: "2025",
    description: "Fundador y líder del equipo de robótica estudiantil, logrando participación en competencias internacionales y negociando patrocinios con empresas clave.",
    achievements: [
      "Campeonatos Internacionales: Ecuador 2025 (Robot and Science Challenger) - 1er Lugar en 4 categorías: MiniSumo, Guerra 3lb, Seguidor de Línea y Microsumo Autónomo",
      "Japón 2025 (All Japan Robot Sumo): Clasificación por invitación exclusiva (Top 20 internacional) para competir en Tokio",
      "Presencia Global: Lideré delegaciones para RoboChallenge Rumania 2024 y RSM Challenge Brasil 2025",
      "Nacional: Campeón en categoría Guerra 3lb (Robotics by Otomi ORT 2025) y 15 podios nacionales",
      "Gestión Ejecutiva y Patrocinios: Coordiné equipos multidisciplinarios (Mecánica, Electrónica, Finanzas)",
      "Negocié y cerré alianzas estratégicas con empresas como EDASIM, Krispy Kreme y DC Editorial para financiamiento de viajes y prototipos",
      "Ingeniero de Producto: Diseño y manufactura integral de robots de competencia"
    ]
  },
  {
    id: 3,
    company: "Tec de Monterrey",
    position: "Proyecto: Conversión de Vehículo a Eléctrico",
    period: "2025",
    description: "Proyecto académico enfocado en la conversión de un vehículo de combustión interna a eléctrico, involucrando manufactura mecánica, diseño eléctrico e integración de sistemas.",
    achievements: [
      "Manufactura de componentes mecánicos para la integración del sistema electrónico",
      "Diseño, montaje e integración del banco de baterías de 96V, considerando distribución, balanceo y criterios de seguridad",
      "Ejecución de soldaduras eléctricas del sistema de potencia, asegurando continuidad eléctrica y confiabilidad operativa",
      "Integración mecánica-eléctrica de componentes, optimizando espacio y considerando vibraciones y estabilidad del vehículo"
    ]
  },
  {
    id: 4,
    company: "Ttec México",
    position: "Agente de Atención al Cliente",
    period: "2020 - 2021",
    description: "Gestión integral de la atención al cliente en plataformas bilingües (español e inglés), brindando soporte técnico y resolviendo problemas de manera eficiente.",
    achievements: [
      "Comunicación efectiva vía chat interno y llamadas para resolución de dudas y problemas",
      "Identificación de necesidades del cliente para ofrecer soluciones personalizadas y eficientes",
      "Administración y actualización de la base de datos de cartera de clientes",
      "Resolución oportuna y precisa de solicitudes, siguiendo protocolos establecidos"
    ]
  }
];

export const skills = [
  { name: "SolidWorks" },
  { name: "Torno" },
  { name: "Fresadora" },
  { name: "CNC" },
  { name: "TIG/MAG" },
  { name: "GMAW/MIG (DC-3)" },
  { name: "PLC" },
  { name: "Hardware Industrial" },
  { name: "Cobots FANUC CRX" },
  { name: "MATLAB" },
  { name: "Java (básico)" },
  { name: "Excel/Microsoft 365" },
  { name: "Gestión de Datos" },
  { name: "Sistemas de Alta Tensión (HV)" },
];

// Aptitudes profesionales
export const professionalSkills = [
  "Liderazgo técnico en proyectos de robótica y manufactura",
  "Gestión multidisciplinaria y cumplimiento de objetivos",
  "Comunicación efectiva con equipos y proveedores",
  "Resolución de problemas en entornos industriales",
  "Trabajo en equipo, organización y negociación"
];

// Logros destacados
export const achievements = [
  {
    title: "1er Lugar Ecuador 2025",
    description: "Robot and Science Challenger - 4 categorías ganadas",
    icon: "trophy"
  },
  {
    title: "Top 20 Internacional",
    description: "Clasificación para All Japan Robot Sumo en Tokio",
    icon: "award"
  },
  {
    title: "Campeón Nacional",
    description: "Guerra 3lb (Robotics by Otami ORT 2025)",
    icon: "medal"
  },
  {
    title: "15 Podios Nacionales",
    description: "En diversas categorías de competencias de robótica",
    icon: "star"
  },
  {
    title: "Líder de Participaciones",
    description: "RoboChallenge Rumania 2024 y RSM Challenge Brasil 2025",
    icon: "users"
  },
  {
    title: "Patrocinios Estratégicos",
    description: "Alianzas con EDASIM, Krispy Kreme y DC Editorial",
    icon: "handshake"
  }
];
