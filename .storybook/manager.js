import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

const jaguaTheme = create({
  base: 'light',

  // Brand
  brandTitle: '<span style="display:block;font-size:14px;font-weight:700">BTZ Components</span><span style="display:block;font-size:11px;font-weight:400;opacity:0.7">Design System</span>',
  brandUrl: '#',
  brandTarget: '_self',

  // Colors
  colorPrimary: '#093F87',
  colorSecondary: '#0B56B3',

  // UI
  appBg: '#f0f4f8',
  appContentBg: '#ffffff',
  appPreviewBg: '#f8fafc',
  appBorderColor: '#e2e8f0',
  appBorderRadius: 8,

  // Text
  textColor: '#1e293b',
  textInverseColor: '#ffffff',
  textMutedColor: '#64748b',

  // Toolbar
  barTextColor: '#475569',
  barSelectedColor: '#093F87',
  barHoverColor: '#0B56B3',
  barBg: '#ffffff',

  // Form
  inputBg: '#ffffff',
  inputBorder: '#cbd5e1',
  inputTextColor: '#1e293b',
  inputBorderRadius: 6,

  // Font
  fontBase: '"Inter", system-ui, -apple-system, sans-serif',
  fontCode: '"Fira Code", "JetBrains Mono", monospace',
})

addons.setConfig({
  theme: jaguaTheme,
})
