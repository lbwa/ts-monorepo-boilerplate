/**
 * @see https://eslint.org/docs/user-guide/configuring#configuration-file-formats-1
 */
module.exports = {
  root: true,
  // The eslint-plugin- prefix can be omitted from the plugin name.
  // https://eslint.org/docs/user-guide/configuring#configuring-plugins
  plugins: ['jest', 'import'],
  // An environment defines global variables that are predefined.
  // https://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 11, // 2020
    sourceType: 'module'
  },
  // A configuration file can extend the set of enabled rules from base configurations.
  // https://eslint.org/docs/user-guide/configuring#extending-configuration-files
  extends: [
    // https://eslint.org/docs/user-guide/configuring#using-eslintrecommended
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  // A glob specific configuration works almost the same as any other ESLint config.
  // Override blocks can contain any configuration options that are valid in a regular config, with the exception of `root` and `ignorePatterns`.
  // https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns
  overrides: [
    { files: ['**/__tests__/**'], env: { jest: true } },
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.base.json', './packages/*/tsconfig.json']
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off'
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint'
      ]
    }
  ]
}
