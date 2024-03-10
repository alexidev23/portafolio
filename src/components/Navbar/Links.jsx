export function Links () {
  const links = [
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
    },
    {
      id: 4,
      url: '#contacto',
      name: 'Contacto'
    }
  ]

  return (
    <>
      {links.map(link => (
        <li key={link.id} className='text-texto mx-1 md:mx-2 cursor-pointer uppercase text-sm font-bold hover:text-gray-200 duration-200'>
          <a aria-label={link.name} href={link.url} className='hover:border-b-2'>{link.name}</a>
        </li>
      ))}
    </>
  )
}
