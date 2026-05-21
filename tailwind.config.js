/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1F2937',
          dark: '#111827',
          light: '#374151',
        },
        gold: {
          DEFAULT: '#C99700',
          light: '#D4A900',
          dark: '#A67C00',
        },
        cream: '#F8F8F6',
        headline: '#111111',
        body: '#4B5563',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        brand: '8px',
      },
    },
  },
  plugins: [],
};
