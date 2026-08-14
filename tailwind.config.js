/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1A222C',
          dark: '#0E141C',
          light: '#2C3642',
        },
        gold: {
          DEFAULT: '#C4843A',
          light: '#D49652',
          dark: '#A66B28',
        },
        cream: '#F3F1EC',
        headline: '#12161C',
        body: '#4A5560',
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
