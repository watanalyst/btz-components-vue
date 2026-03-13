import ComboboxInput from '../components/ComboboxInput.vue'
import { ref } from 'vue'

export default {
  title: 'Form/ComboboxInput',
  component: ComboboxInput,
  tags: ['autodocs'],
}

const items = [
  { value: 'FRANGO-INT', label: 'FRANGO-INT - Frango Inteiro' },
  { value: 'FRANGO-CX', label: 'FRANGO-CX - Frango em Caixa' },
  { value: 'PEITO-SOS', label: 'PEITO-SOS - Peito S/Osso S/Pele' },
  { value: 'COXA', label: 'COXA - Coxa de Frango' },
  { value: 'ASA', label: 'ASA - Asa de Frango' },
  { value: 'MIUDO', label: 'MIUDO - Miúdos' },
  { value: 'FARINHA', label: 'FARINHA - Farinha de Penas' },
]

export const Default = () => ({
  components: { ComboboxInput },
  setup() {
    const value = ref('')
    return { value, items }
  },
  template: `
    <div class="max-w-sm space-y-3">
      <ComboboxInput
        v-model="value"
        :options="items"
        placeholder="Pesquisar item..."
        input-class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <p class="text-sm text-gray-500">Valor: <strong>{{ value || '(vazio)' }}</strong></p>
    </div>
  `,
})

export const Uppercase = () => ({
  components: { ComboboxInput },
  setup() {
    const value = ref('')
    return { value, items }
  },
  template: `
    <div class="max-w-sm">
      <ComboboxInput
        v-model="value"
        :options="items"
        :uppercase="true"
        placeholder="Pesquisar (uppercase)..."
        input-class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  `,
})

export const WithPreselected = () => ({
  components: { ComboboxInput },
  setup() {
    const value = ref('COXA')
    return { value, items }
  },
  template: `
    <div class="max-w-sm">
      <ComboboxInput
        v-model="value"
        :options="items"
        input-class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  `,
})
