<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [react()],
  envDir: 'config/',
});
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
>>>>>>> 6ebbc7d8cad194e34925397ccecb2085c2ac5a78
