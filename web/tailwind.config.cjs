/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        background: "url('/assets/background.svg')",
        'game-gradient': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
        'linear-background-gradient': "linear-gradient(to right, rgba(149, 114, 252, 1), rgba(67, 231, 173, 1), rgba(226, 212, 92, 1))"
      }
    },
  },
  plugins: [],
}
