/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        gridAutoFitCol: "repeat(auto-fit,minmax(400px,1fr))",
      },
      gap: {
        sm: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
      },

      gridColumn: {
        "col-2/3": "2 / 3",
      },
      padding: {
        xsm: "5px",
        sm: "10px",
        md: "15px",
        lg: "20px",
        xl: "30px",
      },
    },
  },
  plugins: [],
};
