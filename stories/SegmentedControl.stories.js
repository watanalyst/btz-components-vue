import { ref } from 'vue'
import SegmentedControl from '../components/SegmentedControl.vue'

export default {
  title: 'Controls/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text', description: 'Currently selected value (v-model)' },
    options: { control: 'object', description: 'Object mapping value keys to display labels' },
    name: { control: 'text', description: 'Name identifier for the control' },
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
    <div>
      <SegmentedControl v-model="selected" :options="options" name="format" />
      <p class="mt-3 text-sm text-gray-500">Selecionado: <strong>{{ selected }}</strong></p>
    </div>
  `,
})

export const TwoOptions = () => ({
  components: { SegmentedControl },
  setup() {
    const selected = ref('individual')
    const options = { individual: 'Individual', agrupado: 'Agrupado' }
    return { selected, options }
  },
  template: `<SegmentedControl v-model="selected" :options="options" name="mode" />`,
})

export const ManyOptions = () => ({
  components: { SegmentedControl },
  setup() {
    const selected = ref('dia')
    const options = { dia: 'Dia', semana: 'Semana', mes: 'Mês', ano: 'Ano' }
    return { selected, options }
  },
  template: `<SegmentedControl v-model="selected" :options="options" name="period" />`,
})
