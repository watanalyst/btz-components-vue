import DualSelect from '../components/DualSelect.vue'
import { ref } from 'vue'

export default {
  title: 'Form/DualSelect',
  component: DualSelect,
  tags: ['autodocs'],
}

const empresas = [
  { value: '01', label: '01 - Jaguafrangos' },
  { value: '02', label: '02 - Jagua Alimentos' },
  { value: '05', label: '05 - Farinha' },
  { value: '10', label: '10 - Exportação' },
  { value: '15', label: '15 - Logística' },
  { value: '20', label: '20 - Grãos' },
]

export const Default = () => ({
  components: { DualSelect },
  setup() {
    const value = ref('')
    return { value, empresas }
  },
  template: `
    <div class="max-w-lg space-y-3">
      <DualSelect v-model="value" :options="empresas" />
      <p class="text-sm text-gray-500">Valor: <strong>{{ value || '(vazio)' }}</strong></p>
    </div>
  `,
})

export const WithPreselected = () => ({
  components: { DualSelect },
  setup() {
    const value = ref('01,05')
    return { value, empresas }
  },
  template: `
    <div class="max-w-lg">
      <DualSelect v-model="value" :options="empresas" />
    </div>
  `,
})

export const CustomLabels = () => ({
  components: { DualSelect },
  setup() {
    const value = ref('')
    const items = [
      { value: 'pdf', label: 'PDF' },
      { value: 'excel', label: 'Excel' },
      { value: 'csv', label: 'CSV' },
    ]
    return { value, items }
  },
  template: `
    <div class="max-w-lg">
      <DualSelect v-model="value" :options="items" left-label="Formatos" right-label="Selecionados" />
    </div>
  `,
})
