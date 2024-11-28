/* eslint-disable react/jsx-closing-tag-location */
import { MisProyectos } from '../../constants/constants'
import File from '../../assets/file.svg'
import { IconLink } from '../Icons/IconLink'

export function Proyectos () {
  return (
    <div className='flex flex-col justify-items-center h-full gap-10'>
      {
        MisProyectos.map(({ id, name, descripcion, imagen, tecnologias, repositorio, pagina }) => (
          <article
            key={id}
            className='flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0'
          >
            <div className='w-full md:w-1/2'>
              <div className='relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip sm:rounded-xl md:group-hover:-translate-y-2 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50'>
                <img alt={name} className='sm:object-cover object-top w-full sm:h-[170px]' loading='lazy' src={imagen} />
              </div>
            </div>

            <div className='w-full md:w-1/2 md:max-w-lg xs:px-4 lg:px-0 h-[170px]'>
              <div className='flex items-center h-8 gap-4'>
                <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>
                  {name}
                </h3>
                <ul className='flex items-center'>
                  {tecnologias.map((tecnologia, index) => (
                    <li key={index} className='flex items-center justify-center rounded-xl px-2 text-xs font-medium h-5'>
                      <img src={tecnologia} alt='Icono de teccnologia' className='w-full h-full' />
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex flex-wrap mt-1'>
                <div className='mt-2 text-gray-700 dark:text-gray-400'>{descripcion}</div>
                <footer className='flex items-end mt-4 gap-x-4'>
                  <a target='_blank' href={repositorio} rel='noreferrer' className='flex text-white gap-2 py-[6px] px-[18px] rounded-3xl text-sm items-center justify-center bg-cyan-900/45'><img src={File} className='h-4' alt='Icono Code proyecto' />Code</a>
                  {pagina === ''
                    ? ''
                    : <a target='_blank' href={pagina} rel='noreferrer' className='flex text-white gap-2 py-[6px] px-5 rounded-3xl text-sm items-center justify-center bg-cyan-900/45'>
                      <IconLink />
                      Demo</a>}
                </footer>
              </div>
            </div>
          </article>
        ))
      }
    </div>
  )
}
