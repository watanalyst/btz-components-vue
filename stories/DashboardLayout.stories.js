import DashboardLayout from '../components/layouts/DashboardLayout.vue'

export default {
  title: 'Layouts/DashboardLayout',
  component: DashboardLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    appName: { control: 'text' },
    appNameHighlight: { control: 'text' },
    version: { control: 'text' },
    currentPath: { control: 'text' },
    homeHref: { control: 'text' },
  },
}

const mockNavigation = [
  {
    key: 'financeiro',
    title: 'Financeiro',
    items: [
      { label: 'Comissões', href: '/relatorios/comissoes' },
      { label: 'Faturamento', href: '/relatorios/faturamento' },
      { label: 'Contas a Receber', href: '/relatorios/contas-receber' },
    ],
  },
  {
    key: 'exportacao',
    title: 'Exportação',
    items: [
      { label: 'Embarques', href: '/relatorios/exportacao/embarques' },
      { label: 'Processos', href: '/relatorios/exportacao/processos' },
    ],
  },
  {
    key: 'comercial',
    title: 'Comercial',
    items: [
      { label: 'Vendas por Região', href: '/relatorios/vendas-regiao' },
      { label: 'Metas', href: '/relatorios/metas' },
    ],
  },
]

const mockUser = {
  name: 'Weslley Tena',
  subtitle: 'TI',
}

export const Default = () => ({
  components: { DashboardLayout },
  setup() {
    return {
      navigation: mockNavigation,
      user: mockUser,
    }
  },
  template: `
    <DashboardLayout
      app-name="Jagua"
      app-name-highlight="Report"
      :navigation="navigation"
      :user="user"
      version="v2.0.0"
      current-path="/relatorios/comissoes"
      home-href="/"
      @logout="() => alert('Logout clicked')"
    >
      <template #header>
        <h1 class="text-lg font-semibold text-gray-800">Comissões</h1>
      </template>

      <div class="rounded-xl bg-white p-6 shadow-sm">
        <h2 class="text-base font-semibold text-gray-800 mb-4">Conteúdo da Página</h2>
        <p class="text-sm text-gray-600">
          Este é o conteúdo principal da página, renderizado dentro do slot padrão do DashboardLayout.
        </p>
      </div>
    </DashboardLayout>
  `,
})

export const CollapsedSidebar = () => ({
  components: { DashboardLayout },
  setup() {
    return {
      navigation: mockNavigation,
      user: mockUser,
    }
  },
  template: `
    <DashboardLayout
      app-name="Jagua"
      app-name-highlight="Report"
      :navigation="navigation"
      :user="user"
      version="v2.0.0"
      current-path="/relatorios/exportacao/embarques"
      home-href="/"
    >
      <div class="rounded-xl bg-white p-6 shadow-sm">
        <h2 class="text-base font-semibold text-gray-800 mb-2">Sidebar Retrátil</h2>
        <p class="text-sm text-gray-600">
          Clique no ícone de hambúrguer para expandir/recolher a barra lateral.
          Passe o mouse sobre os ícones quando recolhido para ver tooltips.
        </p>
      </div>
    </DashboardLayout>
  `,
})

export const NoUser = () => ({
  components: { DashboardLayout },
  setup() {
    return { navigation: mockNavigation }
  },
  template: `
    <DashboardLayout
      app-name="Portal"
      :navigation="navigation"
      version="v1.0.0"
      home-href="/"
    >
      <div class="rounded-xl bg-white p-6 shadow-sm">
        <p class="text-sm text-gray-600">Layout sem menu de usuário.</p>
      </div>
    </DashboardLayout>
  `,
})
