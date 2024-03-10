/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      width: {
        minSection: '600px'
      },
      colors: {
        background: '#01101b',
        navbar: '#01233C',
        links: '#609dfa',
        texto: '#97bcf3',
        card: '#142937',
        contact: '#142c3c',
        inputs: '#234063',
        btnEnviar: '#0c3e77',
        html: '#ec5f31',
        css: '#1170ad',
        javascript: '#f0d53c',
        pythonBlue: '#326c96',
        pythonYellow: '#f6d566',
        django: '#153528',
        bootstrap: '#6e2eeb'
      },
      borderRadius: {
        large: '100%'
      },
      screens: {
        xs: '370px'
      }
    }
  },
  plugins: [
  ]
}
