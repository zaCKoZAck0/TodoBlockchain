/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideFromTop: {
    '0%': {
      transform: 'translateY(-100%)',
      opacity: 0,
    },
    '60%': {
      transform: 'translateY(5px)',
      animationTimingFunction: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
    },
    '80%': {
      transform: 'translateY(-5px)',
      animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
    },
    '100%': {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
      },
      animation: {
        'slideFromTop': 'slideFromTop .5s both'
      },
      colors: {
        primary: '#3772FF',
        primary_light: '#007FFF',
        gray: '#242731',
        gray_light: "#F3F4F6",
        textGray: "#6C6C6C",
        textGray_light: "#898989",
        cardGray: "#191B20",
        cardGray_light: "#E5E7EB",
        btnGray: "#353945",
        btnGray_light: "#D1D5DB",
        textGrayLight: '#808191',
        textGrayLight_light: "#C0C0C0",
        btnBlue: "#A3E3FF",
        btnBlue_light: "#ADD8E6"     
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};
