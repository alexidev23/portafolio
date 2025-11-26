import { User } from 'lucide-react'

export function About () {
  return (
    <section
      id='about'
      className='py-20 border-t border-border/40'
    >
      <div className='mx-auto max-w-4xl'>
        <div className='flex pb-8 items-center gap-2'>
          <User size={30} className='text-primary' />
          <h2 className="text-primary text-3xl font-bold">Acerca de mí</h2>
        </div>
        <div className='flex flex-col-reverse lg:flex-row w-auto  mx-4 lg:mx-0'>
          <div className='space-y-3 text-muted-foreground leading-relaxed'>
            <p className='text-lg'>
              Soy Alexis Escobar, tengo 25 años y soy 
              <span className="text-primary font-semibold"> Técnico Superior en Programación (Teclab, 2023)</span>. 
              Realicé mi práctica profesional en ARGEC – IT Consulting, donde participé en proyectos reales que fortalecieron mis habilidades técnicas y mi capacidad para trabajar en equipo.
            </p>
            <p className='text-lg'>
              Me especializo en 
              <span className="text-primary font-semibold"> React y Tailwind CSS</span>. 
              También completé formaciones en Python, JavaScript y QA Manual en CoderHouse, lo que me dio una base sólida en desarrollo y buenas prácticas. Actualmente aprendo Cypress para profundizar en testing automatizado.
            </p>
            <p className='text-lg'>
              Busco oportunidades como Desarrollador Frontend, donde pueda aportar soluciones, trabajar con compromiso y seguir creciendo dentro de proyectos que valoren la mejora continua.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
