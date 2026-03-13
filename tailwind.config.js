import preset from './tailwind.preset.js'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  content: [
    './components/**/*.vue',
    './stories/**/*.js',
  ],
}
