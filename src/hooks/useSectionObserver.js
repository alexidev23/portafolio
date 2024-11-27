import { useState, useEffect } from 'react'

const useSectionObserver = () => {
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const observerOptions = {
      root: null, // Viewport
      threshold: 0.1 // 10% visible
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        console.log('Observando:', entry.target.id, 'isIntersecting:', entry.isIntersecting)
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect() // Limpia el observer al desmontar
    }
  }, [])

  return { activeSection }
}

export default useSectionObserver
