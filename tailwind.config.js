/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./index.html"],
  theme: {
    extend: {
      screens:{
        "sm":"400px",
        "sm":"350px",
        "md":"768px",
        "lg":"1024px",
        "xl":"1280px",
      }
    },
    fontFamily:{
      nuito: ["Nuito", "sans-serif"]
    }
  },
  plugins: [],
}

