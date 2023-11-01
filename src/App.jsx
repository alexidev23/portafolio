import { About } from './components/About/About'
import { Contacto } from './components/Contacto/Contact'
import { Home } from './components/Home/Home'
import { Navbar } from './components/Navbar/Navbar'
import { Portafolio } from './components/Portafolio/Portfolio'

export function App () {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portafolio />
      <Contacto />
    </div>
  )
}
