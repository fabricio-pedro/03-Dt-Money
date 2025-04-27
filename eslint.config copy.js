import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // Suas regras personalizadas (sobrescrevem as configurações estendidas)
      "react/jsx-uses-react": "off", // Não é necessário com React 17+
      "react/react-in-jsx-scope": "off", // Não é necessário com React 17+ e TS config
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      // Adicione outras regras específicas do seu projeto aqui
    },
    settings: {
      react: {
        version: "detect", // Permite que o plugin detecte a versão do React
      },
    },
  },
]);
