import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { About } from "./components/About"
import Contacto from "./components/Contacto"
import Servicios from "./components/Servicios"
import Footer from "./components/Footer"
import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import Portafolio from "./components/Portfolio"
import Tecnologias from "./components/Tecnologias"
import { ThemeProvider } from "./components/theme-provider"
import { Toaster } from "sonner"

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className={`fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:opacity-90 cursor-pointer ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <a
        href="#main-content"
        className="skip-link"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main-content">
        <Home />
        <About />
        <Servicios />
        <Portafolio />
        <Tecnologias />
        <Contacto />
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster richColors position="top-right" />
    </ThemeProvider>
  )
}

export default App
