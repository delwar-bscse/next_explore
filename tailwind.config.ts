import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F28705",
        secondary: "#FEF3E6",
        secondary2: "#FAF9F6",
        btn: "#A63005"
      },
    },
  },
  plugins: [],
} satisfies Config;
