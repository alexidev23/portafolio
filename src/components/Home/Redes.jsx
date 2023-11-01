import React from 'react'
import Instagram from '../../assets/img/instagram.svg'
import Linkedin from '../../assets/img/linkedin.svg'
import Github from '../../assets/img/github.svg'

export function Redes () {
  const Social = [
    {
      id: 1,
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/alexescobar67/'
    },
    {
      id: 2,
      name: 'Linkedin',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/alexis-escobar-95b491184/'
    },
    {
      id: 3,
      name: 'Github',
      icon: Github,
      url: 'https://github.com/alexidev23'
    }
  ]
  return (
    <ul className='flex gap-4 mt-2 justify-center'>
      {
        Social.map(social => (
          <li key={social.id} className='rounded-full hover:animate-jump '>
            <a
              target='_blank'
              href={social.url} rel='noreferrer'
            >
              <img src={social.icon} className='h-9' />
            </a>

          </li>
        ))
      }
    </ul>
  )
}
