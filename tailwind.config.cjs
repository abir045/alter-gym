/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      content: {
        hero: "url('./assets/image.jpg')",
        mbCover: "url('./assets/mbCover.jpg')",
      },

      dropShadow: {
        "3xl": "0px 5px 4px rgba(0, 0, 0, 0.33333)",
      },
      backgroundImage: (theme) => ({
        "gradient-orange-yellow":
          "linear-gradient(90deg, #FF5E0E 50%, #FEB700 100%)",
      }),
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
