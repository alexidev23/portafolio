import { lazy, Suspense, useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { ThemeProvider } from "./components/theme-provider"
import { ErrorBoundary } from "./components/ErrorBoundary"
import { Toaster } from "sonner"

const About = lazy(() => import("./components/About").then(m => ({ default: m.About })))
const Servicios = lazy(() => import("./components/Servicios"))
const Process = lazy(() => import("./components/Process"))
const Portafolio = lazy(() => import("./components/Portfolio"))
const Testimonials = lazy(() => import("./components/Testimonials"))
const Tecnologias = lazy(() => import("./components/Tecnologias"))
const Contacto = lazy(() => import("./components/Contacto"))
const Footer = lazy(() => import("./components/Footer"))

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

const sectionLoader = (
  <div className="flex min-h-[200px] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
  </div>
)

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main-content">
        <Home />
        <Suspense fallback={sectionLoader}>
          <ErrorBoundary>
            <About />
          </ErrorBoundary>
        </Suspense>
        <Suspense fallback={sectionLoader}>
          <ErrorBoundary>
            <Servicios />
          </ErrorBoundary>
        </Suspense>
        <Suspense fallback={sectionLoader}>
          <ErrorBoundary>
            <Process />
          </ErrorBoundary>
        </Suspense>
        <Suspense fallback={sectionLoader}>
          <ErrorBoundary>
            <Portafolio />
          </ErrorBoundary>
        </Suspense>
        <Suspense fallback={sectionLoader}>
          <ErrorBoundary>
            <Testimonials />
          </ErrorBoundary>
        </Suspense>
        <Suspense fallback={sectionLoader}>
          <ErrorBoundary>
            <Tecnologias />
          </ErrorBoundary>
        </Suspense>
        <Suspense fallback={sectionLoader}>
          <ErrorBoundary>
            <Contacto />
          </ErrorBoundary>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollToTop />
      <Toaster richColors position="top-right" />
    </ThemeProvider>
  )
}

export default App
