import {
  Building2,
  Compass,
  PackageSearch,
  PenTool,
  Rocket,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Who We Assist', href: '#who-we-assist' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '#insights' },
];

export interface Persona {
  icon: LucideIcon;
  level: string;
  name: string;
  size: string;
  copy: string;
  cta: string;
  image: string;
}

export const PERSONAS: Persona[] = [
  {
    icon: Rocket,
    level: 'Start Up',
    name: 'The Bootstrapper',
    size: '1–5 people',
    copy: "You're at the early stage of the hustle, pursuing proof of concept. You're wearing all the hats, fighting all the fights, putting out all the fires. The path ahead looks promising — it's time to invest and grow.",
    cta: 'Take Off',
    image: 'images/startup.png',
  },
  {
    icon: TrendingUp,
    level: 'SMB',
    name: 'Small–Medium Business',
    size: '5–100 people',
    copy: "You've stabilised and proven your business has legs — distribution lines, predictable revenue, a reliable team, a solid customer base. But you're on the cusp of something big and ready for the next phase.",
    cta: 'Grow More',
    image: 'images/smb.png',
  },
  {
    icon: Building2,
    level: 'Enterprise',
    name: 'The Enterprise',
    size: '100+ people',
    copy: "A strong business with years of growth to prove it — but something's missing. You want to be better: more environmentally considered, more socially responsible, leaner structure, and your heroes promoted.",
    cta: 'Improve Now',
    image: 'images/enterprise.png',
  },
];

export interface ServicePillar {
  icon: LucideIcon;
  index: string;
  title: string;
  blurb: string;
  services: string[];
}

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    icon: Compass,
    index: '01',
    title: 'Business Strategy + Development',
    blurb:
      'A comprehensive dive into your business to build a growth strategy that supports it. No rock unturned, no element left behind, no holes in the boat.',
    services: [
      'Customer Acquisition',
      'Campaign Management',
      'SEO + SEM',
      'Business Consulting',
      'Business Audits',
      'Tech Stack Advisory',
    ],
  },
  {
    icon: PackageSearch,
    index: '02',
    title: 'Product Sourcing + Supplier Management',
    blurb:
      'We procure and source great products anywhere in the world — working, coordinating and conversing across all industries.',
    services: [
      'Research & Development',
      'Product Procurement',
      'Environmental Audits',
      'Eco Packaging',
      'Shipping & Logistics',
      'I.P Protection',
    ],
  },
  {
    icon: PenTool,
    index: '03',
    title: 'Design + Communication',
    blurb:
      'From how it looks to how it speaks — we make every touchpoint of your business crystal clear and built to convert.',
    services: [
      'Visual Identity',
      'Tone of Voice',
      'Content Strategy',
      'Software Development',
      'UX + UI Design',
      'E-Commerce',
    ],
  },
];

export interface CaseStudy {
  name: string;
  tags: string;
  category: string;
  image: string;
  href: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    name: 'SmokeyQ',
    tags: 'Digital Marketing',
    category: 'FMCG',
    image: 'images/smokeyq.jpg',
    href: 'https://www.weassistco.com/clients/smokeyq',
  },
  {
    name: 'Curated With Conscience',
    tags: 'Business Strategy, Software Development',
    category: 'Gift Hampers',
    image: 'images/cwc.jpg',
    href: 'https://www.weassistco.com/clients/curated-with-conscience',
  },
  {
    name: 'House of Orange',
    tags: 'Digital Marketing',
    category: 'Furniture + Homewares',
    image: 'images/hoo.jpg',
    href: 'https://www.weassistco.com/clients/house-of-orange',
  },
];

export const CLIENT_LOGOS = [
  { name: 'SmokeyQ', src: 'logos/smokeyq.svg' },
  { name: 'House of Orange', src: 'logos/house.svg' },
  { name: 'Whitefox', src: 'logos/whitefox.svg' },
  { name: 'Jodope', src: 'logos/jodope.svg' },
  { name: 'NA', src: 'logos/na.svg' },
];

