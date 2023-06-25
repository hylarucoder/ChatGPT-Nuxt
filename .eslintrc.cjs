require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  "parserOptions": {
    "sourceType": "module"
  },
  extends: [
    // ... other configs
    "plugin:vue/base",
    "@vue/eslint-config-prettier",
  ],
}
