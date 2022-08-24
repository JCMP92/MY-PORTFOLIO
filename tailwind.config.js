/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/Components/Navbar.js', './src/Pages/Home.js'],
  theme: {
    screens: {
      sm: '576px',
      // => @media (min-width: 576px) { ... }

      md: '960px',
      // => @media (min-width: 960px) { ... }

      lg: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
