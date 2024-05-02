import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import tailwindcssanimated from 'tailwindcss-animated';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),       // Initialize Tailwind CSS
        tailwindcssanimated(), // Initialize tailwindcss-animate plugin
      ],
    },
  },
});
