const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        greenBlack: "#000000",
        brandPrimary: "#00D8FF",
        whiteText: "#ffffff",
        neutralGrey: "#7E8589",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
