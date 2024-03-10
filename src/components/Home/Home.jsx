import React from 'react'
import Perfil from '../../assets/img/foto5.webp'
import { Redes } from './Redes'

export function Home () {
  return (
    <section
      id='home'
      className='h-auto flex pt-24 w-full sm:w-minSection sm:m-auto lg:w-[800px] lg:py-10 lg:mt-14'
    >
      <div className='flex my-auto flex-col lg:flex-row lg:gap-10'>
        <div className='flex flex-col gap-2'>
          <img alt='Foto de Alexis Escobar' src={Perfil} className='h-40 rounded-large' />
          <span className='bg-green-950 text-green-500 px-2 py-1 rounded-full text-xs'>Disponible para trabajar</span>
        </div>
        <div className=' flex flex-col'>
          <h1
            className='text-5xl font-bold text-links'
          >
            Alexis Escobar
          </h1>
          <p className='text-lg text-white my-4'><span className='text-yellow-400'>Desarrollador web Junior</span> de Cordoba, Argentina.</p>
          <div className='flex gap-4 items-center justify-center'>
            <Redes />
          </div>
        </div>
      </div>
    </section>
  )
}
