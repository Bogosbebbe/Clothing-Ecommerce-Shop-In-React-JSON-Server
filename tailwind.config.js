/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    themes: ["dark", "winter"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

