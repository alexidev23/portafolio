// Proyectos
import AdultosMayores from '../assets/proyectos/adultosMayores.avif'
import TechParts from '../assets/proyectos/techparts.avif'
import Metalurgica from '../assets/proyectos/metalurgicaescobar.avif'
import TodoApp from '../assets/proyectos/TodoDarkMode.avif'
import type { ProyectosProps } from '../types/types'


export const MisProyectos: ProyectosProps[] = [
  {
    id: 1,
    name: 'TechParts – E-commerce de Repuestos para Celulares',
    descripcion: 'Aplicación e-commerce creada con React + TypeScript, usando React Router para la navegación, Tailwind para el diseño y componentes shadcn/ui para una UI limpia y reutilizable. Catálogo filtrable y experiencia responsive.',
    imagen: TechParts,
    tecnologias: ["React", "TypeScript", "Tailwind", "shadcn/ui", "React Router"],
    repositorio: 'https://github.com/alexidev23/PFCoder-js-Alexis',
    pagina: 'https://pf-coder-js-alexis.vercel.app/'
  },
  {
    id: 2,
    name: 'Adultos mayores',
    descripcion: 'Proyecto freelance para estudiantes de psicología. Página destinada a adultos mayores.',
    imagen: AdultosMayores,
    tecnologias: ["React", "Tailwind"],
    repositorio: 'https://github.com/alexidev23/proyecto-psicologia',
    pagina: 'https://pagina-web-para-adultos-mayores.vercel.app/'
  },
  {
    id: 3,
    name: 'Metalúrgica Escobar',
    descripcion: 'Sitio web creado para un taller de metalúrgica. Incluye formulario de contacto funcional y diseño adaptado al cliente.',
    imagen: Metalurgica,
    tecnologias: ["Nextjs", "Typescript", "Tailwind", "Shadcn"],
    repositorio: 'https://github.com/alexidev23/metalurgica',
    pagina: 'https://www.metalurgicaescobar.com/'
  },
  {
    id: 4,
    name: 'ToDo App',
    descripcion: 'Aplicación web para gestionar tareas. Permite agregar, editar, eliminar y marcar tareas como completadas.',
    imagen: TodoApp,
    tecnologias: ["React", "Typescript", "Tailwind", "Shadcn"],
    repositorio: 'https://github.com/alexidev23/todo-frontend',
    pagina: 'https://todo-ts-three-kappa.vercel.app/'
  },
]