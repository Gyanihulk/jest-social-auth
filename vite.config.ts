import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    // Disable React Fast Refresh during tests
    'process.env.NODE_ENV': JSON.stringify(mode === 'test' ? 'test' : 'development'),
  },
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.ts',
  }
}));
