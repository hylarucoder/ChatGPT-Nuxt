const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,vue,tsx}",
  ],
  theme: {},
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
  ],
}
