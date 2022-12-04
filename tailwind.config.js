/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
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
        },
        gray: {
          500: "#9499B3",
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("flowbite/plugin")
  ],
}
