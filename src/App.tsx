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

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Home />
      <About /> 
      <Servicios />
      <Portafolio />
      <Tecnologias />
      <Contacto />
      <Footer />
      <Toaster richColors position="top-right" />
    </ThemeProvider>
  )
}

export default App
