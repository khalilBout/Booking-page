/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        titleAr: ["Cairo", "sans-serif"],
        bodyAr: ["ElMessiri", "sans-serif"],
      },
      colors: {
        primary: "#731b22",
        primaryDark: "#87131d",
        lightOrange: "#b07155",
        darkGray: "#000000",
        lightGray: "#272c35",
      },
      backgroundImage: {
        "hero-bg": "url('./Snow.svg')",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
};
