import Perfil from '../../assets/foto5.avif'
import { homeParagraphs } from '../../constants/constants'
import { Badge } from './Badge'
import { Redes } from './Redes'

export function Home () {
  return (
    <section
      id='home'
      className='h-screen flex w-full max-w-[800px] mx-auto py-24'
    >
      <div className='my-auto gap-10'>
        <div className='flex flex-col sm:flex-row items-center gap-4 lg:gap-2 mb-2 mx-6 lg:mx-0'>
          <img
            alt='Foto de Alexis Escobar, desarrollador Front-End y QA Manual'
            src={Perfil}
            height={120}
            width={120}
            className='rounded-full'
          />
          <Badge title='Disponible para trabajar' />
        </div>
        <div className='flex flex-col px-1 sm:px-0'>
          <h1 className='text-4xl lg:text-5xl mx-4 lg:mx-0 text-start font-bold text-white'>
            Hola, soy Alexis👋
          </h1>
          <p className='text-lg text-white mt-4 mx-4 sm:mx-0'>
            <span className='text-[#37B3F9]'>Desarrollador Front-End Junior y QA Manual</span> de Córdoba, Argentina.
          </p>
          {homeParagraphs.map((text: string, idx: number) => (
            <p key={idx} className='text-lg text-white mx-4 sm:mx-0'>
              {text}
            </p>
          ))}
          <div>
            <Redes />
          </div>
        </div>
      </div>
    </section>
  )
}
