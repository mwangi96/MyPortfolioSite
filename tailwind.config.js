/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      }
    },
    fontFamily:{
      nuito: ["Nuito", "sans-serif"]
    }
  },
  plugins: [],
}

