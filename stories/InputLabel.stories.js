import InputLabel from '../components/InputLabel.vue'

export default {
  title: 'Form/InputLabel',
  component: InputLabel,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', description: 'Label text via prop' },
    required: { control: 'boolean', description: 'Shows red asterisk when true' },
  },
}

export const Default = () => ({
  components: { InputLabel },
  template: `<InputLabel value="Nome completo" />`,
})

export const Required = () => ({
  components: { InputLabel },
  template: `<InputLabel value="E-mail" :required="true" />`,
})

export const WithSlot = () => ({
  components: { InputLabel },
  template: `<InputLabel>Texto via slot</InputLabel>`,
})

export const AllVariants = () => ({
  components: { InputLabel },
  template: `
    <div class="space-y-2">
      <InputLabel value="Campo normal" />
      <InputLabel value="Campo obrigatório" :required="true" />
      <InputLabel>Via slot</InputLabel>
    </div>
  `,
})
