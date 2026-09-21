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
}

export const PERSONAS: Persona[] = [
  {
    icon: Rocket,
    level: 'Start Up',
    name: 'The Bootstrapper',
    size: '1–5 people',
    copy: "You're at the early stage of the hustle, pursuing proof of concept. You're wearing all the hats, fighting all the fights, putting out all the fires. The path ahead looks promising — it's time to invest and grow.",
    cta: 'Take Off',
  },
  {
    icon: TrendingUp,
    level: 'SMB',
    name: 'Small–Medium Business',
    size: '5–100 people',
    copy: "You've stabilised and proven your business has legs — distribution lines, predictable revenue, a reliable team, a solid customer base. But you're on the cusp of something big and ready for the next phase.",
    cta: 'Grow More',
  },
  {
    icon: Building2,
    level: 'Enterprise',
    name: 'The Enterprise',
    size: '100+ people',
    copy: "A strong business with years of growth to prove it — but something's missing. You want to be better: more environmentally considered, more socially responsible, leaner structure, and your heroes promoted.",
    cta: 'Improve Now',
  },
];

export interface ServicePillar {
  icon: LucideIcon;
  title: string;
  blurb: string;
  services: string[];
}

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    icon: Compass,
    title: 'Business Strategy + Development',
    blurb:
      'A comprehensive dive into your business to build a growth strategy that supports it. No rock unturned, no element left behind.',
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
    title: 'Design + Communication',
    blurb:
      "From how it looks to how it speaks — we make every touchpoint of your business crystal clear and built to convert.",
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
  monogram: string;
  href: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    name: 'SmokeyQ',
    tags: 'Digital Marketing',
    category: 'FMCG',
    monogram: 'SQ',
    href: 'https://www.weassistco.com/clients/smokeyq',
  },
  {
    name: 'Curated With Conscience',
    tags: 'Business Strategy, Software Development',
    category: 'Gift Hampers',
    monogram: 'CC',
    href: 'https://www.weassistco.com/clients/curated-with-conscience',
  },
  {
    name: 'House of Orange',
    tags: 'Digital Marketing',
    category: 'Furniture + Homewares',
    monogram: 'HO',
    href: 'https://www.weassistco.com/clients/house-of-orange',
  },
];

export interface Testimonial {
  quote: string;
  name: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Ultimately, it doesn't feel like you're working with an agency. It feels as if you are working with an extension of your own team. And when you're low on time and resources and need people who can hit the ground running, WAC step in with a well researched solution to every problem.",
    name: 'Hangatu Wyld',
  },
  {
    quote:
      "What a delight to work with everyone at We Assist. It's a bit of an understatement to call themselves 'Assist'. Every team member works extremely hard, with dedication and genuine passion for our business and its philosophy. That makes a difference — and this ethos delivers genuine results.",
    name: 'Hans & Ursula',
  },
  {
    quote:
      "After losing my whole management team at the start of Covid I felt like I was drowning. After discussing my options with Taylor we laid down a 3 month strategy to get my venue back on track — and that is exactly what they did, taking time to refurbish the place, design a signature cocktail menu and book relevant entertainment.",
    name: 'Lulu Ren',
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
  href: string;
}

export const ARTICLES: Article[] = [
  {
    title: 'Turning Big Plans into Real Results',
    tag: 'Business Development',
    href: 'https://www.weassistco.com/blogs/turning-big-plans-into-real-results',
  },
  {
    title: 'Just-in-Time Supply Chain Management vs FIFO',
    tag: 'Supply Chain',
    href: 'https://www.weassistco.com/blogs/just-in-time-vs-fifo',
  },
  {
    title: 'Building Relationships with Manufacturers in China',
    tag: 'The Bootstrapper',
    href: 'https://www.weassistco.com/blogs/building-relationships-with-manufacturers-in-china',
  },
];

export const STATS = [
  { value: '500%+', label: 'sales uplift delivered for a transport client' },
  { value: '12', label: 'specialists across Australia & China' },
  { value: '3', label: 'levels of business — startup to enterprise' },
  { value: '2020', label: 'founded in Melbourne, still founder-led' },
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
