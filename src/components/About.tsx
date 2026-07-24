import { User, GraduationCap, Briefcase } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const experiencia = [
  {
    tipo: "trabajo",
    titulo: "Práctica Profesional",
    lugar: "ARGEC – IT Consulting",
    periodo: "2023",
    items: ["Participación en proyectos reales de desarrollo", "Fortalecimiento de habilidades técnicas y trabajo en equipo"],
  },
  {
    tipo: "educacion",
    titulo: "Técnico Superior en Programación",
    lugar: "Teclab",
    periodo: "2023",
    items: ["Formación integral en desarrollo de software"],
  },
  {
    tipo: "educacion",
    titulo: "Python, JavaScript y QA Manual",
    lugar: "CoderHouse",
    periodo: "2022 - 2023",
    items: ["Base sólida en desarrollo y buenas prácticas", "Actualmente aprendiendo Cypress para testing automatizado"],
  },
]

const iconMap: Record<string, typeof Briefcase> = {
  trabajo: Briefcase,
  educacion: GraduationCap,
}

export function About () {
  const { ref, isInView } = useInView()

  return (
    <section id='about' className='py-20 border-t border-border/40'>
      <div ref={ref} className={`mx-auto max-w-4xl transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className='flex pb-8 items-center gap-2'>
          <User size={30} className='text-primary' />
          <h2 className="text-primary text-3xl font-bold">Acerca de mí</h2>
        </div>

        <div className='flex flex-col-reverse lg:flex-row w-auto mx-4 lg:mx-0 mb-12'>
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

        {/* Timeline */}
        <div className="relative space-y-6 pl-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-16px)] before:w-[2px] before:bg-border">
          {experiencia.map((item, i) => {
            const Icon = iconMap[item.tipo] || Briefcase
            return (
              <div key={i} className="relative">
                <div className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-border bg-background">
                  <Icon className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">{item.periodo}</span>
                  <h3 className="font-semibold">{item.titulo}</h3>
                  <p className="text-sm text-primary">{item.lugar}</p>
                  <ul className="mt-1 space-y-0.5">
                    {item.items.map((desc, j) => (
                      <li key={j} className="text-sm text-muted-foreground">• {desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
