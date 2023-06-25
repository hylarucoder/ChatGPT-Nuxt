require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  extends: [
    // ... other configs
    "plugin:vue/base",
    "@vue/eslint-config-prettier",
  ],
}
