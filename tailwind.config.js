// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        "almost-black": "#0f031d",
        lavender: "#e5e9f5",
        violet: "#270949",
      },
      fontFamily: {
        header: "Montserrat, sans-serif",
        body: "Raleway, sans-serif",
      },
      inset: {
        "-16": "-4rem",
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
