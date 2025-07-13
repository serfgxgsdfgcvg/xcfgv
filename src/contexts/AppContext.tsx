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
      greeting: 'Hello, I am',
      title1: 'Theo',
      title2: 'Creative',
      title3: 'Solutions',
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
      work: 'Travaux',
      services: 'Services',
      contact: 'Contact',
      letsTalk: 'Discutons'
    },
    
    // Hero Section
    hero: {
      subtitle: 'Solutions Créatives',
      greeting: 'Bonjour, je suis',
      title1: 'Theo',
      title2: 'Solutions',
      title3: 'Créatives',
      description: 'Médiamaticien basé en Suisse, je combine créativité artistique et expertise technique pour créer des expériences visuelles authentiques.',
      contactMe: 'Me Contacter',
      watchDemo: 'Voir la Démo',
      yearsExperience: 'Années\nd\'Expérience',
      projectsDelivered: 'Projets\nRéalisés',
      clientSatisfaction: 'Satisfaction\nClient',
      clientsWorldwide: 'Clients\nMondiale',
      service1: {
        title: 'Identité de Marque',
        desc: 'Identités visuelles uniques qui racontent votre histoire'
      },
      service2: {
        title: 'Design UI/UX',
        desc: 'Interfaces intuitives pour une expérience utilisateur optimale'
      },
      service3: {
        title: 'Développement Web',
        desc: 'Sites web modernes et responsives'
      },
      service4: {
        title: 'Motion Graphics',
        desc: 'Animations captivantes qui donnent vie à votre contenu'
      }
    },

    // About Section
    about: {
      subtitle: 'À Propos',
      title1: 'Solutions',
      title2: 'Créatives',
      description1: 'Médiamaticien passionné basé en Suisse, je combine créativité artistique et expertise technique pour créer des expériences visuelles authentiques. Mon approche holistique du design me permet de développer des solutions créatives qui racontent votre histoire de manière unique.',
      description2: 'Spécialisé en identité de marque et design d\'interface, j\'accompagne mes clients dans la création d\'expériences mémorables qui marquent les esprits et génèrent des résultats concrets.',
      skill1: {
        title: 'Design Créatif',
        desc: 'Identité visuelle et design graphique'
      },
      skill2: {
        title: 'Design UI/UX',
        desc: 'Interface et expérience utilisateur'
      },
      skill3: {
        title: 'Développement',
        desc: 'Développement web et mobile'
      },
      skill4: {
        title: 'Stratégie',
        desc: 'Stratégie digitale et conseil'
      }
    },

    // Portfolio Section
    portfolio: {
      subtitle: 'Mes Travaux',
      title1: 'Projets',
      title2: 'Sélectionnés',
      description: 'Découvrez quelques-uns de mes projets récents et réalisations créatives.',
      viewAllBehance: 'Voir tout sur Behance'
    },

    // Process Section
    process: {
      subtitle: 'Mon Processus',
      title: 'Comment Je Travaille',
      description1: 'Une approche structurée et collaborative',
      description2: 'Chaque projet suit une méthodologie éprouvée pour garantir des résultats optimaux et une satisfaction client totale.',
      step1: {
        title: 'Découverte & Stratégie',
        desc: 'Comprendre vos besoins, objectifs et audience cible pour définir une stratégie claire.'
      },
      step2: {
        title: 'Recherche & Analyse',
        desc: 'Analyse du marché, étude de la concurrence et recherche de tendances pour éclairer les décisions de design.'
      },
      step3: {
        title: 'Concept & Idéation',
        desc: 'Brainstorming créatif et développement de concepts avec plusieurs directions de design.'
      },
      step4: {
        title: 'Design & Création',
        desc: 'Donner vie aux concepts avec un travail de design détaillé et un raffinement visuel.'
      },
      step5: {
        title: 'Révision & Itération',
        desc: 'Sessions de feedback collaboratives et améliorations itératives pour perfectionner la solution.'
      },
      step6: {
        title: 'Livraison & Lancement',
        desc: 'Livraison finale avec tous les assets, guidelines et support continu pour l\'implémentation.'
      },
      example: {
        title: 'Exemple Concret : Projet NOIRBRUME',
        description: 'Voyez comment ce processus se déroule en pratique avec un projet récent de marque de parfum de luxe.'
      }
    },

    // Services Section
    services: {
      subtitle: 'Services',
      title: 'Ce Que J\'Offre',
      description: 'Solutions créatives complètes adaptées à vos besoins et objectifs.',
      startProject: 'Démarrer un Projet',
      brandIdentity: {
        title: 'Identité de Marque',
        desc: 'Création d\'identité visuelle complète qui reflète les valeurs de votre marque et résonne avec votre audience.',
        feature1: 'Design de logo et variations',
        feature2: 'Palette de couleurs et typographie',
        feature3: 'Guidelines et standards de marque',
        feature4: 'Design de cartes de visite et papeterie'
      },
      uiux: {
        title: 'Design UI/UX',
        desc: 'Design d\'interface centré sur l\'utilisateur qui combine esthétique et fonctionnalité optimale.',
        feature1: 'Recherche utilisateur et personas',
        feature2: 'Wireframing et prototypage',
        feature3: 'Design d\'interface visuelle',
        feature4: 'Tests d\'utilisabilité et optimisation'
      },
      webDev: {
        title: 'Développement Web',
        desc: 'Sites web modernes et responsives construits avec les dernières technologies pour une performance optimale.',
        feature1: 'Design web responsive',
        feature2: 'Systèmes de gestion de contenu',
        feature3: 'Solutions e-commerce',
        feature4: 'Optimisation des performances'
      },
      mobile: {
        title: 'Design Mobile',
        desc: 'Applications mobiles natives et cross-platform avec des expériences utilisateur intuitives.',
        feature1: 'Design iOS et Android',
        feature2: 'Prototypage d\'applications',
        feature3: 'Optimisation des flux utilisateur',
        feature4: 'Optimisation pour les app stores'
      },
      creative: {
        title: 'Direction Créative',
        desc: 'Guidance créative stratégique pour assurer la cohérence de marque sur tous les points de contact.',
        feature1: 'Développement de stratégie créative',
        feature2: 'Conceptualisation de campagnes',
        feature3: 'Direction artistique',
        feature4: 'Positionnement de marque'
      },
      motion: {
        title: 'Motion Graphics',
        desc: 'Animations engageantes et motion graphics qui donnent vie à votre marque.',
        feature1: 'Animations de logo',
        feature2: 'Vidéos explicatives',
        feature3: 'Contenu pour réseaux sociaux',
        feature4: 'Présentations interactives'
      }
    },

    // Testimonials Section
    testimonials: {
      subtitle: 'Témoignages',
      title: 'Ce Que Disent Mes Clients',
      description: 'Découvrez ce que pensent mes clients de notre collaboration et des résultats obtenus.',
      trustedBy: 'Fait Confiance par des Entreprises Leaders',
      trustedByDesc: 'J\'ai eu le privilège de travailler avec des entreprises innovantes à travers le monde.',
      googleReviewTitle: 'Vous avez travaillé avec moi ?',
      googleReviewDescription: 'Votre avis compte énormément ! Partagez votre expérience sur Google Reviews et aidez d\'autres clients à découvrir la qualité de mes services créatifs.',
      googleReviewButton: 'Laisser un avis sur Google',
      googleReviewFooter: 'Votre avis nous aide à grandir'
    },

    // Individual testimonials
    testimonial1: {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Theo a transformé complètement notre identité de marque. Son attention aux détails et sa vision créative ont dépassé nos attentes. Le nouveau design a considérablement amélioré notre présence sur le marché.',
      company: 'TechStart Inc.',
      project: 'Refonte complète de l\'identité de marque',
      date: 'Décembre 2023'
    },
    testimonial2: {
      name: 'Michael Chen',
      role: 'Founder, DesignCo',
      content: 'Travailler avec Theo a été un plaisir absolu. Il a livré un site web époustouflant qui non seulement a l\'air incroyable, mais fonctionne aussi exceptionnellement bien. L\'expérience utilisateur est fluide.',
      company: 'DesignCo Studio',
      project: 'Développement site web & UX',
      date: 'Novembre 2023'
    },
    testimonial3: {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, InnovateLab',
      content: 'L\'approche créative et l\'expertise technique de Theo nous ont aidés à lancer une campagne digitale réussie. Les résultats parlent d\'eux-mêmes - 300% d\'augmentation de l\'engagement !',
      company: 'InnovateLab',
      project: 'Campagne digitale & Motion Graphics',
      date: 'Octobre 2023'
    },
    testimonial4: {
      name: 'David Martinez',
      role: 'Product Manager, StartupX',
      content: 'Theo a une capacité unique à comprendre nos besoins et à les traduire en solutions visuelles exceptionnelles. Son professionnalisme et sa créativité sont remarquables.',
      company: 'StartupX',
      project: 'Interface mobile & Prototypage',
      date: 'Septembre 2023'
    },
    testimonial5: {
      name: 'Lisa Thompson',
      role: 'Creative Director, BrandForge',
      content: 'La collaboration avec Theo a été exceptionnelle. Il apporte une perspective fraîche et innovante à chaque projet. Ses compétences en design et en stratégie sont impressionnantes.',
      company: 'BrandForge',
      project: 'Stratégie de marque & Guidelines',
      date: 'Août 2023'
    },
    testimonial6: {
      name: 'Alexandre Dubois',
      role: 'Directeur Marketing, InnovaTech',
      content: 'Le travail de Theo sur notre nouvelle identité visuelle a été remarquable. Il a su capturer l\'essence de notre marque et la traduire en un design moderne et percutant. Nous sommes ravis du résultat final.',
      company: 'InnovaTech',
      project: 'Création d\'identité visuelle',
      date: 'Juillet 2023'
    },
    testimonial7: {
      name: 'Sophie Lefevre',
      role: 'Chef de Projet, DigitalFlow',
      content: 'Theo a fait preuve d\'une grande écoute et d\'une réactivité exemplaire. Le site web qu\'il a conçu pour nous est non seulement esthétique, mais aussi très fonctionnel et facile à naviguer. Un vrai professionnel !',
      company: 'DigitalFlow',
      project: 'Refonte de site web',
      date: 'Juin 2023'
    },

    // Contact Section
    contact: {
      subtitle: 'Contact',
      title1: 'Créons',
      title2: 'Ensemble',
      description: 'Prêt à donner vie à votre projet ? Discutons de votre vision et voyons comment nous pouvons la concrétiser.',
      getInTouch: 'Entrons en Contact',
      getInTouchDesc: 'Je suis toujours ravi de travailler sur de nouveaux projets et de rencontrer des personnes créatives.',
      email: 'Email',
      emailDesc: 'Envoyez-moi un message à tout moment',
      location: 'Localisation',
      followMe: 'Suivez-Moi',
      sendMessage: 'Envoyer un Message',
      name: 'Nom',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'votre.email@exemple.com',
      subject: 'Sujet',
      subjectPlaceholder: 'Sujet du projet',
      message: 'Message',
      messagePlaceholder: 'Parlez-moi de votre projet...',
      sendBtn: 'Envoyer le Message'
    },

    // Footer
    footer: {
      description: 'Spécialiste en solutions créatives basé en Suisse. J\'aide les marques à créer des expériences visuelles authentiques et mémorables.',
      quickLinks: 'Liens Rapides',
      services: 'Services',
      brandIdentity: 'Identité de Marque',
      uiuxDesign: 'Design UI/UX',
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
      message1: 'Bonjour Theo, j\'espère que vous allez bien. J\'ai un projet passionnant à vous proposer. Nous avons besoin d\'une identité visuelle complète pour notre nouvelle marque de parfum de luxe, \'NOIRBRUME\'.',
      timestamp1: '10:00',
      message2: 'Absolument ! Je suis ravi d\'entendre parler de votre projet. Le nom \'NOIRBRUME\' évoque déjà une atmosphère intrigante. Pourriez-vous me donner plus de détails sur la vision de la marque, le public cible et les valeurs que vous souhaitez communiquer ?',
      timestamp2: '10:05',
      message3: 'Bien sûr. Nous visons une clientèle haut de gamme, appréciant le mystère, l\'élégance et la sophistication. Nous souhaitons une identité qui soit à la fois moderne et intemporelle, avec une touche de minimalisme. Voici quelques inspirations que nous avons collectées.',
      timestamp3: '10:10',
      message4: 'Merci pour ces précieuses informations et les inspirations ! Cela me donne une excellente base pour commencer. J\'ai déjà quelques idées en tête. Je vous envoie un premier moodboard et quelques esquisses préliminaires pour valider la direction artistique. N\'hésitez pas à me faire part de vos retours.',
      timestamp4: '10:15',
      attachmentName1: 'Moodboard_NOIRBRUME.pdf',
      attachmentLabel: 'Fichier joint',
      message5: 'C\'est exactement ce que nous avions imaginé ! Le moodboard capture parfaitement l\'ambiance. Les esquisses sont très prometteuses. Nous sommes particulièrement séduits par l\'option B. Pouvez-vous développer cette direction ?',
      timestamp5: '10:20',
      message6: 'Excellent ! Je suis ravi que la direction vous plaise. Je vais affiner l\'option B et préparer des propositions de logos plus détaillées, ainsi que des applications sur différents supports (packaging, papeterie, etc.). Je vous enverrai une présentation complète d\'ici la fin de la semaine. En attendant, voici un aperçu rapide de l\'évolution du logo.',
      timestamp6: '10:25',
      attachmentName2: 'Logo_Evolution_NOIRBRUME.png',
      message7: 'Impressionnant ! La rapidité et la qualité de votre travail sont exceptionnelles. Nous avons hâte de voir la présentation finale. Merci beaucoup, Theo !',
      timestamp7: '10:30',
      message8: 'C\'est un plaisir de travailler avec vous ! Je suis impatient de vous présenter la suite. À très vite !',
      timestamp8: '10:35',
      attachmentName3: 'Presentation_Finale_NOIRBRUME.pdf',
      downloadButton: 'Télécharger',
      typingIndicator: 'écrit...'
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