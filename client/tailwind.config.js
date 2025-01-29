/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        pacifico: ['Pacifico', 'serif'],
        poppins: ['Poppins','serif'],
        cinzel: ['Cinzel','serif'],
        roboto: ['Roboto','serif']
      }
    },
  },
  plugins: [],
}

