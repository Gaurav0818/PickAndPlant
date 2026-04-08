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
          'green-dark': '#1a3a2a',
          'green-mid': '#2d6a4f',
          'green-light': '#52b788',
          'cream': '#f5f0e8',
          'earth': '#a07850',
          'leaf': '#95d5b2',
          'text-dark': '#1a1a14',
          'text-mid': '#3d3d30',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease both',
      }
    },
  },
  plugins: [],
}