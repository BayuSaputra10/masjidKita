/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Hanken': ['Hanken Grotesk', 'sans-serif'],
      },
      colors: {
        'greenCustom': '#165648',
      },
    },
  },
  plugins: [],
}

