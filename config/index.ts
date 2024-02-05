import type { BuildOptions } from 'vite'

export const external = [
  'vue',
  /^vue-router/,
]

export const commonBuildOptions: BuildOptions = {
  minify: false,
  target: ['es6'],
  rollupOptions: {
    external,
    output: {
      exports: 'named',
    },
  },
  sourcemap: true,
}

export function getBuildOptions(entry: string): BuildOptions {
  return {
    lib: {
      entry,
      formats: ['cjs', 'es'],
      fileName: 'index',
    },
    ...commonBuildOptions,
  }
}
