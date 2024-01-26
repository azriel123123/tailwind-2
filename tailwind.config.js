/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  darkMode: "class", 
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins']
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}