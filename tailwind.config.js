/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary & Secondary
        primary: '#3021d9',
        secondary: '#fbfbfc',

        // Blue Variants
        'imperial-primer': '#202E40',
        'peaceful-blue': '#9BB5BF',
        cornflower: '#5576D9',
        'yankees-blue': '#1B2440',
        'wondrous-wisteria': '#A0BBF2',
        'island-view': '#C2DCF2',
        'blue-elemental': '#5288F2',
        'blue-jay': '#4886D9',
        delft: '#3E608C',
        'phosphorescent-blue': '#13F2F2',
        'space-grey': '#0D0126',
        'endless-galaxy': '#030140',
        'phthalo-blue': '#030A8C',
        'abyssal-blue': '#020659',
        'constellation-blue': '#3C4973',
        glass: '#C2D2F2',

        // Green Variants
        'bright-light-green': '#30F24E',
        'mizukaze-green': '#174031',
        'antique-green': '#2C7359',
        'warp-drive': '#E9F1F2',
        'marrs-green': '#038C8C',
        'verdigris-coloured': '#60BF78',
        ragweed: '#79F297',

        // Teal Variants
        'teal-fury': '#176A73',

        // Purple Variants
        'matt-purple': '#8A7ED9',
        'megadrive-screen': '#4946A6',
        valhalla: '#282C40',
        'purple-hyacinth': '#6F92BF',

        // Black & Dark Variants
        'black-wash': '#0D0D0D',
        nero: '#262626',
        'dark-matter': '#0D0000',
        'dark-eclipse': '#111D40',
        corbeau: '#0B1726',
        'benthic-black': '#02000D',

        // White & Light Variants
        'nano-white': '#F2F0EB',
        'bleached-silk': '#F2F2F2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
