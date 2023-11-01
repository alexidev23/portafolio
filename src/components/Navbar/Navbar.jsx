import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Links } from './Links'
import Logo from '../../assets/img/iconito.svg'

export function Navbar () {
  const [nav, setNav] = useState(false)
  return (
    <div className='flex justify-between items-center md:w-full w-full h-20 fixed px-4 bg-background z-50'>
      <div className='md:mx-16 mx-4'>
        <a href='Home' className='md:text-3xl text-2xl font-semibold text-links flex items-center'>
          <img src={Logo} alt='Logo AlexisDev' className='w-10' />
          AlexisDev
        </a>
      </div>

      <ul className='hidden xl:flex mx-16'>
        <Links />
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 xl:hidden'
      >
        {
        nav
          ? <FaTimes size={25} color='#609dfa' />
          : <FaBars size={25} color='#609dfa' />
        }
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-20 left-0 w-full h-96 gap-10 text-links bg-background'>
          <Links />
        </ul>
      )}

    </div>
  )
}
