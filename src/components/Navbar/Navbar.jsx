import { Links } from './Links'

export function Navbar () {
  return (
    <header className='h-8 flex justify-center items-center my-4'>
      <ul className='flex items-center justify-center w-[310px] md:w-[400px] rounded-3xl h-8 fixed border border-links bg-navbar z-50'>
        <Links />
        <li className='text-texto mx-1 md:mx-1 cursor-pointer uppercase text-sm font-bold hover:text-gray-200 duration-200'>
          <a aria-label='Contacto' href='mailto:alexisescobardev@gmail.com' className='hover:border-b-2'>Contacto</a>
        </li>
      </ul>
    </header>
  )
}
