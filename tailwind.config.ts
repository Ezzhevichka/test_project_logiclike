import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: '#5FBF77',
        fontPrimary: '#39414B',
        fontSecondary: '#FFFFFF',
        border: '#CFCFE4',
      },
    },
  },
} satisfies Config;

export default config;
