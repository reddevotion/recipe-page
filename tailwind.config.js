/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '500px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        color: {
          1: "#ffffff",
          2: "#f3e5d8",
          3: "#5f574e",
          4: "#7b284f",
          5: "#FFF5FA",
          6: "#854632",
          7: "#E4DED8",
          8: "#302d2c"
        }
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", ...fontFamily.sans],
        yserif: "var(--font-young-serif)",
      },
    },
  },
  plugins: [],
}

