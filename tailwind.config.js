/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#00C49A', 
        // 'primary':'#ED6237', 
      },
      fontFamily: {
        'OpenSans': ["Open Sans", "serif"],
      },
    },
  },
  plugins: [],
}