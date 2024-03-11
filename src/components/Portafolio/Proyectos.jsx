import Calculadora from '../../assets/img/proyectos/calculadora.avif'
import Encriptador from '../../assets/img/proyectos/encriptador.webp'
import TicTacToe from '../../assets/img/proyectos/tictactoe.avif'
import Html from '../../assets/img/html5.svg'
import Css from '../../assets/img/css.svg'
import JavaScript from '../../assets/img/javascript.svg'
import React from '../../assets/img/react.svg'
import Tailwind from '../../assets/img/tailwindcss.svg'
import Code from '../../assets/img/code.svg'
import Link from '../../assets/img/link.svg'

export function Proyectos () {
  const Proyectos = [
    {
      id: 1,
      name: 'Calculadora',
      descripcion: 'Primer proyecto donde implemento JavaScript, es una calculadora donde se pueden realizar las operaciones básicas.',
      imagen: Calculadora,
      tecnologias: [Html, Css, JavaScript],
      repositorio: 'https://github.com/alexidev23/Calculadora',
      pagina: 'https://alexidev23.github.io/Calculadora/'
    },
    {
      id: 2,
      name: 'Encriptador de Texto',
      descripcion: 'Proyecto para el programa de One - Oracle Next Education; es un encriptador de texto y a su vez un desencriptador.',
      imagen: Encriptador,
      tecnologias: [Html, Css, JavaScript],
      repositorio: 'https://github.com/alexidev23/Encriptador-de-texto',
      pagina: 'https://alexidev23.github.io/Encriptador-de-texto/'
    },
    {
      id: 3,
      name: 'Tic-Tac-Toe',
      descripcion: 'Primer proyecto utilizando react y tailwind, idea sacada del canal de midudev.',
      imagen: TicTacToe,
      tecnologias: [React, Tailwind],
      repositorio: 'https://github.com/alexidev23/Tic-Tac-Toe',
      pagina: 'https://tic-tac-toe-brown-one.vercel.app/'
    }
  ]

  return (
    <div className='flex flex-col justify-items-center h-full gap-10 pb-16'>
      {
        Proyectos.map(proyecto => (
          <div key={proyecto.id} className='w-full lg:w-[750px] sm:h-[200px] xs:h-[320px] flex xs:flex-col sm:flex-row sm:p-4 sm:gap-10 sm:rounded-3xl bg-contact'>
            <div className='lg:w-[310px] sm:w-[310px] lg:h-[140px] sm:rounded-2xl overflow-hidden m-auto'>
              <img src={proyecto.imagen} alt={proyecto.name} className='w-full h-full' />
            </div>
            <div className='relative lg:w-[420px] xs:h-[160px] sm:w-[400px]'>
              <h3 className='text-2xl font-semibold text-links pb-1 xs:pl-2'>{proyecto.name}</h3>
              <p className='text-gray-400 text-sm xs:pl-2'>{proyecto.descripcion}</p>
              <div className='absolute bottom-2 flex sm:justify-between xs:justify-around w-full'>
                <div className='flex items-center justify-center'>
                  {proyecto.tecnologias.map((tecnologia, index) => (
                    <div key={index} className='flex items-center justify-center rounded-xl px-2 text-xs font-medium h-5'>
                      <img src={tecnologia} alt='Icono de teccnologia' className='w-full h-full' />
                    </div>
                  ))}
                </div>
                <div className='flex gap-4 xs:gap-1'>
                  <a target='_blank' href={proyecto.repositorio} rel='noreferrer' className='flex text-white gap-2 border py-1 px-3 rounded-3xl text-sm items-center justify-center bg-teal-950'><img src={Code} className='h-4' alt='Icono Code proyecto' />Code</a>
                  {proyecto.pagina === ''
                    ? ''
                    : <a target='_blank' href={proyecto.pagina} rel='noreferrer' className='flex text-white gap-2 border py-1 px-3 rounded-3xl text-sm items-center justify-center bg-teal-950'><img src={Link} className='h-4' alt='Icono Demo' />Demo</a>}
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
