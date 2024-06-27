/* eslint-disable import/no-absolute-path */
import { LinksMedialSocial } from '../../constants/constants.js'
import { IconArrowUp } from '../Icons/IconArrowUp'

export function Redes () {
  return (
    <div className='flex gap-4 xs:gap-2 mt-4 xs:justify-center sm:justify-normal'>
      {
        LinksMedialSocial.map(social => (
          <a
            key={social.id}
            aria-label={social.name}
            href={social.url} rel='noreferrer'
            target='_blank'
            className='bg-teal-200/15 h-8 px-5 py-1 flex gap-1 items-center justify-center rounded-full'
          >
            {/* Hacer que si no tiene icono no se vea */}
            {social.icon && <img src={social.icon} alt={`Icono de ${social.name}`} className='h-4' />}
            <span className='text-white'>{social.name}</span>
            <IconArrowUp />
          </a>
        ))
      }
    </div>
  )
}
