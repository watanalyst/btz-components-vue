import GenericDataGrid from '../components/GenericDataGrid.vue'

export default {
  title: 'Data/GenericDataGrid',
  component: GenericDataGrid,
  tags: ['autodocs'],
}

const sampleColumns = [
  { key: 'empresa', label: 'Empresa', sortable: true },
  { key: 'cliente', label: 'Cliente', sortable: true },
  { key: 'pedido', label: 'Pedido', type: 'number', sortable: true },
  { key: 'data', label: 'Data', type: 'date', sortable: true },
  { key: 'valor', label: 'Valor (R$)', type: 'currency', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
]

function generateData(count) {
  const empresas = ['01 - Jaguafrangos', '02 - Jagua Alimentos', '05 - Farinha', '10 - Exportação']
  const clientes = ['Weslley Tena (TI)', 'Carrefour', 'Pão de Açúcar', 'Atacadão', 'BRF', 'JBS', 'Seara', 'Sadia']
  const statuses = ['Faturado', 'Aberto', 'Cancelado', 'Pedido']

  return Array.from({ length: count }, (_, i) => ({
    empresa: empresas[i % empresas.length],
    cliente: clientes[i % clientes.length],
    pedido: 100000 + i,
    data: new Date(2026, 0, 1 + (i % 90)).toISOString().slice(0, 10),
    valor: (Math.random() * 50000 + 1000).toFixed(2),
    status: statuses[i % statuses.length],
  }))
}

export const Default = () => ({
  components: { GenericDataGrid },
  setup() {
    return {
      columns: sampleColumns,
      data: generateData(8),
    }
  },
  template: `
    <GenericDataGrid
      :columns="columns"
      :data="data"
      export-filename="exemplo"
    />
  `,
})

export const WithPagination = () => ({
  components: { GenericDataGrid },
  setup() {
    return {
      columns: sampleColumns,
      data: generateData(120),
    }
  },
  template: `
    <GenericDataGrid
      :columns="columns"
      :data="data"
      :page-size="10"
      export-filename="paginado"
    />
  `,
})

export const Selectable = () => ({
  components: { GenericDataGrid },
  setup() {
    const { ref } = require('vue')
    const selected = ref([])
    return {
      columns: sampleColumns,
      data: generateData(15),
      selected,
    }
  },
  template: `
    <div class="space-y-3">
      <GenericDataGrid
        :columns="columns"
        :data="data"
        :page-size="10"
        :selectable="true"
        export-filename="selecionavel"
        @update:selected="selected = $event"
      />
      <p class="text-sm text-gray-500">{{ selected.length }} linha(s) selecionada(s)</p>
    </div>
  `,
})

export const Empty = () => ({
  components: { GenericDataGrid },
  setup() {
    return {
      columns: sampleColumns,
      data: [],
    }
  },
  template: `
    <GenericDataGrid
      :columns="columns"
      :data="data"
      export-filename="vazio"
    />
  `,
})
