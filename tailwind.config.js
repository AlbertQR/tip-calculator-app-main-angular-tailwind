/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        strongCyan: 'hsl(172, 67%, 45%)',
        veryDarkCyan: 'hsl(183, 100%, 15%)',
        darkGrayishCyan: 'hsl(186, 14%, 43%)',
        darkGrayishCyan2: 'hsl(184, 14%, 56%)',
        lightGrayishCyan: 'hsl(185, 41%, 84%)',
        lightGrayishCyan2: 'hsl(189, 41%, 97%)',
        white: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        title: ['Space Mono', 'sans-serif'],
        sans: ['Space Mono', 'sans-serif']
      }
    },
  },
  plugins: [],
}

