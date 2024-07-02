import { linksNavBar } from '../../constants/constants'

export function Navbar () {
  return (
    <header className='h-8 flex justify-center items-center my-4'>
      <ul className='flex items-center justify-center w-[310px] md:w-[400px] rounded-3xl h-8 fixed border border-cyan-600 bg-navbar z-50'>
        {linksNavBar.map(link => (
          <li
            key={link.id}
            className='mx-1 md:mx-1 cursor-pointer'
          >
            <a aria-label={link.label} href={link.url} className='text-gray-400 uppercase text-sm font-bold hover:text-gray-200 duration-100'>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
