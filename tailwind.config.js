/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        primary: "#FF8709",
        secondary: "#004067",
        base: "#050505",
      },
    },
  },
  plugins: [],
}