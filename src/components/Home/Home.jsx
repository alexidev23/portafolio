// eslint-disable-next-line import/no-absolute-path
import Perfil from '../../assets/foto5.avif'
import { Redes } from './Redes'
import { Badge } from './Badge'

export function Home () {
  return (
    <section
      id='home'
      className='h-screen flex w-full sm:m-auto lg:w-[800px] sm:w-[700px] py-24'
    >
      <div className='my-auto gap-10'>
        <div className='flex flex-col sm:flex-row items-center lg:gap-2 gap-4 mb-2 xs:mx-6 lg:mx-0'>
          <img alt='Foto de Alexis Escobar' src={Perfil} height={120} width={120} className='rounded-full' />
          <Badge
            title='Disponible para trabajar'
          />
        </div>
        <div className=' flex flex-col xs:px-1 sm:px-0'>
          <h1 className='lg:text-5xl text-4xl mx-4 lg:mx-0 text-start font-bold text-white'>
            Hola, soy Alexis
          </h1>
          <p className='text-lg text-white mt-4 xs:mx-4 sm:mx-0'><span className='text-[#37B3F9]'>Desarrollador Front-End Junior</span> de Córdoba, Argentina.</p>
          <p className='text-lg text-white xs:mx-4 sm:mx-0 lg:w-[700px]'>Me gradué como <span className='text-[#41ecf8]'>Técnico superior en programación</span> de Teclab como Técnico superior en Programación y he complementado mis conocimientos con cursos especializados en <span className='text-[#41ecf8]'>Python, QA Manual y JavaScript</span> en Coderhouse.</p>
          <p className='text-lg text-white xs:mx-4 sm:mx-0 lg:w-[700px]'>
            Me encanta construir sitios web funcionales y atractivos, y siempre estoy buscando nuevas oportunidades para crecer como profesional.
          </p>
          <div>
            <Redes />
          </div>
        </div>
      </div>
    </section>
  )
}
