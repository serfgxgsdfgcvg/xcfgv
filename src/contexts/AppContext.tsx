import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types
interface AppContextType {
  language: string;
  setLanguage: (lang: string) => void;
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
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
    'nav.work': 'Projets',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.letsTalk': 'Parlons-en',

    // Hero Section
    'hero.subtitle': 'Médiamaticien',
    'hero.greeting': 'Yo, moi c\'est Theo Blondel.',
    'hero.title1': 'Solutions',
    'hero.title2': 'créatives',
    'hero.title3': 'polyvalentes',
    'hero.description': 'Je suis médiamaticien en Suisse, et je transforme tes idées en projets visuels propres, impactants, et vraiment stylés.',
    'hero.contactMe': 'On en parle ?',
    'hero.watchDemo': 'Voir la démo',
    'hero.yearsExperience': 'Années d\'expérience',
    'hero.projectsDelivered': 'Projets livrés',
    'hero.clientSatisfaction': 'Satisfaction client',
    'hero.clientsWorldwide': 'Clients dans le monde',

    // Hero Services
    'hero.service1.title': 'Identité de Marque',
    'hero.service1.desc': 'Logos et identité visuelle qui racontent ton histoire',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Interfaces qui fonctionnent et qui en jettent',
    'hero.service3.title': 'Design Print',
    'hero.service3.desc': 'Des supports qu\'on peut toucher et ressentir',
    'hero.service4.title': 'Motion Design',
    'hero.service4.desc': 'Du contenu qui bouge et qui captive',

    // About Section
    'about.subtitle': 'Mon Parcours',
    'about.title1': 'Mon chemin',
    'about.title2': 'vers la création',
    'about.description1': 'J\'ai commencé comme beaucoup : avec des montages YouTube à 10 ans, la tête dans les pixels et les effets sonores. Minecraft, Fortnite, Call of... J\'ai passé des heures à tester, à bidouiller, à chercher ce qui marche.',
    'about.description2': 'Puis le dessin est arrivé. Ensuite, la médiamatique. Et là, j\'ai pigé : je veux faire ça. Créer. Concevoir. Donner vie à des idées visuelles qui parlent aux gens.',

    // About Skills
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Maîtrise complète de la suite créative',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'Montage vidéo et étalonnage professionnel',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': 'Modélisation 3D et animation',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'Design UI/UX et prototypage',

    'about.learnMore': 'En savoir plus sur moi',

    // Portfolio Section
    'portfolio.subtitle': 'Mes Projets',
    'portfolio.title1': 'Quelques trucs',
    'portfolio.title2': 'que j\'ai kiffé faire',
    'portfolio.description': 'Une sélection de projets qui montrent mon approche et mon style.',
    'portfolio.viewAllBehance': 'Voir tout sur Behance',

    // Process Section
    'process.subtitle': 'Mon Processus',
    'process.title': 'Mon Processus Créatif',
    'process.description1': 'Une approche simple, structurée et sur-mesure',
    'process.description2': 'Chaque projet est unique, mais ma méthode reste solide. Voici comment je transforme tes idées en résultats concrets.',

    'process.step1.title': 'Brief & Écoute',
    'process.step1.desc': 'Comprendre tes besoins, tes objectifs et l\'univers de ta marque.',
    'process.step2.title': 'Recherche & Moodboard',
    'process.step2.desc': 'Explorer les inspirations, les tendances et l\'environnement visuel adapté à ton projet.',
    'process.step3.title': 'Croquis & Concepts',
    'process.step3.desc': 'Esquisser les premières idées, réfléchir aux formes, aux messages, aux couleurs qui te correspondent.',
    'process.step4.title': 'Design',
    'process.step4.desc': 'Création du rendu final, avec typographies, visuels et composition professionnelle qui reflètent ton identité.',
    'process.step5.title': 'Révisions',
    'process.step5.desc': 'Tes retours sont essentiels. On ajuste ensemble jusqu\'à valider ce qui te ressemble parfaitement.',
    'process.step6.title': 'Livraison & Accompagnement',
    'process.step6.desc': 'Remise des fichiers optimisés, prêts à l\'emploi (web, print, réseaux). Je reste dispo pour toi !',

    'process.example.title': 'Exemple Concret',
    'process.example.subtitle': 'Projet "NOIRBRUME"',
    'process.example.description': 'Découvre mon processus en action à travers une conversation réaliste avec un client fictif. De la demande initiale à la livraison finale.',

    // Fake Chat
    'fakeChat.clientName': 'Client - NOIRBRUME',
    'fakeChat.onlineStatus': 'En ligne',
    'fakeChat.message1': 'Salut Théo ! J\'ai besoin d\'un logo pour ma marque "NOIRBRUME". Un style streetwear, sobre et poétique.',
    'fakeChat.timestamp1': '14:32',
    'fakeChat.message2': 'Trop stylé comme nom ! Je vois déjà un logo typographique minimal avec une ambiance brumeuse. Je t\'envoie une première idée ce soir !',
    'fakeChat.timestamp2': '14:35',
    'fakeChat.message3': 'Franchement j\'adore. Est-ce qu\'on pourrait essayer une version un peu plus marquée, avec un symbole discret ?',
    'fakeChat.timestamp3': '14:52',
    'fakeChat.message4': 'Carrément. Je t\'envoie une V2 demain avec une piste d\'icône inspirée par la brume.',
    'fakeChat.timestamp4': '15:01',
    'fakeChat.message5': 'Reçu ! J\'ai aussi joint un moodboard que j\'avais fait au début.',
    'fakeChat.timestamp5': '15:04',
    'fakeChat.attachmentName1': 'moodboard_noirbrume.pdf',
    'fakeChat.attachmentLabel': 'Télécharger',
    'fakeChat.downloadButton': 'Télécharger',
    'fakeChat.message6': 'Hyper utile, merci. Je vais bosser une version qui colle pile à ton univers.',
    'fakeChat.timestamp6': '15:08',
    'fakeChat.message7': 'Voilà les trois variantes finales, prêtes à être utilisées.',
    'fakeChat.timestamp7': '15:52',
    'fakeChat.attachmentName2': 'logo_NOIRBRUME_final.zip',
    'fakeChat.message8': 'Merci Théo, c\'est pile ce que j\'avais en tête. C\'est propre, minimal et ça parle. Bravo 👏',
    'fakeChat.timestamp8': '16:01',
    'fakeChat.typingIndicator': 'En train d\'écrire...',

    // Services Section
    'services.subtitle': 'Services',
    'services.title': 'Ce que je peux faire pour toi',
    'services.description': 'Des solutions créatives complètes adaptées à tes besoins et tes ambitions.',

    'services.brandIdentity.title': 'Identité de Marque',
    'services.brandIdentity.desc': 'Besoin d\'un logo qui claque et d\'une image qui raconte qui tu es ? Je t\'aide à construire une vraie identité — pas juste un logo vite fait.',
    'services.brandIdentity.feature1': 'Logo (pro, pas sur Canva)',
    'services.brandIdentity.feature2': 'Charte graphique claire',
    'services.brandIdentity.feature3': 'Identité visuelle cohérente',
    'services.brandIdentity.feature4': 'Positionnement de marque qui tient la route',

    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Un bon design, c\'est pas juste joli. Faut que ça fonctionne. Je crée des interfaces simples, fluides et agréables à utiliser (même pour tata Josiane).',
    'services.uiux.feature1': 'Recherche utilisateur',
    'services.uiux.feature2': 'Wireframes propres',
    'services.uiux.feature3': 'Maquettes pixel-perfect',
    'services.uiux.feature4': 'Tests pour voir si tout tient',

    'services.webDev.title': 'Développement Web',
    'services.webDev.desc': 'Sites web modernes et responsives qui fonctionnent parfaitement sur tous les appareils.',
    'services.webDev.feature1': 'Design responsive',
    'services.webDev.feature2': 'Optimisation SEO',
    'services.webDev.feature3': 'Performance rapide',
    'services.webDev.feature4': 'Maintenance facile',

    'services.mobile.title': 'Design Mobile',
    'services.mobile.desc': 'Ton app mérite mieux qu\'un template par défaut. Je te fais une interface claire, intuitive, et agréable à utiliser dans le métro.',
    'services.mobile.feature1': 'Design iOS & Android',
    'services.mobile.feature2': 'Parcours utilisateur bien pensé',
    'services.mobile.feature3': 'Onboarding fluide',
    'services.mobile.feature4': 'Icônes, menus, et tous les petits détails qui font la diff',

    'services.creative.title': 'Design Print',
    'services.creative.desc': 'Des trucs qu\'on peut toucher. Flyers, cartes, affiches — tout ce qui se lit avec les yeux et les mains.',
    'services.creative.feature1': 'Mise en page soignée',
    'services.creative.feature2': 'Bon choix de typo (pas Comic Sans, t\'inquiète)',
    'services.creative.feature3': 'Harmonies de couleurs au petit oignon',
    'services.creative.feature4': 'Fichiers prêts pour l\'imprimeur',

    'services.motion.title': 'Motion Design & Vidéo',
    'services.motion.desc': 'Du contenu qui bouge bien. Je monte, j\'anime, je donne du rythme à ta com\' visuelle.',
    'services.motion.feature1': 'Animation de logos stylés',
    'services.motion.feature2': 'Montages vidéos dynamiques',
    'services.motion.feature3': 'Teasers, trailers, reels, stories...',
    'services.motion.feature4': 'Micro-animations et effets smooth',

    'services.startProject': 'Démarrer un projet',

    // Testimonials Section
    'testimonials.subtitle': 'Témoignages',
    'testimonials.title': 'Ce que disent les clients',
    'testimonials.description': 'Les retours de personnes qui m\'ont fait confiance pour leurs projets.',
    'testimonials.trustedBy': 'Ils me font confiance',
    'testimonials.trustedByDesc': 'Entreprises et entrepreneurs qui ont choisi mes services',

    // Individual testimonials
    'testimonial1.content': 'L\'approche créative et l\'expertise technique de Théo nous ont aidés à lancer une campagne digitale réussie. Les résultats parlent d\'eux-mêmes – 300 % d\'augmentation de l\'engagement !',
    'testimonial1.project': 'Campagne digitale & Motion Graphics',
    'testimonial1.date': 'Octobre 2023',
    'testimonial1.name': 'Emily Rodriguez',
    'testimonial1.role': 'Marketing Director',
    'testimonial1.company': 'InnovateLab',

    'testimonial2.content': 'Théo a su capter l\'essence de ma marque dès le départ. Communication fluide, délais respectés, et résultat pro. Je recommande vivement.',
    'testimonial2.project': 'Création de logo',
    'testimonial2.date': 'Avril 2025',
    'testimonial2.name': 'Client anonyme',
    'testimonial2.role': '',
    'testimonial2.company': '',

    'testimonial3.content': 'Le design de ma carte de visite est exactement ce que je cherchais : minimaliste, élégant et percutant. Merci pour ton écoute et ton professionnalisme !',
    'testimonial3.project': 'Identité visuelle & carte de visite',
    'testimonial3.date': 'Avril 2025',
    'testimonial3.name': 'Meier Nils',
    'testimonial3.role': 'Entrepreneur',
    'testimonial3.company': '',

    'testimonial4.content': 'La collaboration avec Théo Blondel a été excellente. Sa campagne d\'affiches a dépassé toutes nos attentes — un travail créatif, moderne, précis jusque dans les détails. Mention spéciale pour son sens des couleurs, des typos et de l\'impact visuel.',
    'testimonial4.project': 'Campagne print & direction artistique',
    'testimonial4.date': 'Avril 2025',
    'testimonial4.name': 'Lukas Steinmann',
    'testimonial4.role': 'Directeur artistique',
    'testimonial4.company': '',

    'testimonial5.content': 'Toujours un plaisir de bosser avec Théo. Réactif, créatif et fiable. Chaque projet avance sans stress.',
    'testimonial5.project': 'Identité de marque & print',
    'testimonial5.date': 'Février 2025',
    'testimonial5.name': 'Azdine Tafssout',
    'testimonial5.role': 'Chef de projet',
    'testimonial5.company': '',

    'testimonial6.content': 'Super collaboration. Le projet a été fluide du début à la fin. Résultat propre, livré dans les temps, et fidèle à notre vision.',
    'testimonial6.project': 'Design packaging & supports de com\'',
    'testimonial6.date': 'Avril 2025',
    'testimonial6.name': 'Noa Vellin',
    'testimonial6.role': 'Responsable produit',
    'testimonial6.company': '',

    'testimonial7.content': 'Théo a géré notre rebranding de A à Z. Il a tout restructuré avec clarté, goût et une vraie sensibilité. On a su dès les premiers échanges qu\'on allait bosser avec lui.',
    'testimonial7.project': 'Refonte d\'identité visuelle',
    'testimonial7.date': 'Mars 2025',
    'testimonial7.name': 'Julia Renard',
    'testimonial7.role': 'Fondatrice',
    'testimonial7.company': 'Atelier Kura',

    'testimonials.googleReviewTitle': 'Tu as travaillé avec moi ?',
    'testimonials.googleReviewDescription': 'Ton avis compte énormément ! Partage ton expérience sur Google Reviews et aide d\'autres clients à découvrir la qualité de mes services créatifs.',
    'testimonials.googleReviewButton': 'Laisser un avis sur Google',
    'testimonials.googleReviewFooter': 'Ton avis nous aide à grandir',

    // Contact Section
    'contact.subtitle': 'Contact',
    'contact.title1': 'On discute',
    'contact.title2': 'de ton projet ?',
    'contact.description': 'T\'as une idée ? T\'as besoin d\'un coup de main visuel ? Ou juste envie de savoir si ça peut coller entre nous ?',
    'contact.getInTouch': 'Restons en Contact',
    'contact.getInTouchDesc': 'Prêt à démarrer ton projet ? Parlons de ta vision et voyons comment nous pouvons la concrétiser ensemble.',

    'contact.email': 'Email',
    'contact.emailDesc': 'Écris-moi, je réponds vite',
    'contact.location': 'Localisation',
    'contact.locationDesc': 'Basé dans la région lémanique',
    'contact.followMe': 'Suis-moi',

    'contact.sendMessage': 'Envoyer un Message',
    'contact.name': 'Nom',
    'contact.namePlaceholder': 'Ton nom',
    'contact.emailPlaceholder': 'ton.email@exemple.com',
    'contact.subject': 'Sujet',
    'contact.subjectPlaceholder': 'C\'est quoi ton projet ?',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Parle-moi de ton projet...',
    'contact.sendBtn': 'Envoyer le message',

    // Footer
    'footer.description': 'Médiamaticien basé en Suisse, spécialisé en identité de marque et design d\'interface.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Identité de Marque',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Développement Web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Fait avec',
    'footer.inSwitzerland': 'en Suisse',
    'footer.allRights': '© 2024 Theo Blondel. Tous droits réservés.',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.work': 'Projects',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.letsTalk': 'Let\'s Talk',

    // Hero Section
    'hero.subtitle': 'Media Designer',
    'hero.greeting': 'Hey, I\'m Theo Blondel.',
    'hero.title1': 'Creative',
    'hero.title2': 'versatile',
    'hero.title3': 'solutions',
    'hero.description': 'I\'m a media designer in Switzerland, and I transform your ideas into clean, impactful, and truly stylish visual projects.',
    'hero.contactMe': 'Let\'s talk?',
    'hero.watchDemo': 'Watch Demo',
    'hero.yearsExperience': 'Years Experience',
    'hero.projectsDelivered': 'Projects Delivered',
    'hero.clientSatisfaction': 'Client Satisfaction',
    'hero.clientsWorldwide': 'Clients Worldwide',

    // Hero Services
    'hero.service1.title': 'Brand Identity',
    'hero.service1.desc': 'Logos and visual identity that tell your story',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Interfaces that work and look amazing',
    'hero.service3.title': 'Print Design',
    'hero.service3.desc': 'Materials you can touch and feel',
    'hero.service4.title': 'Motion Design',
    'hero.service4.desc': 'Content that moves and captivates',

    // About Section
    'about.subtitle': 'My Journey',
    'about.title1': 'My path',
    'about.title2': 'to creation',
    'about.description1': 'I started like many: with YouTube edits at 10, head in pixels and sound effects. Minecraft, Fortnite, Call of... I spent hours testing, tinkering, looking for what works.',
    'about.description2': 'Then drawing came. Then media design. And there, I got it: I want to do this. Create. Design. Bring visual ideas to life that speak to people.',

    // About Skills
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Complete mastery of the creative suite',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'Professional video editing and color grading',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': '3D modeling and animation',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'UI/UX design and prototyping',

    'about.learnMore': 'Learn more about me',

    // Portfolio Section
    'portfolio.subtitle': 'My Projects',
    'portfolio.title1': 'Some stuff',
    'portfolio.title2': 'I loved making',
    'portfolio.description': 'A selection of projects that show my approach and style.',
    'portfolio.viewAllBehance': 'View all on Behance',

    // Process Section
    'process.subtitle': 'My Process',
    'process.title': 'My Creative Process',
    'process.description1': 'A simple, structured and tailor-made approach',
    'process.description2': 'Each project is unique, but my method remains solid. Here\'s how I transform your ideas into concrete results.',

