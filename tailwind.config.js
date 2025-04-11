/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#003459",
        "dark-blue-80": "#002A48",
        "dark-blue-60": "#00528C",
        "dark-blue-40": "#0078CD",
        "mon-yellow": "#F7DBA7",
        "mon-yellow-80": "#EEC77E",
        "mon-yellow-60": "#F1D092",
        "mon-yellow-40": "#FCEED5",
        "pink-red": "#FF564F",
        "green-light": "#34C759",
        "orange-shine": "#FF912C",
        "blue-sea": "#00A7E7",
        "neutral": "#00171F",
        "neutral-60": "#667479"
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const clampUtilities = {
        '.text-clamp-h1': {
          'font-size': 'clamp(2rem, 1rem + 2.5783vw, 4rem)',
        },
        '.text-clamp-h2': {
          'font-size': 'clamp(1.8rem, 1.3391rem + 1.8043vw, 3.125rem)',
        },
        '.text-clamp-h3': {
          'font-size': 'clamp(1rem, 0.8261rem + 0.8696vw, 1.5rem)',
        },
        '.text-clamp-p': {
          'font-size': 'clamp(0.75rem, 0.663rem + 0.4348vw, 1rem)',
        },
        // Add more clamp utilities as needed
      }
      addUtilities(clampUtilities)
    })
  ]
}

