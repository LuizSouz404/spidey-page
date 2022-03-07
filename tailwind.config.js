module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spider-red': '#E5111A',
        'spider-dark-red': '#CE131B',
      },
      backgroundImage: {
        'spidey-logo': "url('/background-logo-spidey.png')"
      }
    },
  },
  plugins: [],
}
