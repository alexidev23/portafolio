import { Porfolio } from './Porfolio'

export function Experiencia () {
  return (
    <section id='experiencia' className='w-[800px] h-auto m-auto'>
      <div className='flex pt-20 pb-6 items-center gap-2'>
        <Porfolio />
        <h2 className='text-3xl font-bold uppercase text-links'>Experiencia Laboral</h2>
      </div>
      <div className='pb-10'>
        <div className='flex'>
          <div className='w-10 relative'>
            <span className='w-3 h-3 bg-cyan-400 rounded-full absolute left-[15px] top-[12px] z-10' />
            <span className='h-20 w-[2px] absolute bg-[#47494d] left-[50%]' />
          </div>
          <div className='flex gap-20'>
            <div className='text-white pl-2'>
              <h3 className='text-2xl font-semibold text-cyan-400'>Desarrollador Junior</h3>
              <h4 className='text-lg font-extralight'>ARGEC - It Consulting</h4>
              <h6 className='text-xs text-gray-400'>07/2023 - 12/2023</h6>
            </div>
            <div className='text-gray-300 w-[400px]'>
              <p>Lidere el desarrollo de la pagina de la empresa, utilizando react y tailwind para el frontend y php para el backend.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
