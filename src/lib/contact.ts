import emailjs from "@emailjs/browser"
import type { ContactForm } from "@/types/types"

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export async function submitContactForm(data: ContactForm): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.warn("EmailJS no configurado — simulando envio")
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Contact form data:", data)
    return
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_email: "alexisescobardev@gmail.com",
    },
    PUBLIC_KEY,
  )
}
