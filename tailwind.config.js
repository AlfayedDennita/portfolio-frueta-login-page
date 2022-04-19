const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      'fontFamily': {
        'cinzel': ['Cinzel', ...defaultTheme.fontFamily.serif],
        'noto-sans': ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};