import { experiencias } from '../../constants/constants'
import { IconPortafolio } from '../Icons/IconPortafolio'

export function Experiencia () {
  return (
    <section
      id='experiencia'
      className='max-w-[800px] w-full mx-auto py-28 flex flex-col justify-center'
    >
      <div className='flex px-4 pb-8 items-center gap-2'>
        <IconPortafolio />
        <h2 className='text-2xl sm:text-3xl font-bold uppercase text-links'>
          Experiencia Laboral
        </h2>
      </div>
      <div className='pb-10'>
        {experiencias.map((exp, idx) => (
          <div className='flex mb-8' key={idx}>
            <div className='w-10 relative'>
              <span className='w-3 h-3 bg-cyan-700 rounded-full absolute left-[15px] top-[12px] z-10' />
              <span className='h-28 w-[2px] absolute bg-[#47494d] left-1/2' />
            </div>
            <div className='flex flex-col sm:flex-row sm:gap-20 w-full'>
              <div className='text-white pl-2'>
                <h3 className='text-2xl font-semibold text-cyan-600'>{exp.puesto}</h3>
                <h4 className='text-lg font-extralight'>{exp.empresa}</h4>
                <h5 className='text-xs xs:text-sm text-gray-400'>{exp.periodo}</h5>
              </div>
              <div className='text-gray-300 w-full sm:w-[400px] mt-4 sm:mt-0 sm:pl-2 text-lg'>
                {Array.isArray(exp.descripcion)
                  ? (
                    <ul className='list-disc pl-5'>
                      {exp.descripcion.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )
                  : <p>{exp.descripcion}</p>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
