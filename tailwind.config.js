/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
        button: ["Inter", "sans-serif"],
      },
      colors: {
        cyan: {
          400: '#34D1BF',
          500: '#14B8A6',
        },
        amber: {
          400: '#FBBF24',
          500: '#F59E0B',
        },
      },
    },
  },
  plugins: [],
}; 