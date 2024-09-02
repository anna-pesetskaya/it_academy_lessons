import globals from "globals";
import pluginJs from "@eslint/js";
//import mocha from "eslint-plugin-mocha";



export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended, 
];