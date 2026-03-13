import PrimaryButton from '../components/PrimaryButton.vue'

export default {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type attribute',
    },
    default: {
      control: 'text',
      description: 'Button label (slot content)',
    },
  },
}

const Template = (args) => ({
  components: { PrimaryButton },
  setup() { return { args } },
  template: `<PrimaryButton v-bind="args">{{ args.default }}</PrimaryButton>`,
})

export const Default = Template.bind({})
Default.args = {
  default: 'Salvar',
  type: 'button',
}

export const Submit = Template.bind({})
Submit.args = {
  default: 'Enviar Formulário',
  type: 'submit',
}

export const Disabled = (args) => ({
  components: { PrimaryButton },
  setup() { return { args } },
  template: `<PrimaryButton v-bind="args" disabled>Desativado</PrimaryButton>`,
})
Disabled.args = { type: 'button' }

export const WithIcon = () => ({
  components: { PrimaryButton },
  template: `
    <PrimaryButton>
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
      Novo Item
    </PrimaryButton>
  `,
})

export const AllVariants = () => ({
  components: { PrimaryButton },
  template: `
    <div class="flex flex-wrap items-center gap-4">
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton disabled>Desativado</PrimaryButton>
      <PrimaryButton>
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        Exportar
      </PrimaryButton>
    </div>
  `,
})
