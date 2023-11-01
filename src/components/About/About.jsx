import React from 'react'
import Perfil from '../../assets/img/foto5.webp'
import { Skills } from './Skills'

export function About () {
  return (
    <section
      name='Sobre mi'
      className='lg:h-screen py-20 bg-background flex items-center flex-col justify-center'
    >
      <h2 className='text-center text-4xl font-bold uppercase text-links sm:pt-20'>Sobre mi</h2>
      <div className='flex sm:w-[800px] w-[400px] pt-10 justify-center'>
        <div>
          <img alt='Foto de Alexis Escobar' src={Perfil} className='hidden h-[300px] rounded-large xl:block' />
        </div>
        <div className='lg:w-[500px] w-[700px] mx-5 my-5'>
          <p className='text-white font-medium lg:text-xl text-2xl'>
            Soy una persona apasionada al aprendizaje y nuevas tecnologías, actualmente estoy estudiando una tecnicatura en programación y estoy en busca de trabajo donde pueda demostrar mis habilidades y pueda adquirir experiencia y nuevos conocimientos.
          </p>
          <div>
            <h5 className='text-center text-2xl font-bold text-links mt-6'>Skills</h5>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
