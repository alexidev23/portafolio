import { useCallback } from "react"

export function useScrollTo() {
  const scrollTo = useCallback((id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return scrollTo
}
