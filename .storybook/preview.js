import '../css/storybook.css'
import { create } from '@storybook/theming/create'

const docsTheme = create({
  base: 'light',
  brandTitle: 'btz-components-vue',
  colorPrimary: '#093F87',
  colorSecondary: '#0B56B3',
  fontBase: '"Inter", system-ui, -apple-system, sans-serif',
  fontCode: '"Fira Code", "JetBrains Mono", monospace',
})

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: docsTheme,
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8fafc' },
        { name: 'white', value: '#ffffff' },
        { name: 'dark', value: '#0A1E44' },
      ],
    },
    layout: 'padded',
  },
}

export default preview
