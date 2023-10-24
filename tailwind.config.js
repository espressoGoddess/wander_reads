/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sunset: {
          50: '#fbf6f5',
          100: '#f6edea',
          200: '#efded9',
          300: '#e3c6be',
          400: '#d8b3a8',
          500: '#bd8676',
          600: '#a76c5b',
          700: '#8c5849',
          800: '#744c40',
          900: '#634339',
          950: '#34211b',
        },
        sunrise: {
          50: '#f9f8ed',
          100: '#f0edd1',
          200: '#e2daa6',
          300: '#d1c173',
          400: '#c6ae57',
          500: '#b3953f',
          600: '#9a7734',
          700: '#7c5a2c',
          800: '#684a2b',
          900: '#5a3f29',
          950: '#332215',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
});
