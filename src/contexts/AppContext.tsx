import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types
export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface AppContextType {
  language: string;
  setLanguage: (lang: string) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  t: (key: string) => string;
}

// Available languages
export const languages: Language[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'sq', name: 'Shqip', flag: '🇦🇱' }
];

// Translations
const translations = {
  fr: {
    nav: {
      about: "À propos",
      portfolio: "Projets",
      services: "Services",
      contact: "Contact",
      discuss: "Parlons-en"
    },
    hero: {
      subtitle: "Médiamaticien",
      greeting: "Yo, moi c'est Theo Blondel.",
      title1: "Solutions",
      title2: "créatives",
      title3: "polyvalentes",
      description: "Je suis médiamaticien en Suisse, et je transforme tes idées en projets visuels propres, impactants, et vraiment stylés.",
      cta1: "On en parle ?",
      cta2: "Voir la démo"
    },
    about: {
      title: "Mon Parcours",
      subtitle: "Mon chemin vers la création",
      description: "J'ai commencé comme beaucoup : avec des montages YouTube à 10 ans, la tête dans les pixels et les effets sonores. Minecraft, Fortnite, Call of... J'ai passé des heures à tester, à bidouiller, à chercher ce qui marche.\n\nPuis le dessin est arrivé. Ensuite, la médiamatique. Et là, j'ai pigé : je veux faire ça. Créer. Concevoir. Donner vie à des idées visuelles qui parlent aux gens.",
      cta: "En savoir plus sur moi",
      stats: {
        experience: "Années d'expérience",
        projects: "Projets livrés",
        satisfaction: "Satisfaction client",
        clients: "Clients dans le monde"
      },
      skills: {
        title: "À quoi je sers ?",
        adobe: "Maîtrise complète de la suite créative",
        davinci: "Montage vidéo et étalonnage professionnel",
        autodesk: "Modélisation 3D et animation",
        figma: "Design UI/UX et prototypage"
      }
    },
    portfolio: {
      title: "Mes Projets",
      subtitle: "Quelques trucs que j'ai kiffé faire",
      description: "Une sélection de projets qui montrent mon approche et mon style.",
      viewOnBehance: "Voir sur Behance",
      clickToView: "Cliquez pour voir le projet",
      viewAll: "Voir tout sur Behance"
    },
    process: {
      title: "Mon Processus",
      subtitle: "Mon Processus Créatif",
      description: "Une approche simple, structurée et sur-mesure",
      intro: "Chaque projet est unique, mais ma méthode reste solide. Voici comment je transforme tes idées en résultats concrets.",
      steps: {
        brief: {
          title: "Brief & Écoute",
          description: "Comprendre tes besoins, tes objectifs et l'univers de ta marque."
        },
        research: {
          title: "Recherche & Moodboard",
          description: "Explorer les inspirations, les tendances et l'environnement visuel adapté à ton projet."
        },
        concept: {
          title: "Croquis & Concepts",
          description: "Esquisser les premières idées, réfléchir aux formes, aux messages, aux couleurs qui te correspondent."
        },
        design: {
          title: "Design",
          description: "Création du rendu final, avec typographies, visuels et composition professionnelle qui reflètent ton identité."
        },
        revisions: {
          title: "Révisions",
          description: "Tes retours sont essentiels. On ajuste ensemble jusqu'à valider ce qui te ressemble parfaitement."
        },
        delivery: {
          title: "Livraison & Accompagnement",
          description: "Remise des fichiers optimisés, prêts à l'emploi (web, print, réseaux). Je reste dispo pour toi !"
        }
      },
      example: {
        title: "Exemple Concret",
        subtitle: "Projet \"NOIRBRUME\"",
        description: "Découvre mon processus en action à travers une conversation réaliste avec un client fictif. De la demande initiale à la livraison finale.",
        cta1: "Démarrer un projet",
        cta2: "Voir mes réalisations"
      }
    },
    services: {
      title: "Services",
      subtitle: "Ce que je peux faire pour toi",
      description: "Des solutions créatives complètes adaptées à tes besoins et tes ambitions.",
      branding: {
        title: "Identité de Marque",
        description: "Besoin d'un logo qui claque et d'une image qui raconte qui tu es ? Je t'aide à construire une vraie identité — pas juste un logo vite fait.",
        features: [
          "Logo (pro, pas sur Canva)",
          "Charte graphique claire",
          "Identité visuelle cohérente",
          "Positionnement de marque qui tient la route"
        ]
      },
      uiux: {
        title: "UI/UX Design",
        description: "Un bon design, c'est pas juste joli. Faut que ça fonctionne. Je crée des interfaces simples, fluides et agréables à utiliser (même pour tata Josiane).",
        features: [
          "Recherche utilisateur",
          "Wireframes propres",
          "Maquettes pixel-perfect",
          "Tests pour voir si tout tient"
        ]
      },
      web: {
        title: "Développement Web",
        description: "Sites web modernes et responsives qui fonctionnent parfaitement sur tous les appareils.",
        features: [
          "Design responsive",
          "Optimisation SEO",
          "Performance rapide",
          "Maintenance facile"
        ]
      },
      mobile: {
        title: "Design Mobile",
        description: "Ton app mérite mieux qu'un template par défaut. Je te fais une interface claire, intuitive, et agréable à utiliser dans le métro.",
        features: [
          "Design iOS & Android",
          "Parcours utilisateur bien pensé",
          "Onboarding fluide",
          "Icônes, menus, et tous les petits détails qui font la diff"
        ]
      },
      print: {
        title: "Design Print",
        description: "Des trucs qu'on peut toucher. Flyers, cartes, affiches — tout ce qui se lit avec les yeux et les mains.",
        features: [
          "Mise en page soignée",
          "Bon choix de typo (pas Comic Sans, t'inquiète)",
          "Harmonies de couleurs au petit oignon",
          "Fichiers prêts pour l'imprimeur"
        ]
      },
      motion: {
        title: "Motion Design & Vidéo",
        description: "Du contenu qui bouge bien. Je monte, j'anime, je donne du rythme à ta com' visuelle.",
        features: [
          "Animation de logos stylés",
          "Montages vidéos dynamiques",
          "Teasers, trailers, reels, stories...",
          "Micro-animations et effets smooth"
        ]
      },
      cta: "Démarrer un projet"
    },
    testimonials: {
      title: "Témoignages",
      subtitle: "Ce que disent les clients",
      description: "Les retours de personnes qui m'ont fait confiance pour leurs projets.",
      trustTitle: "Ils me font confiance",
      trustSubtitle: "Entreprises et entrepreneurs qui ont choisi mes services",
      googleReviewTitle: "Tu as travaillé avec moi ?",
      googleReviewDescription: "Ton avis compte énormément ! Partage ton expérience sur Google Reviews et aide d'autres clients à découvrir la qualité de mes services créatifs.",
      googleReviewButton: "Laisser un avis sur Google",
      googleReviewFooter: "Ton avis nous aide à grandir",
      testimonial1: {
        name: "Emily Rodriguez",
        role: "Marketing Director, InnovateLab",
        content: "L'approche créative et l'expertise technique de Théo nous ont aidés à lancer une campagne digitale réussie. Les résultats parlent d'eux-mêmes – 300 % d'augmentation de l'engagement !",
        company: "InnovateLab",
        project: "Campagne digitale & Motion Graphics",
        date: "Octobre 2023"
      },
      testimonial2: {
        name: "Client anonyme",
        role: "testimonial2.role",
        content: "Théo a su capter l'essence de ma marque dès le départ. Communication fluide, délais respectés, et résultat pro. Je recommande vivement.",
        company: "testimonial2.company",
        project: "Création de logo",
        date: "Avril 2025"
      },
      testimonial3: {
        name: "Meier Nils",
        role: "Entrepreneur",
        content: "Le design de ma carte de visite est exactement ce que je cherchais : minimaliste, élégant et percutant. Merci pour ton écoute et ton professionnalisme !",
        company: "testimonial3.company",
        project: "Identité visuelle & carte de visite",
        date: "Avril 2025"
      },
      testimonial4: {
        name: "Lukas Steinmann",
        role: "Directeur artistique",
        content: "La collaboration avec Théo Blondel a été excellente. Sa campagne d'affiches a dépassé toutes nos attentes — un travail créatif, moderne, précis jusque dans les détails. Mention spéciale pour son sens des couleurs, des typos et de l'impact visuel.",
        company: "testimonial4.company",
        project: "Campagne print & direction artistique",
        date: "Avril 2025"
      },
      testimonial5: {
        name: "Azdine Tafssout",
        role: "Chef de projet",
        content: "Toujours un plaisir de bosser avec Théo. Réactif, créatif et fiable. Chaque projet avance sans stress.",
        company: "testimonial5.company",
        project: "Identité de marque & print",
        date: "Février 2025"
      },
      testimonial6: {
        name: "Noa Vellin",
        role: "Responsable produit",
        content: "Super collaboration. Le projet a été fluide du début à la fin. Résultat propre, livré dans les temps, et fidèle à notre vision.",
        company: "testimonial6.company",
        project: "Design packaging & supports de com'",
        date: "Avril 2025"
      },
      testimonial7: {
        name: "Julia Renard",
        role: "Fondatrice, Atelier Kura",
        content: "Théo a géré notre rebranding de A à Z. Il a tout restructuré avec clarté, goût et une vraie sensibilité. On a su dès les premiers échanges qu'on allait bosser avec lui.",
        company: "Atelier Kura",
        project: "Refonte d'identité visuelle",
        date: "Mars 2025"
      }
    },
    contact: {
      title: "Contact",
      subtitle: "On discute de ton projet ?",
      description: "T'as une idée ? T'as besoin d'un coup de main visuel ? Ou juste envie de savoir si ça peut coller entre nous ?",
      stayInTouch: "Restons en Contact",
      stayInTouchDescription: "Prêt à démarrer ton projet ? Parlons de ta vision et voyons comment nous pouvons la concrétiser ensemble.",
      email: "Email",
      emailDescription: "Écris-moi, je réponds vite",
      location: "Localisation",
      locationDescription: "Basé dans la région lémanique",
      followMe: "Suis-moi",
      sendMessage: "Envoyer un Message",
      form: {
        name: "Nom",
        namePlaceholder: "Ton nom",
        email: "Email",
        emailPlaceholder: "ton.email@exemple.com",
        subject: "Sujet",
        subjectPlaceholder: "C'est quoi ton projet ?",
        message: "Message",
        messagePlaceholder: "Parle-moi de ton projet...",
        send: "Envoyer le message",
        emailNote: "Le formulaire ouvrira votre client email par défaut",
        directEmail: "Vous pouvez aussi m'écrire directement à hello@theoblondel.ch"
      }
    },
    footer: {
      description: "Médiamaticien basé en Suisse, spécialisé en identité de marque et design d'interface.",
      quickLinks: "Liens Rapides",
      services: "Services",
      madeWith: "Fait avec",
      madeIn: "en Suisse",
      copyright: "© 2024 Theo Blondel. Tous droits réservés."
    },
    fakeChat: {
      clientName: "Client - NOIRBRUME",
      onlineStatus: "En ligne",
      message1: "Salut Théo ! J'ai besoin d'un logo pour ma marque \"NOIRBRUME\". Un style streetwear, sobre et poétique.",
      timestamp1: "14:32",
      message2: "Trop stylé comme nom ! Je vois déjà un logo typographique minimal avec une ambiance brumeuse. Je t'envoie une première idée ce soir !",
      timestamp2: "14:35",
      cta1: "Prêt à démarrer ton projet ?",
      ctaDescription: "Parlons de ta vision et voyons comment nous pouvons la concrétiser ensemble avec la même attention aux détails.",
      ctaButton1: "Démarrer un projet",
      ctaButton2: "Voir mes réalisations"
    }
  },
  en: {
    nav: {
      about: "About",
      portfolio: "Portfolio",
      services: "Services",
      contact: "Contact",
      discuss: "Let's talk"
    },
    hero: {
      subtitle: "Creative Solutions",
      greeting: "Hello, I am Theo",
      title1: "Solutions",
      title2: "creative",
      title3: "versatile",
      description: "I'm a media designer in Switzerland, and I transform your ideas into clean, impactful, and truly stylish visual projects.",
      cta1: "Let's talk?",
      cta2: "See the demo"
    },
    about: {
      title: "My Journey",
      subtitle: "My path to creation",
      description: "I started like many: with YouTube montages at 10, head in pixels and sound effects. Minecraft, Fortnite, Call of... I spent hours testing, tinkering, looking for what works.\n\nThen drawing came. Then media design. And there, I got it: I want to do this. Create. Design. Bring visual ideas to life that speak to people.",
      cta: "Learn more about me",
      stats: {
        experience: "Years of experience",
        projects: "Projects delivered",
        satisfaction: "Client satisfaction",
        clients: "Clients worldwide"
      },
      skills: {
        title: "What I do?",
        adobe: "Complete mastery of the creative suite",
        davinci: "Professional video editing and color grading",
        autodesk: "3D modeling and animation",
        figma: "UI/UX design and prototyping"
      }
    },
    portfolio: {
      title: "My Projects",
      subtitle: "Some stuff I loved doing",
      description: "A selection of projects that show my approach and style.",
      viewOnBehance: "View on Behance",
      clickToView: "Click to view project",
      viewAll: "View all on Behance"
    },
    process: {
      title: "My Process",
      subtitle: "My Creative Process",
      description: "A simple, structured and tailor-made approach",
      intro: "Each project is unique, but my method remains solid. Here's how I transform your ideas into concrete results.",
      steps: {
        brief: {
          title: "Brief & Listening",
          description: "Understanding your needs, objectives and your brand universe."
        },
        research: {
          title: "Research & Moodboard",
          description: "Exploring inspirations, trends and the visual environment adapted to your project."
        },
        concept: {
          title: "Sketches & Concepts",
          description: "Sketching the first ideas, thinking about shapes, messages, colors that suit you."
        },
        design: {
          title: "Design",
          description: "Creating the final rendering, with typography, visuals and professional composition that reflect your identity."
        },
        revisions: {
          title: "Revisions",
          description: "Your feedback is essential. We adjust together until we validate what perfectly suits you."
        },
        delivery: {
          title: "Delivery & Support",
          description: "Delivery of optimized files, ready to use (web, print, networks). I remain available for you!"
        }
      },
      example: {
        title: "Concrete Example",
        subtitle: "\"NOIRBRUME\" Project",
        description: "Discover my process in action through a realistic conversation with a fictional client. From initial request to final delivery.",
        cta1: "Start a project",
        cta2: "See my work"
      }
    },
    services: {
      title: "Services",
      subtitle: "What I can do for you",
      description: "Complete creative solutions adapted to your needs and ambitions.",
      branding: {
        title: "Brand Identity",
        description: "Need a logo that rocks and an image that tells who you are? I help you build a real identity — not just a quick logo.",
        features: [
          "Logo (pro, not on Canva)",
          "Clear graphic charter",
          "Coherent visual identity",
          "Brand positioning that holds up"
        ]
      },
      uiux: {
        title: "UI/UX Design",
        description: "Good design isn't just pretty. It has to work. I create simple, fluid and pleasant interfaces to use (even for aunt Josiane).",
        features: [
          "User research",
          "Clean wireframes",
          "Pixel-perfect mockups",
          "Tests to see if everything holds up"
        ]
      },
      web: {
        title: "Web Development",
        description: "Modern and responsive websites that work perfectly on all devices.",
        features: [
          "Responsive design",
          "SEO optimization",
          "Fast performance",
          "Easy maintenance"
        ]
      },
      mobile: {
        title: "Mobile Design",
        description: "Your app deserves better than a default template. I make you a clear, intuitive interface, pleasant to use in the subway.",
        features: [
          "iOS & Android design",
          "Well thought user journey",
          "Smooth onboarding",
          "Icons, menus, and all the little details that make the difference"
        ]
      },
      print: {
        title: "Print Design",
        description: "Stuff you can touch. Flyers, cards, posters — everything that reads with eyes and hands.",
        features: [
          "Neat layout",
          "Good typo choice (not Comic Sans, don't worry)",
          "Color harmonies to perfection",
          "Files ready for the printer"
        ]
      },
      motion: {
        title: "Motion Design & Video",
        description: "Content that moves well. I edit, animate, give rhythm to your visual communication.",
        features: [
          "Stylish logo animations",
          "Dynamic video editing",
          "Teasers, trailers, reels, stories...",
          "Micro-animations and smooth effects"
        ]
      },
      cta: "Start a project"
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "What clients say",
      description: "Feedback from people who trusted me with their projects.",
      trustTitle: "They trust me",
      trustSubtitle: "Companies and entrepreneurs who chose my services",
      googleReviewTitle: "Have you worked with me?",
      googleReviewDescription: "Your opinion matters enormously! Share your experience on Google Reviews and help other clients discover the quality of my creative services.",
      googleReviewButton: "Leave a Google review",
      googleReviewFooter: "Your review helps us grow",
      testimonial1: {
        name: "Emily Rodriguez",
        role: "Marketing Director, InnovateLab",
        content: "Theo's creative approach and technical expertise helped us launch a successful digital campaign. The results speak for themselves – 300% increase in engagement!",
        company: "InnovateLab",
        project: "Digital campaign & Motion Graphics",
        date: "October 2023"
      },
      testimonial2: {
        name: "Anonymous Client",
        role: "testimonial2.role",
        content: "Theo captured the essence of my brand from the start. Smooth communication, deadlines respected, and professional result. I highly recommend.",
        company: "testimonial2.company",
        project: "Logo creation",
        date: "April 2025"
      },
      testimonial3: {
        name: "Meier Nils",
        role: "Entrepreneur",
        content: "The design of my business card is exactly what I was looking for: minimalist, elegant and impactful. Thank you for your listening and professionalism!",
        company: "testimonial3.company",
        project: "Visual identity & business card",
        date: "April 2025"
      },
      testimonial4: {
        name: "Lukas Steinmann",
        role: "Art Director",
        content: "The collaboration with Theo Blondel was excellent. His poster campaign exceeded all our expectations — creative, modern work, precise down to the details. Special mention for his sense of colors, fonts and visual impact.",
        company: "testimonial4.company",
        project: "Print campaign & art direction",
        date: "April 2025"
      },
      testimonial5: {
        name: "Azdine Tafssout",
        role: "Project Manager",
        content: "Always a pleasure to work with Theo. Responsive, creative and reliable. Each project progresses without stress.",
        company: "testimonial5.company",
        project: "Brand identity & print",
        date: "February 2025"
      },
      testimonial6: {
        name: "Noa Vellin",
        role: "Product Manager",
        content: "Great collaboration. The project was smooth from start to finish. Clean result, delivered on time, and faithful to our vision.",
        company: "testimonial6.company",
        project: "Packaging design & communication materials",
        date: "April 2025"
      },
      testimonial7: {
        name: "Julia Renard",
        role: "Founder, Atelier Kura",
        content: "Theo handled our rebranding from A to Z. He restructured everything with clarity, taste and real sensitivity. We knew from the first exchanges that we were going to work with him.",
        company: "Atelier Kura",
        project: "Visual identity redesign",
        date: "March 2025"
      }
    },
    contact: {
      title: "Contact",
      subtitle: "Let's discuss your project?",
      description: "Got an idea? Need visual help? Or just want to see if we can work together?",
      stayInTouch: "Stay in Touch",
      stayInTouchDescription: "Ready to start your project? Let's talk about your vision and see how we can make it happen together.",
      email: "Email",
      emailDescription: "Write to me, I respond quickly",
      location: "Location",
      locationDescription: "Based in the Lake Geneva region",
      followMe: "Follow me",
      sendMessage: "Send a Message",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your.email@example.com",
        subject: "Subject",
        subjectPlaceholder: "What's your project?",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        send: "Send message",
        emailNote: "The form will open your default email client",
        directEmail: "You can also write to me directly at hello@theoblondel.ch"
      }
    },
    footer: {
      description: "Media designer based in Switzerland, specialized in brand identity and interface design.",
      quickLinks: "Quick Links",
      services: "Services",
      madeWith: "Made with",
      madeIn: "in Switzerland",
      copyright: "© 2024 Theo Blondel. All rights reserved."
    },
    fakeChat: {
      clientName: "Client - NOIRBRUME",
      onlineStatus: "Online",
      message1: "Hi Theo! I need a logo for my brand \"NOIRBRUME\". A streetwear style, sober and poetic.",
      timestamp1: "2:32 PM",
      message2: "Such a cool name! I can already see a minimal typographic logo with a misty atmosphere. I'll send you a first idea tonight!",
      timestamp2: "2:35 PM",
      cta1: "Ready to start your project?",
      ctaDescription: "Let's talk about your vision and see how we can make it happen together with the same attention to detail.",
      ctaButton1: "Start a project",
      ctaButton2: "See my work"
    }
  },
  es: {
    nav: {
      about: "Acerca de",
      portfolio: "Portafolio",
      services: "Servicios",
      contact: "Contacto",
      discuss: "Hablemos"
    },
    hero: {
      subtitle: "Soluciones Creativas",
      greeting: "Hola, soy Theo",
      title1: "Soluciones",
      title2: "creativas",
      title3: "versátiles",
      description: "Soy diseñador multimedia en Suiza, y transformo tus ideas en proyectos visuales limpios, impactantes y realmente elegantes.",
      cta1: "¿Hablamos?",
      cta2: "Ver la demo"
    },
    about: {
      title: "Mi Trayectoria",
      subtitle: "Mi camino hacia la creación",
      description: "Empecé como muchos: con montajes de YouTube a los 10 años, la cabeza en píxeles y efectos de sonido. Minecraft, Fortnite, Call of... Pasé horas probando, trasteando, buscando lo que funciona.\n\nLuego llegó el dibujo. Después, el diseño multimedia. Y ahí lo entendí: quiero hacer esto. Crear. Diseñar. Dar vida a ideas visuales que hablen a la gente.",
      cta: "Saber más sobre mí",
      stats: {
        experience: "Años de experiencia",
        projects: "Proyectos entregados",
        satisfaction: "Satisfacción del cliente",
        clients: "Clientes en el mundo"
      },
      skills: {
        title: "¿Para qué sirvo?",
        adobe: "Dominio completo de la suite creativa",
        davinci: "Edición de video y corrección de color profesional",
        autodesk: "Modelado 3D y animación",
        figma: "Diseño UI/UX y prototipado"
      }
    },
    portfolio: {
      title: "Mis Proyectos",
      subtitle: "Algunas cosas que me gustó hacer",
      description: "Una selección de proyectos que muestran mi enfoque y estilo.",
      viewOnBehance: "Ver en Behance",
      clickToView: "Haz clic para ver el proyecto",
      viewAll: "Ver todo en Behance"
    },
    process: {
      title: "Mi Proceso",
      subtitle: "Mi Proceso Creativo",
      description: "Un enfoque simple, estructurado y a medida",
      intro: "Cada proyecto es único, pero mi método sigue siendo sólido. Así es como transformo tus ideas en resultados concretos.",
      steps: {
        brief: {
          title: "Brief y Escucha",
          description: "Entender tus necesidades, objetivos y el universo de tu marca."
        },
        research: {
          title: "Investigación y Moodboard",
          description: "Explorar inspiraciones, tendencias y el entorno visual adaptado a tu proyecto."
        },
        concept: {
          title: "Bocetos y Conceptos",
          description: "Esbozar las primeras ideas, pensar en formas, mensajes, colores que te corresponden."
        },
        design: {
          title: "Diseño",
          description: "Creación del renderizado final, con tipografías, visuales y composición profesional que reflejan tu identidad."
        },
        revisions: {
          title: "Revisiones",
          description: "Tus comentarios son esenciales. Ajustamos juntos hasta validar lo que te conviene perfectamente."
        },
        delivery: {
          title: "Entrega y Acompañamiento",
          description: "Entrega de archivos optimizados, listos para usar (web, print, redes). ¡Sigo disponible para ti!"
        }
      },
      example: {
        title: "Ejemplo Concreto",
        subtitle: "Proyecto \"NOIRBRUME\"",
        description: "Descubre mi proceso en acción a través de una conversación realista con un cliente ficticio. Desde la solicitud inicial hasta la entrega final.",
        cta1: "Iniciar un proyecto",
        cta2: "Ver mi trabajo"
      }
    },
    services: {
      title: "Servicios",
      subtitle: "Lo que puedo hacer por ti",
      description: "Soluciones creativas completas adaptadas a tus necesidades y ambiciones.",
      branding: {
        title: "Identidad de Marca",
        description: "¿Necesitas un logo que impacte y una imagen que cuente quién eres? Te ayudo a construir una verdadera identidad — no solo un logo rápido.",
        features: [
          "Logo (profesional, no en Canva)",
          "Carta gráfica clara",
          "Identidad visual coherente",
          "Posicionamiento de marca que se sostiene"
        ]
      },
      uiux: {
        title: "Diseño UI/UX",
        description: "Un buen diseño no es solo bonito. Tiene que funcionar. Creo interfaces simples, fluidas y agradables de usar (incluso para la tía Josefina).",
        features: [
          "Investigación de usuario",
          "Wireframes limpios",
          "Maquetas pixel-perfect",
          "Pruebas para ver si todo se sostiene"
        ]
      },
      web: {
        title: "Desarrollo Web",
        description: "Sitios web modernos y responsivos que funcionan perfectamente en todos los dispositivos.",
        features: [
          "Diseño responsivo",
          "Optimización SEO",
          "Rendimiento rápido",
          "Mantenimiento fácil"
        ]
      },
      mobile: {
        title: "Diseño Móvil",
        description: "Tu app merece algo mejor que una plantilla por defecto. Te hago una interfaz clara, intuitiva y agradable de usar en el metro.",
        features: [
          "Diseño iOS y Android",
          "Recorrido de usuario bien pensado",
          "Onboarding fluido",
          "Iconos, menús y todos los pequeños detalles que marcan la diferencia"
        ]
      },
      print: {
        title: "Diseño Print",
        description: "Cosas que se pueden tocar. Flyers, tarjetas, carteles — todo lo que se lee con los ojos y las manos.",
        features: [
          "Maquetación cuidada",
          "Buena elección de tipografía (no Comic Sans, no te preocupes)",
          "Armonías de colores perfectas",
          "Archivos listos para la imprenta"
        ]
      },
      motion: {
        title: "Motion Design y Video",
        description: "Contenido que se mueve bien. Edito, animo, doy ritmo a tu comunicación visual.",
        features: [
          "Animaciones de logos elegantes",
          "Montajes de video dinámicos",
          "Teasers, trailers, reels, stories...",
          "Micro-animaciones y efectos suaves"
        ]
      },
      cta: "Iniciar un proyecto"
    },
    testimonials: {
      title: "Testimonios",
      subtitle: "Lo que dicen los clientes",
      description: "Comentarios de personas que confiaron en mí para sus proyectos.",
      trustTitle: "Confían en mí",
      trustSubtitle: "Empresas y emprendedores que eligieron mis servicios",
      googleReviewTitle: "¿Has trabajado conmigo?",
      googleReviewDescription: "¡Tu opinión cuenta enormemente! Comparte tu experiencia en Google Reviews y ayuda a otros clientes a descubrir la calidad de mis servicios creativos.",
      googleReviewButton: "Dejar una reseña en Google",
      googleReviewFooter: "Tu reseña nos ayuda a crecer",
      testimonial1: {
        name: "Emily Rodriguez",
        role: "Directora de Marketing, InnovateLab",
        content: "El enfoque creativo y la experiencia técnica de Theo nos ayudaron a lanzar una campaña digital exitosa. Los resultados hablan por sí mismos: ¡300% de aumento en el engagement!",
        company: "InnovateLab",
        project: "Campaña digital y Motion Graphics",
        date: "Octubre 2023"
      },
      testimonial2: {
        name: "Cliente Anónimo",
        role: "testimonial2.role",
        content: "Theo captó la esencia de mi marca desde el principio. Comunicación fluida, plazos respetados y resultado profesional. Lo recomiendo encarecidamente.",
        company: "testimonial2.company",
        project: "Creación de logo",
        date: "Abril 2025"
      },
      testimonial3: {
        name: "Meier Nils",
        role: "Emprendedor",
        content: "El diseño de mi tarjeta de visita es exactamente lo que buscaba: minimalista, elegante e impactante. ¡Gracias por tu escucha y profesionalismo!",
        company: "testimonial3.company",
        project: "Identidad visual y tarjeta de visita",
        date: "Abril 2025"
      },
      testimonial4: {
        name: "Lukas Steinmann",
        role: "Director Artístico",
        content: "La colaboración con Theo Blondel fue excelente. Su campaña de carteles superó todas nuestras expectativas: trabajo creativo, moderno, preciso hasta en los detalles. Mención especial por su sentido de los colores, las tipografías y el impacto visual.",
        company: "testimonial4.company",
        project: "Campaña print y dirección artística",
        date: "Abril 2025"
      },
      testimonial5: {
        name: "Azdine Tafssout",
        role: "Jefe de Proyecto",
        content: "Siempre es un placer trabajar con Theo. Reactivo, creativo y confiable. Cada proyecto avanza sin estrés.",
        company: "testimonial5.company",
        project: "Identidad de marca y print",
        date: "Febrero 2025"
      },
      testimonial6: {
        name: "Noa Vellin",
        role: "Responsable de Producto",
        content: "Súper colaboración. El proyecto fue fluido de principio a fin. Resultado limpio, entregado a tiempo y fiel a nuestra visión.",
        company: "testimonial6.company",
        project: "Diseño de packaging y materiales de comunicación",
        date: "Abril 2025"
      },
      testimonial7: {
        name: "Julia Renard",
        role: "Fundadora, Atelier Kura",
        content: "Theo manejó nuestro rebranding de la A a la Z. Reestructuró todo con claridad, gusto y verdadera sensibilidad. Supimos desde los primeros intercambios que íbamos a trabajar con él.",
        company: "Atelier Kura",
        project: "Rediseño de identidad visual",
        date: "Marzo 2025"
      }
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Hablamos de tu proyecto?",
      description: "¿Tienes una idea? ¿Necesitas ayuda visual? ¿O solo quieres ver si podemos trabajar juntos?",
      stayInTouch: "Mantengámonos en Contacto",
      stayInTouchDescription: "¿Listo para comenzar tu proyecto? Hablemos de tu visión y veamos cómo podemos hacerla realidad juntos.",
      email: "Email",
      emailDescription: "Escríbeme, respondo rápido",
      location: "Ubicación",
      locationDescription: "Basado en la región del Lago Lemán",
      followMe: "Sígueme",
      sendMessage: "Enviar un Mensaje",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Email",
        emailPlaceholder: "tu.email@ejemplo.com",
        subject: "Asunto",
        subjectPlaceholder: "¿Cuál es tu proyecto?",
        message: "Mensaje",
        messagePlaceholder: "Háblame de tu proyecto...",
        send: "Enviar mensaje",
        emailNote: "El formulario abrirá tu cliente de email por defecto",
        directEmail: "También puedes escribirme directamente a hello@theoblondel.ch"
      }
    },
    footer: {
      description: "Diseñador multimedia basado en Suiza, especializado en identidad de marca y diseño de interfaz.",
      quickLinks: "Enlaces Rápidos",
      services: "Servicios",
      madeWith: "Hecho con",
      madeIn: "en Suiza",
      copyright: "© 2024 Theo Blondel. Todos los derechos reservados."
    },
    fakeChat: {
      clientName: "Cliente - NOIRBRUME",
      onlineStatus: "En línea",
      message1: "¡Hola Theo! Necesito un logo para mi marca \"NOIRBRUME\". Un estilo streetwear, sobrio y poético.",
      timestamp1: "14:32",
      message2: "¡Qué nombre tan genial! Ya veo un logo tipográfico minimalista con ambiente brumoso. ¡Te envío una primera idea esta noche!",
      timestamp2: "14:35",
      cta1: "¿Listo para comenzar tu proyecto?",
      ctaDescription: "Hablemos de tu visión y veamos cómo podemos hacerla realidad juntos con la misma atención al detalle.",
      ctaButton1: "Iniciar un proyecto",
      ctaButton2: "Ver mi trabajo"
    }
  },
  ru: {
    nav: {
      about: "О себе",
      portfolio: "Портфолио",
      services: "Услуги",
      contact: "Контакты",
      discuss: "Обсудим"
    },
    hero: {
      subtitle: "Креативные Решения",
      greeting: "Привет, я Тео",
      title1: "Решения",
      title2: "креативные",
      title3: "универсальные",
      description: "Я медиа-дизайнер в Швейцарии, и я превращаю ваши идеи в чистые, впечатляющие и действительно стильные визуальные проекты.",
      cta1: "Поговорим?",
      cta2: "Посмотреть демо"
    },
    about: {
      title: "Мой Путь",
      subtitle: "Мой путь к творчеству",
      description: "Я начинал как многие: с монтажей YouTube в 10 лет, с головой в пикселях и звуковых эффектах. Minecraft, Fortnite, Call of... Я проводил часы, тестируя, экспериментируя, ища то, что работает.\n\nПотом пришло рисование. Затем медиа-дизайн. И тут я понял: я хочу заниматься этим. Создавать. Проектировать. Воплощать визуальные идеи, которые говорят с людьми.",
      cta: "Узнать больше обо мне",
      stats: {
        experience: "Лет опыта",
        projects: "Проектов выполнено",
        satisfaction: "Удовлетворенность клиентов",
        clients: "Клиентов по всему миру"
      },
      skills: {
        title: "Что я умею?",
        adobe: "Полное владение творческим пакетом",
        davinci: "Профессиональный видеомонтаж и цветокоррекция",
        autodesk: "3D моделирование и анимация",
        figma: "UI/UX дизайн и прототипирование"
      }
    },
    portfolio: {
      title: "Мои Проекты",
      subtitle: "Некоторые вещи, которые мне понравилось делать",
      description: "Подборка проектов, которые показывают мой подход и стиль.",
      viewOnBehance: "Посмотреть на Behance",
      clickToView: "Нажмите, чтобы посмотреть проект",
      viewAll: "Посмотреть все на Behance"
    },
    process: {
      title: "Мой Процесс",
      subtitle: "Мой Творческий Процесс",
      description: "Простой, структурированный и индивидуальный подход",
      intro: "Каждый проект уникален, но мой метод остается надежным. Вот как я превращаю ваши идеи в конкретные результаты.",
      steps: {
        brief: {
          title: "Бриф и Прослушивание",
          description: "Понимание ваших потребностей, целей и вселенной вашего бренда."
        },
        research: {
          title: "Исследование и Мудборд",
          description: "Изучение вдохновения, трендов и визуальной среды, адаптированной к вашему проекту."
        },
        concept: {
          title: "Эскизы и Концепции",
          description: "Набросок первых идей, размышления о формах, сообщениях, цветах, которые вам подходят."
        },
        design: {
          title: "Дизайн",
          description: "Создание финального рендера с типографикой, визуалами и профессиональной композицией, отражающей вашу идентичность."
        },
        revisions: {
          title: "Правки",
          description: "Ваши отзывы важны. Мы корректируем вместе, пока не утвердим то, что вам идеально подходит."
        },
        delivery: {
          title: "Доставка и Поддержка",
          description: "Доставка оптимизированных файлов, готовых к использованию (веб, печать, сети). Я остаюсь доступным для вас!"
        }
      },
      example: {
        title: "Конкретный Пример",
        subtitle: "Проект \"NOIRBRUME\"",
        description: "Откройте для себя мой процесс в действии через реалистичный разговор с вымышленным клиентом. От первоначального запроса до финальной доставки.",
        cta1: "Начать проект",
        cta2: "Посмотреть мои работы"
      }
    },
    services: {
      title: "Услуги",
      subtitle: "Что я могу сделать для вас",
      description: "Полные креативные решения, адаптированные к вашим потребностям и амбициям.",
      branding: {
        title: "Фирменный Стиль",
        description: "Нужен логотип, который впечатляет, и образ, который рассказывает, кто вы? Я помогу вам построить настоящую идентичность — не просто быстрый логотип.",
        features: [
          "Логотип (профессиональный, не в Canva)",
          "Четкий графический устав",
          "Последовательная визуальная идентичность",
          "Позиционирование бренда, которое работает"
        ]
      },
      uiux: {
        title: "UI/UX Дизайн",
        description: "Хороший дизайн — это не просто красиво. Он должен работать. Я создаю простые, плавные и приятные в использовании интерфейсы (даже для тети Жозефины).",
        features: [
          "Исследование пользователей",
          "Чистые вайрфреймы",
          "Пиксель-перфект макеты",
          "Тесты, чтобы увидеть, все ли работает"
        ]
      },
      web: {
        title: "Веб-разработка",
        description: "Современные и адаптивные веб-сайты, которые отлично работают на всех устройствах.",
        features: [
          "Адаптивный дизайн",
          "SEO оптимизация",
          "Быстрая производительность",
          "Легкое обслуживание"
        ]
      },
      mobile: {
        title: "Мобильный Дизайн",
        description: "Ваше приложение заслуживает лучшего, чем стандартный шаблон. Я создам вам четкий, интуитивный интерфейс, приятный в использовании в метро.",
        features: [
          "Дизайн для iOS и Android",
          "Хорошо продуманный пользовательский путь",
          "Плавный онбординг",
          "Иконки, меню и все мелкие детали, которые делают разницу"
        ]
      },
      print: {
        title: "Печатный Дизайн",
        description: "Вещи, которые можно потрогать. Флаеры, карточки, постеры — все, что читается глазами и руками.",
        features: [
          "Аккуратная верстка",
          "Хороший выбор типографики (не Comic Sans, не волнуйтесь)",
          "Идеальные цветовые гармонии",
          "Файлы, готовые для типографии"
        ]
      },
      motion: {
        title: "Моушн Дизайн и Видео",
        description: "Контент, который хорошо движется. Я монтирую, анимирую, задаю ритм вашей визуальной коммуникации.",
        features: [
          "Стильные анимации логотипов",
          "Динамичный видеомонтаж",
          "Тизеры, трейлеры, рилс, сторис...",
          "Микро-анимации и плавные эффекты"
        ]
      },
      cta: "Начать проект"
    },
    testimonials: {
      title: "Отзывы",
      subtitle: "Что говорят клиенты",
      description: "Отзывы людей, которые доверили мне свои проекты.",
      trustTitle: "Они мне доверяют",
      trustSubtitle: "Компании и предприниматели, которые выбрали мои услуги",
      googleReviewTitle: "Работали со мной?",
      googleReviewDescription: "Ваше мнение очень важно! Поделитесь своим опытом в Google Reviews и помогите другим клиентам открыть для себя качество моих креативных услуг.",
      googleReviewButton: "Оставить отзыв в Google",
      googleReviewFooter: "Ваш отзыв помогает нам расти",
      testimonial1: {
        name: "Эмили Родригес",
        role: "Директор по маркетингу, InnovateLab",
        content: "Креативный подход и техническая экспертиза Тео помогли нам запустить успешную цифровую кампанию. Результаты говорят сами за себя — 300% увеличение вовлеченности!",
        company: "InnovateLab",
        project: "Цифровая кампания и Motion Graphics",
        date: "Октябрь 2023"
      },
      testimonial2: {
        name: "Анонимный Клиент",
        role: "testimonial2.role",
        content: "Тео уловил суть моего бренда с самого начала. Плавная коммуникация, соблюдение сроков и профессиональный результат. Очень рекомендую.",
        company: "testimonial2.company",
        project: "Создание логотипа",
        date: "Апрель 2025"
      },
      testimonial3: {
        name: "Майер Нильс",
        role: "Предприниматель",
        content: "Дизайн моей визитной карточки — это именно то, что я искал: минималистичный, элегантный и впечатляющий. Спасибо за ваше внимание и профессионализм!",
        company: "testimonial3.company",
        project: "Визуальная идентичность и визитная карточка",
        date: "Апрель 2025"
      },
      testimonial4: {
        name: "Лукас Штайнманн",
        role: "Арт-директор",
        content: "Сотрудничество с Тео Блонделем было отличным. Его постерная кампания превзошла все наши ожидания — креативная, современная работа, точная до мелочей. Особая благодарность за его чувство цвета, типографики и визуального воздействия.",
        company: "testimonial4.company",
        project: "Печатная кампания и арт-направление",
        date: "Апрель 2025"
      },
      testimonial5: {
        name: "Аздин Тафссут",
        role: "Руководитель проекта",
        content: "Всегда приятно работать с Тео. Отзывчивый, креативный и надежный. Каждый проект продвигается без стресса.",
        company: "testimonial5.company",
        project: "Фирменный стиль и печать",
        date: "Февраль 2025"
      },
      testimonial6: {
        name: "Ноа Веллин",
        role: "Менеджер по продукту",
        content: "Отличное сотрудничество. Проект был плавным от начала до конца. Чистый результат, доставлен вовремя и верен нашему видению.",
        company: "testimonial6.company",
        project: "Дизайн упаковки и коммуникационные материалы",
        date: "Апрель 2025"
      },
      testimonial7: {
        name: "Юлия Ренар",
        role: "Основатель, Atelier Kura",
        content: "Тео управлял нашим ребрендингом от А до Я. Он все реструктурировал с ясностью, вкусом и настоящей чувствительностью. Мы знали с первых обменов, что будем работать с ним.",
        company: "Atelier Kura",
        project: "Редизайн визуальной идентичности",
        date: "Март 2025"
      }
    },
    contact: {
      title: "Контакты",
      subtitle: "Обсудим ваш проект?",
      description: "Есть идея? Нужна визуальная помощь? Или просто хотите посмотреть, сможем ли мы работать вместе?",
      stayInTouch: "Оставайтесь на Связи",
      stayInTouchDescription: "Готовы начать свой проект? Давайте поговорим о вашем видении и посмотрим, как мы можем воплотить его вместе.",
      email: "Email",
      emailDescription: "Напишите мне, я отвечаю быстро",
      location: "Местоположение",
      locationDescription: "Базируюсь в регионе Женевского озера",
      followMe: "Подписывайтесь",
      sendMessage: "Отправить Сообщение",
      form: {
        name: "Имя",
        namePlaceholder: "Ваше имя",
        email: "Email",
        emailPlaceholder: "ваш.email@пример.com",
        subject: "Тема",
        subjectPlaceholder: "Какой у вас проект?",
        message: "Сообщение",
        messagePlaceholder: "Расскажите мне о вашем проекте...",
        send: "Отправить сообщение",
        emailNote: "Форма откроет ваш почтовый клиент по умолчанию",
        directEmail: "Вы также можете написать мне напрямую на hello@theoblondel.ch"
      }
    },
    footer: {
      description: "Медиа-дизайнер из Швейцарии, специализирующийся на фирменном стиле и дизайне интерфейсов.",
      quickLinks: "Быстрые Ссылки",
      services: "Услуги",
      madeWith: "Сделано с",
      madeIn: "в Швейцарии",
      copyright: "© 2024 Тео Блондель. Все права защищены."
    },
    fakeChat: {
      clientName: "Клиент - NOIRBRUME",
      onlineStatus: "В сети",
      message1: "Привет, Тео! Мне нужен логотип для моего бренда \"NOIRBRUME\". Стиль стритвир, сдержанный и поэтичный.",
      timestamp1: "14:32",
      message2: "Такое крутое название! Я уже вижу минималистичный типографический логотип с туманной атмосферой. Отправлю тебе первую идею сегодня вечером!",
      timestamp2: "14:35",
      cta1: "Готовы начать свой проект?",
      ctaDescription: "Давайте поговорим о вашем видении и посмотрим, как мы можем воплотить его вместе с тем же вниманием к деталям.",
      ctaButton1: "Начать проект",
      ctaButton2: "Посмотреть мои работы"
    }
  },
  zh: {
    nav: {
      about: "关于",
      portfolio: "作品集",
      services: "服务",
      contact: "联系",
      discuss: "聊聊"
    },
    hero: {
      subtitle: "创意解决方案",
      greeting: "你好，我是Theo",
      title1: "解决方案",
      title2: "创意",
      title3: "多样化",
      description: "我是瑞士的媒体设计师，我将您的想法转化为干净、有影响力且真正时尚的视觉项目。",
      cta1: "聊聊？",
      cta2: "查看演示"
    },
    about: {
      title: "我的历程",
      subtitle: "我的创作之路",
      description: "我像许多人一样开始：10岁时制作YouTube剪辑，沉浸在像素和音效中。Minecraft、Fortnite、Call of...我花了几个小时测试、摆弄、寻找有效的方法。\n\n然后绘画来了。接着是媒体设计。就在那时我明白了：我想做这个。创造。设计。让视觉想法活起来，与人们对话。",
      cta: "了解更多关于我",
      stats: {
        experience: "年经验",
        projects: "项目交付",
        satisfaction: "客户满意度",
        clients: "全球客户"
      },
      skills: {
        title: "我能做什么？",
        adobe: "完全掌握创意套件",
        davinci: "专业视频编辑和调色",
        autodesk: "3D建模和动画",
        figma: "UI/UX设计和原型制作"
      }
    },
    portfolio: {
      title: "我的项目",
      subtitle: "一些我喜欢做的东西",
      description: "展示我的方法和风格的项目选集。",
      viewOnBehance: "在Behance上查看",
      clickToView: "点击查看项目",
      viewAll: "在Behance上查看全部"
    },
    process: {
      title: "我的流程",
      subtitle: "我的创意流程",
      description: "简单、结构化和定制的方法",
      intro: "每个项目都是独特的，但我的方法保持稳固。这就是我如何将您的想法转化为具体结果。",
      steps: {
        brief: {
          title: "简报和倾听",
          description: "了解您的需求、目标和品牌世界。"
        },
        research: {
          title: "研究和情绪板",
          description: "探索灵感、趋势和适合您项目的视觉环境。"
        },
        concept: {
          title: "草图和概念",
          description: "勾画最初的想法，思考适合您的形状、信息、颜色。"
        },
        design: {
          title: "设计",
          description: "创建最终渲染，包含反映您身份的排版、视觉和专业构图。"
        },
        revisions: {
          title: "修订",
          description: "您的反馈至关重要。我们一起调整，直到验证完全适合您的内容。"
        },
        delivery: {
          title: "交付和支持",
          description: "交付优化的文件，随时可用（网络、印刷、网络）。我仍然为您提供服务！"
        }
      },
      example: {
        title: "具体示例",
        subtitle: "\"NOIRBRUME\"项目",
        description: "通过与虚构客户的真实对话，发现我的流程实际应用。从初始请求到最终交付。",
        cta1: "开始项目",
        cta2: "查看我的作品"
      }
    },
    services: {
      title: "服务",
      subtitle: "我能为您做什么",
      description: "适应您需求和抱负的完整创意解决方案。",
      branding: {
        title: "品牌标识",
        description: "需要一个出色的标志和讲述您身份的形象？我帮助您建立真正的身份——不只是快速标志。",
        features: [
          "标志（专业的，不是在Canva上）",
          "清晰的图形章程",
          "连贯的视觉标识",
          "站得住脚的品牌定位"
        ]
      },
      uiux: {
        title: "UI/UX设计",
        description: "好的设计不只是漂亮。它必须工作。我创建简单、流畅、使用愉快的界面（即使对约瑟芬阿姨也是如此）。",
        features: [
          "用户研究",
          "干净的线框图",
          "像素完美的模型",
          "测试看看一切是否成立"
        ]
      },
      web: {
        title: "网页开发",
        description: "在所有设备上完美运行的现代响应式网站。",
        features: [
          "响应式设计",
          "SEO优化",
          "快速性能",
          "易于维护"
        ]
      },
      mobile: {
        title: "移动设计",
        description: "您的应用程序值得比默认模板更好的东西。我为您制作清晰、直观、在地铁中使用愉快的界面。",
        features: [
          "iOS和Android设计",
          "深思熟虑的用户旅程",
          "流畅的入门",
          "图标、菜单和所有产生差异的小细节"
        ]
      },
      print: {
        title: "印刷设计",
        description: "可以触摸的东西。传单、卡片、海报——所有用眼睛和手阅读的东西。",
        features: [
          "精心布局",
          "好的字体选择（不是Comic Sans，别担心）",
          "完美的色彩和谐",
          "为印刷商准备的文件"
        ]
      },
      motion: {
        title: "动态设计和视频",
        description: "移动良好的内容。我编辑、动画，为您的视觉传播赋予节奏。",
        features: [
          "时尚的标志动画",
          "动态视频编辑",
          "预告片、拖车、卷轴、故事...",
          "微动画和流畅效果"
        ]
      },
      cta: "开始项目"
    },
    testimonials: {
      title: "推荐",
      subtitle: "客户怎么说",
      description: "信任我处理他们项目的人的反馈。",
      trustTitle: "他们信任我",
      trustSubtitle: "选择我服务的公司和企业家",
      googleReviewTitle: "与我合作过吗？",
      googleReviewDescription: "您的意见非常重要！在Google Reviews上分享您的体验，帮助其他客户发现我创意服务的质量。",
      googleReviewButton: "在Google上留下评论",
      googleReviewFooter: "您的评论帮助我们成长",
      testimonial1: {
        name: "艾米丽·罗德里格斯",
        role: "营销总监，InnovateLab",
        content: "Theo的创意方法和技术专长帮助我们推出了成功的数字活动。结果不言而喻——参与度增加了300%！",
        company: "InnovateLab",
        project: "数字活动和动态图形",
        date: "2023年10月"
      },
      testimonial2: {
        name: "匿名客户",
        role: "testimonial2.role",
        content: "Theo从一开始就抓住了我品牌的精髓。沟通顺畅，截止日期得到尊重，结果专业。我强烈推荐。",
        company: "testimonial2.company",
        project: "标志创建",
        date: "2025年4月"
      },
      testimonial3: {
        name: "迈尔·尼尔斯",
        role: "企业家",
        content: "我名片的设计正是我在寻找的：简约、优雅、有影响力。感谢您的倾听和专业精神！",
        company: "testimonial3.company",
        project: "视觉标识和名片",
        date: "2025年4月"
      },
      testimonial4: {
        name: "卢卡斯·施泰因曼",
        role: "艺术总监",
        content: "与Theo Blondel的合作非常出色。他的海报活动超出了我们所有的期望——创意、现代的工作，精确到细节。特别提到他对颜色、字体和视觉冲击的感觉。",
        company: "testimonial4.company",
        project: "印刷活动和艺术指导",
        date: "2025年4月"
      },
      testimonial5: {
        name: "阿兹丁·塔夫苏特",
        role: "项目经理",
        content: "与Theo合作总是很愉快。反应迅速、有创意、可靠。每个项目都无压力地进展。",
        company: "testimonial5.company",
        project: "品牌标识和印刷",
        date: "2025年2月"
      },
      testimonial6: {
        name: "诺亚·维林",
        role: "产品经理",
        content: "超级合作。项目从开始到结束都很顺利。干净的结果，按时交付，忠实于我们的愿景。",
        company: "testimonial6.company",
        project: "包装设计和传播材料",
        date: "2025年4月"
      },
      testimonial7: {
        name: "朱莉娅·雷纳德",
        role: "创始人，Atelier Kura",
        content: "Theo从A到Z管理了我们的品牌重塑。他以清晰、品味和真正的敏感性重新构建了一切。从第一次交流开始，我们就知道要与他合作。",
        company: "Atelier Kura",
        project: "视觉标识重新设计",
        date: "2025年3月"
      }
    },
    contact: {
      title: "联系",
      subtitle: "讨论您的项目？",
      description: "有想法吗？需要视觉帮助？还是只想看看我们能否合作？",
      stayInTouch: "保持联系",
      stayInTouchDescription: "准备开始您的项目？让我们谈论您的愿景，看看我们如何一起实现它。",
      email: "邮箱",
      emailDescription: "给我写信，我回复很快",
      location: "位置",
      locationDescription: "位于日内瓦湖地区",
      followMe: "关注我",
      sendMessage: "发送消息",
      form: {
        name: "姓名",
        namePlaceholder: "您的姓名",
        email: "邮箱",
        emailPlaceholder: "your.email@example.com",
        subject: "主题",
        subjectPlaceholder: "您的项目是什么？",
        message: "消息",
        messagePlaceholder: "告诉我您的项目...",
        send: "发送消息",
        emailNote: "表单将打开您的默认邮件客户端",
        directEmail: "您也可以直接写信给我：hello@theoblondel.ch"
      }
    },
    footer: {
      description: "瑞士媒体设计师，专门从事品牌标识和界面设计。",
      quickLinks: "快速链接",
      services: "服务",
      madeWith: "制作于",
      madeIn: "瑞士",
      copyright: "© 2024 Theo Blondel. 版权所有。"
    },
    fakeChat: {
      clientName: "客户 - NOIRBRUME",
      onlineStatus: "在线",
      message1: "嗨Theo！我需要为我的品牌\"NOIRBRUME\"设计一个标志。街头服装风格，简约而诗意。",
      timestamp1: "14:32",
      message2: "多么酷的名字！我已经看到了一个带有雾蒙蒙氛围的极简主义排版标志。今晚我会给你发送第一个想法！",
      timestamp2: "14:35",
      cta1: "准备开始您的项目？",
      ctaDescription: "让我们谈论您的愿景，看看我们如何以同样的细节关注一起实现它。",
      ctaButton1: "开始项目",
      ctaButton2: "查看我的作品"
    }
  },
  ja: {
    nav: {
      about: "について",
      portfolio: "ポートフォリオ",
      services: "サービス",
      contact: "お問い合わせ",
      discuss: "話しましょう"
    },
    hero: {
      subtitle: "クリエイティブソリューション",
      greeting: "こんにちは、私はテオです",
      title1: "ソリューション",
      title2: "クリエイティブ",
      title3: "多様",
      description: "私はスイスのメディアデザイナーで、あなたのアイデアをクリーンで印象的で本当にスタイリッシュなビジュアルプロジェクトに変換します。",
      cta1: "話しませんか？",
      cta2: "デモを見る"
    },
    about: {
      title: "私の旅",
      subtitle: "創造への道",
      description: "私は多くの人と同じように始めました：10歳でYouTubeモンタージュ、ピクセルと音響効果に頭を突っ込んで。Minecraft、Fortnite、Call of...何が機能するかを探して、テスト、いじくり回し、何時間も費やしました。\n\nそれから絵が来ました。次にメディアデザイン。そしてそこで私は理解しました：これをやりたい。創造する。デザインする。人々と話すビジュアルアイデアに命を吹き込む。",
      cta: "私についてもっと知る",
      stats: {
        experience: "年の経験",
        projects: "プロジェクト配信",
        satisfaction: "顧客満足度",
        clients: "世界中のクライアント"
      },
      skills: {
        title: "私は何をしますか？",
        adobe: "クリエイティブスイートの完全な習得",
        davinci: "プロフェッショナルビデオ編集とカラーグレーディング",
        autodesk: "3Dモデリングとアニメーション",
        figma: "UI/UXデザインとプロトタイピング"
      }
    },
    portfolio: {
      title: "私のプロジェクト",
      subtitle: "やって楽しかったもの",
      description: "私のアプローチとスタイルを示すプロジェクトの選択。",
      viewOnBehance: "Behanceで見る",
      clickToView: "プロジェクトを見るためにクリック",
      viewAll: "Behanceですべて見る"
    },
    process: {
      title: "私のプロセス",
      subtitle: "私のクリエイティブプロセス",
      description: "シンプルで構造化されたオーダーメイドのアプローチ",
      intro: "各プロジェクトはユニークですが、私の方法は堅実なままです。これが私があなたのアイデアを具体的な結果に変換する方法です。",
      steps: {
        brief: {
          title: "ブリーフとリスニング",
          description: "あなたのニーズ、目標、ブランドの世界を理解する。"
        },
        research: {
          title: "リサーチとムードボード",
          description: "インスピレーション、トレンド、あなたのプロジェクトに適応したビジュアル環境を探索する。"
        },
        concept: {
          title: "スケッチとコンセプト",
          description: "最初のアイデアをスケッチし、あなたに対応する形、メッセージ、色について考える。"
        },
        design: {
          title: "デザイン",
          description: "あなたのアイデンティティを反映するタイポグラフィ、ビジュアル、プロフェッショナルな構成で最終レンダリングを作成する。"
        },
        revisions: {
          title: "修正",
          description: "あなたのフィードバックは不可欠です。あなたに完璧に合うものを検証するまで一緒に調整します。"
        },
        delivery: {
          title: "配信とサポート",
          description: "最適化されたファイルの配信、すぐに使用可能（ウェブ、印刷、ネットワーク）。私はあなたのために利用可能なままです！"
        }
      },
      example: {
        title: "具体例",
        subtitle: "\"NOIRBRUME\"プロジェクト",
        description: "架空のクライアントとの現実的な会話を通じて、私のプロセスの実際の動作を発見してください。初期リクエストから最終配信まで。",
        cta1: "プロジェクトを開始",
        cta2: "私の作品を見る"
      }
    },
    services: {
      title: "サービス",
      subtitle: "私があなたのためにできること",
      description: "あなたのニーズと野心に適応した完全なクリエイティブソリューション。",
      branding: {
        title: "ブランドアイデンティティ",
        description: "印象的なロゴとあなたが誰であるかを語るイメージが必要ですか？私はあなたが本当のアイデンティティを構築するのを手伝います — ただの迅速なロゴではありません。",
        features: [
          "ロゴ（プロフェッショナル、Canvaではない）",
          "明確なグラフィック憲章",
          "一貫したビジュアルアイデンティティ",
          "持続するブランドポジショニング"
        ]
      },
      uiux: {
        title: "UI/UXデザイン",
        description: "良いデザインは単に美しいだけではありません。機能しなければなりません。私はシンプルで流動的で使用が楽しいインターフェースを作成します（ジョゼフィンおばさんにとってさえも）。",
        features: [
          "ユーザーリサーチ",
          "クリーンなワイヤーフレーム",
          "ピクセルパーフェクトなモックアップ",
          "すべてが成り立つかどうかを見るテスト"
        ]
      },
      web: {
        title: "ウェブ開発",
        description: "すべてのデバイスで完璧に動作するモダンでレスポンシブなウェブサイト。",
        features: [
          "レスポンシブデザイン",
          "SEO最適化",
          "高速パフォーマンス",
          "簡単なメンテナンス"
        ]
      },
      mobile: {
        title: "モバイルデザイン",
        description: "あなたのアプリはデフォルトテンプレートよりも良いものに値します。私はあなたに地下鉄で使用するのが楽しい、明確で直感的なインターフェースを作ります。",
        features: [
          "iOSとAndroidデザイン",
          "よく考えられたユーザージャーニー",
          "スムーズなオンボーディング",
          "アイコン、メニュー、そして違いを生む小さな詳細すべて"
        ]
      },
      print: {
        title: "印刷デザイン",
        description: "触れることができるもの。フライヤー、カード、ポスター — 目と手で読むすべてのもの。",
        features: [
          "きちんとしたレイアウト",
          "良いタイポの選択（Comic Sansではない、心配しないで）",
          "完璧な色の調和",
          "印刷業者用に準備されたファイル"
        ]
      },
      motion: {
        title: "モーションデザインとビデオ",
        description: "よく動くコンテンツ。私は編集し、アニメーション化し、あなたのビジュアルコミュニケーションにリズムを与えます。",
        features: [
          "スタイリッシュなロゴアニメーション",
          "ダイナミックなビデオ編集",
          "ティーザー、トレーラー、リール、ストーリー...",
          "マイクロアニメーションとスムーズエフェクト"
        ]
      },
      cta: "プロジェクトを開始"
    },
    testimonials: {
      title: "お客様の声",
      subtitle: "クライアントが言うこと",
      description: "私にプロジェクトを信頼してくれた人々からのフィードバック。",
      trustTitle: "彼らは私を信頼しています",
      trustSubtitle: "私のサービスを選んだ企業と起業家",
      googleReviewTitle: "私と働いたことがありますか？",
      googleReviewDescription: "あなたの意見は非常に重要です！Google Reviewsであなたの経験を共有し、他のクライアントが私のクリエイティブサービスの質を発見するのを助けてください。",
      googleReviewButton: "Googleでレビューを残す",
      googleReviewFooter: "あなたのレビューは私たちの成長を助けます",
      testimonial1: {
        name: "エミリー・ロドリゲス",
        role: "マーケティングディレクター、InnovateLab",
        content: "テオのクリエイティブなアプローチと技術的専門知識は、私たちが成功したデジタルキャンペーンを立ち上げるのに役立ちました。結果は自明です — エンゲージメントが300%増加！",
        company: "InnovateLab",
        project: "デジタルキャンペーンとモーショングラフィックス",
        date: "2023年10月"
      },
      testimonial2: {
        name: "匿名クライアント",
        role: "testimonial2.role",
        content: "テオは最初から私のブランドの本質を捉えました。スムーズなコミュニケーション、締切の尊重、プロフェッショナルな結果。強くお勧めします。",
        company: "testimonial2.company",
        project: "ロゴ作成",
        date: "2025年4月"
      },
      testimonial3: {
        name: "マイヤー・ニルス",
        role: "起業家",
        content: "私の名刺のデザインは私が探していたものそのものです：ミニマリスト、エレガント、インパクトがある。あなたの傾聴とプロフェッショナリズムに感謝します！",
        company: "testimonial3.company",
        project: "ビジュアルアイデンティティと名刺",
        date: "2025年4月"
      },
      testimonial4: {
        name: "ルーカス・シュタインマン",
        role: "アートディレクター",
        content: "テオ・ブロンデルとのコラボレーションは素晴らしかったです。彼のポスターキャンペーンは私たちのすべての期待を超えました — クリエイティブで現代的な作品、細部まで正確。色、タイポグラフィ、ビジュアルインパクトの感覚に特別な言及。",
        company: "testimonial4.company",
        project: "印刷キャンペーンとアート方向",
        date: "2025年4月"
      },
      testimonial5: {
        name: "アズディン・タフスート",
        role: "プロジェクトマネージャー",
        content: "テオと働くのはいつも楽しいです。反応が良く、クリエイティブで信頼できる。各プロジェクトはストレスなく進行します。",
        company: "testimonial5.company",
        project: "ブランドアイデンティティと印刷",
        date: "2025年2月"
      },
      testimonial6: {
        name: "ノア・ヴェリン",
        role: "プロダクトマネージャー",
        content: "素晴らしいコラボレーション。プロジェクトは最初から最後まで流動的でした。クリーンな結果、時間通りに配信、私たちのビジョンに忠実。",
        company: "testimonial6.company",
        project: "パッケージデザインとコミュニケーション材料",
        date: "2025年4月"
      },
      testimonial7: {
        name: "ジュリア・ルナール",
        role: "創設者、Atelier Kura",
        content: "テオは私たちのリブランディングをAからZまで管理しました。彼は明確さ、味、真の感性ですべてを再構築しました。最初の交流から私たちは彼と働くことを知っていました。",
        company: "Atelier Kura",
        project: "ビジュアルアイデンティティ再設計",
        date: "2025年3月"
      }
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "あなたのプロジェクトについて話しませんか？",
      description: "アイデアがありますか？ビジュアルヘルプが必要ですか？それとも私たちが一緒に働けるかどうか見たいだけですか？",
      stayInTouch: "連絡を取り合いましょう",
      stayInTouchDescription: "プロジェクトを開始する準備はできていますか？あなたのビジョンについて話し、一緒にそれを実現する方法を見てみましょう。",
      email: "メール",
      emailDescription: "私に書いてください、私は迅速に返信します",
      location: "場所",
      locationDescription: "レマン湖地域に拠点",
      followMe: "フォローしてください",
      sendMessage: "メッセージを送信",
      form: {
        name: "名前",
        namePlaceholder: "あなたの名前",
        email: "メール",
        emailPlaceholder: "your.email@example.com",
        subject: "件名",
        subjectPlaceholder: "あなたのプロジェクトは何ですか？",
        message: "メッセージ",
        messagePlaceholder: "あなたのプロジェクトについて教えてください...",
        send: "メッセージを送信",
        emailNote: "フォームはあなたのデフォルトメールクライアントを開きます",
        directEmail: "hello@theoblondel.chに直接書くこともできます"
      }
    },
    footer: {
      description: "スイスを拠点とするメディアデザイナー、ブランドアイデンティティとインターフェースデザインを専門とする。",
      quickLinks: "クイックリンク",
      services: "サービス",
      madeWith: "で作られた",
      madeIn: "スイスで",
      copyright: "© 2024 テオ・ブロンデル。全著作権所有。"
    },
    fakeChat: {
      clientName: "クライアント - NOIRBRUME",
      onlineStatus: "オンライン",
      message1: "こんにちはテオ！私のブランド\"NOIRBRUME\"のロゴが必要です。ストリートウェアスタイル、控えめで詩的な。",
      timestamp1: "14:32",
      message2: "とてもクールな名前！私はすでに霧のような雰囲気のミニマルなタイポグラフィックロゴを見ています。今夜最初のアイデアを送ります！",
      timestamp2: "14:35",
      cta1: "プロジェクトを開始する準備はできていますか？",
      ctaDescription: "あなたのビジョンについて話し、同じ細部への注意を払って一緒にそれを実現する方法を見てみましょう。",
      ctaButton1: "プロジェクトを開始",
      ctaButton2: "私の作品を見る"
    }
  },
  de: {
    nav: {
      about: "Über mich",
      portfolio: "Portfolio",
      services: "Dienstleistungen",
      contact: "Kontakt",
      discuss: "Sprechen wir"
    },
    hero: {
      subtitle: "Kreative Lösungen",
      greeting: "Hallo, ich bin Theo",
      title1: "Lösungen",
      title2: "kreativ",
      title3: "vielseitig",
      description: "Ich bin Mediendesigner in der Schweiz und verwandle Ihre Ideen in saubere, wirkungsvolle und wirklich stilvolle visuelle Projekte.",
      cta1: "Sprechen wir?",
      cta2: "Demo ansehen"
    },
    about: {
      title: "Meine Reise",
      subtitle: "Mein Weg zur Kreation",
      description: "Ich habe wie viele angefangen: mit YouTube-Montagen mit 10, den Kopf voller Pixel und Soundeffekte. Minecraft, Fortnite, Call of... Ich verbrachte Stunden mit Testen, Basteln, auf der Suche nach dem, was funktioniert.\n\nDann kam das Zeichnen. Dann Mediendesign. Und da verstand ich: Das will ich machen. Erschaffen. Gestalten. Visuelle Ideen zum Leben erwecken, die zu den Menschen sprechen.",
      cta: "Mehr über mich erfahren",
      stats: {
        experience: "Jahre Erfahrung",
        projects: "Projekte geliefert",
        satisfaction: "Kundenzufriedenheit",
        clients: "Kunden weltweit"
      },
      skills: {
        title: "Was mache ich?",
        adobe: "Vollständige Beherrschung der Creative Suite",
        davinci: "Professionelle Videobearbeitung und Farbkorrektur",
        autodesk: "3D-Modellierung und Animation",
        figma: "UI/UX-Design und Prototyping"
      }
    },
    portfolio: {
      title: "Meine Projekte",
      subtitle: "Einige Sachen, die ich gerne gemacht habe",
      description: "Eine Auswahl von Projekten, die meinen Ansatz und Stil zeigen.",
      viewOnBehance: "Auf Behance ansehen",
      clickToView: "Klicken Sie, um das Projekt anzusehen",
      viewAll: "Alle auf Behance ansehen"
    },
    process: {
      title: "Mein Prozess",
      subtitle: "Mein Kreativer Prozess",
      description: "Ein einfacher, strukturierter und maßgeschneiderter Ansatz",
      intro: "Jedes Projekt ist einzigartig, aber meine Methode bleibt solide. So verwandle ich Ihre Ideen in konkrete Ergebnisse.",
      steps: {
        brief: {
          title: "Brief & Zuhören",
          description: "Ihre Bedürfnisse, Ziele und Markenwelt verstehen."
        },
        research: {
          title: "Recherche & Moodboard",
          description: "Inspirationen, Trends und die visuelle Umgebung erkunden, die zu Ihrem Projekt passt."
        },
        concept: {
          title: "Skizzen & Konzepte",
          description: "Die ersten Ideen skizzieren, über Formen, Botschaften, Farben nachdenken, die zu Ihnen passen."
        },
        design: {
          title: "Design",
          description: "Erstellung des finalen Renderings mit Typografie, Visuals und professioneller Komposition, die Ihre Identität widerspiegelt."
        },
        revisions: {
          title: "Überarbeitungen",
          description: "Ihr Feedback ist wesentlich. Wir passen gemeinsam an, bis wir validieren, was perfekt zu Ihnen passt."
        },
        delivery: {
          title: "Lieferung & Begleitung",
          description: "Lieferung optimierter Dateien, sofort einsatzbereit (Web, Print, Netzwerke). Ich bleibe für Sie verfügbar!"
        }
      },
      example: {
        title: "Konkretes Beispiel",
        subtitle: "\"NOIRBRUME\" Projekt",
        description: "Entdecken Sie meinen Prozess in Aktion durch ein realistisches Gespräch mit einem fiktiven Kunden. Von der ersten Anfrage bis zur finalen Lieferung.",
        cta1: "Projekt starten",
        cta2: "Meine Arbeiten ansehen"
      }
    },
    services: {
      title: "Dienstleistungen",
      subtitle: "Was ich für Sie tun kann",
      description: "Vollständige kreative Lösungen, angepasst an Ihre Bedürfnisse und Ambitionen.",
      branding: {
        title: "Markenidentität",
        description: "Brauchen Sie ein Logo, das rockt, und ein Image, das erzählt, wer Sie sind? Ich helfe Ihnen, eine echte Identität aufzubauen — nicht nur ein schnelles Logo.",
        features: [
          "Logo (professionell, nicht auf Canva)",
          "Klare Grafik-Charta",
          "Kohärente visuelle Identität",
          "Markenpositionierung, die standhält"
        ]
      },
      uiux: {
        title: "UI/UX Design",
        description: "Gutes Design ist nicht nur hübsch. Es muss funktionieren. Ich erstelle einfache, fließende und angenehm zu nutzende Interfaces (sogar für Tante Josefine).",
        features: [
          "Benutzerforschung",
          "Saubere Wireframes",
          "Pixel-perfekte Mockups",
          "Tests, um zu sehen, ob alles hält"
        ]
      },
      web: {
        title: "Webentwicklung",
        description: "Moderne und responsive Websites, die perfekt auf allen Geräten funktionieren.",
        features: [
          "Responsive Design",
          "SEO-Optimierung",
          "Schnelle Performance",
          "Einfache Wartung"
        ]
      },
      mobile: {
        title: "Mobile Design",
        description: "Ihre App verdient besser als ein Standard-Template. Ich mache Ihnen ein klares, intuitives Interface, das angenehm in der U-Bahn zu nutzen ist.",
        features: [
          "iOS & Android Design",
          "Gut durchdachte User Journey",
          "Fließendes Onboarding",
          "Icons, Menüs und all die kleinen Details, die den Unterschied machen"
        ]
      },
      print: {
        title: "Print Design",
        description: "Sachen, die man anfassen kann. Flyer, Karten, Poster — alles, was man mit Augen und Händen liest.",
        features: [
          "Sauberes Layout",
          "Gute Typo-Wahl (nicht Comic Sans, keine Sorge)",
          "Perfekte Farbharmonien",
          "Dateien bereit für die Druckerei"
        ]
      },
      motion: {
        title: "Motion Design & Video",
        description: "Inhalte, die sich gut bewegen. Ich schneide, animiere, gebe Rhythmus zu Ihrer visuellen Kommunikation.",
        features: [
          "Stilvolle Logo-Animationen",
          "Dynamische Video-Montagen",
          "Teaser, Trailer, Reels, Stories...",
          "Mikro-Animationen und sanfte Effekte"
        ]
      },
      cta: "Projekt starten"
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "Was Kunden sagen",
      description: "Feedback von Menschen, die mir ihre Projekte anvertraut haben.",
      trustTitle: "Sie vertrauen mir",
      trustSubtitle: "Unternehmen und Unternehmer, die meine Dienstleistungen gewählt haben",
      googleReviewTitle: "Haben Sie mit mir gearbeitet?",
      googleReviewDescription: "Ihre Meinung zählt enorm! Teilen Sie Ihre Erfahrung auf Google Reviews und helfen Sie anderen Kunden, die Qualität meiner kreativen Dienstleistungen zu entdecken.",
      googleReviewButton: "Google-Bewertung hinterlassen",
      googleReviewFooter: "Ihre Bewertung hilft uns zu wachsen",
      testimonial1: {
        name: "Emily Rodriguez",
        role: "Marketing Director, InnovateLab",
        content: "Theos kreativer Ansatz und technische Expertise halfen uns, eine erfolgreiche digitale Kampagne zu starten. Die Ergebnisse sprechen für sich — 300% Steigerung des Engagements!",
        company: "InnovateLab",
        project: "Digitale Kampagne & Motion Graphics",
        date: "Oktober 2023"
      },
      testimonial2: {
        name: "Anonymer Kunde",
        role: "testimonial2.role",
        content: "Theo erfasste die Essenz meiner Marke von Anfang an. Reibungslose Kommunikation, eingehaltene Fristen und professionelles Ergebnis. Ich empfehle wärmstens.",
        company: "testimonial2.company",
        project: "Logo-Erstellung",
        date: "April 2025"
      },
      testimonial3: {
        name: "Meier Nils",
        role: "Unternehmer",
        content: "Das Design meiner Visitenkarte ist genau das, was ich suchte: minimalistisch, elegant und wirkungsvoll. Danke für Ihr Zuhören und Professionalität!",
        company: "testimonial3.company",
        project: "Visuelle Identität & Visitenkarte",
        date: "April 2025"
      },
      testimonial4: {
        name: "Lukas Steinmann",
        role: "Art Director",
        content: "Die Zusammenarbeit mit Theo Blondel war ausgezeichnet. Seine Poster-Kampagne übertraf alle unsere Erwartungen — kreative, moderne Arbeit, präzise bis ins Detail. Besondere Erwähnung für sein Gefühl für Farben, Typografie und visuellen Impact.",
        company: "testimonial4.company",
        project: "Print-Kampagne & Art Direction",
        date: "April 2025"
      },
      testimonial5: {
        name: "Azdine Tafssout",
        role: "Projektleiter",
        content: "Immer ein Vergnügen, mit Theo zu arbeiten. Reaktionsschnell, kreativ und zuverlässig. Jedes Projekt läuft stressfrei.",
        company: "testimonial5.company",
        project: "Markenidentität & Print",
        date: "Februar 2025"
      },
      testimonial6: {
        name: "Noa Vellin",
        role: "Produktmanager",
        content: "Super Zusammenarbeit. Das Projekt lief von Anfang bis Ende reibungslos. Sauberes Ergebnis, pünktlich geliefert und treu unserer Vision.",
        company: "testimonial6.company",
        project: "Verpackungsdesign & Kommunikationsmaterialien",
        date: "April 2025"
      },
      testimonial7: {
        name: "Julia Renard",
        role: "Gründerin, Atelier Kura",
        content: "Theo managte unser Rebranding von A bis Z. Er strukturierte alles mit Klarheit, Geschmack und echter Sensibilität neu. Wir wussten von den ersten Gesprächen an, dass wir mit ihm arbeiten würden.",
        company: "Atelier Kura",
        project: "Neugestaltung der visuellen Identität",
        date: "März 2025"
      }
    },
    contact: {
      title: "Kontakt",
      subtitle: "Sprechen wir über Ihr Projekt?",
      description: "Haben Sie eine Idee? Brauchen Sie visuelle Hilfe? Oder wollen Sie einfach sehen, ob wir zusammenarbeiten können?",
      stayInTouch: "In Kontakt bleiben",
      stayInTouchDescription: "Bereit, Ihr Projekt zu starten? Sprechen wir über Ihre Vision und sehen, wie wir sie gemeinsam verwirklichen können.",
      email: "E-Mail",
      emailDescription: "Schreiben Sie mir, ich antworte schnell",
      location: "Standort",
      locationDescription: "Ansässig in der Genfersee-Region",
      followMe: "Folgen Sie mir",
      sendMessage: "Nachricht senden",
      form: {
        name: "Name",
        namePlaceholder: "Ihr Name",
        email: "E-Mail",
        emailPlaceholder: "ihre.email@beispiel.com",
        subject: "Betreff",
        subjectPlaceholder: "Was ist Ihr Projekt?",
        message: "Nachricht",
        messagePlaceholder: "Erzählen Sie mir von Ihrem Projekt...",
        send: "Nachricht senden",
        emailNote: "Das Formular öffnet Ihren Standard-E-Mail-Client",
        directEmail: "Sie können mir auch direkt an hello@theoblondel.ch schreiben"
      }
    },
    footer: {
      description: "Mediendesigner aus der Schweiz, spezialisiert auf Markenidentität und Interface-Design.",
      quickLinks: "Schnelle Links",
      services: "Dienstleistungen",
      madeWith: "Gemacht mit",
      madeIn: "in der Schweiz",
      copyright: "© 2024 Theo Blondel. Alle Rechte vorbehalten."
    },
    fakeChat: {
      clientName: "Kunde - NOIRBRUME",
      onlineStatus: "Online",
      message1: "Hallo Theo! Ich brauche ein Logo für meine Marke \"NOIRBRUME\". Ein Streetwear-Stil, nüchtern und poetisch.",
      timestamp1: "14:32",
      message2: "So ein cooler Name! Ich sehe bereits ein minimalistisches typografisches Logo mit nebuliger Atmosphäre. Ich schicke dir heute Abend eine erste Idee!",
      timestamp2: "14:35",
      cta1: "Bereit, Ihr Projekt zu starten?",
      ctaDescription: "Sprechen wir über Ihre Vision und sehen, wie wir sie gemeinsam mit derselben Aufmerksamkeit für Details verwirklichen können.",
      ctaButton1: "Projekt starten",
      ctaButton2: "Meine Arbeiten ansehen"
    }
  },
  it: {
    nav: {
      about: "Chi sono",
      portfolio: "Portfolio",
      services: "Servizi",
      contact: "Contatti",
      discuss: "Parliamone"
    },
    hero: {
      subtitle: "Soluzioni Creative",
      greeting: "Ciao, sono Theo",
      title1: "Soluzioni",
      title2: "creative",
      title3: "versatili",
      description: "Sono un media designer in Svizzera, e trasformo le tue idee in progetti visivi puliti, d'impatto e davvero eleganti.",
      cta1: "Ne parliamo?",
      cta2: "Vedi la demo"
    },
    about: {
      title: "Il Mio Percorso",
      subtitle: "Il mio cammino verso la creazione",
      description: "Ho iniziato come molti: con montaggi YouTube a 10 anni, la testa nei pixel e negli effetti sonori. Minecraft, Fortnite, Call of... Ho passato ore a testare, smanettare, cercare quello che funziona.\n\nPoi è arrivato il disegno. Poi il media design. E lì ho capito: voglio fare questo. Creare. Progettare. Dare vita a idee visive che parlano alle persone.",
      cta: "Scopri di più su di me",
      stats: {
        experience: "Anni di esperienza",
        projects: "Progetti consegnati",
        satisfaction: "Soddisfazione clienti",
        clients: "Clienti nel mondo"
      },
      skills: {
        title: "Cosa faccio?",
        adobe: "Padronanza completa della suite creativa",
        davinci: "Montaggio video e color grading professionale",
        autodesk: "Modellazione 3D e animazione",
        figma: "Design UI/UX e prototipazione"
      }
    },
    portfolio: {
      title: "I Miei Progetti",
      subtitle: "Alcune cose che mi è piaciuto fare",
      description: "Una selezione di progetti che mostrano il mio approccio e stile.",
      viewOnBehance: "Vedi su Behance",
      clickToView: "Clicca per vedere il progetto",
      viewAll: "Vedi tutto su Behance"
    },
    process: {
      title: "Il Mio Processo",
      subtitle: "Il Mio Processo Creativo",
      description: "Un approccio semplice, strutturato e su misura",
      intro: "Ogni progetto è unico, ma il mio metodo rimane solido. Ecco come trasformo le tue idee in risultati concreti.",
      steps: {
        brief: {
          title: "Brief e Ascolto",
          description: "Capire i tuoi bisogni, obiettivi e l'universo del tuo brand."
        },
        research: {
          title: "Ricerca e Moodboard",
          description: "Esplorare ispirazioni, tendenze e l'ambiente visivo adatto al tuo progetto."
        },
        concept: {
          title: "Schizzi e Concetti",
          description: "Abbozzare le prime idee, riflettere su forme, messaggi, colori che ti corrispondono."
        },
        design: {
          title: "Design",
          description: "Creazione del rendering finale, con tipografie, visual e composizione professionale che riflettono la tua identità."
        },
        revisions: {
          title: "Revisioni",
          description: "I tuoi feedback sono essenziali. Aggiustiamo insieme fino a validare ciò che ti si addice perfettamente."
        },
        delivery: {
          title: "Consegna e Accompagnamento",
          description: "Consegna di file ottimizzati, pronti all'uso (web, stampa, social). Rimango disponibile per te!"
        }
      },
      example: {
        title: "Esempio Concreto",
        subtitle: "Progetto \"NOIRBRUME\"",
        description: "Scopri il mio processo in azione attraverso una conversazione realistica con un cliente fittizio. Dalla richiesta iniziale alla consegna finale.",
        cta1: "Inizia un progetto",
        cta2: "Vedi i miei lavori"
      }
    },
    services: {
      title: "Servizi",
      subtitle: "Cosa posso fare per te",
      description: "Soluzioni creative complete adattate ai tuoi bisogni e ambizioni.",
      branding: {
        title: "Identità di Brand",
        description: "Hai bisogno di un logo che spacca e di un'immagine che racconta chi sei? Ti aiuto a costruire una vera identità — non solo un logo fatto in fretta.",
        features: [
          "Logo (professionale, non su Canva)",
          "Carta grafica chiara",
          "Identità visiva coerente",
          "Posizionamento di brand che regge"
        ]
      },
      uiux: {
        title: "Design UI/UX",
        description: "Un buon design non è solo bello. Deve funzionare. Creo interfacce semplici, fluide e piacevoli da usare (anche per zia Giuseppina).",
        features: [
          "Ricerca utente",
          "Wireframe puliti",
          "Mockup pixel-perfect",
          "Test per vedere se tutto regge"
        ]
      },
      web: {
        title: "Sviluppo Web",
        description: "Siti web moderni e responsive che funzionano perfettamente su tutti i dispositivi.",
        features: [
          "Design responsive",
          "Ottimizzazione SEO",
          "Performance veloce",
          "Manutenzione facile"
        ]
      },
      mobile: {
        title: "Design Mobile",
        description: "La tua app merita meglio di un template di default. Ti faccio un'interfaccia chiara, intuitiva e piacevole da usare in metro.",
        features: [
          "Design iOS e Android",
          "Percorso utente ben pensato",
          "Onboarding fluido",
          "Icone, menu e tutti i piccoli dettagli che fanno la differenza"
        ]
      },
      print: {
        title: "Design Print",
        description: "Roba che si può toccare. Flyer, biglietti, poster — tutto quello che si legge con gli occhi e le mani.",
        features: [
          "Impaginazione curata",
          "Buona scelta di font (non Comic Sans, tranquillo)",
          "Armonie di colori perfette",
          "File pronti per la tipografia"
        ]
      },
      motion: {
        title: "Motion Design e Video",
        description: "Contenuti che si muovono bene. Monto, animo, do ritmo alla tua comunicazione visiva.",
        features: [
          "Animazioni logo eleganti",
          "Montaggi video dinamici",
          "Teaser, trailer, reel, stories...",
          "Micro-animazioni ed effetti fluidi"
        ]
      },
      cta: "Inizia un progetto"
    },
    testimonials: {
      title: "Testimonianze",
      subtitle: "Cosa dicono i clienti",
      description: "Feedback di persone che mi hanno affidato i loro progetti.",
      trustTitle: "Si fidano di me",
      trustSubtitle: "Aziende e imprenditori che hanno scelto i miei servizi",
      googleReviewTitle: "Hai lavorato con me?",
      googleReviewDescription: "La tua opinione conta enormemente! Condividi la tua esperienza su Google Reviews e aiuta altri clienti a scoprire la qualità dei miei servizi creativi.",
      googleReviewButton: "Lascia una recensione su Google",
      googleReviewFooter: "La tua recensione ci aiuta a crescere",
      testimonial1: {
        name: "Emily Rodriguez",
        role: "Marketing Director, InnovateLab",
        content: "L'approccio creativo e l'expertise tecnica di Theo ci hanno aiutato a lanciare una campagna digitale di successo. I risultati parlano da soli — 300% di aumento dell'engagement!",
        company: "InnovateLab",
        project: "Campagna digitale e Motion Graphics",
        date: "Ottobre 2023"
      },
      testimonial2: {
        name: "Cliente Anonimo",
        role: "testimonial2.role",
        content: "Theo ha catturato l'essenza del mio brand fin dall'inizio. Comunicazione fluida, scadenze rispettate e risultato professionale. Lo raccomando vivamente.",
        company: "testimonial2.company",
        project: "Creazione logo",
        date: "Aprile 2025"
      },
      testimonial3: {
        name: "Meier Nils",
        role: "Imprenditore",
        content: "Il design del mio biglietto da visita è esattamente quello che cercavo: minimalista, elegante e d'impatto. Grazie per l'ascolto e la professionalità!",
        company: "testimonial3.company",
        project: "Identità visiva e biglietto da visita",
        date: "Aprile 2025"
      },
      testimonial4: {
        name: "Lukas Steinmann",
        role: "Art Director",
        content: "La collaborazione con Theo Blondel è stata eccellente. La sua campagna poster ha superato tutte le nostre aspettative — lavoro creativo, moderno, preciso fino ai dettagli. Menzione speciale per il suo senso dei colori, delle tipografie e dell'impatto visivo.",
        company: "testimonial4.company",
        project: "Campagna print e direzione artistica",
        date: "Aprile 2025"
      },
      testimonial5: {
        name: "Azdine Tafssout",
        role: "Project Manager",
        content: "Sempre un piacere lavorare con Theo. Reattivo, creativo e affidabile. Ogni progetto procede senza stress.",
        company: "testimonial5.company",
        project: "Identità di brand e stampa",
        date: "Febbraio 2025"
      },
      testimonial6: {
        name: "Noa Vellin",
        role: "Product Manager",
        content: "Super collaborazione. Il progetto è stato fluido dall'inizio alla fine. Risultato pulito, consegnato in tempo e fedele alla nostra visione.",
        company: "testimonial6.company",
        project: "Design packaging e materiali di comunicazione",
        date: "Aprile 2025"
      },
      testimonial7: {
        name: "Julia Renard",
        role: "Fondatrice, Atelier Kura",
        content: "Theo ha gestito il nostro rebranding dalla A alla Z. Ha ristrutturato tutto con chiarezza, gusto e vera sensibilità. Abbiamo saputo fin dai primi scambi che avremmo lavorato con lui.",
        company: "Atelier Kura",
        project: "Ridisegno identità visiva",
        date: "Marzo 2025"
      }
    },
    contact: {
      title: "Contatti",
      subtitle: "Parliamo del tuo progetto?",
      description: "Hai un'idea? Hai bisogno di aiuto visivo? O vuoi solo vedere se possiamo lavorare insieme?",
      stayInTouch: "Rimaniamo in Contatto",
      stayInTouchDescription: "Pronto a iniziare il tuo progetto? Parliamo della tua visione e vediamo come possiamo realizzarla insieme.",
      email: "Email",
      emailDescription: "Scrivimi, rispondo velocemente",
      location: "Posizione",
      locationDescription: "Con base nella regione del Lago Lemano",
      followMe: "Seguimi",
      sendMessage: "Invia un Messaggio",
      form: {
        name: "Nome",
        namePlaceholder: "Il tuo nome",
        email: "Email",
        emailPlaceholder: "tua.email@esempio.com",
        subject: "Oggetto",
        subjectPlaceholder: "Qual è il tuo progetto?",
        message: "Messaggio",
        messagePlaceholder: "Parlami del tuo progetto...",
        send: "Invia messaggio",
        emailNote: "Il modulo aprirà il tuo client email predefinito",
        directEmail: "Puoi anche scrivermi direttamente a hello@theoblondel.ch"
      }
    },
    footer: {
      description: "Media designer con base in Svizzera, specializzato in identità di brand e design di interfacce.",
      quickLinks: "Link Rapidi",
      services: "Servizi",
      madeWith: "Fatto con",
      madeIn: "in Svizzera",
      copyright: "© 2024 Theo Blondel. Tutti i diritti riservati."
    },
    fakeChat: {
      clientName: "Cliente - NOIRBRUME",
      onlineStatus: "Online",
      message1: "Ciao Theo! Ho bisogno di un logo per il mio brand \"NOIRBRUME\". Uno stile streetwear, sobrio e poetico.",
      timestamp1: "14:32",
      message2: "Che nome figo! Vedo già un logo tipografico minimale con atmosfera nebbiosa. Ti mando una prima idea stasera!",
      timestamp2: "14:35",
      cta1: "Pronto a iniziare il tuo progetto?",
      ctaDescription: "Parliamo della tua visione e vediamo come possiamo realizzarla insieme con la stessa attenzione ai dettagli.",
      ctaButton1: "Inizia un progetto",
      ctaButton2: "Vedi i miei lavori"
    }
  },
  pt: {
    nav: {
      about: "Sobre",
      portfolio: "Portfólio",
      services: "Serviços",
      contact: "Contato",
      discuss: "Vamos conversar"
    },
    hero: {
      subtitle: "Soluções Criativas",
      greeting: "Olá, eu sou Theo",
      title1: "Soluções",
      title2: "criativas",
      title3: "versáteis",
      description: "Sou designer de mídia na Suíça, e transformo suas ideias em projetos visuais limpos, impactantes e realmente estilosos.",
      cta1: "Vamos conversar?",
      cta2: "Ver a demo"
    },
    about: {
      title: "Minha Jornada",
      subtitle: "Meu caminho para a criação",
      description: "Comecei como muitos: com montagens do YouTube aos 10 anos, a cabeça nos pixels e efeitos sonoros. Minecraft, Fortnite, Call of... Passei horas testando, mexendo, procurando o que funciona.\n\nDepois veio o desenho. Depois o design de mídia. E aí entendi: quero fazer isso. Criar. Projetar. Dar vida a ideias visuais que falam com as pessoas.",
      cta: "Saiba mais sobre mim",
      stats: {
        experience: "Anos de experiência",
        projects: "Projetos entregues",
        satisfaction: "Satisfação do cliente",
        clients: "Clientes no mundo"
      },
      skills: {
        title: "O que eu faço?",
        adobe: "Domínio completo da suíte criativa",
        davinci: "Edição de vídeo e correção de cor profissional",
        autodesk: "Modelagem 3D e animação",
        figma: "Design UI/UX e prototipagem"
      }
    },
    portfolio: {
      title: "Meus Projetos",
      subtitle: "Algumas coisas que gostei de fazer",
      description: "Uma seleção de projetos que mostram minha abordagem e estilo.",
      viewOnBehance: "Ver no Behance",
      clickToView: "Clique para ver o projeto",
      viewAll: "Ver tudo no Behance"
    },
    process: {
      title: "Meu Processo",
      subtitle: "Meu Processo Criativo",
      description: "Uma abordagem simples, estruturada e sob medida",
      intro: "Cada projeto é único, mas meu método permanece sólido. Veja como transformo suas ideias em resultados concretos.",
      steps: {
        brief: {
          title: "Brief e Escuta",
          description: "Entender suas necessidades, objetivos e o universo da sua marca."
        },
        research: {
          title: "Pesquisa e Moodboard",
          description: "Explorar inspirações, tendências e o ambiente visual adaptado ao seu projeto."
        },
        concept: {
          title: "Esboços e Conceitos",
          description: "Esboçar as primeiras ideias, pensar em formas, mensagens, cores que combinam com você."
        },
        design: {
          title: "Design",
          description: "Criação da renderização final, com tipografias, visuais e composição profissional que refletem sua identidade."
        },
        revisions: {
          title: "Revisões",
          description: "Seu feedback é essencial. Ajustamos juntos até validar o que combina perfeitamente com você."
        },
        delivery: {
          title: "Entrega e Acompanhamento",
          description: "Entrega de arquivos otimizados, prontos para uso (web, impressão, redes). Fico disponível para você!"
        }
      },
      example: {
        title: "Exemplo Concreto",
        subtitle: "Projeto \"NOIRBRUME\"",
        description: "Descubra meu processo em ação através de uma conversa realista com um cliente fictício. Da solicitação inicial à entrega final.",
        cta1: "Iniciar um projeto",
        cta2: "Ver meus trabalhos"
      }
    },
    services: {
      title: "Serviços",
      subtitle: "O que posso fazer por você",
      description: "Soluções criativas completas adaptadas às suas necessidades e ambições.",
      branding: {
        title: "Identidade de Marca",
        description: "Precisa de um logo que impressiona e uma imagem que conta quem você é? Te ajudo a construir uma identidade real — não apenas um logo rápido.",
        features: [
          "Logo (profissional, não no Canva)",
          "Carta gráfica clara",
          "Identidade visual coerente",
          "Posicionamento de marca que se sustenta"
        ]
      },
      uiux: {
        title: "Design UI/UX",
        description: "Um bom design não é apenas bonito. Tem que funcionar. Crio interfaces simples, fluidas e agradáveis de usar (mesmo para a tia Josefina).",
        features: [
          "Pesquisa de usuário",
          "Wireframes limpos",
          "Mockups pixel-perfect",
          "Testes para ver se tudo se sustenta"
        ]
      },
      web: {
        title: "Desenvolvimento Web",
        description: "Sites modernos e responsivos que funcionam perfeitamente em todos os dispositivos.",
        features: [
          "Design responsivo",
          "Otimização SEO",
          "Performance rápida",
          "Manutenção fácil"
        ]
      },
      mobile: {
        title: "Design Mobile",
        description: "Seu app merece melhor que um template padrão. Faço uma interface clara, intuitiva e agradável de usar no metrô.",
        features: [
          "Design iOS e Android",
          "Jornada do usuário bem pensada",
          "Onboarding fluido",
          "Ícones, menus e todos os pequenos detalhes que fazem a diferença"
        ]
      },
      print: {
        title: "Design Print",
        description: "Coisas que se pode tocar. Flyers, cartões, pôsteres — tudo que se lê com os olhos e as mãos.",
        features: [
          "Diagramação cuidadosa",
          "Boa escolha de tipografia (não Comic Sans, pode ficar tranquilo)",
          "Harmonias de cores perfeitas",
          "Arquivos prontos para a gráfica"
        ]
      },
      motion: {
        title: "Motion Design e Vídeo",
        description: "Conteúdo que se move bem. Edito, animo, dou ritmo à sua comunicação visual.",
        features: [
          "Animações de logos elegantes",
          "Montagens de vídeo dinâmicas",
          "Teasers, trailers, reels, stories...",
          "Micro-animações e efeitos suaves"
        ]
      },
      cta: "Iniciar um projeto"
    },
    testimonials: {
      title: "Depoimentos",
      subtitle: "O que dizem os clientes",
      description: "Feedback de pessoas que confiaram seus projetos a mim.",
      trustTitle: "Eles confiam em mim",
      trustSubtitle: "Empresas e empreendedores que escolheram meus serviços",
      googleReviewTitle: "Trabalhou comigo?",
      googleReviewDescription: "Sua opinião conta enormemente! Compartilhe sua experiência no Google Reviews e ajude outros clientes a descobrir a qualidade dos meus serviços criativos.",
      googleReviewButton: "Deixar uma avaliação no Google",
      googleReviewFooter: "Sua avaliação nos ajuda a crescer",
      testimonial1: {
        name: "Emily Rodriguez",
        role: "Diretora de Marketing, InnovateLab",
        content: "A abordagem criativa e expertise técnica do Theo nos ajudaram a lançar uma campanha digital bem-sucedida. Os resultados falam por si — 300% de aumento no engajamento!",
        company: "InnovateLab",
        project: "Campanha digital e Motion Graphics",
        date: "Outubro 2023"
      },
      testimonial2: {
        name: "Cliente Anônimo",
        role: "testimonial2.role",
        content: "Theo captou a essência da minha marca desde o início. Comunicação fluida, prazos respeitados e resultado profissional. Recomendo fortemente.",
        company: "testimonial2.company",
        project: "Criação de logo",
        date: "Abril 2025"
      },
      testimonial3: {
        name: "Meier Nils",
        role: "Empreendedor",
        content: "O design do meu cartão de visita é exatamente o que eu procurava: minimalista, elegante e impactante. Obrigado pela escuta e profissionalismo!",
        company: "testimonial3.company",
        project: "Identidade visual e cartão de visita",
        date: "Abril 2025"
      },
      testimonial4: {
        name: "Lukas Steinmann",
        role: "Diretor de Arte",
        content: "A colaboração com Theo Blondel foi excelente. Sua campanha de pôsteres superou todas as nossas expectativas — trabalho criativo, moderno, preciso até nos detalhes. Menção especial pelo seu senso de cores, tipografias e impacto visual.",
        company: "testimonial4.company",
        project: "Campanha print e direção de arte",
        date: "Abril 2025"
      },
      testimonial5: {
        name: "Azdine Tafssout",
        role: "Gerente de Projeto",
        content: "Sempre um prazer trabalhar com Theo. Responsivo, criativo e confiável. Cada projeto avança sem estresse.",
        company: "testimonial5.company",
        project: "Identidade de marca e impressão",
        date: "Fevereiro 2025"
      },
      testimonial6: {
        name: "Noa Vellin",
        role: "Gerente de Produto",
        content: "Super colaboração. O projeto foi fluido do início ao fim. Resultado limpo, entregue no prazo e fiel à nossa visão.",
        company: "testimonial6.company",
        project: "Design de embalagem e materiais de comunicação",
        date: "Abril 2025"
      },
      testimonial7: {
        name: "Julia Renard",
        role: "Fundadora, Atelier Kura",
        content: "Theo gerenciou nosso rebranding de A a Z. Ele reestruturou tudo com clareza, gosto e verdadeira sensibilidade. Soubemos desde as primeiras trocas que íamos trabalhar com ele.",
        company: "Atelier Kura",
        project: "Redesign de identidade visual",
        date: "Março 2025"
      }
    },
    contact: {
      title: "Contato",
      subtitle: "Vamos conversar sobre seu projeto?",
      description: "Tem uma ideia? Precisa de ajuda visual? Ou só quer ver se podemos trabalhar juntos?",
      stayInTouch: "Vamos Manter Contato",
      stayInTouchDescription: "Pronto para começar seu projeto? Vamos falar sobre sua visão e ver como podemos realizá-la juntos.",
      email: "Email",
      emailDescription: "Me escreva, respondo rápido",
      location: "Localização",
      locationDescription: "Baseado na região do Lago Lemano",
      followMe: "Me siga",
      sendMessage: "Enviar uma Mensagem",
      form: {
        name: "Nome",
        namePlaceholder: "Seu nome",
        email: "Email",
        emailPlaceholder: "seu.email@exemplo.com",
        subject: "Assunto",
        subjectPlaceholder: "Qual é seu projeto?",
        message: "Mensagem",
        messagePlaceholder: "Me conte sobre seu projeto...",
        send: "Enviar mensagem",
        emailNote: "O formulário abrirá seu cliente de email padrão",
        directEmail: "Você também pode me escrever diretamente em hello@theoblondel.ch"
      }
    },
    footer: {
      description: "Designer de mídia baseado na Suíça, especializado em identidade de marca e design de interface.",
      quickLinks: "Links Rápidos",
      services: "Serviços",
      madeWith: "Feito com",
      madeIn: "na Suíça",
      copyright: "© 2024 Theo Blondel. Todos os direitos reservados."
    },
    fakeChat: {
      clientName: "Cliente - NOIRBRUME",
      onlineStatus: "Online",
      message1: "Oi Theo! Preciso de um logo para minha marca \"NOIRBRUME\". Um estilo streetwear, sóbrio e poético.",
      timestamp1: "14:32",
      message2: "Que nome maneiro! Já vejo um logo tipográfico minimalista com atmosfera nebulosa. Te mando uma primeira ideia hoje à noite!",
      timestamp2: "14:35",
      cta1: "Pronto para começar seu projeto?",
      ctaDescription: "Vamos falar sobre sua visão e ver como podemos realizá-la juntos com a mesma atenção aos detalhes.",
      ctaButton1: "Iniciar um projeto",
      ctaButton2: "Ver meus trabalhos"
    }
  },
  sq: {
    nav: {
      about: "Rreth meje",
      portfolio: "Portofoli",
      services: "Shërbimet",
      contact: "Kontakti",
      discuss: "Le të flasim"
    },
    hero: {
      subtitle: "Zgjidhje Kreative",
      greeting: "Përshëndetje, unë jam Theo",
      title1: "Zgjidhje",
      title2: "kreative",
      title3: "të shumëllojshme",
      description: "Unë jam një dizajner mediash në Zvicër, dhe i transformoj idetë tuaja në projekte vizuale të pastra, me ndikim dhe vërtet elegante.",
      cta1: "Le të flasim?",
      cta2: "Shiko demon"
    },
    about: {
      title: "Udhëtimi Im",
      subtitle: "Rruga ime drejt krijimit",
      description: "Fillova si shumë të tjerë: me montazhe YouTube në moshën 10 vjeç, kokën në piksele dhe efekte zanore. Minecraft, Fortnite, Call of... Kalova orë duke testuar, duke eksperimentuar, duke kërkuar atë që funksionon.\n\nPastaj erdhi vizatimi. Pastaj dizajni i mediave. Dhe atje e kuptova: dua ta bëj këtë. Të krijoj. Të projektoj. T'u jap jetë ideve vizuale që flasin me njerëzit.",
      cta: "Mëso më shumë për mua",
      stats: {
        experience: "Vite përvojë",
        projects: "Projekte të dorëzuara",
        satisfaction: "Kënaqësia e klientit",
        clients: "Klientë në botë"
      },
      skills: {
        title: "Çfarë bëj?",
        adobe: "Zotërim i plotë i suitës kreative",
        davinci: "Montim video dhe gradim ngjyrash profesional",
        autodesk: "Modelim 3D dhe animacion",
        figma: "Dizajn UI/UX dhe prototipim"
      }
    },
    portfolio: {
      title: "Projektet e Mia",
      subtitle: "Disa gjëra që më pëlqeu t'i bëj",
      description: "Një përzgjedhje projektesh që tregojnë qasjen dhe stilin tim.",
      viewOnBehance: "Shiko në Behance",
      clickToView: "Kliko për të parë projektin",
      viewAll: "Shiko të gjitha në Behance"
    },
    process: {
      title: "Procesi Im",
      subtitle: "Procesi Im Kreativ",
      description: "Një qasje e thjeshtë, e strukturuar dhe e personalizuar",
      intro: "Çdo projekt është unik, por metoda ime mbetet e fortë. Ja se si i transformoj idetë tuaja në rezultate konkrete.",
      steps: {
        brief: {
          title: "Brief dhe Dëgjim",
          description: "Të kuptoj nevojat tuaja, objektivat dhe universin e markës suaj."
        },
        research: {
          title: "Kërkimi dhe Moodboard",
          description: "Të eksploroj inspirimet, tendencat dhe mjedisin vizual të përshtatur për projektin tuaj."
        },
        concept: {
          title: "Skicat dhe Konceptet",
          description: "Të skicoj idetë e para, të mendoj për format, mesazhet, ngjyrat që ju përshtaten."
        },
        design: {
          title: "Dizajni",
          description: "Krijimi i renderimit final, me tipografi, vizuale dhe kompozim profesional që reflektojnë identitetin tuaj."
        },
        revisions: {
          title: "Rishikimet",
          description: "Komente tuaja janë thelbësore. Rregullojmë së bashku derisa të validojmë atë që ju përshtatet plotësisht."
        },
        delivery: {
          title: "Dorëzimi dhe Shoqërimi",
          description: "Dorëzimi i skedarëve të optimizuar, gati për përdorim (web, print, rrjete). Mbetet i disponueshëm për ju!"
        }
      },
      example: {
        title: "Shembull Konkret",
        subtitle: "Projekti \"NOIRBRUME\"",
        description: "Zbuloni procesin tim në veprim përmes një bisede realiste me një klient fiktiv. Nga kërkesa fillestare deri te dorëzimi final.",
        cta1: "Fillo një projekt",
        cta2: "Shiko punët e mia"
      }
    },
    services: {
      title: "Shërbimet",
      subtitle: "Çfarë mund të bëj për ju",
      description: "Zgjidhje kreative të plota të përshtatura për nevojat dhe ambiciet tuaja.",
      branding: {
        title: "Identiteti i Markës",
        description: "Keni nevojë për një logo që bën përshtypje dhe një imazh që tregon se kush jeni? Ju ndihmoj të ndërtoni një identitet të vërtetë — jo vetëm një logo të shpejtë.",
        features: [
          "Logo (profesional, jo në Canva)",
          "Kartë grafike e qartë",
          "Identitet vizual i qëndrueshëm",
          "Pozicionim marke që qëndron"
        ]
      },
      uiux: {
        title: "Dizajn UI/UX",
        description: "Një dizajn i mirë nuk është vetëm i bukur. Duhet të funksionojë. Krijoj ndërfaqe të thjeshta, të rrjedhshme dhe të këndshme për t'u përdorur (edhe për tezen Jozefina).",
        features: [
          "Kërkimi i përdoruesit",
          "Wireframes të pastra",
          "Mockups pixel-perfect",
          "Teste për të parë nëse gjithçka qëndron"
        ]
      },
      web: {
        title: "Zhvillimi Web",
        description: "Faqe interneti moderne dhe responsive që funksionojnë përsosur në të gjitha pajisjet.",
        features: [
          "Dizajn responsive",
          "Optimizim SEO",
          "Performance të shpejta",
          "Mirëmbajtje e lehtë"
        ]
      },
      mobile: {
        title: "Dizajn Mobile",
        description: "Aplikacioni juaj meriton më shumë se një template i paracaktuar. Ju bëj një ndërfaqe të qartë, intuitive dhe të këndshme për t'u përdorur në metro.",
        features: [
          "Dizajn iOS dhe Android",
          "Udhëtim përdoruesi i menduar mirë",
          "Onboarding i rrjedhshëm",
          "Ikona, menu dhe të gjitha detajet e vogla që bëjnë ndryshimin"
        ]
      },
      print: {
        title: "Dizajn Print",
        description: "Gjëra që mund t'i prekësh. Flyers, karta, postera — gjithçka që lexohet me sy dhe duar.",
        features: [
          "Layout i kujdesshëm",
          "Zgjedhje e mirë tipografie (jo Comic Sans, mos u shqetëso)",
          "Harmoni ngjyrash të përsosura",
          "Skedarë gati për shtypshkronjën"
        ]
      },
      motion: {
        title: "Motion Design dhe Video",
        description: "Përmbajtje që lëviz mirë. Montoj, animoj, i jap ritëm komunikimit tuaj vizual.",
        features: [
          "Animacione logo elegante",
          "Montazhe video dinamike",
          "Teasers, trailers, reels, stories...",
          "Mikro-animacione dhe efekte të buta"
        ]
      },
      cta: "Fillo një projekt"
    },
    testimonials: {
      title: "Dëshmi",
      subtitle: "Çfarë thonë klientët",
      description: "Komente nga njerëz që më besuan projektet e tyre.",
      trustTitle: "Ata më besojnë",
      trustSubtitle: "Kompani dhe sipërmarrës që zgjodhën shërbimet e mia",
      googleReviewTitle: "Keni punuar me mua?",
      googleReviewDescription: "Mendimi juaj ka rëndësi të madhe! Ndani përvojën tuaj në Google Reviews dhe ndihmoni klientë të tjerë të zbulojnë cilësinë e shërbimeve të mia kreative.",
      googleReviewButton: "Lini një vlerësim në Google",
      googleReviewFooter: "Vlerësimi juaj na ndihmon të rritemi",
      testimonial1: {
        name: "Emily Rodriguez",
        role: "Drejtore Marketingu, InnovateLab",
        content: "Qasja kreative dhe ekspertiza teknike e Theo na ndihmoi të nisnim një fushatë dixhitale të suksesshme. Rezultatet flasin vetë — 300% rritje në angazhim!",
        company: "InnovateLab",
        project: "Fushatë dixhitale dhe Motion Graphics",
        date: "Tetor 2023"
      },
      testimonial2: {
        name: "Klient Anonim",
        role: "testimonial2.role",
        content: "Theo kapi thelbin e markës sime që nga fillimi. Komunikim i rrjedhshëm, afate të respektuara dhe rezultat profesional. E rekomandoj fuqimisht.",
        company: "testimonial2.company",
        project: "Krijimi i logos",
        date: "Prill 2025"
      },
      testimonial3: {
        name: "Meier Nils",
        role: "Sipërmarrës",
        content: "Dizajni i kartës sime të vizitës është pikërisht ajo që kërkoj: minimalist, elegant dhe me ndikim. Faleminderit për dëgjimin dhe profesionalizmin!",
        company: "testimonial3.company",
        project: "Identitet vizual dhe kartë vizite",
        date: "Prill 2025"
      },
      testimonial4: {
        name: "Lukas Steinmann",
        role: "Drejtor Artistik",
        content: "Bashkëpunimi me Theo Blondel ishte i shkëlqyer. Fushata e tij e posterave tejkaloi të gjitha pritshmëritë tona — punë kreative, moderne, precize deri në detaje. Përmendim të veçantë për ndjen e tij të ngjyrave, tipografive dhe ndikimit vizual.",
        company: "testimonial4.company",
        project: "Fushatë print dhe drejtim artistik",
        date: "Prill 2025"
      },
      testimonial5: {
        name: "Azdine Tafssout",
        role: "Menaxher Projekti",
        content: "Gjithmonë kënaqësi të punoj me Theo. Reaktiv, kreativ dhe i besueshëm. Çdo projekt përparon pa stres.",
        company: "testimonial5.company",
        project: "Identitet marke dhe print",
        date: "Shkurt 2025"
      },
      testimonial6: {
        name: "Noa Vellin",
        role: "Menaxher Produkti",
        content: "Bashkëpunim super. Projekti ishte i rrjedhshëm nga fillimi deri në fund. Rezultat i pastër, i dorëzuar në kohë dhe besnik ndaj vizionit tonë.",
        company: "testimonial6.company",
        project: "Dizajn paketimi dhe materiale komunikimi",
        date: "Prill 2025"
      },
      testimonial7: {
        name: "Julia Renard",
        role: "Themeluesja, Atelier Kura",
        content: "Theo menaxhoi rebrandimin tonë nga A në Z. Ai ristrukturoi gjithçka me qartësi, shije dhe ndjenjë të vërtetë. E dinim që nga shkëmbimet e para se do të punonim me të.",
        company: "Atelier Kura",
        project: "Riizajnim i identitetit vizual",
        date: "Mars 2025"
      }
    },
    contact: {
      title: "Kontakti",
      subtitle: "Le të flasim për projektin tuaj?",
      description: "Keni një ide? Keni nevojë për ndihmë vizuale? Apo thjesht doni të shihni nëse mund të punojmë së bashku?",
      stayInTouch: "Le të Qëndrojmë në Kontakt",
      stayInTouchDescription: "Gati të filloni projektin tuaj? Le të flasim për vizionin tuaj dhe të shohim se si mund ta realizojmë së bashku.",
      email: "Email",
      emailDescription: "Më shkruani, përgjigjem shpejt",
      location: "Vendndodhja",
      locationDescription: "I bazuar në rajonin e Liqenit të Gjenevës",
      followMe: "Më ndiqni",
      sendMessage: "Dërgo një Mesazh",
      form: {
        name: "Emri",
        namePlaceholder: "Emri juaj",
        email: "Email",
        emailPlaceholder: "email.juaj@shembull.com",
        subject: "Subjekti",
        subjectPlaceholder: "Cili është projekti juaj?",
        message: "Mesazhi",
        messagePlaceholder: "Më tregoni për projektin tuaj...",
        send: "Dërgo mesazhin",
        emailNote: "Formulari do të hapë klientin tuaj të email-it të paracaktuar",
        directEmail: "Mund të më shkruani gjithashtu drejtpërdrejt në hello@theoblondel.ch"
      }
    },
    footer: {
      description: "Dizajner mediash i bazuar në Zvicër, i specializuar në identitet marke dhe dizajn ndërfaqeje.",
      quickLinks: "Lidhje të Shpejta",
      services: "Shërbimet",
      madeWith: "Bërë me",
      madeIn: "në Zvicër",
      copyright: "© 2024 Theo Blondel. Të gjitha të drejtat e rezervuara."
    },
    fakeChat: {
      clientName: "Klienti - NOIRBRUME",
      onlineStatus: "Online",
      message1: "Përshëndetje Theo! Kam nevojë për një logo për markën time \"NOIRBRUME\". Një stil streetwear, i matur dhe poetik.",
      timestamp1: "14:32",
      message2: "Çfarë emri të bukur! Tashmë shoh një logo tipografik minimal me atmosferë të mjegullt. Do t'ju dërgoj një ide të parë sonte!",
      timestamp2: "14:35",
      cta1: "Gati të filloni projektin tuaj?",
      ctaDescription: "Le të flasim për vizionin tuaj dhe të shohim se si mund ta realizojmë së bashku me të njëjtën vëmendje ndaj detajeve.",
      ctaButton1: "Fillo një projekt",
      ctaButton2: "Shiko punët e mia"
    }
  }
};

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('fr');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Translation function
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language as keyof typeof translations];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, setTheme, t }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook to use the context
export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};