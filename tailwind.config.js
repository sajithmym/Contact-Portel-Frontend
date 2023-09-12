/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom': 'rgb(8, 63, 70)', 
      },
      borderRadius: {
        'right': '0 80% 80% 0', 
      },
      backgroundImage: {
        'custom-bg': "url('/background.jpg')",
      },
      height : {
        'custom' : '125%'
      },
      colors : {
        'cus' : 'rgb(8, 63, 70)',
      }
    },
  },
  plugins: [],
}