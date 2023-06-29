require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  parser: "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "sourceType": "module",
  },
  extends: [
    // ... other configs
    "plugin:vue/base",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "plugin:nuxt/recommended",
  ],
}
