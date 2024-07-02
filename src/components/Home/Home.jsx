// eslint-disable-next-line import/no-absolute-path
import Perfil from '../../assets/foto5.avif'
import { Redes } from './Redes'
import { Badge } from './Badge'

export function Home () {
  return (
    <section
      id='home'
      className='h-auto flex w-full sm:m-auto lg:w-[800px] sm:w-[700px] lg:py-24 py-14'
    >
      <div className='my-auto gap-10'>
        <div className='flex items-center lg:gap-2 gap-4 mb-2 xs:mx-6 lg:mx-0'>
          <img alt='Foto de Alexis Escobar' src={Perfil} height='80px' width='80px' className='rounded-full' />
          {/* <span className='bg-green-950 text-green-500 px-3 py-1 rounded-full text-xs'>Disponible para trabajar</span> */}
          <Badge
            title='Disponible para trabajar'
          />
        </div>
        <div className=' flex flex-col xs:px-1 sm:px-0'>
          <h1 className='lg:text-5xl text-4xl mx-4 lg:mx-0 text-start font-bold text-white'>
            Hey, soy Alexis
          </h1>
          <p className='text-lg text-white mt-4 xs:mx-4 sm:mx-0'><span className='text-[#37B3F9]'>Desarrollador web Junior</span> de Cordoba, Argentina.</p>
          <p className='text-lg text-white xs:mx-4 sm:mx-0 lg:w-[650px]'>Egresado de Teclab como Técnico superior en Programación y Tester QA Manual de Coderhouse.</p>
          <div>
            <Redes />
          </div>
        </div>
      </div>
    </section>
  )
}
