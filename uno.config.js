// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'menu-item':
      'border border-solid border-color-slate-500 rounded-md bg-slate-100 max-w-240 mb-5',
    'menu-item-name': 'text-slate-800 font-bold',
    'menu-item-description': 'text-slate-600 font-normal pb-6',
    'menu-item-chip':
      'border border-solid border-color-slate-500 rounded-md bg-slate-100 px-4 py-1 w-full md:w-auto max-w-90 text-center',
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
