import DangerButton from '../components/DangerButton.vue'

export default {
  title: 'Buttons/DangerButton',
  component: DangerButton,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['solid', 'outline'] },
    default: { control: 'text', description: 'Button label (slot content)' },
  },
}

const Template = (args) => ({
  components: { DangerButton },
  setup() { return { args } },
  template: `<DangerButton v-bind="args">{{ args.default }}</DangerButton>`,
})

export const Default = Template.bind({})
Default.args = { default: 'Excluir', type: 'button' }

export const Outline = Template.bind({})
Outline.args = { default: 'Limpar', variant: 'outline' }

export const AllVariants = () => ({
  components: { DangerButton },
  template: `
    <div class="space-y-6 p-4">
      <div>
        <p class="text-xs font-semibold text-gray-400 mb-2 uppercase">Solid (padrão)</p>
        <div class="flex flex-wrap items-center gap-3">
          <DangerButton size="sm">Pequeno</DangerButton>
          <DangerButton>Normal</DangerButton>
          <DangerButton size="lg">Grande</DangerButton>
          <DangerButton disabled>Desativado</DangerButton>
        </div>
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-400 mb-2 uppercase">Outline (contorno)</p>
        <div class="flex flex-wrap items-center gap-3">
          <DangerButton variant="outline" size="sm">Pequeno</DangerButton>
          <DangerButton variant="outline">Limpar</DangerButton>
          <DangerButton variant="outline" size="lg">Grande</DangerButton>
          <DangerButton variant="outline" disabled>Desativado</DangerButton>
        </div>
      </div>
    </div>
  `,
})
