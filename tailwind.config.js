/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      txs: "480px",
      sm: "640px",
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1024px", // => @media (min-width: 1024px) { ... }
      xl: "1280px", // => @media (min-width: 1280px) { ... }
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        txs: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      primary: "#ffffff",
      secondary: "#18d26e",
      black: "#000",
      gray: "#aaaaaa",
      darkGray: "#514b4b",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      padding: {
        10: "10%",
        15: "15%",
        20: "20%",
        30: "30%",
      },
    },
  },
  plugins: [],
};
