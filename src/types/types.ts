export type Tech =
  | "React"
  | "TypeScript"
  | "Tailwind CSS"
  | "shadcn/ui"
  | "React Router"
  | "Next.js"
  | "Vite"
  | "HTML5"
  | "CSS3"
  | "Git"
  | "JavaScript"
  | "REST APIs"
  | "Integración de APIs"
  | "Diseño Responsivo"
  | "Rendimiento"

export type SectionId = "about" | "services" | "projects" | "contact"

export interface linksNavBarProps {
  id: number
  name: string
  label: string
  url: string
}

export interface LinksSocialMediaProps {
  id: number
  name: string
  icon: string
  url: string
}

export interface ExperienciaProps {
  puesto: string
  empresa: string
  periodo: string
  descripcion: string[]
}

export interface ProyectosProps {
  id: number
  name: string
  descripcion: string
  imagen: string
  tecnologias: Tech[]
  repositorio: string
  pagina: string
}

export interface ContactForm {
  name: string
  email: string
  message: string
}

export type FormStatus = "idle" | "loading" | "success" | "error"

export type FormState = {
  status: FormStatus
} & ContactForm

export type FormErrors = {
  name?: string
  email?: string
  message?: string
}
