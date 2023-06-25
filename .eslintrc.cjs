require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        // ... other configs
        "plugin:vue/base",
        "plugin:prettier/recommended",
        "@vue/eslint-config-prettier",
    ],
}
