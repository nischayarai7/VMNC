/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ff4655',
        surface: {
          900: '#0b0d12',
          800: '#0f1218',
          700: '#151a22',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Inter'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(255,70,85,0.25)',
      },
      backgroundImage: {
        'grid': 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '16px 16px',
      },
    },
  },
  plugins: [],
}