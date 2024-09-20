module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      //   "form-bg": "url('../assets/form-bg-1.png')",
      // },
      colors: {
        "primary-100": "#3284FF",
        "primary-200": "#4991FF",
        "primary-300": "#0065FE",
        "primary-400": "#005AE2",
        "bg-light": "#F9FBFD",
        "main-text": "#141414",
        "neutral-400": "#A0B1C0",
        "neutral-500": "#5C6F7F",
        "foundation-red": "#D60505",
      },
    },
  },
  plugins: [],
};
