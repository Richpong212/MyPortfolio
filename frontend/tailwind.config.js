/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": {
            opacity: "0.2",
            filter: "drop-shadow(0 0 10px white)",
          },
          "50%": {
            opacity: "1",
            filter: "drop-shadow(0 0 10px white)",
          },
        },
      },
      animation: {
        blink: "blink 4.5s ease-in-out infinite",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
