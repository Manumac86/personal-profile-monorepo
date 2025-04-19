// Ensure you have installed: pnpm add -D eslint-plugin-astro astro-eslint-parser @typescript-eslint/parser
module.exports = {
  root: true, // Stop ESLint from looking further up
  extends: [
    "eslint-config", // Your shared config
    "plugin:astro/recommended", // Astro's base rules (use 'strict' for more)
    // Optional: 'plugin:prettier/recommended' if you use Prettier
  ],
  // Define the parser for TypeScript files
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // Required for specific Astro linting capabilities
    parser: "@typescript-eslint/parser", // Specify parser for TS compatibility within overrides
    extraFileExtensions: [".astro"], // Tell ESLint parser to handle .astro files
    sourceType: "module",
  },
  env: {
    // Define environments to prevent errors on global variables
    node: true,
    es2022: true,
    browser: true,
  },
  globals: {
    // Define any global variables if needed
    // Example: Astro: 'readonly'
  },
  overrides: [
    {
      // Define settings for Astro components
      files: ["*.astro"],
      // Use astro-eslint-parser for .astro files
      parser: "astro-eslint-parser",
      parserOptions: {
        // Sub-parser for script tags in Astro files
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // Customize Astro rules:
        // 'astro/no-set-html-directive': 'error', // Example rule
      },
    },
    // Optional: Add overrides for TypeScript or JavaScript files if needed
    // {
    //   files: ['*.ts', '*.tsx'],
    //   parser: '@typescript-eslint/parser',
    //   extends: ['plugin:@typescript-eslint/recommended'],
    //   rules: {
    //     // TypeScript specific rules
    //   }
    // },
  ],
  ignorePatterns: [
    "dist/",
    ".astro/",
    "node_modules/",
    "*.config.mjs", // Ignore config files
    // Add other patterns if needed
  ],
};
