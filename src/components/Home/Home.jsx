import React from 'react'
import Perfil from '../../assets/img/foto5.webp'
import { Redes } from './Redes'

export function Home () {
  return (
    <section name='Home' className='h-auto flex justify-center pt-24 w-full sm:w-minSection sm:m-auto lg:w-[800px] lg:py-24 xl:h-screen'>
      <div className='flex justify-center items-center my-auto flex-col lg:flex-row lg:gap-24'>
        <div>
          <img alt='Foto de Alexis Escobar' src={Perfil} className='h-80 rounded-large' />
        </div>
        <div className='my-10 flex flex-col justify-center items-center'>
          <h2
            className='text-5xl font-bold text-links text-center'
          >
            Alexis Escobar
          </h2>
          <h4 className='text-3xl font-bold text-white text-center my-4'>Desarrollador Web</h4>
          <div className='flex gap-4 items-center justify-center'>
            <Redes />
            <a href='https://drive.google.com/file/d/18LunZtdNAgxy--aEpc6zxS7Gm-fLx4rW/view?usp=sharing' target='_blank' rel='noreferrer' className='bg-blue-700 text-white h-9 w-12 flex items-center justify-center rounded-xl hover:bg-blue-900'>
              CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
