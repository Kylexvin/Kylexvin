const projects = [
  // FULL STACK
  {
    id: 'moihub',
    category: 'fullstack',
    title: 'MoiHub Platform',
    shortDesc: 'Comprehensive campus super-app for Moi University students.',
    mockupImage: '/lappy.jpg',
    techs: ['React ', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
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


  // MOBILE
  {
    id: 'moihub-mobile',
    category: 'mobile',
    title: 'MoiHub Mobile App',
    shortDesc: 'Cross-platform React Native app with EAS builds and offline support.',
    mockupImage: '/moihubapp.png',
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
{
  id: 'mtz-app',
  category: 'mobile',
  title: 'MTZ App (Milk Token Exchange)',
  shortDesc: 'Tokenized milk value system enabling farmers to store, transfer, and redeem milk as digital assets.',
  mockupImage: '/mtz.png',
  techs: ['React Native', 'Node.js', 'Express', 'MongoDB'],
  liveUrl: '#',
  githubUrl: '#',
  caseStudy: {
    overview: 'MTZ is a fintech-agritech mobile system that converts milk deposits into digital tokens, enabling farmers to store value, transfer it peer-to-peer, and redeem it for cash or milk. The platform connects farmers, depot attendants, and processors like KCC into one transparent ecosystem.',
    problem: 'Farmers face unstable pricing, delayed payments, and lack a reliable way to store or transfer the value of their produce. Existing systems rely heavily on middlemen with little transparency.',
    solution: 'Built a token-based system where milk is digitized at the point of deposit, giving farmers instant value in a wallet that can be redeemed, transferred, or withdrawn anytime.',
    features: [
      '🥛 Milk-to-token conversion at depot level',
      '💰 Instant wallet balance for farmers',
      '🔁 Peer-to-peer (P2P) token transfers',
      '🏧 Cash redemption via attendants or mobile money',
      '🛢️ Milk withdrawal using tokens',
      '📊 Transparent transaction tracking',
    ],
    achievements: [
      'Fully working MVP with complete value flow simulation',
      'End-to-end lifecycle: deposit → transfer → redemption',
      'Designed for low-connectivity environments',
      'Simple UI optimized for non-technical users',
    ],
    challenges: [
      { problem: 'Designing a balanced token-value system', solution: 'Mapped real-world milk flow to controlled token issuance' },
      { problem: 'Ensuring simple UX for rural users', solution: 'Minimal UI with clear actions and wallet visibility' },
      { problem: 'Simulating real-world economic flows', solution: 'Built full cycle including depot, processor, and P2P interactions' },
    ]
  }
},
{
  id: 'kxtill-pos',
  category: 'mobile',
  title: 'KXTill POS System',
  shortDesc: 'Offline-first desktop POS system for retail businesses with real-time sales and inventory management.',
  mockupImage: '/pos.png',
  techs: ['Electron', 'React', 'Node.js', 'SQLite'],
  liveUrl: '#',
  githubUrl: '#',
  caseStudy: {
    overview: 'KXTill POS is a desktop-based point-of-sale system designed for small and medium retail businesses. It provides fast, reliable sales processing, inventory tracking, and reporting — all optimized for offline-first environments.',
    problem: 'Many small businesses rely on unstable internet connections, making cloud-based POS systems unreliable. They also lack affordable, modern tools for managing inventory and sales efficiently.',
    solution: 'Built a lightweight Electron-based desktop application with offline-first architecture, enabling businesses to operate seamlessly without internet dependency while maintaining accurate records and analytics.',
    features: [
      '🧾 Fast sales processing interface',
      '📦 Inventory management with stock tracking',
      '💵 Multiple payment methods (cash, mobile money)',
      '📊 Sales analytics and reporting dashboard',
      '🔌 Offline-first desktop functionality',
      '🖨️ Receipt generation and printing support',
    ],
    achievements: [
      'Optimized for low-resource machines',
      'Instant sales recording with local database',
      'Clean and intuitive cashier interface',
      'Scalable architecture for multi-branch support',
    ],
    challenges: [
      { problem: 'Handling offline data persistence', solution: 'Used SQLite for reliable local storage' },
      { problem: 'Ensuring fast UI performance in Electron', solution: 'Optimized React rendering and minimized background processes' },
      { problem: 'Designing for non-technical users', solution: 'Simple, cashier-friendly interface design' },
    ]
  }
},
  // CLIENT WORK
  {
  id: 'sagrema-foundation',
  category: 'client',
  title: 'Sagrema Foundation Website',
  shortDesc: 'Official website for a community foundation focused on social impact and development programs.',
  mockupImage: '/sagrema.jpg',
  techs: ['html', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
  liveUrl: 'https://sagremafoundation.org',
  githubUrl: 'https://github.com/Kylexvin/sagremafoundation',
  caseStudy: {
    overview: 'A modern, responsive website built for Sagrema Foundation to showcase their mission, programs, and community impact initiatives.',
    problem: 'The foundation lacked a professional digital presence to communicate their work and attract partners or donors.',
    solution: 'Designed and developed a clean, storytelling-focused website with smooth animations and structured content sections for programs and impact visibility.',
    features: [
      '🌍 Mission and vision storytelling sections',
      '📊 Programs and impact showcase',
      '🖼️ Media and gallery integration',
      '📱 Fully responsive layout',
      '✨ Smooth Framer Motion animations',
    ],
    achievements: [
      'Improved online visibility for foundation activities',
      'Clear structure for donor engagement',
      'Fast, modern UI deployed on Vercel',
    ],
    challenges: [
      { problem: 'Organizing large narrative content', solution: 'Structured content into modular sections for clarity' },
    ]
  }
},
{
  id: 'globe-givers-cbo',
  category: 'client',
  title: 'Globe Givers CBO Website',
  shortDesc: 'Community-based organization website for outreach programs and local initiatives.',
  mockupImage: '/globegivers.jpg',
  techs: ['html', 'CSS', 'JavaScript', 'Vercel'],
  liveUrl: 'https://globegivers.vercel.app/',
  githubUrl: 'https://github.com/Kylexvin/globegivers',
  caseStudy: {
    overview: 'A professional website built for Globe Givers CBO to present their community programs, events, and outreach activities in a structured digital format.',
    problem: 'The organization had no centralized platform to showcase their work, limiting visibility and donor engagement.',
    solution: 'Built a simple, fast, and mobile-friendly React website focused on clarity, accessibility, and storytelling.',
    features: [
      '🏘️ Community program listings',
      '📅 Events and outreach updates',
      '📞 Contact and partnership section',
      '📱 Mobile-first responsive design',
      '⚡ Fast static deployment',
    ],
    achievements: [
      'Improved credibility and online presence',
      'Easy navigation for donors and partners',
      'Lightweight and fast-loading website',
    ],
    challenges: [
      { problem: 'Limited content and branding material', solution: 'Designed layout-first structure and adapted content visually' },
    ]
  }
},
  {
    id: 'nkosira',
    category: 'client',
    title: 'Nkosira Organic Farm',
    shortDesc: 'Full website for an organic farm in Samburu, Kenya.',
    mockupImage: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=400&q=80',
    techs: ['JavaScript', 'html', 'CSS'],
    liveUrl: 'https://nkosiraorganicfarm.vercel.app/',
    githubUrl: 'https://github.com/Kylexvin/nkosiraorganicfarm',
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