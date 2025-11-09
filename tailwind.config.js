/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Màu đỏ truyền thống Việt Nam (cờ đỏ sao vàng)
        'vn-red': {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa0a0',
          400: '#ff6b6b',
          500: '#ff3838',
          600: '#ed1c24', // Màu đỏ chính - màu cờ Việt Nam
          700: '#c80d15',
          800: '#a50f15',
          900: '#881419',
        },
        'vn-yellow': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#ffda44', // Màu vàng sao - màu cờ Việt Nam
          700: '#d97706',
          800: '#b45309',
          900: '#92400e',
        },
      },
      // Thêm keyframes cho animation
      keyframes: {
        typing: {
          '0%, 80%, 100%': { transform: 'scale(0.8)', opacity: '0.5' },
          '40%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      // Thêm khai báo animation
      animation: {
        typing: 'typing 1.4s infinite ease-in-out',
        float: 'float 3s ease-in-out infinite',
        fadeIn: 'fadeIn 0.6s ease-in',
        slideInDown: 'slideInDown 0.8s ease-out',
      },
      // Thêm animationDelay cho typing indicator
      animationDelay: { 
        '200ms': '200ms',
        '400ms': '400ms',
      },
    },
  },
  // Thêm plugins
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}