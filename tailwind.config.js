/** @type {import('tailwindcss').Config} */
const preset = require('./config/tailwindcss-preset')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [preset],
  plugins: [],
}
