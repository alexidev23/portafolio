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
    <section name='Contacto' className='bg-background w-full flex flex-col justify-center items-center'>
      <h2 className='text-center text-4xl font-bold uppercase text-links pt-20 mb-4'>Contacto</h2>
      <div className='bg-contact flex mb-20 rounded-2xl px-2 py-8 gap-4 w-[400px] xl:w-[800px]'>
        <div className='xl:w-[400px] w-full px-2'>
          <form ref={form} onSubmit={sendEmail} id='contact-form' method='post' className='xl:ml-10 text-white'>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col'>
                <label className='ml-1' htmlFor='from_name'>Nombre</label>
                <input type='text' name='from_name' id='from_name' className='h-10 pl-2 rounded-2xl xl:w-[350px] bg-inputs' required />
              </div>
              <div className='flex flex-col'>
                <label className='ml-1' htmlFor='email'>Correo</label>
                <input type='email' name='email' id='email' className='bg-inputs h-10 pl-2 rounded-2xl xl:w-[350px] focus:ring-0 focus:border-none' required />
              </div>
              <div className='flex flex-col'>
                <label className='ml-1' htmlFor='message'>Mensaje</label>
                <textarea type='text' name='message' id='message' className='pl-2 pt-1 rounded-2xl xl:w-[350px] h-[150px] resize-none bg-inputs' required />
              </div>
            </div>
            <button type='submit' className='mt-6 rounded-2xl h-[42px] xl:w-[140px] w-full bg-btnEnviar duration-200 hover:bg-orangeDark text-white text-xl'>Enviar</button>
          </form>
        </div>
        <div className='xl:block hidden'>
          <img src={Formulario} alt='Formulario de Contacto' className='h-96' />
        </div>
      </div>
    </section>
  )
}
