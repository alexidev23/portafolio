"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

export default function Contacto() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="px-6 py-20 border-t border-border/40">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-4 text-primary">Trabajemos Juntos</h2>
        <p className="text-muted-foreground mb-12">
          ¿Tienes un proyecto en mente? Siempre me interesa escuchar sobre nuevas oportunidades y colaboraciones.
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>

            <Button type="submit" className="w-full rounded-lg">
              {submitted ? "✓ Mensaje Enviado!" : "Enviar Mensaje"}
            </Button>
          </form>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-2">Correo Electrónico</h3>
              <a href="mailto:alexisescobardev@gmail.com" className="text-primary hover:underline">
                alexisescobardev@gmail.com
              </a>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Conéctate Conmigo</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/alexidev23"
                  className="h-10 w-10 rounded-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/alexis-escobar-95b491184/"
                  className="h-10 w-10 rounded-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Disponibilidad</h3>
              <p className="text-muted-foreground">
                Disponible actualmente para nuevos proyectos. Tiempo de respuesta: 12-24 horas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
