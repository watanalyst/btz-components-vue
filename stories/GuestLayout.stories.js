import GuestLayout from '../components/layouts/GuestLayout.vue'
import TextInput from '../components/TextInput.vue'
import InputLabel from '../components/InputLabel.vue'
import PrimaryButton from '../components/PrimaryButton.vue'

export default {
  title: 'Layouts/GuestLayout',
  component: GuestLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    appName: { control: 'text' },
    appSubtitle: { control: 'text' },
    logoSrc: { control: 'text' },
    copyrightOwner: { control: 'text' },
  },
}

export const LoginPage = () => ({
  components: { GuestLayout, TextInput, InputLabel, PrimaryButton },
  template: `
    <GuestLayout
      app-name="JaguaReport"
      app-subtitle="Plataforma centralizada de relatórios empresariais"
      copyright-owner="Grupo BTZ"
    >
      <div class="space-y-5">
        <div class="text-center mb-6">
          <h2 class="text-xl font-bold text-gray-900">Bem-vindo de volta</h2>
          <p class="text-sm text-gray-500 mt-1">Acesse sua conta para continuar</p>
        </div>
        <div>
          <InputLabel value="E-mail" :required="true" />
          <TextInput type="email" placeholder="seu@email.com" />
        </div>
        <div>
          <InputLabel value="Senha" :required="true" />
          <TextInput type="password" placeholder="••••••••" />
        </div>
        <PrimaryButton class="w-full">Entrar</PrimaryButton>
      </div>
    </GuestLayout>
  `,
})

export const CustomBranding = () => ({
  components: { GuestLayout, TextInput, InputLabel, PrimaryButton },
  template: `
    <GuestLayout
      app-name="e-Jagua"
      app-subtitle="Sistema de gestão integrada"
      copyright-owner="Grupo BTZ"
    >
      <div class="space-y-5">
        <h2 class="text-xl font-bold text-gray-900 text-center">Login</h2>
        <div>
          <InputLabel value="Usuário" />
          <TextInput placeholder="Nome de usuário" />
        </div>
        <div>
          <InputLabel value="Senha" />
          <TextInput type="password" placeholder="Senha" />
        </div>
        <PrimaryButton class="w-full">Acessar</PrimaryButton>
      </div>
    </GuestLayout>
  `,
})
