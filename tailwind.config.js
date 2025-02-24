/** @type {import('tailwindcss').Config} */
export default {
  content: [  './src/**/*.{html,js,jsx}'],
  theme: {

    extend: { 
      fontSize: {
        '10xl' : '9rem'
      },
    screens: {
      'xs' : '320px'
    },
    colors: {
      'bg-light' : '#F0F0F0',
      'bg-dark' : '#0B1215',
      'dark-red' : '#601900',
      'dark-translucent':'#000000e6'
    },
    fontFamily: {
    takobe:["Takobe", "sans-serif"],
    brush1:["Brush1", "sans-serif"],
    inkg:["Inkg", "sans-serif"],
    pubbru:["PubBru", "sans-serif"], 
    sunbru: ["SunBru", "sans-serif"],
    deysia: ["Deysia", "sans-serif"]
  }
  },
  },
  plugins: [],
}

