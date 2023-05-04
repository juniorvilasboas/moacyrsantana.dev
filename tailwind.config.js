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
        'password': 'url("https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg")'
      },
      colors: {
        'dourado': '#D6B21F',
        'padrao': '#0000FF',
        'padraoup': '#00BFFF',
        'cancel': '#e60000',
        'cancelup': '#ff0000'
      }
    },
  },
  plugins: [],
}
