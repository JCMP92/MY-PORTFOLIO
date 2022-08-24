/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/Components/Navbar.js',
    './src/Pages/Home.js',
    './src/Pages/About.js',
    './src/Pages/Projects.js',
    './src/Components/Project-Card.js',
  ],
  theme: {
    screens: {
      xl: { max: '1440px' },
      // => @media (max-width: 1440px) { ... }

      lg: { max: '1024px' },
      // => @media (max-width: 1024px) { ... }

      md: { max: '768px' },
      // => @media (max-width: 768px) { ... }

      sm: { max: '425px' },
      // => @media (max-width:425px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
