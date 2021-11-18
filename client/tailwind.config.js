module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        code: ['Source Code Pro !important'],
      },
      colors: {
        darktransparent: 'rgba(0, 0, 0, .1)',
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
};
