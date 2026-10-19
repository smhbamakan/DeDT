/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0F1B33',
          soft: '#3A4A66',
          muted: '#64748B',
        },
        brand: {
          DEFAULT: '#1E40AF',
          dark: '#0B2A7A',
          light: '#E8EEFB',
        },
        accent: {
          DEFAULT: '#0E9384',
          light: '#E3F5F2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
