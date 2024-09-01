/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    './src/**/*.{vue,js,ts}',
    './src/playground/**/*.{vue,js,ts}',
    './src/playground/index.html',
    './index.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        top: '0px 0px 6px rgba(0, 0, 0, 0.1)',
        xs: '0px 2px 4px rgba(0, 0, 0, 0.08)',
        sm: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        md: '0px 16px 20px rgba(66, 77, 87, 0.1)',
        lg: '0px 10px 25px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        gray: { ...colors.zinc },
        red: { ...colors.red },
        yellow: colors.amber,
      },
    },
    fontFamily: {
      sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      ...defaultTheme.fontSize,
      xxs: '0.625rem',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      semibold: '500',
      bold: '600',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
