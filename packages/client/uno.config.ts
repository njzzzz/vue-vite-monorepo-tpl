import { defineConfig, presetAttributify, presetUno, presetWind } from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  presets: [
    presetWind(),
    presetUno(),
    presetAttributify({}),
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
})
