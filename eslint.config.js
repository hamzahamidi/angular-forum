const angular = require('angular-eslint');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  {
    ignores: ['projects/**/*', 'dist/**'],
  },
  {
    files: ['**/*.ts'],
    extends: [...angular.configs.tsRecommended],
    processor: angular.processInlineTemplates,
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      '@angular-eslint/no-output-native': 'off',
      '@angular-eslint/prefer-standalone': 'off',
      '@angular-eslint/prefer-inject': 'off',
      '@angular-eslint/prefer-on-push-component-change-detection': 'off',
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended],
    rules: {},
  },
);
