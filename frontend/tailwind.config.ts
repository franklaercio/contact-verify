import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Roboto", "system-ui", "sans-serif"],
        serif: ["Open Sans Serif", "serif"],
        mono: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
} satisfies Config;
