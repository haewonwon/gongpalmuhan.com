import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['.astro/**', 'dist/**', 'node_modules/**']),
]);
