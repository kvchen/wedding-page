/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/sections/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display Variable"', 'serif'],
        body: ['"IBM Plex Mono"', 'monospace']
        // body: ['"Nunito Variable"', 'sans-serif'],
      },
      colors: {
        "background": 'rgb(253,248,242)',
        "primary": colors.stone,
        "secondary": colors.stone,
        "accent-green": 'rgb(118,146,80)',
        "accent-orange": 'rgb(235,114,62)'
      },
      backgroundImage: {
        'header-pattern': 'radial-gradient(rgba(0, 0, 0, 0) 1px, #ffbb00 1px'
      }
    },
  },
  plugins: [],
}
