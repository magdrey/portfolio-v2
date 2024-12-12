import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-down": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(-100%)",
          },
        },
        "slide-up": {
          from: {
            transform: "translateY(-100%)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(50%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOutDown: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(50%)" },
        },
        loadingBar: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-down": "slide-down 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        fadeInUp: "fadeInUp 2s ease-out forwards",
        fadeOutDown: "fadeOutDown 2s ease-out forwards",
        loadingBar: "loadingBar 2s linear ",
      },
      animationDuration: {
        10: "100ms", // Custom duration class
        50: "500ms",
        100: "1000ms", // Custom duration class
        150: "1500ms", // Custom duration class
        200: "2000ms", // Custom duration class
        300: "3000ms", // Custom duration class
        350: "3500ms", // Custom duration class
        400: "4000ms",
      },
      animationDelay: {
        300: "300ms", // Custom delay class
        500: "500ms", // Custom delay class
        1000: "1000ms",
        1500: "1500ms",
        2000: "2000ms", // Custom delay class
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
