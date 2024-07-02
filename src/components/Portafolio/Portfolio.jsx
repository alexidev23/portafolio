/* eslint-disable import/no-absolute-path */
import React from 'react'
import { Proyectos } from './Proyectos'
import IconProyectos from '/iconito.svg'

export function Portafolio () {
  return (
    <section id='proyectos' className='sm:m-auto lg:w-[800px] sm:w-[700px] py-24 xs:py-14'>
      <div className='flex gap-2 xs:pl-2 sm:pl-0 items-center xs:mx-4'>
        <img src={IconProyectos} alt='Icono para proyectos' className='h-14' />
        <h2 className='text-4xl font-bold uppercase text-links'>Proyectos</h2>
      </div>
      <Proyectos />
    </section>
  )
}
