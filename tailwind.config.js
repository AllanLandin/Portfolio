/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./app*.{js,ts,jsx,tsx,mdx,css}",
  ],

  theme: {
    fontFamily: {
      inter: ["sans-serif"],
      poppins: ["sans-serif"],
    },

    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        emphasis: "rgb(var(--color-emphasis) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
