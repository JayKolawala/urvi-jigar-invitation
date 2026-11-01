/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pearl: {
          DEFAULT: '#FFFCF7',
          light: '#FFFDFB',
          dark: '#F5EFE6',
          muted: '#EFE8DC',
        },
        gold: {
          DEFAULT: '#D9BD8A',
          light: '#F4E8D3',
          lighter: '#FBF6EE',
          dark: '#B89958',
          deep: '#93773A',
        },
        rose: {
          DEFAULT: '#D9B2AE',
          light: '#F7ECEB',
          dark: '#B58783',
        },
        'dusty-pink': {
          DEFAULT: '#E8D2CF',
          light: '#F4EAE8',
        },
        sage: {
          DEFAULT: '#A8B5A0',
          light: '#E2E8DE',
          muted: '#C4CDC0',
        },
        'deep-olive': {
          DEFAULT: '#465448',
          dark: '#2E392F',
          light: '#5E7060',
        },
        charcoal: {
          DEFAULT: '#393832',
          light: '#626056',
          muted: '#8C897E',
        },
      },
      fontFamily: {
        editorial: ['"Bodoni Moda"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 45px -15px rgba(57, 56, 50, 0.08), 0 0 1px 1px rgba(217, 189, 138, 0.25)',
        'luxury-hover': '0 25px 50px -12px rgba(57, 56, 50, 0.15), 0 0 1px 1px rgba(217, 189, 138, 0.4)',
        'envelope': '0 25px 60px -15px rgba(70, 84, 72, 0.18), 0 0 0 1px rgba(217, 189, 138, 0.3)',
        'card': '0 10px 30px -5px rgba(57, 56, 50, 0.06)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        shimmer: 'shimmer 4s linear infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
