/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'custom-pulse':'pulse 1.5s  ease-out',
      }
    },
  },
  plugins: [],
}

//cubic-bezier(0.4, 0, 0.6 , 1) ease-in-out