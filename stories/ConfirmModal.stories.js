import { ref } from 'vue'
import ConfirmModal from '../components/ConfirmModal.vue'
import PrimaryButton from '../components/PrimaryButton.vue'

export default {
  title: 'Overlays/ConfirmModal',
  component: ConfirmModal,
  tags: ['autodocs'],
  argTypes: {
    show: { control: 'boolean' },
    title: { control: 'text' },
    message: { control: 'text' },
    confirmLabel: { control: 'text' },
    cancelLabel: { control: 'text' },
    variant: {
      control: 'select',
      options: ['danger', 'success', 'warning'],
      description: 'Visual variant that controls colors and icon',
    },
  },
}

export const Danger = () => ({
  components: { ConfirmModal, PrimaryButton },
  setup() {
    const show = ref(false)
    return { show }
  },
  template: `
    <div>
      <PrimaryButton @click="show = true">Excluir Item</PrimaryButton>
      <ConfirmModal
        :show="show"
        title="Excluir registro?"
        message="Esta ação não pode ser desfeita. O registro será removido permanentemente."
        confirm-label="Excluir"
        variant="danger"
        @confirm="show = false"
        @cancel="show = false"
      />
    </div>
  `,
})

export const Warning = () => ({
  components: { ConfirmModal, PrimaryButton },
  setup() {
    const show = ref(false)
    return { show }
  },
  template: `
    <div>
      <PrimaryButton @click="show = true">Ação com Aviso</PrimaryButton>
      <ConfirmModal
        :show="show"
        title="Tem certeza?"
        message="Você está prestes a alterar dados que afetam outros registros."
        confirm-label="Prosseguir"
        variant="warning"
        @confirm="show = false"
        @cancel="show = false"
      />
    </div>
  `,
})

export const Success = () => ({
  components: { ConfirmModal, PrimaryButton },
  setup() {
    const show = ref(false)
    return { show }
  },
  template: `
    <div>
      <PrimaryButton @click="show = true">Aprovar</PrimaryButton>
      <ConfirmModal
        :show="show"
        title="Aprovar solicitação?"
        message="A solicitação será aprovada e o solicitante será notificado."
        confirm-label="Aprovar"
        variant="success"
        @confirm="show = false"
        @cancel="show = false"
      />
    </div>
  `,
})
