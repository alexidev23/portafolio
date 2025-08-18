// Assets
import Linkedin from '../assets/linkedin.svg'
import GitHub from '../assets/github.svg'
import Curriculum from '../assets/file.svg'
// Proyectos
import Calculadora from '../assets/proyectos/calculadora.avif'
import Encriptador from '../assets/proyectos/encriptador.avif'
import TicTacToe from '../assets/proyectos/tictactoe.avif'
import RockPaperScissors from '../assets/proyectos/rockPaperScissors.avif'
import AdultosMayores from '../assets/proyectos/adultosMayores.avif'
import Ecommerce from '../assets/proyectos/ecommerce.avif'
import Metalurgica from '../assets/proyectos/metalurgicaescobar.avif'
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
    url: 'https://drive.google.com/file/d/1dhw7EHFkKQFU7F5BOy8ztEOWIttOpLjk/view?usp=sharing'
  }
]

export const homeParagraphs = [
  'Me gradué como Técnico superior en programación en Teclab y he complementado mis conocimientos con cursos especializados en Python, QA Manual y JavaScript en Coderhouse.',
  'Me apasiona crear sitios web funcionales, rápidos y atractivos, y asegurar su calidad mediante pruebas exhaustivas y atención al detalle.',
  'Actualmente ofrezco mis servicios como Desarrollador Front-End y QA Manual, ayudando a empresas y proyectos a construir productos digitales sólidos y confiables.',
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
    name: 'Calculadora',
    descripcion: 'Primer proyecto donde implementé JavaScript. Es una calculadora donde se pueden realizar operaciones básicas.',
    imagen: Calculadora,
    tecnologias: [Html, Css, JavaScript],
    repositorio: 'https://github.com/alexidev23/Calculadora',
    pagina: 'https://alexidev23.github.io/Calculadora/'
  },
  {
    id: 2,
    name: 'Encriptador de Texto',
    descripcion: 'Proyecto para el programa One - Oracle Next Education; es un encriptador y desencriptador de texto.',
    imagen: Encriptador,
    tecnologias: [Html, Css, JavaScript],
    repositorio: 'https://github.com/alexidev23/Encriptador-de-texto',
    pagina: 'https://alexidev23.github.io/Encriptador-de-texto/'
  },
  {
    id: 3,
    name: 'Tic-Tac-Toe',
    descripcion: 'Primer proyecto utilizando React y Tailwind. Idea basada en el canal de midudev.',
    imagen: TicTacToe,
    tecnologias: [React, Tailwind],
    repositorio: 'https://github.com/alexidev23/Tic-Tac-Toe',
    pagina: 'https://tic-tac-toe-brown-one.vercel.app/'
  },
  {
    id: 4,
    name: 'Rock-Paper-Scissors',
    descripcion: 'Idea basada en FrontEnd Mentor. Es un juego simple de piedra, papel o tijera.',
    imagen: RockPaperScissors,
    tecnologias: [React, Tailwind],
    repositorio: 'https://github.com/alexidev23/rock-paper-scissors-game',
    pagina: 'https://rock-paper-scissors-game-pi-snowy.vercel.app/'
  },
  {
    id: 5,
    name: 'Adultos mayores',
    descripcion: 'Proyecto freelance para estudiantes de psicología. Página destinada a adultos mayores.',
    imagen: AdultosMayores,
    tecnologias: [React, Tailwind],
    repositorio: 'https://github.com/alexidev23/proyecto-psicologia',
    pagina: 'https://pagina-web-para-adultos-mayores.vercel.app/'
  },
  {
    id: 6,
    name: 'Tienda Online',
    descripcion: 'Proyecto final para el curso de JavaScript en Coderhouse, donde presenté un ecommerce.',
    imagen: Ecommerce,
    tecnologias: [Html, Css, JavaScript],
    repositorio: 'https://github.com/alexidev23/PFCoder-js-Alexis',
    pagina: 'https://pf-coder-js-alexis.vercel.app/'
  },
  {
    id: 7,
    name: 'Metalúrgica Escobar',
    descripcion: 'Sitio web creado para un taller de metalúrgica. Incluye formulario de contacto funcional y diseño adaptado al cliente.',
    imagen: Metalurgica,
    tecnologias: [Nextjs, Typescript, Tailwind, Shadcn],
    repositorio: 'https://github.com/alexidev23/metalurgica',
    pagina: 'https://www.metalurgicaescobar.com/'
  }
]

export const aboutParagraphs = [
  'Soy Alexis Escobar, tengo 25 años y soy Técnico Superior en Programación (Teclab, 2023). Durante mi práctica profesional en ARGEC - IT Consulting participé en el desarrollo de proyectos reales que reforzaron mis habilidades técnicas y de trabajo en equipo.',
  'Actualmente me especializo de forma autodidacta en React y Tailwind CSS, y he complementado mi formación con cursos de Python, QA Manual y JavaScript en CoderHouse.',
  'Estoy en búsqueda de oportunidades como Desarrollador Frontend o QA Manual, donde pueda aportar mis conocimientos y seguir creciendo profesionalmente.'
]