import RadioGroup from '../components/RadioGroup.vue'
import { ref } from 'vue'

export default {
  title: 'Inputs/RadioGroup (alias SegmentedControl)',
  component: RadioGroup,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { RadioGroup },
  setup() {
    const value = ref('')
    return { value }
  },
  template: `
    <div class="space-y-3">
      <RadioGroup v-model="value" name="tipo" :options="{ '': 'Todos', 'S': 'Sim', 'N': 'Não' }" />
      <p class="text-sm text-gray-500">Selecionado: <strong>{{ value || '(nenhum)' }}</strong></p>
    </div>
  `,
})

export const WithPreselected = () => ({
  components: { RadioGroup },
  setup() {
    const value = ref('C')
    return { value }
  },
  template: `
    <RadioGroup v-model="value" name="frete" :options="{ '': 'Ambos', 'C': 'CIF', 'F': 'FOB' }" />
  `,
})

export const ManyOptions = () => ({
  components: { RadioGroup },
  setup() {
    const value = ref('A')
    return { value }
  },
  template: `
    <RadioGroup v-model="value" name="status" :options="{ 'A': 'Aberto', 'F': 'Faturado', 'C': 'Cancelado', 'P': 'Pedido', 'O': 'Outros' }" />
  `,
})
