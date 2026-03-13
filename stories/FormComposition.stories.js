import { ref } from 'vue'
import TextInput from '../components/TextInput.vue'
import InputLabel from '../components/InputLabel.vue'
import InputError from '../components/InputError.vue'
import PrimaryButton from '../components/PrimaryButton.vue'

export default {
  title: 'Form/FormComposition',
  tags: ['autodocs'],
}

export const CompleteForm = () => ({
  components: { TextInput, InputLabel, InputError, PrimaryButton },
  setup() {
    const name = ref('')
    const email = ref('')
    const nameError = ref('')
    const emailError = ref('')

    function validate() {
      nameError.value = name.value ? '' : 'O campo nome é obrigatório.'
      emailError.value = email.value.includes('@') ? '' : 'Informe um e-mail válido.'
    }

    return { name, email, nameError, emailError, validate }
  },
  template: `
    <div class="max-w-md space-y-4 rounded-xl bg-white p-6 shadow">
      <h3 class="text-lg font-semibold text-gray-900">Formulário de Exemplo</h3>
      <div>
        <InputLabel value="Nome" :required="true" />
        <TextInput v-model="name" placeholder="Seu nome completo" />
        <InputError :message="nameError" />
      </div>
      <div>
        <InputLabel value="E-mail" :required="true" />
        <TextInput v-model="email" type="email" placeholder="email@exemplo.com" />
        <InputError :message="emailError" />
      </div>
      <PrimaryButton @click="validate">Validar</PrimaryButton>
    </div>
  `,
})
