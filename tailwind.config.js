// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['"Titillium Web"', 'sans-serif'],
        exo2: ['"Exo 2"', 'sans-serif'],
      },
    },
  },
}