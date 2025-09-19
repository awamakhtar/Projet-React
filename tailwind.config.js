/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors :{
        hero: "#551839",
      }
    },
     fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
  },
  plugins: [],
}