    'process.step1.title': 'Brief & Listen',
    'process.step1.desc': 'Understanding your needs, objectives and brand universe.',
    'process.step2.title': 'Research & Moodboard',
    'process.step2.desc': 'Exploring inspirations, trends and visual environment adapted to your project.',
    'process.step3.title': 'Sketches & Concepts',
    'process.step3.desc': 'Sketching first ideas, thinking about shapes, messages, colors that suit you.',
    'process.step4.title': 'Design',
    'process.step4.desc': 'Creating the final rendering, with typography, visuals and professional composition that reflect your identity.',
    'process.step5.title': 'Revisions',
    'process.step5.desc': 'Your feedback is essential. We adjust together until we validate what perfectly resembles you.',
    'process.step6.title': 'Delivery & Support',
    'process.step6.desc': 'Delivery of optimized files, ready to use (web, print, networks). I remain available for you!',

    'process.example.title': 'Concrete Example',
    'process.example.subtitle': '"NOIRBRUME" Project',
    'process.example.description': 'Discover my process in action through a realistic conversation with a fictional client. From initial request to final delivery.',

    // Fake Chat
    'fakeChat.clientName': 'Client - NOIRBRUME',
    'fakeChat.onlineStatus': 'Online',
    'fakeChat.message1': 'Hi Theo! I need a logo for my "NOIRBRUME" brand. A streetwear style, sober and poetic.',
    'fakeChat.timestamp1': '2:32 PM',
    'fakeChat.message2': 'Such a stylish name! I can already see a minimal typographic logo with a misty atmosphere. I\'ll send you a first idea tonight!',
    'fakeChat.timestamp2': '2:35 PM',
    'fakeChat.message3': 'I really love it. Could we try a version with a bit more emphasis, with a subtle symbol?',
    'fakeChat.timestamp3': '2:52 PM',
    'fakeChat.message4': 'Absolutely. I\'ll send you a V2 tomorrow with an icon concept inspired by mist.',
    'fakeChat.timestamp4': '3:01 PM',
    'fakeChat.message5': 'Got it! I\'ve also attached a moodboard I made at the beginning.',
    'fakeChat.timestamp5': '3:04 PM',
    'fakeChat.attachmentName1': 'moodboard_noirbrume.pdf',
    'fakeChat.attachmentLabel': 'Download',
    'fakeChat.downloadButton': 'Download',
    'fakeChat.message6': 'Super helpful, thanks. I\'ll work on a version that perfectly matches your universe.',
    'fakeChat.timestamp6': '3:08 PM',
    'fakeChat.message7': 'Here are the three final variants, ready to use.',
    'fakeChat.timestamp7': '3:52 PM',
    'fakeChat.attachmentName2': 'logo_NOIRBRUME_final.zip',
    'fakeChat.message8': 'Thank you Theo, it\'s exactly what I had in mind. It\'s clean, minimal and it speaks. Bravo 👏',
    'fakeChat.timestamp8': '4:01 PM',
    'fakeChat.typingIndicator': 'Typing...',

    // Services Section
    'services.subtitle': 'Services',
    'services.title': 'What I can do for you',
    'services.description': 'Complete creative solutions adapted to your needs and ambitions.',

    'services.brandIdentity.title': 'Brand Identity',
    'services.brandIdentity.desc': 'Need a logo that rocks and an image that tells who you are? I help you build a real identity — not just a quick logo.',
    'services.brandIdentity.feature1': 'Professional logo (not on Canva)',
    'services.brandIdentity.feature2': 'Clear brand guidelines',
    'services.brandIdentity.feature3': 'Coherent visual identity',
    'services.brandIdentity.feature4': 'Brand positioning that holds up',

    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Good design isn\'t just pretty. It has to work. I create simple, fluid and pleasant interfaces to use (even for aunt Josiane).',
    'services.uiux.feature1': 'User research',
    'services.uiux.feature2': 'Clean wireframes',
    'services.uiux.feature3': 'Pixel-perfect mockups',
    'services.uiux.feature4': 'Tests to see if everything holds',

    'services.webDev.title': 'Web Development',
    'services.webDev.desc': 'Modern and responsive websites that work perfectly on all devices.',
    'services.webDev.feature1': 'Responsive design',
    'services.webDev.feature2': 'SEO optimization',
    'services.webDev.feature3': 'Fast performance',
    'services.webDev.feature4': 'Easy maintenance',

    'services.mobile.title': 'Mobile Design',
    'services.mobile.desc': 'Your app deserves better than a default template. I make you a clear, intuitive interface, pleasant to use in the subway.',
    'services.mobile.feature1': 'iOS & Android design',
    'services.mobile.feature2': 'Well-thought user journey',
    'services.mobile.feature3': 'Smooth onboarding',
    'services.mobile.feature4': 'Icons, menus, and all the little details that make the difference',

    'services.creative.title': 'Print Design',
    'services.creative.desc': 'Stuff you can touch. Flyers, cards, posters — everything that reads with eyes and hands.',
    'services.creative.feature1': 'Careful layout',
    'services.creative.feature2': 'Good typography choice (not Comic Sans, don\'t worry)',
    'services.creative.feature3': 'Perfect color harmonies',
    'services.creative.feature4': 'Files ready for printer',

    'services.motion.title': 'Motion Design & Video',
    'services.motion.desc': 'Content that moves well. I edit, animate, give rhythm to your visual communication.',
    'services.motion.feature1': 'Stylish logo animations',
    'services.motion.feature2': 'Dynamic video editing',
    'services.motion.feature3': 'Teasers, trailers, reels, stories...',
    'services.motion.feature4': 'Micro-animations and smooth effects',

    'services.startProject': 'Start a project',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonials',
    'testimonials.title': 'What clients say',
    'testimonials.description': 'Feedback from people who trusted me with their projects.',
    'testimonials.trustedBy': 'They trust me',
    'testimonials.trustedByDesc': 'Companies and entrepreneurs who chose my services',

    // Individual testimonials
    'testimonial1.content': 'Theo\'s creative approach and technical expertise helped us launch a successful digital campaign. The results speak for themselves – 300% increase in engagement!',
    'testimonial1.project': 'Digital campaign & Motion Graphics',
    'testimonial1.date': 'October 2023',
    'testimonial1.name': 'Emily Rodriguez',
    'testimonial1.role': 'Marketing Director',
    'testimonial1.company': 'InnovateLab',

    'testimonial2.content': 'Theo captured the essence of my brand from the start. Smooth communication, deadlines met, and professional result. I highly recommend.',
    'testimonial2.project': 'Logo creation',
    'testimonial2.date': 'April 2025',
    'testimonial2.name': 'Anonymous client',
    'testimonial2.role': '',
    'testimonial2.company': '',

    'testimonial3.content': 'The design of my business card is exactly what I was looking for: minimalist, elegant and impactful. Thank you for your listening and professionalism!',
    'testimonial3.project': 'Visual identity & business card',
    'testimonial3.date': 'April 2025',
    'testimonial3.name': 'Meier Nils',
    'testimonial3.role': 'Entrepreneur',
    'testimonial3.company': '',

    'testimonial4.content': 'The collaboration with Theo Blondel was excellent. His poster campaign exceeded all our expectations — creative, modern work, precise down to the details. Special mention for his sense of colors, typography and visual impact.',
    'testimonial4.project': 'Print campaign & art direction',
    'testimonial4.date': 'April 2025',
    'testimonial4.name': 'Lukas Steinmann',
    'testimonial4.role': 'Art Director',
    'testimonial4.company': '',

    'testimonial5.content': 'Always a pleasure to work with Theo. Responsive, creative and reliable. Each project moves forward without stress.',
    'testimonial5.project': 'Brand identity & print',
    'testimonial5.date': 'February 2025',
    'testimonial5.name': 'Azdine Tafssout',
    'testimonial5.role': 'Project Manager',
    'testimonial5.company': '',

    'testimonial6.content': 'Great collaboration. The project was smooth from start to finish. Clean result, delivered on time, and faithful to our vision.',
    'testimonial6.project': 'Packaging design & communication materials',
    'testimonial6.date': 'April 2025',
    'testimonial6.name': 'Noa Vellin',
    'testimonial6.role': 'Product Manager',
    'testimonial6.company': '',

    'testimonial7.content': 'Theo handled our rebranding from A to Z. He restructured everything with clarity, taste and real sensitivity. We knew from the first exchanges that we were going to work with him.',
    'testimonial7.project': 'Visual identity redesign',
    'testimonial7.date': 'March 2025',
    'testimonial7.name': 'Julia Renard',
    'testimonial7.role': 'Founder',
    'testimonial7.company': 'Atelier Kura',

    'testimonials.googleReviewTitle': 'Have you worked with me?',
    'testimonials.googleReviewDescription': 'Your opinion matters enormously! Share your experience on Google Reviews and help other clients discover the quality of my creative services.',
    'testimonials.googleReviewButton': 'Leave a Google review',
    'testimonials.googleReviewFooter': 'Your review helps us grow',

    // Contact Section
    'contact.subtitle': 'Contact',
    'contact.title1': 'Let\'s discuss',
    'contact.title2': 'your project?',
    'contact.description': 'Got an idea? Need visual help? Or just want to know if we could work together?',
    'contact.getInTouch': 'Stay in Touch',
    'contact.getInTouchDesc': 'Ready to start your project? Let\'s talk about your vision and see how we can bring it to life together.',

    'contact.email': 'Email',
    'contact.emailDesc': 'Write to me, I respond quickly',
    'contact.location': 'Location',
    'contact.locationDesc': 'Based in the Lake Geneva region',
    'contact.followMe': 'Follow me',

    'contact.sendMessage': 'Send a Message',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'What\'s your project?',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell me about your project...',
    'contact.sendBtn': 'Send message',

