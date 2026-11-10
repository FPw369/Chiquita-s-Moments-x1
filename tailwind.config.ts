import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FBF9F5',
        surface: '#FFFFFF',
        borderWarm: '#EBE5DF',
        espresso: {
          DEFAULT: '#231F20',
          light: '#3A3432',
        },
        gold: {
          DEFAULT: '#C5A059',
          dark: '#A68238',
          light: '#F4ECE1',
          muted: '#E5D5B5',
        },
        taupe: {
          DEFAULT: '#8C827A',
          light: '#D8D1CA',
          bg: '#F3EFEA',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 10px 30px -10px rgba(35, 31, 32, 0.06)',
        'editorial-lg': '0 20px 45px -15px rgba(35, 31, 32, 0.11)',
        heirloom: '0 4px 20px -2px rgba(197, 160, 89, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
