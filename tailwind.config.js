/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './src/**/*.tsx',
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      boxShadow: {
        "post-card": "drop-shadow(8px 8px 24px rgba(12, 41, 208, 0.16));"
      },
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
          900: "#0C0C0C",
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("flowbite/plugin"),
  ],
}
