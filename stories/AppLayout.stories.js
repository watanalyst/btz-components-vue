import AppLayout from '../components/layouts/AppLayout.vue'

export default {
  title: 'Layouts/AppLayout',
  component: AppLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    appName: { control: 'text' },
    logoSrc: { control: 'text' },
  },
}

const mockNavItems = [
  { label: 'Dashboard', href: '/', active: true },
  { label: 'Avaliações', href: '/avaliacoes', active: false },
  { label: 'Relatórios', href: '/relatorios', active: false },
]

const mockUser = {
  name: 'Weslley Tena',
  subtitle: 'TI',
}

export const Default = () => ({
  components: { AppLayout },
  setup() {
    return { navItems: mockNavItems, user: mockUser }
  },
  template: `
    <AppLayout
      app-name="Avaliação de Perfil"
      :nav-items="navItems"
      :user="user"
      @logout="() => alert('Logout')"
    >
      <div class="rounded-xl bg-white p-6 shadow-sm">
        <h2 class="text-base font-semibold text-gray-800 mb-4">Conteúdo Principal</h2>
        <p class="text-sm text-gray-600">AppLayout com navbar horizontal, ideal para aplicações com poucos links de navegação.</p>
      </div>
    </AppLayout>
  `,
})

export const WithHeaderSlot = () => ({
  components: { AppLayout },
  setup() {
    return { navItems: mockNavItems, user: mockUser }
  },
  template: `
    <AppLayout
      app-name="Meu App"
      :nav-items="navItems"
      :user="user"
    >
      <template #header>
        <div class="rounded-xl bg-white px-6 py-4 shadow-sm">
          <h1 class="text-xl font-bold text-gray-900">Título da Página</h1>
          <p class="text-sm text-gray-500">Subtítulo com contexto adicional</p>
        </div>
      </template>

      <div class="rounded-xl bg-white p-6 shadow-sm">
        <p class="text-sm text-gray-600">Conteúdo abaixo do header.</p>
      </div>
    </AppLayout>
  `,
})

export const NoUser = () => ({
  components: { AppLayout },
  setup() {
    return { navItems: mockNavItems }
  },
  template: `
    <AppLayout app-name="Portal" :nav-items="navItems">
      <div class="rounded-xl bg-white p-6 shadow-sm">
        <p class="text-sm text-gray-600">Sem menu de usuário.</p>
      </div>
    </AppLayout>
  `,
})
