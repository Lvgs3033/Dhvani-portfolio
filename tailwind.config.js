/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0B0B0B",
          900: "#111111",
          800: "#1A1A1A",
          700: "#232323",
        },
        cream: {
          100: "#F5F1E8",
          200: "#EDE6D8",
          300: "#E8E0D0",
        },
        gold: {
          400: "#D4AF37",
          500: "#C9A227",
          600: "#A9861F",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Poppins'", "sans-serif"],
        mono: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        "data-grid":
          "linear-gradient(rgba(212,175,55,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
      boxShadow: {
        gold: "0 0 30px rgba(212,175,55,0.25)",
        glass: "0 8px 32px rgba(0,0,0,0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
