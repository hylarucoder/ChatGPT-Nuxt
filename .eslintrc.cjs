// require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  extends: [
    "@nuxtjs/eslint-config-typescript",
  ],
  rules: {
    quotes: ["error", "double", { "allowTemplateLiterals": true }],
    "comma-dangle": ["error", "always-multiline"],
    "space-before-function-paren": "off",
    "arrow-parens": "off",
    "vue/valid-template-root": "off",
    "vue/no-multiple-template-root": "off",
    "no-console": "off",
  },
}
