module.exports = {
  root: true,
  extends: ["turbo"], // Turbo provides a recommended base config
  settings: {
    next: {
      // This setting is often used with Next.js projects in Turbo,
      // you might adjust or remove it depending on specific linting needs.
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  // Add global rules or overrides as needed
  // rules: {
  //   "no-console": "warn",
  // },
};
