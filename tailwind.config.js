/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      "accent-green": 'rgb(118,146,80)',
      "accent-orange": 'rgb(235,114,62)'
    },
    extend: {
      fontFamily: {
        headings: ['"Fraunces Variable"', 'serif'],
        body: ['"Nunito Variable"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
