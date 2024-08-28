import path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@modules': path.resolve('src/modules/'),
      '@components': path.resolve('src/components/'),
      '@pages': path.resolve('src/pages/'),
      '@layouts': path.resolve('src/layouts/'),
      '@assets': path.resolve('src/assets/'),
      '@theme': path.resolve('src/theme'),
      '@App': path.resolve('src/App'),
      '@routes': path.resolve('src/routes'),
      '@contexts': path.resolve('src/contexts/'),
      '@constants': path.resolve('src/constants/'),
      '@generalTypes': path.resolve('src/generalTypes/'),
      '@services': path.resolve('src/services/'),
      '@store': path.resolve('src/store/'),
      '@locale': path.resolve('src/locale/'),
    },
  },
})
