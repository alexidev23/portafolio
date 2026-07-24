import { Target, Lightbulb, Sparkles } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const highlights = [
  {
    icon: Target,
    title: "Enfocado en resultados",
    desc: "No solo escribo código: construyo soluciones que ayudan a tu negocio a crecer, atraer clientes y generar confianza.",
  },
  {
    icon: Lightbulb,
    title: "De Figma a producción",
    desc: "Llevo tus diseños al navegador con precisión milimétrica, asegurando que se vean perfectos en cualquier dispositivo.",
  },
  {
    icon: Sparkles,
    title: "Calidad que perdura",
    desc: "Código limpio, accesible y optimizado. Cada proyecto está pensado para mantenerse en el tiempo sin deuda técnica.",
  },
]

export function About () {
  const { ref, isInView } = useInView()

  return (
    <section id='about' className='py-20 border-t border-border/40'>
      <div ref={ref} className={`mx-auto max-w-4xl transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className='flex pb-8 items-center gap-2'>
          <Sparkles size={30} className='text-primary' />
          <h2 className="text-primary text-3xl font-bold">¿Por qué trabajar conmigo?</h2>
        </div>

        <div className='flex flex-col w-auto mx-4 lg:mx-0 mb-12'>
          <div className='space-y-3 text-muted-foreground leading-relaxed'>
            <p className='text-lg'>
              Soy Alexis Escobar, <span className="text-primary font-semibold">Técnico Superior en Programación</span> con formación en React, TypeScript y diseño responsivo. Ayudo a emprendedores, pymes y profesionales a tener presencia web profesional sin complicaciones.
            </p>
            <p className='text-lg'>
              Trabajé en proyectos freelance reales — desde sitios institucionales hasta e-commerce — 
              y sé lo que un cliente necesita: <span className="text-primary font-semibold">comunicación clara, entregas a tiempo y un producto que funcione.</span>
            </p>
            <p className='text-lg'>
              No importa si partís de cero o tenés un diseño en Figma: 
              mi objetivo es que tu proyecto cobre vida en la web con la mejor calidad posible.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="p-5 rounded-xl border border-border/40 hover:border-primary/30 transition-all hover:-translate-y-0.5"
                style={{ transitionDelay: `${i * 100}ms`, transitionDuration: '400ms' }}
              >
                <Icon className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}