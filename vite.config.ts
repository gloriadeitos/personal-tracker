import { defineConfig } from 'vite'

import { tamaguiPlugin } from '@tamagui/vite-plugin'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/personal-tracker/',
  plugins: [
    tamaguiPlugin({
      config: './tamagui.config.ts',
      components: ['tamagui'], // ← muda para 'tamagui'
    }),
  ],
}))
