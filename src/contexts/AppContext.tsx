import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types
interface AppContextType {
  language: string;
  setLanguage: (lang: string) => void;
  theme: string;
  setTheme: (theme: string) => void;
  t: (key: string) => string;
}

interface AppProviderProps {
  children: ReactNode;
}

// Translations
const translations = {
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.work': 'Réalisations',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.letsTalk': 'Discutons',

    // Hero Section
    'hero.subtitle': 'Médiamaticien',
    'hero.greeting': 'Yo, moi c\'est Theo',
    'hero.title1': 'Solutions',
    'hero.title2': 'créatives polyvalentes',
    'hero.title3': '',
    'hero.description': 'Passionné par la création numérique, je transforme vos idées en expériences digitales mémorables. De la conception à la réalisation, je vous accompagne dans tous vos projets créatifs.',
    'hero.contactMe': 'Me contacter',
    'hero.watchDemo': 'Voir démo',
    'hero.yearsExperience': 'Années d\'expérience',
    'hero.projectsDelivered': 'Projets livrés',
    'hero.clientSatisfaction': 'Satisfaction client',
    'hero.clientsWorldwide': 'Clients dans le monde',

    // Hero Services
    'hero.service1.title': 'Design UI/UX',
    'hero.service1.desc': 'Interfaces intuitives et expériences utilisateur optimales',
    'hero.service2.title': 'Développement Web',
    'hero.service2.desc': 'Sites web modernes et applications performantes',
    'hero.service3.title': 'Identité Visuelle',
    'hero.service3.desc': 'Création de marques fortes et mémorables',
    'hero.service4.title': 'Motion Design',
    'hero.service4.desc': 'Animations et vidéos captivantes',

    // About Section
    'about.subtitle': 'Créatif passionné',
    'about.title1': 'Mon Parcours',
    'about.title2': 'À quoi je sers ?',
    'about.whatAmIFor': 'À quoi je sers ?',
    'about.description1': 'Médiamaticien de formation avec plus de 5 ans d\'expérience dans le domaine du design et du développement web. Je combine créativité et expertise technique pour créer des solutions digitales innovantes.',
    'about.description2': 'Mon approche se base sur l\'écoute, la collaboration et l\'attention aux détails pour transformer vos idées en réalité digitale.',

    // About Skills
    'about.skill1.title': 'Design UI/UX',
    'about.skill1.desc': 'Création d\'interfaces utilisateur intuitives et d\'expériences optimales',
    'about.skill2.title': 'Développement Frontend',
    'about.skill2.desc': 'Développement d\'applications web modernes et responsives',
    'about.skill3.title': 'Identité Visuelle',
    'about.skill3.desc': 'Conception de logos, chartes graphiques et systèmes visuels',
    'about.skill4.title': 'Motion Graphics',
    'about.skill4.desc': 'Création d\'animations et de contenus vidéo engageants',

    'about.learnMore': 'En savoir plus sur moi',

    // Portfolio Section
    'portfolio.subtitle': 'Portfolio créatif',
    'portfolio.title1': 'Mes dernières',
    'portfolio.title2': 'réalisations',
    'portfolio.description': 'Découvrez une sélection de mes projets les plus récents, alliant créativité et innovation technique.',
    'portfolio.viewAllBehance': 'Voir tout sur Behance',

    // Process Section
    'process.subtitle': 'Méthodologie éprouvée',
    'process.title': 'Mon Processus Créatif',
    'process.description1': 'Chaque projet suit une méthodologie structurée pour garantir des résultats optimaux et une collaboration fluide.',
    'process.description2': 'De l\'analyse initiale à la livraison finale, chaque étape est pensée pour maximiser la valeur de votre investissement.',

    'process.step1.title': 'Analyse',
    'process.step1.desc': 'Compréhension approfondie de vos besoins et objectifs',
    'process.step2.title': 'Conception',
    'process.step2.desc': 'Création de maquettes et prototypes interactifs',
    'process.step3.title': 'Développement',
    'process.step3.desc': 'Réalisation technique avec les meilleures pratiques',
    'process.step4.title': 'Livraison',
    'process.step4.desc': 'Tests, optimisation et mise en ligne de votre projet',
    'process.step5.title': 'Suivi',
    'process.step5.desc': 'Accompagnement post-livraison et maintenance',
    'process.step6.title': 'Évolution',
    'process.step6.desc': 'Améliorations continues selon vos retours',

    'process.example.title': 'Exemple Concret',
    'process.example.subtitle': 'Exemple Concret',
    'process.example.description': 'Chaque projet suit cette méthodologie pour garantir des résultats optimaux.',

    'process.cta.title': 'Prêt à démarrer ton projet ?',
    'process.cta.description': 'Parlons de ta vision et voyons comment nous pouvons la concrétiser ensemble avec la même attention aux détails.',
    'process.cta.button1': 'Démarrer un projet',
    'process.cta.button2': 'Voir mes réalisations',

    // Fake Chat
    'fakeChat.clientName': 'Client Potentiel',
    'fakeChat.onlineStatus': 'En ligne',
    'fakeChat.message1': 'Salut Theo ! J\'ai vu ton portfolio, c\'est impressionnant 👏',
    'fakeChat.timestamp1': '14:32',
    'fakeChat.message2': 'Merci ! Quel type de projet avez-vous en tête ?',
    'fakeChat.timestamp2': '14:35',
    'fakeChat.message3': 'On aimerait refaire notre site web et notre identité visuelle',
    'fakeChat.timestamp3': '14:37',
    'fakeChat.message4': 'Parfait ! Je serais ravi de discuter de votre projet. Planifions un appel ?',
    'fakeChat.timestamp4': '14:38',
    'fakeChat.message5': 'Excellente idée ! Quand êtes-vous disponible ?',
    'fakeChat.timestamp5': '14:40',
    'fakeChat.message6': 'Je vous envoie mes disponibilités par email',
    'fakeChat.timestamp6': '14:42',
    'fakeChat.message7': 'Parfait, j\'ai hâte de commencer !',
    'fakeChat.timestamp7': '14:45',
    'fakeChat.message8': 'Moi aussi ! À très bientôt',
    'fakeChat.timestamp8': '14:46',
    'fakeChat.attachmentName1': 'Brief_Projet.pdf',
    'fakeChat.attachmentName2': 'Disponibilites.pdf',
    'fakeChat.attachmentName3': 'Devis_Final.pdf',
    'fakeChat.attachmentLabel': 'Fichier joint',
    'fakeChat.downloadButton': 'Télécharger',

    // Services Section
    'services.subtitle': 'Solutions complètes',
    'services.title': 'Mes Services',
    'services.description': 'Des services adaptés à vos besoins pour donner vie à vos projets digitaux.',

    'services.brandIdentity.title': 'Identité de Marque',
    'services.brandIdentity.desc': 'Création d\'identités visuelles fortes et mémorables pour votre marque.',
    'services.brandIdentity.feature1': 'Logo et charte graphique',
    'services.brandIdentity.feature2': 'Système visuel cohérent',
    'services.brandIdentity.feature3': 'Guidelines de marque',
    'services.brandIdentity.feature4': 'Déclinaisons supports',

    'services.uiux.title': 'Design UI/UX',
    'services.uiux.desc': 'Conception d\'interfaces utilisateur intuitives et d\'expériences optimales.',
    'services.uiux.feature1': 'Recherche utilisateur',
    'services.uiux.feature2': 'Wireframes et prototypes',
    'services.uiux.feature3': 'Design d\'interface',
    'services.uiux.feature4': 'Tests utilisateur',

    'services.webDev.title': 'Développement Web',
    'services.webDev.desc': 'Création de sites web modernes, rapides et optimisés pour tous les appareils.',
    'services.webDev.feature1': 'Sites web responsives',
    'services.webDev.feature2': 'Applications web',
    'services.webDev.feature3': 'E-commerce',
    'services.webDev.feature4': 'Optimisation SEO',

    'services.mobile.title': 'Applications Mobiles',
    'services.mobile.desc': 'Développement d\'applications mobiles natives et cross-platform.',
    'services.mobile.feature1': 'Apps iOS et Android',
    'services.mobile.feature2': 'Interface intuitive',
    'services.mobile.feature3': 'Performance optimisée',
    'services.mobile.feature4': 'Intégrations API',

    'services.creative.title': 'Direction Créative',
    'services.creative.desc': 'Accompagnement créatif global pour vos projets et campagnes.',
    'services.creative.feature1': 'Stratégie créative',
    'services.creative.feature2': 'Concept et storytelling',
    'services.creative.feature3': 'Direction artistique',
    'services.creative.feature4': 'Production créative',

    'services.motion.title': 'Motion Design',
    'services.motion.desc': 'Création d\'animations et de contenus vidéo pour captiver votre audience.',
    'services.motion.feature1': 'Animations 2D/3D',
    'services.motion.feature2': 'Vidéos explicatives',
    'services.motion.feature3': 'Motion graphics',
    'services.motion.feature4': 'Post-production',

    'services.startProject': 'Démarrer un projet',

    // Testimonials Section
    'testimonials.subtitle': 'Ce que disent mes clients',
    'testimonials.title': 'Témoignages',
    'testimonials.description': 'La satisfaction client est au cœur de mon travail.',
    'testimonials.trustedBy': 'Ils me font confiance',
    'testimonials.trustedByDesc': 'Plus de 200 clients satisfaits à travers le monde',

    // Individual testimonials
    'testimonial1.content': 'Theo a su comprendre parfaitement notre vision et l\'a transformée en une identité visuelle exceptionnelle. Son professionnalisme et sa créativité ont dépassé nos attentes.',
    'testimonial1.project': 'Refonte identité visuelle',
    'testimonial1.date': 'Mars 2024',
    'testimonial1.name': 'Marie Dubois',
    'testimonial1.role': 'Directrice Marketing',
    'testimonial1.company': 'TechStart SA',

    'testimonial2.content': 'Un travail remarquable sur notre site e-commerce. L\'interface est intuitive et les performances excellentes. Je recommande vivement !',
    'testimonial2.project': 'Site e-commerce',
    'testimonial2.date': 'Février 2024',
    'testimonial2.name': 'Pierre Martin',
    'testimonial2.role': 'CEO',
    'testimonial2.company': 'Fashion Store',

    'testimonial3.content': 'Theo a créé une application mobile qui a révolutionné notre façon de travailler. Son expertise technique est impressionnante.',
    'testimonial3.project': 'Application mobile',
    'testimonial3.date': 'Janvier 2024',
    'testimonial3.name': 'Sophie Laurent',
    'testimonial3.role': 'Product Manager',
    'testimonial3.company': 'InnoTech',

    'testimonial4.content': 'Collaboration exceptionnelle ! Theo a su allier créativité et fonctionnalité pour notre plateforme web. Résultat au-delà de nos espérances.',
    'testimonial4.project': 'Plateforme web',
    'testimonial4.date': 'Décembre 2023',
    'testimonial4.name': 'Lucas Moreau',
    'testimonial4.role': 'Fondateur',
    'testimonial4.company': 'StartupLab',

    'testimonial5.content': 'Design UI/UX exceptionnel pour notre application. L\'expérience utilisateur est fluide et engageante. Merci Theo !',
    'testimonial5.project': 'Design UI/UX',
    'testimonial5.date': 'Novembre 2023',
    'testimonial5.name': 'Emma Rousseau',
    'testimonial5.role': 'UX Lead',
    'testimonial5.company': 'DigitalCorp',

    'testimonial6.content': 'Theo a transformé notre vision en réalité avec un site web moderne et performant. Son attention aux détails est remarquable.',
    'testimonial6.project': 'Site vitrine',
    'testimonial6.date': 'Octobre 2023',
    'testimonial6.name': 'Thomas Leroy',
    'testimonial6.role': 'Directeur',
    'testimonial6.company': 'Creative Agency',

    'testimonial7.content': 'Excellent travail sur notre identité de marque. Theo a su capturer l\'essence de notre entreprise dans un design élégant et moderne.',
    'testimonial7.project': 'Identité de marque',
    'testimonial7.date': 'Septembre 2023',
    'testimonial7.name': 'Julie Bernard',
    'testimonial7.role': 'Brand Manager',
    'testimonial7.company': 'LuxuryBrand',

    'testimonials.googleReviewTitle': 'Avis Google',
    'testimonials.googleReviewDescription': 'Découvrez ce que mes clients disent de mon travail',
    'testimonials.googleReviewButton': 'Voir les avis',
    'testimonials.googleReviewFooter': 'Note moyenne : 4.9/5 basée sur 47 avis',

    // Contact Section
    'contact.subtitle': 'Parlons de votre projet',
    'contact.title1': 'On discute',
    'contact.title2': 'de ton projet ?',
    'contact.description': 'Prêt à donner vie à vos idées ? Contactez-moi pour discuter de votre projet.',
    'contact.getInTouch': 'Restons en contact',
    'contact.getInTouchDesc': 'N\'hésitez pas à me contacter pour discuter de vos projets',

    'contact.email': 'Email',
    'contact.emailDesc': 'Réponse sous 24h garantie',
    'contact.location': 'Localisation',
    'contact.locationDesc': 'Basé dans la région lémanique',
    'contact.followMe': 'Suivez-moi',

    'contact.sendMessage': 'Envoyer un message',
    'contact.name': 'Nom',
    'contact.namePlaceholder': 'Votre nom complet',
    'contact.emailPlaceholder': 'votre@email.com',
    'contact.subject': 'Sujet',
    'contact.subjectPlaceholder': 'Sujet de votre message',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Décrivez votre projet...',
    'contact.sendBtn': 'Envoyer le message',
    'contact.formNote': 'Le formulaire ouvrira votre client email par défaut',
    'contact.directEmail': 'Vous pouvez aussi m\'écrire directement à hello@theoblondel.ch',

    // Footer
    'footer.description': 'Médiamaticien passionné par l\'innovation digitale et la création d\'expériences utilisateur exceptionnelles.',
    'footer.quickLinks': 'Liens rapides',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Identité de marque',
    'footer.uiuxDesign': 'Design UI/UX',
    'footer.webDevelopment': 'Développement web',
    'footer.motionGraphics': 'Motion graphics',
    'footer.madeWith': 'Fait avec ❤️ en France',
    'footer.inSwitzerland': 'Basé en Suisse',
    'footer.allRights': 'Tous droits réservés',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.letsTalk': 'Let\'s Talk',

    // Hero Section
    'hero.subtitle': 'Media Designer',
    'hero.greeting': 'Hey, I\'m Theo',
    'hero.title1': 'Creative',
    'hero.title2': 'versatile solutions',
    'hero.title3': '',
    'hero.description': 'Passionate about digital creation, I transform your ideas into memorable digital experiences. From concept to realization, I support you in all your creative projects.',
    'hero.contactMe': 'Contact Me',
    'hero.watchDemo': 'Watch Demo',
    'hero.yearsExperience': 'Years Experience',
    'hero.projectsDelivered': 'Projects Delivered',
    'hero.clientSatisfaction': 'Client Satisfaction',
    'hero.clientsWorldwide': 'Clients Worldwide',

    // Hero Services
    'hero.service1.title': 'UI/UX Design',
    'hero.service1.desc': 'Intuitive interfaces and optimal user experiences',
    'hero.service2.title': 'Web Development',
    'hero.service2.desc': 'Modern websites and high-performance applications',
    'hero.service3.title': 'Visual Identity',
    'hero.service3.desc': 'Creating strong and memorable brands',
    'hero.service4.title': 'Motion Design',
    'hero.service4.desc': 'Captivating animations and videos',

    // About Section
    'about.subtitle': 'Passionate Creative',
    'about.title1': 'My Journey',
    'about.title2': 'What I Do',
    'about.whatAmIFor': 'What I Do',
    'about.description1': 'Media designer with over 5 years of experience in design and web development. I combine creativity and technical expertise to create innovative digital solutions.',
    'about.description2': 'My approach is based on listening, collaboration and attention to detail to transform your ideas into digital reality.',

    // About Skills
    'about.skill1.title': 'UI/UX Design',
    'about.skill1.desc': 'Creating intuitive user interfaces and optimal experiences',
    'about.skill2.title': 'Frontend Development',
    'about.skill2.desc': 'Developing modern and responsive web applications',
    'about.skill3.title': 'Visual Identity',
    'about.skill3.desc': 'Designing logos, brand guidelines and visual systems',
    'about.skill4.title': 'Motion Graphics',
    'about.skill4.desc': 'Creating animations and engaging video content',

    'about.learnMore': 'Learn more about me',

    // Portfolio Section
    'portfolio.subtitle': 'Creative Portfolio',
    'portfolio.title1': 'My Latest',
    'portfolio.title2': 'Work',
    'portfolio.description': 'Discover a selection of my most recent projects, combining creativity and technical innovation.',
    'portfolio.viewAllBehance': 'View all on Behance',

    // Process Section
    'process.subtitle': 'Proven Methodology',
    'process.title': 'My Creative Process',
    'process.description1': 'Each project follows a structured methodology to ensure optimal results and smooth collaboration.',
    'process.description2': 'From initial analysis to final delivery, each step is designed to maximize the value of your investment.',

    'process.step1.title': 'Analysis',
    'process.step1.desc': 'Deep understanding of your needs and objectives',
    'process.step2.title': 'Design',
    'process.step2.desc': 'Creating mockups and interactive prototypes',
    'process.step3.title': 'Development',
    'process.step3.desc': 'Technical implementation with best practices',
    'process.step4.title': 'Delivery',
    'process.step4.desc': 'Testing, optimization and launch of your project',
    'process.step5.title': 'Follow-up',
    'process.step5.desc': 'Post-delivery support and maintenance',
    'process.step6.title': 'Evolution',
    'process.step6.desc': 'Continuous improvements based on your feedback',

    'process.example.title': 'Concrete Example',
    'process.example.subtitle': 'Concrete Example',
    'process.example.description': 'Each project follows this methodology to ensure optimal results.',

    'process.cta.title': 'Ready to start your project?',
    'process.cta.description': 'Let\'s talk about your vision and see how we can bring it to life together with the same attention to detail.',
    'process.cta.button1': 'Start a project',
    'process.cta.button2': 'View my work',

    // Fake Chat
    'fakeChat.clientName': 'Potential Client',
    'fakeChat.onlineStatus': 'Online',
    'fakeChat.message1': 'Hi Theo! I saw your portfolio, it\'s impressive 👏',
    'fakeChat.timestamp1': '2:32 PM',
    'fakeChat.message2': 'Thank you! What type of project do you have in mind?',
    'fakeChat.timestamp2': '2:35 PM',
    'fakeChat.message3': 'We\'d like to redesign our website and visual identity',
    'fakeChat.timestamp3': '2:37 PM',
    'fakeChat.message4': 'Perfect! I\'d love to discuss your project. Shall we schedule a call?',
    'fakeChat.timestamp4': '2:38 PM',
    'fakeChat.message5': 'Excellent idea! When are you available?',
    'fakeChat.timestamp5': '2:40 PM',
    'fakeChat.message6': 'I\'ll send you my availability by email',
    'fakeChat.timestamp6': '2:42 PM',
    'fakeChat.message7': 'Perfect, I can\'t wait to get started!',
    'fakeChat.timestamp7': '2:45 PM',
    'fakeChat.message8': 'Me too! See you soon',
    'fakeChat.timestamp8': '2:46 PM',
    'fakeChat.attachmentName1': 'Project_Brief.pdf',
    'fakeChat.attachmentName2': 'Availability.pdf',
    'fakeChat.attachmentName3': 'Final_Quote.pdf',
    'fakeChat.attachmentLabel': 'Attached file',
    'fakeChat.downloadButton': 'Download',

    // Services Section
    'services.subtitle': 'Complete Solutions',
    'services.title': 'My Services',
    'services.description': 'Services adapted to your needs to bring your digital projects to life.',

    'services.brandIdentity.title': 'Brand Identity',
    'services.brandIdentity.desc': 'Creating strong and memorable visual identities for your brand.',
    'services.brandIdentity.feature1': 'Logo and brand guidelines',
    'services.brandIdentity.feature2': 'Coherent visual system',
    'services.brandIdentity.feature3': 'Brand guidelines',
    'services.brandIdentity.feature4': 'Support variations',

    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Designing intuitive user interfaces and optimal experiences.',
    'services.uiux.feature1': 'User research',
    'services.uiux.feature2': 'Wireframes and prototypes',
    'services.uiux.feature3': 'Interface design',
    'services.uiux.feature4': 'User testing',

    'services.webDev.title': 'Web Development',
    'services.webDev.desc': 'Creating modern, fast websites optimized for all devices.',
    'services.webDev.feature1': 'Responsive websites',
    'services.webDev.feature2': 'Web applications',
    'services.webDev.feature3': 'E-commerce',
    'services.webDev.feature4': 'SEO optimization',

    'services.mobile.title': 'Mobile Applications',
    'services.mobile.desc': 'Developing native and cross-platform mobile applications.',
    'services.mobile.feature1': 'iOS & Android apps',
    'services.mobile.feature2': 'Intuitive interface',
    'services.mobile.feature3': 'Optimized performance',
    'services.mobile.feature4': 'API integrations',

    'services.creative.title': 'Creative Direction',
    'services.creative.desc': 'Global creative support for your projects and campaigns.',
    'services.creative.feature1': 'Creative strategy',
    'services.creative.feature2': 'Concept and storytelling',
    'services.creative.feature3': 'Art direction',
    'services.creative.feature4': 'Creative production',

    'services.motion.title': 'Motion Design',
    'services.motion.desc': 'Creating animations and video content to captivate your audience.',
    'services.motion.feature1': '2D/3D animations',
    'services.motion.feature2': 'Explainer videos',
    'services.motion.feature3': 'Motion graphics',
    'services.motion.feature4': 'Post-production',

    'services.startProject': 'Start a project',

    // Testimonials Section
    'testimonials.subtitle': 'What my clients say',
    'testimonials.title': 'Testimonials',
    'testimonials.description': 'Client satisfaction is at the heart of my work.',
    'testimonials.trustedBy': 'They trust me',
    'testimonials.trustedByDesc': 'Over 200 satisfied clients worldwide',

    // Individual testimonials
    'testimonial1.content': 'Theo perfectly understood our vision and transformed it into an exceptional visual identity. His professionalism and creativity exceeded our expectations.',
    'testimonial1.project': 'Visual identity redesign',
    'testimonial1.date': 'March 2024',
    'testimonial1.name': 'Marie Dubois',
    'testimonial1.role': 'Marketing Director',
    'testimonial1.company': 'TechStart SA',

    'testimonial2.content': 'Remarkable work on our e-commerce site. The interface is intuitive and the performance excellent. I highly recommend!',
    'testimonial2.project': 'E-commerce website',
    'testimonial2.date': 'February 2024',
    'testimonial2.name': 'Pierre Martin',
    'testimonial2.role': 'CEO',
    'testimonial2.company': 'Fashion Store',

    'testimonial3.content': 'Theo created a mobile application that revolutionized our way of working. His technical expertise is impressive.',
    'testimonial3.project': 'Mobile application',
    'testimonial3.date': 'January 2024',
    'testimonial3.name': 'Sophie Laurent',
    'testimonial3.role': 'Product Manager',
    'testimonial3.company': 'InnoTech',

    'testimonial4.content': 'Exceptional collaboration! Theo managed to combine creativity and functionality for our web platform. Result beyond our expectations.',
    'testimonial4.project': 'Web platform',
    'testimonial4.date': 'December 2023',
    'testimonial4.name': 'Lucas Moreau',
    'testimonial4.role': 'Founder',
    'testimonial4.company': 'StartupLab',

    'testimonial5.content': 'Exceptional UI/UX design for our application. The user experience is smooth and engaging. Thank you Theo!',
    'testimonial5.project': 'UI/UX Design',
    'testimonial5.date': 'November 2023',
    'testimonial5.name': 'Emma Rousseau',
    'testimonial5.role': 'UX Lead',
    'testimonial5.company': 'DigitalCorp',

    'testimonial6.content': 'Theo transformed our vision into reality with a modern and high-performance website. His attention to detail is remarkable.',
    'testimonial6.project': 'Showcase website',
    'testimonial6.date': 'October 2023',
    'testimonial6.name': 'Thomas Leroy',
    'testimonial6.role': 'Director',
    'testimonial6.company': 'Creative Agency',

    'testimonial7.content': 'Excellent work on our brand identity. Theo captured the essence of our company in an elegant and modern design.',
    'testimonial7.project': 'Brand identity',
    'testimonial7.date': 'September 2023',
    'testimonial7.name': 'Julie Bernard',
    'testimonial7.role': 'Brand Manager',
    'testimonial7.company': 'LuxuryBrand',

    'testimonials.googleReviewTitle': 'Google Reviews',
    'testimonials.googleReviewDescription': 'Discover what my clients say about my work',
    'testimonials.googleReviewButton': 'View reviews',
    'testimonials.googleReviewFooter': 'Average rating: 4.9/5 based on 47 reviews',

    // Contact Section
    'contact.subtitle': 'Let\'s talk about your project',
    'contact.title1': 'Let\'s discuss',
    'contact.title2': 'your project?',
    'contact.description': 'Ready to bring your ideas to life? Contact me to discuss your project.',
    'contact.getInTouch': 'Stay in touch',
    'contact.getInTouchDesc': 'Feel free to contact me to discuss your projects',

    'contact.email': 'Email',
    'contact.emailDesc': '24h response guaranteed',
    'contact.location': 'Location',
    'contact.locationDesc': 'Based in the Lake Geneva region',
    'contact.followMe': 'Follow me',

    'contact.sendMessage': 'Send a message',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your full name',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'Subject of your message',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Describe your project...',
    'contact.sendBtn': 'Send message',
    'contact.formNote': 'The form will open your default email client',
    'contact.directEmail': 'You can also write to me directly at hello@theoblondel.ch',

    // Footer
    'footer.description': 'Media designer passionate about digital innovation and creating exceptional user experiences.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Brand Identity',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Web Development',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Made with ❤️ in France',
    'footer.inSwitzerland': 'Based in Switzerland',
    'footer.allRights': 'All rights reserved',
  }
};

// Create Context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider Component
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('fr');
  const [theme, setTheme] = useState('light');

  const t = (key: string): string => {
    const langTranslations = translations[language as keyof typeof translations];
    if (langTranslations && langTranslations[key as keyof typeof langTranslations]) {
      return langTranslations[key as keyof typeof langTranslations];
    }
    return key; // Return the key if translation is not found
  };

  const value: AppContextType = {
    language,
    setLanguage,
    theme,
    setTheme,
    t,
  };

  return (
    <AppContext.Provider value={value}>
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

export default AppContext;