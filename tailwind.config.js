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
        foreground: '#2D2E2E'
      },
      fontFamily: {
        'menu-title': ['Inter', 'sans-serif'],
        text: ['Inter', 'sans-serif'],
        'text-b': ['Inter', 'sans-serif'],
        button: ['Inter', 'sans-serif'],
        subtext: ['Inter', 'sans-serif']
      },
      fontSize: {
        'menu-title': '50px',
        text: '16px',
        'text-b': '16px',
        button: '18px',
        subtext: '12px'
      },
      fontWeight: {
        'menu-title': '600',
        'text-b': '600',
        button: '500'
      }
    }
  },
  plugins: [
    
  ]
}

