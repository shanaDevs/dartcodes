export const projects = [
  {
    "id": "fintrack-pro",
    "title": "FinTrack Pro",
    "category": "FinTech",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "description": "A comprehensive financial dashboard for enterprise clients.",
    "tags": [
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS"
    ],
    "link": "https://example.com",
    "longDescription": "FinTrack Pro is a state-of-the-art financial management dashboard designed for large-scale enterprises. It provides real-time analytics, automated reporting, and seamless integration with existing banking infrastructure.",
    "challenge": "The client needed a solution that could handle millions of transactions per second while maintaining sub-second latency and bank-grade security.",
    "solution": "We built a microservices architecture using Node.js and gRPC, deployed on AWS with auto-scaling capabilities. The frontend uses React with WebSockets for live data updates."
  },
  {
    "id": "healthpulse",
    "title": "HealthPulse",
    "category": "Healthcare",
    "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    "description": "Telemedicine platform connecting patients with specialists worldwide.",
    "tags": [
      "Next.js",
      "WebRTC",
      "Stripe",
      "Tailwind"
    ],
    "link": "https://example.com",
    "longDescription": "HealthPulse revolutionizes access to healthcare by providing a secure, HIPAA-compliant platform for virtual consultations. Patients can instantly connect with specialists, share medical records, and get prescriptions.",
    "challenge": "Ensuring video call stability across low-bandwidth connections and maintaining strict data privacy compliance.",
    "solution": "We utilized WebRTC for adaptive video streaming and implemented end-to-end encryption for all patient data. Stripe Connect was integrated for seamless global payments."
  },
  {
    "id": "ecomarket",
    "title": "EcoMarket",
    "category": "E-commerce",
    "image": "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2064&auto=format&fit=crop",
    "description": "Sustainable marketplace with carbon footprint tracking.",
    "tags": [
      "Shopify",
      "React",
      "GraphQL"
    ],
    "link": "https://example.com",
    "longDescription": "EcoMarket is a multi-vendor marketplace dedicated to sustainable products. It features a unique carbon footprint calculator that estimates the environmental impact of each purchase.",
    "challenge": "Calculating accurate carbon footprints in real-time based on shipping distance and product materials.",
    "solution": "We developed a custom algorithm integrated with logistics APIs to calculate emissions dynamically. The frontend is a headless Shopify setup using React and GraphQL for maximum flexibility."
  },
  {
    "id": "learnloop",
    "title": "LearnLoop",
    "category": "EdTech",
    "image": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2067&auto=format&fit=crop",
    "description": "AI-powered learning management system for universities.",
    "tags": [
      "Python",
      "Django",
      "TensorFlow",
      "React"
    ],
    "link": "https://example.com",
    "longDescription": "LearnLoop uses artificial intelligence to personalize learning paths for university students. It analyzes student performance and adapts the curriculum to their learning style.",
    "challenge": "Creating an AI model that could accurately predict student needs without bias.",
    "solution": "We trained a TensorFlow model on anonymized educational data and integrated it with a Django backend. The system provides real-time insights to professors and adaptive content to students."
  },
  {
    "id": "estateview",
    "title": "EstateView",
    "category": "Real Estate",
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    "description": "Virtual tour platform for luxury real estate listings.",
    "tags": [
      "Three.js",
      "Vue",
      "Firebase"
    ],
    "link": "https://example.com",
    "longDescription": "EstateView offers immersive 3D virtual tours for high-end real estate. It allows potential buyers to walk through properties from anywhere in the world, with high-fidelity graphics.",
    "challenge": "Rendering high-quality 3D tours in the browser without requiring heavy downloads.",
    "solution": "We used Three.js for efficient 3D rendering and implemented aggressive asset optimization and lazy loading. Firebase handles real-time collaboration during guided tours."
  },
  {
    "id": "travelmate",
    "title": "TravelMate",
    "category": "Travel",
    "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
    "description": "All-in-one travel companion app for customized itineraries.",
    "tags": [
      "Flutter",
      "Dart",
      "Google Maps API"
    ],
    "link": "https://example.com",
    "longDescription": "TravelMate helps travelers plan their perfect trip. It generates custom itineraries based on interests, budget, and duration, and offers offline maps and navigation.",
    "challenge": "Providing reliable functionality in areas with poor internet connectivity.",
    "solution": "We built the app using Flutter for cross-platform performance and implemented a robust offline-first architecture using local databases that sync when online."
  }
];