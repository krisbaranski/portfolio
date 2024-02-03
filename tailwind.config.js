module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        elephant: ['Elephant', 'sans'],
        lato: ['Lato', 'sans'],
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12.5rem',
        '12xl': '15rem',
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        lighter: '300',
      },
      screens: {
        xsm: '420px',
      },
    },
  },
  plugins: [],
};
