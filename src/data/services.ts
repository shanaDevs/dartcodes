import { Code, Smartphone, Palette, Server, Shield, Database } from "lucide-react";

const rawServices = [
  {
    "id": "web-development",
    "title": "Web Development",
    "shortDescription": "Fast, scalable websites and modern web applications.",
    "description": "High-performance websites and web platforms built for speed, scalability, and real business impact. We focus on conversion-driven architecture, seamless integrations, and future-ready technologies that grow with your business.",
    "longDescription": "Your website is more than a digital presence — it is your primary growth engine. We build scalable, secure, and performance-optimized platforms designed to convert visitors into customers.",
    "features": [
      "Custom Web Applications",
      "E-commerce Platforms",
      "CMS & Headless CMS Solutions",
      "API Integrations",
      "Performance Optimization",
      "SEO-Ready Architecture"
    ],
    "faqs": [
      {
        "question": "Can you rebuild my existing website using modern technologies?",
        "answer": "Yes. We can migrate your current site to a modern tech stack while preserving your content, improving performance, and keeping downtime to a minimum."
      },
      {
        "question": "Will my new website be easy to update without a developer?",
        "answer": "We typically use modern CMS or headless approaches so your team can manage pages, blogs, and content without touching code."
      }
    ],
    "reviews": [
      {
        "name": "Sarah Mitchell, Growth Lead",
        "rating": 5,
        "quote": "Our new web platform loads twice as fast and has directly contributed to a noticeable uptick in qualified leads."
      },
      {
        "name": "David Chen, CEO",
        "rating": 5,
        "quote": "The team translated a complex vision into a clean, scalable web architecture that our internal devs love working with."
      },
      {
        "name": "Emily Rodriguez, Marketing Director",
        "rating": 4,
        "quote": "Content updates are finally painless. The CMS setup means my team can ship new campaigns without engineering help."
      },
      {
        "name": "James Patel, Product Manager",
        "rating": 5,
        "quote": "From performance to accessibility, the site feels engineered for long-term growth, not just a quick launch."
      }
    ],
    "video": "/images/services/videos/webdevelopment.mp4",
    "image": "/images/services/web.png"
  },
  {
    "id": "mobile-development",
    "title": "Mobile Applications",
    "shortDescription": "High-performance cross-platform mobile experiences.",
    "description": "Native and cross-platform mobile apps designed to engage users and streamline operations. From MVP builds to large-scale deployments, we create reliable apps that deliver smooth experiences across devices.",
    "longDescription": "We develop intuitive mobile experiences that increase retention, streamline operations, and strengthen brand loyalty.",
    "features": [
      "iOS & Android Development",
      "Cross-Platform (Flutter / React Native)",
      "MVP Development",
      "App Modernization",
      "Maintenance & Optimization"
    ],
    "faqs": [
      {
        "question": "Do you build native or cross-platform mobile apps?",
        "answer": "We choose the right approach—native or cross-platform—based on your product, performance needs, and budget to deliver the best experience."
      },
      {
        "question": "Can you help us launch an MVP quickly?",
        "answer": "Yes. We frequently design and ship MVPs focused on core features so you can validate your idea before investing in full-scale development."
      }
    ],
    "reviews": [
      {
        "name": "Lena Hoffman, Operations Lead",
        "rating": 5,
        "quote": "The mobile app has become the primary way customers interact with us, and reliability has been rock solid."
      },
      {
        "name": "Ravi Kumar, Founder",
        "rating": 5,
        "quote": "They helped us launch an MVP in under eight weeks and iterate quickly based on real user feedback."
      },
      {
        "name": "Olivia Brooks, Head of CX",
        "rating": 4,
        "quote": "Push notifications, offline support, and analytics were all thoughtfully implemented from day one."
      },
      {
        "name": "Marcus Lee, Product Owner",
        "rating": 5,
        "quote": "The cross‑platform build feels truly native—our users can’t tell the difference."
      }
    ],
    "video": "/images/services/videos/mobiledevelopment.mp4",
    "image": "/images/services/mobile.png"
  },
  {
    "id": "ui-ux-design",
    "title": "UI/UX Design",
    "shortDescription": "Intuitive interfaces focused on usability and engagement.",
    "description": "Strategic design experiences that blend usability with business goals. We craft intuitive interfaces that guide user behavior, reduce friction, and transform interactions into measurable outcomes.",
    "longDescription": "Great design is strategic. We align business goals with user behavior to create intuitive digital journeys that drive measurable results.",
    "features": [
      "User Research & Persona Mapping",
      "Wireframing & Prototyping",
      "Design Systems",
      "Usability Testing",
      "Interaction Design"
    ],
    "faqs": [
      {
        "question": "Do you run user research before designing interfaces?",
        "answer": "Yes. We start with research, stakeholder workshops, and user flows to ensure the UX is aligned with real user needs and business goals."
      },
      {
        "question": "Can you create a reusable design system for our product?",
        "answer": "We can design and document a complete design system with components, tokens, and usage guidelines for consistent experiences across your product."
      }
    ],
    "reviews": [
      {
        "name": "Natalie Green, Head of Product Design",
        "rating": 5,
        "quote": "Their design system work completely transformed the consistency and speed of our product teams."
      },
      {
        "name": "Jonas Weber, SaaS Founder",
        "rating": 5,
        "quote": "User testing sessions revealed issues we never saw internally—and the resulting UX changes boosted activation."
      },
      {
        "name": "Priya Desai, UX Lead",
        "rating": 4,
        "quote": "They plugged directly into our existing workflow and elevated our core flows without slowing the roadmap."
      },
      {
        "name": "Alex Romero, Marketing VP",
        "rating": 5,
        "quote": "The new interface feels premium and intuitive—customers mention it unprompted in sales calls."
      }
    ],
    "video": "/images/services/videos/uiux.mp4",
    "image": "/images/services/uiux.png"
  },
  {
    "id": "enterprise-solutions",
    "title": "Enterprise Solutions",
    "shortDescription": "Custom systems that automate and scale business operations.",
    "description": "Custom enterprise systems designed to automate workflows, improve operational visibility, and support long-term scalability. Built with secure architectures that evolve alongside your organization.",
    "longDescription": "We build robust enterprise systems that centralize workflows, improve visibility, and support scalable growth.",
    "features": [
      "ERP Systems",
      "CRM Integration",
      "Custom Enterprise Platforms",
      "Cloud Migration",
      "System Modernization"
    ],
    "faqs": [
      {
        "question": "Can you integrate our existing ERP or CRM into a new platform?",
        "answer": "Yes. We design secure integration layers and APIs so your ERP, CRM, and internal tools work together in a single, unified workflow."
      },
      {
        "question": "How do you ensure enterprise systems remain scalable over time?",
        "answer": "We design modular architectures with clear boundaries, monitoring, and cloud-native patterns so the system can grow with your organization."
      }
    ],
    "reviews": [
      {
        "name": "Helena Ortiz, CIO",
        "rating": 5,
        "quote": "Our new enterprise platform eliminated three legacy systems and gave leadership real‑time visibility for the first time."
      },
      {
        "name": "Tom Becker, COO",
        "rating": 5,
        "quote": "Automation of critical workflows freed up entire teams to focus on higher‑value work instead of manual data entry."
      },
      {
        "name": "Maya Singh, Program Director",
        "rating": 4,
        "quote": "The rollout across departments was carefully planned and supported—we felt guided end‑to‑end."
      },
      {
        "name": "Richard Cole, Head of IT",
        "rating": 5,
        "quote": "Architecture documentation and handover were excellent; our internal engineers had no trouble taking ownership."
      }
    ],
    "video": "/images/services/videos/enterprice.mp4",
    "image": "/images/services/enterprise.png"
  },
  {
    "id": "devops-and-cloud",
    "title": "DevOps & Cloud",
    "shortDescription": "Cloud infrastructure and automated deployment pipelines.",
    "description": "Automated workflows and scalable infrastructure designed to optimize efficiency and reduce downtime. We implement CI/CD pipelines, cloud-native architectures, and monitoring systems that keep your systems running smoothly and your business growing.",
    "longDescription": "We implement automated workflows and scalable infrastructure that optimize efficiency, reduce downtime, and keep your systems running smoothly and your business growing.",
    "features": [
      "CI/CD Pipelines",
      "Cloud-Native Architecture",
      "Monitoring & Analytics",
      "Cloud Migration & Optimization"
    ],
    "faqs": [
      {
        "question": "Can you set up CI/CD for our existing codebase?",
        "answer": "We implement or refine CI/CD pipelines so every change is tested, validated, and deployed reliably with minimal manual steps."
      },
      {
        "question": "Do you help with cloud cost optimization?",
        "answer": "Yes. We review your current infrastructure, remove waste, and design autoscaling and monitoring strategies to reduce unnecessary spend."
      }
    ],
    "reviews": [
      {
        "name": "Samir Al‑Fayed, Platform Lead",
        "rating": 5,
        "quote": "Deployments went from stressful, manual events to quiet, routine operations thanks to the CI/CD work."
      },
      {
        "name": "Laura Bennett, CTO",
        "rating": 5,
        "quote": "We saw immediate improvements in uptime and observability once the new monitoring and alerting stack went live."
      },
      {
        "name": "Ian Murphy, Engineering Manager",
        "rating": 4,
        "quote": "The team met us where we were and incrementally modernized our pipelines instead of forcing a big‑bang change."
      },
      {
        "name": "Chen Li, Infrastructure Architect",
        "rating": 5,
        "quote": "Cloud costs are finally predictable and tied to clear business drivers."
      }
    ],
    "video": "/images/services/videos/devops.mp4",
    "image": "/images/services/devops.png"
  },
  {
    "id": "database-engineering",
    "title": "Database Engineering",
    "shortDescription": "Scalable data architectures optimized for performance.",
    "description": "High-performance data architectures optimized for analytics, automation, and growth. We design scalable database systems that ensure reliability, efficiency, and seamless data flow across platforms.",
    "longDescription": "Your data is a strategic asset. We design high-performance database architectures that support analytics, automation, and business intelligence.",
    "features": [
      "Data Modeling",
      "Performance Optimization",
      "Cloud Databases",
      "Migration & Modernization",
      "High-Availability Architecture"
    ],
    "faqs": [
      {
        "question": "Can you help us redesign our database schema?",
        "answer": "We analyze your data model, identify bottlenecks, and propose a schema that supports your current and future reporting and transactional needs."
      },
      {
        "question": "Do you handle database migrations with zero or minimal downtime?",
        "answer": "We plan and execute migrations using strategies like blue‑green deployments and phased rollouts to keep downtime as close to zero as possible."
      }
    ],
    "reviews": [
      {
        "name": "Marta Kowalski, Analytics Lead",
        "rating": 5,
        "quote": "Query times dropped dramatically after the new schema and indexing strategy were implemented."
      },
      {
        "name": "George Phillips, CTO",
        "rating": 5,
        "quote": "They handled a complex migration with virtually no downtime and clear rollback plans at every step."
      },
      {
        "name": "Fatima Noor, Head of Data",
        "rating": 4,
        "quote": "Our reporting and BI pipelines are far more reliable now—and easier to extend as new use cases appear."
      },
      {
        "name": "Andrés Silva, Platform Engineer",
        "rating": 5,
        "quote": "Replication, backups, and monitoring were all configured to enterprise standards, giving us real peace of mind."
      }
    ],
    "video": "/images/services/videos/database.mp4",
    "image": "/images/services/database.png"
  }
];

export const services = rawServices.map(s => {
  let iconRef = Code;
  if (s.id === "web-development") iconRef = Code;
  if (s.id === "mobile-development") iconRef = Smartphone;
  if (s.id === "ui-ux-design") iconRef = Palette;
  if (s.id === "enterprise-solutions") iconRef = Server;
  if (s.id === "cyber-security") iconRef = Shield;
  if (s.id === "database-engineering") iconRef = Database;

  return { ...s, icon: iconRef };
});
