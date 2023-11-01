import React from 'react'
import { Proyectos } from './Proyectos'

export function Portafolio () {
  return (
    <section name='Portafolio' className='bg-background' id='Portafolio'>
      <h2 className='text-center text-4xl font-bold uppercase text-links py-20'>Portafolio</h2>
      <div className='flex justify-center xl:w-[1026px] mx-auto'>
        <Proyectos />
      </div>
    </section>
  )
}
