/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"', 'sans-serif'], // Add Josefin Sans here
      },
    },
  },
  plugins: [],
}

