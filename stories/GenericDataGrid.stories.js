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
    const data = [
      // Empresa 18 — 18/03/2026
      { cod_empresa: '18', dat_movto: '2026-03-18', cod_item: '100.0101R', saidas_estoque: 38020, saidas_nf: 38020, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '18', dat_movto: '2026-03-18', cod_item: '200.0200R', saidas_estoque: 16000, saidas_nf: 16000, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '18', dat_movto: '2026-03-18', cod_item: '200.0906R', saidas_estoque: 122880, saidas_nf: 122880, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '18', dat_movto: '2026-03-18', cod_item: '300.0301R', saidas_estoque: 4340, saidas_nf: 4340, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '18', dat_movto: '2026-03-18', cod_item: '200.0305R', saidas_estoque: 1000, saidas_nf: 1000, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '18', dat_movto: '2026-03-18', cod_item: '300.0306R', saidas_estoque: 12000, saidas_nf: 12000, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '18', dat_movto: '2026-03-18', cod_item: '300.R330', saidas_estoque: 18000, saidas_nf: 18000, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '18', dat_movto: '2026-03-18', cod_item: '300.R399', saidas_estoque: 15200, saidas_nf: 15200, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '18', dat_movto: '2026-03-18', cod_item: '400.0406R', saidas_estoque: 32300, saidas_nf: 32300, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '18', dat_movto: '2026-03-18', cod_item: '800.0002R', saidas_estoque: 20800, saidas_nf: 20800, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      // Empresa 20 — 18/03/2026
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: '100.0101A', saidas_estoque: 0, saidas_nf: 0, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 2200, rem_terc_nf: 2200, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: '200.0200A', saidas_estoque: 15180, saidas_nf: 15180, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 1020, rem_terc_nf: 1020, ret_terc_estoque: 15180, ret_terc_nf: 15180 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: '200.0300A', saidas_estoque: 0, saidas_nf: 0, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 1100, rem_terc_nf: 1100, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: '300.0301A', saidas_estoque: 6380, saidas_nf: 6380, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 1100, rem_terc_nf: 1100, ret_terc_estoque: 5280, ret_terc_nf: 6380 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: '300.A306', saidas_estoque: 0, saidas_nf: 0, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 2200, rem_terc_nf: 2200, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: '300.A360', saidas_estoque: 656, saidas_nf: 656, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 800, rem_terc_nf: 800, ret_terc_estoque: 656, ret_terc_nf: 656 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: '300.A399', saidas_estoque: 5880, saidas_nf: 5880, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 3480, ret_terc_nf: 3480 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: '400.0404A', saidas_estoque: 3460, saidas_nf: 3460, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 3480, ret_terc_nf: 3480 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: '500.0017A', saidas_estoque: 520, saidas_nf: 520, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 17600, rem_terc_nf: 17600, ret_terc_estoque: 520, ret_terc_nf: 520 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: '500.A12', saidas_estoque: 0, saidas_nf: 0, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 1095, rem_terc_nf: 1095, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: '700.0702A', saidas_estoque: 0, saidas_nf: 0, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 20, ret_terc_nf: 20 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: '700.0765A', saidas_estoque: 1800, saidas_nf: 1800, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 4140, ret_terc_nf: 4140 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: '700.A743', saidas_estoque: 0, saidas_nf: 0, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 7177, rem_terc_nf: 7177, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: '700.A744', saidas_estoque: 0, saidas_nf: 0, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 10486, rem_terc_nf: 10486, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: '700.A745', saidas_estoque: 0, saidas_nf: 0, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 3855, rem_terc_nf: 3855, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: '700.A746', saidas_estoque: 0, saidas_nf: 0, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 5022, rem_terc_nf: 5022, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: 'EXP.0119A', saidas_estoque: 0, saidas_nf: 27000, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: 'EXP.0232A', saidas_estoque: 0, saidas_nf: 26020, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: 'EXP.0311A', saidas_estoque: 0, saidas_nf: 0, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 3375, rem_terc_nf: 3375, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: 'EXP.0704A', saidas_estoque: 0, saidas_nf: 320, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: 'EXP.0705A', saidas_estoque: 0, saidas_nf: 1181, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: 'EXP.0706A', saidas_estoque: 0, saidas_nf: 1440, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: 'EXP.0707A', saidas_estoque: 0, saidas_nf: 3234, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: 'EXP.0708A', saidas_estoque: 0, saidas_nf: 3372, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: 'EXP.0709A', saidas_estoque: 0, saidas_nf: 3471, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: 'EXP.0710A', saidas_estoque: 0, saidas_nf: 11046, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: 'EXP.0711A', saidas_estoque: 0, saidas_nf: 2940, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 0, rem_terc_nf: 0, ret_terc_estoque: 0, ret_terc_nf: 0 },
      { cod_empresa: '20', dat_movto: '2026-03-18', cod_item: 'EXP.A156', saidas_estoque: 0, saidas_nf: 0, devol_estoque: 0, devol_nf: 0, refat_estoque: 0, refat_nf: 0, baixa_estoque: 0, baixa_nf: 0, rem_terc_estoque: 24000, rem_terc_nf: 24000, ret_terc_estoque: 0, ret_terc_nf: 0 },
    ]

    const columns = [
      { key: 'cod_empresa', label: 'Empresa', sortable: true, filterable: true, align: 'center', width: '70px' },
      { key: 'dat_movto', label: 'Dta Movto', sortable: true, type: 'date', width: '90px' },
      { key: 'cod_item', label: 'Item', sortable: true, filterable: true },
      { key: 'saidas_estoque', label: 'Saídas Estoque (Soma)', sortable: true, type: 'currency' },
      { key: 'saidas_nf', label: 'Saídas NF (Soma)', sortable: true, type: 'currency' },
      { key: 'devol_estoque', label: 'Devol Estoque (Soma)', sortable: true, type: 'currency' },
      { key: 'devol_nf', label: 'Devol NF (Soma)', sortable: true, type: 'currency' },
      { key: 'refat_estoque', label: 'Refat Estoque (Soma)', sortable: true, type: 'currency' },
      { key: 'refat_nf', label: 'Refat NF (Soma)', sortable: true, type: 'currency' },
      { key: 'baixa_estoque', label: 'Baixa Estoque (Soma)', sortable: true, type: 'currency' },
      { key: 'baixa_nf', label: 'Baixa NF (Soma)', sortable: true, type: 'currency' },
      { key: 'rem_terc_estoque', label: 'Rem Terc Estoque (Soma)', sortable: true, type: 'currency' },
      { key: 'rem_terc_nf', label: 'Rem Terc NF (Soma)', sortable: true, type: 'currency' },
      { key: 'ret_terc_estoque', label: 'Ret Terc Estoque (Soma)', sortable: true, type: 'currency' },
      { key: 'ret_terc_nf', label: 'Ret Terc NF (Soma)', sortable: true, type: 'currency' },
    ]

    return { columns, data }
  },
  template: `
    <GenericDataGrid
      :columns="columns"
      :data="data"
      :page-size="100"
      export-filename="mov-dev-terceiros"
      :group-by="['cod_empresa', 'dat_movto']"
      :sum-columns="['saidas_estoque', 'saidas_nf', 'devol_estoque', 'devol_nf', 'refat_estoque', 'refat_nf', 'baixa_estoque', 'baixa_nf', 'rem_terc_estoque', 'rem_terc_nf', 'ret_terc_estoque', 'ret_terc_nf']"
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
