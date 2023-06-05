/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./public/index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: { extend: {} },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ]
}

