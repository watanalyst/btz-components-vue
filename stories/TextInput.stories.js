import { ref } from 'vue'
import TextInput from '../components/TextInput.vue'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text', description: 'v-model bound value' },
    placeholder: { control: 'text' },
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'tel', 'url'] },
    disabled: { control: 'boolean' },
  },
}

export const Default = () => ({
  components: { TextInput },
  setup() {
    const value = ref('')
    return { value }
  },
  template: `<div class="max-w-sm"><TextInput v-model="value" placeholder="Digite algo..." /></div>`,
})

export const WithValue = () => ({
  components: { TextInput },
  setup() {
    const value = ref('Texto preenchido')
    return { value }
  },
  template: `<div class="max-w-sm"><TextInput v-model="value" /></div>`,
})

export const Disabled = () => ({
  components: { TextInput },
  setup() {
    const value = ref('Campo desativado')
    return { value }
  },
  template: `<div class="max-w-sm"><TextInput v-model="value" disabled /></div>`,
})

export const Password = () => ({
  components: { TextInput },
  setup() {
    const value = ref('')
    return { value }
  },
  template: `<div class="max-w-sm"><TextInput v-model="value" type="password" placeholder="Senha" /></div>`,
})
