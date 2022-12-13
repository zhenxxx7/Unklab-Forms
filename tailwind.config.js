module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#434343',
        'secondary': '#FFB546',
        'color1' : '#FDAE8F',
      },
      
      fontFamily: {
        inte: ['Inter', 'sans-serif'],
      },

      margin: {
        '1/2': '35.6%',
        '1/3': '39.8%',
      }
    },
  },
  container: {
    center: true,
  },
  plugins: [],
}