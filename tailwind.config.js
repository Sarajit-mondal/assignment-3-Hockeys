/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "786px",
        lg: "1020px",
      },
      colors: {
        primary_color: "#FF4240",
        black: "131318",
        gray: "##89898B",
        golden: "#F99808",
        light_color: "#fff",
      },
      fontFamily: {
        manrope: ["Manrope", "sans - serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
