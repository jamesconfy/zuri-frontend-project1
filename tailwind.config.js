/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "2x": "0px 1px 2px rgba(16, 24, 40, 0.05)",
        "1x": "0px 1px 2px rgba(16, 24, 40, 0.05)",
      },
    },
  },
  plugins: [],
};
