/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Montserrat, sans-serif',
      },
      colors: {
        green: {
          500: "#4AC959",
        },
        orange: {
          500: "#E88D39",
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
