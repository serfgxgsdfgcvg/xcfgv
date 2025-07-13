import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Language = 'en' | 'fr' | 'es' | 'ru' | 'zh' | 'ja' | 'de' | 'it' | 'pt' | 'sq';

interface AppContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    nav: {
      about: 'About',
      work: 'Work',
      services: 'Services',
      contact: 'Contact',
      letsTalk: "Let's Talk"
    },
    
    // Hero Section
    hero: {
      subtitle: 'Creative Solutions',
      greeting: 'Hello, I am Theo',
      title1: 'Solutions',
      title2: 'creative',
      title3: 'versatile',
      description: 'Mediamatician based in Switzerland, I combine artistic creativity and technical expertise to create authentic visual experiences.',
      contactMe: 'Contact Me',
      watchDemo: 'Watch Demo',
      yearsExperience: 'Years\nExperience',
      projectsDelivered: 'Projects\nDelivered',
      clientSatisfaction: 'Client\nSatisfaction',
      clientsWorldwide: 'Clients\nWorldwide',
      service1: {
        title: 'Brand Identity',
        desc: 'Unique visual identities that tell your story'
      },
      service2: {
        title: 'UI/UX Design',
        desc: 'Intuitive interfaces for optimal user experience'
      },
      service3: {
        title: 'Web Development',
        desc: 'Modern and responsive websites'
      },
      service4: {
        title: 'Motion Graphics',
        desc: 'Captivating animations that bring your content to life'
      }
    },

    // About Section
    about: {
      subtitle: 'About Me',
      title1: 'Creative',
      title2: 'Solutions',
      description1: 'Passionate mediamatician based in Switzerland, I combine artistic creativity and technical expertise to create authentic visual experiences. My holistic approach to design allows me to develop creative solutions that tell your story uniquely.',
      description2: 'Specialized in brand identity and interface design, I support my clients in creating memorable experiences that leave a mark and generate concrete results.',
      skill1: {
        title: 'Creative Design',
        desc: 'Visual identity and graphic design'
      },
      skill2: {
        title: 'UI/UX Design',
        desc: 'User interface and experience'
      },
      skill3: {
        title: 'Development',
        desc: 'Web and mobile development'
      },
      skill4: {
        title: 'Strategy',
        desc: 'Digital strategy and consulting'
      }
    },

    // Portfolio Section
    portfolio: {
      subtitle: 'My Work',
      title1: 'Selected',
      title2: 'Projects',
      description: 'Discover some of my recent projects and creative achievements.',
      viewAllBehance: 'View all on Behance'
    },

    // Process Section
    process: {
      subtitle: 'My Process',
      title: 'How I Work',
      description1: 'A structured and collaborative approach',
      description2: 'Each project follows a proven methodology to ensure optimal results and total client satisfaction.',
      step1: {
        title: 'Discovery & Strategy',
        desc: 'Understanding your needs, goals, and target audience to define a clear strategy.'
      },
      step2: {
        title: 'Research & Analysis',
        desc: 'Market analysis, competitor study, and trend research to inform design decisions.'
      },
      step3: {
        title: 'Concept & Ideation',
        desc: 'Creative brainstorming and concept development with multiple design directions.'
      },
      step4: {
        title: 'Design & Creation',
        desc: 'Bringing concepts to life with detailed design work and visual refinement.'
      },
      step5: {
        title: 'Review & Iteration',
        desc: 'Collaborative feedback sessions and iterative improvements to perfect the solution.'
      },
      step6: {
        title: 'Delivery & Launch',
        desc: 'Final delivery with all assets, guidelines, and ongoing support for implementation.'
      },
      example: {
        title: 'Real Example: NOIRBRUME Project',
        description: 'See how this process unfolds in practice with a recent luxury perfume brand project.'
      }
    },

    // Services Section
    services: {
      subtitle: 'Services',
      title: 'What I Offer',
      description: 'Complete creative solutions tailored to your needs and goals.',
      startProject: 'Start a Project',
      brandIdentity: {
        title: 'Brand Identity',
        desc: 'Complete visual identity creation that reflects your brand values and resonates with your audience.',
        feature1: 'Logo design and variations',
        feature2: 'Color palette and typography',
        feature3: 'Brand guidelines and standards',
        feature4: 'Business card and stationery design'
      },
      uiux: {
        title: 'UI/UX Design',
        desc: 'User-centered interface design that combines aesthetics with optimal functionality.',
        feature1: 'User research and personas',
        feature2: 'Wireframing and prototyping',
        feature3: 'Visual interface design',
        feature4: 'Usability testing and optimization'
      },
      webDev: {
        title: 'Web Development',
        desc: 'Modern, responsive websites built with the latest technologies for optimal performance.',
        feature1: 'Responsive web design',
        feature2: 'Content management systems',
        feature3: 'E-commerce solutions',
        feature4: 'Performance optimization'
      },
      mobile: {
        title: 'Mobile Design',
        desc: 'Native and cross-platform mobile applications with intuitive user experiences.',
        feature1: 'iOS and Android design',
        feature2: 'App prototyping',
        feature3: 'User flow optimization',
        feature4: 'App store optimization'
      },
      creative: {
        title: 'Creative Direction',
        desc: 'Strategic creative guidance to ensure brand consistency across all touchpoints.',
        feature1: 'Creative strategy development',
        feature2: 'Campaign conceptualization',
        feature3: 'Art direction',
        feature4: 'Brand positioning'
      },
      motion: {
        title: 'Motion Graphics',
        desc: 'Engaging animations and motion graphics that bring your brand to life.',
        feature1: 'Logo animations',
        feature2: 'Explainer videos',
        feature3: 'Social media content',
        feature4: 'Interactive presentations'
      }
    },

    // Testimonials Section
    testimonials: {
      subtitle: 'Testimonials',
      title: 'What Clients Say',
      description: 'Discover what my clients think about our collaboration and the results achieved.',
      trustedBy: 'Trusted by Leading Companies',
      trustedByDesc: 'I have had the privilege of working with innovative companies around the world.',
      googleReviewTitle: 'Have you worked with me?',
      googleReviewDescription: 'Your opinion matters enormously! Share your experience on Google Reviews and help other clients discover the quality of my creative services.',
      googleReviewButton: 'Leave a Google Review',
      googleReviewFooter: 'Your review helps us grow'
    },

    // Individual testimonials
    testimonial1: {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Theo completely transformed our brand identity. His attention to detail and creative vision exceeded our expectations. The new design significantly improved our market presence.',
      company: 'TechStart Inc.',
      project: 'Complete brand identity redesign',
      date: 'December 2023'
    },
    testimonial2: {
      name: 'Michael Chen',
      role: 'Founder, DesignCo',
      content: 'Working with Theo was an absolute pleasure. He delivered a stunning website that not only looks amazing but also functions exceptionally well. The user experience is seamless.',
      company: 'DesignCo Studio',
      project: 'Website development & UX',
      date: 'November 2023'
    },
    testimonial3: {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, InnovateLab',
      content: "Theo's creative approach and technical expertise helped us launch a successful digital campaign. The results speak for themselves - 300% increase in engagement!",
      company: 'InnovateLab',
      project: 'Digital campaign & Motion Graphics',
      date: 'October 2023'
    },
    testimonial4: {
      name: 'David Martinez',
      role: 'Product Manager, StartupX',
      content: 'Theo has a unique ability to understand our needs and translate them into exceptional visual solutions. His professionalism and creativity are remarkable.',
      company: 'StartupX',
      project: 'Mobile interface & Prototyping',
      date: 'September 2023'
    },
    testimonial5: {
      name: 'Lisa Thompson',
      role: 'Creative Director, BrandForge',
      content: 'The collaboration with Theo was exceptional. He brings a fresh and innovative perspective to every project. His design and strategy skills are impressive.',
      company: 'BrandForge',
      project: 'Brand strategy & Guidelines',
      date: 'August 2023'
    },
    testimonial6: {
      name: 'Alexandre Dubois',
      role: 'Marketing Director, InnovaTech',
      content: "Theo's work on our new visual identity was remarkable. He captured the essence of our brand and translated it into a modern and impactful design. We are delighted with the final result.",
      company: 'InnovaTech',
      project: 'Visual identity creation',
      date: 'July 2023'
    },
    testimonial7: {
      name: 'Sophie Lefevre',
      role: 'Project Manager, DigitalFlow',
      content: 'Theo showed great listening skills and exemplary responsiveness. The website he designed for us is not only aesthetic but also very functional and easy to navigate. A true professional!',
      company: 'DigitalFlow',
      project: 'Website redesign',
      date: 'June 2023'
    },

    // Contact Section
    contact: {
      subtitle: 'Contact',
      title1: 'Let\'s Create',
      title2: 'Together',
      description: 'Ready to bring your project to life? Let\'s discuss your vision and see how we can make it happen.',
      getInTouch: 'Get In Touch',
      getInTouchDesc: 'I\'m always excited to work on new projects and meet creative people.',
      email: 'Email',
      emailDesc: 'Send me a message anytime',
      location: 'Location',
      followMe: 'Follow Me',
      sendMessage: 'Send Message',
      name: 'Name',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your.email@example.com',
      subject: 'Subject',
      subjectPlaceholder: 'Project subject',
      message: 'Message',
      messagePlaceholder: 'Tell me about your project...',
      sendBtn: 'Send Message'
    },

    // Footer
    footer: {
      description: 'Creative solutions specialist based in Switzerland. I help brands create authentic and memorable visual experiences.',
      quickLinks: 'Quick Links',
      services: 'Services',
      brandIdentity: 'Brand Identity',
      uiuxDesign: 'UI/UX Design',
      webDevelopment: 'Web Development',
      motionGraphics: 'Motion Graphics',
      madeWith: 'Made with',
      inSwitzerland: 'in Switzerland',
      allRights: '© 2024 Theo Blondel. All rights reserved.'
    },

    // Fake Chat
    fakeChat: {
      clientName: 'Client - NOIRBRUME',
      onlineStatus: 'Online',
      message1: 'Hello Theo, I hope you are well. I have an exciting project to propose to you. We need a complete visual identity for our new luxury perfume brand, \'NOIRBRUME\'.',
      timestamp1: '10:00 AM',
      message2: 'Absolutely! I\'m delighted to hear about your project. The name \'NOIRBRUME\' already evokes an intriguing atmosphere. Could you give me more details about the brand vision, target audience, and values you want to communicate?',
      timestamp2: '10:05 AM',
      message3: 'Of course. We target a high-end clientele, appreciating mystery, elegance, and sophistication. We want an identity that is both modern and timeless, with a touch of minimalism. Here are some inspirations we have collected.',
      timestamp3: '10:10 AM',
      message4: 'Thank you for this valuable information and inspirations! This gives me an excellent foundation to start. I already have some ideas in mind. I\'m sending you a first moodboard and some preliminary sketches to validate the artistic direction. Feel free to give me your feedback.',
      timestamp4: '10:15 AM',
      attachmentName1: 'Moodboard_NOIRBRUME.pdf',
      attachmentLabel: 'Attached file',
      message5: 'This is exactly what we had imagined! The moodboard perfectly captures the atmosphere. The sketches are very promising. We are particularly attracted to option B. Can you develop this direction?',
      timestamp5: '10:20 AM',
      message6: 'Excellent! I\'m delighted that you like the direction. I will refine option B and prepare more detailed logo proposals, as well as applications on different media (packaging, stationery, etc.). I will send you a complete presentation by the end of the week. In the meantime, here\'s a quick preview of the logo evolution.',
      timestamp6: '10:25 AM',
      attachmentName2: 'Logo_Evolution_NOIRBRUME.png',
      message7: 'Impressive! The speed and quality of your work are exceptional. We can\'t wait to see the final presentation. Thank you very much, Theo!',
      timestamp7: '10:30 AM',
      message8: 'It\'s a pleasure working with you! I\'m excited to present the rest to you. See you very soon!',
      timestamp8: '10:35 AM',
      attachmentName3: 'Final_Presentation_NOIRBRUME.pdf',
      downloadButton: 'Download',
      typingIndicator: 'typing...'
    }
  },

  fr: {
    // Navigation
    nav: {
      about: 'À propos',
      work: 'Projets',
      services: 'Services',
      contact: 'Contact',
      letsTalk: 'Parlons-en'
    },
    
    // Hero Section
    hero: {
      subtitle: 'Médiamaticien',
      greeting: 'Yo, moi c\'est Theo',
      title1: 'Solutions',
      title2: 'créatives',
      title3: 'polyvalentes',
      description: 'Je suis médiamaticien en Suisse, et je transforme tes idées en projets visuels propres, impactants, et vraiment stylés.',
      contactMe: 'On en parle ?',
      watchDemo: 'Voir la Démo',
      yearsExperience: 'Années\nd\'expérience',
      projectsDelivered: 'Projets\nlivrés',
      clientSatisfaction: 'Satisfaction\nClient',
      clientsWorldwide: 'Clients\ndans le monde',
      service1: {
        title: 'Identité de Marque',
        desc: 'Logos et identité visuelle qui racontent ton histoire'
      },
      service2: {
        title: 'Design UI/UX',
        desc: 'Interfaces qui fonctionnent et qui en jettent'
      },
      service3: {
        title: 'Design Print',
        desc: 'Des supports qu\'on peut toucher et ressentir'
      },
      service4: {
        title: 'Motion Design',
        desc: 'Du contenu qui bouge et qui captive'
      }
    },

    // About Section
    about: {
      subtitle: 'Mon Parcours',
      title1: 'Mon chemin',
      title2: 'vers la création',
      description1: 'J\'ai commencé comme beaucoup : avec des montages YouTube à 10 ans, la tête dans les pixels et les effets sonores. Minecraft, Fortnite, Call of... J\'ai passé des heures à tester, à bidouiller, à chercher ce qui marche.',
      description2: 'Puis le dessin est arrivé. Ensuite, la médiamatique. Et là, j\'ai pigé : je veux faire ça. Créer. Concevoir. Donner vie à des idées visuelles qui parlent aux gens.',
      skill1: {
        title: 'Adobe Creative Suite',
        desc: 'Maîtrise complète de la suite créative'
      },
      skill2: {
        title: 'DaVinci Resolve',
        desc: 'Montage vidéo et étalonnage professionnel'
      },
      skill3: {
        title: 'Autodesk',
        desc: 'Modélisation 3D et animation'
      },
      skill4: {
        title: 'Figma',
        desc: 'Design UI/UX et prototypage'
      }
    },

    // Portfolio Section
    portfolio: {
      subtitle: 'Mes Projets',
      title1: 'Quelques trucs',
      title2: 'que j\'ai kiffé faire',
      description: 'Une sélection de projets qui montrent mon approche et mon style.',
      viewAllBehance: 'Voir tout sur Behance'
    },

    // Process Section
    process: {
      subtitle: 'Mon Processus',
      title: 'Mon Processus Créatif',
      description1: 'Une approche simple, structurée et sur-mesure',
      description2: 'Chaque projet est unique, mais ma méthode reste solide. Voici comment je transforme tes idées en résultats concrets.',
      step1: {
        title: 'Brief & Écoute',
        desc: 'Comprendre tes besoins, tes objectifs et l\'univers de ta marque.'
      },
      step2: {
        title: 'Recherche & Moodboard',
        desc: 'Explorer les inspirations, les tendances et l\'environnement visuel adapté à ton projet.'
      },
      step3: {
        title: 'Croquis & Concepts',
        desc: 'Esquisser les premières idées, réfléchir aux formes, aux messages, aux couleurs qui te correspondent.'
      },
      step4: {
        title: 'Design',
        desc: 'Création du rendu final, avec typographies, visuels et composition professionnelle qui reflètent ton identité.'
      },
      step5: {
        title: 'Révisions',
        desc: 'Tes retours sont essentiels. On ajuste ensemble jusqu\'à valider ce qui te ressemble parfaitement.'
      },
      step6: {
        title: 'Livraison & Accompagnement',
        desc: 'Remise des fichiers optimisés, prêts à l\'emploi (web, print, réseaux). Je reste dispo pour toi !'
      },
      example: {
        title: 'Exemple Concret',
        description: 'Projet "NOIRBRUME" - Découvre mon processus en action à travers une conversation réaliste avec un client fictif. De la demande initiale à la livraison finale.'
      }
    },

    // Services Section
    services: {
      subtitle: 'Services',
      title: 'Ce que je peux faire pour toi',
      description: 'Des solutions créatives complètes adaptées à tes besoins et tes ambitions.',
      startProject: 'Démarrer un projet',
      brandIdentity: {
        title: 'Identité de Marque',
        desc: 'Besoin d\'un logo qui claque et d\'une image qui raconte qui tu es ? Je t\'aide à construire une vraie identité — pas juste un logo vite fait.',
        feature1: 'Logo (pro, pas sur Canva)',
        feature2: 'Charte graphique claire',
        feature3: 'Identité visuelle cohérente',
        feature4: 'Positionnement de marque qui tient la route'
      },
      uiux: {
        title: 'Design UI/UX',
        desc: 'Un bon design, c\'est pas juste joli. Faut que ça fonctionne. Je crée des interfaces simples, fluides et agréables à utiliser (même pour tata Josiane).',
        feature1: 'Recherche utilisateur',
        feature2: 'Wireframes propres',
        feature3: 'Maquettes pixel-perfect',
        feature4: 'Tests pour voir si tout tient'
      },
      webDev: {
        title: 'Développement Web',
        desc: 'Sites web modernes et responsives qui fonctionnent parfaitement sur tous les appareils.',
        feature1: 'Design web responsive',
        feature2: 'Optimisation SEO',
        feature3: 'Performance rapide',
        feature4: 'Maintenance facile'
      },
      mobile: {
        title: 'Design Mobile',
        desc: 'Ton app mérite mieux qu\'un template par défaut. Je te fais une interface claire, intuitive, et agréable à utiliser dans le métro.',
        feature1: 'Design iOS et Android',
        feature2: 'Parcours utilisateur bien pensé',
        feature3: 'Onboarding fluide',
        feature4: 'Icônes, menus, et tous les petits détails qui font la diff'
      },
      creative: {
        title: 'Design Print',
        desc: 'Des trucs qu\'on peut toucher. Flyers, cartes, affiches — tout ce qui se lit avec les yeux et les mains.',
        feature1: 'Mise en page soignée',
        feature2: 'Bon choix de typo (pas Comic Sans, t\'inquiète)',
        feature3: 'Harmonies de couleurs au petit oignon',
        feature4: 'Fichiers prêts pour l\'imprimeur'
      },
      motion: {
        title: 'Motion Design & Vidéo',
        desc: 'Du contenu qui bouge bien. Je monte, j\'anime, je donne du rythme à ta com\' visuelle.',
        feature1: 'Animation de logos stylés',
        feature2: 'Montages vidéos dynamiques',
        feature3: 'Teasers, trailers, reels, stories...',
        feature4: 'Micro-animations et effets smooth'
      }
    },

    // Testimonials Section
    testimonials: {
      subtitle: 'Témoignages',
      title: 'Ce que disent les clients',
      description: 'Les retours de personnes qui m\'ont fait confiance pour leurs projets.',
      trustedBy: 'Ils me font confiance',
      trustedByDesc: 'Entreprises et entrepreneurs qui ont choisi mes services',
      googleReviewTitle: 'Tu as travaillé avec moi ?',
      googleReviewDescription: 'Ton avis compte énormément ! Partage ton expérience sur Google Reviews et aide d\'autres clients à découvrir la qualité de mes services créatifs.',
      googleReviewButton: 'Laisser un avis sur Google',
      googleReviewFooter: 'Ton avis nous aide à grandir'
    },

    // Individual testimonials
    testimonial1: {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, InnovateLab',
      content: 'L\'approche créative et l\'expertise technique de Théo nous ont aidés à lancer une campagne digitale réussie. Les résultats parlent d\'eux-mêmes – 300 % d\'augmentation de l\'engagement !',
      company: 'InnovateLab',
      project: 'Campagne digitale & Motion Graphics',
      date: 'Octobre 2023'
    },
    testimonial2: {
      name: 'Client anonyme',
      role: 'testimonial2.role',
      content: 'Théo a su capter l\'essence de ma marque dès le départ. Communication fluide, délais respectés, et résultat pro. Je recommande vivement.',
      company: 'testimonial2.company',
      project: 'Création de logo',
      date: 'Avril 2025'
    },
    testimonial3: {
      name: 'Meier Nils',
      role: 'Entrepreneur',
      content: 'Le design de ma carte de visite est exactement ce que je cherchais : minimaliste, élégant et percutant. Merci pour ton écoute et ton professionnalisme !',
      company: 'testimonial3.company',
      project: 'Identité visuelle & carte de visite',
      date: 'Avril 2025'
    },
    testimonial4: {
      name: 'Lukas Steinmann',
      role: 'Directeur artistique',
      content: 'La collaboration avec Théo Blondel a été excellente. Sa campagne d\'affiches a dépassé toutes nos attentes — un travail créatif, moderne, précis jusque dans les détails. Mention spéciale pour son sens des couleurs, des typos et de l\'impact visuel.',
      company: 'testimonial4.company',
      project: 'Campagne print & direction artistique',
      date: 'Avril 2025'
    },
    testimonial5: {
      name: 'Azdine Tafssout',
      role: 'Chef de projet',
      content: 'Toujours un plaisir de bosser avec Théo. Réactif, créatif et fiable. Chaque projet avance sans stress.',
      company: 'testimonial5.company',
      project: 'Identité de marque & print',
      date: 'Février 2025'
    },
    testimonial6: {
      name: 'Noa Vellin',
      role: 'Responsable produit',
      content: 'Super collaboration. Le projet a été fluide du début à la fin. Résultat propre, livré dans les temps, et fidèle à notre vision.',
      company: 'testimonial6.company',
      project: 'Design packaging & supports de com\'',
      date: 'Avril 2025'
    },
    testimonial7: {
      name: 'Julia Renard',
      role: 'Fondatrice, Atelier Kura',
      content: 'Théo a géré notre rebranding de A à Z. Il a tout restructuré avec clarté, goût et une vraie sensibilité. On a su dès les premiers échanges qu\'on allait bosser avec lui.',
      company: 'Atelier Kura',
      project: 'Refonte d\'identité visuelle',
      date: 'Mars 2025'
    },

    // Contact Section
    contact: {
      subtitle: 'Contact',
      title1: 'On discute',
      title2: 'de ton projet ?',
      description: 'T\'as une idée ? T\'as besoin d\'un coup de main visuel ? Ou juste envie de savoir si ça peut coller entre nous ?',
      getInTouch: 'Restons en Contact',
      getInTouchDesc: 'Prêt à démarrer ton projet ? Parlons de ta vision et voyons comment nous pouvons la concrétiser ensemble.',
      email: 'Email',
      emailDesc: 'Écris-moi, je réponds vite',
      location: 'Localisation',
      followMe: 'Suis-moi',
      sendMessage: 'Envoyer un Message',
      name: 'Nom',
      namePlaceholder: 'Ton nom',
      emailPlaceholder: 'votre.email@exemple.com',
      subject: 'Sujet',
      subjectPlaceholder: 'C\'est quoi ton projet ?',
      message: 'Message',
      messagePlaceholder: 'Parle-moi de ton projet...',
      sendBtn: 'Envoyer le message'
    },

    // Footer
    footer: {
      description: 'Médiamaticien basé en Suisse, spécialisé en identité de marque et design d\'interface.',
      quickLinks: 'Liens Rapides',
      services: 'Services',
      brandIdentity: 'Identité de Marque',
      uiuxDesign: 'UI/UX Design',
      webDevelopment: 'Développement Web',
      motionGraphics: 'Motion Graphics',
      madeWith: 'Fait avec',
      inSwitzerland: 'en Suisse',
      allRights: '© 2024 Theo Blondel. Tous droits réservés.'
    },

    // Fake Chat
    fakeChat: {
      clientName: 'Client - NOIRBRUME',
      onlineStatus: 'En ligne',
      message1: 'Salut Théo ! J\'ai besoin d\'un logo pour ma marque "NOIRBRUME". Un style streetwear, sobre et poétique.',
      timestamp1: '14:32',
      message2: 'Trop stylé comme nom ! Je vois déjà un logo typographique minimal avec une ambiance brumeuse. Je t\'envoie une première idée ce soir !',
      timestamp2: '14:35',
      message3: '',
      timestamp3: '',
      message4: '',
      timestamp4: '',
      attachmentName1: '',
      attachmentLabel: '',
      message5: '',
      timestamp5: '',
      message6: '',
      timestamp6: '',
      attachmentName2: '',
      message7: '',
      timestamp7: '',
      message8: '',
      timestamp8: '',
      attachmentName3: '',
      downloadButton: '',
      typingIndicator: ''
    }
  },

  // Add other languages with similar structure...
  es: {
    // Spanish translations would go here
    nav: {
      about: 'Acerca de',
      work: 'Trabajo',
      services: 'Servicios',
      contact: 'Contacto',
      letsTalk: 'Hablemos'
    },
    // ... rest of Spanish translations
  },

  ru: {
    // Russian translations would go here
    nav: {
      about: 'О нас',
      work: 'Работы',
      services: 'Услуги',
      contact: 'Контакты',
      letsTalk: 'Давайте поговорим'
    },
    // ... rest of Russian translations
  },

  zh: {
    // Chinese translations would go here
    nav: {
      about: '关于',
      work: '作品',
      services: '服务',
      contact: '联系',
      letsTalk: '让我们谈谈'
    },
    // ... rest of Chinese translations
  },

  ja: {
    // Japanese translations would go here
    nav: {
      about: '私について',
      work: '作品',
      services: 'サービス',
      contact: 'お問い合わせ',
      letsTalk: 'お話ししましょう'
    },
    // ... rest of Japanese translations
  },

  de: {
    // German translations would go here
    nav: {
      about: 'Über mich',
      work: 'Arbeiten',
      services: 'Dienstleistungen',
      contact: 'Kontakt',
      letsTalk: 'Lass uns reden'
    },
    // ... rest of German translations
  },

  it: {
    // Italian translations would go here
    nav: {
      about: 'Chi sono',
      work: 'Lavori',
      services: 'Servizi',
      contact: 'Contatto',
      letsTalk: 'Parliamo'
    },
    // ... rest of Italian translations
  },

  pt: {
    // Portuguese translations would go here
    nav: {
      about: 'Sobre',
      work: 'Trabalhos',
      services: 'Serviços',
      contact: 'Contato',
      letsTalk: 'Vamos conversar'
    },
    // ... rest of Portuguese translations
  },

  sq: {
    // Albanian translations would go here
    nav: {
      about: 'Rreth meje',
      work: 'Punët',
      services: 'Shërbimet',
      contact: 'Kontakti',
      letsTalk: 'Le të flasim'
    },
    // ... rest of Albanian translations
  }
};

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('fr');

  // Load saved preferences
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedLanguage = localStorage.getItem('language') as Language;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Auto-detect system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      // Auto-detect browser language
      const browserLang = navigator.language.split('-')[0] as Language;
      if (translations[browserLang]) {
        setLanguage(browserLang);
      }
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Save language preference
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if not found in fallback
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const value: AppContextType = {
    theme,
    language,
    toggleTheme,
    setLanguage: handleSetLanguage,
    t
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextType {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}