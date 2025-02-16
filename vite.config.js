import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/RTweb/',  // 👈 Fix missing CSS/JS on GitHub Pages
  plugins: [react()],
});
