module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    amd: true,
    jest: true,
    es6: true
  },
  plugins: ["jest", "jsx-a11y", "react-hooks", "testing-library"],
  globals: {
    fetchMock: true
  },
  extends: [
    "eslint:recommended",
    "react-app",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:testing-library/react",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ],
    "import/no-unresolved": [2, {commonjs: true, amd: true}],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    "import/no-named-as-default": 2,
    "import/newline-after-import": 2,
    "import/order": ["error", {"newlines-between": "always"}],
    "@typescript-eslint/no-explicit-any": 1,
    "no-nested-ternary": 2,
    "no-debugger": "error",
    "default-case": "error",
    "no-eval": "error",
    "no-multi-str": "error",
    "array-bracket-spacing": ["error", "never"],
    "comma-dangle": ["error", "never"],
    "comma-spacing": ["error", {before: false, after: true}],
    "comma-style": ["error", "last"],
    "func-call-spacing": ["error", "never"],
    quotes: ["error", "double"],
    "no-var": "error",
    "lines-between-class-members": ["error", "always"],
    "padding-line-between-statements": [
      "error",
      {blankLine: "always", prev: "*", next: "function"},
      {blankLine: "always", prev: "*", next: "class"},
      {blankLine: "always", prev: "block-like", next: "block-like"},
      {blankLine: "always", prev: "const", next: "if"},
      {blankLine: "always", prev: "let", next: "if"},
      {blankLine: "always", prev: "const", next: "return"},
      {blankLine: "always", prev: "var", next: "return"}
    ],
    "react/prop-types": [1, {skipUndeclared: true}]
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:testing-library/react"
      ],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        //"@typescript-eslint/no-unused-vars": ["error", {argsIgnorePattern: "^_.?", varsIgnorePattern: "^_.?"}],
        eqeqeq: ["error", "always"],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
      }
    }
  ]
};
