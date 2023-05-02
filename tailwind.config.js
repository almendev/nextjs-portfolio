/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans]
      },
      colors: {
        light: '#DBD7D2',
        dark: '#003153',
        primary: '#7ac74f',
        primaryDark: '#58e6d9'
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite'
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(219, 215, 210,0.2) 2px,#003153 5px,#003153 100px)',
        circularLightLg: 'repeating-radial-gradient(rgba(219, 215, 210,0.2) 2px,#003153 5px,#003153 80px)',
        circularLightMd: 'repeating-radial-gradient(rgba(219, 215, 210,0.2) 2px,#003153 5px,#003153 60px)',
        circularLightSm: 'repeating-radial-gradient(rgba(219, 215, 210,0.2) 2px,#003153 5px,#003153 40px)'
      }
    },
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '479px' }
    }
  },
  plugins: []
}
