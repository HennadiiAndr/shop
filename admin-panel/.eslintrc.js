module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
      jsx: true
    }
  },
  extends: [
    "react-app",
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style"
  ],
  plugins: ["prettier"],
  rules: {
    "react/prop-types": "warn",
    "react/jsx-props-no-spreading": ["off"],
    "import/prefer-default-export": ["off"],
    "react/state-in-constructor": ["off"]
  }
};
