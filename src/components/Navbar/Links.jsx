import React from 'react'
import { Link } from 'react-scroll'

export function Links () {
  const links = [
    {
      id: 1,
      name: 'Home'
    },
    {
      id: 2,
      name: 'Sobre mi'
    },
    {
      id: 3,
      name: 'Portafolio'
    },
    {
      id: 4,
      name: 'Contacto'
    }
  ]

  return (
    <>
      {links.map(link => (
        <li key={link.id} className='text-links px-4 cursor-pointer uppercase text-xl lg:text-lg font-bold hover:text-gray-200 duration-200'>
          <Link to={link.name} smooth duration={500} className='hover:border-b-2'>{link.name}</Link>
        </li>
      ))}
    </>
  )
}
