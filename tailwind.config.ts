const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#FFFBEB",
          100: "#FFF3C4",
          200: "#FFE78A",
          300: "#FFD84D",
          400: "#FFC91A",
          500: "#F5B800",
          600: "#D19A00",
          700: "#A67C00",
          800: "#8A6900",
          900: "#664D00",
        },
        cream: {
          50: "#FEFCF8",
          100: "#FDF8ED",
          200: "#F9EED3",
          300: "#F5E2B5",
          400: "#EFD08A",
          500: "#E8BC5E",
        },
        charcoal: {
          50: "#F7F7F7",
          100: "#E3E3E3",
          200: "#C8C8C8",
          300: "#A4A4A4",
          400: "#818181",
          500: "#666666",
          600: "#4D4D4D",
          700: "#3D3D3D",
          800: "#2D2D2D",
          900: "#1A1A1A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
