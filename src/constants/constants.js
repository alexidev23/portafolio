// Section Home
import Linkedin from '../assets/linkedin.svg'
import GitHub from '../assets/github.svg'
import Curriculum from '../assets/file.svg'
// Section Portafolio
// Projects
import Calculadora from '../assets/proyectos/calculadora.avif'
import Encriptador from '../assets/proyectos/encriptador.webp'
import TicTacToe from '../assets/proyectos/tictactoe.avif'
// Icons
import Html from '../assets/html5.svg'
import Css from '../assets/css.svg'
import JavaScript from '../assets/javascript.svg'
import React from '../assets/react.svg'
import Tailwind from '../assets/tailwindcss.svg'

export const linksNavBar = [
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

export const LinksMedialSocial = [
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
    url: 'https://drive.google.com/file/d/1ttY-efzPmaNnxvW1_sySEEZV_8IftWWY/view?usp=sharing'
  }
]

export const MisProyectos = [
  {
    id: 1,
    name: 'Calculadora',
    descripcion: 'Primer proyecto donde implemento JavaScript, es una calculadora donde se pueden realizar las operaciones básicas.',
    imagen: Calculadora,
    tecnologias: [Html, Css, JavaScript],
    repositorio: 'https://github.com/alexidev23/Calculadora',
    pagina: 'https://alexidev23.github.io/Calculadora/'
  },
  {
    id: 2,
    name: 'Encriptador de Texto',
    descripcion: 'Proyecto para el programa de One - Oracle Next Education; es un encriptador de texto y a su vez un desencriptador.',
    imagen: Encriptador,
    tecnologias: [Html, Css, JavaScript],
    repositorio: 'https://github.com/alexidev23/Encriptador-de-texto',
    pagina: 'https://alexidev23.github.io/Encriptador-de-texto/'
  },
  {
    id: 3,
    name: 'Tic-Tac-Toe',
    descripcion: 'Primer proyecto utilizando react y tailwind, idea sacada del canal de midudev.',
    imagen: TicTacToe,
    tecnologias: [React, Tailwind],
    repositorio: 'https://github.com/alexidev23/Tic-Tac-Toe',
    pagina: 'https://tic-tac-toe-brown-one.vercel.app/'
  }
]
