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
    <div className='flex lg:flex-col justify-items-center h-full gap-10 pb-16'>
      {
        Proyectos.map(proyecto => (
          <div key={proyecto.id} className='w-[750px] h-[200px] flex p-4 gap-10 rounded-3xl bg-contact'>
            <div className='w-[310px] h-[140px] rounded-2xl overflow-hidden m-auto'>
              <img src={proyecto.imagen} alt={proyecto.name} className='w-full h-full' />
            </div>
            <div className='relative w-[420px]'>
              <h3 className='text-2xl font-semibold text-links pb-1'>{proyecto.name}</h3>
              <p className='text-gray-400 text-sm'>{proyecto.descripcion}</p>
              <div className='absolute bottom-0 flex justify-between w-full'>
                <div className='flex items-center justify-center'>
                  {proyecto.tecnologias.map((tecnologia, index) => (
                    <div key={index} className='flex items-center justify-center rounded-xl px-2 text-xs font-medium h-5'>
                      <img src={tecnologia} className='w-full h-full' />
                    </div>
                  ))}
                </div>
                <div className='flex gap-4'>
                  <a target='_blank' href={proyecto.repositorio} rel='noreferrer' className='flex text-white gap-2 border py-1 px-3 rounded-3xl text-sm items-center justify-center bg-teal-950'><img src={Code} className='h-4' />Code</a>
                  {proyecto.pagina === ''
                    ? ''
                    : <a target='_blank' href={proyecto.pagina} rel='noreferrer' className='flex text-white gap-2 border py-1 px-3 rounded-3xl text-sm items-center justify-center bg-teal-950'><img src={Link} className='h-4' />Demo</a>}
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
