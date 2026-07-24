import AdultosMayores from "../assets/proyectos/adultosMayores.avif";
import TechParts from "../assets/proyectos/techparts.avif";
import Metalurgica from "../assets/proyectos/metalurgicaescobar.avif";
import TodoApp from "../assets/proyectos/TodoDarkMode.avif";
import CodeShelf from "../assets/proyectos/codeShelf.avif";
import type { ProyectosProps } from "../types/types";

export const MisProyectos: ProyectosProps[] = [
  {
    id: 3,
    name: "Metalúrgica Escobar",
    descripcion:
      "Sitio web profesional para un taller de metalúrgica. Incluye presentación de servicios, galería de trabajos y formulario de contacto funcional. Diseño adaptado a la identidad de la marca.",
    imagen: Metalurgica,
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"] as const,
    repositorio: "https://github.com/alexidev23/metalurgica",
    pagina: "https://www.metalurgicaescobar.com/",
    destacado: true,
  },
  {
    id: 4,
    name: "Adultos mayores",
    descripcion:
      "Proyecto freelance para estudiantes de psicología. Página web informativa y accesible orientada a adultos mayores, con diseño claro y navegación simplificada.",
    imagen: AdultosMayores,
    tecnologias: ["React", "Tailwind CSS"] as const,
    repositorio: "https://github.com/alexidev23/proyecto-psicologia",
    pagina: "https://pagina-web-para-adultos-mayores.vercel.app/",
    destacado: true,
  },
  {
    id: 2,
    name: "TechParts – E-commerce de Repuestos",
    descripcion:
      "Aplicación e-commerce creada con React + TypeScript, usando React Router para la navegación, Tailwind CSS para el diseño y componentes shadcn/ui para una UI limpia y reutilizable. Catálogo filtrable y experiencia responsive.",
    imagen: TechParts,
    tecnologias: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Router",
    ] as const,
    repositorio: "https://github.com/alexidev23/TechParts",
    pagina: "https://techparts.vercel.app/",
  },
  {
    id: 1,
    name: "CodeShelf",
    descripcion:
      "Plataforma de cursos online para aprender a programar. Incluye catálogo de cursos con páginas de detalle y sección de contacto. Diseño moderno y responsivo con Tailwind CSS y shadcn/ui.",
    imagen: CodeShelf,
    tecnologias: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Router",
    ] as const,
    repositorio: "https://github.com/alexidev23/PFCoder-js-Alexis",
    pagina: "https://pf-coder-js-alexis.vercel.app/",
  },
  {
    id: 5,
    name: "ToDo App",
    descripcion:
      "Aplicación web para gestionar tareas. Permite agregar, editar, eliminar y marcar tareas como completadas.",
    imagen: TodoApp,
    tecnologias: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"] as const,
    repositorio: "https://github.com/alexidev23/todo-frontend",
    pagina: "https://todo-ts-three-kappa.vercel.app/",
  },
];
