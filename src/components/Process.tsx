import { ClipboardList, PenTool, Code2, Rocket, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/useInView"
import { useScrollTo } from "@/hooks/useScrollTo"

const steps = [
  {
    icon: ClipboardList,
    title: "1. Brief",
    desc: "Hablamos de tu proyecto, objetivos y necesidades. Defino alcance, plazo y presupuesto.",
  },
  {
    icon: PenTool,
    title: "2. Diseño",
    desc: "Si tenés diseño en Figma lo implemento al pixel. Si no, te ayudo a definir la interfaz.",
  },
  {
    icon: Code2,
    title: "3. Desarrollo",
    desc: "Construyo con React, TypeScript y Tailwind. Código modular, responsivo y optimizado.",
  },
  {
    icon: Rocket,
    title: "4. Entrega",
    desc: "Publico, revisamos juntos y te entrego todo documentado para que puedas mantenerlo.",
  },
]

export default function Process() {
  const { ref, isInView } = useInView()
  const scrollTo = useScrollTo()

  return (
    <section id="process" className="px-6 py-20 border-t border-border/40">
      <div ref={ref} className={`mx-auto max-w-4xl transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex items-center gap-2 mb-4">
          <Rocket size={30} className="text-primary" />
          <h2 className="text-primary text-3xl font-bold">Cómo trabajo</h2>
        </div>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Un proceso simple y transparente para que sepas exactamente qué esperar en cada etapa.
        </p>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[60%] w-[40%] h-[2px] bg-border" />
                )}
                <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border/40 hover:border-primary/30 transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1.5">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" onClick={() => scrollTo("contact")} className="rounded-lg gap-2 cursor-pointer text-base">
            Empecemos con el brief <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
