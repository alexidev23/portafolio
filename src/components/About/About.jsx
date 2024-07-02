import React from 'react'
import Perfil from '../../assets/foto5.avif'
import { IconUser } from '../Icons/IconUser'

export function About () {
  return (
    <section
      id='sobreMi'
      className='py-24 xs:py-14 flex flex-col sm:w-minSection sm:m-auto lg:w-[800px]'
    >
      <div className='flex gap-2 xs:mx-4 lg:mx-0'>
        <IconUser />
        <h2 className='text-4xl font-bold uppercase text-links'>Sobre mi</h2>
      </div>
      <div className='flex xs:flex-col-reverse lg:flex-row w-auto pt-6 xs:mx-4 lg:mx-0'>
        <div className='text-balance flex flex-col gap-4 mt-5 xs:w-full w-[500px]'>
          <p className='text-white font-medium text-sm text-balance'>
            Me llamo Alexis Escobar, tengo 23 años y en 2023 me recibí como <span className='text-sky-400'>Técnico Superior en Programación</span> en Teclab Instituto Técnico Superior donde realicé una práctica profesionalizante en ARGEC - It consulting.
          </p>
          <p className='text-white font-medium text-sm text-balance'>
            Actualmente estoy aprendiendo de forma autodidacta React y Tailwind, además estoy realizando un curso de Testing QA Manual en Coderhouse.
          </p>
          <p className='text-white font-medium text-sm text-balance'>
            Estoy en búsqueda de trabajo como Desarrollador Frontend, QA Manual que es lo que más me gusta, pero tampoco estoy cerrado a otros puestos.
          </p>
        </div>
        <div className='xs:flex xs:justify-center'>
          <img src={Perfil} alt='Foto de Alexis Escobar' className='rounded-3xl lg:w-80 w-56' />
        </div>
      </div>
    </section>
  )
}
