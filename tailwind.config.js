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
    },
  },
  plugins: [],
}

