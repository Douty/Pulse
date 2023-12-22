/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: "#18191C",
        ash: "#262626",
      },
    },
  },
  plugins: [],
};
