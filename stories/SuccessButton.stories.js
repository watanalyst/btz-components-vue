import SuccessButton from '../components/SuccessButton.vue'

export default {
  title: 'Buttons/SuccessButton',
  component: SuccessButton,
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
  components: { SuccessButton },
  setup() { return { args } },
  template: `<SuccessButton v-bind="args">{{ args.default }}</SuccessButton>`,
})

export const Default = Template.bind({})
Default.args = {
  default: 'Confirmar',
  type: 'button',
}

export const Disabled = () => ({
  components: { SuccessButton },
  template: `<SuccessButton disabled>Desativado</SuccessButton>`,
})

export const WithIcon = () => ({
  components: { SuccessButton },
  template: `
    <SuccessButton>
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
      Aprovado
    </SuccessButton>
  `,
})

export const AllVariants = () => ({
  components: { SuccessButton },
  template: `
    <div class="flex flex-wrap items-center gap-4">
      <SuccessButton>Normal</SuccessButton>
      <SuccessButton disabled>Desativado</SuccessButton>
    </div>
  `,
})
