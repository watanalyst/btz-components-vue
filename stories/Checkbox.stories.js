import { ref } from 'vue'
import Checkbox from '../components/Checkbox.vue'

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
}

export const Default = () => ({
  components: { Checkbox },
  setup() {
    const checked = ref(false)
    return { checked }
  },
  template: `
    <div class="p-4">
      <Checkbox v-model="checked" label="Aceito os termos" />
      <p class="mt-2 text-xs text-gray-400">Valor: {{ checked }}</p>
    </div>
  `,
})

export const Checked = () => ({
  components: { Checkbox },
  setup() {
    const checked = ref(true)
    return { checked }
  },
  template: `
    <div class="p-4">
      <Checkbox v-model="checked" label="Ativo" />
    </div>
  `,
})

export const Disabled = () => ({
  components: { Checkbox },
  setup() {
    const a = ref(false)
    const b = ref(true)
    return { a, b }
  },
  template: `
    <div class="p-4 space-y-3">
      <Checkbox v-model="a" label="Desabilitado (desmarcado)" disabled />
      <Checkbox v-model="b" label="Desabilitado (marcado)" disabled />
    </div>
  `,
})

export const WithSlot = () => ({
  components: { Checkbox },
  setup() {
    const checked = ref(false)
    return { checked }
  },
  template: `
    <div class="p-4">
      <Checkbox v-model="checked">
        Concordo com a <a href="#" class="text-blue-600 underline">política de privacidade</a>
      </Checkbox>
    </div>
  `,
})

export const Group = () => ({
  components: { Checkbox },
  setup() {
    const options = ref({ nf: false, estoque: true, financeiro: false, fiscal: false })
    return { options }
  },
  template: `
    <div class="p-4">
      <p class="text-sm font-medium text-gray-700 mb-2">Módulos:</p>
      <div class="space-y-2">
        <Checkbox v-model="options.nf" label="Nota Fiscal" />
        <Checkbox v-model="options.estoque" label="Estoque" />
        <Checkbox v-model="options.financeiro" label="Financeiro" />
        <Checkbox v-model="options.fiscal" label="Fiscal" />
      </div>
      <p class="mt-3 text-xs text-gray-400">{{ JSON.stringify(options) }}</p>
    </div>
  `,
})
