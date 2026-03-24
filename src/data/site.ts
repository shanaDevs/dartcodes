import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Dribbble,
} from "lucide-react";

export const siteConfig = {
  name: "DartCodes",
  description:
    "Comprehensive digital solutions tailored to elevate your business. From concept to code, we deliver excellence.",
  email: "hello@dartcodes.com",
  phone: "(+94) 76 280 3155",
  address: "Colombo, Sri Lanka",
  socials: [
    { name: "Facebook", href: "https://facebook.com", icon: Facebook },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    { name: "Dribbble", href: "https://dribbble.com", icon: Dribbble },
    { name: "Github", href: "https://github.com", icon: Github },
  ],
  legal: {
    terms: "/terms",
    privacy: "/privacy-policy",
  },
  url: "https://dartcodes.com",
  ogImage: "https://dartcodes.com/og-image.jpg",
};
