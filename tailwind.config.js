/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xxs: '350px',
        xs0: '412px',
        xs1: '639px',
      },

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
      backgroundImage: {
        palePattern: "url('./public/assets/background.jpg')",
      },
      keyframes: {
        fromButtom: {
          '0%': { transform: 'translateY(200px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      fadeLeft: {
        from: { opacity: '0', transform: 'translateX(-100%)' },
        to: { opacity: '1', transform: 'translateX(0)' },
      },
    },
    animation: {
      'fade-left': 'fadeLeft 1s ease-in-out forwards',
      fromButtom: 'fromButtom 0.3s ease-out forwards',
    },
  },
  plugins: [],
};
