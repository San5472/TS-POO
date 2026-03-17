import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],   // genera CommonJS y ESM
  dts: true,                 // genera tipos .d.ts
  splitting: false,
  sourcemap: true,
  clean: true,
})