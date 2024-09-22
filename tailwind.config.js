/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },

      container: {
        padding: "1rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
