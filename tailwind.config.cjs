/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      content: {
        hero: "url('./assets/cover2.jpg')",
      },

      dropShadow: {
        "3xl": "0px 5px 4px rgba(0, 0, 0, 0.33333)",
      },
    },
  },
  plugins: [],
};
