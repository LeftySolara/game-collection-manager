import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { settings: { root: true } },
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    ignores: [
      "coverage",
      "public",
      "dist",
      "pnpm-lock.yaml",
      "pnpm-workspace.yaml",
    ],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
];
