/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#77f27e',
      },
      animation: {
        'checkmark-bounce': 'checkmark-bounce 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'fade-in': 'fade-in 0.4s ease-out',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

