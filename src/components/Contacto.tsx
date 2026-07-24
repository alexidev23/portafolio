import { Loader2, Mail, MessageSquare, User } from "lucide-react"
import { useMemo, useState } from "react"
import { toast } from "sonner"
import { useInView } from "@/hooks/useInView"
import { submitContactForm } from "@/lib/contact"
import type { ContactForm, FormErrors, FormState } from "@/types/types"

const initialForm: FormState = {
  status: "idle",
  name: "",
  email: "",
  message: "",
}

function validate(data: ContactForm): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) {
    errors.name = "El nombre es obligatorio"
  }
  if (!data.email.trim()) {
    errors.email = "El email es obligatorio"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "El email no es válido"
  }
  if (!data.message.trim()) {
    errors.message = "El mensaje es obligatorio"
  }
  return errors
}

export default function Contacto() {
  const [form, setForm] = useState<FormState>(initialForm)
  const { ref, isInView } = useInView()

  const errors = useMemo(() => validate(form), [form.name, form.email, form.message])
  const hasErrors = Object.keys(errors).length > 0

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) return

    setForm((prev) => ({ ...prev, status: "loading" }))

    try {
      await submitContactForm({ name: form.name, email: form.email, message: form.message })
      setForm(initialForm)
      toast.success("Mensaje enviado con éxito", {
        description: "Gracias por contactarme. Te responderé a la brevedad.",
      })
    } catch {
      setForm((prev) => ({ ...prev, status: "error" }))
      toast.error("Error al enviar el mensaje", {
        description: "Ocurrió un error inesperado. Intentalo de nuevo más tarde.",
      })
    }
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full rounded-lg border py-2.5 pl-10 pr-4 text-sm bg-background focus:outline-none focus:ring-2 transition-shadow ${
      errors[field]
        ? "border-destructive focus:ring-destructive/50"
        : "border-border/40 focus:ring-primary/50"
    }`

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

        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl" noValidate>
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
                onChange={(e) => handleChange("name", e.target.value)}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={inputClass("name")}
                placeholder="Tu nombre"
              />
            </div>
            {errors.name && (
              <p id="name-error" role="alert" className="mt-1 text-xs text-destructive">
                {errors.name}
              </p>
            )}
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
                onChange={(e) => handleChange("email", e.target.value)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={inputClass("email")}
                placeholder="tu@email.com"
              />
            </div>
            {errors.email && (
              <p id="email-error" role="alert" className="mt-1 text-xs text-destructive">
                {errors.email}
              </p>
            )}
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
                onChange={(e) => handleChange("message", e.target.value)}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${inputClass("message")} resize-none pt-2.5`}
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>
            {errors.message && (
              <p id="message-error" role="alert" className="mt-1 text-xs text-destructive">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={form.status === "loading"}
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-all disabled:opacity-50 cursor-pointer active:scale-95"
          >
            {form.status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar mensaje"
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
