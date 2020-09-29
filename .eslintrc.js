module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": 0,
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "implicit-arrow-linebreak": 0,
    "operator-linebreak": 0,
    "comma-dangle": 0,
    "object-curly-newline": 0,
    "import/no-duplicates": 0,
    "no-param-reassign": 0,
    "no-return-assign": 0,
    quotes: 0,
  },
};
