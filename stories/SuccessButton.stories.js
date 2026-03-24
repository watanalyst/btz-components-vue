import SuccessButton from '../components/SuccessButton.vue'

export default {
  title: 'Buttons/SuccessButton',
  component: SuccessButton,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['solid', 'outline'] },
    default: { control: 'text', description: 'Button label (slot content)' },
  },
}

const Template = (args) => ({
  components: { SuccessButton },
  setup() { return { args } },
  template: `<SuccessButton v-bind="args">{{ args.default }}</SuccessButton>`,
})

export const Default = Template.bind({})
Default.args = { default: 'Salvar', type: 'button' }

export const Outline = Template.bind({})
Outline.args = { default: 'Excel', variant: 'outline' }

export const AllVariants = () => ({
  components: { SuccessButton },
  template: `
    <div class="space-y-6 p-4">
      <div>
        <p class="text-xs font-semibold text-gray-400 mb-2 uppercase">Solid (padrão)</p>
        <div class="flex flex-wrap items-center gap-3">
          <SuccessButton size="sm">Pequeno</SuccessButton>
          <SuccessButton>Normal</SuccessButton>
          <SuccessButton size="lg">Grande</SuccessButton>
          <SuccessButton disabled>Desativado</SuccessButton>
        </div>
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-400 mb-2 uppercase">Outline (contorno)</p>
        <div class="flex flex-wrap items-center gap-3">
          <SuccessButton variant="outline" size="sm">Pequeno</SuccessButton>
          <SuccessButton variant="outline">Excel</SuccessButton>
          <SuccessButton variant="outline" size="lg">Grande</SuccessButton>
          <SuccessButton variant="outline" disabled>Desativado</SuccessButton>
        </div>
      </div>
    </div>
  `,
})
