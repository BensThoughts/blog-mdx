module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive']
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderOpacity: ['active']
    },
  },
  plugins: [],
};
