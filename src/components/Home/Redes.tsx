import { LinksSocialMedia } from '../../constants/constants'
import { IconArrowUp } from '../Icons/IconArrowUp'

export function Redes () {
  return (
    <div className='flex gap-4 xs:gap-2 mt-4 xs:justify-center sm:justify-normal'>
      {
        LinksSocialMedia.map(({id,name,url,icon}) => (
          <a
            key={id}
            aria-label={name}
            href={url} rel='noreferrer'
            target='_blank'
            className='bg-teal-600/45 h-8 px-5 py-1 flex gap-2 items-center justify-center rounded-full'
          >
            {/* Hacer que si no tiene icono no se vea */}
            {icon && <img src={icon} alt={`Icono de ${name}`} width={20} height={20} />}
            <span className='text-white'>{name}</span>
            <IconArrowUp />
          </a>
        ))
      }
    </div>
  )
}
