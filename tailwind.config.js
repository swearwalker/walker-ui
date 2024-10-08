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
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        top: '0px 0px 6px rgba(0, 0, 0, 0.1)',
        xs: '0px 2px 4px rgba(0, 0, 0, 0.08)',
        sm: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        md: '0px 16px 20px rgba(66, 77, 87, 0.1)',
        lg: '0px 10px 25px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        primary: {
          50: '#eef5ff',
          100: '#dae8ff',
          200: '#bdd8ff',
          300: '#90c0ff',
          400: '#5d9fff',
          500: '#3579fc',
          600: '#1f58f1',
          700: '#1743de',
          800: '#1938b4',
          900: '#1a338e',
          950: '#152156',
        },
        secondary: {
          50: '#f4f6f7',
          100: '#e2e7eb',
          200: '#c9d2d8',
          300: '#a3b1bd',
          400: '#76899a',
          500: '#5b6e7f',
          600: '#4e5c6c',
          700: '#444d5a',
          800: '#3d444d',
          900: '#343941',
          950: '#21252b',
        },
        danger: {
          50: '#fef2f3',
          100: '#ffe1e3',
          200: '#ffc8cc',
          300: '#ffa2a8',
          400: '#fc6d76',
          500: '#f43b47',
          600: '#e2202d',
          700: '#be1722',
          800: '#9d1720',
          900: '#821a21',
          950: '#47080c',
        },
        warning: {
          50: '#fff7eb',
          100: '#fde9c8',
          200: '#fbd18c',
          300: '#f9b350',
          400: '#f7941e',
          500: '#f1750f',
          600: '#d5530a',
          700: '#b1360c',
          800: '#902a10',
          900: '#762311',
          950: '#440f04',
        },
        success: {
          50: '#eefbf4',
          100: '#d5f6e2',
          200: '#afebc9',
          300: '#7bdaaa',
          400: '#45c287',
          500: '#1e9461',
          600: '#148757',
          700: '#106c49',
          800: '#0f563b',
          900: '#0e4631',
          950: '#06281d',
        },
        info: {
          50: '#edfcfe',
          100: '#d1f5fc',
          200: '#a9ebf8',
          300: '#6edbf2',
          400: '#2bc0e4',
          500: '#10a3ca',
          600: '#1082aa',
          700: '#14698a',
          800: '#1a5770',
          900: '#1a485f',
          950: '#0b2f41',
        },
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
