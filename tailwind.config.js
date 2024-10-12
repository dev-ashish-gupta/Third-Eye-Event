/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-up-down': 'bounce-up-down 2s infinite',
      },
      keyframes: {
        'bounce-up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }, // Adjust the value to control the bounce height
        },
      },
    },
  },
  variants: {},
  plugins: [],
}