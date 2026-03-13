import { ref } from 'vue'
import StatusModal from '../components/StatusModal.vue'
import PrimaryButton from '../components/PrimaryButton.vue'

export default {
  title: 'Overlays/StatusModal',
  component: StatusModal,
  tags: ['autodocs'],
  argTypes: {
    show: { control: 'boolean' },
    status: {
      control: 'select',
      options: ['loading', 'success', 'error'],
      description: 'Current status: loading, success, or error',
    },
    title: { control: 'text' },
    message: { control: 'text' },
    autoCloseDelay: {
      control: 'number',
      description: 'Delay in ms before auto-closing on success (0 to disable)',
    },
  },
}

export const Loading = () => ({
  components: { StatusModal, PrimaryButton },
  setup() {
    const show = ref(false)
    return { show }
  },
  template: `
    <div>
      <PrimaryButton @click="show = true">Iniciar Carregamento</PrimaryButton>
      <StatusModal
        :show="show"
        status="loading"
        title="Gerando relatório..."
        message="Aguarde enquanto o documento é processado."
        @close="show = false"
      />
      <p class="mt-2 text-xs text-gray-400">Feche manualmente via DevTools ou recarregue.</p>
    </div>
  `,
})

export const SuccessStatus = () => ({
  components: { StatusModal, PrimaryButton },
  setup() {
    const show = ref(false)
    return { show }
  },
  template: `
    <div>
      <PrimaryButton @click="show = true">Mostrar Sucesso</PrimaryButton>
      <StatusModal
        :show="show"
        status="success"
        title="Relatório gerado!"
        message="O download começará automaticamente."
        :auto-close-delay="0"
        @close="show = false"
      />
    </div>
  `,
})

export const ErrorStatus = () => ({
  components: { StatusModal, PrimaryButton },
  setup() {
    const show = ref(false)
    return { show }
  },
  template: `
    <div>
      <PrimaryButton @click="show = true">Mostrar Erro</PrimaryButton>
      <StatusModal
        :show="show"
        status="error"
        title="Erro ao gerar relatório"
        message="Não foi possível conectar ao servidor. Tente novamente mais tarde."
        @close="show = false"
      />
    </div>
  `,
})

export const FullFlow = () => ({
  components: { StatusModal, PrimaryButton },
  setup() {
    const show = ref(false)
    const status = ref('loading')
    const title = ref('')
    const message = ref('')

    function start() {
      show.value = true
      status.value = 'loading'
      title.value = 'Processando...'
      message.value = 'Aguarde enquanto processamos sua solicitação.'
      setTimeout(() => {
        status.value = 'success'
        title.value = 'Concluído!'
        message.value = 'Operação realizada com sucesso.'
      }, 3000)
    }

    return { show, status, title, message, start }
  },
  template: `
    <div>
      <PrimaryButton @click="start">Simular Fluxo Completo</PrimaryButton>
      <StatusModal
        :show="show"
        :status="status"
        :title="title"
        :message="message"
        :auto-close-delay="2000"
        @close="show = false"
      />
    </div>
  `,
})