    // Footer
    'footer.description': 'Media designer based in Switzerland, specialized in brand identity and interface design.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Brand Identity',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Web Development',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Made with',
    'footer.inSwitzerland': 'in Switzerland',
    'footer.allRights': '© 2024 Theo Blondel. All rights reserved.',
  },
  es: {
    // Navigation
    'nav.about': 'Acerca de',
    'nav.work': 'Proyectos',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.letsTalk': 'Hablemos',

    // Hero Section
    'hero.subtitle': 'Diseñador de Medios',
    'hero.greeting': 'Hola, soy Theo Blondel.',
    'hero.title1': 'Soluciones',
    'hero.title2': 'creativas versátiles',
    'hero.title3': '',
    'hero.description': 'Soy diseñador de medios en Suiza, y transformo tus ideas en proyectos visuales limpios, impactantes y realmente elegantes.',
    'hero.contactMe': '¿Hablamos?',
    'hero.watchDemo': 'Ver Demo',
    'hero.yearsExperience': 'Años de Experiencia',
    'hero.projectsDelivered': 'Proyectos Entregados',
    'hero.clientSatisfaction': 'Satisfacción del Cliente',
    'hero.clientsWorldwide': 'Clientes en el Mundo',

    // Hero Services
    'hero.service1.title': 'Identidad de Marca',
    'hero.service1.desc': 'Logos e identidad visual que cuentan tu historia',
    'hero.service2.title': 'Diseño UI/UX',
    'hero.service2.desc': 'Interfaces que funcionan y se ven increíbles',
    'hero.service3.title': 'Diseño Impreso',
    'hero.service3.desc': 'Materiales que puedes tocar y sentir',
    'hero.service4.title': 'Motion Design',
    'hero.service4.desc': 'Contenido que se mueve y cautiva',

    // About Section
    'about.subtitle': 'Mi Trayectoria',
    'about.title1': 'Mi camino',
    'about.title2': 'hacia la creación',
    'about.description1': 'Empecé como muchos: con ediciones de YouTube a los 10 años, la cabeza en píxeles y efectos de sonido. Minecraft, Fortnite, Call of... Pasé horas probando, experimentando, buscando lo que funciona.',
    'about.description2': 'Luego llegó el dibujo. Después, el diseño de medios. Y ahí lo entendí: quiero hacer esto. Crear. Diseñar. Dar vida a ideas visuales que hablen a la gente.',

    // About Skills
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Dominio completo de la suite creativa',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'Edición de video profesional y corrección de color',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': 'Modelado 3D y animación',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'Diseño UI/UX y prototipado',

    'about.learnMore': 'Saber más sobre mí',

    // Portfolio Section
    'portfolio.subtitle': 'Mis Proyectos',
    'portfolio.title1': 'Algunas cosas',
    'portfolio.title2': 'que me encantó hacer',
    'portfolio.description': 'Una selección de proyectos que muestran mi enfoque y estilo.',
    'portfolio.viewAllBehance': 'Ver todo en Behance',

    // Process Section
    'process.subtitle': 'Mi Proceso',
    'process.title': 'Mi Proceso Creativo',
    'process.description1': 'Un enfoque simple, estructurado y a medida',
    'process.description2': 'Cada proyecto es único, pero mi método sigue siendo sólido. Así es como transformo tus ideas en resultados concretos.',

    'process.step1.title': 'Brief y Escucha',
    'process.step1.desc': 'Entender tus necesidades, objetivos y universo de marca.',
    'process.step2.title': 'Investigación y Moodboard',
    'process.step2.desc': 'Explorar inspiraciones, tendencias y entorno visual adaptado a tu proyecto.',
    'process.step3.title': 'Bocetos y Conceptos',
    'process.step3.desc': 'Esbozar primeras ideas, pensar en formas, mensajes, colores que te corresponden.',
    'process.step4.title': 'Diseño',
    'process.step4.desc': 'Creación del renderizado final, con tipografías, visuales y composición profesional que reflejan tu identidad.',
    'process.step5.title': 'Revisiones',
    'process.step5.desc': 'Tus comentarios son esenciales. Ajustamos juntos hasta validar lo que te representa perfectamente.',
    'process.step6.title': 'Entrega y Acompañamiento',
    'process.step6.desc': 'Entrega de archivos optimizados, listos para usar (web, impresión, redes). ¡Sigo disponible para ti!',

    'process.example.title': 'Ejemplo Concreto',
    'process.example.subtitle': 'Proyecto "NOIRBRUME"',
    'process.example.description': 'Descubre mi proceso en acción a través de una conversación realista con un cliente ficticio. Desde la solicitud inicial hasta la entrega final.',

    // Fake Chat
    'fakeChat.clientName': 'Cliente - NOIRBRUME',
    'fakeChat.onlineStatus': 'En línea',
    'fakeChat.message1': '¡Hola Theo! Necesito un logo para mi marca "NOIRBRUME". Un estilo streetwear, sobrio y poético.',
    'fakeChat.timestamp1': '14:32',
    'fakeChat.message2': '¡Qué nombre tan elegante! Ya veo un logo tipográfico minimalista con una atmósfera brumosa. ¡Te envío una primera idea esta noche!',
    'fakeChat.timestamp2': '14:35',
    'fakeChat.typingIndicator': 'Escribiendo...',

    // Services Section
    'services.subtitle': 'Servicios',
    'services.title': 'Lo que puedo hacer por ti',
    'services.description': 'Soluciones creativas completas adaptadas a tus necesidades y ambiciones.',

    'services.brandIdentity.title': 'Identidad de Marca',
    'services.brandIdentity.desc': '¿Necesitas un logo que impacte y una imagen que cuente quién eres? Te ayudo a construir una identidad real, no solo un logo rápido.',
    'services.brandIdentity.feature1': 'Logo profesional (no en Canva)',
    'services.brandIdentity.feature2': 'Manual de marca claro',
    'services.brandIdentity.feature3': 'Identidad visual coherente',
    'services.brandIdentity.feature4': 'Posicionamiento de marca sólido',

    'services.uiux.title': 'Diseño UI/UX',
    'services.uiux.desc': 'Un buen diseño no es solo bonito. Tiene que funcionar. Creo interfaces simples, fluidas y agradables de usar (incluso para la tía Josefina).',
    'services.uiux.feature1': 'Investigación de usuario',
    'services.uiux.feature2': 'Wireframes limpios',
    'services.uiux.feature3': 'Maquetas pixel-perfect',
    'services.uiux.feature4': 'Pruebas para ver si todo funciona',

    'services.webDev.title': 'Desarrollo Web',
    'services.webDev.desc': 'Sitios web modernos y responsivos que funcionan perfectamente en todos los dispositivos.',
    'services.webDev.feature1': 'Diseño responsivo',
    'services.webDev.feature2': 'Optimización SEO',
    'services.webDev.feature3': 'Rendimiento rápido',
    'services.webDev.feature4': 'Mantenimiento fácil',

    'services.mobile.title': 'Diseño Móvil',
    'services.mobile.desc': 'Tu app merece algo mejor que una plantilla por defecto. Te hago una interfaz clara, intuitiva y agradable de usar en el metro.',
    'services.mobile.feature1': 'Diseño iOS y Android',
    'services.mobile.feature2': 'Recorrido de usuario bien pensado',
    'services.mobile.feature3': 'Onboarding fluido',
    'services.mobile.feature4': 'Iconos, menús y todos los pequeños detalles que marcan la diferencia',

    'services.creative.title': 'Diseño Impreso',
    'services.creative.desc': 'Cosas que puedes tocar. Flyers, tarjetas, carteles: todo lo que se lee con los ojos y las manos.',
    'services.creative.feature1': 'Maquetación cuidada',
    'services.creative.feature2': 'Buena elección tipográfica (no Comic Sans, no te preocupes)',
    'services.creative.feature3': 'Armonías de color perfectas',
    'services.creative.feature4': 'Archivos listos para imprenta',

    'services.motion.title': 'Motion Design y Video',
    'services.motion.desc': 'Contenido que se mueve bien. Edito, animo, doy ritmo a tu comunicación visual.',
    'services.motion.feature1': 'Animaciones de logos elegantes',
    'services.motion.feature2': 'Montajes de video dinámicos',
    'services.motion.feature3': 'Teasers, trailers, reels, stories...',
    'services.motion.feature4': 'Micro-animaciones y efectos suaves',

    'services.startProject': 'Iniciar un proyecto',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonios',
    'testimonials.title': 'Lo que dicen los clientes',
    'testimonials.description': 'Comentarios de personas que confiaron en mí para sus proyectos.',
    'testimonials.trustedBy': 'Confían en mí',
    'testimonials.trustedByDesc': 'Empresas y emprendedores que eligieron mis servicios',

    // Individual testimonials
    'testimonial1.content': 'El enfoque creativo y la experiencia técnica de Theo nos ayudaron a lanzar una campaña digital exitosa. Los resultados hablan por sí mismos: ¡300% de aumento en el engagement!',
    'testimonial1.project': 'Campaña digital y Motion Graphics',
    'testimonial1.date': 'Octubre 2023',
    'testimonial1.name': 'Emily Rodriguez',
    'testimonial1.role': 'Directora de Marketing',
    'testimonial1.company': 'InnovateLab',

    'testimonial2.content': 'Theo captó la esencia de mi marca desde el principio. Comunicación fluida, plazos cumplidos y resultado profesional. Lo recomiendo encarecidamente.',
    'testimonial2.project': 'Creación de logo',
    'testimonial2.date': 'Abril 2025',
    'testimonial2.name': 'Cliente anónimo',
    'testimonial2.role': '',
    'testimonial2.company': '',

    'testimonial3.content': 'El diseño de mi tarjeta de visita es exactamente lo que buscaba: minimalista, elegante e impactante. ¡Gracias por tu escucha y profesionalismo!',
    'testimonial3.project': 'Identidad visual y tarjeta de visita',
    'testimonial3.date': 'Abril 2025',
    'testimonial3.name': 'Meier Nils',
    'testimonial3.role': 'Emprendedor',
    'testimonial3.company': '',

    'testimonial4.content': 'La colaboración con Theo Blondel fue excelente. Su campaña de carteles superó todas nuestras expectativas: trabajo creativo, moderno, preciso hasta en los detalles. Mención especial por su sentido de los colores, tipografías e impacto visual.',
    'testimonial4.project': 'Campaña impresa y dirección artística',
    'testimonial4.date': 'Abril 2025',
    'testimonial4.name': 'Lukas Steinmann',
    'testimonial4.role': 'Director Artístico',
    'testimonial4.company': '',

    'testimonial5.content': 'Siempre es un placer trabajar con Theo. Reactivo, creativo y confiable. Cada proyecto avanza sin estrés.',
    'testimonial5.project': 'Identidad de marca e impresión',
    'testimonial5.date': 'Febrero 2025',
    'testimonial5.name': 'Azdine Tafssout',
    'testimonial5.role': 'Jefe de Proyecto',
    'testimonial5.company': '',

    'testimonial6.content': 'Súper colaboración. El proyecto fue fluido de principio a fin. Resultado limpio, entregado a tiempo y fiel a nuestra visión.',
    'testimonial6.project': 'Diseño de packaging y materiales de comunicación',
    'testimonial6.date': 'Abril 2025',
    'testimonial6.name': 'Noa Vellin',
    'testimonial6.role': 'Responsable de Producto',
    'testimonial6.company': '',

    'testimonial7.content': 'Theo manejó nuestro rebranding de la A a la Z. Reestructuró todo con claridad, gusto y verdadera sensibilidad. Supimos desde los primeros intercambios que íbamos a trabajar con él.',
    'testimonial7.project': 'Rediseño de identidad visual',
    'testimonial7.date': 'Marzo 2025',
    'testimonial7.name': 'Julia Renard',
    'testimonial7.role': 'Fundadora',
    'testimonial7.company': 'Atelier Kura',

    'testimonials.googleReviewTitle': '¿Has trabajado conmigo?',
    'testimonials.googleReviewDescription': '¡Tu opinión cuenta enormemente! Comparte tu experiencia en Google Reviews y ayuda a otros clientes a descubrir la calidad de mis servicios creativos.',
    'testimonials.googleReviewButton': 'Dejar una reseña en Google',
    'testimonials.googleReviewFooter': 'Tu reseña nos ayuda a crecer',

    // Contact Section
    'contact.subtitle': 'Contacto',
    'contact.title1': 'Hablemos',
    'contact.title2': 'de tu proyecto?',
    'contact.description': '¿Tienes una idea? ¿Necesitas ayuda visual? ¿O solo quieres saber si podríamos trabajar juntos?',
    'contact.getInTouch': 'Mantengámonos en Contacto',
    'contact.getInTouchDesc': '¿Listo para comenzar tu proyecto? Hablemos de tu visión y veamos cómo podemos hacerla realidad juntos.',

    'contact.email': 'Email',
    'contact.emailDesc': 'Escríbeme, respondo rápido',
    'contact.location': 'Ubicación',
    'contact.locationDesc': 'Basado en la región del Lago Lemán',
    'contact.followMe': 'Sígueme',

    'contact.sendMessage': 'Enviar un Mensaje',
    'contact.name': 'Nombre',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.emailPlaceholder': 'tu.email@ejemplo.com',
    'contact.subject': 'Asunto',
    'contact.subjectPlaceholder': '¿Cuál es tu proyecto?',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Háblame de tu proyecto...',
    'contact.sendBtn': 'Enviar mensaje',

    // Footer
    'footer.description': 'Diseñador de medios basado en Suiza, especializado en identidad de marca y diseño de interfaz.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.services': 'Servicios',
    'footer.brandIdentity': 'Identidad de Marca',
    'footer.uiuxDesign': 'Diseño UI/UX',
    'footer.webDevelopment': 'Desarrollo Web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Hecho con',
    'footer.inSwitzerland': 'en Suiza',
    'footer.allRights': '© 2024 Theo Blondel. Todos los derechos reservados.',
  },
  ru: {
    // Navigation
    'nav.about': 'О нас',
    'nav.work': 'Проекты',
    'nav.services': 'Услуги',
    'nav.contact': 'Контакты',
    'nav.letsTalk': 'Поговорим',

    // Hero Section
    'hero.subtitle': 'Медиа-дизайнер',
    'hero.greeting': 'Привет, я Тео Блондель.',
    'hero.title1': 'Креативные',
    'hero.title2': 'универсальные решения',
    'hero.title3': '',
    'hero.description': 'Я медиа-дизайнер в Швейцарии, и я превращаю ваши идеи в чистые, впечатляющие и действительно стильные визуальные проекты.',
    'hero.contactMe': 'Поговорим?',
    'hero.watchDemo': 'Смотреть демо',
    'hero.yearsExperience': 'Лет опыта',
    'hero.projectsDelivered': 'Проектов выполнено',
    'hero.clientSatisfaction': 'Удовлетворенность клиентов',
    'hero.clientsWorldwide': 'Клиентов по всему миру',

    // Hero Services
    'hero.service1.title': 'Фирменный стиль',
    'hero.service1.desc': 'Логотипы и визуальная идентичность, которые рассказывают вашу историю',
    'hero.service2.title': 'UI/UX дизайн',
    'hero.service2.desc': 'Интерфейсы, которые работают и выглядят потрясающе',
    'hero.service3.title': 'Печатный дизайн',
    'hero.service3.desc': 'Материалы, которые можно потрогать и почувствовать',
    'hero.service4.title': 'Моушн дизайн',
    'hero.service4.desc': 'Контент, который движется и завораживает',

    // About Section
    'about.subtitle': 'Мой путь',
    'about.title1': 'Мой путь',
    'about.title2': 'к творчеству',
    'about.description1': 'Я начинал как многие: с монтажа YouTube в 10 лет, с головой в пикселях и звуковых эффектах. Minecraft, Fortnite, Call of... Я проводил часы, тестируя, экспериментируя, ища то, что работает.',
    'about.description2': 'Потом пришло рисование. Затем медиа-дизайн. И тут я понял: я хочу заниматься этим. Создавать. Проектировать. Воплощать визуальные идеи, которые говорят с людьми.',

    // About Skills
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Полное владение творческим пакетом',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'Профессиональный видеомонтаж и цветокоррекция',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': '3D моделирование и анимация',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'UI/UX дизайн и прототипирование',

    'about.learnMore': 'Узнать больше обо мне',

    // Portfolio Section
    'portfolio.subtitle': 'Мои проекты',
    'portfolio.title1': 'Некоторые вещи,',
    'portfolio.title2': 'которые я любил делать',
    'portfolio.description': 'Подборка проектов, которые показывают мой подход и стиль.',
    'portfolio.viewAllBehance': 'Посмотреть все на Behance',

    // Process Section
    'process.subtitle': 'Мой процесс',
    'process.title': 'Мой творческий процесс',
    'process.description1': 'Простой, структурированный и индивидуальный подход',
    'process.description2': 'Каждый проект уникален, но мой метод остается надежным. Вот как я превращаю ваши идеи в конкретные результаты.',

    'process.step1.title': 'Бриф и прослушивание',
    'process.step1.desc': 'Понимание ваших потребностей, целей и вселенной бренда.',
    'process.step2.title': 'Исследование и мудборд',
    'process.step2.desc': 'Изучение вдохновения, трендов и визуальной среды, адаптированной к вашему проекту.',
    'process.step3.title': 'Эскизы и концепции',
    'process.step3.desc': 'Набросок первых идей, размышления о формах, сообщениях, цветах, которые вам подходят.',
    'process.step4.title': 'Дизайн',
    'process.step4.desc': 'Создание финального рендера с типографикой, визуалами и профессиональной композицией, отражающей вашу идентичность.',
    'process.step5.title': 'Правки',
    'process.step5.desc': 'Ваши отзывы важны. Мы корректируем вместе, пока не утвердим то, что идеально вас представляет.',
    'process.step6.title': 'Доставка и поддержка',
    'process.step6.desc': 'Доставка оптимизированных файлов, готовых к использованию (веб, печать, сети). Я остаюсь доступным для вас!',

    'process.example.title': 'Конкретный пример',
    'process.example.subtitle': 'Проект "NOIRBRUME"',
    'process.example.description': 'Откройте для себя мой процесс в действии через реалистичный разговор с вымышленным клиентом. От первоначального запроса до финальной доставки.',

    // Fake Chat
    'fakeChat.clientName': 'Клиент - NOIRBRUME',
    'fakeChat.onlineStatus': 'В сети',
    'fakeChat.message1': 'Привет, Тео! Мне нужен логотип для моего бренда "NOIRBRUME". Стиль стритвир, сдержанный и поэтичный.',
    'fakeChat.timestamp1': '14:32',
    'fakeChat.message2': 'Такое стильное название! Я уже вижу минималистичный типографический логотип с туманной атмосферой. Отправлю тебе первую идею сегодня вечером!',
    'fakeChat.timestamp2': '14:35',
    'fakeChat.typingIndicator': 'Печатает...',

    // Services Section
    'services.subtitle': 'Услуги',
    'services.title': 'Что я могу для вас сделать',
    'services.description': 'Полные креативные решения, адаптированные к вашим потребностям и амбициям.',

    'services.brandIdentity.title': 'Фирменный стиль',
    'services.brandIdentity.desc': 'Нужен логотип, который впечатляет, и образ, который рассказывает, кто вы? Я помогу вам построить настоящую идентичность — не просто быстрый логотип.',
    'services.brandIdentity.feature1': 'Профессиональный логотип (не в Canva)',
    'services.brandIdentity.feature2': 'Четкие брендбук',
    'services.brandIdentity.feature3': 'Последовательная визуальная идентичность',
    'services.brandIdentity.feature4': 'Позиционирование бренда, которое держится',

    'services.uiux.title': 'UI/UX дизайн',
    'services.uiux.desc': 'Хороший дизайн — это не просто красиво. Он должен работать. Я создаю простые, плавные и приятные в использовании интерфейсы (даже для тети Жозефины).',
    'services.uiux.feature1': 'Исследование пользователей',
    'services.uiux.feature2': 'Чистые вайрфреймы',
    'services.uiux.feature3': 'Пиксель-перфект макеты',
    'services.uiux.feature4': 'Тесты, чтобы увидеть, все ли работает',

    'services.webDev.title': 'Веб-разработка',
    'services.webDev.desc': 'Современные и адаптивные веб-сайты, которые идеально работают на всех устройствах.',
    'services.webDev.feature1': 'Адаптивный дизайн',
    'services.webDev.feature2': 'SEO оптимизация',
    'services.webDev.feature3': 'Быстрая производительность',
    'services.webDev.feature4': 'Легкое обслуживание',

    'services.mobile.title': 'Мобильный дизайн',
    'services.mobile.desc': 'Ваше приложение заслуживает лучшего, чем шаблон по умолчанию. Я создам вам четкий, интуитивный интерфейс, приятный в использовании в метро.',
    'services.mobile.feature1': 'Дизайн для iOS и Android',
    'services.mobile.feature2': 'Хорошо продуманный пользовательский путь',
    'services.mobile.feature3': 'Плавный онбординг',
    'services.mobile.feature4': 'Иконки, меню и все мелкие детали, которые делают разницу',

    'services.creative.title': 'Печатный дизайн',
    'services.creative.desc': 'Вещи, которые можно потрогать. Флаеры, карточки, постеры — все, что читается глазами и руками.',
    'services.creative.feature1': 'Тщательная верстка',
    'services.creative.feature2': 'Хороший выбор типографики (не Comic Sans, не волнуйтесь)',
    'services.creative.feature3': 'Идеальные цветовые гармонии',
    'services.creative.feature4': 'Файлы, готовые для печати',

    'services.motion.title': 'Моушн дизайн и видео',
    'services.motion.desc': 'Контент, который хорошо движется. Я монтирую, анимирую, задаю ритм вашей визуальной коммуникации.',
    'services.motion.feature1': 'Стильные анимации логотипов',
    'services.motion.feature2': 'Динамичный видеомонтаж',
    'services.motion.feature3': 'Тизеры, трейлеры, рилсы, сторис...',
    'services.motion.feature4': 'Микро-анимации и плавные эффекты',

    'services.startProject': 'Начать проект',

    // Testimonials Section
    'testimonials.subtitle': 'Отзывы',
    'testimonials.title': 'Что говорят клиенты',
    'testimonials.description': 'Отзывы людей, которые доверили мне свои проекты.',
    'testimonials.trustedBy': 'Они доверяют мне',
    'testimonials.trustedByDesc': 'Компании и предприниматели, которые выбрали мои услуги',

    // Individual testimonials
    'testimonial1.content': 'Креативный подход и техническая экспертиза Тео помогли нам запустить успешную цифровую кампанию. Результаты говорят сами за себя — 300% увеличение вовлеченности!',
    'testimonial1.project': 'Цифровая кампания и моушн графика',
    'testimonial1.date': 'Октябрь 2023',
    'testimonial1.name': 'Эмили Родригес',
    'testimonial1.role': 'Директор по маркетингу',
    'testimonial1.company': 'InnovateLab',

    'testimonial2.content': 'Тео уловил суть моего бренда с самого начала. Плавная коммуникация, соблюдение сроков и профессиональный результат. Очень рекомендую.',
    'testimonial2.project': 'Создание логотипа',
    'testimonial2.date': 'Апрель 2025',
    'testimonial2.name': 'Анонимный клиент',
    'testimonial2.role': '',
    'testimonial2.company': '',

    'testimonial3.content': 'Дизайн моей визитной карточки — это именно то, что я искал: минималистичный, элегантный и впечатляющий. Спасибо за ваше внимание и профессионализм!',
    'testimonial3.project': 'Визуальная идентичность и визитная карточка',
    'testimonial3.date': 'Апрель 2025',
    'testimonial3.name': 'Майер Нильс',
    'testimonial3.role': 'Предприниматель',
    'testimonial3.company': '',

    'testimonial4.content': 'Сотрудничество с Тео Блонделем было отличным. Его постерная кампания превзошла все наши ожидания — креативная, современная работа, точная до мелочей. Особое упоминание за его чувство цвета, типографики и визуального воздействия.',
    'testimonial4.project': 'Печатная кампания и арт-направление',
    'testimonial4.date': 'Апрель 2025',
    'testimonial4.name': 'Лукас Штайнманн',
    'testimonial4.role': 'Арт-директор',
    'testimonial4.company': '',

    'testimonial5.content': 'Всегда приятно работать с Тео. Отзывчивый, креативный и надежный. Каждый проект продвигается без стресса.',
    'testimonial5.project': 'Фирменный стиль и печать',
    'testimonial5.date': 'Февраль 2025',
    'testimonial5.name': 'Аздин Тафссут',
    'testimonial5.role': 'Руководитель проекта',
    'testimonial5.company': '',

    'testimonial6.content': 'Отличное сотрудничество. Проект был плавным от начала до конца. Чистый результат, доставлен вовремя и верен нашему видению.',
    'testimonial6.project': 'Дизайн упаковки и коммуникационные материалы',
    'testimonial6.date': 'Апрель 2025',
    'testimonial6.name': 'Ноа Веллин',
    'testimonial6.role': 'Менеджер по продукту',
    'testimonial6.company': '',

    'testimonial7.content': 'Тео управлял нашим ребрендингом от А до Я. Он все реструктурировал с ясностью, вкусом и настоящей чувствительностью. Мы знали с первых обменов, что будем работать с ним.',
    'testimonial7.project': 'Редизайн визуальной идентичности',
    'testimonial7.date': 'Март 2025',
    'testimonial7.name': 'Джулия Ренар',
    'testimonial7.role': 'Основатель',
    'testimonial7.company': 'Atelier Kura',

    'testimonials.googleReviewTitle': 'Вы работали со мной?',
    'testimonials.googleReviewDescription': 'Ваше мнение очень важно! Поделитесь своим опытом в Google Reviews и помогите другим клиентам открыть для себя качество моих креативных услуг.',
    'testimonials.googleReviewButton': 'Оставить отзыв в Google',
    'testimonials.googleReviewFooter': 'Ваш отзыв помогает нам расти',

    // Contact Section
    'contact.subtitle': 'Контакт',
    'contact.title1': 'Давайте обсудим',
    'contact.title2': 'ваш проект?',
    'contact.description': 'Есть идея? Нужна визуальная помощь? Или просто хотите узнать, можем ли мы работать вместе?',
    'contact.getInTouch': 'Оставайтесь на связи',
    'contact.getInTouchDesc': 'Готовы начать свой проект? Давайте поговорим о вашем видении и посмотрим, как мы можем воплотить его в жизнь вместе.',

    'contact.email': 'Email',
    'contact.emailDesc': 'Напишите мне, я отвечу быстро',
    'contact.location': 'Местоположение',
    'contact.locationDesc': 'Базируется в регионе Женевского озера',
    'contact.followMe': 'Подписывайтесь на меня',

    'contact.sendMessage': 'Отправить сообщение',
    'contact.name': 'Имя',
    'contact.namePlaceholder': 'Ваше имя',
    'contact.emailPlaceholder': 'ваш.email@пример.com',
    'contact.subject': 'Тема',
    'contact.subjectPlaceholder': 'Какой у вас проект?',
    'contact.message': 'Сообщение',
    'contact.messagePlaceholder': 'Расскажите мне о своем проекте...',
    'contact.sendBtn': 'Отправить сообщение',

    // Footer
    'footer.description': 'Медиа-дизайнер из Швейцарии, специализирующийся на фирменном стиле и дизайне интерфейсов.',
    'footer.quickLinks': 'Быстрые ссылки',
    'footer.services': 'Услуги',
    'footer.brandIdentity': 'Фирменный стиль',
    'footer.uiuxDesign': 'UI/UX дизайн',
    'footer.webDevelopment': 'Веб-разработка',
    'footer.motionGraphics': 'Моушн графика',
    'footer.madeWith': 'Сделано с',
    'footer.inSwitzerland': 'в Швейцарии',
    'footer.allRights': '© 2024 Тео Блондель. Все права защищены.',
  },
  zh: {
    // Navigation
    'nav.about': '关于',
    'nav.work': '项目',
    'nav.services': '服务',
    'nav.contact': '联系',
    'nav.letsTalk': '让我们谈谈',

    // Hero Section
    'hero.subtitle': '媒体设计师',
    'hero.greeting': '嗨，我是Theo Blondel。',
    'hero.title1': '创意',
    'hero.title2': '多元化解决方案',
    'hero.title3': '',
    'hero.description': '我是瑞士的媒体设计师，我将您的想法转化为干净、有影响力且真正时尚的视觉项目。',
    'hero.contactMe': '我们谈谈？',
    'hero.watchDemo': '观看演示',
    'hero.yearsExperience': '年经验',
    'hero.projectsDelivered': '项目交付',
    'hero.clientSatisfaction': '客户满意度',
    'hero.clientsWorldwide': '全球客户',

    // Hero Services
    'hero.service1.title': '品牌标识',
    'hero.service1.desc': '讲述您故事的标志和视觉标识',
    'hero.service2.title': 'UI/UX设计',
    'hero.service2.desc': '功能强大且外观惊艳的界面',
    'hero.service3.title': '印刷设计',
    'hero.service3.desc': '您可以触摸和感受的材料',
    'hero.service4.title': '动态设计',
    'hero.service4.desc': '移动和吸引人的内容',

    // About Section
    'about.subtitle': '我的旅程',
    'about.title1': '我的道路',
    'about.title2': '走向创作',
    'about.description1': '我像许多人一样开始：10岁时制作YouTube编辑，沉浸在像素和音效中。Minecraft、Fortnite、Call of...我花了几个小时测试、修补，寻找有效的方法。',
    'about.description2': '然后绘画来了。接着是媒体设计。在那里，我明白了：我想做这个。创造。设计。让与人们对话的视觉想法变为现实。',

    // About Skills
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': '完全掌握创意套件',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': '专业视频编辑和调色',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': '3D建模和动画',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'UI/UX设计和原型制作',

    'about.learnMore': '了解更多关于我',

    // Portfolio Section
    'portfolio.subtitle': '我的项目',
    'portfolio.title1': '一些东西',
    'portfolio.title2': '我喜欢制作的',
    'portfolio.description': '展示我的方法和风格的项目选择。',
    'portfolio.viewAllBehance': '在Behance上查看全部',

    // Process Section
    'process.subtitle': '我的流程',
    'process.title': '我的创意流程',
    'process.description1': '简单、结构化和量身定制的方法',
    'process.description2': '每个项目都是独特的，但我的方法保持稳固。这就是我如何将您的想法转化为具体结果。',

    'process.step1.title': '简报和倾听',
    'process.step1.desc': '了解您的需求、目标和品牌宇宙。',
    'process.step2.title': '研究和情绪板',
    'process.step2.desc': '探索适合您项目的灵感、趋势和视觉环境。',
    'process.step3.title': '草图和概念',
    'process.step3.desc': '勾画第一个想法，思考适合您的形状、信息、颜色。',
    'process.step4.title': '设计',
    'process.step4.desc': '创建最终渲染，包含反映您身份的排版、视觉和专业构图。',
    'process.step5.title': '修订',
    'process.step5.desc': '您的反馈至关重要。我们一起调整，直到验证完全代表您的内容。',
    'process.step6.title': '交付和支持',
    'process.step6.desc': '交付优化的文件，准备使用（网络、印刷、网络）。我仍然为您提供服务！',

    'process.example.title': '具体例子',
    'process.example.subtitle': '"NOIRBRUME"项目',
    'process.example.description': '通过与虚构客户的现实对话，发现我的流程实际操作。从初始请求到最终交付。',

    // Fake Chat
    'fakeChat.clientName': '客户 - NOIRBRUME',
    'fakeChat.onlineStatus': '在线',
    'fakeChat.message1': '嗨Theo！我需要为我的"NOIRBRUME"品牌设计一个标志。街头服装风格，朴素而诗意。',
    'fakeChat.timestamp1': '14:32',
    'fakeChat.message2': '多么时尚的名字！我已经可以看到一个带有雾蒙蒙氛围的极简主义排版标志。我今晚会给你发送第一个想法！',
    'fakeChat.timestamp2': '14:35',
    'fakeChat.typingIndicator': '正在输入...',

    // Services Section
    'services.subtitle': '服务',
    'services.title': '我能为您做什么',
    'services.description': '适应您需求和抱负的完整创意解决方案。',

    'services.brandIdentity.title': '品牌标识',
    'services.brandIdentity.desc': '需要一个令人印象深刻的标志和讲述您是谁的形象？我帮助您建立真正的身份——不只是一个快速标志。',
    'services.brandIdentity.feature1': '专业标志（不在Canva上）',
    'services.brandIdentity.feature2': '清晰的品牌指南',
    'services.brandIdentity.feature3': '连贯的视觉标识',
    'services.brandIdentity.feature4': '站得住脚的品牌定位',

    'services.uiux.title': 'UI/UX设计',
    'services.uiux.desc': '好的设计不只是漂亮。它必须工作。我创建简单、流畅且使用愉快的界面（即使对约瑟芬阿姨也是如此）。',
    'services.uiux.feature1': '用户研究',
    'services.uiux.feature2': '干净的线框图',
    'services.uiux.feature3': '像素完美的模型',
    'services.uiux.feature4': '测试看是否一切都有效',

    'services.webDev.title': '网页开发',
    'services.webDev.desc': '在所有设备上完美运行的现代响应式网站。',
    'services.webDev.feature1': '响应式设计',
    'services.webDev.feature2': 'SEO优化',
    'services.webDev.feature3': '快速性能',
    'services.webDev.feature4': '易于维护',

    'services.mobile.title': '移动设计',
    'services.mobile.desc': '您的应用程序值得比默认模板更好的东西。我为您制作一个清晰、直观且在地铁中使用愉快的界面。',
    'services.mobile.feature1': 'iOS和Android设计',
    'services.mobile.feature2': '深思熟虑的用户旅程',
    'services.mobile.feature3': '流畅的入门',
    'services.mobile.feature4': '图标、菜单和所有产生差异的小细节',

    'services.creative.title': '印刷设计',
    'services.creative.desc': '您可以触摸的东西。传单、卡片、海报——所有用眼睛和手阅读的东西。',
    'services.creative.feature1': '精心布局',
    'services.creative.feature2': '好的排版选择（不是Comic Sans，别担心）',
    'services.creative.feature3': '完美的色彩和谐',
    'services.creative.feature4': '准备打印的文件',

    'services.motion.title': '动态设计和视频',
    'services.motion.desc': '移动良好的内容。我编辑、动画，为您的视觉传播提供节奏。',
    'services.motion.feature1': '时尚的标志动画',
    'services.motion.feature2': '动态视频编辑',
    'services.motion.feature3': '预告片、拖车、卷轴、故事...',
    'services.motion.feature4': '微动画和流畅效果',

    'services.startProject': '开始项目',

    // Testimonials Section
    'testimonials.subtitle': '推荐',
    'testimonials.title': '客户怎么说',
    'testimonials.description': '信任我处理他们项目的人的反馈。',
    'testimonials.trustedBy': '他们信任我',
    'testimonials.trustedByDesc': '选择我服务的公司和企业家',

    // Individual testimonials
    'testimonial1.content': 'Theo的创意方法和技术专长帮助我们推出了成功的数字活动。结果不言而喻——参与度增加了300%！',
    'testimonial1.project': '数字活动和动态图形',
    'testimonial1.date': '2023年10月',
    'testimonial1.name': 'Emily Rodriguez',
    'testimonial1.role': '营销总监',
    'testimonial1.company': 'InnovateLab',

    'testimonial2.content': 'Theo从一开始就抓住了我品牌的精髓。沟通顺畅，按时交付，结果专业。我强烈推荐。',
    'testimonial2.project': '标志创建',
    'testimonial2.date': '2025年4月',
    'testimonial2.name': '匿名客户',
    'testimonial2.role': '',
    'testimonial2.company': '',

    'testimonial3.content': '我名片的设计正是我所寻找的：极简主义、优雅且有影响力。感谢您的倾听和专业精神！',
    'testimonial3.project': '视觉标识和名片',
    'testimonial3.date': '2025年4月',
    'testimonial3.name': 'Meier Nils',
    'testimonial3.role': '企业家',
    'testimonial3.company': '',

    'testimonial4.content': '与Theo Blondel的合作非常出色。他的海报活动超出了我们所有的期望——创意、现代的工作，精确到细节。特别提到他对颜色、排版和视觉冲击的感觉。',
    'testimonial4.project': '印刷活动和艺术指导',
    'testimonial4.date': '2025年4月',
    'testimonial4.name': 'Lukas Steinmann',
    'testimonial4.role': '艺术总监',
    'testimonial4.company': '',

    'testimonial5.content': '与Theo合作总是很愉快。反应迅速、有创意且可靠。每个项目都毫无压力地推进。',
    'testimonial5.project': '品牌标识和印刷',
    'testimonial5.date': '2025年2月',
    'testimonial5.name': 'Azdine Tafssout',
    'testimonial5.role': '项目经理',
    'testimonial5.company': '',

    'testimonial6.content': '超级合作。项目从开始到结束都很顺利。干净的结果，按时交付，忠实于我们的愿景。',
    'testimonial6.project': '包装设计和传播材料',
    'testimonial6.date': '2025年4月',
    'testimonial6.name': 'Noa Vellin',
    'testimonial6.role': '产品经理',
    'testimonial6.company': '',

    'testimonial7.content': 'Theo从A到Z管理了我们的品牌重塑。他以清晰、品味和真正的敏感性重新构建了一切。我们从第一次交流就知道我们要与他合作。',
    'testimonial7.project': '视觉标识重新设计',
    'testimonial7.date': '2025年3月',
    'testimonial7.name': 'Julia Renard',
    'testimonial7.role': '创始人',
    'testimonial7.company': 'Atelier Kura',

    'testimonials.googleReviewTitle': '您与我合作过吗？',
    'testimonials.googleReviewDescription': '您的意见非常重要！在Google Reviews上分享您的体验，帮助其他客户发现我创意服务的质量。',
    'testimonials.googleReviewButton': '在Google上留下评论',
    'testimonials.googleReviewFooter': '您的评论帮助我们成长',

    // Contact Section
    'contact.subtitle': '联系',
    'contact.title1': '让我们讨论',
    'contact.title2': '您的项目？',
    'contact.description': '有想法吗？需要视觉帮助？或者只是想知道我们是否可以合作？',
    'contact.getInTouch': '保持联系',
    'contact.getInTouchDesc': '准备开始您的项目？让我们谈谈您的愿景，看看我们如何一起实现它。',

    'contact.email': '电子邮件',
    'contact.emailDesc': '给我写信，我会快速回复',
    'contact.location': '位置',
    'contact.locationDesc': '位于日内瓦湖地区',
    'contact.followMe': '关注我',

    'contact.sendMessage': '发送消息',
    'contact.name': '姓名',
    'contact.namePlaceholder': '您的姓名',
    'contact.emailPlaceholder': '您的.邮箱@例子.com',
    'contact.subject': '主题',
    'contact.subjectPlaceholder': '您的项目是什么？',
    'contact.message': '消息',
    'contact.messagePlaceholder': '告诉我您的项目...',
    'contact.sendBtn': '发送消息',

    // Footer
    'footer.description': '瑞士媒体设计师，专门从事品牌标识和界面设计。',
    'footer.quickLinks': '快速链接',
    'footer.services': '服务',
    'footer.brandIdentity': '品牌标识',
    'footer.uiuxDesign': 'UI/UX设计',
    'footer.webDevelopment': '网页开发',
    'footer.motionGraphics': '动态图形',
    'footer.madeWith': '制作于',
    'footer.inSwitzerland': '瑞士',
    'footer.allRights': '© 2024 Theo Blondel. 版权所有。',
  },
  ja: {
    // Navigation
    'nav.about': 'について',
    'nav.work': 'プロジェクト',
    'nav.services': 'サービス',
    'nav.contact': 'お問い合わせ',
    'nav.letsTalk': 'お話ししましょう',

    // Hero Section
    'hero.subtitle': 'メディアデザイナー',
    'hero.greeting': 'こんにちは、Theo Blondelです。',
    'hero.title1': 'クリエイティブ',
    'hero.title2': '多様なソリューション',
    'hero.title3': '',
    'hero.description': '私はスイスのメディアデザイナーで、あなたのアイデアをクリーンで印象的で本当にスタイリッシュなビジュアルプロジェクトに変換します。',
    'hero.contactMe': 'お話ししませんか？',
    'hero.watchDemo': 'デモを見る',
    'hero.yearsExperience': '年の経験',
    'hero.projectsDelivered': 'プロジェクト納品',
    'hero.clientSatisfaction': 'クライアント満足度',
    'hero.clientsWorldwide': '世界中のクライアント',

    // Hero Services
    'hero.service1.title': 'ブランドアイデンティティ',
    'hero.service1.desc': 'あなたのストーリーを語るロゴとビジュアルアイデンティティ',
    'hero.service2.title': 'UI/UXデザイン',
    'hero.service2.desc': '機能的で見た目も素晴らしいインターフェース',
    'hero.service3.title': 'プリントデザイン',
    'hero.service3.desc': '触って感じることができる素材',
    'hero.service4.title': 'モーションデザイン',
    'hero.service4.desc': '動いて魅力的なコンテンツ',

    // About Section
    'about.subtitle': '私の旅',
    'about.title1': '私の道',
    'about.title2': '創作への',
    'about.description1': '私は多くの人と同じように始めました：10歳でYouTube編集、ピクセルと音響効果に夢中でした。Minecraft、Fortnite、Call of...何時間もテストし、いじり、何が機能するかを探していました。',
    'about.description2': 'そして絵画が来ました。次にメディアデザイン。そこで私は理解しました：これをやりたい。創造する。デザインする。人々に語りかけるビジュアルアイデアに命を吹き込む。',

    // About Skills
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'クリエイティブスイートの完全な習得',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'プロフェッショナルビデオ編集とカラーグレーディング',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': '3Dモデリングとアニメーション',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'UI/UXデザインとプロトタイピング',

    'about.learnMore': '私についてもっと知る',

    // Portfolio Section
    'portfolio.subtitle': '私のプロジェクト',
    'portfolio.title1': 'いくつかのもの',
    'portfolio.title2': '作るのが好きだった',
    'portfolio.description': '私のアプローチとスタイルを示すプロジェクトの選択。',
    'portfolio.viewAllBehance': 'Behanceですべて見る',

    // Process Section
    'process.subtitle': '私のプロセス',
    'process.title': '私のクリエイティブプロセス',
    'process.description1': 'シンプルで構造化されたオーダーメイドのアプローチ',
    'process.description2': '各プロジェクトはユニークですが、私の方法は堅実なままです。これが私があなたのアイデアを具体的な結果に変換する方法です。',

    'process.step1.title': 'ブリーフとリスニング',
    'process.step1.desc': 'あなたのニーズ、目標、ブランドユニバースを理解する。',
    'process.step2.title': 'リサーチとムードボード',
    'process.step2.desc': 'あなたのプロジェクトに適応したインスピレーション、トレンド、ビジュアル環境を探索する。',
    'process.step3.title': 'スケッチとコンセプト',
    'process.step3.desc': '最初のアイデアをスケッチし、あなたに対応する形、メッセージ、色について考える。',
    'process.step4.title': 'デザイン',
    'process.step4.desc': 'あなたのアイデンティティを反映するタイポグラフィ、ビジュアル、プロフェッショナルな構成で最終レンダリングを作成する。',
    'process.step5.title': 'リビジョン',
    'process.step5.desc': 'あなたのフィードバックは不可欠です。あなたを完璧に表すものを検証するまで一緒に調整します。',
    'process.step6.title': '納品とサポート',
    'process.step6.desc': '使用準備完了の最適化されたファイルの納品（ウェブ、印刷、ネットワーク）。私はあなたのために利用可能です！',

    'process.example.title': '具体例',
    'process.example.subtitle': '"NOIRBRUME"プロジェクト',
    'process.example.description': '架空のクライアントとの現実的な会話を通じて、私のプロセスの実際の動作を発見してください。初期リクエストから最終納品まで。',

    // Fake Chat
    'fakeChat.clientName': 'クライアント - NOIRBRUME',
    'fakeChat.onlineStatus': 'オンライン',
    'fakeChat.message1': 'こんにちはTheo！私の"NOIRBRUME"ブランドのロゴが必要です。ストリートウェアスタイル、控えめで詩的な。',
    'fakeChat.timestamp1': '14:32',
    'fakeChat.message2': 'とてもスタイリッシュな名前！霧のような雰囲気のミニマルなタイポグラフィックロゴがすでに見えます。今夜最初のアイデアを送ります！',
    'fakeChat.timestamp2': '14:35',
    'fakeChat.typingIndicator': '入力中...',

    // Services Section
    'services.subtitle': 'サービス',
    'services.title': 'あなたのためにできること',
    'services.description': 'あなたのニーズと野心に適応した完全なクリエイティブソリューション。',

    'services.brandIdentity.title': 'ブランドアイデンティティ',
    'services.brandIdentity.desc': '印象的なロゴとあなたが誰であるかを語るイメージが必要ですか？本当のアイデンティティを構築するお手伝いをします—ただの急いで作ったロゴではありません。',
    'services.brandIdentity.feature1': 'プロフェッショナルロゴ（Canvaではない）',
    'services.brandIdentity.feature2': '明確なブランドガイドライン',
    'services.brandIdentity.feature3': '一貫したビジュアルアイデンティティ',
    'services.brandIdentity.feature4': '持続するブランドポジショニング',

    'services.uiux.title': 'UI/UXデザイン',
    'services.uiux.desc': '良いデザインはただ美しいだけではありません。機能しなければなりません。シンプルで流動的で使いやすいインターフェースを作成します（ジョゼフィンおばさんにとっても）。',
    'services.uiux.feature1': 'ユーザーリサーチ',
    'services.uiux.feature2': 'クリーンなワイヤーフレーム',
    'services.uiux.feature3': 'ピクセルパーフェクトなモックアップ',
    'services.uiux.feature4': 'すべてが機能するかテスト',

    'services.webDev.title': 'ウェブ開発',
    'services.webDev.desc': 'すべてのデバイスで完璧に動作するモダンでレスポンシブなウェブサイト。',
    'services.webDev.feature1': 'レスポンシブデザイン',
    'services.webDev.feature2': 'SEO最適化',
    'services.webDev.feature3': '高速パフォーマンス',
    'services.webDev.feature4': '簡単メンテナンス',

    'services.mobile.title': 'モバイルデザイン',
    'services.mobile.desc': 'あなたのアプリはデフォルトテンプレートよりも良いものに値します。地下鉄で使うのが楽しい、明確で直感的なインターフェースを作ります。',
    'services.mobile.feature1': 'iOSとAndroidデザイン',
    'services.mobile.feature2': 'よく考えられたユーザージャーニー',
    'services.mobile.feature3': 'スムーズなオンボーディング',
    'services.mobile.feature4': 'アイコン、メニュー、そして違いを生む小さな詳細すべて',

    'services.creative.title': 'プリントデザイン',
    'services.creative.desc': '触れることができるもの。フライヤー、カード、ポスター—目と手で読むすべてのもの。',
    'services.creative.feature1': '丁寧なレイアウト',
    'services.creative.feature2': '良いタイポグラフィの選択（Comic Sansではありません、心配しないで）',
    'services.creative.feature3': '完璧な色の調和',
    'services.creative.feature4': '印刷準備完了ファイル',

    'services.motion.title': 'モーションデザインとビデオ',
    'services.motion.desc': 'よく動くコンテンツ。編集し、アニメーションし、あなたのビジュアルコミュニケーションにリズムを与えます。',
    'services.motion.feature1': 'スタイリッシュなロゴアニメーション',
    'services.motion.feature2': 'ダイナミックビデオ編集',
    'services.motion.feature3': 'ティーザー、トレーラー、リール、ストーリー...',
    'services.motion.feature4': 'マイクロアニメーションとスムーズエフェクト',

    'services.startProject': 'プロジェクトを開始',

    // Testimonials Section
    'testimonials.subtitle': '推薦',
    'testimonials.title': 'クライアントの声',
    'testimonials.description': 'プロジェクトを私に託してくれた人々からのフィードバック。',
    'testimonials.trustedBy': '彼らは私を信頼しています',
    'testimonials.trustedByDesc': '私のサービスを選んだ企業と起業家',

    // Individual testimonials
    'testimonial1.content': 'Theoのクリエイティブなアプローチと技術的専門知識により、成功したデジタルキャンペーンを立ち上げることができました。結果は自明です—エンゲージメントが300%増加！',
    'testimonial1.project': 'デジタルキャンペーンとモーショングラフィックス',
    'testimonial1.date': '2023年10月',
    'testimonial1.name': 'Emily Rodriguez',
    'testimonial1.role': 'マーケティングディレクター',
    'testimonial1.company': 'InnovateLab',

    'testimonial2.content': 'Theoは最初から私のブランドの本質を捉えました。スムーズなコミュニケーション、期限の遵守、プロフェッショナルな結果。強くお勧めします。',
    'testimonial2.project': 'ロゴ作成',
    'testimonial2.date': '2025年4月',
    'testimonial2.name': '匿名クライアント',
    'testimonial2.role': '',
    'testimonial2.company': '',

    'testimonial3.content': '私の名刺のデザインは私が探していたものそのものです：ミニマリスト、エレガント、インパクトがある。あなたの傾聴とプロフェッショナリズムに感謝します！',
    'testimonial3.project': 'ビジュアルアイデンティティと名刺',
    'testimonial3.date': '2025年4月',
    'testimonial3.name': 'Meier Nils',
    'testimonial3.role': '起業家',
    'testimonial3.company': '',

    'testimonial4.content': 'Theo Blondelとのコラボレーションは素晴らしかったです。彼のポスターキャンペーンは私たちのすべての期待を超えました—クリエイティブで現代的な作品、細部まで正確。色彩、タイポグラフィ、ビジュアルインパクトのセンスに特別な言及。',
    'testimonial4.project': 'プリントキャンペーンとアートディレクション',
    'testimonial4.date': '2025年4月',
    'testimonial4.name': 'Lukas Steinmann',
    'testimonial4.role': 'アートディレクター',
    'testimonial4.company': '',

    'testimonial5.content': 'Theoと働くのはいつも楽しいです。反応が早く、クリエイティブで信頼できる。各プロジェクトはストレスなく進行します。',
    'testimonial5.project': 'ブランドアイデンティティとプリント',
    'testimonial5.date': '2025年2月',
    'testimonial5.name': 'Azdine Tafssout',
    'testimonial5.role': 'プロジェクトマネージャー',
    'testimonial5.company': '',

    'testimonial6.content': '素晴らしいコラボレーション。プロジェクトは最初から最後まで順調でした。クリーンな結果、時間通りの納品、私たちのビジョンに忠実。',
    'testimonial6.project': 'パッケージデザインとコミュニケーション素材',
    'testimonial6.date': '2025年4月',
    'testimonial6.name': 'Noa Vellin',
    'testimonial6.role': 'プロダクトマネージャー',
    'testimonial6.company': '',

    'testimonial7.content': 'Theoは私たちのリブランディングをAからZまで管理しました。彼は明確さ、味、真の感性ですべてを再構築しました。最初の交流から彼と働くことを知っていました。',
    'testimonial7.project': 'ビジュアルアイデンティティ再設計',
    'testimonial7.date': '2025年3月',
    'testimonial7.name': 'Julia Renard',
    'testimonial7.role': '創設者',
    'testimonial7.company': 'Atelier Kura',

    'testimonials.googleReviewTitle': '私と働いたことがありますか？',
    'testimonials.googleReviewDescription': 'あなたの意見は非常に重要です！Google Reviewsで体験を共有し、他のクライアントが私のクリエイティブサービスの質を発見するのを助けてください。',
    'testimonials.googleReviewButton': 'Googleレビューを残す',
    'testimonials.googleReviewFooter': 'あなたのレビューが私たちの成長を助けます',

    // Contact Section
    'contact.subtitle': 'お問い合わせ',
    'contact.title1': '話し合いましょう',
    'contact.title2': 'あなたのプロジェクトについて？',
    'contact.description': 'アイデアがありますか？ビジュアルヘルプが必要ですか？それとも一緒に働けるかどうか知りたいだけですか？',
    'contact.getInTouch': '連絡を取り合いましょう',
    'contact.getInTouchDesc': 'プロジェクトを始める準備はできていますか？あなたのビジョンについて話し、一緒にそれを実現する方法を見てみましょう。',

    'contact.email': 'メール',
    'contact.emailDesc': '私に書いてください、すぐに返信します',
    'contact.location': '場所',
    'contact.locationDesc': 'レマン湖地域に拠点',
    'contact.followMe': 'フォローしてください',

    'contact.sendMessage': 'メッセージを送る',
    'contact.name': '名前',
    'contact.namePlaceholder': 'あなたの名前',
    'contact.emailPlaceholder': 'あなたの.メール@例.com',
    'contact.subject': '件名',
    'contact.subjectPlaceholder': 'あなたのプロジェクトは何ですか？',
    'contact.message': 'メッセージ',
    'contact.messagePlaceholder': 'あなたのプロジェクトについて教えてください...',
    'contact.sendBtn': 'メッセージを送信',

    // Footer
    'footer.description': 'スイスを拠点とするメディアデザイナー、ブランドアイデンティティとインターフェースデザインを専門とする。',
    'footer.quickLinks': 'クイックリンク',
    'footer.services': 'サービス',
    'footer.brandIdentity': 'ブランドアイデンティティ',
    'footer.uiuxDesign': 'UI/UXデザイン',
    'footer.webDevelopment': 'ウェブ開発',
    'footer.motionGraphics': 'モーショングラフィックス',
    'footer.madeWith': '作成',
    'footer.inSwitzerland': 'スイスで',
    'footer.allRights': '© 2024 Theo Blondel. 全著作権所有。',
  },
  de: {
    // Navigation
    'nav.about': 'Über',
    'nav.work': 'Projekte',
    'nav.services': 'Dienstleistungen',
    'nav.contact': 'Kontakt',
    'nav.letsTalk': 'Sprechen wir',

    // Hero Section
    'hero.subtitle': 'Mediendesigner',
    'hero.greeting': 'Hallo, ich bin Theo Blondel.',
    'hero.title1': 'Kreative',
    'hero.title2': 'vielseitige Lösungen',
    'hero.title3': '',
    'hero.description': 'Ich bin Mediendesigner in der Schweiz und verwandle Ihre Ideen in saubere, wirkungsvolle und wirklich stilvolle visuelle Projekte.',
    'hero.contactMe': 'Sprechen wir?',
    'hero.watchDemo': 'Demo ansehen',
    'hero.yearsExperience': 'Jahre Erfahrung',
    'hero.projectsDelivered': 'Projekte geliefert',
    'hero.clientSatisfaction': 'Kundenzufriedenheit',
    'hero.clientsWorldwide': 'Kunden weltweit',

    // Hero Services
    'hero.service1.title': 'Markenidentität',
    'hero.service1.desc': 'Logos und visuelle Identität, die Ihre Geschichte erzählen',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Schnittstellen, die funktionieren und großartig aussehen',
    'hero.service3.title': 'Print Design',
    'hero.service3.desc': 'Materialien, die Sie berühren und fühlen können',
    'hero.service4.title': 'Motion Design',
    'hero.service4.desc': 'Inhalte, die sich bewegen und fesseln',

    // About Section
    'about.subtitle': 'Meine Reise',
    'about.title1': 'Mein Weg',
    'about.title2': 'zur Kreation',
    'about.description1': 'Ich begann wie viele: mit YouTube-Bearbeitungen mit 10 Jahren, den Kopf voller Pixel und Soundeffekte. Minecraft, Fortnite, Call of... Ich verbrachte Stunden mit Testen, Basteln, auf der Suche nach dem, was funktioniert.',
    'about.description2': 'Dann kam das Zeichnen. Dann Mediendesign. Und da verstand ich: Das will ich machen. Erschaffen. Gestalten. Visuelle Ideen zum Leben erwecken, die zu Menschen sprechen.',

    // About Skills
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Vollständige Beherrschung der kreativen Suite',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'Professionelle Videobearbeitung und Farbkorrektur',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': '3D-Modellierung und Animation',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'UI/UX-Design und Prototyping',

    'about.learnMore': 'Mehr über mich erfahren',

    // Portfolio Section
    'portfolio.subtitle': 'Meine Projekte',
    'portfolio.title1': 'Einige Sachen,',
    'portfolio.title2': 'die ich gerne gemacht habe',
    'portfolio.description': 'Eine Auswahl von Projekten, die meinen Ansatz und Stil zeigen.',
    'portfolio.viewAllBehance': 'Alle auf Behance ansehen',

    // Process Section
    'process.subtitle': 'Mein Prozess',
    'process.title': 'Mein kreativer Prozess',
    'process.description1': 'Ein einfacher, strukturierter und maßgeschneiderter Ansatz',
    'process.description2': 'Jedes Projekt ist einzigartig, aber meine Methode bleibt solide. So verwandle ich Ihre Ideen in konkrete Ergebnisse.',

    'process.step1.title': 'Briefing & Zuhören',
    'process.step1.desc': 'Verstehen Ihrer Bedürfnisse, Ziele und Markenwelt.',
    'process.step2.title': 'Recherche & Moodboard',
    'process.step2.desc': 'Erkundung von Inspirationen, Trends und visueller Umgebung, die zu Ihrem Projekt passt.',
    'process.step3.title': 'Skizzen & Konzepte',
    'process.step3.desc': 'Erste Ideen skizzieren, über Formen, Botschaften, Farben nachdenken, die zu Ihnen passen.',
    'process.step4.title': 'Design',
    'process.step4.desc': 'Erstellung des finalen Renderings mit Typografie, Visuals und professioneller Komposition, die Ihre Identität widerspiegelt.',
    'process.step5.title': 'Überarbeitungen',
    'process.step5.desc': 'Ihr Feedback ist wesentlich. Wir passen gemeinsam an, bis wir validieren, was Sie perfekt repräsentiert.',
    'process.step6.title': 'Lieferung & Begleitung',
    'process.step6.desc': 'Lieferung optimierter, gebrauchsfertiger Dateien (Web, Print, Netzwerke). Ich bleibe für Sie verfügbar!',

    'process.example.title': 'Konkretes Beispiel',
    'process.example.subtitle': '"NOIRBRUME" Projekt',
    'process.example.description': 'Entdecken Sie meinen Prozess in Aktion durch ein realistisches Gespräch mit einem fiktiven Kunden. Von der ersten Anfrage bis zur finalen Lieferung.',

    // Fake Chat
    'fakeChat.clientName': 'Kunde - NOIRBRUME',
    'fakeChat.onlineStatus': 'Online',
    'fakeChat.message1': 'Hallo Theo! Ich brauche ein Logo für meine Marke "NOIRBRUME". Ein Streetwear-Stil, nüchtern und poetisch.',
    'fakeChat.timestamp1': '14:32',
    'fakeChat.message2': 'So ein stylischer Name! Ich sehe bereits ein minimalistisches typografisches Logo mit nebuliger Atmosphäre. Ich schicke dir heute Abend eine erste Idee!',
    'fakeChat.timestamp2': '14:35',
    'fakeChat.typingIndicator': 'Tippt...',

    // Services Section
    'services.subtitle': 'Dienstleistungen',
    'services.title': 'Was ich für Sie tun kann',
    'services.description': 'Vollständige kreative Lösungen, angepasst an Ihre Bedürfnisse und Ambitionen.',

    'services.brandIdentity.title': 'Markenidentität',
    'services.brandIdentity.desc': 'Brauchen Sie ein Logo, das beeindruckt, und ein Image, das erzählt, wer Sie sind? Ich helfe Ihnen, eine echte Identität aufzubauen — nicht nur ein schnelles Logo.',
    'services.brandIdentity.feature1': 'Professionelles Logo (nicht auf Canva)',
    'services.brandIdentity.feature2': 'Klare Markenrichtlinien',
    'services.brandIdentity.feature3': 'Kohärente visuelle Identität',
    'services.brandIdentity.feature4': 'Markenpositionierung, die hält',

    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Gutes Design ist nicht nur hübsch. Es muss funktionieren. Ich erstelle einfache, fließende und angenehm zu bedienende Schnittstellen (sogar für Tante Josefine).',
    'services.uiux.feature1': 'Benutzerforschung',
    'services.uiux.feature2': 'Saubere Wireframes',
    'services.uiux.feature3': 'Pixel-perfekte Mockups',
    'services.uiux.feature4': 'Tests, um zu sehen, ob alles funktioniert',

    'services.webDev.title': 'Webentwicklung',
    'services.webDev.desc': 'Moderne und responsive Websites, die perfekt auf allen Geräten funktionieren.',
    'services.webDev.feature1': 'Responsive Design',
    'services.webDev.feature2': 'SEO-Optimierung',
    'services.webDev.feature3': 'Schnelle Leistung',
    'services.webDev.feature4': 'Einfache Wartung',

    'services.mobile.title': 'Mobile Design',
    'services.mobile.desc': 'Ihre App verdient besser als ein Standard-Template. Ich mache Ihnen eine klare, intuitive Schnittstelle, die angenehm in der U-Bahn zu benutzen ist.',
    'services.mobile.feature1': 'iOS & Android Design',
    'services.mobile.feature2': 'Durchdachte Benutzerreise',
    'services.mobile.feature3': 'Fließendes Onboarding',
    'services.mobile.feature4': 'Icons, Menüs und alle kleinen Details, die den Unterschied machen',

    'services.creative.title': 'Print Design',
    'services.creative.desc': 'Sachen, die man anfassen kann. Flyer, Karten, Poster — alles, was mit Augen und Händen gelesen wird.',
    'services.creative.feature1': 'Sorgfältiges Layout',
    'services.creative.feature2': 'Gute Typografie-Wahl (nicht Comic Sans, keine Sorge)',
    'services.creative.feature3': 'Perfekte Farbharmonien',
    'services.creative.feature4': 'Druckfertige Dateien',

    'services.motion.title': 'Motion Design & Video',
    'services.motion.desc': 'Inhalte, die sich gut bewegen. Ich schneide, animiere, gebe Rhythmus zu Ihrer visuellen Kommunikation.',
    'services.motion.feature1': 'Stylische Logo-Animationen',
    'services.motion.feature2': 'Dynamische Video-Bearbeitung',
    'services.motion.feature3': 'Teaser, Trailer, Reels, Stories...',
    'services.motion.feature4': 'Mikro-Animationen und sanfte Effekte',

    'services.startProject': 'Projekt starten',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonials',
    'testimonials.title': 'Was Kunden sagen',
    'testimonials.description': 'Feedback von Menschen, die mir ihre Projekte anvertraut haben.',
    'testimonials.trustedBy': 'Sie vertrauen mir',
    'testimonials.trustedByDesc': 'Unternehmen und Unternehmer, die meine Dienstleistungen gewählt haben',

    // Individual testimonials
    'testimonial1.content': 'Theos kreativer Ansatz und technische Expertise halfen uns, eine erfolgreiche digitale Kampagne zu starten. Die Ergebnisse sprechen für sich — 300% Steigerung des Engagements!',
    'testimonial1.project': 'Digitale Kampagne & Motion Graphics',
    'testimonial1.date': 'Oktober 2023',
    'testimonial1.name': 'Emily Rodriguez',
    'testimonial1.role': 'Marketing Direktorin',
    'testimonial1.company': 'InnovateLab',

    'testimonial2.content': 'Theo erfasste die Essenz meiner Marke von Anfang an. Reibungslose Kommunikation, eingehaltene Fristen und professionelles Ergebnis. Ich empfehle ihn sehr.',
    'testimonial2.project': 'Logo-Erstellung',
    'testimonial2.date': 'April 2025',
    'testimonial2.name': 'Anonymer Kunde',
    'testimonial2.role': '',
    'testimonial2.company': '',

    'testimonial3.content': 'Das Design meiner Visitenkarte ist genau das, was ich suchte: minimalistisch, elegant und wirkungsvoll. Danke für Ihr Zuhören und Ihre Professionalität!',
    'testimonial3.project': 'Visuelle Identität & Visitenkarte',
    'testimonial3.date': 'April 2025',
    'testimonial3.name': 'Meier Nils',
    'testimonial3.role': 'Unternehmer',
    'testimonial3.company': '',

    'testimonial4.content': 'Die Zusammenarbeit mit Theo Blondel war ausgezeichnet. Seine Plakatkampagne übertraf alle unsere Erwartungen — kreative, moderne Arbeit, präzise bis ins Detail. Besondere Erwähnung für sein Gespür für Farben, Typografie und visuellen Impact.',
    'testimonial4.project': 'Print-Kampagne & Art Direction',
    'testimonial4.date': 'April 2025',
    'testimonial4.name': 'Lukas Steinmann',
    'testimonial4.role': 'Art Director',
    'testimonial4.company': '',

    'testimonial5.content': 'Immer ein Vergnügen, mit Theo zu arbeiten. Reaktionsschnell, kreativ und zuverlässig. Jedes Projekt läuft stressfrei.',
    'testimonial5.project': 'Markenidentität & Print',
    'testimonial5.date': 'Februar 2025',
    'testimonial5.name': 'Azdine Tafssout',
    'testimonial5.role': 'Projektleiter',
    'testimonial5.company': '',

    'testimonial6.content': 'Super Zusammenarbeit. Das Projekt lief von Anfang bis Ende reibungslos. Sauberes Ergebnis, pünktlich geliefert und treu unserer Vision.',
    'testimonial6.project': 'Verpackungsdesign & Kommunikationsmaterialien',
    'testimonial6.date': 'April 2025',
    'testimonial6.name': 'Noa Vellin',
    'testimonial6.role': 'Produktmanager',
    'testimonial6.company': '',

    'testimonial7.content': 'Theo managte unser Rebranding von A bis Z. Er strukturierte alles mit Klarheit, Geschmack und echter Sensibilität neu. Wir wussten von den ersten Gesprächen an, dass wir mit ihm arbeiten würden.',
    'testimonial7.project': 'Neugestaltung der visuellen Identität',
    'testimonial7.date': 'März 2025',
    'testimonial7.name': 'Julia Renard',
    'testimonial7.role': 'Gründerin',
    'testimonial7.company': 'Atelier Kura',

    'testimonials.googleReviewTitle': 'Haben Sie mit mir gearbeitet?',
    'testimonials.googleReviewDescription': 'Ihre Meinung zählt enorm! Teilen Sie Ihre Erfahrung auf Google Reviews und helfen Sie anderen Kunden, die Qualität meiner kreativen Dienstleistungen zu entdecken.',
    'testimonials.googleReviewButton': 'Google-Bewertung hinterlassen',
    'testimonials.googleReviewFooter': 'Ihre Bewertung hilft uns zu wachsen',

    // Contact Section
    'contact.subtitle': 'Kontakt',
    'contact.title1': 'Sprechen wir',
    'contact.title2': 'über Ihr Projekt?',
    'contact.description': 'Haben Sie eine Idee? Brauchen Sie visuelle Hilfe? Oder wollen Sie nur wissen, ob wir zusammenarbeiten könnten?',
    'contact.getInTouch': 'In Kontakt bleiben',
    'contact.getInTouchDesc': 'Bereit, Ihr Projekt zu starten? Sprechen wir über Ihre Vision und sehen, wie wir sie gemeinsam verwirklichen können.',

    'contact.email': 'E-Mail',
    'contact.emailDesc': 'Schreiben Sie mir, ich antworte schnell',
    'contact.location': 'Standort',
    'contact.locationDesc': 'Ansässig in der Genfersee-Region',
    'contact.followMe': 'Folgen Sie mir',

    'contact.sendMessage': 'Nachricht senden',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Ihr Name',
    'contact.emailPlaceholder': 'ihre.email@beispiel.com',
    'contact.subject': 'Betreff',
    'contact.subjectPlaceholder': 'Was ist Ihr Projekt?',
    'contact.message': 'Nachricht',
    'contact.messagePlaceholder': 'Erzählen Sie mir von Ihrem Projekt...',
    'contact.sendBtn': 'Nachricht senden',

    // Footer
    'footer.description': 'Mediendesigner aus der Schweiz, spezialisiert auf Markenidentität und Interface-Design.',
    'footer.quickLinks': 'Schnelle Links',
    'footer.services': 'Dienstleistungen',
    'footer.brandIdentity': 'Markenidentität',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Webentwicklung',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Gemacht mit',
    'footer.inSwitzerland': 'in der Schweiz',
    'footer.allRights': '© 2024 Theo Blondel. Alle Rechte vorbehalten.',
  },
  it: {
    // Navigation
    'nav.about': 'Chi sono',
    'nav.work': 'Progetti',
    'nav.services': 'Servizi',
    'nav.contact': 'Contatti',
    'nav.letsTalk': 'Parliamone',

    // Hero Section
    'hero.subtitle': 'Media Designer',
    'hero.greeting': 'Ciao, sono Theo Blondel.',
    'hero.title1': 'Soluzioni',
    'hero.title2': 'creative versatili',
    'hero.title3': '',
    'hero.description': 'Sono un media designer in Svizzera e trasformo le tue idee in progetti visivi puliti, d\'impatto e davvero eleganti.',
    'hero.contactMe': 'Ne parliamo?',
    'hero.watchDemo': 'Guarda Demo',
    'hero.yearsExperience': 'Anni di Esperienza',
    'hero.projectsDelivered': 'Progetti Consegnati',
    'hero.clientSatisfaction': 'Soddisfazione Cliente',
    'hero.clientsWorldwide': 'Clienti nel Mondo',

    // Hero Services
    'hero.service1.title': 'Identità di Brand',
    'hero.service1.desc': 'Loghi e identità visiva che raccontano la tua storia',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Interfacce che funzionano e hanno un aspetto fantastico',
    'hero.service3.title': 'Design Stampa',
    'hero.service3.desc': 'Materiali che puoi toccare e sentire',
    'hero.service4.title': 'Motion Design',
    'hero.service4.desc': 'Contenuti che si muovono e affascinano',

    // About Section
    'about.subtitle': 'Il Mio Viaggio',
    'about.title1': 'Il mio percorso',
    'about.title2': 'verso la creazione',
    'about.description1': 'Ho iniziato come molti: con montaggi YouTube a 10 anni, la testa nei pixel e negli effetti sonori. Minecraft, Fortnite, Call of... Ho passato ore a testare, smanettare, cercare quello che funziona.',
    'about.description2': 'Poi è arrivato il disegno. Poi il media design. E lì ho capito: voglio fare questo. Creare. Progettare. Dare vita a idee visive che parlano alle persone.',

    // About Skills
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Padronanza completa della suite creativa',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'Montaggio video professionale e color grading',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': 'Modellazione 3D e animazione',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'UI/UX design e prototipazione',

    'about.learnMore': 'Scopri di più su di me',

    // Portfolio Section
    'portfolio.subtitle': 'I Miei Progetti',
    'portfolio.title1': 'Alcune cose',
    'portfolio.title2': 'che ho amato fare',
    'portfolio.description': 'Una selezione di progetti che mostrano il mio approccio e stile.',
    'portfolio.viewAllBehance': 'Vedi tutto su Behance',

    // Process Section
    'process.subtitle': 'Il Mio Processo',
    'process.title': 'Il Mio Processo Creativo',
    'process.description1': 'Un approccio semplice, strutturato e su misura',
    'process.description2': 'Ogni progetto è unico, ma il mio metodo rimane solido. Ecco come trasformo le tue idee in risultati concreti.',

    'process.step1.title': 'Brief e Ascolto',
    'process.step1.desc': 'Comprendere le tue esigenze, obiettivi e universo del brand.',
    'process.step2.title': 'Ricerca e Moodboard',
    'process.step2.desc': 'Esplorare ispirazioni, tendenze e ambiente visivo adatto al tuo progetto.',
    'process.step3.title': 'Schizzi e Concetti',
    'process.step3.desc': 'Abbozzare le prime idee, riflettere su forme, messaggi, colori che ti corrispondono.',
    'process.step4.title': 'Design',
    'process.step4.desc': 'Creazione del rendering finale, con tipografie, visual e composizione professionale che riflettono la tua identità.',
    'process.step5.title': 'Revisioni',
    'process.step5.desc': 'Il tuo feedback è essenziale. Aggiustiamo insieme fino a validare ciò che ti rappresenta perfettamente.',
    'process.step6.title': 'Consegna e Accompagnamento',
    'process.step6.desc': 'Consegna di file ottimizzati, pronti all\'uso (web, stampa, reti). Rimango disponibile per te!',

    'process.example.title': 'Esempio Concreto',
    'process.example.subtitle': 'Progetto "NOIRBRUME"',
    'process.example.description': 'Scopri il mio processo in azione attraverso una conversazione realistica con un cliente fittizio. Dalla richiesta iniziale alla consegna finale.',

    // Fake Chat
    'fakeChat.clientName': 'Cliente - NOIRBRUME',
    'fakeChat.onlineStatus': 'Online',
    'fakeChat.message1': 'Ciao Theo! Ho bisogno di un logo per il mio brand "NOIRBRUME". Uno stile streetwear, sobrio e poetico.',
    'fakeChat.timestamp1': '14:32',
    'fakeChat.message2': 'Che nome stiloso! Vedo già un logo tipografico minimale con un\'atmosfera nebbiosa. Ti mando una prima idea stasera!',
    'fakeChat.timestamp2': '14:35',
    'fakeChat.typingIndicator': 'Sta scrivendo...',

    // Services Section
    'services.subtitle': 'Servizi',
    'services.title': 'Cosa posso fare per te',
    'services.description': 'Soluzioni creative complete adattate alle tue esigenze e ambizioni.',

    'services.brandIdentity.title': 'Identità di Brand',
    'services.brandIdentity.desc': 'Hai bisogno di un logo che colpisca e di un\'immagine che racconti chi sei? Ti aiuto a costruire una vera identità — non solo un logo fatto in fretta.',
    'services.brandIdentity.feature1': 'Logo professionale (non su Canva)',
    'services.brandIdentity.feature2': 'Linee guida del brand chiare',
    'services.brandIdentity.feature3': 'Identità visiva coerente',
    'services.brandIdentity.feature4': 'Posizionamento del brand che regge',

    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Un buon design non è solo bello. Deve funzionare. Creo interfacce semplici, fluide e piacevoli da usare (anche per zia Giuseppina).',
    'services.uiux.feature1': 'Ricerca utente',
    'services.uiux.feature2': 'Wireframe puliti',
    'services.uiux.feature3': 'Mockup pixel-perfect',
    'services.uiux.feature4': 'Test per vedere se tutto funziona',

    'services.webDev.title': 'Sviluppo Web',
    'services.webDev.desc': 'Siti web moderni e responsive che funzionano perfettamente su tutti i dispositivi.',
    'services.webDev.feature1': 'Design responsive',
    'services.webDev.feature2': 'Ottimizzazione SEO',
    'services.webDev.feature3': 'Prestazioni veloci',
    'services.webDev.feature4': 'Manutenzione facile',

    'services.mobile.title': 'Design Mobile',
    'services.mobile.desc': 'La tua app merita meglio di un template di default. Ti faccio un\'interfaccia chiara, intuitiva e piacevole da usare in metro.',
    'services.mobile.feature1': 'Design iOS e Android',
    'services.mobile.feature2': 'Percorso utente ben pensato',
    'services.mobile.feature3': 'Onboarding fluido',
    'services.mobile.feature4': 'Icone, menu e tutti i piccoli dettagli che fanno la differenza',

    'services.creative.title': 'Design Stampa',
    'services.creative.desc': 'Roba che puoi toccare. Volantini, biglietti, poster — tutto quello che si legge con gli occhi e le mani.',
    'services.creative.feature1': 'Layout curato',
    'services.creative.feature2': 'Buona scelta tipografica (non Comic Sans, tranquillo)',
    'services.creative.feature3': 'Armonie di colore perfette',
    'services.creative.feature4': 'File pronti per la stampa',

    'services.motion.title': 'Motion Design e Video',
    'services.motion.desc': 'Contenuti che si muovono bene. Monto, animo, do ritmo alla tua comunicazione visiva.',
    'services.motion.feature1': 'Animazioni logo stilose',
    'services.motion.feature2': 'Montaggi video dinamici',
    'services.motion.feature3': 'Teaser, trailer, reel, storie...',
    'services.motion.feature4': 'Micro-animazioni ed effetti smooth',

    'services.startProject': 'Iniziare un progetto',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonianze',
    'testimonials.title': 'Cosa dicono i clienti',
    'testimonials.description': 'Feedback da persone che mi hanno affidato i loro progetti.',
    'testimonials.trustedBy': 'Si fidano di me',
    'testimonials.trustedByDesc': 'Aziende e imprenditori che hanno scelto i miei servizi',

    // Individual testimonials
    'testimonial1.content': 'L\'approccio creativo e l\'esperienza tecnica di Theo ci hanno aiutato a lanciare una campagna digitale di successo. I risultati parlano da soli — aumento del 300% del coinvolgimento!',
    'testimonial1.project': 'Campagna digitale e Motion Graphics',
    'testimonial1.date': 'Ottobre 2023',
    'testimonial1.name': 'Emily Rodriguez',
    'testimonial1.role': 'Direttore Marketing',
    'testimonial1.company': 'InnovateLab',

    'testimonial2.content': 'Theo ha colto l\'essenza del mio brand fin dall\'inizio. Comunicazione fluida, scadenze rispettate e risultato professionale. Consiglio vivamente.',
    'testimonial2.project': 'Creazione logo',
    'testimonial2.date': 'Aprile 2025',
    'testimonial2.name': 'Cliente anonimo',
    'testimonial2.role': '',
    'testimonial2.company': '',

    'testimonial3.content': 'Il design del mio biglietto da visita è esattamente quello che cercavo: minimalista, elegante e d\'impatto. Grazie per il tuo ascolto e professionalità!',
    'testimonial3.project': 'Identità visiva e biglietto da visita',
    'testimonial3.date': 'Aprile 2025',
    'testimonial3.name': 'Meier Nils',
    'testimonial3.role': 'Imprenditore',
    'testimonial3.company': '',

    'testimonial4.content': 'La collaborazione con Theo Blondel è stata eccellente. La sua campagna di poster ha superato tutte le nostre aspettative — lavoro creativo, moderno, preciso fino ai dettagli. Menzione speciale per il suo senso dei colori, della tipografia e dell\'impatto visivo.',
    'testimonial4.project': 'Campagna stampa e direzione artistica',
    'testimonial4.date': 'Aprile 2025',
    'testimonial4.name': 'Lukas Steinmann',
    'testimonial4.role': 'Direttore Artistico',
    'testimonial4.company': '',

    'testimonial5.content': 'Sempre un piacere lavorare con Theo. Reattivo, creativo e affidabile. Ogni progetto avanza senza stress.',
    'testimonial5.project': 'Identità di brand e stampa',
    'testimonial5.date': 'Febbraio 2025',
    'testimonial5.name': 'Azdine Tafssout',
    'testimonial5.role': 'Project Manager',
    'testimonial5.company': '',

    'testimonial6.content': 'Super collaborazione. Il progetto è stato fluido dall\'inizio alla fine. Risultato pulito, consegnato in tempo e fedele alla nostra visione.',
    'testimonial6.project': 'Design packaging e materiali di comunicazione',
    'testimonial6.date': 'Aprile 2025',
    'testimonial6.name': 'Noa Vellin',
    'testimonial6.role': 'Product Manager',
    'testimonial6.company': '',

    'testimonial7.content': 'Theo ha gestito il nostro rebranding dalla A alla Z. Ha ristrutturato tutto con chiarezza, gusto e vera sensibilità. Sapevamo dai primi scambi che avremmo lavorato con lui.',
    'testimonial7.project': 'Ridisegno dell\'identità visiva',
    'testimonial7.date': 'Marzo 2025',
    'testimonial7.name': 'Julia Renard',
    'testimonial7.role': 'Fondatrice',
    'testimonial7.company': 'Atelier Kura',

    'testimonials.googleReviewTitle': 'Hai lavorato con me?',
    'testimonials.googleReviewDescription': 'La tua opinione conta enormemente! Condividi la tua esperienza su Google Reviews e aiuta altri clienti a scoprire la qualità dei miei servizi creativi.',
    'testimonials.googleReviewButton': 'Lascia una recensione su Google',
    'testimonials.googleReviewFooter': 'La tua recensione ci aiuta a crescere',

    // Contact Section
    'contact.subtitle': 'Contatto',
    'contact.title1': 'Parliamo',
    'contact.title2': 'del tuo progetto?',
    'contact.description': 'Hai un\'idea? Hai bisogno di aiuto visivo? O vuoi solo sapere se potremmo lavorare insieme?',
    'contact.getInTouch': 'Restiamo in Contatto',
    'contact.getInTouchDesc': 'Pronto a iniziare il tuo progetto? Parliamo della tua visione e vediamo come possiamo realizzarla insieme.',

    'contact.email': 'Email',
    'contact.emailDesc': 'Scrivimi, rispondo velocemente',
    'contact.location': 'Posizione',
    'contact.locationDesc': 'Basato nella regione del Lago di Ginevra',
    'contact.followMe': 'Seguimi',

    'contact.sendMessage': 'Invia un Messaggio',
    'contact.name': 'Nome',
    'contact.namePlaceholder': 'Il tuo nome',
    'contact.emailPlaceholder': 'tua.email@esempio.com',
    'contact.subject': 'Oggetto',
    'contact.subjectPlaceholder': 'Qual è il tuo progetto?',
    'contact.message': 'Messaggio',
    'contact.messagePlaceholder': 'Parlami del tuo progetto...',
    'contact.sendBtn': 'Invia messaggio',

    // Footer
    'footer.description': 'Media designer basato in Svizzera, specializzato in identità di brand e design di interfacce.',
    'footer.quickLinks': 'Link Rapidi',
    'footer.services': 'Servizi',
    'footer.brandIdentity': 'Identità di Brand',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Sviluppo Web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Fatto con',
    'footer.inSwitzerland': 'in Svizzera',
    'footer.allRights': '© 2024 Theo Blondel. Tutti i diritti riservati.',
  },
  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.work': 'Projetos',
    'nav.services': 'Serviços',
    'nav.contact': 'Contato',
    'nav.letsTalk': 'Vamos Conversar',

    // Hero Section
    'hero.subtitle': 'Designer de Mídia',
    'hero.greeting': 'Olá, eu sou Theo Blondel.',
    'hero.title1': 'Soluções',
    'hero.title2': 'criativas versáteis',
    'hero.title3': '',
    'hero.description': 'Sou designer de mídia na Suíça e transformo suas ideias em projetos visuais limpos, impactantes e realmente estilosos.',
    'hero.contactMe': 'Vamos conversar?',
    'hero.watchDemo': 'Ver Demo',
    'hero.yearsExperience': 'Anos de Experiência',
    'hero.projectsDelivered': 'Projetos Entregues',
    'hero.clientSatisfaction': 'Satisfação do Cliente',
    'hero.clientsWorldwide': 'Clientes no Mundo',

    // Hero Services
    'hero.service1.title': 'Identidade de Marca',
    'hero.service1.desc': 'Logos e identidade visual que contam sua história',
    'hero.service2.title': 'Design UI/UX',
    'hero.service2.desc': 'Interfaces que funcionam e parecem incríveis',
    'hero.service3.title': 'Design Impresso',
    'hero.service3.desc': 'Materiais que você pode tocar e sentir',
    'hero.service4.title': 'Motion Design',
    'hero.service4.desc': 'Conteúdo que se move e cativa',

    // About Section
    'about.subtitle': 'Minha Jornada',
    'about.title1': 'Meu caminho',
    'about.title2': 'para a criação',
    'about.description1': 'Comecei como muitos: com edições do YouTube aos 10 anos, a cabeça em pixels e efeitos sonoros. Minecraft, Fortnite, Call of... Passei horas testando, mexendo, procurando o que funciona.',
    'about.description2': 'Então veio o desenho. Depois o design de mídia. E aí, eu entendi: quero fazer isso. Criar. Projetar. Dar vida a ideias visuais que falam com as pessoas.',

    // About Skills
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Domínio completo da suíte criativa',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'Edição de vídeo profissional e correção de cor',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': 'Modelagem 3D e animação',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'Design UI/UX e prototipagem',

    'about.learnMore': 'Saiba mais sobre mim',

    // Portfolio Section
    'portfolio.subtitle': 'Meus Projetos',
    'portfolio.title1': 'Algumas coisas',
    'portfolio.title2': 'que adorei fazer',
    'portfolio.description': 'Uma seleção de projetos que mostram minha abordagem e estilo.',
    'portfolio.viewAllBehance': 'Ver tudo no Behance',

    // Process Section
    'process.subtitle': 'Meu Processo',
    'process.title': 'Meu Processo Criativo',
    'process.description1': 'Uma abordagem simples, estruturada e sob medida',
    'process.description2': 'Cada projeto é único, mas meu método permanece sólido. Veja como transformo suas ideias em resultados concretos.',

    'process.step1.title': 'Brief e Escuta',
    'process.step1.desc': 'Entender suas necessidades, objetivos e universo da marca.',
    'process.step2.title': 'Pesquisa e Moodboard',
    'process.step2.desc': 'Explorar inspirações, tendências e ambiente visual adaptado ao seu projeto.',
    'process.step3.title': 'Esboços e Conceitos',
    'process.step3.desc': 'Esboçar primeiras ideias, pensar em formas, mensagens, cores que correspondem a você.',
    'process.step4.title': 'Design',
    'process.step4.desc': 'Criação da renderização final, com tipografia, visuais e composição profissional que refletem sua identidade.',
    'process.step5.title': 'Revisões',
    'process.step5.desc': 'Seu feedback é essencial. Ajustamos juntos até validar o que perfeitamente se assemelha a você.',
    'process.step6.title': 'Entrega e Acompanhamento',
    'process.step6.desc': 'Entrega de arquivos otimizados, prontos para uso (web, impressão, redes). Continuo disponível para você!',

    'process.example.title': 'Exemplo Concreto',
    'process.example.subtitle': 'Projeto "NOIRBRUME"',
    'process.example.description': 'Descubra meu processo em ação através de uma conversa realista com um cliente fictício. Do pedido inicial à entrega final.',

    // Fake Chat
    'fakeChat.clientName': 'Cliente - NOIRBRUME',
    'fakeChat.onlineStatus': 'Online',
    'fakeChat.message1': 'Olá Theo! Preciso de um logo para minha marca "NOIRBRUME". Um estilo streetwear, sóbrio e poético.',
    'fakeChat.timestamp1': '14:32',
    'fakeChat.message2': 'Nome super estiloso! Já vejo um logo tipográfico minimalista com uma atmosfera nebulosa. Envio uma primeira ideia esta noite!',
    'fakeChat.timestamp2': '14:35',
    'fakeChat.typingIndicator': 'Digitando...',

    // Services Section
    'services.subtitle': 'Serviços',
    'services.title': 'O que posso fazer por você',
    'services.description': 'Soluções criativas completas adaptadas às suas necessidades e ambições.',

    'services.brandIdentity.title': 'Identidade de Marca',
    'services.brandIdentity.desc': 'Precisa de um logo que impressione e uma imagem que conte quem você é? Ajudo você a construir uma identidade real — não apenas um logo rápido.',
    'services.brandIdentity.feature1': 'Logo profissional (não no Canva)',
    'services.brandIdentity.feature2': 'Diretrizes de marca claras',
    'services.brandIdentity.feature3': 'Identidade visual coerente',
    'services.brandIdentity.feature4': 'Posicionamento de marca que se sustenta',

    'services.uiux.title': 'Design UI/UX',
    'services.uiux.desc': 'Um bom design não é apenas bonito. Tem que funcionar. Crio interfaces simples, fluidas e agradáveis de usar (mesmo para tia Josefina).',
    'services.uiux.feature1': 'Pesquisa de usuário',
    'services.uiux.feature2': 'Wireframes limpos',
    'services.uiux.feature3': 'Mockups pixel-perfect',
    'services.uiux.feature4': 'Testes para ver se tudo funciona',

    'services.webDev.title': 'Desenvolvimento Web',
    'services.webDev.desc': 'Sites modernos e responsivos que funcionam perfeitamente em todos os dispositivos.',
    'services.webDev.feature1': 'Design responsivo',
    'services.webDev.feature2': 'Otimização SEO',
    'services.webDev.feature3': 'Performance rápida',
    'services.webDev.feature4': 'Manutenção fácil',

    'services.mobile.title': 'Design Mobile',
    'services.mobile.desc': 'Seu app merece mais que um template padrão. Faço uma interface clara, intuitiva e agradável de usar no metrô.',
    'services.mobile.feature1': 'Design iOS e Android',
    'services.mobile.feature2': 'Jornada do usuário bem pensada',
    'services.mobile.feature3': 'Onboarding fluido',
    'services.mobile.feature4': 'Ícones, menus e todos os pequenos detalhes que fazem a diferença',

    'services.creative.title': 'Design Impresso',
    'services.creative.desc': 'Coisas que você pode tocar. Flyers, cartões, pôsteres — tudo que se lê com os olhos e as mãos.',
    'services.creative.feature1': 'Layout cuidadoso',
    'services.creative.feature2': 'Boa escolha tipográfica (não Comic Sans, fique tranquilo)',
    'services.creative.feature3': 'Harmonias de cor perfeitas',
    'services.creative.feature4': 'Arquivos prontos para impressão',

    'services.motion.title': 'Motion Design e Vídeo',
    'services.motion.desc': 'Conteúdo que se move bem. Edito, animo, dou ritmo à sua comunicação visual.',
    'services.motion.feature1': 'Animações de logo estilosas',
    'services.motion.feature2': 'Edições de vídeo dinâmicas',
    'services.motion.feature3': 'Teasers, trailers, reels, stories...',
    'services.motion.feature4': 'Micro-animações e efeitos suaves',

    'services.startProject': 'Iniciar um projeto',

    // Testimonials Section
    'testimonials.subtitle': 'Depoimentos',
    'testimonials.title': 'O que os clientes dizem',
    'testimonials.description': 'Feedback de pessoas que confiaram em mim para seus projetos.',
    'testimonials.trustedBy': 'Eles confiam em mim',
    'testimonials.trustedByDesc': 'Empresas e empreendedores que escolheram meus serviços',

    // Individual testimonials
    'testimonial1.content': 'A abordagem criativa e a expertise técnica de Theo nos ajudaram a lançar uma campanha digital bem-sucedida. Os resultados falam por si — aumento de 300% no engajamento!',
    'testimonial1.project': 'Campanha digital e Motion Graphics',
    'testimonial1.date': 'Outubro 2023',
    'testimonial1.name': 'Emily Rodriguez',
    'testimonial1.role': 'Diretora de Marketing',
    'testimonial1.company': 'InnovateLab',

    'testimonial2.content': 'Theo captou a essência da minha marca desde o início. Comunicação fluida, prazos cumpridos e resultado profissional. Recomendo fortemente.',
    'testimonial2.project': 'Criação de logo',
    'testimonial2.date': 'Abril 2025',
    'testimonial2.name': 'Cliente anônimo',
    'testimonial2.role': '',
    'testimonial2.company': '',

    'testimonial3.content': 'O design do meu cartão de visita é exatamente o que eu procurava: minimalista, elegante e impactante. Obrigado pela sua escuta e profissionalismo!',
    'testimonial3.project': 'Identidade visual e cartão de visita',
    'testimonial3.date': 'Abril 2025',
    'testimonial3.name': 'Meier Nils',
    'testimonial3.role': 'Empreendedor',
    'testimonial3.company': '',

    'testimonial4.content': 'A colaboração com Theo Blondel foi excelente. Sua campanha de cartazes superou todas as nossas expectativas — trabalho criativo, moderno, preciso até nos detalhes. Menção especial para seu senso de cores, tipografia e impacto visual.',
    'testimonial4.project': 'Campanha impressa e direção de arte',
    'testimonial4.date': 'Abril 2025',
    'testimonial4.name': 'Lukas Steinmann',
    'testimonial4.role': 'Diretor de Arte',
    'testimonial4.company': '',

    'testimonial5.content': 'Sempre um prazer trabalhar com Theo. Responsivo, criativo e confiável. Cada projeto avança sem estresse.',
    'testimonial5.project': 'Identidade de marca e impressão',
    'testimonial5.date': 'Fevereiro 2025',
    'testimonial5.name': 'Azdine Tafssout',
    'testimonial5.role': 'Gerente de Projeto',
    'testimonial5.company': '',

    'testimonial6.content': 'Ótima colaboração. O projeto foi fluido do início ao fim. Resultado limpo, entregue no prazo e fiel à nossa visão.',
    'testimonial6.project': 'Design de embalagem e materiais de comunicação',
    'testimonial6.date': 'Abril 2025',
    'testimonial6.name': 'Noa Vellin',
    'testimonial6.role': 'Gerente de Produto',
    'testimonial6.company': '',

    'testimonial7.content': 'Theo gerenciou nosso rebranding de A a Z. Ele reestruturou tudo com clareza, gosto e verdadeira sensibilidade. Soubemos desde as primeiras trocas que iríamos trabalhar com ele.',
    'testimonial7.project': 'Redesenho de identidade visual',
    'testimonial7.date': 'Março 2025',
    'testimonial7.name': 'Julia Renard',
    'testimonial7.role': 'Fundadora',
    'testimonial7.company': 'Atelier Kura',

    'testimonials.googleReviewTitle': 'Você trabalhou comigo?',
    'testimonials.googleReviewDescription': 'Sua opinião importa enormemente! Compartilhe sua experiência no Google Reviews e ajude outros clientes a descobrir a qualidade dos meus serviços criativos.',
    'testimonials.googleReviewButton': 'Deixar uma avaliação no Google',
    'testimonials.googleReviewFooter': 'Sua avaliação nos ajuda a crescer',

    // Contact Section
    'contact.subtitle': 'Contato',
    'contact.title1': 'Vamos discutir',
    'contact.title2': 'seu projeto?',
    'contact.description': 'Tem uma ideia? Precisa de ajuda visual? Ou só quer saber se poderíamos trabalhar juntos?',
    'contact.getInTouch': 'Vamos Manter Contato',
    'contact.getInTouchDesc': 'Pronto para iniciar seu projeto? Vamos falar sobre sua visão e ver como podemos torná-la realidade juntos.',

    'contact.email': 'Email',
    'contact.emailDesc': 'Escreva para mim, respondo rapidamente',
    'contact.location': 'Localização',
    'contact.locationDesc': 'Baseado na região do Lago Léman',
    'contact.followMe': 'Siga-me',

    'contact.sendMessage': 'Enviar uma Mensagem',
    'contact.name': 'Nome',
    'contact.namePlaceholder': 'Seu nome',
    'contact.emailPlaceholder': 'seu.email@exemplo.com',
    'contact.subject': 'Assunto',
    'contact.subjectPlaceholder': 'Qual é o seu projeto?',
    'contact.message': 'Mensagem',
    'contact.messagePlaceholder': 'Conte-me sobre seu projeto...',
    'contact.sendBtn': 'Enviar mensagem',

    // Footer
    'footer.description': 'Designer de mídia baseado na Suíça, especializado em identidade de marca e design de interface.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.services': 'Serviços',
    'footer.brandIdentity': 'Identidade de Marca',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Desenvolvimento Web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Feito com',
    'footer.inSwitzerland': 'na Suíça',
    'footer.allRights': '© 2024 Theo Blondel. Todos os direitos reservados.',
  },
  sq: {
    // Navigation
    'nav.about': 'Rreth',
    'nav.work': 'Projektet',
    'nav.services': 'Shërbimet',
    'nav.contact': 'Kontakt',
    'nav.letsTalk': 'Le të flasim',

    // Hero Section
    'hero.subtitle': 'Dizajner Mediash',
    'hero.greeting': 'Përshëndetje, unë jam Theo Blondel.',
    'hero.title1': 'Zgjidhje',
    'hero.title2': 'krijuese të larmishme',
    'hero.title3': '',
    'hero.description': 'Jam dizajner mediash në Zvicër dhe i transformoj idetë tuaja në projekte vizuale të pastra, me ndikim dhe vërtet me stil.',
    'hero.contactMe': 'Të flasim?',
    'hero.watchDemo': 'Shiko Demo',
    'hero.yearsExperience': 'Vite Eksperiencë',
    'hero.projectsDelivered': 'Projekte të Dorëzuara',
    'hero.clientSatisfaction': 'Kënaqësia e Klientit',
    'hero.clientsWorldwide': 'Klientë në Botë',

    // Hero Services
    'hero.service1.title': 'Identiteti i Markës',
    'hero.service1.desc': 'Logo dhe identitet vizual që tregojnë historinë tuaj',
    'hero.service2.title': 'Dizajn UI/UX',
    'hero.service2.desc': 'Ndërfaqe që funksionojnë dhe duken mahnitëse',
    'hero.service3.title': 'Dizajn Printimi',
    'hero.service3.desc': 'Materiale që mund t\'i prekni dhe ndieni',
    'hero.service4.title': 'Dizajn Lëvizjeje',
    'hero.service4.desc': 'Përmbajtje që lëviz dhe magjeps',

    // About Section
    'about.subtitle': 'Udhëtimi Im',
    'about.title1': 'Rruga ime',
    'about.title2': 'drejt krijimit',
    'about.description1': 'Fillova si shumë: me redaktime YouTube në moshën 10 vjeç, kokën në piksela dhe efekte zanore. Minecraft, Fortnite, Call of... Kam kaluar orë duke testuar, duke u marrë, duke kërkuar atë që funksionon.',
    'about.description2': 'Pastaj erdhi vizatimi. Pastaj dizajni i mediave. Dhe atje, e kuptova: dua të bëj këtë. Të krijoj. Të dizajnoj. T\'u jap jetë ideve vizuale që u flasin njerëzve.',

    // About Skills
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Zotërim i plotë i suitës krijuese',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'Redaktim profesional video dhe gradim ngjyrash',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': 'Modelim 3D dhe animacion',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'Dizajn UI/UX dhe prototipim',

    'about.learnMore': 'Mëso më shumë për mua',

    // Portfolio Section
    'portfolio.subtitle': 'Projektet e Mia',
    'portfolio.title1': 'Disa gjëra',
    'portfolio.title2': 'që më pëlqeu t\'i bëja',
    'portfolio.description': 'Një përzgjedhje projektesh që tregojnë qasjen dhe stilin tim.',
    'portfolio.viewAllBehance': 'Shiko të gjitha në Behance',

    // Process Section
    'process.subtitle': 'Procesi Im',
    'process.title': 'Procesi Im Krijues',
    'process.description1': 'Një qasje e thjeshtë, e strukturuar dhe e personalizuar',
    'process.description2': 'Çdo projekt është unik, por metoda ime mbetet solide. Ja se si i transformoj idetë tuaja në rezultate konkrete.',

    'process.step1.title': 'Brief dhe Dëgjim',
    'process.step1.desc': 'Kuptimi i nevojave, objektivave dhe universit të markës tuaj.',
    'process.step2.title': 'Kërkim dhe Moodboard',
    'process.step2.desc': 'Eksplorimi i frymëzimeve, trendeve dhe mjedisit vizual të përshtatur për projektin tuaj.',
    'process.step3.title': 'Skica dhe Koncepte',
    'process.step3.desc': 'Skicimi i ideve të para, mendimi për format, mesazhet, ngjyrat që ju përshtaten.',
    'process.step4.title': 'Dizajn',
    'process.step4.desc': 'Krijimi i renderimit përfundimtar, me tipografi, vizuale dhe kompozim profesional që pasqyrojnë identitetin tuaj.',
    'process.step5.title': 'Rishikime',
    'process.step5.desc': 'Reagimi juaj është thelbësor. Rregullojmë së bashku derisa të vërtetojmë atë që ju përfaqëson perfekt.',
    'process.step6.title': 'Dorëzimi dhe Mbështetja',
    'process.step6.desc': 'Dorëzimi i skedarëve të optimizuar, gati për përdorim (web, print, rrjete). Mbetëm në dispozicion për ju!',

    'process.example.title': 'Shembull Konkret',
    'process.example.subtitle': 'Projekti "NOIRBRUME"',
    'process.example.description': 'Zbuloni procesin tim në veprim përmes një bisede realiste me një klient fiktiv. Nga kërkesa fillestare deri te dorëzimi përfundimtar.',

    // Fake Chat
    'fakeChat.clientName': 'Klient - NOIRBRUME',
    'fakeChat.onlineStatus': 'Online',
    'fakeChat.message1': 'Përshëndetje Theo! Kam nevojë për një logo për markën time "NOIRBRUME". Një stil streetwear, i thjeshtë dhe poetik.',
    'fakeChat.timestamp1': '14:32',
    'fakeChat.message2': 'Emër shumë me stil! Tashmë shoh një logo tipografike minimaliste me një atmosferë të mjegullt. Do të të dërgoj një ide të parë sonte!',
    'fakeChat.timestamp2': '14:35',
    'fakeChat.typingIndicator': 'Duke shkruar...',

    // Services Section
    'services.subtitle': 'Shërbimet',
    'services.title': 'Çfarë mund të bëj për ju',
    'services.description': 'Zgjidhje të plota krijuese të përshtatura për nevojat dhe ambiciet tuaja.',

    'services.brandIdentity.title': 'Identiteti i Markës',
    'services.brandIdentity.desc': 'Keni nevojë për një logo që bën përshtypje dhe një imazh që tregon kush jeni? Ju ndihmoj të ndërtoni një identitet të vërtetë — jo thjesht një logo të shpejtë.',
    'services.brandIdentity.feature1': 'Logo profesionale (jo në Canva)',
    'services.brandIdentity.feature2': 'Udhëzime të qarta të markës',
    'services.brandIdentity.feature3': 'Identitet vizual koherent',
    'services.brandIdentity.feature4': 'Pozicionim marke që qëndron',

    'services.uiux.title': 'Dizajn UI/UX',
    'services.uiux.desc': 'Dizajni i mirë nuk është vetëm i bukur. Duhet të funksionojë. Krijoj ndërfaqe të thjeshta, të rrjedhshme dhe të këndshme për t\'u përdorur (edhe për teze Josefina).',
    'services.uiux.feature1': 'Kërkimi i përdoruesit',
    'services.uiux.feature2': 'Wireframe të pastra',
    'services.uiux.feature3': 'Mockups pixel-perfect',
    'services.uiux.feature4': 'Teste për të parë nëse gjithçka funksionon',

    'services.webDev.title': 'Zhvillimi Web',
    'services.webDev.desc': 'Faqe interneti moderne dhe responsive që funksionojnë perfekt në të gjitha pajisjet.',
    'services.webDev.feature1': 'Dizajn responsive',
    'services.webDev.feature2': 'Optimizim SEO',
    'services.webDev.feature3': 'Performancë e shpejtë',
    'services.webDev.feature4': 'Mirëmbajtje e lehtë',

    'services.mobile.title': 'Dizajn Mobil',
    'services.mobile.desc': 'Aplikacioni juaj meriton më shumë se një shabllon i parazgjedhur. Ju bëj një ndërfaqe të qartë, intuitive dhe të këndshme për t\'u përdorur në metro.',
    'services.mobile.feature1': 'Dizajn iOS dhe Android',
    'services.mobile.feature2': 'Udhëtim përdoruesi mirë i menduar',
    'services.mobile.feature3': 'Onboarding i rrjedhshëm',
    'services.mobile.feature4': 'Ikona, menu dhe të gjitha detajet e vogla që bëjnë diferencën',

    'services.creative.title': 'Dizajn Printimi',
    'services.creative.desc': 'Gjëra që mund t\'i prekni. Flyers, karta, postera — gjithçka që lexohet me sy dhe duar.',
    'services.creative.feature1': 'Layout i kujdesshëm',
    'services.creative.feature2': 'Zgjedhje e mirë tipografike (jo Comic Sans, mos u shqetëso)',
    'services.creative.feature3': 'Harmoni perfekte ngjyrash',
    'services.creative.feature4': 'Skedarë gati për printer',

    'services.motion.title': 'Motion Design dhe Video',
    'services.motion.desc': 'Përmbajtje që lëviz mirë. Redaktoj, animoj, i jap ritëm komunikimit tuaj vizual.',
    'services.motion.feature1': 'Animacione logo me stil',
    'services.motion.feature2': 'Redaktime video dinamike',
    'services.motion.feature3': 'Teasers, trailers, reels, stories...',
    'services.motion.feature4': 'Mikro-animacione dhe efekte të buta',

    'services.startProject': 'Fillo një projekt',

    // Testimonials Section
    'testimonials.subtitle': 'Dëshmitë',
    'testimonials.title': 'Çfarë thonë klientët',
    'testimonials.description': 'Reagime nga njerëz që më kanë besuar projektet e tyre.',
    'testimonials.trustedBy': 'Ata më besojnë',
    'testimonials.trustedByDesc': 'Kompani dhe sipërmarrës që kanë zgjedhur shërbimet e mia',

    // Individual testimonials
    'testimonial1.content': 'Qasja krijuese dhe ekspertiza teknike e Theo na ndihmuan të lansojmë një fushatë digjitale të suksesshme. Rezultatet flasin vetë — 300% rritje në angazhim!',
    'testimonial1.project': 'Fushatë digjitale dhe Motion Graphics',
    'testimonial1.date': 'Tetor 2023',
    'testimonial1.name': 'Emily Rodriguez',
    'testimonial1.role': 'Drejtore Marketingu',
    'testimonial1.company': 'InnovateLab',

    'testimonial2.content': 'Theo kapi thelbin e markës sime që nga fillimi. Komunikim i rrjedhshëm, afate të respektuara dhe rezultat profesional. Rekomandoj shumë.',
    'testimonial2.project': 'Krijim logo',
    'testimonial2.date': 'Prill 2025',
    'testimonial2.name': 'Klient anonim',
    'testimonial2.role': '',
    'testimonial2.company': '',

    'testimonial3.content': 'Dizajni i kartës sime të biznesit është pikërisht ajo që kërkoja: minimalist, elegant dhe me ndikim. Faleminderit për dëgjimin dhe profesionalizmin tuaj!',
    'testimonial3.project': 'Identitet vizual dhe kartë biznesi',
    'testimonial3.date': 'Prill 2025',
    'testimonial3.name': 'Meier Nils',
    'testimonial3.role': 'Sipërmarrës',
    'testimonial3.company': '',

    'testimonial4.content': 'Bashkëpunimi me Theo Blondel ishte i shkëlqyer. Fushata e tij e posterave tejkaloi të gjitha pritshmëritë tona — punë krijuese, moderne, e saktë deri në detaje. Përmendim të veçantë për ndjenjën e tij të ngjyrave, tipografisë dhe ndikimit vizual.',
    'testimonial4.project': 'Fushatë printimi dhe drejtim artistik',
    'testimonial4.date': 'Prill 2025',
    'testimonial4.name': 'Lukas Steinmann',
    'testimonial4.role': 'Drejtor Artistik',
    'testimonial4.company': '',

    'testimonial5.content': 'Gjithmonë kënaqësi të punosh me Theo. Reagim i shpejtë, krijues dhe i besueshëm. Çdo projekt ecën pa stres.',
    'testimonial5.project': 'Identitet marke dhe printim',
    'testimonial5.date': 'Shkurt 2025',
    'testimonial5.name': 'Azdine Tafssout',
    'testimonial5.role': 'Menaxher Projekti',
    'testimonial5.company': '',

    'testimonial6.content': 'Bashkëpunim super. Projekti ishte i rrjedhshëm nga fillimi në fund. Rezultat i pastër, dorëzuar në kohë dhe besnik ndaj vizionit tonë.',
    'testimonial6.project': 'Dizajn paketimi dhe materiale komunikimi',
    'testimonial6.date': 'Prill 2025',
    'testimonial6.name': 'Noa Vellin',
    'testimonial6.role': 'Menaxher Produkti',
    'testimonial6.company': '',

    'testimonial7.content': 'Theo menaxhoi rebranding tonë nga A në Z. Ai ristrukturoi gjithçka me qartësi, shije dhe ndjeshmëri të vërtetë. E dinim nga shkëmbimet e para se do të punonim me të.',
    'testimonial7.project': 'Ridizajnim i identitetit vizual',
    'testimonial7.date': 'Mars 2025',
    'testimonial7.name': 'Julia Renard',
    'testimonial7.role': 'Themeluese',
    'testimonial7.company': 'Atelier Kura',

    'testimonials.googleReviewTitle': 'Keni punuar me mua?',
    'testimonials.googleReviewDescription': 'Mendimi juaj ka rëndësi jashtëzakonisht! Ndani përvojën tuaj në Google Reviews dhe ndihmoni klientët e tjerë të zbulojnë cilësinë e shërbimeve të mia krijuese.',
    'testimonials.googleReviewButton': 'Lini një vlerësim në Google',
    'testimonials.googleReviewFooter': 'Vlerësimi juaj na ndihmon të rritemi',

    // Contact Section
    'contact.subtitle': 'Kontakt',
    'contact.title1': 'Le të diskutojmë',
    'contact.title2': 'projektin tuaj?',
    'contact.description': 'Keni një ide? Keni nevojë për ndihmë vizuale? Apo thjesht doni të dini nëse mund të punojmë së bashku?',
    'contact.getInTouch': 'Le të Mbajmë Kontakt',
    'contact.getInTouchDesc': 'Gati për të filluar projektin tuaj? Le të flasim për vizionin tuaj dhe të shohim se si mund ta realizojmë së bashku.',

    'contact.email': 'Email',
    'contact.emailDesc': 'Më shkruani, përgjigjem shpejt',
    'contact.location': 'Vendndodhja',
    'contact.locationDesc': 'Bazuar në rajonin e Liqenit të Gjenevës',
    'contact.followMe': 'Më ndiqni',

    'contact.sendMessage': 'Dërgo një Mesazh',
    'contact.name': 'Emri',
    'contact.namePlaceholder': 'Emri juaj',
    'contact.emailPlaceholder': 'email.juaj@shembull.com',
    'contact.subject': 'Subjekti',
    'contact.subjectPlaceholder': 'Cili është projekti juaj?',
    'contact.message': 'Mesazhi',
    'contact.messagePlaceholder': 'Më tregoni për projektin tuaj...',
    'contact.sendBtn': 'Dërgo mesazhin',

    // Footer
    'footer.description': 'Dizajner mediash i bazuar në Zvicër, i specializuar në identitet marke dhe dizajn ndërfaqeje.',
    'footer.quickLinks': 'Lidhje të Shpejta',
    'footer.services': 'Shërbimet',
    'footer.brandIdentity': 'Identiteti i Markës',
    'footer.uiuxDesign': 'Dizajn UI/UX',
    'footer.webDevelopment': 'Zhvillim Web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Bërë me',
    'footer.inSwitzerland': 'në Zvicër',
    'footer.allRights': '© 2024 Theo Blondel. Të gjitha të drejtat e rezervuara.',
  }
};

// Create Context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider Component
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('fr');
  const [theme, setTheme] = useState(() => {
    // Check if window is defined (browser environment)
    if (typeof window !== 'undefined') {
      // Check if user has a preference in localStorage
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme;
      }
      
      // Check if user prefers dark mode
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    
    // Default to light theme
    return 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Save to localStorage if available
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      
      // Apply theme to document
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  // Apply theme on initial render
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme]);

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
    toggleTheme,
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