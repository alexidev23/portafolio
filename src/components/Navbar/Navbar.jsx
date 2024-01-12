import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Links } from './Links'
import Logo from '../../assets/img/iconito.svg'
import { Link } from 'react-scroll'

export function Navbar () {
  const [nav, setNav] = useState(false)
  return (
    <header className='flex justify-between items-center w-full h-20 fixed px-4 bg-background z-50'>
      <div className='lg:mx-16 mx-4'>
        <Link to='Home' smooth duration={500} className='md:text-3xl text-2xl font-semibold text-links flex items-center cursor-default'>
          <img src={Logo} alt='Logo AlexisDev' className='w-10' />
          AlexisDev
        </Link>
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
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen gap-10 text-links bg-background'>
          <Links />
        </ul>
      )}

    </header>
  )
}
