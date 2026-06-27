/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,tsx,ts,jsx}",
  ],
  theme: {
    extend: {
      borderColor :{
        'primary':'rgb(85 81 227)',
        'secondary':'#2b2d77',
      }
    },
    fontFmily:{
      'hero-font':'Croissant One'

    }
  },
  plugins: [],
}

