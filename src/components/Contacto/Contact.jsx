import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Formulario from '../../assets/img/formulario.webp'
import toast, { Toaster } from 'react-hot-toast'

export function Contacto () {
  const apiKey = import.meta.env.VITE_YOUR_PUBLIC_KEY
  const templateId = import.meta.env.VITE_YOUR_TEMPLATE_ID
  const serviceId = import.meta.env.VITE_YOUR_SERVICE_ID

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(serviceId, templateId, form.current, apiKey)
      .then(() => {
        // alert('Mensaje enviado con exito')
        toast.success('Mensaje enviado correctamente!')
        document.getElementById('contact-form').reset()
      }, (error) => {
        alert(error.text)
      })
  }
  return (
    <section id='contacto' className='lg:w-[800px] w-full sm:m-auto'>
      <h2 className='text-4xl font-bold uppercase text-links pt-20 mb-8 xs:pl-2'>Contacto</h2>
      <div className='bg-contact flex mb-20 px-2 py-4 gap-4 w-full lg:w-[750px] sm:rounded-2xl'>
        <div className='w-full lg:w-[400px] px-2'>
          <form ref={form} onSubmit={sendEmail} id='contact-form' method='post' className='text-white'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col'>
                <label className='ml-2 font-semibold text-lg' htmlFor='from_name'>Nombre</label>
                <input type='text' name='from_name' id='from_name' className='h-8 pl-3 rounded-2xl bg-inputs outline-links' required />
              </div>
              <div className='flex flex-col'>
                <label className='ml-2 font-semibold text-lg' htmlFor='email'>Correo</label>
                <input type='email' name='email' id='email' className='h-8 pl-3 rounded-2xl bg-inputs outline-links' required />
              </div>
              <div className='flex flex-col'>
                <label className='ml-2 font-semibold text-lg' htmlFor='message'>Mensaje</label>
                <textarea type='text' name='message' id='message' className='pl-2 pt-2 rounded-2xl h-[150px] resize-none bg-inputs outline-links' required />
              </div>
            </div>
            <button type='submit' className='mt-4 rounded-2xl h-[42px] w-full bg-btnEnviar duration-200 hover:bg-blue-500 text-white text-xl font-semibold uppercase'>Enviar</button>
          </form>
        </div>
        <div className='h-96 lg:flex hidden'>
          <img src={Formulario} alt='Formulario de Contacto' className='h-full' />
        </div>
      </div>
      <div>
        <Toaster
          position='top-right'
          reverseOrder={false}
        />
      </div>
    </section>
  )
}
