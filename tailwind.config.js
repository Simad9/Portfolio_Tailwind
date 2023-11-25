/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#083358",
        secondary: "#1884f1",
      },
      backgroundImage: {
        image1: "url('../img/sushi.png')",
        image2: "url('../img/feed.png')",
        image3: "url('../img/tracker.png')",
      },
    },
  },
  plugins: [],
};
