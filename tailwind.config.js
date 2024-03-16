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
        '13xl': '17rem',
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        lighter: '300',
      },
      screens: {
        xsm: '420px',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s ease infinite',
      },
    },
  },
  plugins: [],
};
