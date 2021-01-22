module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
     ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      arrowFunctions: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    "prettier"
  ],
  rules: {
    "no-extra-semi": "error",
    "no-console": "warn",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": [
          "warn",
          {
            allowExpressions: true,
          },
        ],
      },
    },
    {
      files: ["**/*.js", "**/*.jsx"],
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": 0,
      },
    },
  ],
}
