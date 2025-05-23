/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F7FEDE',
          100: '#EFFCBC',
          200: '#E6FA9A',
          300: '#DCF978',
          400: '#D3F756',
          500: '#BEFA00', // Main brand color
          600: '#9AC800',
          700: '#779600',
          800: '#546400',
          900: '#323200',
        },
        neutral: {
          900: '#000000', // Main black
          800: '#1A1A1A',
          700: '#333333',
          600: '#4D4D4D',
          500: '#666666',
          400: '#808080',
          300: '#999999',
          200: '#B3B3B3',
          100: '#CCCCCC',
          50: '#F2F2F2',
        },
        success: {
          50: '#ECFDF5',
          500: '#10B981',
          900: '#064E3B',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          900: '#78350F',
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          900: '#7F1D1D',
        },
        info: {
          50: '#EFF6FF',
          500: '#3B82F6',
          900: '#1E3A8A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'hard': '0 8px 30px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};