export interface Testimonial {
  quote: string;
  name: string;
  featured?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Ultimately, it doesn't feel like you're working with an agency. It feels as if you are working with an extension of your own team. And when you're low on time and resources and need people who can hit the ground running, WAC step in with a well researched solution to every problem.",
    name: 'Hangatu Wyld',
    featured: true,
  },
  {
    quote:
      "What a delight to work with everyone at We Assist. It's a bit of an understatement to call themselves 'Assist'. Every team member works extremely hard, with dedication and genuine passion for our business and its philosophy. That makes a difference — and this ethos delivers genuine results.",
    name: 'Hans & Ursula',
  },
  {
    quote:
      'The team at We Assist Co are amazing. They created an online booking system for my transport business and improved my sales by over 500% — and quite quickly too.',
    name: 'Ben Lockley',
  },
  {
    quote:
      'I was so impressed with all the staff at We Assist Co. I engaged them as I was having difficulty finding a reputable manufacturer of gym equipment. Dealing with Oscar & Taylor was a pleasure, even through the ups and downs of sourcing a product overseas.',
    name: 'Viking Performance',
  },
  {
    quote:
      "After losing my whole management team at the start of Covid I felt like I was drowning. After discussing my options with Taylor we laid down a 3 month strategy to get my venue back on track — and that is exactly what they did, taking time to refurbish the place, design a signature cocktail menu and book relevant entertainment.",
    name: 'Lulu Ren',
  },
];

export interface TeamMember {
  name: string;
  role: string;
}

export const TEAM: TeamMember[] = [
  { name: 'Taylor', role: 'Director & Co-Founder' },
  { name: 'Oscar', role: 'Co-Founder & Product Steward' },
  { name: 'Jessica', role: 'International Trade' },
  { name: 'Peggy', role: 'Product Steward' },
  { name: 'Daisy', role: 'Product Steward' },
  { name: 'Elza', role: 'Media Manager' },
  { name: 'Alfred', role: 'Website Wizard' },
  { name: 'Clint', role: 'UI Designer & Webmaster' },
  { name: 'Brent', role: 'UI + UX Designer' },
  { name: 'Bowen', role: 'Chinese Media Director' },
  { name: 'Chloe', role: 'Omni Channel China' },
  { name: 'Caryle', role: 'Marketing Coordinator' },
];

export interface Article {
  title: string;
  tag: string;
  image: string;
  href: string;
}

export const ARTICLES: Article[] = [
  {
    title: 'Turning Big Plans into Real Results',
    tag: 'Business Development',
    image: 'images/blog-plans.webp',
    href: 'https://www.weassistco.com/blogs/turning-big-plans-into-real-results',
  },
  {
    title: 'Just-in-Time Supply Chain Management vs FIFO',
    tag: 'Supply Chain',
    image: 'images/blog-jit.webp',
    href: 'https://www.weassistco.com/blogs/just-in-time-vs-fifo',
  },
  {
    title: 'Building Relationships with Manufacturers in China',
    tag: 'The Bootstrapper',
    image: 'images/blog-relationship.webp',
    href: 'https://www.weassistco.com/blogs/building-relationships-with-manufacturers-in-china',
  },
];

export const STATS = [
  { value: 500, suffix: '%+', label: 'sales uplift delivered for a transport client' },
  { value: 12, suffix: '', label: 'specialists across Australia & China' },
  { value: 3, suffix: '', label: 'levels of business — startup to enterprise' },
  { value: 2020, suffix: '', label: 'founded in Melbourne, still founder-led' },
];

export const CONTACT = {
  email: 'hello@weassistco.com',
  phone: '0423 096 093',
  phoneHref: 'tel:0423096093',
  location: 'Melbourne, Australia',
};

export const SOCIALS = [
  { label: 'Facebook', href: 'https://www.facebook.com/Weassistco' },
  { label: 'Instagram', href: 'https://www.instagram.com/weassistco/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/we-assist-co/' },
];
