
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        justice: {
          primary: '#102a43', // الأزرق الغامق الملكي
          secondary: '#c5a059', // الذهبي الرسمي
          accent: '#f0f4f8',
          dark: '#0a1a29',
          light: '#ffffff'
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'scan-y': 'scan-y 2.5s infinite linear',
        'ticker': 'ticker 40s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
