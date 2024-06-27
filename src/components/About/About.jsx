import React from 'react'
import Perfil from '../../assets/foto5.avif'
import { IconUser } from '../Icons/IconUser'

export function About () {
  return (
    <section
      id='sobreMi'
      className='py-20 flex flex-col sm:w-minSection sm:m-auto lg:w-[800px] xl:h-screen'
    >
      <div className='flex gap-2'>
        <IconUser />
        <h2 className='text-4xl font-bold uppercase text-links'>Sobre mi</h2>
      </div>
      <div className='flex w-auto pt-6'>
        <div className='w-full text-balance'>
          <p className='text-white font-medium text-xl'>
            Soy una persona apasionada al aprendizaje y nuevas tecnologías, actualmente estoy estudiando una tecnicatura en programación y estoy en busca de trabajo donde pueda demostrar mis habilidades y pueda adquirir experiencia y nuevos conocimientos.
          </p>
        </div>
        <div>
          <img src={Perfil} alt='Foto de Alexis Escobar' className='hidden lg:flex rounded-3xl lg:w-80' />
        </div>
      </div>
    </section>
  )
}
