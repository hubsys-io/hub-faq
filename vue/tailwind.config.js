/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'japanese-laurel': {
          '50': '#f2ffe2',
          '100': '#e0ffc0',
          '200': '#c1ff88',
          '300': '#98ff44',
          '400': '#70ff0d',
          '500': '#4ff500',
          '600': '#39c500',
          '700': '#2a9500',
          '800': '#267b00',
          '900': '#206106',
          '950': '#0c3700',
        },
      }
    },
  },
  plugins: [],
}
