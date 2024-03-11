import React from 'react'
import Perfil from '../../assets/img/foto5.webp'
import { Skills } from './Skills'

export function About () {
  return (
    <section
      id='sobreMi'
      className='py-20 flex items-center flex-col justify-center sm:w-minSection sm:m-auto lg:w-[800px] xl:h-screen'
    >
      <h2 className='text-center text-4xl font-bold uppercase text-links'>Sobre mi</h2>
      <div className='flex w-auto pt-10'>
        <div>
          <img src={Perfil} alt='Foto de Alexis Escobar' className='hidden lg:flex lg:rounded-large lg:w-96' />
        </div>
        <div className='w-full mx-8 my-5 text-balance lg:ml-4 lg:mr-0 lg:px-10'>
          <p className='text-white font-medium text-xl'>
            Soy una persona apasionada al aprendizaje y nuevas tecnologías, actualmente estoy estudiando una tecnicatura en programación y estoy en busca de trabajo donde pueda demostrar mis habilidades y pueda adquirir experiencia y nuevos conocimientos.
          </p>
          <div>
            <h5 className='text-center text-3xl font-bold text-links mt-6'>Skills</h5>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
