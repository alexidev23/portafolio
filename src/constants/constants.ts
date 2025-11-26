// Proyectos
import AdultosMayores from '../assets/proyectos/adultosMayores.avif'
import Ecommerce from '../assets/proyectos/ecommerce.avif'
import Metalurgica from '../assets/proyectos/metalurgicaescobar.avif'
import TodoApp from '../assets/proyectos/TodoDarkMode.avif'
import type { ProyectosProps } from '../types/types'


export const MisProyectos: ProyectosProps[] = [
  {
    id: 1,
    name: 'Tienda Online',
    descripcion: 'Proyecto final para el curso de JavaScript en Coderhouse, donde presenté un ecommerce.',
    imagen: Ecommerce,
    tecnologias: ["Html", "Css", "JavaScript"],
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