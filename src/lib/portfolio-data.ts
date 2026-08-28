export const person = {
  name: "Al Hassan Abid",
  role: "Web Developer & Software Engineer",
  location: "Khulna, Bangladesh",
  email: "hello@alhassanabid.dev",
  phone: "+8801785608414",
  headline: "Building digital experiences with code, data & creativity.",
  intro:
    "A technically minded professional combining software development, data analysis, digital marketing and visual design — with a focus on usability, efficiency and business outcomes.",
};

export const pillars = [
  {
    key: "CODE",
    title: "Software & Web Development",
    body: "Clean, maintainable builds across web and application logic.",
  },
  {
    key: "DATA",
    title: "Analysis & Predictive Models",
    body: "SQL, forecasting and dashboards that turn numbers into decisions.",
  },
  {
    key: "CREATIVE",
    title: "UI/UX & Visual Design",
    body: "Interfaces and assets designed for clarity and confidence.",
  },
  {
    key: "MARKETING",
    title: "Digital & Social Media Marketing",
    body: "Campaign thinking and advertising grounded in measurable results.",
  },
];

export const credibility = [
  "Diploma in Computer Science & Technology",
  "Top 15% of batch",
  "Founder & Software Engineer at MADYS",
];

export type Skill = {
  name: string;
  icon: string;
  level: string;
  pct: number;
};

export const skillGroups: {
  category: string;
  context: string;
  skills: Skill[];
}[] = [
  {
    category: "Programming Languages",
    context: "Core languages used to build and ship products.",
    skills: [
      { name: "HTML/CSS", icon: "html", level: "Expert", pct: 96 },
      { name: "JavaScript", icon: "javascript", level: "High", pct: 84 },
      { name: "PHP", icon: "php", level: "Intermediate", pct: 58 },
      { name: "Java", icon: "java", level: "High", pct: 78 },
      { name: "Python", icon: "python", level: "Expert", pct: 93 },
    ],
  },
  {
    category: "Libraries & Frameworks",
    context: "Frontend and backend frameworks in the stack.",
    skills: [
      { name: "React.js", icon: "react", level: "Intermediate", pct: 65 },
      { name: "Node.js", icon: "node", level: "Moderate", pct: 55 },
      { name: "Next.js", icon: "next", level: "Moderate", pct: 55 },
    ],
  },
  {
    category: "Database",
    context: "Data storage and modelling layers.",
    skills: [
      { name: "Firebase", icon: "firebase", level: "Newbie", pct: 35 },
      { name: "MongoDB", icon: "mongodb", level: "Newbie", pct: 35 },
      { name: "Mongoose", icon: "mongoose", level: "Newbie", pct: 30 },
    ],
  },
  {
    category: "Tools & Platforms",
    context: "Workflow, versioning and system-level practice.",
    skills: [
      { name: "GitHub", icon: "github", level: "Advanced", pct: 88 },
      { name: "Git", icon: "git", level: "Advanced", pct: 88 },
      { name: "System Automation", icon: "automation", level: "Advanced", pct: 80 },
      { name: "Multi-Panel Architecture", icon: "panels", level: "Advanced", pct: 78 },
      { name: "Database Management", icon: "database", level: "Advanced", pct: 80 },
    ],
  },
];

export const experience = [
  {
    company: "MADYS",
    title: "Founder & Software Engineer",
    location: "Khulna, Bangladesh",
    period: "2024–2026",
    points: [
      "Built multiple predictive models to forecast weekly sales demand, leading to a 10% reduction in inventory costs.",
      "Optimized dashboards for 10+ products, improving efficiency and cutting turnaround time by 15%.",
      "Mentored team members, authored technical documentation and designed UI/UX visual assets for internal deployment.",
    ],
  },
  {
    company: "LSKIT",
    title: "Data Entry Specialist",
    location: "Khulna, Bangladesh",
    period: "2023–2024",
    points: [
      "Maintained 90% data accuracy across high-volume tasks leveraging meticulous QC and problem solving skills.",
      "Maintained a consistent typing speed of 70+ WPM while sustaining 90% accuracy rate accelerating data processing time.",
      "Enhanced data processing efficiency by 20% annually by organizing and tagging files over a 6-month period.",
    ],
  },
];

export const projects = [
  {
    slug: "fire-fighter-robot-car",
    name: "Fire Fighter Robot Car",
    period: "Sep 2024 – Oct 2024",
    tagline: "Autonomous fire detection and suppression for hard-to-reach spaces.",
    overview:
      "Developed an automated robotic vehicle using Arduino UNO, flame sensors, IR sensors, and motion detectors to autonomously detect and suppress residential fire hazards also in some critical hard to reach spaces.",
    technologies: [
      "Arduino UNO",
      "Flame sensors",
      "IR sensor",
      "Motion sensors",
      "Intelligent Alarm system",
    ],
    problem:
      "Residential fire hazards can start in critical, hard-to-reach spaces where response is delayed.",
    solution:
      "Combined flame, IR and motion sensing with an intelligent alarm system on an Arduino UNO controlled vehicle.",
    outcome:
      "Engineered an automated emergency response protocol that reduced response times during testing simulations.",
  },
  {
    slug: "solar-sync",
    name: "Solar Sync",
    period: "May 2026 – Jun 2026",
    tagline: "SQL-driven analysis of solar performance and grid power sharing.",
    overview:
      "Analyzed consumer behavior and electricity usage patterns using complex SQL queries to optimize electricity bills and power usage.",
    technologies: ["SQL", "Data Analysis", "Dashboards"],
    problem:
      "Households lacked visibility into when solar generation or grid power was the better source.",
    solution:
      "Provided accurate insights on solar panel performance and grid power sharing from usage data.",
    outcome:
      "Lowered electricity cost and improved efficiency by switching between power sources to the highest level.",
  },
];

export const achievements = [
  {
    value: 50,
    suffix: "%",
    label: "reduction in manual work",
    detail: "The Next-Gen Tech Innovation Award for an outstanding task using Manus AI — MADYS.",
  },
  {
    value: 200,
    suffix: "+",
    label: "participants",
    detail:
      "Runner-up in the KhulnaCoders Python Programming Competition, out of 200+ participants.",
  },
];

export const education = {
  institute: "Mangrove Institute of Science & Technology",
  location: "Khulna, Bangladesh",
  program: "Diploma Engineering in Computer Science & Technology",
  period: "2022–2027",
  note: "Among the top 15% of the batch.",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java)",
    "Computer Networking",
    "Database Management Systems",
  ],
};

export const certifications = [
  "Python Programming",
  "IT Support & Services",
  "Web Design & Development",
];

export const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/alhassanabid/" },
  { name: "GitHub", url: "https://github.com/AlHassanAbid" },
  { name: "Instagram", url: "https://www.instagram.com/al_hassan_abid/" },
  { name: "WhatsApp", url: "https://wa.me/qr/N3APUDSF7ENOJ1" },
] as const;
