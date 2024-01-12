import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Formulario from '../../assets/img/formulario.webp'

export function Contacto () {
  const apiKey = import.meta.env.VITE_YOUR_PUBLIC_KEY
  const templateId = import.meta.env.VITE_YOUR_TEMPLATE_ID
  const serviceId = import.meta.env.VITE_YOUR_SERVICE_ID

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(serviceId, templateId, form.current, apiKey)
      .then(() => {
        alert('Mensaje enviado con exito')
        document.getElementById('contact-form').reset()
      }, (error) => {
        alert(error.text)
      })
  }
  return (
    <section name='Contacto' className='w-full flex flex-col justify-center items-center sm:w-minSection sm:m-auto'>
      <h2 className='text-center text-4xl font-bold uppercase text-links pt-20 mb-4'>Contacto</h2>
      <div className='bg-contact flex mb-20 px-2 py-8 gap-4 w-full sm:w-[550px] sm:rounded-2xl'>
        <div className='w-full px-2'>
          <form ref={form} onSubmit={sendEmail} id='contact-form' method='post' className='text-white'>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col'>
                <label className='ml-1 font-semibold text-xl' htmlFor='from_name'>Nombre</label>
                <input type='text' name='from_name' id='from_name' className='h-10 pl-2 rounded-2xl bg-inputs' required />
              </div>
              <div className='flex flex-col'>
                <label className='ml-1 font-semibold text-xl' htmlFor='email'>Correo</label>
                <input type='email' name='email' id='email' className='bg-inputs h-10 pl-2 rounded-2xl focus:ring-0 focus:border-none' required />
              </div>
              <div className='flex flex-col'>
                <label className='ml-1 font-semibold text-xl' htmlFor='message'>Mensaje</label>
                <textarea type='text' name='message' id='message' className='pl-2 pt-1 rounded-2xl h-[150px] resize-none bg-inputs' required />
              </div>
            </div>
            <button type='submit' className='mt-6 rounded-2xl h-[42px] w-full bg-btnEnviar duration-200 hover:bg-orangeDark text-white text-xl font-semibold uppercase'>Enviar</button>
          </form>
        </div>
        <div className='hidden'>
          <img src={Formulario} alt='Formulario de Contacto' className='h-96' />
        </div>
      </div>
    </section>
  )
}
