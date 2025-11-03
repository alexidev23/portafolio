// Assets
import Linkedin from '../assets/linkedin.svg'
import GitHub from '../assets/github.svg'
import Curriculum from '../assets/file.svg'
// Proyectos
import TicTacToe from '../assets/proyectos/tictactoe.avif'
import RockPaperScissors from '../assets/proyectos/rockPaperScissors.avif'
import AdultosMayores from '../assets/proyectos/adultosMayores.avif'
import Ecommerce from '../assets/proyectos/ecommerce.avif'
import Metalurgica from '../assets/proyectos/metalurgicaescobar.avif'
import TodoApp from '../assets/proyectos/TodoDarkMode.avif'
// Icons
import Html from '../assets/html5.svg'
import Css from '../assets/css.svg'
import JavaScript from '../assets/javascript.svg'
import React from '../assets/react.svg'
import Tailwind from '../assets/tailwindcss.svg'
import Nextjs from '../assets/nextjs_icon_dark.svg'
import Shadcn from '../assets/shadcn-ui_dark.svg'
import Typescript from '../assets/typescript.svg'
import type { ExperienciaProps, linksNavBarProps, LinksSocialMediaProps, ProyectosProps } from '../types/types'

export const linksNavBar: linksNavBarProps[] = [
  {
    id: 1,
    name: 'Experiencia',
    label: 'experiencia',
    url: '#experiencia'
  },
  {
    id: 2,
    name: 'Proyectos',
    label: 'proyectos',
    url: '#proyectos'
  },
  {
    id: 3,
    name: 'Sobre Mi',
    label: 'sobreMi',
    url: '#sobreMi'
  },
  {
    id: 4,
    name: 'Contacto',
    label: 'contacto',
    url: 'mailto:alexisescobardev@gmail.com'
  }
]

export const LinksSocialMedia: LinksSocialMediaProps[] = [
  {
    id: 1,
    name: 'Linkedin',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/alexis-escobar-95b491184/'
  },
  {
    id: 2,
    name: 'Github',
    icon: GitHub,
    url: 'https://github.com/alexidev23'
  },
  {
    id: 3,
    name: 'Curriculum',
    icon: Curriculum,
    url: 'https://drive.google.com/file/d/1dnLX-WhaPYhsUFxUiTAHrehEyd9nPKz6/view?usp=drive_link'
  }
]

export const homeParagraphs = [
  'Soy Técnico Superior en Programación graduado en Teclab, con formación complementaria en Python, QA Manual y JavaScript (Coderhouse).',
  'Me apasiona construir interfaces modernas, rápidas y funcionales, cuidando tanto la experiencia del usuario como la calidad del código.',
  'Actualmente me desempeño como Desarrollador Front-End, centrado en React, TypeScript, Vite, Tailwind y Shadcn, explorando también el testing automatizado con Cypress.',
  '🚀 Siempre en busca de nuevos desafíos para seguir creciendo como profesional.'
]

export const experiencias: ExperienciaProps[] = [
  {
    puesto: 'Desarrollador Freelance',
    empresa: 'Proyectos Independientes',
    periodo: '2024 – Actualidad',
    descripcion: [
      'Plataforma para estudiantes de psicología: desarrollo de un sitio web informativo y de recursos, optimizado para dispositivos móviles.',
      'Página web para taller metalúrgico: diseño e implementación de un sitio corporativo con catálogo de servicios y formulario de contacto.'
    ]
  },
  {
    puesto: 'Desarrollador Junior',
    empresa: 'ARGEC - IT Consulting',
    periodo: '07/2023 - 12/2023',
    descripcion: [
      'Lideré el desarrollo de la página de la empresa, utilizando React y Tailwind para el frontend y PHP para el backend.'
    ]
  }
]

export const MisProyectos: ProyectosProps[] = [
  {
    id: 1,
    name: 'Tic-Tac-Toe',
    descripcion: 'Primer proyecto utilizando React y Tailwind. Idea basada en el canal de midudev.',
    imagen: TicTacToe,
    tecnologias: [React, Tailwind],
    repositorio: 'https://github.com/alexidev23/Tic-Tac-Toe',
    pagina: 'https://tic-tac-toe-brown-one.vercel.app/'
  },
  {
    id: 2,
    name: 'Rock-Paper-Scissors',
    descripcion: 'Idea basada en FrontEnd Mentor. Es un juego simple de piedra, papel o tijera.',
    imagen: RockPaperScissors,
    tecnologias: [React, Tailwind],
    repositorio: 'https://github.com/alexidev23/rock-paper-scissors-game',
    pagina: 'https://rock-paper-scissors-game-pi-snowy.vercel.app/'
  },
  {
    id: 3,
    name: 'Adultos mayores',
    descripcion: 'Proyecto freelance para estudiantes de psicología. Página destinada a adultos mayores.',
    imagen: AdultosMayores,
    tecnologias: [React, Tailwind],
    repositorio: 'https://github.com/alexidev23/proyecto-psicologia',
    pagina: 'https://pagina-web-para-adultos-mayores.vercel.app/'
  },
  {
    id: 4,
    name: 'Tienda Online',
    descripcion: 'Proyecto final para el curso de JavaScript en Coderhouse, donde presenté un ecommerce.',
    imagen: Ecommerce,
    tecnologias: [Html, Css, JavaScript],
    repositorio: 'https://github.com/alexidev23/PFCoder-js-Alexis',
    pagina: 'https://pf-coder-js-alexis.vercel.app/'
  },
  {
    id: 5,
    name: 'Metalúrgica Escobar',
    descripcion: 'Sitio web creado para un taller de metalúrgica. Incluye formulario de contacto funcional y diseño adaptado al cliente.',
    imagen: Metalurgica,
    tecnologias: [Nextjs, Typescript, Tailwind, Shadcn],
    repositorio: 'https://github.com/alexidev23/metalurgica',
    pagina: 'https://www.metalurgicaescobar.com/'
  },
  {
    id: 6,
    name: 'ToDo App',
    descripcion: 'Aplicación web para gestionar tareas. Permite agregar, editar, eliminar y marcar tareas como completadas.',
    imagen: TodoApp,
    tecnologias: [React, Typescript, Tailwind, Shadcn],
    repositorio: 'https://github.com/alexidev23/todo-frontend',
    pagina: 'https://todo-ts-three-kappa.vercel.app/'
  },
]

export const aboutParagraphs = [
  'Soy Alexis Escobar, tengo 25 años y soy Técnico Superior en Programación (Teclab, 2023). Durante mi práctica profesional en ARGEC - IT Consulting, participé en el desarrollo de proyectos reales que fortalecieron mis habilidades técnicas y mi capacidad para trabajar en equipo.',
  'Actualmente me especializo de forma autodidacta en React y Tailwind CSS, y complemento mi formación con cursos de Python, QA Manual y JavaScript en CoderHouse.',
  'También me encuentro aprendiendo Cypress para profundizar en testing automatizado y mejorar la calidad de los desarrollos en los que participo.',
  'Busco nuevas oportunidades como Desarrollador Frontend, donde pueda aportar valor con mi conocimiento, compromiso y entusiasmo por seguir creciendo profesionalmente.'
]