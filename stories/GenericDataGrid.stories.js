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

export const WithGrouping = () => ({
  components: { GenericDataGrid },
  setup() {
    const empresas = ['01', '01', '01', '05', '05', '05', '18', '18', '20', '20']
    const itens = ['100.0101R', '200.0200J', '300.0301J', 'EXP.0323J', '400.0426J']
    const data = Array.from({ length: 30 }, (_, i) => ({
      cod_empresa: empresas[i % empresas.length],
      cod_item: itens[i % itens.length],
      dat_movto: new Date(2026, 2, 10 + (i % 5)).toISOString().slice(0, 10),
      origem: i % 3 === 0 ? 'ENT' : 'EST',
      num_docum: String(350000 + i),
      saidas_estoque: +(Math.random() * 50000).toFixed(0),
      saidas_nf: +(Math.random() * 50000).toFixed(0),
      devol_estoque: +(Math.random() * 5000).toFixed(0),
      devol_nf: +(Math.random() * 5000).toFixed(0),
      refat_estoque: 0,
      refat_nf: 0,
    }))

    const columns = [
      { key: 'cod_empresa', label: 'Emp', sortable: true, filterable: true, align: 'center' },
      { key: 'cod_item', label: 'Cód Item', sortable: true, filterable: true },
      { key: 'dat_movto', label: 'Dat Movto', sortable: true, type: 'date' },
      { key: 'origem', label: 'Origem', sortable: true, filterable: true },
      { key: 'num_docum', label: 'Num Docum', sortable: true, align: 'center' },
      { key: 'saidas_estoque', label: 'Saídas Estoque', sortable: true, type: 'currency' },
      { key: 'saidas_nf', label: 'Saídas NF', sortable: true, type: 'currency' },
      { key: 'devol_estoque', label: 'Devol Estoque', sortable: true, type: 'currency' },
      { key: 'devol_nf', label: 'Devol NF', sortable: true, type: 'currency' },
      { key: 'refat_estoque', label: 'Refat Estoque', sortable: true, type: 'currency' },
      { key: 'refat_nf', label: 'Refat NF', sortable: true, type: 'currency' },
    ]

    return { columns, data }
  },
  template: `
    <GenericDataGrid
      :columns="columns"
      :data="data"
      :page-size="100"
      export-filename="mov-dev-terceiros"
      :group-by="['cod_empresa', 'dat_movto', 'cod_item']"
      :sum-columns="['saidas_estoque', 'saidas_nf', 'devol_estoque', 'devol_nf', 'refat_estoque', 'refat_nf']"
    />
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
