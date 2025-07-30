/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        summit: {
          50:  "#F2F5F6",
          100: "#E1E6E9",
          200: "#C5CFD5",
          300: "#A9B8C1",
          400: "#8DA1AD",
          500: "#7A8F9A",   // Summit Blue #7A8F9A
          600: "#647985",
          700: "#4E626E",
          800: "#394C57",
          900: "#24363F"
        },
        accent: "#d22d2d"   // rhododendron red
      }
    }
  },
  plugins: []
};
