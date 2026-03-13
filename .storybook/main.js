import vue from '@vitejs/plugin-vue'

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  async viteFinal(config) {
    // Ensure @vitejs/plugin-vue is loaded for .vue SFC support
    const hasVuePlugin = config.plugins?.flat().some(
      (p) => p && typeof p === 'object' && p.name === 'vite:vue'
    )
    if (!hasVuePlugin) {
      config.plugins = config.plugins || []
      config.plugins.push(vue())
    }
    return config
  },
}
export default config
