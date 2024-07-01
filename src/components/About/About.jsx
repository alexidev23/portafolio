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
        <div className='w-full text-balance flex flex-col gap-4 mt-5'>
          <p className='text-white font-medium text-sm w-[500px] text-balance'>
            Me llamo Alexis Escobar, tengo 23 años y en 2023 me recibí como Técnico Superior en Programación en Teclab Intituto Tecnico Superior donde realicé una práctica profesionalizante en Argec - It consulting.
          </p>
          <p className='text-white font-medium text-sm w-[500px] text-balance'>
            Actualmente estoy aprendiendo de forma autodidacta React y Tailwind, además estoy realizando un curso de Testing QA Manual en Coderhouse.
          </p>
          <p className='text-white font-medium text-sm w-[500px] text-balance'>
            Estoy en búsqueda de trabajo como Desarrollador Frontend, QA Manual que es lo que más me gusta, pero tampoco estoy cerrado a otros puestos.
          </p>
        </div>
        <div>
          <img src={Perfil} alt='Foto de Alexis Escobar' className='hidden lg:flex rounded-3xl lg:w-80' />
        </div>
      </div>
    </section>
  )
}
