import { About } from "./components/About/About"
import { Experiencia } from "./components/Experiencia/Experiencia"
import { Home } from "./components/Home/Home"
import { Navbar } from "./components/Navbar/Navbar"
import { Portafolio } from "./components/Portafolio/Portfolio"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Experiencia />
      <Portafolio />
      <About /> 
    </>
  )
}

export default App
