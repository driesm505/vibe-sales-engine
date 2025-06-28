import { useState, useEffect } from 'react';

export type Language = 'en' | 'nl';

export const translations = {
  en: {
    // Navigation
    nav: {
      services: 'Services',
      testimonials: 'Testimonials',
      pricing: 'Pricing',
      faq: 'FAQ',
      getStarted: 'Get Started',
    },
    // Hero Section
    hero: {
      title: 'From Idea to',
      titleHighlight: 'App',
      titleEnd: 'in Days',
      subtitle: 'We build MVP\'s for entrepreneurs — powered by AI, built with best practices, and ready to scale.',
      shareIdea: 'Share Your Idea',
      watchDemo: 'Watch Demo',
      features: {
        delivery: '7-day delivery',
        production: 'Production ready',
        ai: 'AI-powered',
      },
    },
    // Stats Section
    stats: {
      title: 'Proven Results',
      subtitle: 'Numbers that speak louder than words — see why startups choose us for their MVP development.',
      clients: 'Happy Clients',
      clientsDesc: 'Entrepreneurs who trusted us with their vision',
      average: 'Day Average',
      averageDesc: 'From concept to working MVP',
      funding: 'Funding Raised',
      fundingDesc: 'By our clients using our MVPs',
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
        description: 'Test your ideas quickly with a professional MVP that lets you gather real user feedback and iterate fast.',
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
      whatWeBuildSubtitle: 'Choose the perfect solution for your project — from quick MVP validation to full-scale platform development.',
      mvp: {
        title: 'MVP Development',
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
        description: 'Custom web applications built with modern technologies. SaaS platforms, marketplaces, portals — whatever your startup needs to succeed.',
        features: [
          'Custom design & development with modern tech stack',
          'Responsive & mobile-friendly optimization',
          'SEO optimization & performance tuning',
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
    },
    // Why Choose Us
    whyChoose: {
      title: 'Built with AI, Backed by Experience',
      subtitle: 'We accelerate your development with cutting-edge AI tools to move fast — without compromising on code quality. Our developers follow modern best practices, ensuring your app is easy to scale, maintain, and hand off to future teams.',
      mvpWeek: {
        title: 'MVP\'s in Less Than a Week',
        description: 'From concept to working product faster than you thought possible — powered by advanced AI development tools.',
      },
      aiWorkflows: {
        title: 'AI-Enhanced Workflows',
        description: 'Advanced AI tools for speed and precision in development while maintaining high standards and best practices.',
      },
      productionCode: {
        title: 'Production-Ready Code',
        description: 'Fully maintainable code that scales with your success — built with modern architecture patterns.',
      },
      communication: {
        title: 'Clear Communication',
        description: 'No tech jargon — just clear communication and regular updates throughout your project development.',
      },
      founderFirst: {
        title: 'Founder-First Mentality',
        description: 'Friendly, flexible approach focused on your success — we understand the startup journey.',
      },
      excellence: {
        title: 'Technical Excellence',
        description: 'Industry best practices and high code quality standards maintained throughout the development process.',
      },
    },
    // Process Section
    process: {
      title: 'Our Proven Process',
      subtitle: 'From initial consultation to successful launch — here\'s how we bring your idea to life in record time.',
      step1: {
        title: 'Discovery Call',
        description: 'We start with a free 30-minute consultation to understand your vision, goals, and requirements.',
        duration: '30 minutes',
      },
      step2: {
        title: 'Strategy & Planning',
        description: 'We create a detailed project plan with wireframes, tech stack recommendations, and timeline.',
        duration: '1-2 days',
      },
      step3: {
        title: 'Development Sprint',
        description: 'Our AI-enhanced development process builds your application with daily progress updates.',
        duration: '3-7 days',
      },
      step4: {
        title: 'Launch & Support',
        description: 'We deploy your application and provide post-launch support to ensure everything runs smoothly.',
        duration: '1 day + ongoing',
      },
      cta: {
        title: 'Ready to Start Your Project?',
        subtitle: 'Book a free consultation and get your custom project timeline today.',
        button: 'Book Free Strategy Call',
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
    },
    // Contact
    contact: {
      title: 'Ready to Build Your MVP?',
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
      description: 'We build MVP\'s for entrepreneurs — powered by AI, built with best practices, and ready to scale. From idea to launch in days, not months.',
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
    // Floating CTA
    floating: {
      ready: 'Ready to Start?',
      mvp7days: 'Get your MVP in 7 days',
      shareIdea: 'Share Your Idea',
      bookCall: 'Book Free Call',
      consultation: 'Free consultation',
      response: '24h response',
      mobile: {
        ready: 'Ready to build your MVP?',
        pricing: 'From €2,500 • 7-day delivery',
        getStarted: 'Get Started',
      },
    },
  },
  nl: {
    // Navigation
    nav: {
      services: 'Diensten',
      testimonials: 'Testimonials',
      pricing: 'Prijzen',
      faq: 'FAQ',
      getStarted: 'Aan de Slag',
    },
    // Hero Section
    hero: {
      title: 'Van Idee naar',
      titleHighlight: 'App',
      titleEnd: 'in Dagen',
      subtitle: 'Wij bouwen MVP\'s voor ondernemers — aangedreven door AI, gebouwd met best practices, en klaar om te schalen.',
      shareIdea: 'Deel Je Idee',
      watchDemo: 'Bekijk Demo',
      features: {
        delivery: '7-dagen levering',
        production: 'Productie klaar',
        ai: 'AI-gedreven',
      },
    },
    // Stats Section
    stats: {
      title: 'Bewezen Resultaten',
      subtitle: 'Cijfers die luider spreken dan woorden — zie waarom startups voor ons kiezen voor hun MVP ontwikkeling.',
      clients: 'Tevreden Klanten',
      clientsDesc: 'Ondernemers die ons vertrouwden met hun visie',
      average: 'Dagen Gemiddeld',
      averageDesc: 'Van concept tot werkende MVP',
      funding: 'Financiering Opgehaald',
      fundingDesc: 'Door onze klanten met onze MVP\'s',
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
    },
    // Why Choose Us
    whyChoose: {
      title: 'Gebouwd met AI, Ondersteund door Ervaring',
      subtitle: 'We versnellen je ontwikkeling met geavanceerde AI-tools om snel te bewegen — zonder concessies te doen aan codekwaliteit. Onze ontwikkelaars volgen moderne best practices, zodat je app gemakkelijk te schalen, onderhouden en overdragen is aan toekomstige teams.',
      mvpWeek: {
        title: 'MVP\'s in Minder Dan een Week',
        description: 'Van concept tot werkend product sneller dan je voor mogelijk hield — aangedreven door geavanceerde AI ontwikkeltools.',
      },
      aiWorkflows: {
        title: 'AI-Verbeterde Workflows',
        description: 'Geavanceerde AI-tools voor snelheid en precisie in ontwikkeling terwijl hoge standaarden en best practices worden gehandhaafd.',
      },
      productionCode: {
        title: 'Productie-Klare Code',
        description: 'Volledig onderhoudbare code die schaalt met je succes — gebouwd met moderne architectuur patronen.',
      },
      communication: {
        title: 'Duidelijke Communicatie',
        description: 'Geen tech jargon — alleen duidelijke communicatie en regelmatige updates tijdens je projectontwikkeling.',
      },
      founderFirst: {
        title: 'Oprichter-Eerste Mentaliteit',
        description: 'Vriendelijke, flexibele aanpak gericht op jouw succes — wij begrijpen de startup reis.',
      },
      excellence: {
        title: 'Technische Excellentie',
        description: 'Industrie best practices en hoge codekwaliteit standaarden gehandhaafd tijdens het hele ontwikkelingsproces.',
      },
    },
    // Process Section
    process: {
      title: 'Ons Bewezen Proces',
      subtitle: 'Van initiële consultatie tot succesvolle lancering — zo brengen we je idee in recordtijd tot leven.',
      step1: {
        title: 'Ontdekkingsgesprek',
        description: 'We beginnen met een gratis 30-minuten consultatie om je visie, doelen en vereisten te begrijpen.',
        duration: '30 minuten',
      },
      step2: {
        title: 'Strategie & Planning',
        description: 'We maken een gedetailleerd projectplan met wireframes, tech stack aanbevelingen en tijdlijn.',
        duration: '1-2 dagen',
      },
      step3: {
        title: 'Ontwikkelings Sprint',
        description: 'Ons AI-verbeterde ontwikkelingsproces bouwt je applicatie met dagelijkse voortgangsupdates.',
        duration: '3-7 dagen',
      },
      step4: {
        title: 'Lancering & Support',
        description: 'We deployen je applicatie en bieden post-lancering support om ervoor te zorgen dat alles soepel loopt.',
        duration: '1 dag + doorlopend',
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
    // Floating CTA
    floating: {
      ready: 'Klaar om te Beginnen?',
      mvp7days: 'Krijg je MVP in 7 dagen',
      shareIdea: 'Deel Je Idee',
      bookCall: 'Boek Gratis Gesprek',
      consultation: 'Gratis consultatie',
      response: '24u reactie',
      mobile: {
        ready: 'Klaar om je MVP te bouwen?',
        pricing: 'Vanaf €2.500 • 7-dagen levering',
        getStarted: 'Aan de Slag',
      },
    },
  },
};

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  const switchLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = translations[language];

  return { language, switchLanguage, t };
}