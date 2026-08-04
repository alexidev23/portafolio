export type NavLink = {
  href: string;
  label: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  featured?: boolean;
  demoUrl: string;
  repoUrl: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export const profile = {
  name: "Alexis Escobar",
  role: "Desarrollador frontend",
  headline: "Interfaces limpias, construidas con React, Svelte y Next.js",
  subtitle:
    "Disponible para trabajo remoto. Actualmente expandiendo mi stack hacia Node.js y Express.",
  email: "alexisescobardev@gmail.com",
  location: "Córdoba, Argentina",
  githubUrl: "https://github.com/alexidev23",
  linkedinUrl: "https://www.linkedin.com/in/alexis-escobar-95b491184/",
} as const;

export const navLinks: NavLink[] = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export const hero = {
  label: "whoami",
  title: profile.name,
  role: profile.role,
  headline: profile.headline,
  subtitle: profile.subtitle,
  ctas: [
    { label: "ver_proyectos", href: "#proyectos", variant: "default" },
    { label: "github", href: profile.githubUrl, variant: "outline" },
  ],
} as const;

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Svelte",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    category: "Backend",
    skills: ["Python", "PHP (básico)"],
  },
  {
    category: "Herramientas",
    skills: ["Git", "GitHub", "Vercel", "Vite"],
  },
];

export const projects: Project[] = [
  {
    slug: "e-commerce",
    title: "E-Commerce Fullstack",
    description:
      "Tienda online con catálogo de productos, carrito de compras y flujo de checkout completo. Arquitectura de componentes escalable con TypeScript, UI construida con shadcn/ui. En desarrollo: integración de backend con Node.js/Express y base de datos relacional.",
    stack: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "shadcn/ui",
    ],
    image: "/images/proyectos/techparts.avif",
    featured: true,
    demoUrl: "https://techparts-ecommerce.vercel.app/",
    repoUrl: "https://github.com/alexidev23/techparts-ecommerce",
  },
  {
    slug: "taller-metalurgico",
    title: "Landing Page — Taller Metalúrgico",
    description:
      "Sitio institucional con formulario de contacto funcional, enfoque en performance y SEO. Diseño mobile-first, score de rendimiento optimizado en Lighthouse.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/proyectos/metalurgicaescobar.avif",
    demoUrl: "https://metalurgica-wine.vercel.app/",
    repoUrl: "https://github.com/alexidev23/metalurgica",
  },
  {
    slug: "psicologia-adulto-mayor",
    title: "Landing Page — Proyecto de Psicología",
    description:
      "Proyecto freelance para estudiantes de psicología orientado al adulto mayor. Diseño responsivo con foco en accesibilidad (WCAG), legibilidad y jerarquía visual.",
    stack: ["React", "Tailwind CSS"],
    image: "/images/proyectos/adultosMayores.avif",
    demoUrl: "https://proyecto-psicologia-plum.vercel.app/",
    repoUrl: "https://github.com/alexidev23/proyecto-psicologia",
  },
];

export const experience: Experience[] = [
  {
    role: "Desarrollador Frontend Freelance",
    company: "Daira IT Group",
    period: "Mayo 2026 – presente",
    location: "Remoto",
    points: [
      "Implemento estructuras visuales a partir de diseños predefinidos con Svelte, TypeScript y Tailwind CSS",
      "Integro datos dinámicos desde APIs REST en las interfaces",
      "Coordino con el equipo backend para una integración eficiente",
      "Aplico Tailwind para estilos coherentes y mobile-first",
    ],
  },
  {
    role: "Desarrollador Frontend · Práctica Profesionalizante",
    company: "Argec IT Consulting",
    period: "Marzo 2023 – Diciembre 2023",
    location: "Córdoba, Argentina",
    points: [
      "Desarrollé desde cero una app completa con blog y panel de administración",
      "Implementé frontend en React + CSS, integrado con backend PHP para CRUD",
      "Apliqué diseño responsivo con Flexbox y CSS Grid, cross-device",
      "Participé en el ciclo completo: diseño, implementación, testing, debugging",
    ],
  },
];

export const about = {
  bio: "Desarrollador frontend especializado en React, Svelte y Next.js. Construyo interfaces limpias y responsivas, con foco en experiencia de usuario y buenas prácticas. Actualmente expandiendo mi stack hacia Node.js y Express para un perfil fullstack. Disponible para trabajo remoto.",
  education: "Técnico Superior en Programación — TECLAB",
  certifications: {
    institution: "CoderHouse",
    items: ["JavaScript Avanzado", "Tester QA Manual", "Python & Django"],
  },
} as const;

export const contact = {
  email: profile.email,
  location: profile.location,
  links: [
    { label: "GitHub", href: profile.githubUrl },
    { label: "LinkedIn", href: profile.linkedinUrl },
  ],
} as const;
