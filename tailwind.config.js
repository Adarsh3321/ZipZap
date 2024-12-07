/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d67538',
          dark: '#733610',
        },
        dark: {
          DEFAULT: '#0b1536',
          lighter: '#0e1a40',
        }
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(214, 117, 56, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(214, 117, 56, 0.8)' },
        }
      },
      animation: {
        pulse: 'pulse 0.3s ease-in-out',
        glow: 'glow 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
