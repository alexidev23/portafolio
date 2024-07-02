import { IconPortafolio } from '../Icons/IconPortafolio'

export function Experiencia () {
  return (
    <section id='experiencia' className='lg:w-[800px] sm:w-[700px] xs:w-full m-auto py-24 xs:py-14'>
      <div className='flex pb-8 items-center gap-2 xs:justify-center lg:justify-start'>
        <IconPortafolio />
        <h2 className='text-3xl font-bold uppercase text-links'>Experiencia Laboral</h2>
      </div>
      <div className='pb-10'>
        <div className='flex'>
          <div className='w-10 relative'>
            <span className='w-3 h-3 bg-cyan-700 rounded-full absolute left-[15px] top-[12px] z-10' />
            <span className='h-28 w-[2px] absolute bg-[#47494d] left-[50%]' />
          </div>
          <div className='flex sm:gap-20 xs:flex-col sm:flex-row'>
            <div className='text-white pl-2'>
              <h3 className='text-2xl font-semibold text-cyan-600'>Desarrollador Junior</h3>
              <h4 className='text-lg font-extralight'>ARGEC - It Consulting</h4>
              <h5 className='text-xs xs:text-sm text-gray-400'>07/2023 - 12/2023</h5>
            </div>
            <div className='text-gray-300 w-[350px] xs:mt-8 sm:mt-0 lg:w-[400px] xs:pl-2 sm:pl-2 xs:text-xl lg:text-lg'>
              <p>Lidere el desarrollo de la pagina de la empresa, utilizando react y tailwind para el frontend y php para el backend.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
