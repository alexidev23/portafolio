import { IconoProyecto } from '../Icons/IconoProyecto'
import { Proyectos } from './Proyectos'

export function Portafolio () {
  return (
    <section id='proyectos' className='sm:m-auto lg:w-[800px] sm:w-[700px] lg:py-24 xs:py-14 lg:h-[240vh]'>
      <div className='flex px-4 pb-8 items-center gap-2 lg:justify-start'>
        <IconoProyecto />
        <h2 className='text-2xl sm:text-3xl font-bold uppercase text-[#609dfa]'>
          Proyectos
        </h2>
      </div>
      <Proyectos />
    </section>
  )
}
