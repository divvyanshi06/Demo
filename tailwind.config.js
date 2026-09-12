/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: 'var(--color-brand-50, #FAF8F5)',
          100: 'var(--color-brand-100, #F3ECE2)',
          200: 'var(--color-brand-200, #E6D6C3)',
          300: 'var(--color-brand-300, #D6BA9E)',
          400: 'var(--color-brand-400, #C59D77)',
          500: 'var(--color-brand-500, #B38356)', // Primary accent (Luxury Bronze/Gold)
          600: 'var(--color-brand-600, #966940)',
          700: 'var(--color-brand-700, #785131)',
          800: 'var(--color-brand-800, #5C3D24)',
          900: 'var(--color-brand-900, #3E2716)',
        },
        salon: {
          bg: 'var(--color-salon-bg, #FAFAF8)',
          card: 'var(--color-salon-card, #FFFFFF)',
          text: 'var(--color-salon-text, #1A1A1A)',
          muted: 'var(--color-salon-muted, #666666)',
          dark: 'var(--color-salon-dark, #121212)',
          surface: 'var(--color-salon-surface, #F4F4F0)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'elevated': '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
        'luxury': '0 20px 40px -15px rgba(179, 131, 86, 0.12)',
      }
    },
  },
  plugins: [],
}
