/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#EFF6F3',
        foreground: '#2D2E2E',
        darkGreen: '#3A4F39',
        green: '#A0CD9E',
        yellow: '#F8D254',
        lightGray: '#F6F6F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [
    
  ]
}

