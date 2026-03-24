import { ref } from 'vue'
import SegmentedControl from '../components/SegmentedControl.vue'

export default {
  title: 'Inputs/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    options: { control: 'object' },
    name: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
}

export const Default = () => ({
  components: { SegmentedControl },
  setup() {
    const selected = ref('pdf')
    const options = { pdf: 'PDF', excel: 'Excel', csv: 'CSV' }
    return { selected, options }
  },
  template: `
    <div class="p-4">
      <SegmentedControl v-model="selected" :options="options" name="format" />
      <p class="mt-3 text-xs text-gray-400">Selecionado: {{ selected }}</p>
    </div>
  `,
})

export const TwoOptions = () => ({
  components: { SegmentedControl },
  setup() {
    const selected = ref('sim')
    const options = { sim: 'Sim', nao: 'Não' }
    return { selected, options }
  },
  template: `
    <div class="p-4">
      <p class="text-sm font-medium text-gray-700 mb-2">Dados Banco</p>
      <SegmentedControl v-model="selected" :options="options" name="banco" />
    </div>
  `,
})

export const AllSizes = () => ({
  components: { SegmentedControl },
  setup() {
    const s1 = ref('a')
    const s2 = ref('a')
    const s3 = ref('a')
    const options = { a: 'Detalhado', b: 'Resumo', c: 'Quebra' }
    return { s1, s2, s3, options }
  },
  template: `
    <div class="p-4 space-y-4">
      <div>
        <p class="text-xs font-semibold text-gray-400 mb-2 uppercase">Small</p>
        <SegmentedControl v-model="s1" :options="options" name="s1" size="sm" />
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-400 mb-2 uppercase">Medium (padrão)</p>
        <SegmentedControl v-model="s2" :options="options" name="s2" />
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-400 mb-2 uppercase">Large</p>
        <SegmentedControl v-model="s3" :options="options" name="s3" size="lg" />
      </div>
    </div>
  `,
})

export const Disabled = () => ({
  components: { SegmentedControl },
  setup() {
    const selected = ref('sim')
    const options = { sim: 'Sim', nao: 'Não' }
    return { selected, options }
  },
  template: `
    <div class="p-4">
      <SegmentedControl v-model="selected" :options="options" name="disabled" disabled />
    </div>
  `,
})
