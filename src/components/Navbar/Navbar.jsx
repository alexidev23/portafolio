import { Links } from './Links'

export function Navbar () {
  return (
    <header className='h-8 flex justify-center items-center my-4'>
      <ul
        className='flex items-center justify-center w-[310px] md:w-[400px] rounded-3xl h-8 fixed border border-links bg-navbar z-50'
      >
        <Links />
      </ul>

    </header>
  )
}
