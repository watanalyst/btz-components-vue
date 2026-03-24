import { ref } from 'vue'
import DateInput from '../components/DateInput.vue'
import InputLabel from '../components/InputLabel.vue'

export default {
  title: 'Inputs/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    min: { control: 'text' },
    max: { control: 'text' },
  },
}

export const Default = () => ({
  components: { DateInput, InputLabel },
  setup() {
    const date = ref('')
    return { date }
  },
  template: `
    <div class="p-4 max-w-xs">
      <InputLabel value="Data Movimento" />
      <DateInput v-model="date" />
      <p class="mt-2 text-xs text-gray-400">Valor: {{ date || '(vazio)' }}</p>
    </div>
  `,
})

export const WithValue = () => ({
  components: { DateInput, InputLabel },
  setup() {
    const date = ref('2026-03-17')
    return { date }
  },
  template: `
    <div class="p-4 max-w-xs">
      <InputLabel value="Data Início" />
      <DateInput v-model="date" />
      <p class="mt-2 text-xs text-gray-400">Valor: {{ date }}</p>
    </div>
  `,
})

export const WithMinMax = () => ({
  components: { DateInput, InputLabel },
  setup() {
    const date = ref('2026-03-17')
    return { date }
  },
  template: `
    <div class="p-4 max-w-xs">
      <InputLabel value="Data (Mar/2026 apenas)" />
      <DateInput v-model="date" min="2026-03-01" max="2026-03-31" />
      <p class="mt-2 text-xs text-gray-400">Valor: {{ date }}</p>
    </div>
  `,
})

export const Disabled = () => ({
  components: { DateInput, InputLabel },
  setup() {
    const date = ref('2026-03-17')
    return { date }
  },
  template: `
    <div class="p-4 max-w-xs">
      <InputLabel value="Data (desabilitado)" />
      <DateInput v-model="date" disabled />
    </div>
  `,
})

export const DateRange = () => ({
  components: { DateInput, InputLabel },
  setup() {
    const dateFrom = ref('2026-03-17')
    const dateTo = ref('2026-03-18')
    return { dateFrom, dateTo }
  },
  template: `
    <div class="p-4 max-w-md">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <InputLabel value="Data Movimento De" />
          <DateInput v-model="dateFrom" />
        </div>
        <div>
          <InputLabel value="Data Movimento Até" />
          <DateInput v-model="dateTo" />
        </div>
      </div>
      <p class="mt-3 text-xs text-gray-400">De: {{ dateFrom }} — Até: {{ dateTo }}</p>
    </div>
  `,
})
