/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFD6D6',
          DEFAULT: '#FF9A9E',
          dark: '#FF7377',
        },
        secondary: {
          light: '#F8E1E7',
          DEFAULT: '#E8B4BC',
          dark: '#D88C98',
        },
        accent: {
          light: '#C7E5B4',
          DEFAULT: '#98B475',
          dark: '#708B4E',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'floral-pattern': "url('/floral-pattern.svg')",
        'hero-pattern': "url('/hero-bg.jpg')",
        'couple-photo': "url('/couple.jpg')",
      },
    },
  },
  plugins: [],
}

