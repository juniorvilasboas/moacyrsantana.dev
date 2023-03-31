/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    fontFamily: {
      sans: ['Titillium Web']
    },
    extend: {
      backgroundImage: {
        "relogio": "url('/images/relogio.gif')"
      },
      colors: {
        dourado: '#D6B21F'
      }
    }
  }
}
