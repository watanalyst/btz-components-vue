import PrimaryButton from '../components/PrimaryButton.vue'

export default {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['solid', 'outline'] },
    default: { control: 'text', description: 'Button label (slot content)' },
  },
}

const Template = (args) => ({
  components: { PrimaryButton },
  setup() { return { args } },
  template: `<PrimaryButton v-bind="args">{{ args.default }}</PrimaryButton>`,
})

export const Default = Template.bind({})
Default.args = { default: 'Salvar', type: 'button' }

export const Outline = Template.bind({})
Outline.args = { default: 'Filtrar', variant: 'outline' }

export const AllVariants = () => ({
  components: { PrimaryButton },
  template: `
    <div class="space-y-6 p-4">
      <div>
        <p class="text-xs font-semibold text-gray-400 mb-2 uppercase">Solid (padrão)</p>
        <div class="flex flex-wrap items-center gap-3">
          <PrimaryButton size="sm">Pequeno</PrimaryButton>
          <PrimaryButton>Normal</PrimaryButton>
          <PrimaryButton size="lg">Grande</PrimaryButton>
          <PrimaryButton disabled>Desativado</PrimaryButton>
        </div>
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-400 mb-2 uppercase">Outline (contorno)</p>
        <div class="flex flex-wrap items-center gap-3">
          <PrimaryButton variant="outline" size="sm">Pequeno</PrimaryButton>
          <PrimaryButton variant="outline">Normal</PrimaryButton>
          <PrimaryButton variant="outline" size="lg">Grande</PrimaryButton>
          <PrimaryButton variant="outline" disabled>Desativado</PrimaryButton>
        </div>
      </div>
    </div>
  `,
})
