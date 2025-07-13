import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types
export type Language = 'fr' | 'en' | 'es' | 'ru' | 'zh' | 'ja' | 'de' | 'it' | 'pt' | 'sq';
export type Theme = 'light' | 'dark';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: (key: string) => string;
}

// Translations
const translations = {
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      about: "À propos",
      portfolio: "Portfolio",
      services: "Services",
      contact: "Contact"
    },
    // Hero Section
    hero: {
      subtitle: "Médiamaticien",
      greeting: "Yo, moi c'est Theo",
      title1: "Solutions",
      title2: "créatives",
      title3: "polyvalentes",
      description: "Passionné par la création numérique, je transforme vos idées en expériences digitales mémorables. De la conception à la réalisation, je vous accompagne dans tous vos projets créatifs.",
      cta: "Découvrir mon travail",
      contact: "Me contacter"
    },
    // About Section
    about: {
      title: "À propos de moi",
      subtitle: "Créatif passionné",
      description: "Médiamaticien de formation avec une passion pour l'innovation digitale. Je combine créativité et technique pour donner vie à vos projets les plus ambitieux.",
      skills: "Compétences",
      experience: "Expérience",
      education: "Formation",
      downloadCV: "Télécharger CV"
    },
    // Portfolio Section
    portfolio: {
      title: "Mes Réalisations",
      subtitle: "Portfolio créatif",
      description: "Découvrez une sélection de mes projets les plus récents, alliant créativité et innovation technique.",
      viewProject: "Voir le projet",
      liveDemo: "Démo en direct",
      sourceCode: "Code source",
      technologies: "Technologies utilisées",
      category: "Catégorie",
      client: "Client",
      year: "Année",
      challenge: "Défi",
      solution: "Solution",
      results: "Résultats"
    },
    // Process Section
    process: {
      title: "Mon Processus",
      subtitle: "Méthodologie éprouvée",
      description: "Une approche structurée pour garantir le succès de vos projets.",
      step1: {
        title: "Analyse",
        description: "Compréhension approfondie de vos besoins et objectifs."
      },
      step2: {
        title: "Conception",
        description: "Création de maquettes et prototypes interactifs."
      },
      step3: {
        title: "Développement",
        description: "Réalisation technique avec les meilleures pratiques."
      },
      step4: {
        title: "Livraison",
        description: "Tests, optimisation et mise en ligne de votre projet."
      },
      example: {
        title: "Exemple Concret",
        description: "Chaque projet suit cette méthodologie pour garantir des résultats optimaux."
      },
      cta: {
        title: "Prêt à démarrer ton projet ?",
        description: "Parlons de ta vision et voyons comment nous pouvons la concrétiser ensemble avec la même attention aux détails.",
        button1: "Démarrer un projet",
        button2: "Voir mes réalisations"
      }
    },
    // Services Section
    services: {
      title: "Mes Services",
      subtitle: "Solutions complètes",
      description: "Des services adaptés à vos besoins pour donner vie à vos projets digitaux.",
      webDev: {
        title: "Développement Web",
        description: "Sites web modernes et performants avec les dernières technologies."
      },
      design: {
        title: "Design UI/UX",
        description: "Interfaces intuitives et expériences utilisateur optimisées."
      },
      mobile: {
        title: "Applications Mobiles",
        description: "Applications natives et cross-platform pour iOS et Android."
      },
      consulting: {
        title: "Conseil Digital",
        description: "Accompagnement stratégique pour vos projets numériques."
      }
    },
    // Testimonials Section
    testimonials: {
      title: "Témoignages",
      subtitle: "Ce que disent mes clients",
      description: "La satisfaction client est au cœur de mon travail.",
      testimonial1: {
        content: "Theo a transformé notre vision en une réalité digitale exceptionnelle. Son professionnalisme et sa créativité ont dépassé nos attentes.",
        author: "Marie Dubois",
        position: "Directrice Marketing",
        company: "TechStart"
      },
      testimonial2: {
        content: "Un travail remarquable ! L'attention aux détails et la qualité du code sont impressionnantes. Je recommande vivement.",
        author: "Jean Martin",
        position: "CEO",
        company: "InnovCorp"
      },
      testimonial3: {
        content: "Collaboration fluide et résultats au-delà de nos espérances. Theo comprend parfaitement les enjeux business.",
        author: "Sophie Laurent",
        position: "Product Manager",
        company: "DigitalFlow"
      },
      testimonial4: {
        content: "Expertise technique solide et approche créative unique. Un partenaire de confiance pour nos projets digitaux.",
        author: "Pierre Moreau",
        position: "CTO",
        company: "WebSolutions"
      }
    },
    // Contact Section
    contact: {
      title: "Contactez-moi",
      subtitle: "Parlons de votre projet",
      description: "Prêt à donner vie à vos idées ? Contactez-moi pour discuter de votre projet.",
      form: {
        name: "Nom",
        email: "Email",
        subject: "Sujet",
        message: "Message",
        send: "Envoyer",
        sending: "Envoi en cours...",
        success: "Message envoyé avec succès !",
        error: "Erreur lors de l'envoi du message."
      },
      info: {
        email: "theo@example.com",
        phone: "+33 6 12 34 56 78",
        location: "Paris, France",
        availability: "Disponible pour nouveaux projets"
      }
    },
    // Footer
    footer: {
      description: "Médiamaticien passionné par l'innovation digitale et la création d'expériences utilisateur exceptionnelles.",
      quickLinks: "Liens rapides",
      services: "Services",
      social: "Réseaux sociaux",
      copyright: "© 2024 Theo. Tous droits réservés.",
      madeWith: "Fait avec ❤️ en France"
    },
    // Fake Chat
    fakeChat: {
      title: "Chat en direct",
      online: "En ligne",
      typing: "En train d'écrire...",
      message1: "Salut ! Comment puis-je vous aider ?",
      message2: "Je suis disponible pour discuter de votre projet !",
      placeholder: "Tapez votre message...",
      send: "Envoyer"
    }
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      services: "Services",
      contact: "Contact"
    },
    // Hero Section
    hero: {
      subtitle: "Creative Solutions",
      greeting: "Hello, I am Theo",
      title1: "Solutions",
      title2: "creative",
      title3: "versatile",
      description: "Passionate about digital creation, I transform your ideas into memorable digital experiences. From concept to realization, I support you in all your creative projects.",
      cta: "Discover my work",
      contact: "Contact me"
    },
    // About Section
    about: {
      title: "About me",
      subtitle: "Passionate creative",
      description: "Media technician by training with a passion for digital innovation. I combine creativity and technique to bring your most ambitious projects to life.",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      downloadCV: "Download CV"
    },
    // Portfolio Section
    portfolio: {
      title: "My Work",
      subtitle: "Creative portfolio",
      description: "Discover a selection of my most recent projects, combining creativity and technical innovation.",
      viewProject: "View project",
      liveDemo: "Live demo",
      sourceCode: "Source code",
      technologies: "Technologies used",
      category: "Category",
      client: "Client",
      year: "Year",
      challenge: "Challenge",
      solution: "Solution",
      results: "Results"
    },
    // Process Section
    process: {
      title: "My Process",
      subtitle: "Proven methodology",
      description: "A structured approach to guarantee the success of your projects.",
      step1: {
        title: "Analysis",
        description: "Deep understanding of your needs and objectives."
      },
      step2: {
        title: "Design",
        description: "Creation of mockups and interactive prototypes."
      },
      step3: {
        title: "Development",
        description: "Technical realization with best practices."
      },
      step4: {
        title: "Delivery",
        description: "Testing, optimization and launch of your project."
      },
      example: {
        title: "Concrete Example",
        description: "Each project follows this methodology to guarantee optimal results."
      },
      cta: {
        title: "Ready to start your project?",
        description: "Let's talk about your vision and see how we can bring it to life together with the same attention to detail.",
        button1: "Start a project",
        button2: "View my work"
      }
    },
    // Services Section
    services: {
      title: "My Services",
      subtitle: "Complete solutions",
      description: "Services adapted to your needs to bring your digital projects to life.",
      webDev: {
        title: "Web Development",
        description: "Modern and performant websites with the latest technologies."
      },
      design: {
        title: "UI/UX Design",
        description: "Intuitive interfaces and optimized user experiences."
      },
      mobile: {
        title: "Mobile Applications",
        description: "Native and cross-platform applications for iOS and Android."
      },
      consulting: {
        title: "Digital Consulting",
        description: "Strategic support for your digital projects."
      }
    },
    // Testimonials Section
    testimonials: {
      title: "Testimonials",
      subtitle: "What my clients say",
      description: "Client satisfaction is at the heart of my work.",
      testimonial1: {
        content: "Theo transformed our vision into an exceptional digital reality. His professionalism and creativity exceeded our expectations.",
        author: "Marie Dubois",
        position: "Marketing Director",
        company: "TechStart"
      },
      testimonial2: {
        content: "Remarkable work! The attention to detail and code quality are impressive. I highly recommend.",
        author: "Jean Martin",
        position: "CEO",
        company: "InnovCorp"
      },
      testimonial3: {
        content: "Smooth collaboration and results beyond our expectations. Theo perfectly understands business challenges.",
        author: "Sophie Laurent",
        position: "Product Manager",
        company: "DigitalFlow"
      },
      testimonial4: {
        content: "Solid technical expertise and unique creative approach. A trusted partner for our digital projects.",
        author: "Pierre Moreau",
        position: "CTO",
        company: "WebSolutions"
      }
    },
    // Contact Section
    contact: {
      title: "Contact me",
      subtitle: "Let's talk about your project",
      description: "Ready to bring your ideas to life? Contact me to discuss your project.",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Error sending message."
      },
      info: {
        email: "theo@example.com",
        phone: "+33 6 12 34 56 78",
        location: "Paris, France",
        availability: "Available for new projects"
      }
    },
    // Footer
    footer: {
      description: "Media technician passionate about digital innovation and creating exceptional user experiences.",
      quickLinks: "Quick links",
      services: "Services",
      social: "Social media",
      copyright: "© 2024 Theo. All rights reserved.",
      madeWith: "Made with ❤️ in France"
    },
    // Fake Chat
    fakeChat: {
      title: "Live chat",
      online: "Online",
      typing: "Typing...",
      message1: "Hi! How can I help you?",
      message2: "I'm available to discuss your project!",
      placeholder: "Type your message...",
      send: "Send"
    }
  },
  es: {
    // Navigation
    nav: {
      home: "Inicio",
      about: "Acerca de",
      portfolio: "Portafolio",
      services: "Servicios",
      contact: "Contacto"
    },
    // Hero Section
    hero: {
      subtitle: "Soluciones Creativas",
      greeting: "Hola, soy Theo",
      title1: "Soluciones",
      title2: "creativas",
      title3: "versátiles",
      description: "Apasionado por la creación digital, transformo tus ideas en experiencias digitales memorables. Desde la concepción hasta la realización, te acompaño en todos tus proyectos creativos.",
      cta: "Descubrir mi trabajo",
      contact: "Contáctame"
    },
    // About Section
    about: {
      title: "Acerca de mí",
      subtitle: "Creativo apasionado",
      description: "Técnico en medios de formación con pasión por la innovación digital. Combino creatividad y técnica para dar vida a tus proyectos más ambiciosos.",
      skills: "Habilidades",
      experience: "Experiencia",
      education: "Educación",
      downloadCV: "Descargar CV"
    },
    // Portfolio Section
    portfolio: {
      title: "Mi Trabajo",
      subtitle: "Portafolio creativo",
      description: "Descubre una selección de mis proyectos más recientes, combinando creatividad e innovación técnica.",
      viewProject: "Ver proyecto",
      liveDemo: "Demo en vivo",
      sourceCode: "Código fuente",
      technologies: "Tecnologías utilizadas",
      category: "Categoría",
      client: "Cliente",
      year: "Año",
      challenge: "Desafío",
      solution: "Solución",
      results: "Resultados"
    },
    // Process Section
    process: {
      title: "Mi Proceso",
      subtitle: "Metodología probada",
      description: "Un enfoque estructurado para garantizar el éxito de tus proyectos.",
      step1: {
        title: "Análisis",
        description: "Comprensión profunda de tus necesidades y objetivos."
      },
      step2: {
        title: "Diseño",
        description: "Creación de maquetas y prototipos interactivos."
      },
      step3: {
        title: "Desarrollo",
        description: "Realización técnica con las mejores prácticas."
      },
      step4: {
        title: "Entrega",
        description: "Pruebas, optimización y lanzamiento de tu proyecto."
      },
      example: {
        title: "Ejemplo Concreto",
        description: "Cada proyecto sigue esta metodología para garantizar resultados óptimos."
      },
      cta: {
        title: "¿Listo para comenzar tu proyecto?",
        description: "Hablemos de tu visión y veamos cómo podemos hacerla realidad juntos con la misma atención al detalle.",
        button1: "Iniciar un proyecto",
        button2: "Ver mi trabajo"
      }
    },
    // Services Section
    services: {
      title: "Mis Servicios",
      subtitle: "Soluciones completas",
      description: "Servicios adaptados a tus necesidades para dar vida a tus proyectos digitales.",
      webDev: {
        title: "Desarrollo Web",
        description: "Sitios web modernos y eficientes con las últimas tecnologías."
      },
      design: {
        title: "Diseño UI/UX",
        description: "Interfaces intuitivas y experiencias de usuario optimizadas."
      },
      mobile: {
        title: "Aplicaciones Móviles",
        description: "Aplicaciones nativas y multiplataforma para iOS y Android."
      },
      consulting: {
        title: "Consultoría Digital",
        description: "Apoyo estratégico para tus proyectos digitales."
      }
    },
    // Testimonials Section
    testimonials: {
      title: "Testimonios",
      subtitle: "Lo que dicen mis clientes",
      description: "La satisfacción del cliente está en el corazón de mi trabajo.",
      testimonial1: {
        content: "Theo transformó nuestra visión en una realidad digital excepcional. Su profesionalismo y creatividad superaron nuestras expectativas.",
        author: "María Dubois",
        position: "Directora de Marketing",
        company: "TechStart"
      },
      testimonial2: {
        content: "¡Trabajo notable! La atención al detalle y la calidad del código son impresionantes. Lo recomiendo encarecidamente.",
        author: "Juan Martín",
        position: "CEO",
        company: "InnovCorp"
      },
      testimonial3: {
        content: "Colaboración fluida y resultados más allá de nuestras expectativas. Theo entiende perfectamente los desafíos empresariales.",
        author: "Sofía Laurent",
        position: "Product Manager",
        company: "DigitalFlow"
      },
      testimonial4: {
        content: "Experiencia técnica sólida y enfoque creativo único. Un socio de confianza para nuestros proyectos digitales.",
        author: "Pedro Moreau",
        position: "CTO",
        company: "WebSolutions"
      }
    },
    // Contact Section
    contact: {
      title: "Contáctame",
      subtitle: "Hablemos de tu proyecto",
      description: "¿Listo para dar vida a tus ideas? Contáctame para discutir tu proyecto.",
      form: {
        name: "Nombre",
        email: "Email",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar",
        sending: "Enviando...",
        success: "¡Mensaje enviado con éxito!",
        error: "Error al enviar el mensaje."
      },
      info: {
        email: "theo@example.com",
        phone: "+33 6 12 34 56 78",
        location: "París, Francia",
        availability: "Disponible para nuevos proyectos"
      }
    },
    // Footer
    footer: {
      description: "Técnico en medios apasionado por la innovación digital y la creación de experiencias de usuario excepcionales.",
      quickLinks: "Enlaces rápidos",
      services: "Servicios",
      social: "Redes sociales",
      copyright: "© 2024 Theo. Todos los derechos reservados.",
      madeWith: "Hecho con ❤️ en Francia"
    },
    // Fake Chat
    fakeChat: {
      title: "Chat en vivo",
      online: "En línea",
      typing: "Escribiendo...",
      message1: "¡Hola! ¿Cómo puedo ayudarte?",
      message2: "¡Estoy disponible para discutir tu proyecto!",
      placeholder: "Escribe tu mensaje...",
      send: "Enviar"
    }
  },
  ru: {
    // Navigation
    nav: {
      home: "Главная",
      about: "О себе",
      portfolio: "Портфолио",
      services: "Услуги",
      contact: "Контакты"
    },
    // Hero Section
    hero: {
      subtitle: "Креативные решения",
      greeting: "Привет, я Тео",
      title1: "Решения",
      title2: "креативные",
      title3: "универсальные",
      description: "Увлеченный цифровым творчеством, я превращаю ваши идеи в запоминающиеся цифровые впечатления. От концепции до реализации, я поддерживаю вас во всех ваших творческих проектах.",
      cta: "Посмотреть мои работы",
      contact: "Связаться со мной"
    },
    // About Section
    about: {
      title: "Обо мне",
      subtitle: "Увлеченный творец",
      description: "Медиатехник по образованию с страстью к цифровым инновациям. Я сочетаю креативность и технику, чтобы воплотить в жизнь ваши самые амбициозные проекты.",
      skills: "Навыки",
      experience: "Опыт",
      education: "Образование",
      downloadCV: "Скачать резюме"
    },
    // Portfolio Section
    portfolio: {
      title: "Мои работы",
      subtitle: "Креативное портфолио",
      description: "Откройте для себя подборку моих самых последних проектов, сочетающих креативность и техническую инновацию.",
      viewProject: "Посмотреть проект",
      liveDemo: "Живая демонстрация",
      sourceCode: "Исходный код",
      technologies: "Используемые технологии",
      category: "Категория",
      client: "Клиент",
      year: "Год",
      challenge: "Вызов",
      solution: "Решение",
      results: "Результаты"
    },
    // Process Section
    process: {
      title: "Мой процесс",
      subtitle: "Проверенная методология",
      description: "Структурированный подход для гарантии успеха ваших проектов.",
      step1: {
        title: "Анализ",
        description: "Глубокое понимание ваших потребностей и целей."
      },
      step2: {
        title: "Дизайн",
        description: "Создание макетов и интерактивных прототипов."
      },
      step3: {
        title: "Разработка",
        description: "Техническая реализация с лучшими практиками."
      },
      step4: {
        title: "Доставка",
        description: "Тестирование, оптимизация и запуск вашего проекта."
      },
      example: {
        title: "Конкретный пример",
        description: "Каждый проект следует этой методологии для гарантии оптимальных результатов."
      },
      cta: {
        title: "Готовы начать свой проект?",
        description: "Давайте поговорим о вашем видении и посмотрим, как мы можем воплотить его в жизнь вместе с тем же вниманием к деталям.",
        button1: "Начать проект",
        button2: "Посмотреть мои работы"
      }
    },
    // Services Section
    services: {
      title: "Мои услуги",
      subtitle: "Полные решения",
      description: "Услуги, адаптированные к вашим потребностям, чтобы воплотить в жизнь ваши цифровые проекты.",
      webDev: {
        title: "Веб-разработка",
        description: "Современные и производительные веб-сайты с новейшими технологиями."
      },
      design: {
        title: "UI/UX дизайн",
        description: "Интуитивные интерфейсы и оптимизированный пользовательский опыт."
      },
      mobile: {
        title: "Мобильные приложения",
        description: "Нативные и кроссплатформенные приложения для iOS и Android."
      },
      consulting: {
        title: "Цифровое консультирование",
        description: "Стратегическая поддержка ваших цифровых проектов."
      }
    },
    // Testimonials Section
    testimonials: {
      title: "Отзывы",
      subtitle: "Что говорят мои клиенты",
      description: "Удовлетворенность клиентов - основа моей работы.",
      testimonial1: {
        content: "Тео превратил наше видение в исключительную цифровую реальность. Его профессионализм и креативность превзошли наши ожидания.",
        author: "Мария Дюбуа",
        position: "Директор по маркетингу",
        company: "TechStart"
      },
      testimonial2: {
        content: "Замечательная работа! Внимание к деталям и качество кода впечатляют. Настоятельно рекомендую.",
        author: "Жан Мартен",
        position: "Генеральный директор",
        company: "InnovCorp"
      },
      testimonial3: {
        content: "Плавное сотрудничество и результаты сверх наших ожиданий. Тео прекрасно понимает бизнес-задачи.",
        author: "София Лоран",
        position: "Продакт-менеджер",
        company: "DigitalFlow"
      },
      testimonial4: {
        content: "Солидная техническая экспертиза и уникальный творческий подход. Надежный партнер для наших цифровых проектов.",
        author: "Пьер Моро",
        position: "Технический директор",
        company: "WebSolutions"
      }
    },
    // Contact Section
    contact: {
      title: "Свяжитесь со мной",
      subtitle: "Поговорим о вашем проекте",
      description: "Готовы воплотить свои идеи в жизнь? Свяжитесь со мной, чтобы обсудить ваш проект.",
      form: {
        name: "Имя",
        email: "Email",
        subject: "Тема",
        message: "Сообщение",
        send: "Отправить",
        sending: "Отправка...",
        success: "Сообщение успешно отправлено!",
        error: "Ошибка при отправке сообщения."
      },
      info: {
        email: "theo@example.com",
        phone: "+33 6 12 34 56 78",
        location: "Париж, Франция",
        availability: "Доступен для новых проектов"
      }
    },
    // Footer
    footer: {
      description: "Медиатехник, увлеченный цифровыми инновациями и созданием исключительного пользовательского опыта.",
      quickLinks: "Быстрые ссылки",
      services: "Услуги",
      social: "Социальные сети",
      copyright: "© 2024 Тео. Все права защищены.",
      madeWith: "Сделано с ❤️ во Франции"
    },
    // Fake Chat
    fakeChat: {
      title: "Живой чат",
      online: "В сети",
      typing: "Печатает...",
      message1: "Привет! Как я могу вам помочь?",
      message2: "Я доступен для обсуждения вашего проекта!",
      placeholder: "Введите ваше сообщение...",
      send: "Отправить"
    }
  },
  zh: {
    // Navigation
    nav: {
      home: "首页",
      about: "关于",
      portfolio: "作品集",
      services: "服务",
      contact: "联系"
    },
    // Hero Section
    hero: {
      subtitle: "创意解决方案",
      greeting: "你好，我是Theo",
      title1: "解决方案",
      title2: "创意",
      title3: "多样化",
      description: "热衷于数字创作，我将您的想法转化为令人难忘的数字体验。从概念到实现，我在您所有的创意项目中为您提供支持。",
      cta: "发现我的作品",
      contact: "联系我"
    },
    // About Section
    about: {
      title: "关于我",
      subtitle: "充满激情的创作者",
      description: "受过媒体技术培训，对数字创新充满热情。我将创意与技术相结合，为您最雄心勃勃的项目注入生命。",
      skills: "技能",
      experience: "经验",
      education: "教育",
      downloadCV: "下载简历"
    },
    // Portfolio Section
    portfolio: {
      title: "我的作品",
      subtitle: "创意作品集",
      description: "发现我最新项目的精选，结合创意和技术创新。",
      viewProject: "查看项目",
      liveDemo: "在线演示",
      sourceCode: "源代码",
      technologies: "使用的技术",
      category: "类别",
      client: "客户",
      year: "年份",
      challenge: "挑战",
      solution: "解决方案",
      results: "结果"
    },
    // Process Section
    process: {
      title: "我的流程",
      subtitle: "经过验证的方法",
      description: "结构化的方法来保证您项目的成功。",
      step1: {
        title: "分析",
        description: "深入了解您的需求和目标。"
      },
      step2: {
        title: "设计",
        description: "创建模型和交互式原型。"
      },
      step3: {
        title: "开发",
        description: "采用最佳实践进行技术实现。"
      },
      step4: {
        title: "交付",
        description: "测试、优化和启动您的项目。"
      },
      example: {
        title: "具体示例",
        description: "每个项目都遵循这种方法来保证最佳结果。"
      },
      cta: {
        title: "准备开始您的项目了吗？",
        description: "让我们谈论您的愿景，看看我们如何能够以同样的细节关注将其变为现实。",
        button1: "开始项目",
        button2: "查看我的作品"
      }
    },
    // Services Section
    services: {
      title: "我的服务",
      subtitle: "完整解决方案",
      description: "适应您需求的服务，为您的数字项目注入生命。",
      webDev: {
        title: "网站开发",
        description: "采用最新技术的现代高性能网站。"
      },
      design: {
        title: "UI/UX设计",
        description: "直观的界面和优化的用户体验。"
      },
      mobile: {
        title: "移动应用",
        description: "iOS和Android的原生和跨平台应用程序。"
      },
      consulting: {
        title: "数字咨询",
        description: "为您的数字项目提供战略支持。"
      }
    },
    // Testimonials Section
    testimonials: {
      title: "推荐",
      subtitle: "我的客户怎么说",
      description: "客户满意度是我工作的核心。",
      testimonial1: {
        content: "Theo将我们的愿景转化为卓越的数字现实。他的专业精神和创造力超出了我们的期望。",
        author: "玛丽·杜布瓦",
        position: "营销总监",
        company: "TechStart"
      },
      testimonial2: {
        content: "出色的工作！对细节的关注和代码质量令人印象深刻。我强烈推荐。",
        author: "让·马丁",
        position: "首席执行官",
        company: "InnovCorp"
      },
      testimonial3: {
        content: "顺畅的合作和超出我们期望的结果。Theo完美理解商业挑战。",
        author: "索菲·洛朗",
        position: "产品经理",
        company: "DigitalFlow"
      },
      testimonial4: {
        content: "扎实的技术专长和独特的创意方法。我们数字项目的可信赖合作伙伴。",
        author: "皮埃尔·莫罗",
        position: "首席技术官",
        company: "WebSolutions"
      }
    },
    // Contact Section
    contact: {
      title: "联系我",
      subtitle: "让我们谈论您的项目",
      description: "准备将您的想法变为现实？联系我讨论您的项目。",
      form: {
        name: "姓名",
        email: "邮箱",
        subject: "主题",
        message: "消息",
        send: "发送",
        sending: "发送中...",
        success: "消息发送成功！",
        error: "发送消息时出错。"
      },
      info: {
        email: "theo@example.com",
        phone: "+33 6 12 34 56 78",
        location: "巴黎，法国",
        availability: "可接受新项目"
      }
    },
    // Footer
    footer: {
      description: "热衷于数字创新和创造卓越用户体验的媒体技术人员。",
      quickLinks: "快速链接",
      services: "服务",
      social: "社交媒体",
      copyright: "© 2024 Theo. 版权所有。",
      madeWith: "在法国用❤️制作"
    },
    // Fake Chat
    fakeChat: {
      title: "在线聊天",
      online: "在线",
      typing: "正在输入...",
      message1: "你好！我能为您做些什么？",
      message2: "我可以讨论您的项目！",
      placeholder: "输入您的消息...",
      send: "发送"
    }
  },
  ja: {
    // Navigation
    nav: {
      home: "ホーム",
      about: "について",
      portfolio: "ポートフォリオ",
      services: "サービス",
      contact: "お問い合わせ"
    },
    // Hero Section
    hero: {
      subtitle: "クリエイティブソリューション",
      greeting: "こんにちは、私はTheoです",
      title1: "ソリューション",
      title2: "クリエイティブ",
      title3: "多様な",
      description: "デジタル創作に情熱を注ぎ、あなたのアイデアを記憶に残るデジタル体験に変換します。コンセプトから実現まで、すべてのクリエイティブプロジェクトでサポートします。",
      cta: "私の作品を見る",
      contact: "お問い合わせ"
    },
    // About Section
    about: {
      title: "私について",
      subtitle: "情熱的なクリエイター",
      description: "デジタルイノベーションへの情熱を持つメディア技術者。創造性と技術を組み合わせて、最も野心的なプロジェクトに命を吹き込みます。",
      skills: "スキル",
      experience: "経験",
      education: "教育",
      downloadCV: "履歴書をダウンロード"
    },
    // Portfolio Section
    portfolio: {
      title: "私の作品",
      subtitle: "クリエイティブポートフォリオ",
      description: "創造性と技術革新を組み合わせた最新プロジェクトの選択をご覧ください。",
      viewProject: "プロジェクトを見る",
      liveDemo: "ライブデモ",
      sourceCode: "ソースコード",
      technologies: "使用技術",
      category: "カテゴリー",
      client: "クライアント",
      year: "年",
      challenge: "チャレンジ",
      solution: "ソリューション",
      results: "結果"
    },
    // Process Section
    process: {
      title: "私のプロセス",
      subtitle: "実証済みの方法論",
      description: "プロジェクトの成功を保証する構造化されたアプローチ。",
      step1: {
        title: "分析",
        description: "あなたのニーズと目標の深い理解。"
      },
      step2: {
        title: "デザイン",
        description: "モックアップとインタラクティブプロトタイプの作成。"
      },
      step3: {
        title: "開発",
        description: "ベストプラクティスによる技術的実現。"
      },
      step4: {
        title: "納品",
        description: "テスト、最適化、プロジェクトの立ち上げ。"
      },
      example: {
        title: "具体例",
        description: "各プロジェクトはこの方法論に従って最適な結果を保証します。"
      },
      cta: {
        title: "プロジェクトを始める準備はできていますか？",
        description: "あなたのビジョンについて話し合い、同じ細部への注意を払って一緒に実現する方法を見てみましょう。",
        button1: "プロジェクトを開始",
        button2: "私の作品を見る"
      }
    },
    // Services Section
    services: {
      title: "私のサービス",
      subtitle: "完全なソリューション",
      description: "デジタルプロジェクトに命を吹き込むためのニーズに適応したサービス。",
      webDev: {
        title: "ウェブ開発",
        description: "最新技術による現代的で高性能なウェブサイト。"
      },
      design: {
        title: "UI/UXデザイン",
        description: "直感的なインターフェースと最適化されたユーザーエクスペリエンス。"
      },
      mobile: {
        title: "モバイルアプリケーション",
        description: "iOSとAndroid向けのネイティブおよびクロスプラットフォームアプリケーション。"
      },
      consulting: {
        title: "デジタルコンサルティング",
        description: "デジタルプロジェクトの戦略的サポート。"
      }
    },
    // Testimonials Section
    testimonials: {
      title: "お客様の声",
      subtitle: "クライアントの声",
      description: "顧客満足度が私の仕事の中心です。",
      testimonial1: {
        content: "Theoは私たちのビジョンを例外的なデジタル現実に変えました。彼のプロフェッショナリズムと創造性は私たちの期待を上回りました。",
        author: "マリー・デュボワ",
        position: "マーケティングディレクター",
        company: "TechStart"
      },
      testimonial2: {
        content: "素晴らしい仕事！細部への注意とコードの品質は印象的です。強くお勧めします。",
        author: "ジャン・マルタン",
        position: "CEO",
        company: "InnovCorp"
      },
      testimonial3: {
        content: "スムーズなコラボレーションと期待を上回る結果。Theoはビジネスの課題を完璧に理解しています。",
        author: "ソフィー・ローラン",
        position: "プロダクトマネージャー",
        company: "DigitalFlow"
      },
      testimonial4: {
        content: "堅実な技術的専門知識とユニークな創造的アプローチ。デジタルプロジェクトの信頼できるパートナー。",
        author: "ピエール・モロー",
        position: "CTO",
        company: "WebSolutions"
      }
    },
    // Contact Section
    contact: {
      title: "お問い合わせ",
      subtitle: "プロジェクトについて話しましょう",
      description: "アイデアを実現する準備はできていますか？プロジェクトについて話し合うためにお問い合わせください。",
      form: {
        name: "名前",
        email: "メール",
        subject: "件名",
        message: "メッセージ",
        send: "送信",
        sending: "送信中...",
        success: "メッセージが正常に送信されました！",
        error: "メッセージの送信中にエラーが発生しました。"
      },
      info: {
        email: "theo@example.com",
        phone: "+33 6 12 34 56 78",
        location: "パリ、フランス",
        availability: "新しいプロジェクトに対応可能"
      }
    },
    // Footer
    footer: {
      description: "デジタルイノベーションと優れたユーザーエクスペリエンスの創造に情熱を注ぐメディア技術者。",
      quickLinks: "クイックリンク",
      services: "サービス",
      social: "ソーシャルメディア",
      copyright: "© 2024 Theo. 全著作権所有。",
      madeWith: "フランスで❤️を込めて作成"
    },
    // Fake Chat
    fakeChat: {
      title: "ライブチャット",
      online: "オンライン",
      typing: "入力中...",
      message1: "こんにちは！どのようにお手伝いできますか？",
      message2: "プロジェクトについて話し合うことができます！",
      placeholder: "メッセージを入力...",
      send: "送信"
    }
  },
  de: {
    // Navigation
    nav: {
      home: "Startseite",
      about: "Über mich",
      portfolio: "Portfolio",
      services: "Dienstleistungen",
      contact: "Kontakt"
    },
    // Hero Section
    hero: {
      subtitle: "Kreative Lösungen",
      greeting: "Hallo, ich bin Theo",
      title1: "Lösungen",
      title2: "kreativ",
      title3: "vielseitig",
      description: "Leidenschaftlich für digitale Kreation verwandle ich Ihre Ideen in unvergessliche digitale Erlebnisse. Von der Konzeption bis zur Realisierung unterstütze ich Sie bei all Ihren kreativen Projekten.",
      cta: "Meine Arbeit entdecken",
      contact: "Kontaktieren Sie mich"
    },
    // About Section
    about: {
      title: "Über mich",
      subtitle: "Leidenschaftlicher Kreativer",
      description: "Medientechniker mit einer Leidenschaft für digitale Innovation. Ich verbinde Kreativität und Technik, um Ihre ehrgeizigsten Projekte zum Leben zu erwecken.",
      skills: "Fähigkeiten",
      experience: "Erfahrung",
      education: "Bildung",
      downloadCV: "Lebenslauf herunterladen"
    },
    // Portfolio Section
    portfolio: {
      title: "Meine Arbeit",
      subtitle: "Kreatives Portfolio",
      description: "Entdecken Sie eine Auswahl meiner neuesten Projekte, die Kreativität und technische Innovation verbinden.",
      viewProject: "Projekt ansehen",
      liveDemo: "Live-Demo",
      sourceCode: "Quellcode",
      technologies: "Verwendete Technologien",
      category: "Kategorie",
      client: "Kunde",
      year: "Jahr",
      challenge: "Herausforderung",
      solution: "Lösung",
      results: "Ergebnisse"
    },
    // Process Section
    process: {
      title: "Mein Prozess",
      subtitle: "Bewährte Methodik",
      description: "Ein strukturierter Ansatz zur Gewährleistung des Erfolgs Ihrer Projekte.",
      step1: {
        title: "Analyse",
        description: "Tiefes Verständnis Ihrer Bedürfnisse und Ziele."
      },
      step2: {
        title: "Design",
        description: "Erstellung von Mockups und interaktiven Prototypen."
      },
      step3: {
        title: "Entwicklung",
        description: "Technische Umsetzung mit bewährten Praktiken."
      },
      step4: {
        title: "Lieferung",
        description: "Tests, Optimierung und Start Ihres Projekts."
      },
      example: {
        title: "Konkretes Beispiel",
        description: "Jedes Projekt folgt dieser Methodik, um optimale Ergebnisse zu gewährleisten."
      },
      cta: {
        title: "Bereit, Ihr Projekt zu starten?",
        description: "Lassen Sie uns über Ihre Vision sprechen und sehen, wie wir sie gemeinsam mit der gleichen Aufmerksamkeit für Details zum Leben erwecken können.",
        button1: "Projekt starten",
        button2: "Meine Arbeit ansehen"
      }
    },
    // Services Section
    services: {
      title: "Meine Dienstleistungen",
      subtitle: "Komplette Lösungen",
      description: "An Ihre Bedürfnisse angepasste Dienstleistungen, um Ihre digitalen Projekte zum Leben zu erwecken.",
      webDev: {
        title: "Webentwicklung",
        description: "Moderne und leistungsstarke Websites mit den neuesten Technologien."
      },
      design: {
        title: "UI/UX Design",
        description: "Intuitive Benutzeroberflächen und optimierte Benutzererfahrungen."
      },
      mobile: {
        title: "Mobile Anwendungen",
        description: "Native und plattformübergreifende Anwendungen für iOS und Android."
      },
      consulting: {
        title: "Digitale Beratung",
        description: "Strategische Unterstützung für Ihre digitalen Projekte."
      }
    },
    // Testimonials Section
    testimonials: {
      title: "Testimonials",
      subtitle: "Was meine Kunden sagen",
      description: "Kundenzufriedenheit steht im Mittelpunkt meiner Arbeit.",
      testimonial1: {
        content: "Theo hat unsere Vision in eine außergewöhnliche digitale Realität verwandelt. Seine Professionalität und Kreativität haben unsere Erwartungen übertroffen.",
        author: "Marie Dubois",
        position: "Marketing-Direktorin",
        company: "TechStart"
      },
      testimonial2: {
        content: "Bemerkenswerte Arbeit! Die Aufmerksamkeit für Details und die Codequalität sind beeindruckend. Ich empfehle es wärmstens.",
        author: "Jean Martin",
        position: "CEO",
        company: "InnovCorp"
      },
      testimonial3: {
        content: "Reibungslose Zusammenarbeit und Ergebnisse über unsere Erwartungen hinaus. Theo versteht Geschäftsherausforderungen perfekt.",
        author: "Sophie Laurent",
        position: "Produktmanagerin",
        company: "DigitalFlow"
      },
      testimonial4: {
        content: "Solide technische Expertise und einzigartiger kreativer Ansatz. Ein vertrauensvoller Partner für unsere digitalen Projekte.",
        author: "Pierre Moreau",
        position: "CTO",
        company: "WebSolutions"
      }
    },
    // Contact Section
    contact: {
      title: "Kontaktieren Sie mich",
      subtitle: "Lassen Sie uns über Ihr Projekt sprechen",
      description: "Bereit, Ihre Ideen zum Leben zu erwecken? Kontaktieren Sie mich, um Ihr Projekt zu besprechen.",
      form: {
        name: "Name",
        email: "E-Mail",
        subject: "Betreff",
        message: "Nachricht",
        send: "Senden",
        sending: "Wird gesendet...",
        success: "Nachricht erfolgreich gesendet!",
        error: "Fehler beim Senden der Nachricht."
      },
      info: {
        email: "theo@example.com",
        phone: "+33 6 12 34 56 78",
        location: "Paris, Frankreich",
        availability: "Verfügbar für neue Projekte"
      }
    },
    // Footer
    footer: {
      description: "Medientechniker mit Leidenschaft für digitale Innovation und die Schaffung außergewöhnlicher Benutzererfahrungen.",
      quickLinks: "Schnelle Links",
      services: "Dienstleistungen",
      social: "Soziale Medien",
      copyright: "© 2024 Theo. Alle Rechte vorbehalten.",
      madeWith: "Mit ❤️ in Frankreich gemacht"
    },
    // Fake Chat
    fakeChat: {
      title: "Live-Chat",
      online: "Online",
      typing: "Tippt...",
      message1: "Hallo! Wie kann ich Ihnen helfen?",
      message2: "Ich bin verfügbar, um Ihr Projekt zu besprechen!",
      placeholder: "Geben Sie Ihre Nachricht ein...",
      send: "Senden"
    }
  },
  it: {
    // Navigation
    nav: {
      home: "Home",
      about: "Chi sono",
      portfolio: "Portfolio",
      services: "Servizi",
      contact: "Contatti"
    },
    // Hero Section
    hero: {
      subtitle: "Soluzioni Creative",
      greeting: "Ciao, sono Theo",
      title1: "Soluzioni",
      title2: "creative",
      title3: "versatili",
      description: "Appassionato di creazione digitale, trasformo le tue idee in esperienze digitali memorabili. Dal concept alla realizzazione, ti supporto in tutti i tuoi progetti creativi.",
      cta: "Scopri il mio lavoro",
      contact: "Contattami"
    },
    // About Section
    about: {
      title: "Chi sono",
      subtitle: "Creativo appassionato",
      description: "Tecnico dei media di formazione con una passione per l'innovazione digitale. Combino creatività e tecnica per dare vita ai tuoi progetti più ambiziosi.",
      skills: "Competenze",
      experience: "Esperienza",
      education: "Formazione",
      downloadCV: "Scarica CV"
    },
    // Portfolio Section
    portfolio: {
      title: "Il mio lavoro",
      subtitle: "Portfolio creativo",
      description: "Scopri una selezione dei miei progetti più recenti, che combinano creatività e innovazione tecnica.",
      viewProject: "Visualizza progetto",
      liveDemo: "Demo dal vivo",
      sourceCode: "Codice sorgente",
      technologies: "Tecnologie utilizzate",
      category: "Categoria",
      client: "Cliente",
      year: "Anno",
      challenge: "Sfida",
      solution: "Soluzione",
      results: "Risultati"
    },
    // Process Section
    process: {
      title: "Il mio processo",
      subtitle: "Metodologia collaudata",
      description: "Un approccio strutturato per garantire il successo dei tuoi progetti.",
      step1: {
        title: "Analisi",
        description: "Comprensione approfondita delle tue esigenze e obiettivi."
      },
      step2: {
        title: "Design",
        description: "Creazione di mockup e prototipi interattivi."
      },
      step3: {
        title: "Sviluppo",
        description: "Realizzazione tecnica con le migliori pratiche."
      },
      step4: {
        title: "Consegna",
        description: "Test, ottimizzazione e lancio del tuo progetto."
      },
      example: {
        title: "Esempio Concreto",
        description: "Ogni progetto segue questa metodologia per garantire risultati ottimali."
      },
      cta: {
        title: "Pronto a iniziare il tuo progetto?",
        description: "Parliamo della tua visione e vediamo come possiamo realizzarla insieme con la stessa attenzione ai dettagli.",
        button1: "Inizia un progetto",
        button2: "Visualizza il mio lavoro"
      }
    },
    // Services Section
    services: {
      title: "I miei servizi",
      subtitle: "Soluzioni complete",
      description: "Servizi adattati alle tue esigenze per dare vita ai tuoi progetti digitali.",
      webDev: {
        title: "Sviluppo Web",
        description: "Siti web moderni e performanti con le ultime tecnologie."
      },
      design: {
        title: "Design UI/UX",
        description: "Interfacce intuitive ed esperienze utente ottimizzate."
      },
      mobile: {
        title: "Applicazioni Mobili",
        description: "Applicazioni native e cross-platform per iOS e Android."
      },
      consulting: {
        title: "Consulenza Digitale",
        description: "Supporto strategico per i tuoi progetti digitali."
      }
    },
    // Testimonials Section
    testimonials: {
      title: "Testimonianze",
      subtitle: "Cosa dicono i miei clienti",
      description: "La soddisfazione del cliente è al centro del mio lavoro.",
      testimonial1: {
        content: "Theo ha trasformato la nostra visione in una realtà digitale eccezionale. Il suo professionalismo e creatività hanno superato le nostre aspettative.",
        author: "Marie Dubois",
        position: "Direttrice Marketing",
        company: "TechStart"
      },
      testimonial2: {
        content: "Lavoro notevole! L'attenzione ai dettagli e la qualità del codice sono impressionanti. Lo raccomando vivamente.",
        author: "Jean Martin",
        position: "CEO",
        company: "InnovCorp"
      },
      testimonial3: {
        content: "Collaborazione fluida e risultati oltre le nostre aspettative. Theo comprende perfettamente le sfide aziendali.",
        author: "Sophie Laurent",
        position: "Product Manager",
        company: "DigitalFlow"
      },
      testimonial4: {
        content: "Competenza tecnica solida e approccio creativo unico. Un partner di fiducia per i nostri progetti digitali.",
        author: "Pierre Moreau",
        position: "CTO",
        company: "WebSolutions"
      }
    },
    // Contact Section
    contact: {
      title: "Contattami",
      subtitle: "Parliamo del tuo progetto",
      description: "Pronto a dare vita alle tue idee? Contattami per discutere del tuo progetto.",
      form: {
        name: "Nome",
        email: "Email",
        subject: "Oggetto",
        message: "Messaggio",
        send: "Invia",
        sending: "Invio in corso...",
        success: "Messaggio inviato con successo!",
        error: "Errore nell'invio del messaggio."
      },
      info: {
        email: "theo@example.com",
        phone: "+33 6 12 34 56 78",
        location: "Parigi, Francia",
        availability: "Disponibile per nuovi progetti"
      }
    },
    // Footer
    footer: {
      description: "Tecnico dei media appassionato di innovazione digitale e creazione di esperienze utente eccezionali.",
      quickLinks: "Link rapidi",
      services: "Servizi",
      social: "Social media",
      copyright: "© 2024 Theo. Tutti i diritti riservati.",
      madeWith: "Fatto con ❤️ in Francia"
    },
    // Fake Chat
    fakeChat: {
      title: "Chat dal vivo",
      online: "Online",
      typing: "Sta scrivendo...",
      message1: "Ciao! Come posso aiutarti?",
      message2: "Sono disponibile per discutere del tuo progetto!",
      placeholder: "Digita il tuo messaggio...",
      send: "Invia"
    }
  },
  pt: {
    // Navigation
    nav: {
      home: "Início",
      about: "Sobre",
      portfolio: "Portfólio",
      services: "Serviços",
      contact: "Contato"
    },
    // Hero Section
    hero: {
      subtitle: "Soluções Criativas",
      greeting: "Olá, eu sou Theo",
      title1: "Soluções",
      title2: "criativas",
      title3: "versáteis",
      description: "Apaixonado pela criação digital, transformo suas ideias em experiências digitais memoráveis. Da concepção à realização, apoio você em todos os seus projetos criativos.",
      cta: "Descobrir meu trabalho",
      contact: "Entre em contato"
    },
    // About Section
    about: {
      title: "Sobre mim",
      subtitle: "Criativo apaixonado",
      description: "Técnico em mídia de formação com paixão pela inovação digital. Combino criatividade e técnica para dar vida aos seus projetos mais ambiciosos.",
      skills: "Habilidades",
      experience: "Experiência",
      education: "Educação",
      downloadCV: "Baixar CV"
    },
    // Portfolio Section
    portfolio: {
      title: "Meu trabalho",
      subtitle: "Portfólio criativo",
      description: "Descubra uma seleção dos meus projetos mais recentes, combinando criatividade e inovação técnica.",
      viewProject: "Ver projeto",
      liveDemo: "Demo ao vivo",
      sourceCode: "Código fonte",
      technologies: "Tecnologias utilizadas",
      category: "Categoria",
      client: "Cliente",
      year: "Ano",
      challenge: "Desafio",
      solution: "Solução",
      results: "Resultados"
    },
    // Process Section
    process: {
      title: "Meu processo",
      subtitle: "Metodologia comprovada",
      description: "Uma abordagem estruturada para garantir o sucesso dos seus projetos.",
      step1: {
        title: "Análise",
        description: "Compreensão profunda das suas necessidades e objetivos."
      },
      step2: {
        title: "Design",
        description: "Criação de mockups e protótipos interativos."
      },
      step3: {
        title: "Desenvolvimento",
        description: "Realização técnica com as melhores práticas."
      },
      step4: {
        title: "Entrega",
        description: "Testes, otimização e lançamento do seu projeto."
      },
      example: {
        title: "Exemplo Concreto",
        description: "Cada projeto segue esta metodologia para garantir resultados ótimos."
      },
      cta: {
        title: "Pronto para começar seu projeto?",
        description: "Vamos falar sobre sua visão e ver como podemos realizá-la juntos com a mesma atenção aos detalhes.",
        button1: "Iniciar um projeto",
        button2: "Ver meu trabalho"
      }
    },
    // Services Section
    services: {
      title: "Meus serviços",
      subtitle: "Soluções completas",
      description: "Serviços adaptados às suas necessidades para dar vida aos seus projetos digitais.",
      webDev: {
        title: "Desenvolvimento Web",
        description: "Sites modernos e performáticos com as últimas tecnologias."
      },
      design: {
        title: "Design UI/UX",
        description: "Interfaces intuitivas e experiências de usuário otimizadas."
      },
      mobile: {
        title: "Aplicações Móveis",
        description: "Aplicações nativas e multiplataforma para iOS e Android."
      },
      consulting: {
        title: "Consultoria Digital",
        description: "Suporte estratégico para seus projetos digitais."
      }
    },
    // Testimonials Section
    testimonials: {
      title: "Depoimentos",
      subtitle: "O que dizem meus clientes",
      description: "A satisfação do cliente está no centro do meu trabalho.",
      testimonial1: {
        content: "Theo transformou nossa visão em uma realidade digital excepcional. Seu profissionalismo e criatividade superaram nossas expectativas.",
        author: "Marie Dubois",
        position: "Diretora de Marketing",
        company: "TechStart"
      },
      testimonial2: {
        content: "Trabalho notável! A atenção aos detalhes e a qualidade do código são impressionantes. Recomendo vivamente.",
        author: "Jean Martin",
        position: "CEO",
        company: "InnovCorp"
      },
      testimonial3: {
        content: "Colaboração fluida e resultados além das nossas expectativas. Theo compreende perfeitamente os desafios empresariais.",
        author: "Sophie Laurent",
        position: "Gerente de Produto",
        company: "DigitalFlow"
      },
      testimonial4: {
        content: "Expertise técnica sólida e abordagem criativa única. Um parceiro de confiança para nossos projetos digitais.",
        author: "Pierre Moreau",
        position: "CTO",
        company: "WebSolutions"
      }
    },
    // Contact Section
    contact: {
      title: "Entre em contato",
      subtitle: "Vamos falar sobre seu projeto",
      description: "Pronto para dar vida às suas ideias? Entre em contato para discutir seu projeto.",
      form: {
        name: "Nome",
        email: "Email",
        subject: "Assunto",
        message: "Mensagem",
        send: "Enviar",
        sending: "Enviando...",
        success: "Mensagem enviada com sucesso!",
        error: "Erro ao enviar mensagem."
      },
      info: {
        email: "theo@example.com",
        phone: "+33 6 12 34 56 78",
        location: "Paris, França",
        availability: "Disponível para novos projetos"
      }
    },
    // Footer
    footer: {
      description: "Técnico em mídia apaixonado pela inovação digital e criação de experiências de usuário excepcionais.",
      quickLinks: "Links rápidos",
      services: "Serviços",
      social: "Redes sociais",
      copyright: "© 2024 Theo. Todos os direitos reservados.",
      madeWith: "Feito com ❤️ na França"
    },
    // Fake Chat
    fakeChat: {
      title: "Chat ao vivo",
      online: "Online",
      typing: "Digitando...",
      message1: "Olá! Como posso ajudá-lo?",
      message2: "Estou disponível para discutir seu projeto!",
      placeholder: "Digite sua mensagem...",
      send: "Enviar"
    }
  },
  sq: {
    // Navigation
    nav: {
      home: "Kryefaqja",
      about: "Rreth meje",
      portfolio: "Portofoli",
      services: "Shërbimet",
      contact: "Kontakti"
    },
    // Hero Section
    hero: {
      subtitle: "Zgjidhje Kreative",
      greeting: "Përshëndetje, unë jam Theo",
      title1: "Zgjidhje",
      title2: "kreative",
      title3: "të shumëllojshme",
      description: "I pasionuar për krijimin dixhital, i transformoj idetë tuaja në përvojë dixhitale të paharrueshme. Nga konceptimi deri te realizimi, ju mbështes në të gjitha projektet tuaja kreative.",
      cta: "Zbuloni punën time",
      contact: "Kontaktoni me mua"
    },
    // About Section
    about: {
      title: "Rreth meje",
      subtitle: "Kreativ i pasionuar",
      description: "Teknik mediash me formim me pasion për inovacionin dixhital. Kombinoj kreativitetin dhe teknikën për t'u dhënë jetë projekteve tuaja më ambicioze.",
      skills: "Aftësitë",
      experience: "Përvoja",
      education: "Arsimi",
      downloadCV: "Shkarkoni CV"
    },
    // Portfolio Section
    portfolio: {
      title: "Puna ime",
      subtitle: "Portofol kreativ",
      description: "Zbuloni një përzgjedhje të projekteve të mia më të fundit, duke kombinuar kreativitetin dhe inovacionin teknik.",
      viewProject: "Shikoni projektin",
      liveDemo: "Demo e drejtpërdrejtë",
      sourceCode: "Kodi burimor",
      technologies: "Teknologjitë e përdorura",
      category: "Kategoria",
      client: "Klienti",
      year: "Viti",
      challenge: "Sfida",
      solution: "Zgjidhja",
      results: "Rezultatet"
    },
    // Process Section
    process: {
      title: "Procesi im",
      subtitle: "Metodologji e provuar",
      description: "Një qasje e strukturuar për të garantuar suksesin e projekteve tuaja.",
      step1: {
        title: "Analiza",
        description: "Kuptim i thellë i nevojave dhe objektivave tuaja."
      },
      step2: {
        title: "Dizajni",
        description: "Krijimi i maketave dhe prototipeve interaktive."
      },
      step3: {
        title: "Zhvillimi",
        description: "Realizimi teknik me praktikat më të mira."
      },
      step4: {
        title: "Dorëzimi",
        description: "Testime, optimizim dhe lansimi i projektit tuaj."
      },
      example: {
        title: "Shembull Konkret",
        description: "Çdo projekt ndjek këtë metodologji për të garantuar rezultate optimale."
      },
      cta: {
        title: "Gati të filloni projektin tuaj?",
        description: "Le të flasim për vizionin tuaj dhe të shohim se si mund ta realizojmë së bashku me të njëjtën vëmendje ndaj detajeve.",
        button1: "Filloni një projekt",
        button2: "Shikoni punën time"
      }
    },
    // Services Section
    services: {
      title: "Shërbimet e mia",
      subtitle: "Zgjidhje të plota",
      description: "Shërbime të përshtatura për nevojat tuaja për t'u dhënë jetë projekteve tuaja dixhitale.",
      webDev: {
        title: "Zhvillimi Web",
        description: "Faqe interneti moderne dhe performante me teknologjitë më të fundit."
      },
      design: {
        title: "Dizajni UI/UX",
        description: "Ndërfaqe intuitive dhe përvojë të optimizuara të përdoruesit."
      },
      mobile: {
        title: "Aplikacione Mobile",
        description: "Aplikacione native dhe cross-platform për iOS dhe Android."
      },
      consulting: {
        title: "Konsulencë Dixhitale",
        description: "Mbështetje strategjike për projektet tuaja dixhitale."
      }
    },
    // Testimonials Section
    testimonials: {
      title: "Dëshmi",
      subtitle: "Çfarë thonë klientët e mi",
      description: "Kënaqësia e klientit është në zemër të punës sime.",
      testimonial1: {
        content: "Theo e transformoi vizionin tonë në një realitet dixhital të jashtëzakonshëm. Profesionalizmi dhe kreativiteti i tij i kaluan pritshmëritë tona.",
        author: "Marie Dubois",
        position: "Drejtore Marketingu",
        company: "TechStart"
      },
      testimonial2: {
        content: "Punë e shkëlqyer! Vëmendja ndaj detajeve dhe cilësia e kodit janë mbresëlënëse. E rekomandoj fuqimisht.",
        author: "Jean Martin",
        position: "CEO",
        company: "InnovCorp"
      },
      testimonial3: {
        content: "Bashkëpunim i rrjedhshëm dhe rezultate përtej pritshmërive tona. Theo i kupton përsosur sfidat e biznesit.",
        author: "Sophie Laurent",
        position: "Menaxher Produkti",
        company: "DigitalFlow"
      },
      testimonial4: {
        content: "Ekspertizë teknike e fortë dhe qasje kreative unike. Partner i besueshëm për projektet tona dixhitale.",
        author: "Pierre Moreau",
        position: "CTO",
        company: "WebSolutions"
      }
    },
    // Contact Section
    contact: {
      title: "Kontaktoni me mua",
      subtitle: "Le të flasim për projektin tuaj",
      description: "Gati t'u jepni jetë ideve tuaja? Kontaktoni me mua për të diskutuar projektin tuaj.",
      form: {
        name: "Emri",
        email: "Email",
        subject: "Tema",
        message: "Mesazhi",
        send: "Dërgo",
        sending: "Duke dërguar...",
        success: "Mesazhi u dërgua me sukses!",
        error: "Gabim në dërgimin e mesazhit."
      },
      info: {
        email: "theo@example.com",
        phone: "+33 6 12 34 56 78",
        location: "Paris, Francë",
        availability: "I disponueshëm për projekte të reja"
      }
    },
    // Footer
    footer: {
      description: "Teknik mediash i pasionuar për inovacionin dixhital dhe krijimin e përvojave të jashtëzakonshme të përdoruesit.",
      quickLinks: "Lidhje të shpejta",
      services: "Shërbimet",
      social: "Media sociale",
      copyright: "© 2024 Theo. Të gjitha të drejtat e rezervuara.",
      madeWith: "Bërë me ❤️ në Francë"
    },
    // Fake Chat
    fakeChat: {
      title: "Chat i drejtpërdrejtë",
      online: "Online",
      typing: "Duke shkruar...",
      message1: "Përshëndetje! Si mund t'ju ndihmoj?",
      message2: "Jam i disponueshëm për të diskutuar projektin tuaj!",
      placeholder: "Shkruani mesazhin tuaj...",
      send: "Dërgo"
    }
  }
};

// Create Context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider Component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const [theme, setTheme] = useState<Theme>('light');

  // Translation function
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key; // Return the key if translation is not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      theme,
      setTheme,
      t
    }}>
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