/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'ibm-flex': ['"IBM Plex Sans"', 'sans-serif'],
      },
      colors: {
        themeGreen:'#6FA494',
        themeGreenDark:'#376757',
        themeDirtyWhite: '#F1F1F1',
        themeCream:'#E6E1DB',
        themeBrown:'#838280',
        buttonColor: '#838280',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#019587',
        yellow: '#ffc82c',
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
      },
    },
    plugins: [],
  },
};
