import { linksNavBar } from '../../constants/constants'
import useSectionObserver from '../../hooks/useSectionObserver'
import Icono from '/iconito.svg'

export function Navbar () {
  const { activeSection } = useSectionObserver()

  return (
    <header className='lg:w-[800px] sm:w-[700px] w-96 h-10 flex justify-center sm:justify-between items-center mx-auto my-4 border border-cyan-600 bg-[#01233C] rounded-3xl px-4 py-4 fixed z-50 inset-0'>
      <div className='hidden sm:block'>
        <img alt='Logo de la empresa' src={Icono} className='h-8 w-8' />
      </div>
      <ul className='flex items-center justify-center'>
        {linksNavBar.map((link) => (
          <li key={link.id} className='mx-1 md:mx-1 cursor-pointer'>
            <a
              aria-label={link.label}
              href={link.url}
              className={`text-gray-400 uppercase text-xs sm:text-sm font-bold hover:text-gray-200 duration-100 ${
                activeSection === link.label ? 'text-white' : ''
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
