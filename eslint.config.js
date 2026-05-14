import { base, react, typescript } from '@nick8green/formatting';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  ...base,
  ...typescript,
  ...react,

  {
    files: [
      '.storybook/*.ts',
      '.storybook/*.tsx',
      'setupTests.ts',
      '**/tsup.config.ts',
      '**/*.config.ts',
      '**/*.config.js',
      '**/*.js',
    ],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    files: ['**/*.js', 'plugins/**/*.js', 'release.config.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        module: 'writable',
        require: 'readonly',
        process: 'readonly',
      },
    },
    ...tseslint.configs.disableTypeChecked,
  },
];
