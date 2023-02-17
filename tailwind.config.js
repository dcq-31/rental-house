/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0099ff",
          "primary-focus": "#008ae6",
          secondary: "#fdfcdc",
          accent: "#f07167",
          neutral: "#4b5563",
          "base-100": "#ffffff",
          info: "#7dd3fc",
          success: "#86efac",
          warning: "#fcd34d",
          error: "#fca5a5",
        },
      },
      "dark",
    ],
  },
};
