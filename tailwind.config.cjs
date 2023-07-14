/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    animationDelay: {
      100: "100ms",
      200: "200ms",
      300: "300ms",
      400: "400ms",
    },
    extend: {
      variants: {
        animation: ["motion-safe"],
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
        fadeOut: "fadeOut 1s ease-out forwards",
        fadeInFast: "fadeInFast 1s ease-in forwards",
        fadeInDelayed: "fadeInFast 4s ease-in forwards",
        widthTransition: "width 4s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        fadeInFast: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
    },
      colors: {
        yellow_vs:"#D9E577",
        blue_vs:"#389fdc",
        lightblue_vs:"#85d8fb",
        brown_vs:"#d98e73",
        
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    animationDelay: ["responsive", "hover"],
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
};

