/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b12",
        card: "#151420",
        line: "#2a2838",
        paper: "#f5f4ff",
        muted: "#a6a3c4",
        pink: "#ff3d6e",
        yellow: "#ffb800",
        blue: "#4d5bff",
        mint: "#00d9a3",
      },
      fontFamily: {
        display: ["var(--font-unbounded)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        xl2: "22px",
      },
    },
  },
  plugins: [],
};
