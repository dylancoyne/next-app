import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,jsx,mdx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.5rem', { lineHeight: '3rem' }],
      '6xl': ['3rem', { lineHeight: '3.5rem' }],
      '7xl': ['4rem', { lineHeight: '4.5rem' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2.5rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'neutral': {
          /**100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',**/
          950: '#191818',
      },
    },
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        display: [
          ['DM Sans', ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config
