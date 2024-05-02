/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'ibm-flex': ['"IBM Plex Sans"', 'sans-serif'],
      },
      colors: {
        themeGreen: '#6FA494',
        themeGreenDark: '#376757',
        themeDirtyWhite: '#F1F1F1',
        themeCream: '#E6E1DB',
        themeBrown: '#838280',
        buttonColor: '#838280',
      },
      keyframes: {
        fadeLeft: {
          from: { opacity: '0', transform: 'translateX(-100%)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-left': 'fadeLeft 1.5s ease-in-out forwards',
      },
    },
    plugins: [require('tailwindcss-animate')],
  },
};
