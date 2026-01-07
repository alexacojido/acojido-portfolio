/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("tailwind-heropatterns")({
      variants: [],
      patterns: ["texture"],
      colors: {
        default: "#9C92AC",
      },
      opacity: {
        default: 0.4,
      },
    }),
  ],
  daisyui: {
    themes: ["dark"],
  },
};
