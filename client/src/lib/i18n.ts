import { useState, useEffect } from 'react';

export type Language = 'en' | 'nl';

export const translations = {
  en: {
    // Common
    common: {
      from: 'From',
      days: 'days',
    },
    // Navigation
    nav: {
      services: 'Services',
      whyUs: 'Why Us',
      pricing: 'Pricing',
      faq: 'FAQ',
      process: 'Process',
      contact: 'Contact',
      getStarted: 'Get Started',
    },
    // Hero Section
    hero: {
      title: 'From Idea to',
      titleHighlight: 'App',
      titleEnd: 'in Days',
      subtitle: 'We build professional applications for entrepreneurs — powered by AI, built with industry best practices, and ready to scale.',
      shareIdea: 'Share Your Idea',
      watchDemo: 'Watch Demo',
      features: {
        delivery: 'From 7-day delivery',
        production: 'Production ready',
        ai: 'AI-powered',
      },
    },
    // Stats Section
    stats: {
      title: 'Proven Results',
      subtitle: 'Numbers that speak louder than words — see why startups choose us for their application development.',
      clients: 'Happy Clients',
      clientsDesc: 'Entrepreneurs who trusted us with their vision',
      average: 'Day Average',
      averageDesc: 'From concept to working application',
      funding: 'Funding Raised',
      fundingDesc: 'By our clients using our applications',
      rating: 'Client Rating',
      ratingDesc: 'Average satisfaction score',
      delivery: 'On-time Delivery',
      response: 'Response Time',
      support: 'Days Free Support',
    },
    // Services Section
    services: {
      valueTitle: 'Built for Founders, Dreamers & Doers',
      valueSubtitle: 'You bring the idea — we bring the technical power. Whether you\'re validating a concept, pitching investors, or launching to your first users.',
      validate: {
        title: 'Validate Your Concept',
        description: 'Test your ideas quickly with a professional application that lets you gather real user feedback and iterate fast.',
      },
      impress: {
        title: 'Impress Investors',
        description: 'Show them a working product, not just slides. Demonstrate market fit with a functional prototype they can interact with.',
      },
      launch: {
        title: 'Launch with Confidence',
        description: 'Scalable code that grows with your success. Built with modern best practices for easy maintenance and future development.',
      },
      talkIdea: 'Let\'s Talk About Your Idea',
      whatWeBuild: 'What We Build',
      whatWeBuildSubtitle: 'Choose the perfect solution for your project — from quick concept validation to full-scale platform development.',
      mvp: {
        title: 'Application Development',
        price: 'From €5,000',
        description: 'Your first version — lean, functional and designed for rapid testing. Get to market fast with a product that validates your concept and attracts investors.',
        features: [
          'Rapid prototyping & user feedback integration',
          'Core features development & market validation',
          'Investor-ready documentation & scalable architecture',
          '7-day delivery guarantee'
        ],
      },
      web: {
        title: 'Web Development',
        price: 'From €2,500',
        description: 'Custom web applications built with modern technologies. Business platforms, marketplaces, portals — whatever your startup needs to succeed.',
        features: [
          'Custom design & development with modern technologies',
          'Responsive & mobile-friendly optimization',
          'Search engine optimization & performance tuning',
          'Security best practices & deployment'
        ],
      },
      landing: {
        title: 'Landing Pages & Websites',
        price: 'From €1,500',
        description: 'Show your product, collect leads and build trust from day one. High-converting pages that turn visitors into customers.',
        features: [
          'Conversion-optimized design & copywriting',
          'Lead capture forms & analytics integration',
          'A/B testing ready & mobile optimization',
          '3-day turnaround for landing pages'
        ],
      },
      consulting: {
        title: 'Technical Consulting',
        price: 'From €150/hour',
        description: 'Expert guidance for your technical challenges. From architecture review to performance optimization — get the advice you need.',
        features: [
          'Technical strategy & architecture review',
          'Code review & performance optimization',
          'Security assessment & best practices',
          'Flexible hourly or project-based pricing'
        ],
      },
      techApproach: {
        title: 'Why Choose Our Development Approach?',
        subtitle: 'Modern architecture, proven frameworks, and battle-tested deployment strategies.',
        fastDevelopment: {
          title: 'Fast Development',
          description: 'AI-enhanced development process with modern technologies for rapid prototyping and deployment.'
        },
        productionReady: {
          title: 'Production Ready',
          description: 'Enterprise-grade code with security, performance, and scalability built-in from day one.'
        },
        cloudNative: {
          title: 'Cloud Native',
          description: 'Built for the cloud with containerization, auto-scaling, and zero-downtime deployments.'
        }
      }
    },
    // Why Us Section
    whyUs: {
      title: 'Why Choose Vibe Coding?',
      subtitle: 'We combine speed, quality and transparency for entrepreneurs serious about their application',
      fastDelivery: {
        title: 'Fast Delivery',
        description: 'From idea to working application in just 7 days. No months of waiting, but immediate results.',
      },
      professionalQuality: {
        title: 'Professional Quality',
        description: 'Enterprise-grade code with modern technologies, testing and documentation. Ready for production and scaling.',
      },
      personalApproach: {
        title: 'Personal Approach',
        description: 'Direct communication with the developers. No middlemen, just clear updates.',
      },
      reliablePartner: {
        title: 'Reliable Partner',
        description: '100+ satisfied clients and 95% on-time delivery. Your success is our priority.',
      },
      aiAccelerated: {
        title: 'AI-Accelerated',
        description: 'Advanced AI tools for faster development without compromising code quality.',
      },
      transparentPricing: {
        title: 'Transparent Pricing',
        description: 'Fixed prices, no surprises. You know exactly what you get and what it costs.',
      },
    },
    // Process Section
    process: {
      title: 'Our Development Process',
      subtitle: 'From idea to live application in 7 days — transparent, professional and result-oriented',
      step1: {
        title: 'Intake Meeting',
        description: 'Free 30-minute consultation to discuss your idea, goals and technical requirements.',
        duration: '30 minutes',
        details: ['Define project scope', 'Technical analysis', 'Set timeline']
      },
      step2: {
        title: 'Design & Planning',
        description: 'Detailed plan with wireframes, technical architecture and project roadmap.',
        duration: 'From 1-2 days',
        details: ['UI/UX wireframes', 'Database design', 'System specifications']
      },
      step3: {
        title: 'Development',
        description: 'Professional development with daily updates and intermediate reviews.',
        duration: 'From 3-7 days',
        details: ['Frontend & Backend', 'Testing & Quality Assurance', 'Performance optimization']
      },
      step4: {
        title: 'Launch & Handover',
        description: 'Live deployment with comprehensive documentation and training for your team.',
        duration: '1 day',
        details: ['Production deployment', 'Documentation', '30 days support']
      },
    },
    // Pricing Section
    pricing: {
      title: 'Transparent Pricing',
      subtitle: 'Choose the perfect package for your project. No hidden fees, no surprises — just clear pricing for exceptional results.',
      popular: 'Most Popular',
      getStarted: 'Get Started with',
      custom: 'Need something custom? Let\'s discuss your specific requirements.',
      customQuote: 'Request Custom Quote',
      plans: {
        mvpPrototype: {
          name: 'Application Prototype',
          description: 'Rapid prototype with core functionality validation',
                      features: [
              'Interactive prototype with core user flows',
              'Secure authentication system',
              'Basic data operations',
              'Responsive design (mobile-first)',
              'Search engine optimization & meta tags',
              'Analytics integration',
              '3 deployment environments',
            'Source code documentation'
          ]
        },
        productionMvp: {
          name: 'Production Application',
          description: 'Production-ready application with enterprise architecture',
                      features: [
              'Full-stack modern application',
              'Advanced database with optimized queries',
              'User authentication & authorization',
              'Admin dashboard with analytics',
              'Professional API with rate limiting',
              'Automated testing & quality assurance',
              'Automated deployment pipeline',
              'Performance monitoring & tracking'
            ]
        },
        scaleReady: {
          name: 'Scale-Ready Platform',
          description: 'Enterprise-grade platform ready for millions of users',
                      features: [
              'Microservices architecture',
              'Multi-tenant database design',
              'Real-time features & live updates',
              'Payment processing integration',
              'Advanced caching & content delivery',
              'Auto-scaling infrastructure',
              'Security audit & penetration testing',
              '30 days dedicated support'
            ]
        }
      }
    },
    // Testimonials
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Success stories from entrepreneurs who trusted us with their vision',
      trusted: 'Trusted by 100+ startups and entrepreneurs',
    },
    // FAQ
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Get answers to common questions about our development process',
      questions: {
        deployment: {
          question: "What's your deployment process?",
          answer: "Full automated deployment pipeline: automated testing, security scanning, deployment to staging/production environments. Zero-downtime deployments with health checks and rollback capabilities. Infrastructure managed with modern tools."
        },
        techStack: {
          question: "Which technologies do you recommend for scalability?",
          answer: "Modern web technologies with advanced databases for most projects. For enterprise: microservices architecture, advanced caching, message queues, comprehensive monitoring. All containerized with modern orchestration."
        },
        database: {
          question: "How do you handle database changes and rollbacks?",
          answer: "Schema versioning with modern tools, automated migration scripts, database backups before every deployment. Rollback strategies include blue-green deployments and database transaction logs. Production data is never at risk."
        },
        monitoring: {
          question: "What's included in your monitoring and observability?",
          answer: "Application performance monitoring, error tracking, log aggregation, uptime monitoring (99.9% SLA), real-time alerts via modern communication tools. Custom dashboards for business metrics."
        },
        quality: {
          question: "How do you ensure code quality and security?",
          answer: "Automated code reviews, 90%+ test coverage, dependency vulnerability scanning, comprehensive security testing, industry compliance. Every commit goes through quality checks, formatting, and security verification before merge."
        }
      }
    },
    // Contact
    contact: {
      title: 'Ready to Build Your Application?',
      subtitle: 'Let\'s discuss how we can bring your ideas to life. Schedule a free consultation and get a custom quote for your project.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        company: 'Company',
        projectType: 'Project Type',
        projectTypePlaceholder: 'Select project type',
        budget: 'Project Budget',
        budgetPlaceholder: 'Select your budget range',
        message: 'Tell us about your project',
        messagePlaceholder: 'Describe your idea, goals, and timeline...',
        newsletter: 'Subscribe to our newsletter for startup tips and development insights',
        submit: 'Send My Project Details',
        sending: 'Sending...',
      },
      call: 'Prefer to talk directly? Book a free consultation:',
      schedule: 'Schedule Free Call',
      info: {
        response: '24h Response Time',
        nda: 'NDA Available',
        consultation: 'Free Consultation',
      },
    },
    // Footer
    footer: {
      description: 'We build professional applications for entrepreneurs — powered by AI, built with industry best practices, and ready to scale. From idea to launch in days, not months.',
      services: 'Services',
      company: 'Company',
      about: 'About Us',
      process: 'Our Process',
      caseStudies: 'Case Studies',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved.',
    },
    // Toast Messages
    toast: {
      success: {
        title: 'Message sent successfully!',
        description: 'We\'ll get back to you within 24 hours.',
      },
      error: {
        title: 'Error sending message',
        description: 'Please try again later.',
      },
    },
    // Floating CTA
    floating: {
      ready: 'Ready to Start?',
      mvp7days: 'Get your application from 7 days',
      shareIdea: 'Share Your Idea',
      bookCall: 'Book Free Call',
      consultation: 'Free consultation',
      response: '24h response',
      mobile: {
        ready: 'Ready to build your application?',
        pricing: 'From €2,500 • From 7-day delivery',
        getStarted: 'Get Started',
      },
    },
  },
  nl: {
    // Common
    common: {
      from: 'Vanaf',
      days: 'dagen',
    },
    // Navigation
    nav: {
      services: 'Diensten',
      whyUs: 'Waarom Ons',
      pricing: 'Prijzen',
      faq: 'FAQ',
      process: 'Proces',
      contact: 'Contact',
      getStarted: 'Aan de Slag',
    },
    // Hero Section
    hero: {
      title: 'Van Idee naar',
      titleHighlight: 'App',
      titleEnd: 'in Dagen',
      subtitle: 'Wij bouwen professionele applicaties voor ondernemers — aangedreven door AI, gebouwd met industry best practices, en klaar om te schalen.',
      shareIdea: 'Deel Je Idee',
      watchDemo: 'Bekijk Demo',
      features: {
        delivery: 'Vanaf 7-dagen levering',
        production: 'Productie klaar',
        ai: 'AI-gedreven',
      },
    },
    // Stats Section
    stats: {
      title: 'Bewezen Resultaten',
      subtitle: 'Cijfers die luider spreken dan woorden — zie waarom startups voor ons kiezen voor hun applicatie ontwikkeling.',
      clients: 'Tevreden Klanten',
      clientsDesc: 'Ondernemers die ons vertrouwden met hun visie',
      average: 'Dagen Gemiddeld',
      averageDesc: 'Van concept tot werkende applicatie',
      funding: 'Financiering Opgehaald',
      fundingDesc: 'Door onze klanten met onze applicaties',
      rating: 'Klant Waardering',
      ratingDesc: 'Gemiddelde tevredenheidsscore',
      delivery: 'Op Tijd Geleverd',
      response: 'Reactietijd',
      support: 'Dagen Gratis Support',
    },
    // Services Section
    services: {
      valueTitle: 'Gebouwd voor Oprichters, Dromers & Doeners',
      valueSubtitle: 'Jij brengt het idee — wij brengen de technische kracht. Of je nu een concept valideert, investeerders pitcht, of lanceert naar je eerste gebruikers.',
      validate: {
        title: 'Valideer Je Concept',
        description: 'Test je ideeën snel met een professionele MVP waarmee je echte gebruikersfeedback kunt verzamelen en snel kunt itereren.',
      },
      impress: {
        title: 'Imponeer Investeerders',
        description: 'Laat ze een werkend product zien, geen slides. Demonstreer marktfit met een functioneel prototype waarmee ze kunnen interacteren.',
      },
      launch: {
        title: 'Launch met Vertrouwen',
        description: 'Schaalbare code die groeit met je succes. Gebouwd met moderne best practices voor eenvoudig onderhoud en toekomstige ontwikkeling.',
      },
      talkIdea: 'Laten We Praten Over Je Idee',
      whatWeBuild: 'Wat Wij Bouwen',
      whatWeBuildSubtitle: 'Kies de perfecte oplossing voor je project — van snelle MVP validatie tot volledige platformontwikkeling.',
      mvp: {
        title: 'MVP Ontwikkeling',
        price: 'Vanaf €5.000',
        description: 'Je eerste versie — lean, functioneel en ontworpen voor snelle testing. Kom snel op de markt met een product dat je concept valideert en investeerders aantrekt.',
        features: [
          'Snelle prototyping & gebruikersfeedback integratie',
          'Kernfuncties ontwikkeling & marktvalidatie',
          'Investeerder-klare documentatie & schaalbare architectuur',
          '7-dagen levering garantie'
        ],
      },
      web: {
        title: 'Web Ontwikkeling',
        price: 'Vanaf €2.500',
        description: 'Aangepaste webapplicaties gebouwd met moderne technologieën. SaaS platforms, marktplaatsen, portalen — wat je startup ook nodig heeft om te slagen.',
        features: [
          'Aangepast ontwerp & ontwikkeling met moderne tech stack',
          'Responsieve & mobiel-vriendelijke optimalisatie',
          'SEO optimalisatie & prestatie tuning',
          'Beveiliging best practices & deployment'
        ],
      },
      landing: {
        title: 'Landing Pages & Websites',
        price: 'Vanaf €1.500',
        description: 'Toon je product, verzamel leads en bouw vertrouwen op vanaf dag één. Hoog-converterende pagina\'s die bezoekers omzetten naar klanten.',
        features: [
          'Conversie-geoptimaliseerd ontwerp & copywriting',
          'Lead capture formulieren & analytics integratie',
          'A/B testing klaar & mobiele optimalisatie',
          '3-dagen doorlooptijd voor landing pages'
        ],
      },
      consulting: {
        title: 'Technische Consultancy',
        price: 'Vanaf €150/uur',
        description: 'Expert begeleiding voor je technische uitdagingen. Van architectuur review tot prestatie optimalisatie — krijg het advies dat je nodig hebt.',
        features: [
          'Technische strategie & architectuur review',
          'Code review & prestatie optimalisatie',
          'Beveiliging assessment & best practices',
          'Flexibele uur- of project-gebaseerde prijzen'
        ],
      },
      techApproach: {
        title: 'Waarom Kiezen voor Onze Tech Aanpak?',
        subtitle: 'Moderne architectuur, bewezen frameworks en geteste deployment strategieën.',
        fastDevelopment: {
          title: 'Snelle Ontwikkeling',
          description: 'AI-verbeterd ontwikkelingsproces met moderne frameworks voor snelle prototyping en deployment.'
        },
        productionReady: {
          title: 'Productie Klaar',
          description: 'Enterprise-grade code met beveiliging, performance en schaalbaarheid ingebouwd vanaf dag één.'
        },
        cloudNative: {
          title: 'Cloud Native',
          description: 'Gebouwd voor de cloud met containerisatie, auto-scaling en zero-downtime deployments.'
        }
      }
    },
    // Why Us Section
    whyUs: {
      title: 'Waarom Vibe Coding?',
      subtitle: 'Wij combineren snelheid, kwaliteit en transparantie voor ondernemers die serieus zijn over hun MVP',
      fastDelivery: {
        title: 'Snelle Levering',
        description: 'Van idee tot werkende MVP in slechts 7 dagen. Geen maanden wachten, maar directe resultaten.',
      },
      professionalQuality: {
        title: 'Professionele Kwaliteit',
        description: 'Enterprise-grade code met TypeScript, testing en documentatie. Klaar voor productie en schaling.',
      },
      personalApproach: {
        title: 'Persoonlijke Benadering',
        description: 'Directe communicatie met de developers. Geen tussenpersonen, alleen heldere updates.',
      },
      reliablePartner: {
        title: 'Betrouwbare Partner',
        description: '100+ tevreden klanten en 95% on-time delivery. Jouw succes is onze prioriteit.',
      },
      aiAccelerated: {
        title: 'AI-Versneld',
        description: 'Geavanceerde AI-tools voor snellere ontwikkeling zonder concessies aan codekwaliteit.',
      },
      transparentPricing: {
        title: 'Transparante Pricing',
        description: 'Vaste prijzen, geen verrassingen. Je weet vooraf exact wat je krijgt en wat het kost.',
      },
    },
    // Process Section
    process: {
      title: 'Ons Ontwikkelproces',
      subtitle: 'Van idee tot live product in 7 dagen — transparant, professioneel en resultaatgericht',
      step1: {
        title: 'Intake Gesprek',
        description: 'Gratis 30-minuten gesprek om je idee, doelen en technische vereisten te bespreken.',
        duration: '30 minuten',
        details: ['Projectscope bepalen', 'Technische analyse', 'Tijdlijn vaststellen']
      },
      step2: {
        title: 'Ontwerp & Planning',
        description: 'Uitgewerkt plan met wireframes, technische architectuur en project roadmap.',
        duration: 'Vanaf 1-2 dagen',
        details: ['UI/UX wireframes', 'Database ontwerp', 'API specificaties']
      },
      step3: {
        title: 'Ontwikkeling',
        description: 'Professionele ontwikkeling met dagelijkse updates en tussentijdse reviews.',
        duration: 'Vanaf 3-7 dagen',
        details: ['Frontend & Backend', 'Testing & QA', 'Performance optimalisatie']
      },
      step4: {
        title: 'Lancering & Overdracht',
        description: 'Live deployment met uitgebreide documentatie en training voor jouw team.',
        duration: '1 dag',
        details: ['Production deployment', 'Documentatie', '30 dagen support']
      },
      cta: {
        title: 'Klaar om Je Project te Starten?',
        subtitle: 'Boek een gratis consultatie en krijg je aangepaste project tijdlijn vandaag.',
        button: 'Boek Gratis Strategie Gesprek',
      },
    },
    // Pricing Section
    pricing: {
      title: 'Transparante Prijzen',
      subtitle: 'Kies het perfecte pakket voor je project. Geen verborgen kosten, geen verrassingen — alleen duidelijke prijzen voor uitzonderlijke resultaten.',
      popular: 'Meest Populair',
      getStarted: 'Begin met',
      custom: 'Iets aangepasts nodig? Laten we je specifieke vereisten bespreken.',
      customQuote: 'Vraag Aangepaste Offerte',
      plans: {
        mvpPrototype: {
          name: 'MVP Prototype',
          description: 'Snelle prototype met kernfunctionaliteit validatie',
          features: [
            'Interactieve prototype met kern gebruikersflows',
            'Authenticatie systeem (OAuth2)',
            'Basis CRUD operaties',
            'Responsive design (mobile-first)',
            'SEO optimalisatie & meta tags',
            'Analytics integratie (GA4)',
            '3 deployment omgevingen',
            'Broncode documentatie'
          ]
        },
        productionMvp: {
          name: 'Productie MVP',
          description: 'Productie-klare MVP met enterprise architectuur',
          features: [
            'Full-stack TypeScript applicatie',
            'PostgreSQL met geoptimaliseerde queries',
            'Gebruikers authenticatie & autorisatie',
            'Admin dashboard met analytics',
            'REST/GraphQL API met rate limiting',
            'Geautomatiseerde testing (Jest + Cypress)',
            'CI/CD pipeline (GitHub Actions)',
            'Performance monitoring (Sentry)'
          ]
        },
        scaleReady: {
          name: 'Schaal-Klare Platform',
          description: 'Enterprise-grade platform klaar voor miljoenen gebruikers',
          features: [
            'Microservices architectuur',
            'Multi-tenant database design',
            'Real-time features (WebSockets)',
            'Betaling verwerking (Stripe/PayPal)',
            'Geavanceerde caching (Redis + CDN)',
            'Auto-scaling infrastructuur',
            'Security audit & penetratie testing',
            '30 dagen toegewijde support'
          ]
        }
      }
    },
    // Testimonials
    testimonials: {
      title: 'Wat Onze Klanten Zeggen',
      subtitle: 'Succesverhalen van ondernemers die ons vertrouwden met hun visie',
      trusted: 'Vertrouwd door 100+ startups en ondernemers',
    },
    // FAQ
    faq: {
      title: 'Veelgestelde Vragen',
      subtitle: 'Krijg antwoorden op veelgestelde vragen over ons ontwikkelingsproces',
      questions: {
        deployment: {
          question: "Wat is jullie deployment pipeline architectuur?",
          answer: "Volledige CI/CD met GitHub Actions: geautomatiseerde testing (Jest + Cypress), security scanning (Snyk), deployment naar staging/productie omgevingen. Zero-downtime deployments met health checks en rollback mogelijkheden. Infrastructure as Code met Terraform."
        },
        techStack: {
          question: "Welke tech stack raden jullie aan voor schaalbaarheid?",
          answer: "Next.js + TypeScript + PostgreSQL + Docker voor de meeste projecten. Voor enterprise: microservices met Node.js/Go, Redis caching, message queues (RabbitMQ), monitoring (Grafana + Prometheus). Alles gecontaineriseerd met Kubernetes orchestration."
        },
        database: {
          question: "Hoe gaan jullie om met database migraties en rollbacks?",
          answer: "Schema versioning met Drizzle ORM, geautomatiseerde migratie scripts, database backups voor elke deployment. Rollback strategieën omvatten blue-green deployments en database transaction logs. Productie data loopt nooit risico."
        },
        monitoring: {
          question: "Wat is inbegrepen in jullie monitoring en observability?",
          answer: "Application performance monitoring (APM), error tracking (Sentry), log aggregatie (ELK stack), uptime monitoring (99.9% SLA), real-time alerts via Slack/PagerDuty. Aangepaste dashboards voor business metrics."
        },
        quality: {
          question: "Hoe zorgen jullie voor code kwaliteit en beveiliging?",
          answer: "Geautomatiseerde code reviews, 90%+ test coverage, dependency vulnerability scanning, SAST/DAST security testing, SOC 2 compliance. Elke commit gaat door linting, formatting en security checks voor merge."
        }
      }
    },
    // Contact
    contact: {
      title: 'Klaar om Je MVP te Bouwen?',
      subtitle: 'Laten we bespreken hoe we je ideeën tot leven kunnen brengen. Plan een gratis consultatie en krijg een aangepaste offerte voor je project.',
      form: {
        name: 'Volledige Naam',
        email: 'E-mailadres',
        company: 'Bedrijf',
        projectType: 'Project Type',
        projectTypePlaceholder: 'Selecteer project type',
        budget: 'Project Budget',
        budgetPlaceholder: 'Selecteer je budget bereik',
        message: 'Vertel ons over je project',
        messagePlaceholder: 'Beschrijf je idee, doelen en tijdlijn...',
        newsletter: 'Abonneer op onze nieuwsbrief voor startup tips en ontwikkelingsinzichten',
        submit: 'Verstuur Mijn Project Details',
        sending: 'Verzenden...',
      },
      call: 'Liever direct praten? Boek een gratis consultatie:',
      schedule: 'Plan Gratis Gesprek',
      info: {
        response: '24u Reactietijd',
        nda: 'NDA Beschikbaar',
        consultation: 'Gratis Consultatie',
      },
    },
    // Footer
    footer: {
      description: 'Wij bouwen MVP\'s voor ondernemers — aangedreven door AI, gebouwd met best practices, en klaar om te schalen. Van idee tot lancering in dagen, niet maanden.',
      services: 'Diensten',
      company: 'Bedrijf',
      about: 'Over Ons',
      process: 'Ons Proces',
      caseStudies: 'Case Studies',
      contact: 'Contact',
      privacy: 'Privacybeleid',
      terms: 'Servicevoorwaarden',
      rights: 'Alle rechten voorbehouden.',
    },
    // Toast Messages
    toast: {
      success: {
        title: 'Bericht succesvol verzonden!',
        description: 'We nemen binnen 24 uur contact met je op.',
      },
      error: {
        title: 'Fout bij verzenden bericht',
        description: 'Probeer het later opnieuw.',
      },
    },
    // Floating CTA
    floating: {
      ready: 'Klaar om te Beginnen?',
      mvp7days: 'Krijg je MVP vanaf 7 dagen',
      shareIdea: 'Deel Je Idee',
      bookCall: 'Boek Gratis Gesprek',
      consultation: 'Gratis consultatie',
      response: '24u reactie',
      mobile: {
        ready: 'Klaar om je MVP te bouwen?',
        pricing: 'Vanaf €2.500 • Vanaf 7-dagen levering',
        getStarted: 'Aan de Slag',
      },
    },
  },
};

// Global language state
let globalLanguage: Language = 'nl';
let globalListeners: Array<() => void> = [];

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(globalLanguage);

  useEffect(() => {
    const listener = () => setLanguage(globalLanguage);
    globalListeners.push(listener);
    
    return () => {
      globalListeners = globalListeners.filter(l => l !== listener);
    };
  }, []);

  const switchLanguage = (newLanguage: Language) => {
    globalLanguage = newLanguage;
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
    // Notify all components
    globalListeners.forEach(listener => listener());
  };

  const t = translations[language];

  return { language, switchLanguage, t };
}

// Initialize from localStorage
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('language');
  if (saved && (saved === 'en' || saved === 'nl')) {
    globalLanguage = saved;
  }
}