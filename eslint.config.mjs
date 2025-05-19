import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      "@typescript-eslint": tsPlugin,
      react,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // Add custom rules here
    },
  },
];
