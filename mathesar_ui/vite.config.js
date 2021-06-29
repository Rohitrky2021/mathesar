import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@mathesar', replacement: path.resolve(__dirname, 'src') },
      { find: '@mathesar-components/types', replacement: path.resolve(__dirname, 'src/components/types.d.ts') },
      { find: '@mathesar-components', replacement: path.resolve(__dirname, 'src/components/index.ts') },
    ],
  },
  plugins: [
    svelte(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  optimizeDeps: {
    exclude: ['tinro'],
  },
  server: {
    host: true,
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: './src/main.ts',
    },
  },
});
