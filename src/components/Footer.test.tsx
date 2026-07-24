import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Footer from "./Footer"

describe("Footer", () => {
  it("renderiza el año actual", () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
  })

  it("muestra el nombre del autor", () => {
    render(<Footer />)
    expect(screen.getAllByText(/Alexis Escobar/i)).toHaveLength(2)
  })
})
