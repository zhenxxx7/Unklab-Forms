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
    },
  },
  container: {
    center: true,
  },
  plugins: [],
}