import { defineConfig } from 'vite'
import { tamaguiPlugin } from '@tamagui/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tamaguiPlugin({
      config: './tamagui.config.ts',
      components: ['tamagui'], // ← muda para 'tamagui'
    }),
  ],
})
