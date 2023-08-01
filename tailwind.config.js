/** @type {import('tailwindcss').Config} */
const preset = require('./styles/preset')

module.exports = {
  content: ['./**/*.{js,jsx,ts,tsx}'],
  presets: [preset],
  plugins: [],
}
