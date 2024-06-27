/* eslint-disable react/prop-types */
export function Links () {
  const linksNavBar = [
    {
      id: 1,
      url: '#experiencia',
      name: 'Experiencia'
    },
    {
      id: 2,
      url: '#proyectos',
      name: 'Proyectos'
    },
    {
      id: 3,
      url: '#sobreMi',
      name: 'Sobre Mi'
    }
    // {
    //   id: 3,
    //   // url: '#contacto',
    //   name: 'Contacto'
    // }
  ]
  return (
    <>
      {linksNavBar.map(link => (
        <li key={link.id} className='text-texto mx-1 md:mx-1 cursor-pointer uppercase text-sm font-bold hover:text-gray-200 duration-200'>
          <a aria-label={link.name} href={link.url} className='hover:border-b-2'>{link.name}</a>
        </li>
      ))}
    </>
  )
}
