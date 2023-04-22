/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgblue: '#0EA8EA',
        bgbluedark: '#0D8ABF'
      },
      spacing: {
        192: '48rem',
        96: '24rem',
        48: '12rem,',
        40: '10rem',
        32: '8rem',
        24: '6rem',
        20: '5rem',
      },
    },
    
  },
  plugins: [],
}