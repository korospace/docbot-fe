/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'docbot-green-100': '#DFEEEB',
        'docbot-green-200': '#88DBC7',
        'docbot-green-300': '#3EA390',
        'docbot-green-400': '#2D796B',
      },
      maxWidth: {
        '9xl': '2560px',
      }
    },
  },
  plugins: [],
}
