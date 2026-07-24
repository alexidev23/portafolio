import AdultosMayores from "../assets/proyectos/adultosMayores.avif";
import TechParts from "../assets/proyectos/techparts.avif";
import Metalurgica from "../assets/proyectos/metalurgicaescobar.avif";
import TodoApp from "../assets/proyectos/TodoDarkMode.avif";
import CodeShelf from "../assets/proyectos/codeShelf.png";
import type { ProyectosProps } from "../types/types";

export const MisProyectos: ProyectosProps[] = [
  {
    id: 1,
    name: "CodeShelf",
    descripcion:
      "Proyecto personal: una plataforma de cursos online para aprender a programar. Incluye un catálogo de cursos, cada uno con su propia página de detalles, y una sección de contacto. El diseño es moderno y responsivo, utilizando Tailwind CSS y componentes de shadcn/ui para una experiencia de usuario fluida.",
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
    id: 2,
    name: "TechParts – E-commerce de Repuestos para Celulares",
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
    id: 3,
    name: "Adultos mayores",
    descripcion:
      "Proyecto freelance para estudiantes de psicología. Página destinada a adultos mayores.",
    imagen: AdultosMayores,
    tecnologias: ["React", "Tailwind CSS"] as const,
    repositorio: "https://github.com/alexidev23/proyecto-psicologia",
    pagina: "https://pagina-web-para-adultos-mayores.vercel.app/",
  },
  {
    id: 4,
    name: "Metalúrgica Escobar",
    descripcion:
      "Sitio web creado para un taller de metalúrgica. Incluye formulario de contacto funcional y diseño adaptado al cliente.",
    imagen: Metalurgica,
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"] as const,
    repositorio: "https://github.com/alexidev23/metalurgica",
    pagina: "https://www.metalurgicaescobar.com/",
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
