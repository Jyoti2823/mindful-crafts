import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#f4f8f3',
          100: '#e6f0e4',
          200: '#cce1c8',
          300: '#a8c4a0',
          400: '#7c9a72',
          500: '#5b7a52',
          600: '#476240',
          700: '#394f34',
          800: '#2e402a',
          900: '#263523',
          DEFAULT: '#7c9a72',
        },
        terracotta: {
          50:  '#fdf5f1',
          100: '#fbe8de',
          200: '#f6cfbc',
          300: '#eeac8a',
          400: '#e4886a',  
          500: '#c97b5a',
          600: '#b3674a',
          700: '#96503a',
          800: '#7a4131',
          900: '#65372b',
          DEFAULT: '#c97b5a',
        },
        beige: {
          50:  '#fefcf7',
          100: '#faf6ee',
          200: '#f5f0e4',
          300: '#f0ebe0',
          400: '#e8e0d2',
          500: '#d8cfc0',
          600: '#bfb3a0',
          DEFAULT: '#f0ebe0',
        },
        cream: '#fefcf7',
        brown: {
          light: '#c4a882',
          DEFAULT: '#8b6f52',
          dark: '#6b4f38',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.8rem, 6vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.2rem, 4.5vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.8rem, 3.5vw, 2.8rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'card': '0 2px 16px rgba(44,36,22,0.07)',
        'card-hover': '0 12px 40px rgba(44,36,22,0.14)',
        'float': '0 8px 30px rgba(44,36,22,0.12)',
        'navbar': '0 4px 20px rgba(44,36,22,0.08)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(145deg, #fefcf7 0%, #f0ebe0 60%, #e5ddd0 100%)',
        'sage-gradient': 'linear-gradient(135deg, #5b7a52 0%, #7c9a72 50%, #a8c4a0 100%)',
        'card-gradient': 'linear-gradient(135deg, #a8c4a0, #f0ebe0)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
  plugins: [],
}

export default config
