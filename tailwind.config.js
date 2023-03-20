/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      display: ["group-hover"],
      colors: {
        text: "#FFDFE9",
      },
    },
  },
  plugins: [],
}

// pink - 88008f
// purple - 4000a0