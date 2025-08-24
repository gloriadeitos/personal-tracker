import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { tamaguiPlugin } from '@tamagui/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  base: '/personal-tracker',
  plugins: [
    tamaguiPlugin({
      config: './tamagui.config.ts',
      components: ['tamagui'], // ← muda para 'tamagui'
    }),
  ],
})
