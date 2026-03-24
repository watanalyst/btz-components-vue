import SecondaryButton from '../components/SecondaryButton.vue'

export default {
  title: 'Buttons/SecondaryButton',
  component: SecondaryButton,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    default: { control: 'text', description: 'Button label (slot content)' },
  },
}

const Template = (args) => ({
  components: { SecondaryButton },
  setup() { return { args } },
  template: `<SecondaryButton v-bind="args">{{ args.default }}</SecondaryButton>`,
})

export const Default = Template.bind({})
Default.args = { default: 'Cancelar', type: 'button' }

export const AllSizes = () => ({
  components: { SecondaryButton },
  template: `
    <div class="space-y-6 p-4">
      <div>
        <p class="text-xs font-semibold text-gray-400 mb-2 uppercase">Tamanhos</p>
        <div class="flex flex-wrap items-center gap-3">
          <SecondaryButton size="sm">Pequeno</SecondaryButton>
          <SecondaryButton>Normal</SecondaryButton>
          <SecondaryButton size="lg">Grande</SecondaryButton>
          <SecondaryButton disabled>Desativado</SecondaryButton>
        </div>
      </div>
    </div>
  `,
})
