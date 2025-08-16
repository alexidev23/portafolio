import React from 'react'
import Perfil from '../../assets/foto5.avif'
import { IconUser } from '../Icons/IconUser'

const aboutParagraphs = [
  'Soy Alexis Escobar, tengo 24 años y soy Técnico Superior en Programación (Teclab, 2023). Durante mi práctica profesional en ARGEC - IT Consulting participé en el desarrollo de proyectos reales que reforzaron mis habilidades técnicas y de trabajo en equipo.',
  'Actualmente me especializo de forma autodidacta en React y Tailwind CSS, y he complementado mi formación con cursos de Python, QA Manual y JavaScript en CoderHouse.',
  'Estoy en búsqueda de oportunidades como Desarrollador Frontend o QA Manual, donde pueda aportar mis conocimientos y seguir creciendo profesionalmente.'
]

export function About () {
  return (
    <section
      id='sobreMi'
      className='py-28 flex flex-col max-w-[800px] w-full mx-auto justify-center'
    >
      <div className='flex px-4 pb-8 items-center gap-2'>
        <IconUser />
        <h2 className='text-2xl sm:text-3xl font-bold uppercase text-links'>Sobre mi</h2>
      </div>
      <div className='flex flex-col-reverse lg:flex-row w-auto  mx-4 lg:mx-0'>
        <div className='flex flex-col gap-4 w-full lg:w-[500px]'>
          {aboutParagraphs.map((text, idx) => (
            <p  
              key={idx}
              className='text-white font-medium text-sm text-balance'
            >
              {text}
            </p>
          ))}
        </div>
        <div className='flex justify-center items-center mb-6 lg:mb-0'>
          <img
            src={Perfil}
            alt='Foto de Alexis Escobar'
            className='rounded-3xl lg:w-80 w-56'
          />
        </div>
      </div>
    </section>
  )
}
