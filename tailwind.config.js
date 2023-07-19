/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      secondary: '#ccc',
      primary: '#111',
      grey: '#757575'
    },
    extend: {}
  },
  plugins: []
};
