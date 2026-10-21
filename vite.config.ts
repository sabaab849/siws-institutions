import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  server: {
    watch: {
      /*
       * Notes and briefs in the project root are not part of the build, and
       * OneDrive locks them while it syncs: watching one threw EBUSY and took
       * the dev server down with it.
       */
      ignored: ['**/*.md'],
    },
  },
});
