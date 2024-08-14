const globals = require("globals");
const js = require("@eslint/js");
const jestPlugin = require("eslint-plugin-jest");

module.exports = [
    {
      files: ["**/*.{js,mjs,cjs,ts,tsx}"],
      languageOptions: {
        parserOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
        },
        globals: {
          ...globals.browser,
          ...globals.jest,  // Add Jest globals here
        },
      },
      plugins: {
        jest: jestPlugin,  // Add the Jest plugin
      },
      rules: {
        ...js.configs.recommended.rules,
        ...jestPlugin.configs.recommended.rules,  // Add Jest recommended rules
      },
    },
    {
      files: ["**/*.js"],
      languageOptions: { sourceType: "commonjs" },
    },
    {
      ignores: [
          "node_modules/",
          "dist/",
          "reports/",
          "coverage/",
          "**/temp.js",
          "config/*",
          "*.js",
          "*.cjs"
      ],
    },
  ];