import type { ContactForm } from "@/types/types"

export async function submitContactForm(data: ContactForm): Promise<void> {
  // Simula envio. Reemplazar con EmailJS, Formspree o backend propio:
  //   EmailJS: https://www.emailjs.com/docs/sdk/send/
  //   Formspree: action="https://formspree.io/f/{tu-id}"
  await new Promise((resolve) => setTimeout(resolve, 1500))
  console.log("Contact form data:", data)
}
