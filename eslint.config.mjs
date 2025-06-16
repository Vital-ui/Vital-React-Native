import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends(
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ),

    plugins: {
        react,
        reactNative,
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
    },

    rules: {
        indent: ["error", 4, {
            SwitchCase: 1,
        }],

        quotes: ["error", "double"],
        semi: ["error", "always"],

        "no-unused-vars": ["error", {
            vars: "all",
            argsIgnorePattern: "^_"
        }],

        "no-duplicate-imports": ["error", {
            includeExports: true,
        }],

        "comma-spacing": ["error", {
            before: false,
            after: true,
        }],

        "array-bracket-spacing": ["error", "never"],
        "arrow-parens": ["error", "always"],
        "arrow-spacing": "error",
        "block-spacing": "error",
        "brace-style": "error",
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],

        "key-spacing": ["error", {
            beforeColon: false,
            afterColon: true,
            mode: "strict",
        }],

        "object-curly-spacing": ["error", "never"],
        "no-case-declarations": "off",
        "no-fallthrough": "off",
        "no-useless-escape": "off",
        "react/prop-types": 0,
    },
}]);
