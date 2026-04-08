const projects = [
  // FULL STACK
  {
    id: 'moihub',
    category: 'fullstack',
    title: 'MoiHub Platform',
    shortDesc: 'Comprehensive campus super-app for Moi University students.',
    mockupImage: 'https://images.unsplash.com/photo-1581092334605-940235f2f0d9?auto=format&fit=crop&w=400&q=80',
    techs: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    liveUrl: 'https://moihub-silk.vercel.app',
    githubUrl: 'https://github.com/kylexvin/moihub',
    caseStudy: {
      overview: 'MoiHub is a comprehensive digital campus platform integrating food delivery, rentals, e-shops, roommate finder, real-time messaging, and AI-powered dating — all built for Moi University students.',
      problem: 'Students faced fragmented services with no single platform catering specifically to campus life needs.',
      solution: 'Built a modular super-app with dedicated vendor portals, real-time communication, and offline-first architecture.',
      features: [
        '🍕 Food Delivery with real-time tracking',
        '🏠 Accommodation rentals near campus',
        '🛒 Student marketplace (buy/sell)',
        '👥 Smart roommate matching',
        '💬 Real-time messaging (Socket.io)',
        '❤️ AI-powered dating (LinkMe)',
      ],
      achievements: [
        '178 early beta testers onboarded',
        'Sub-second message delivery',
        'Offline-first with smart caching',
        'Modular architecture for easy scaling',
      ],
      challenges: [
        { problem: 'Complex real-time architecture', solution: 'Microservices + Socket.io' },
        { problem: 'Poor campus connectivity', solution: 'Offline-first with data sync' },
        { problem: 'User privacy concerns', solution: 'Hybrid auth + encrypted storage' },
      ]
    }
  },
  {
    id: 'neocommerce',
    category: 'fullstack',
    title: 'NeoCommerce',
    shortDesc: 'Sleek e-commerce platform with advanced filtering and Stripe payments.',
    mockupImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80',
    techs: ['React', 'Redux', 'Styled Components', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      overview: 'A modern performant e-commerce frontend delivering exceptional UX with clean maintainable code.',
      problem: 'Needed a fast, responsive shopping experience with real-time filtering and seamless checkout.',
      solution: 'React component architecture with Redux state management and Stripe integration.',
      features: [
        '🔍 Debounced search with real-time suggestions',
        '🎛️ Multi-criteria smart filtering',
        '💳 Seamless Stripe checkout',
        '📱 Mobile-first responsive design',
        '⚡ Lazy loading + code splitting',
      ],
      achievements: [
        '95+ Lighthouse performance score',
        '200ms search response time',
        '95% component reusability',
        '99.9% checkout success rate',
      ],
      challenges: [
        { problem: 'Performance on low-end devices', solution: 'React.memo + useMemo optimization' },
        { problem: 'Complex filter state', solution: 'Redux Toolkit slice architecture' },
      ]
    }
  },

  // MOBILE
  {
    id: 'moihub-mobile',
    category: 'mobile',
    title: 'MoiHub Mobile App',
    shortDesc: 'Cross-platform React Native app with EAS builds and offline support.',
    mockupImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80',
    techs: ['React Native', 'Expo', 'EAS', 'AsyncStorage', 'Firebase'],
    liveUrl: '#',
    githubUrl: 'https://github.com/kylexvin/moihub',
    caseStudy: {
      overview: 'The mobile arm of MoiHub — a production React Native app with EAS-managed builds deployed to Android.',
      problem: 'Campus students needed a native mobile experience with offline capabilities for poor network areas.',
      solution: 'Built with Expo + EAS for streamlined builds, AsyncStorage for offline-first data persistence.',
      features: [
        '📱 Cross-platform (Android/iOS ready)',
        '🔌 Offline-first with AsyncStorage',
        '🔔 Push notifications via Firebase',
        '🔐 Google OAuth integration',
        '📦 EAS managed builds (AAB/APK)',
      ],
      achievements: [
        'AAB versioned at 1.1.0 / versionCode 3',
        'Keystore managed via EAS under kylexvinny3',
        'Smooth 60fps UI across devices',
        'Sub-100ms local data reads',
      ],
      challenges: [
        { problem: 'Vector icons breaking in EAS builds', solution: 'Font.loadAsync with @expo/vector-icons' },
        { problem: 'Google OAuth redirect issues', solution: 'Native scheme + makeRedirectUri fix' },
      ]
    }
  },

  // CLIENT WORK
  {
    id: 'nkosira',
    category: 'client',
    title: 'Nkosira Organic Farm',
    shortDesc: 'Full website for an organic farm in Samburu, Kenya.',
    mockupImage: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=400&q=80',
    techs: ['JavaScript', 'PHP', 'MySQL', 'WordPress'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      overview: 'A professional web presence for Nkosira Organic Farm, showcasing their products and farm story.',
      problem: 'The farm had no digital presence, losing potential customers and partnerships.',
      solution: 'Built a clean, fast WordPress site with custom PHP backend for product management.',
      features: [
        '🌿 Product showcase with gallery',
        '📍 Farm location + contact info',
        '📝 Blog for farm updates',
        '📱 Fully mobile responsive',
      ],
      achievements: [
        'Delivered in under 6 weeks',
        'SEO optimized for local search',
        'Client-managed via WordPress dashboard',
      ],
      challenges: [
        { problem: 'Limited client technical knowledge', solution: 'Simple WordPress CMS for self-management' },
      ]
    }
  },
  {
    id: 'tujiinue',
    category: 'client',
    title: 'Tujiinue CBO',
    shortDesc: 'Multi-page React website for a community-based organization.',
    mockupImage: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=400&q=80',
    techs: ['React', 'Framer Motion', 'React Router', 'Vercel'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      overview: 'A full multi-page website for Tujiinue CBO built with React, featuring smooth animations and a clean layout.',
      problem: 'The organization needed a professional web presence to attract donors and showcase their programs.',
      solution: 'Built with Create React App, Framer Motion animations, and deployed on Vercel.',
      features: [
        '📄 Multi-page with React Router',
        '✨ Framer Motion animations',
        '🖼️ Gallery section',
        '📱 Fully responsive',
        '🚀 Deployed on Vercel',
      ],
      achievements: [
        'Fast load times on Vercel CDN',
        'Clean modern design matching CBO brand',
        'Easy to update content structure',
      ],
      challenges: [
        { problem: 'Content organization from client docs', solution: 'Structured data from provided documents' },
      ]
    }
  },

  // DESIGN
  {
    id: 'kxbyte-brand',
    category: 'design',
    title: 'KXBYTE Branding',
    shortDesc: 'Full brand identity for KXBYTE Digital Solutions.',
    mockupImage: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=400&q=80',
    techs: ['Illustrator', 'Photoshop', 'Brand Strategy'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      overview: 'Created the complete visual identity for KXBYTE Digital Solutions including logo, color palette, and brand guidelines.',
      problem: 'Needed a strong brand that communicated technical expertise and modern innovation.',
      solution: 'Developed a cyberpunk-inspired identity with clean typography and neon accent colors.',
      features: [
        '🎨 Logo design + variations',
        '🎨 Color palette + typography',
        '📐 Brand guidelines document',
        '📱 Social media kit',
      ],
      achievements: [
        'Consistent identity across all touchpoints',
        'Memorable cyberpunk aesthetic',
        'Scalable vector assets',
      ],
      challenges: [
        { problem: 'Balancing tech feel with approachability', solution: 'Clean layout with selective neon accents' },
      ]
    }
  },
];

export const categories = [
  {
    id: 'fullstack',
    label: 'Full Stack Web',
    icon: 'fas fa-layer-group',
    description: 'End-to-end web applications built with MERN stack.',
    mockupImage: 'web.jpg',
  },
  {
    id: 'mobile',
    label: 'Mobile Apps',
    icon: 'fas fa-mobile-alt',
    description: 'Cross-platform mobile apps with React Native & Expo.',
    mockupImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'client',
    label: 'Client Work',
    icon: 'fas fa-briefcase',
    description: 'Real-world websites and apps built for clients.',
    mockupImage: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'design',
    label: 'Design & Branding',
    icon: 'fas fa-paint-brush',
    description: 'Brand identities, logos, and visual design work.',
    mockupImage: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=600&q=80',
  },
];

export default projects;