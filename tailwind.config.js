/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/rippleui/**/*.js', // 👈 important
  ],
  theme: {
    extend: {},
  },
  plugins: [require('rippleui')], // 👈 important
}
