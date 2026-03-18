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

// ── Navigation: 2 níveis (flat) — reflete config/reports.php atual ──
const mockNavigation = [
  {
    key: 'financeiro',
    title: 'Financeiro',
    items: [
      { label: 'Comissão', href: '/relatorios/financeiro/comissao' },
      { label: 'Comissão Redeconomia', href: '/relatorios/financeiro/comissao-redeconomia' },
      { label: 'Comissão Representante', href: '/relatorios/financeiro/comissao-representante' },
      { label: 'Fechamento Câmbio', href: '/relatorios/financeiro/fechamento-cambio' },
    ],
  },
  {
    key: 'exportacao',
    title: 'Exportação',
    items: [
      { label: 'Embarques Exportação', href: '/relatorios/exportacao/embarques' },
      { label: 'Processos Exportação', href: '/relatorios/exportacao/processos' },
    ],
  },
]

// ── Navigation: 3 níveis (com subgrupos) — reflete jaguareport atual ──
const mockNavigationNested = [
  {
    key: 'financeiro',
    title: 'Financeiro',
    items: [
      {
        label: 'Contas a Receber',
        key: 'contas-receber',
        children: [
          { label: 'Comissão', href: '/relatorios/financeiro/comissao' },
          { label: 'Comissão Redeconomia', href: '/relatorios/financeiro/comissao-redeconomia' },
          { label: 'Comissão Representante', href: '/relatorios/financeiro/comissao-representante' },
          { label: 'Fechamento Câmbio', href: '/relatorios/financeiro/fechamento-cambio' },
        ],
      },
    ],
  },
  {
    key: 'exportacao',
    title: 'Exportação',
    items: [
      {
        label: 'Processo',
        key: 'processo',
        children: [
          { label: 'Embarques Exportação', href: '/relatorios/exportacao/embarques' },
          { label: 'Processos Exportação', href: '/relatorios/exportacao/processos' },
          { label: 'Packing List', href: '/relatorios/exportacao/packing-list' },
        ],
      },
      {
        label: 'Financeiro',
        key: 'financeiro-exp',
        children: [
          { label: 'Comissão Exportação', href: '/relatorios/exportacao/comissao-exportacao' },
          { label: 'Credit Note', href: '/relatorios/exportacao/credit-note' },
          { label: 'Debit Note', href: '/relatorios/exportacao/debit-note' },
          { label: 'Baixa Disponível', href: '/relatorios/exportacao/baixa-disponivel' },
        ],
      },
    ],
  },
]

const mockUser = {
  name: 'Weslley Tena',
  subtitle: 'TI',
}

// ── Stories ──

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
        <h2 class="text-base font-semibold text-gray-800 mb-4">Navegação 2 Níveis</h2>
        <p class="text-sm text-gray-600">
          Estrutura atual: Seção → Itens (links diretos).
        </p>
      </div>
    </DashboardLayout>
  `,
})

export const NestedSubgroups = () => ({
  components: { DashboardLayout },
  setup() {
    return {
      navigation: mockNavigationNested,
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
      current-path="/relatorios/financeiro/comissao"
      home-href="/"
      @logout="() => alert('Logout clicked')"
    >
      <template #header>
        <h1 class="text-lg font-semibold text-gray-800">Comissão</h1>
      </template>

      <div class="rounded-xl bg-white p-6 shadow-sm">
        <h2 class="text-base font-semibold text-gray-800 mb-4">Navegação 3 Níveis (Subgrupos)</h2>
        <p class="text-sm text-gray-600">
          Estrutura com subgrupos: Seção → Subgrupo → Itens.<br>
          Compatível com a estrutura do Scriptcase (ex: Administrativo → Fomento → Relatórios).
        </p>
        <p class="text-sm text-gray-500 mt-2">
          Itens sem <code>children</code> continuam como links diretos (veja Exportação).
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
