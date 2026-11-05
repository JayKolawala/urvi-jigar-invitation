/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Midnight Teal Royal Surfaces
        pearl: {
          DEFAULT: '#0A1E24',     // Deepest midnight teal canvas
          light: '#112F38',       // Elevated palace card surface
          dark: '#061418',        // Deepest vignette & footer shadow
          muted: '#173E4A',       // Interactive pill & button background
        },
        // Radiant Burnished Gold Accents & Foil
        gold: {
          DEFAULT: '#CBA14C',     // Primary burnished gold
          light: '#F4D48A',       // Shimmering light gold
          lighter: '#FDF2D6',     // Luminous gold glow
          dark: '#E5BF67',        // Radiant warm gold (script, headings, highlights)
          deep: '#F2CD74',        // Brilliant gold text
        },
        // Soft Coral Rose & Golden Warmth
        rose: {
          DEFAULT: '#D98F82',
          light: '#193A43',       // Ambient teal aura
          dark: '#E6A69B',
        },
        'dusty-pink': {
          DEFAULT: '#C77E72',
          light: '#15333B',
        },
        // Palace Peacock Teal Accents
        sage: {
          DEFAULT: '#2D7584',
          light: '#439BAF',
          muted: '#1B4752',
        },
        'deep-olive': {
          DEFAULT: '#E5BF67',     // Uppercase tracking tags in burnished gold
          dark: '#CBA14C',
          light: '#F4D48A',
        },
        // High-Contrast Alabaster & Ivory Typography
        charcoal: {
          DEFAULT: '#FFFDF9',     // Pure Ivory for primary names & headings
          light: '#E2ECE9',       // Clean, readable pale ivory for body text
          muted: '#A5C1BC',       // Soft muted teal-grey for secondary details
        },
      },
      fontFamily: {
        editorial: ['"Bodoni Moda"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 45px -15px rgba(3, 10, 12, 0.5), 0 0 1px 1px rgba(203, 161, 76, 0.35)',
        'luxury-hover': '0 25px 50px -12px rgba(3, 10, 12, 0.7), 0 0 2px 1px rgba(203, 161, 76, 0.6)',
        'envelope': '0 25px 60px -15px rgba(3, 10, 12, 0.6), 0 0 0 1px rgba(203, 161, 76, 0.4)',
        'card': '0 10px 30px -5px rgba(3, 10, 12, 0.4)',
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
