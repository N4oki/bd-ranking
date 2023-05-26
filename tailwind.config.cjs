const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "#B40001",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100ch",
            strong: {
              backgroundColor: "white",
              fontSize: "0.75rem",
              width: "36px",
              borderRadius: "0.25rem",
              color: "black",
              display: "flex",
              justifyContent: "center",
              marginBottom: "0.25rem",
              marginRight: "0.5rem",
              "@media (min-width: 640px)": {
                display: "inline-grid",
                alignContent: "center",
                width: "2.25rem",
                height: "2.25rem",
                marginBottom: "0",
              },
            },
            th: {
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              "@media (min-width: 640px)": {
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
              },
            },
            a: {
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
            },
          },
        },
      },
      fontFamily: {
        display: ["Black Ops One", defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
