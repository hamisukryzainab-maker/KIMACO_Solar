import { ASSETS } from "./constants";

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Quality", href: "#quality" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
] as const;

export type IconName =
  | "solar" | "wrench" | "package" | "lightbulb" | "trending"
  | "customers" | "shield" | "hardhat" | "inspection" | "gauge"
  | "settings" | "improvement" | "leaf" | "headset";

export type Service = {
  title: string;
  description: string;
  icon: IconName;
  shortTitle: string;
};

export const services: Service[] = [
  {
    title: "Solar System Design & Installation",
    description: "Professional design and installation for residential, commercial, institutional and industrial applications.",
    icon: "solar",
    shortTitle: "Design & Installation",
  },
  {
    title: "Solar System Maintenance & Technical Support",
    description: "Reliable maintenance and technical support to ensure optimal system performance and safety.",
    icon: "wrench",
    shortTitle: "Maintenance & Support",
  },
  {
    title: "Solar Equipment Supply & Distribution",
    description: "Quality solar equipment and components for residential, commercial and industrial applications.",
    icon: "package",
    shortTitle: "Equipment Supply",
  },
  {
    title: "Solar Energy Consultation & Project Development",
    description: "Professional consultation and project development to help you find the right solar solution.",
    icon: "lightbulb",
    shortTitle: "Consultation & Development",
  },
  {
    title: "Solar System Upgrades & Energy Optimization",
    description: "Improve performance, capacity and reliability of existing solar installations.",
    icon: "trending",
    shortTitle: "Upgrades & Optimization",
  },
];

export type Product = {
  title: string;
  image: string;
  alt: string;
  contain: boolean;
};

export const products: Product[] = [
  { title: "Solar Panels", image: ASSETS.panels, alt: "Solar panels and solar power equipment", contain: true },
  { title: "Solar Inverters", image: ASSETS.inverters, alt: "Sako solar power inverter", contain: true },
  { title: "Hybrid & Off-Grid Systems", image: ASSETS.hybrid, alt: "WHC solar hybrid and off-grid system components", contain: true },
  { title: "Battery Energy Storage", image: ASSETS.battery, alt: "Battery energy storage products", contain: true },
  { title: "Complete Solar Power Solutions", image: ASSETS.complete, alt: "Solar panels generating clean energy in the sunshine", contain: false },
];

export const qualityCommitments: { title: string; icon: IconName }[] = [
  { title: "Customer-Focused Solutions", icon: "customers" },
  { title: "Quality Products & Components", icon: "shield" },
  { title: "Professional Installation", icon: "hardhat" },
  { title: "Inspection & Testing", icon: "inspection" },
  { title: "Performance & Reliability", icon: "gauge" },
  { title: "Preventive Maintenance", icon: "settings" },
  { title: "Continuous Improvement", icon: "improvement" },
  { title: "Health, Safety & Environmental Responsibility", icon: "leaf" },
];

export type TeamMember = {
  name: string;
  role: string;
  email: string;
  image: string;
  position: string;
  biography: string;
};

export const management: TeamMember[] = [
  {
    name: "Engr. Abubakar Murtala",
    role: "Founder / CEO",
    email: "am@kimacosolar.com.ng",
    image: ASSETS.ceo,
    position: "50% 32%",
    biography: "A registered Civil and Petroleum Engineer with 20+ years of professional experience, spanning engineering, construction, highway maintenance, petroleum, project management, agribusiness, and international business operations. He provides strategic leadership and oversees KIMACO’s engineering, projects, operations, and business development activities.",
  },
  {
    name: "Saminu Ibrahim",
    role: "General Manager (GM)",
    email: "si@kimacosolar.com.ng",
    image: ASSETS.saminu,
    position: "50% 30%",
    biography: "An experienced management professional responsible for coordinating KIMACO’s day-to-day operations, administrative activities, and business functions. He supports management in ensuring efficient execution of company objectives, team coordination, and effective service.",
  },
  {
    name: "Rabiu Ismail",
    role: "Operations Manager (OM)",
    email: "ri@kimacosolar.com.ng",
    image: ASSETS.rabiu,
    position: "50% 20%",
    biography: "A results-driven operations professional responsible for coordinating field activities, project execution, logistics, and operational teams. He supports efficient workflow, quality service, and timely implementation of KIMACO’s projects and business operations.",
  },
  {
    name: "Anisa Abubakar Murtala",
    role: "Relationship Officer (RO)",
    email: "aa@kimacosolar.com.ng",
    image: ASSETS.anisa,
    position: "50% 18%",
    biography: "A customer-focused professional responsible for maintaining client relationships, supporting business communication, and coordinating customer needs. She contributes to client satisfaction, business development, and the delivery of a professional customer experience.",
  },
  {
    name: "Yusuf Sadi",
    role: "Transports Officer (TO)",
    email: "ys@kimacosolar.com.ng",
    image: ASSETS.yusuf,
    position: "50% 22%",
    biography: "A dependable transport professional responsible for the safe and efficient transportation of the Founder/CEO, staff, and company personnel. He supports daily mobility, vehicle coordination, logistics, and timely transportation for company activities.",
  },
];

export type Project = {
  category: string;
  image: string;
  alt: string;
  position?: string;
};

export const projects: Project[] = [
  { category: "Residential", image: ASSETS.worker, alt: "KIMACO solar professional inspecting a residential rooftop solar installation", position: "45% 40%" },
  { category: "Commercial", image: ASSETS.commercial, alt: "Commercial solar inverter and battery installation", position: "50% 50%" },
  { category: "Institutional", image: ASSETS.institutional, alt: "Solar panels and wall-mounted inverter equipment for institutional applications" },
  { category: "Industrial", image: ASSETS.industrial, alt: "KIMACO technician working with industrial solar and power equipment", position: "40% 40%" },
];

export const partners = [
  { name: "WHC Solar", image: ASSETS.whc },
  { name: "Dalkiranlar Solar", image: ASSETS.dalkiranlar },
  { name: "Beve Solar", image: ASSETS.beve },
  { name: "Sako Solar", image: ASSETS.sako },
  { name: "Tera Solar", image: ASSETS.tera },
  { name: "Itel Solar", image: ASSETS.itel },
  { name: "Aurora Solar", image: ASSETS.aurora },
];
