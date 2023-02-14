module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:astro/jsx-a11y-strict',
    'plugin:mdx/recommended',
    'plugin:astro/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'astro.config.mjs',
    'package.json',
    'tsconfig.json',
  ],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'prettier/prettier': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
  },
  root: true,
  rules: {},
  settings: {
    packageManager: 'pnpm',
    tailwindcss: {
      callees: ['classnames', 'clsx', 'ctl'],
      classRegex: '^class(Name)?$',
      config: './tailwind.config.cjs',
      cssFiles: [
        '**/*.css',
        '!**/node_modules',
        '!**/.*',
        '!**/dist',
        '!**/build',
      ],
      cssFilesRefreshRate: 5_000,
      removeDuplicates: true,
      skipClassAttribute: false,
      tags: [],
      whitelist: [],
    },
  },
}
