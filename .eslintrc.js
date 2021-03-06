module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ["standard", "prettier"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    semi: [2, "always"],
  },
};
