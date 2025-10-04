import type { Config } from "tailwindcss";

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
        dark: "#232222",
        gray: "#2a2a2a;",
        "light-gray": "#5D5D5D",
      },
      fontSize: {
        large: "32px",
      },
      textColor: {
        "light-gray": "#5D5D5D",
      },
    },
  },
  plugins: [],
} satisfies Config;
