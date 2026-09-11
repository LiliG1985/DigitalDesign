/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08080b",
        card: "#111116",
        line: "#26262f",
        paper: "#f5f5f7",
        muted: "#93939f",
        pink: "#ff2f7e",
        yellow: "#ffb04d",
        blue: "#34a6ff",
        violet: "#7b5cff",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        xl2: "22px",
      },
    },
  },
  plugins: [],
};
