import React from 'react'
import { Proyectos } from './Proyectos'
import IconoProyectos from '../../../public/iconito.svg'

export function Portafolio () {
  return (
    <section id='proyectos' className='sm:w-minSection sm:m-auto lg:w-[800px]'>
      <div className='pt-20 pb-8 flex gap-2'>
        <img src={IconoProyectos} alt='Icono para proyectos' className='h-11' />
        <h2 className='text-4xl font-bold uppercase text-links'>Proyectos</h2>
      </div>
      <Proyectos />
    </section>
  )
}
