import React from 'react'
import Perfil from '../../assets/img/foto5.webp'
import { Redes } from './Redes'

export function Home () {
  return (
    <section name='Home' className='bg-background h-screen flex justify-center'>
      <div className='flex justify-center items-center my-auto flex-col xl:flex-row'>
        <div>
          <img alt='Foto de Alexis Escobar' src={Perfil} className='h-80 rounded-large mx-12 md:h-96' />
        </div>
        <div className='my-10 flex flex-col justify-center items-center'>
          <h2
            className='sm:text-6xl text-5xl font-bold text-links'
          >
            Alexis Escobar
          </h2>
          <h4 className='text-3xl font-bold text-white text-center my-4'>Desarrollador Web</h4>
          <Redes />
        </div>
      </div>
    </section>
  )
}
