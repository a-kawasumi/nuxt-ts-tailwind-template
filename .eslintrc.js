module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["vue"],
  rules: {
    semi: ["error", "always"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "no-unused-vars": "error", //使っていない変数を許可
    "vue/html-self-closing": "error", //空タグを許可する
  },
};
