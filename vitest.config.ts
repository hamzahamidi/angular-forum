/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular({ tsconfig: 'src/tsconfig.spec.json' })],
  test: {
    include: ['src/**/*.spec.ts'],
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setup-test.ts'],
    passWithNoTests: true,
  },
});
