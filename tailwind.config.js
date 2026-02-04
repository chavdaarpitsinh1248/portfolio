/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#f9fafb",   // gray-50
          dark: "#030712",    // gray-950
        },
      },
    },
  },
  plugins: [],
};
