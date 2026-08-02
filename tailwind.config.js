/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#2563EB',
        secondary: '#06B6D4',
      },
      boxShadow: {
        glow: '0 0 30px rgba(37,99,235,0.25)',
      },
    },
  },
  plugins: [],
};
