import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/funger/",   // MÅ matche repo-navnet 100%
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
