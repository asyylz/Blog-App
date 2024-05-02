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
        themeDirtyWhite: '#EBEDEC',
        themeCream: '#E6E1DB',
        themeBrown: '#838280',
        buttonColor: '#838280',
        themeGray: '#595959',
      },
      boxShadow: {
        themeShadow:
          'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
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
