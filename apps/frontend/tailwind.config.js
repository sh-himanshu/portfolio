const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        greycliff: ['Greycliff CF', ...defaultTheme.fontFamily.sans],
        stylish: ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
