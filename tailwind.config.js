/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        archivo: ['var(--font-archivo)', 'sans-serif'],
        helvetica: ['var(--font-helvetica)', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
      },
      colors: {
        black: '#080808',
        cream: '#f0ede8',
        accent: '#c8a97e',
        grey: '#2a2a2a',
      },
    },
  },
  plugins: [],
}
