import React from 'react'
import Perfil from '../../assets/img/foto5.webp'
import { Redes } from './Redes'

export function Home () {
  return (
    <section
      id='home'
      className='h-auto flex pt-10 w-full sm:m-auto lg:w-[800px] sm:w-[700px] lg:py-10 lg:mt-14'
    >
      <div className='flex my-auto flex-col sm:flex-row gap-10'>
        <div className='flex flex-col xs:items-center lg:gap-2 gap-4 xs:w-full sm:w-[200px] sm:items-start'>
          <img alt='Foto de Alexis Escobar' src={Perfil} className='h-40 w-40 rounded-large' />
          <span className='bg-green-950 text-green-500 px-2 py-1 rounded-full text-xs'>Disponible para trabajar</span>
        </div>
        <div className=' flex flex-col xs:px-1 sm:px-0'>
          <h1 className='lg:text-5xl text-4xl xs:text-center sm:text-start font-bold text-white'>
            Alexis Escobar
          </h1>
          <p className='text-lg text-white mt-4 xs:mx-4 sm:mx-0'><span className='text-[#37B3F9]'>Desarrollador web Junior</span> de Cordoba, Argentina.</p>
          <p className='text-lg text-white xs:mx-4 sm:mx-0'>Actualmente egresado de Teclab como Técnico superior en Programación.</p>
          <div>
            <Redes />
          </div>
        </div>
      </div>
    </section>
  )
}
