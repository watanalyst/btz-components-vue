import { ref } from 'vue'
import Modal from '../components/Modal.vue'
import PrimaryButton from '../components/PrimaryButton.vue'
import SecondaryButton from '../components/SecondaryButton.vue'

export default {
  title: 'Overlays/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    show: { control: 'boolean', description: 'Whether the modal is visible' },
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Maximum width of the modal',
    },
    closeable: { control: 'boolean', description: 'Whether clicking the backdrop closes the modal' },
  },
}

export const Default = () => ({
  components: { Modal, PrimaryButton, SecondaryButton },
  setup() {
    const show = ref(false)
    return { show }
  },
  template: `
    <div>
      <PrimaryButton @click="show = true">Abrir Modal</PrimaryButton>
      <Modal :show="show" @close="show = false">
        <div class="p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-2">Título do Modal</h2>
          <p class="text-sm text-gray-600 mb-4">Este é o conteúdo do modal. Clique fora ou pressione Esc para fechar.</p>
          <div class="flex justify-end">
            <SecondaryButton @click="show = false">Fechar</SecondaryButton>
          </div>
        </div>
      </Modal>
    </div>
  `,
})

export const SmallWidth = () => ({
  components: { Modal, PrimaryButton, SecondaryButton },
  setup() {
    const show = ref(false)
    return { show }
  },
  template: `
    <div>
      <PrimaryButton @click="show = true">Modal Pequeno (sm)</PrimaryButton>
      <Modal :show="show" max-width="sm" @close="show = false">
        <div class="p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-2">Modal Pequeno</h2>
          <p class="text-sm text-gray-600 mb-4">Max width: sm</p>
          <div class="flex justify-end">
            <SecondaryButton @click="show = false">Fechar</SecondaryButton>
          </div>
        </div>
      </Modal>
    </div>
  `,
})

export const NotCloseable = () => ({
  components: { Modal, PrimaryButton },
  setup() {
    const show = ref(false)
    return { show }
  },
  template: `
    <div>
      <PrimaryButton @click="show = true">Modal sem fechar pelo backdrop</PrimaryButton>
      <Modal :show="show" :closeable="false" @close="show = false">
        <div class="p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-2">Modal Obrigatório</h2>
          <p class="text-sm text-gray-600 mb-4">Clicar fora não fecha este modal.</p>
          <div class="flex justify-end">
            <PrimaryButton @click="show = false">Entendi</PrimaryButton>
          </div>
        </div>
      </Modal>
    </div>
  `,
})
