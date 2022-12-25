/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bad-script': ['"Bad Script"', 'cursive'],
      }
    },
  },
  plugins: [],
}
