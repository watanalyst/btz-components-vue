import InputError from '../components/InputError.vue'

export default {
  title: 'Inputs/InputError',
  component: InputError,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text', description: 'Error message to display' },
  },
}

export const Default = () => ({
  components: { InputError },
  template: `<InputError message="Este campo é obrigatório." />`,
})

export const NoMessage = () => ({
  components: { InputError },
  template: `<InputError />`,
})

export const LongMessage = () => ({
  components: { InputError },
  template: `<InputError message="O campo e-mail deve conter um endereço de e-mail válido com formato usuario@dominio.com." />`,
})
