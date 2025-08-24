import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tamaguiPlugin } from '@tamagui/vite-plugin'

export default defineConfig(({ mode }) => {
  const basePath = mode === 'development' 
    ? process.env.VITE_BASE_PATH_DEV 
    : process.env.VITE_BASE_PATH_PROD

  return {
    base: basePath || '/',
    plugins: [
      react(),
      tamaguiPlugin({
        config: './tamagui.config.ts',
        components: ['tamagui'], // ← muda para 'tamagui'
      }),
    ],
    define: {
      '__APP_BASE_PATH__': JSON.stringify(basePath || '/')
    }
  }
