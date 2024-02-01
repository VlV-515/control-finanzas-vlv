/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#164863",
        secondary: "#427D9D",
        accent: "#9BBEC8",
        background: "#DDF2FD",
        warning: "#FFA500",
        danger: "#FF0000",
      },
    },
  },
  plugins: [],
};
