import React from 'react'
import Linkedin from '../../assets/img/linkedin.svg'
import Github from '../../assets/img/github.svg'
import Curriculum from '../../assets/img/document.svg'

export function Redes () {
  const Social = [
    {
      id: 1,
      name: 'Linkedin',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/alexis-escobar-95b491184/'
    },
    {
      id: 2,
      name: 'Github',
      icon: Github,
      url: 'https://github.com/alexidev23'
    },
    {
      id: 3,
      name: 'Curriculum',
      icon: Curriculum,
      url: 'https://drive.google.com/file/d/18LunZtdNAgxy--aEpc6zxS7Gm-fLx4rW/view?usp=sharing'
    }
  ]
  return (
    <div className='flex gap-4 xs:gap-1 mt-2 xs:justify-center sm:justify-normal'>
      {
        Social.map(social => (
          <a
            key={social.id}
            aria-label={social.name}
            href={social.url} rel='noreferrer'
            target='_blank'
            className='bg-white h-6 px-2 flex gap-1 items-center justify-center rounded-full hover:animate-jump hover:animate-once hover:animate-duration-500 hover:animate-ease-in-out'
          >
            {/* Hacer que si no tiene icono no se vea */}
            {social.icon && <img src={social.icon} alt={`Icono de ${social.name}`} className='h-4' />}
            <span>{social.name}</span>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-3 xs:hidden sm:flex'>
              <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25' />
            </svg>
          </a>
        ))
      }
    </div>
  )
}
