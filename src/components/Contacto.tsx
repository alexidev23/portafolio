import { Mail, MessageSquare, User } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { useInView } from "@/hooks/useInView"
import type { FormState } from "@/types/types"

export default function Contacto() {
  const [form, setForm] = useState<FormState>({
    status: "idle",
    name: "",
    email: "",
    message: "",
  })
  const { ref, isInView } = useInView()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Mensaje enviado (demo)")
  }

  return (
    <section id="contact" className="px-6 py-20 border-t border-border/40">
      <div ref={ref} className={`mx-auto max-w-4xl transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-2 mb-4">
          <Mail size={30} className="text-primary" />
          <h2 className="text-3xl font-bold text-primary">Contacto</h2>
        </div>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          ¿Tienes un proyecto en mente? Estoy abierto a nuevas oportunidades. No dudes en escribirme.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Nombre
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full rounded-lg border border-border/40 bg-background py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                placeholder="Tu nombre"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full rounded-lg border border-border/40 bg-background py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Mensaje
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full rounded-lg border border-border/40 bg-background py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-shadow"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={form.status === "loading"}
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-all disabled:opacity-50 cursor-pointer active:scale-95"
          >
            {form.status === "loading" ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </section>
  )
}
