/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "Poppins_600SemiBold",
        subtitle: "Poppins_500Medium",
        body: "Poppins_400Regular",
        bold: "Poppins_700Bold"
      }
    },
  },
  plugins: [],
}
