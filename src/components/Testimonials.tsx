import { Star, Quote, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/useInView"
import { useScrollTo } from "@/hooks/useScrollTo"

const testimonials = [
  {
    name: "Cliente satisfecho",
    role: "Proyecto: Sitio web institucional",
    quote: "Trabajar con Alexis fue muy fluido. Entendió rápido lo que necesitábamos y el resultado superó nuestras expectativas. Muy recomendado.",
  },
  {
    name: "Cliente satisfecho",
    role: "Proyecto: Landing page",
    quote: "Profesional, prolijo y siempre disponible. Entregó antes de la fecha acordada y el sitio quedó impecable.",
  },
  {
    name: "Cliente satisfecho",
    role: "Proyecto: E-commerce",
    quote: "Muy contento con el trabajo. La página cargaba lenta y después de la optimización voló. Alexis le puso mucha dedicación.",
  },
]

export default function Testimonials() {
  const { ref, isInView } = useInView()
  const scrollTo = useScrollTo()

  return (
    <section id="testimonials" className="px-6 py-20 border-t border-border/40">
      <div ref={ref} className={`mx-auto max-w-4xl transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex items-center gap-2 mb-4">
          <Quote size={30} className="text-primary" />
          <h2 className="text-primary text-3xl font-bold">Lo que dicen mis clientes</h2>
        </div>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          La mejor carta de presentación es la experiencia de quienes ya trabajaron conmigo.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col p-6 rounded-xl border border-border/40 hover:border-primary/30 transition-all bg-card/50"
              style={{ transitionDelay: `${i * 100}ms`, transitionDuration: "400ms" }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="border-t border-border/40 pt-3">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" onClick={() => scrollTo("contact")} className="rounded-lg gap-2 cursor-pointer text-base">
            Sumate a mis clientes satisfechos <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
