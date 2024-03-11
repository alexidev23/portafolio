// import { About } from './components/About/About'
import { Contacto } from './components/Contacto/Contact'
import { Experiencia } from './components/Experiencia/Experiencia'
import { Home } from './components/Home/Home'
import { Navbar } from './components/Navbar/Navbar'
import { Portafolio } from './components/Portafolio/Portfolio'

export function App () {
  return (
    <>
      <Navbar />
      <Home />
      <Experiencia />
      <Portafolio />
      {/* <About /> */}
      <Contacto />
    </>
  )
}
