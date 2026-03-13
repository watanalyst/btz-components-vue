import SecondaryButton from '../components/SecondaryButton.vue'

export default {
  title: 'Buttons/SecondaryButton',
  component: SecondaryButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    default: {
      control: 'text',
      description: 'Button label (slot content)',
    },
  },
}

const Template = (args) => ({
  components: { SecondaryButton },
  setup() { return { args } },
  template: `<SecondaryButton v-bind="args">{{ args.default }}</SecondaryButton>`,
})

export const Default = Template.bind({})
Default.args = {
  default: 'Cancelar',
  type: 'button',
}

export const Disabled = () => ({
  components: { SecondaryButton },
  template: `<SecondaryButton disabled>Desativado</SecondaryButton>`,
})

export const WithIcon = () => ({
  components: { SecondaryButton },
  template: `
    <SecondaryButton>
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
      Fechar
    </SecondaryButton>
  `,
})

export const AllVariants = () => ({
  components: { SecondaryButton },
  template: `
    <div class="flex flex-wrap items-center gap-4">
      <SecondaryButton>Normal</SecondaryButton>
      <SecondaryButton disabled>Desativado</SecondaryButton>
    </div>
  `,
})
