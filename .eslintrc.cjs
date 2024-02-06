module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: '@mate-academy/eslint-config-react-typescript',
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'node_modules/**',
    'tsconfig.json',
    'vite.config.ts',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
