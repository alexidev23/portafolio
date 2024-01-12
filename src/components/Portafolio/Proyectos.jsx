import React from 'react'
import Qr from '../../assets/img/proyectos/qr.webp'
import Calculadora from '../../assets/img/proyectos/calculadora.webp'
import Encriptador from '../../assets/img/proyectos/encriptador.webp'
import Proyecto from '../../assets/img/proyectos/portafolioPython.webp'
import GymAdmin from '../../assets/img/proyectos/gymadmin.webp'
import { BiWorld } from 'react-icons/bi'
import { FaFolderOpen } from 'react-icons/fa'

export function Proyectos () {
  const Proyectos = [
    {
      id: 1,
      name: 'Qr-Component',
      descripcion: 'Idea sacada de Frontend Mentor, es una tarjeta donde se puede visualizar un QR',
      imagen: Qr,
      tecnologias: ['HTML', 'CSS'],
      repositorio: 'https://github.com/alexidev23/Desafio-QR-code-component',
      pagina: 'https://alexidev23.github.io/Desafio-QR-code-component/'
    },
    {
      id: 2,
      name: 'Calculadora',
      descripcion: 'Primer proyecto donde implemento javascript, es una calculadora donde se pueden realizar las operaciones basicas',
      imagen: Calculadora,
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      repositorio: 'https://github.com/alexidev23/Calculadora',
      pagina: 'https://alexidev23.github.io/Calculadora/'
    },
    {
      id: 3,
      name: 'Encriptador de Texto',
      descripcion: 'Proyecto para el programa de One - Oracle Next Education; es un encriptador de texto y a su vez un desencriptador',
      imagen: Encriptador,
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      repositorio: 'https://github.com/alexidev23/Encriptador-de-texto',
      pagina: 'https://alexidev23.github.io/Encriptador-de-texto/'
    },
    {
      id: 4,
      name: 'Portafolio',
      descripcion: 'Proyecto final para coderhouse; es un portafolio y un blog',
      imagen: Proyecto,
      tecnologias: ['Python', 'Django', 'Bootstrap'],
      repositorio: 'https://github.com/alexidev23/proyectoFinal',
      pagina: ''
    },
    {
      id: 5,
      name: 'Page Admin Gym',
      descripcion: 'Pagina de gimansio para la administracion de alumnos, profesores y cursos',
      imagen: GymAdmin,
      tecnologias: ['Python', 'Django', 'Bootstrap'],
      repositorio: 'https://github.com/alexidev23/page-admin-gym',
      pagina: ''
    }
  ]

  function getBackgroundClass (tecnologias) {
    if (tecnologias.includes('HTML')) {
      return 'bg-html'
    } else if (tecnologias.includes('CSS')) {
      return 'bg-css'
    } else if (tecnologias.includes('JavaScript')) {
      return 'bg-javascript'
    } else if (tecnologias.includes('Python')) {
      return 'bg-gradient-to-l to-pythonBlue from-pythonYellow'
    } else if (tecnologias.includes('Django')) {
      return 'bg-django'
    } else if (tecnologias.includes('Bootstrap')) {
      return 'bg-bootstrap'
    }
  }
  return (
    <div className='flex flex-wrap h-full w-[1000px] justify-center gap-10 pb-16'>
      {
        Proyectos.map(proyecto => (
          <div key={proyecto.id} className='relative h-auto cursor-pointer overflow-hidden bg-contact w-[320px] xs:rounded-2xl'>
            <img src={proyecto.imagen} className='w-auto aspect-auto' />
            <div className='pt-4 text-white font-semibold px-4'>
              <h6 className='text-3xl text-links'>{proyecto.name}</h6>
              <p className='text-sm mt-3 font-normal'>{proyecto.descripcion}</p>
              <div className='flex mt-10 mb-2 justify-between items-center'>
                <div className='flex gap-1'>
                  {proyecto.tecnologias.map((tecnologia) => (
                    <div key={tecnologia} className={`flex items-center justify-center rounded-xl px-2 text-xs font-medium h-8 ${getBackgroundClass(tecnologia)}`}>{tecnologia}</div>
                  ))}
                </div>
                <div className='mt-2 flex gap-4'>
                  <a target='_blank' href={proyecto.repositorio} rel='noreferrer'><FaFolderOpen className='text-3xl' /></a>
                  {proyecto.pagina === ''
                    ? <a target='_blank' className='hidden' href={proyecto.pagina} rel='noreferrer'><BiWorld /></a>
                    : <a target='_blank' href={proyecto.pagina} rel='noreferrer'><BiWorld className='text-3xl' /></a>}
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
