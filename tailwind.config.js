/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1399.98px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1199.98px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '991.98px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767.98px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '575.98px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
