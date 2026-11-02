/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fdf7f8',
          100: '#fceef1',
          200: '#f9dee5',
          300: '#f4c3d0',
          400: '#ec9eb4',
          500: '#de7694',
        },
        rose: {
          dusty: '#C06C7F',
          deep: '#9C4A5B',
          soft: '#D88A96',
          vintage: '#A8576A',
        },
        burgundy: {
          DEFAULT: '#5A1827',
          deep: '#42101D',
          dark: '#350B16',
          light: '#6E2032',
        },
        ivory: {
          DEFAULT: '#FFFDF9',
          warm: '#FAF6F0',
          creamy: '#F5EFEB',
          dark: '#EBE2D7',
        },
        lavender: {
          soft: '#E8E0F0',
          muted: '#D4C5E2',
        },
        champagne: {
          DEFAULT: '#D4AF37',
          light: '#F3E5AB',
          muted: '#C5A059',
          glow: '#E6C280',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        handwriting: ['"Caveat"', '"Dancing Script"', 'cursive'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(222, 118, 148, 0.3))' },
          '100%': { filter: 'drop-shadow(0 0 22px rgba(212, 175, 55, 0.6))' },
        }
      }
    },
  },
  plugins: [],
}
