export interface Treatment {
  id: string;
  name: string;
  category: "estetica" | "ortodoncia" | "implantes" | "integral";
  categoryLabel: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  recommendedFor: string;
  sessions: string;
  image: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  matricula: string;
  image: string;
  education: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  detail: string;
  treatment: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "turnos" | "cobertura" | "especialidades" | "ubicacion";
}

export interface ClinicSpace {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

export const CLINIC_INFO = {
  name: "Clínica Dental Nova",
  tagline: "Una atención dental pensada para vos.",
  location: "Av. Santa Fe 3250, Palermo, CABA, Argentina",
  shortLocation: "Palermo, CABA",
  phone: "(011) 4821-3640",
  phoneRaw: "+541148213640",
  whatsapp: "+54 9 11 5555-8294",
  whatsappRaw: "5491155558294",
  email: "hola@clinicadentalnova.com",
  hours: {
    weekdays: "Lunes a viernes: 8:30 a 19:30",
    saturdays: "Sábados: 9:00 a 13:00",
    sundays: "Domingos: Cerrado",
  },
  coordinates: {
    lat: -34.5878,
    lng: -58.4116,
  },
  googleMapsUrl: "https://maps.google.com/?q=Av.+Santa+Fe+3250,+Palermo,+CABA,+Argentina",
  instagramUrl: "https://instagram.com/clinicadentalnova.palermo",
  getWhatsAppUrl: (message?: string) => {
    const text = message
      ? encodeURIComponent(message)
      : encodeURIComponent(
          "Hola Clínica Dental Nova, me gustaría coordinar una consulta y solicitar un turno en la sede de Palermo."
        );
    return `https://wa.me/5491155558294?text=${text}`;
  },
};

export const CLINIC_SPACES: ClinicSpace[] = [
  {
    id: "consultorio-suite",
    title: "Consultorios de Atención Primaria",
    tagline: "Luz natural, sillones ergonómicos y ambiente libre de estrés.",
    description:
      "Equipados con sillones dentales de última generación en tonalidades celestes y tapizados confortables, pantalla para visualización de radiografías en tiempo real y climatización silenciosa.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    features: ["Sillones ergonómicos ultra-soft", "Monitores HD frente al paciente", "Iluminación LED biológica"],
  },
  {
    id: "scanner-digital",
    title: "Unidad de Diagnóstico & Escaneo 3D",
    tagline: "Planificación digital milimétrica sin moldes molestos.",
    description:
      "Contamos con escáner intraoral óptico de alta velocidad que crea réplicas 3D de tu boca en menos de dos minutos para diseñar ortodoncia invisible y carillas con precisión absoluta.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    features: ["Escaneo intraoral sin masilla", "Simulación inmediata de sonrisa", "Radiografía digital de baja radiación"],
  },
  {
    id: "recepcion-lounge",
    title: "Recepción & Sala de Espera Serena",
    tagline: "Diseñada para tu confort antes de cada consulta.",
    description:
      "Un entorno calmo y luminoso con arquitectura contemporánea en tonos blancos y celestes, wifi de alta velocidad, café de especialidad e infusiones orgánicas para tu bienvenida.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    features: ["Ambiente climatizado y musicalizado", "Puntualidad en turnos programados", "Atención personalizada"],
  },
];

export const TREATMENTS: Treatment[] = [
  {
    id: "odontologia-general",
    name: "Odontología general",
    category: "integral",
    categoryLabel: "Cuidado Integral",
    tagline: "Prevención, diagnóstico y cuidado integral de tu salud bucodental.",
    shortDescription:
      "Evaluación exhaustiva, limpiezas ultrasónicas, detección precoz de caries y restauraciones estéticas mínimamente invasivas.",
    fullDescription:
      "La base de una sonrisa saludable. Realizamos controles clínicos periódicos con diagnóstico digital de alta precisión, profilaxis profunda con ultrasonido y tratamientos preventivos diseñados para preservar tus piezas naturales sin intervenciones innecesarias.",
    benefits: [
      "Diagnóstico digital con cámara intraoral",
      "Restauraciones estéticas biomiméticas",
      "Limpieza profunda con tecnología piezoeléctrica",
      "Plan preventivo personalizado anual",
    ],
    recommendedFor: "Chequeos periódicos, molestias incipientes, limpieza anual y prevención.",
    sessions: "1 a 2 sesiones",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ortodoncia",
    name: "Ortodoncia",
    category: "ortodoncia",
    categoryLabel: "Ortodoncia & Alineación",
    tagline: "Alineación y armonía funcional con tecnología invisible y convencional.",
    shortDescription:
      "Alineadores invisibles de última generación y brackets estéticos de autoligado para lograr una mordida equilibrada y armónica.",
    fullDescription:
      "Corregimos apiñamientos, espacios y anomalías oclusales priorizando tanto la estética facial como la correcta función masticatoria. Planificamos cada caso mediante simulación digital 3D antes de iniciar para que veas tu resultado anticipadamente.",
    benefits: [
      "Alineadores transparentes removibles (invisibles)",
      "Brackets cerámicos y de zafiro de bajo perfil",
      "Simulación 3D del resultado antes de comenzar",
      "Controles mensuales ágiles y seguimiento continuo",
    ],
    recommendedFor: "Dientes desalineados, mordida cruzada, espacios interdentales y estética.",
    sessions: "Seguimiento periódico continuo",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "implantes-dentales",
    name: "Implantes dentales",
    category: "implantes",
    categoryLabel: "Implantes & Cirugía",
    tagline: "Rehabilitación oral fija con titanio biocompatible y diseño guiado.",
    shortDescription:
      "Recuperá piezas dentarias con máxima firmeza, aspecto 100% natural y técnicas de cirugía mínimamente invasiva.",
    fullDescription:
      "Restituimos piezas ausentes de forma definitiva devolviendo la capacidad masticatoria y la confianza al sonreír. Empleamos implantes de titanio de grado médico y coronas de zirconio cerámico de alta resistencia.",
    benefits: [
      "Planificación tomográfica guiada por computadora",
      "Coronas de zirconio cerámico de apariencia natural",
      "Procedimientos con anestesia localizada y confort absoluto",
      "Tasa de osteointegración superior al 98%",
    ],
    recommendedFor: "Pérdida de una o varias piezas dentales, reemplazo de prótesis removibles.",
    sessions: "Fase quirúrgica + rehabilitación protésica",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "estetica-dental",
    name: "Estética dental",
    category: "estetica",
    categoryLabel: "Estética & Sonrisa",
    tagline: "Diseño de sonrisa armónico, sutil y respetuoso con tu fisionomía.",
    shortDescription:
      "Carillas de porcelana, recontorneo gingival y restauraciones con resinas compuestas de alta gama para una estética impecable.",
    fullDescription:
      "Buscamos la naturalidad sobre lo artificial. Diseñamos sonrisas equilibradas que complementan los rasgos únicos de tu rostro mediante carillas ultrafinas de disilicato de litio y técnicas de microestética dental.",
    benefits: [
      "Carillas de porcelana y disilicato de litio ultrafinas",
      "Diseño Digital de Sonrisa (DSD) previo",
      "Mínimo desgaste de la estructura dental",
      "Resultados elegantes, luminosos y naturales",
    ],
    recommendedFor: "Desgaste dental, pigmentaciones severas, asimetrías o diastemas.",
    sessions: "2 a 3 sesiones",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blanqueamiento-dental",
    name: "Blanqueamiento dental",
    category: "estetica",
    categoryLabel: "Estética & Sonrisa",
    tagline: "Luminosidad y blancura segura sin comprometer el esmalte.",
    shortDescription:
      "Sistemas de blanqueamiento clínico en consultorio combinado con férulas domiciliarias para resultados duraderos y sin dolor.",
    fullDescription:
      "Eliminamos manchas extrínsecas e intrínsecas ocasionadas por café, mate, tabaco o el paso del tiempo. Utilizamos geles desensibilizantes que protegen la vitalidad del diente durante todo el proceso.",
    benefits: [
      "Aclaramiento de 3 a 7 tonos en pocas sesiones",
      "Tecnología con barrera protectora gingival",
      "Kit ambulatorio de mantenimiento incluido",
      "Protocolo anti-sensibilidad comprobado",
    ],
    recommendedFor: "Dientes oscurecidos, manchas por alimentos/infusiones o previos a eventos.",
    sessions: "1 a 2 sesiones de consultorio + refuerzo",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "endodoncia",
    name: "Endodoncia",
    category: "integral",
    categoryLabel: "Cuidado Integral",
    tagline: "Tratamiento de conducto con tecnología rotatoria y máxima precisión.",
    shortDescription:
      "Salvamos piezas comprometidas por caries profundas o traumatismos mediante instrumentación rotatoria sin dolor.",
    fullDescription:
      "Cuando la pulpa dental se inflama o infecta, la endodoncia permite preservar la pieza natural evitando la extracción. Empleamos localizadores apicales electrónicos y radiografía digital para máxima seguridad.",
    benefits: [
      "Resolución rápida del dolor y molestias",
      "Instrumentación mecanizada rotatoria",
      "Preservación de la pieza dental biológica",
      "Tratamiento frecuentemente resuelto en una sola cita",
    ],
    recommendedFor: "Dolor agudo, sensibilidad prolongada al frío/calor, caries profundas.",
    sessions: "1 a 2 sesiones",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "protesis",
    name: "Prótesis & Rehabilitación",
    category: "implantes",
    categoryLabel: "Implantes & Cirugía",
    tagline: "Restauración anatómica y funcional de la dentición completa o parcial.",
    shortDescription:
      "Coronas, puentes fijos y prótesis sobre implantes confeccionadas con materiales biocompatibles y libres de metal.",
    fullDescription:
      "Diseñamos prótesis fijas y removibles de alta fidelidad que recuperan la dimensión vertical, la masticación correcta y la estética de toda la cavidad bucal con materiales cerámicos avanzados.",
    benefits: [
      "Materiales libres de metal (Zirconio y Cerámica pura)",
      "Ajuste pasivo milimétrico mediante escaneo óptico",
      "Durabilidad y resistencia extrema a la masticación",
      "Recuperación total del confort oral",
    ],
    recommendedFor: "Múltiples piezas ausentes, desgaste severo generalizado o recambio de prótesis.",
    sessions: "3 a 4 sesiones de prueba y colocación",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "odontopediatria",
    name: "Odontopediatría",
    category: "integral",
    categoryLabel: "Cuidado Integral",
    tagline: "Cuidado dental amigable, preventivo y lúdico para niños y adolescentes.",
    shortDescription:
      "Ambiente cálido y técnicas de manejo de conducta diseñadas para generar experiencias positivas desde la primera infancia.",
    fullDescription:
      "Acompañamos el crecimiento y desarrollo dental de los más pequeños. Fomentamos hábitos de higiene saludables, aplicamos selladores de fosas y fisuras y controlamos la erupción de la dentición definitiva en un entorno libre de ansiedad.",
    benefits: [
      "Atención basada en psicología y pedagogía infantil",
      "Prevención de caries tempranas y selladores",
      "Control del recambio dental y guías de crecimiento",
      "Espacio adaptado para una visita libre de miedos",
    ],
    recommendedFor: "Bebés, niños y adolescentes en etapa de desarrollo.",
    sessions: "Controles semestrales de rutina",
    image: "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&w=1200&q=80",
  },
];

export const DIFFERENTIALS = [
  {
    number: "01",
    title: "Atención personalizada",
    description:
      "Cada tratamiento parte de las necesidades particulares de cada paciente. Escuchamos tus objetivos y diseñamos un plan clínico a tu medida, sin apuros y con explicaciones transparentes.",
    tag: "Enfoque clínico singular",
  },
  {
    number: "02",
    title: "Equipo especializado",
    description:
      "Profesionales de distintas áreas de la odontología trabajando en conjunto para abordar casos complejos de manera interdisciplinaria, asegurando el criterio más idóneo en cada etapa.",
    tag: "Interdisciplina médica",
  },
  {
    number: "03",
    title: "Tecnología moderna",
    description:
      "Equipamiento orientado a mejorar el diagnóstico y tratamiento: radiología digital de baja radiación, escaneo intraoral y materiales biocompatibles de estándar internacional.",
    tag: "Diagnóstico de precisión",
  },
  {
    number: "04",
    title: "Seguimiento",
    description:
      "Acompañamiento continuo durante las distintas etapas del tratamiento y controles post-procedimiento para garantizar la longevidad y salud de tu sonrisa.",
    tag: "Compromiso a largo plazo",
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: "valentina-ruiz",
    name: "Dra. Valentina Ruiz",
    role: "Directora & Odontóloga",
    specialty: "Odontología general y estética dental",
    bio: "Graduada con honores en la Universidad de Buenos Aires (UBA) con más de 12 años de trayectoria en estética y rehabilitación mínimamente invasiva. Fundó Clínica Dental Nova con la visión de crear un espacio donde la excelencia científica conviva con la calidez humana.",
    matricula: "MN 38.412 · MP 4.290",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    education: [
      "Odontóloga - Universidad de Buenos Aires",
      "Especialista en Estética Dental y Microodontología",
      "Miembro de la Sociedad Argentina de Odontología Estética",
    ],
  },
  {
    id: "nicolas-ferrer",
    name: "Dr. Nicolás Ferrer",
    role: "Cirujano e Implantólogo",
    specialty: "Implantología y rehabilitación oral",
    bio: "Especialista en cirugías complejas de implantes dentales, regeneración ósea guiada y prótesis fija de alta precisión. Su práctica se enfoca en técnicas de carga inmediata y microcirugía para una recuperación indolora.",
    matricula: "MN 41.205 · MP 5.118",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    education: [
      "Especialista en Cirugía e Implantología Oral (UBA)",
      "Postgrado en Carga Inmediata y Regeneración Ósea",
      "Docente invitado en programas de postgrado",
    ],
  },
  {
    id: "camila-torres",
    name: "Dra. Camila Torres",
    role: "Ortodoncista",
    specialty: "Ortodoncia y alineadores invisibles",
    bio: "Certificada en sistemas de ortodoncia digital y alineadores transparentes. Combina el análisis biométrico facial con la corrección funcional oclusal para lograr resultados que respetan la armonía natural del rostro.",
    matricula: "MN 45.890 · MP 6.042",
    image: "https://images.unsplash.com/photo-1594824813591-1550974b260d?auto=format&fit=crop&w=800&q=80",
    education: [
      "Especialista en Ortodoncia y Ortopedia Maxilar",
      "Certificación Oficial en Ortodoncia Invisible 3D",
      "Miembro de la Asociación Odontológica Argentina (AOA)",
    ],
  },
  {
    id: "martina-acosta",
    name: "Dra. Martina Acosta",
    role: "Odontopediatra",
    specialty: "Atención odontológica para niños y adolescentes",
    bio: "Dedicada en exclusiva a la atención de bebés, niños y adolescentes con enfoque en prevención, manejo respetuoso de la conducta y odontología no traumática. Crea un clima de tranquilidad y confianza en cada visita.",
    matricula: "MN 49.314 · MP 7.189",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80",
    education: [
      "Especialista en Odontopediatría y Prevención Infantil",
      "Formación en Psicología del Desarrollo y Manejo de Ansiedad",
      "Atención a pacientes de primera infancia",
    ],
  },
];

export const INSURANCES = [
  { name: "OSDE", planNote: "Planes 210, 310, 410, 450 y 510", coverage: "Directa y reintegro", badge: "Más consultada" },
  { name: "Swiss Medical", planNote: "Planes Black, Qualitas y Global", coverage: "Directa y reintegro", badge: "Atención preferencial" },
  { name: "Galeno", planNote: "Planes Oro, Plata y Azul", coverage: "Directa y reintegro", badge: "Convenio directo" },
  { name: "Medicus", planNote: "Planes Celeste, Azul y Family", coverage: "Con derivación / reintegro", badge: "Reintegro ágil" },
  { name: "Sancor Salud", planNote: "Planes Serie 3000, 4000 y 5000", coverage: "Directa y reintegro", badge: "Convenio activo" },
  { name: "Accord Salud", planNote: "Planes 210, 310 y corporativos", coverage: "Directa y reintegro", badge: "Convenio directo" },
  { name: "Pacientes particulares", planNote: "Planes de financiación en cuotas y beneficios", coverage: "Atención privada", badge: "Cuotas disponibles" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "mariana-r",
    quote: "Excelente atención desde el primer momento. Me explicaron todo el tratamiento de manera muy clara.",
    author: "Mariana R.",
    detail: "Paciente de Estética Dental y Ortodoncia",
    treatment: "Estética & Alineadores",
    rating: 5,
  },
  {
    id: "lucas-m",
    quote: "Muy buena experiencia. El consultorio es moderno y todo el equipo fue muy amable.",
    author: "Lucas M.",
    detail: "Paciente de Implantología",
    treatment: "Implante y rehabilitación",
    rating: 5,
  },
  {
    id: "carolina-m",
    quote: "Llevamos a nuestro hijo por primera vez y lograron que estuviera tranquilo durante toda la consulta.",
    author: "Carolina M.",
    detail: "Mamá de paciente de Odontopediatría",
    treatment: "Odontopediatría preventiva",
    rating: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "¿Cómo solicito un turno?",
    answer:
      "Podés solicitar tu turno de manera ágil haciendo clic en cualquiera de los botones de WhatsApp de nuestra web, o comunicándote telefónicamente al (011) 4821-3640. Nuestro equipo de coordinación te responderá a la brevedad para ofrecerte las opciones de días y horarios que mejor se adapten a tu agenda.",
    category: "turnos",
  },
  {
    question: "¿Atienden urgencias odontológicas?",
    answer:
      "Sí. Contamos con espacios de sobreturno prioritarios durante nuestros horarios de atención (Lunes a viernes de 8:30 a 19:30 y sábados de 9:00 a 13:00) para atender situaciones de dolor agudo, traumatismos dentales o pérdidas de restauraciones de forma urgente.",
    category: "turnos",
  },
  {
    question: "¿Atienden niños?",
    answer:
      "Sí, contamos con un área especializada en Odontopediatría a cargo de la Dra. Martina Acosta. Atendemos desde la primera dentición en bebés hasta niños y adolescentes, con un enfoque cálido, lúdico y preventivo para generar una relación positiva con el cuidado dental.",
    category: "especialidades",
  },
  {
    question: "¿Trabajan con obras sociales y prepagas?",
    answer:
      "Trabajamos con las principales prepagas (OSDE, Swiss Medical, Galeno, Medicus, Sancor Salud, Accord Salud, entre otras) y con pacientes particulares. La cobertura y los copagos varían según el plan contratado y la naturaleza del tratamiento. Escribinos por WhatsApp con tu credencial para que verifiquemos tu cobertura al instante.",
    category: "cobertura",
  },
  {
    question: "¿Realizan tratamientos de ortodoncia?",
    answer:
      "Sí, ofrecemos tanto ortodoncia invisible mediante placas alineadoras transparentes removibles como ortodoncia fija con brackets cerámicos de alta estética y autoligado. Realizamos un estudio diagnóstico inicial computarizado para determinar el abordaje ideal para tu fisionomía.",
    category: "especialidades",
  },
  {
    question: "¿Dónde están ubicados?",
    answer:
      "Nuestra clínica se encuentra en Av. Santa Fe 3250, en el corazón de Palermo (CABA), entre las calles Coronel Díaz y Billinghurst. Es un punto de fácil acceso, a pocos metros de la estación Bulnes / Agüero de la Línea D de subte y con múltiples líneas de colectivos y estacionamientos cercanos.",
    category: "ubicacion",
  },
];
