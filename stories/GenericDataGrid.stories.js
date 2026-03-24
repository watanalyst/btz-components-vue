import { ref, computed } from 'vue'
import GenericDataGrid from '../components/GenericDataGrid.vue'
import SecondaryButton from '../components/SecondaryButton.vue'
import DangerButton from '../components/DangerButton.vue'

export default {
  title: 'Data/GenericDataGrid',
  component: GenericDataGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

// ── Dados compartilhados (Mov. Dev. e Terceiros) ──
const r = (e, d, i, se, sn, de, dn, re, rn, be, bn, rme, rmn, rte, rtn) =>
  ({ cod_empresa: e, dat_movto: d, cod_item: i, saidas_estoque: se, saidas_nf: sn, devol_estoque: de, devol_nf: dn, refat_estoque: re, refat_nf: rn, baixa_estoque: be, baixa_nf: bn, rem_terc_estoque: rme, rem_terc_nf: rmn, ret_terc_estoque: rte, ret_terc_nf: rtn })

const movDevData = [
  // Empresa 18 — 17/03/2026
  r('18','2026-03-17','100.0101R',16000,16000,0,0,0,0,0,0,0,0,0,0),
  r('18','2026-03-17','200.0200R',0,0,0,0,0,0,0,0,0,0,0,0),
  r('18','2026-03-17','200.0238R',56010,56010,0,0,0,0,0,0,0,0,0,0),
  r('18','2026-03-17','200.0906R',56000,56000,0,0,0,0,0,0,0,0,0,0),
  r('18','2026-03-17','300.0305R',4000,4000,0,0,0,0,0,0,0,0,0,0),
  r('18','2026-03-17','300.R399',21540,21540,0,0,0,0,0,0,0,0,0,0),
  r('18','2026-03-17','400.0400R',52000,52000,28000,28000,28000,28000,0,0,0,0,0,0),
  r('18','2026-03-17','800.0002R',26880,26880,0,0,0,0,0,0,0,0,0,0),
  // Empresa 18 — 18/03/2026
  r('18','2026-03-18','100.0101R',36620,36620,0,0,0,0,0,0,0,0,0,0),
  r('18','2026-03-18','200.0200R',16000,16000,0,0,0,0,0,0,0,0,0,0),
  r('18','2026-03-18','200.0906R',122860,122860,0,0,0,0,0,0,0,0,0,0),
  r('18','2026-03-18','300.0301R',4340,4340,0,0,0,0,0,0,0,0,0,0),
  r('18','2026-03-18','300.0305R',1000,1000,0,0,0,0,0,0,0,0,0,0),
  r('18','2026-03-18','300.0306R',12000,12000,0,0,0,0,0,0,0,0,0,0),
  r('18','2026-03-18','300.R330',16000,16000,0,0,0,0,0,0,0,0,0,0),
  r('18','2026-03-18','300.R399',15200,15200,0,0,0,0,0,0,0,0,0,0),
  r('18','2026-03-18','400.0400R',32300,32300,0,0,0,0,0,0,0,0,0,0),
  r('18','2026-03-18','800.0002R',20800,20800,0,0,0,0,0,0,0,0,0,0),
  // Empresa 20 — 17/03/2026
  r('20','2026-03-17','200.0200A',16000,16000,0,0,0,0,0,0,0,0,16000,16000),
  r('20','2026-03-17','300.A399',8190,8190,0,0,0,0,0,0,0,0,0,0),
  r('20','2026-03-17','400.0404A',14200,14200,0,0,0,0,0,0,0,0,3960,3960),
  r('20','2026-03-17','500.0017A',10140,10140,0,0,0,0,0,0,0,0,10140,10140),
  r('20','2026-03-17','700.0702A',14000,14000,0,0,0,0,0,0,0,0,0,0),
  r('20','2026-03-17','700.A742',5595,5595,0,0,0,0,0,0,0,0,0,0),
  r('20','2026-03-17','700.A743',6979,6979,0,0,0,0,0,0,11335,11335,0,0),
  r('20','2026-03-17','700.A744',7420,7420,0,0,0,0,0,0,9982,9982,0,0),
  r('20','2026-03-17','700.A745',1245,1245,0,0,0,0,0,0,1875,1875,0,0),
  r('20','2026-03-17','700.A746',3642,3642,0,0,0,0,0,0,5394,5394,0,0),
  r('20','2026-03-17','EXP.0312A',22635,22635,0,0,0,0,0,0,0,0,19755,19755),
  // Empresa 20 — 18/03/2026
  r('20','2026-03-18','100.0101A',0,0,0,0,0,0,0,0,2200,2200,0,0),
  r('20','2026-03-18','200.0200A',15180,15180,0,0,0,0,0,0,1020,1020,15180,15180),
  r('20','2026-03-18','300.0300A',0,0,0,0,0,0,0,0,1100,1100,0,0),
  r('20','2026-03-18','300.0301A',6380,6380,0,0,0,0,0,0,1100,1100,5280,6380),
  r('20','2026-03-18','300.A306',0,0,0,0,0,0,0,0,2200,2200,0,0),
  r('20','2026-03-18','300.A360',656,656,0,0,0,0,0,0,800,800,656,656),
  r('20','2026-03-18','300.A399',5860,5860,0,0,0,0,0,0,0,0,0,0),
  r('20','2026-03-18','400.0404A',3460,3460,0,0,0,0,0,0,0,0,3480,3480),
  r('20','2026-03-18','500.0017A',520,520,0,0,0,0,0,0,17600,17600,520,520),
  r('20','2026-03-18','500.A12',0,0,0,0,0,0,0,0,1095,1095,0,0),
  r('20','2026-03-18','700.0702A',0,0,0,0,0,0,0,0,0,0,20,20),
  r('20','2026-03-18','700.0765A',1800,1800,0,0,0,0,0,0,0,0,4140,4140),
  r('20','2026-03-18','700.A743',0,0,0,0,0,0,0,0,7177,7177,0,0),
  r('20','2026-03-18','700.A744',0,0,0,0,0,0,0,0,10486,10486,0,0),
  r('20','2026-03-18','700.A745',0,0,0,0,0,0,0,0,3855,3855,0,0),
  r('20','2026-03-18','700.A746',0,0,0,0,0,0,0,0,5022,5022,0,0),
  r('20','2026-03-18','EXP.0119A',0,27000,0,0,0,0,0,0,0,0,0,0),
  r('20','2026-03-18','EXP.0232A',0,26020,0,0,0,0,0,0,0,0,0,0),
  r('20','2026-03-18','EXP.0313A',0,0,0,0,0,0,0,0,3375,3375,0,0),
  r('20','2026-03-18','EXP.0704A',0,320,0,0,0,0,0,0,0,0,0,0),
  r('20','2026-03-18','EXP.0705A',0,1161,0,0,0,0,0,0,0,0,0,0),
  r('20','2026-03-18','EXP.0706A',0,1440,0,0,0,0,0,0,0,0,0,0),
  r('20','2026-03-18','EXP.0707A',0,3234,0,0,0,0,0,0,0,0,0,0),
  r('20','2026-03-18','EXP.0708A',0,3372,0,0,0,0,0,0,0,0,0,0),
  r('20','2026-03-18','EXP.0709A',0,3471,0,0,0,0,0,0,0,0,0,0),
  r('20','2026-03-18','EXP.0710A',0,11046,0,0,0,0,0,0,0,0,0,0),
  r('20','2026-03-18','EXP.0711A',0,2940,0,0,0,0,0,0,0,0,0,0),
  r('20','2026-03-18','EXP.A156',0,0,0,0,0,0,0,0,24000,24000,0,0),
]

const movDevColumns = [
  { key: 'cod_empresa', label: 'Emp', sortable: true, filterable: true },
  { key: 'dat_movto', label: 'Dat Movto', sortable: true, type: 'date' },
  { key: 'cod_item', label: 'Cód Item', sortable: true, filterable: true },
  { key: 'saidas_estoque', label: 'Saídas Estoque', sortable: true, type: 'currency' },
  { key: 'saidas_nf', label: 'Saídas NF', sortable: true, type: 'currency' },
  { key: 'devol_estoque', label: 'Devol Estoque', sortable: true, type: 'currency' },
  { key: 'devol_nf', label: 'Devol NF', sortable: true, type: 'currency' },
  { key: 'refat_estoque', label: 'Refat Estoque', sortable: true, type: 'currency' },
  { key: 'refat_nf', label: 'Refat NF', sortable: true, type: 'currency' },
  { key: 'baixa_estoque', label: 'Baixa Estoque', sortable: true, type: 'currency' },
  { key: 'baixa_nf', label: 'Baixa NF', sortable: true, type: 'currency' },
  { key: 'rem_terc_estoque', label: 'Rem Terc Estoque', sortable: true, type: 'currency' },
  { key: 'rem_terc_nf', label: 'Rem Terc NF', sortable: true, type: 'currency' },
  { key: 'ret_terc_estoque', label: 'Ret Terc Estoque', sortable: true, type: 'currency' },
  { key: 'ret_terc_nf', label: 'Ret Terc NF', sortable: true, type: 'currency' },
]

const movDevSumCols = movDevColumns.filter(c => c.type === 'currency').map(c => c.key)

// ═══════════════════════════════════════════════
// 1. NORMAL — Grid simples
// ═══════════════════════════════════════════════
export const Detail = () => ({
  components: { GenericDataGrid },
  setup() {
    return { columns: movDevColumns, data: movDevData }
  },
  template: `
    <div class="p-4">
      <h2 class="text-lg font-bold text-gray-800 mb-1">Detail</h2>
      <p class="text-xs text-gray-400 mb-3">Simple grid — all rows, no grouping, no subtotals.</p>
      <GenericDataGrid :columns="columns" :data="data" :page-size="100" export-filename="detail" max-height="70vh" />
    </div>
  `,
})

// ═══════════════════════════════════════════════
// 2. RESUMO (fixo) — já aplicado
// ═══════════════════════════════════════════════
export const SummaryFixed = () => ({
  components: { GenericDataGrid },
  setup() {
    return { columns: movDevColumns, data: movDevData, sumCols: movDevSumCols }
  },
  template: `
    <div class="p-4">
      <h2 class="text-lg font-bold text-gray-800 mb-1">Summary (fixed)</h2>
      <p class="text-xs text-gray-400 mb-3">Summary pre-applied by Company and Date — subtotals and Grand Total.</p>
      <GenericDataGrid :columns="columns" :data="data" :page-size="100" export-filename="resumo" :group-by="['cod_empresa', 'dat_movto']" :sum-columns="sumCols" max-height="70vh" />
    </div>
  `,
})

// ═══════════════════════════════════════════════
// 3. SUMMARY DYNAMIC
// ═══════════════════════════════════════════════
export const SummaryDynamic = () => ({
  components: { GenericDataGrid, SecondaryButton, DangerButton },
  setup() {
    const groupableColumns = movDevColumns.filter(c => !['number', 'currency'].includes(c.type))
    const selectedGroupBy = ref([])
    const showPanel = ref(false)

    function toggle(key) {
      const idx = selectedGroupBy.value.indexOf(key)
      if (idx >= 0) selectedGroupBy.value.splice(idx, 1)
      else selectedGroupBy.value.push(key)
    }
    function moveUp(idx) { if (idx > 0) { const a = selectedGroupBy.value; [a[idx-1], a[idx]] = [a[idx], a[idx-1]] } }
    function moveDown(idx) { const a = selectedGroupBy.value; if (idx < a.length-1) { [a[idx], a[idx+1]] = [a[idx+1], a[idx]] } }

    return { columns: movDevColumns, data: movDevData, sumCols: movDevSumCols, groupableColumns, selectedGroupBy, showPanel, toggle, moveUp, moveDown }
  },
  template: `
    <div class="p-4">
      <h2 class="text-lg font-bold text-gray-800 mb-1">Summary (dynamic)</h2>
      <p class="text-xs text-gray-400 mb-3">Choose grouping fields for summary mode.</p>
      <div class="mb-3 flex items-center gap-2">
        <SecondaryButton size="sm" @click="showPanel = !showPanel" class="!border-blue-600 !text-blue-600 hover:!bg-blue-50">
          Resumo
          <span v-if="selectedGroupBy.length" class="ml-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">{{ selectedGroupBy.length }}</span>
        </SecondaryButton>
        <DangerButton v-if="selectedGroupBy.length || showPanel" variant="outline" size="sm" @click="selectedGroupBy = []; showPanel = false">
          <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
          Limpar
        </SecondaryButton>
      </div>
      <div v-if="showPanel" class="mb-4 rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
        <p class="text-xs font-semibold text-gray-500 mb-2">Selecione os campos para agrupar:</p>
        <div class="flex flex-wrap gap-2">
          <SecondaryButton v-for="col in groupableColumns" :key="col.key" size="sm" @click="toggle(col.key)"
            :class="selectedGroupBy.includes(col.key) ? '!bg-blue-600 !text-white !border-blue-600' : ''">
            {{ col.label }} <span v-if="selectedGroupBy.includes(col.key)" class="ml-0.5 text-blue-200 font-bold">{{ selectedGroupBy.indexOf(col.key) + 1 }}</span>
          </SecondaryButton>
        </div>
        <div v-if="selectedGroupBy.length > 1" class="mt-3 flex items-center gap-2 text-xs">
          <span class="text-gray-400">Order:</span>
          <template v-for="(key, idx) in selectedGroupBy" :key="key">
            <span class="font-semibold text-blue-700">{{ groupableColumns.find(c => c.key === key)?.label }}</span>
            <button v-if="idx > 0" @click="moveUp(idx)" class="text-gray-400 hover:text-blue-600">↑</button>
            <button v-if="idx < selectedGroupBy.length - 1" @click="moveDown(idx)" class="text-gray-400 hover:text-blue-600">↓</button>
            <span v-if="idx < selectedGroupBy.length - 1" class="mx-1 text-gray-300">›</span>
          </template>
        </div>
      </div>
      <GenericDataGrid :columns="columns" :data="data" :page-size="100" export-filename="summary" :group-by="selectedGroupBy" :sum-columns="sumCols" :show-group-toggle="false" max-height="70vh" />
    </div>
  `,
})

// ═══════════════════════════════════════════════
// 3. QUEBRA — Todas as linhas detalhadas + subtotais
// ═══════════════════════════════════════════════
const quebraRow = (e, d, i, orig, ndoc, nseq, se, sn, de, dn, re, rn, be, bn, rme, rmn, rte, rtn) =>
  ({ cod_empresa: e, dat_movto: d, cod_item: i, origem: orig, num_docum: ndoc, num_seq: nseq, saidas_estoque: se, saidas_nf: sn, devol_estoque: de, devol_nf: dn, refat_estoque: re, refat_nf: rn, baixa_estoque: be, baixa_nf: bn, rem_terc_estoque: rme, rem_terc_nf: rmn, ret_terc_estoque: rte, ret_terc_nf: rtn })

const quebraData = [
  // Empresa 18 — 17/03/2026 — Item 100.0101R
  quebraRow('18','2026-03-17','100.0101R','SAI','39821',1,0,16000,0,0,0,0,0,0,0,0,0,0),
  quebraRow('18','2026-03-17','100.0101R','EST','0039821',1,16000,0,0,0,0,0,0,0,0,0,0,0),
  // Empresa 18 — 17/03/2026 — Item 200.0200R
  quebraRow('18','2026-03-17','200.0200R','EST','0',0,0,0,0,0,0,0,0,0,0,0,0,0),
  // Empresa 18 — 17/03/2026 — Item 200.0238R
  quebraRow('18','2026-03-17','200.0238R','SAI','39828',1,0,28005,0,0,0,0,0,0,0,0,0,0),
  quebraRow('18','2026-03-17','200.0238R','SAI','39806',1,0,28005,0,0,0,0,0,0,0,0,0,0),
  quebraRow('18','2026-03-17','200.0238R','EST','0039828',1,28005,0,0,0,0,0,0,0,0,0,0,0),
  quebraRow('18','2026-03-17','200.0238R','EST','0039806',1,28005,0,0,0,0,0,0,0,0,0,0,0),
  // Empresa 18 — 17/03/2026 — Item 200.0906R
  quebraRow('18','2026-03-17','200.0906R','SAI','39814',1,0,28000,0,0,0,0,0,0,0,0,0,0),
  quebraRow('18','2026-03-17','200.0906R','SAI','39815',1,0,28000,0,0,0,0,0,0,0,0,0,0),
  quebraRow('18','2026-03-17','200.0906R','EST','0039814',1,28000,0,0,0,0,0,0,0,0,0,0,0),
  quebraRow('18','2026-03-17','200.0906R','EST','0039815',1,28000,0,0,0,0,0,0,0,0,0,0,0),
  // Empresa 18 — 17/03/2026 — Item 400.0400R
  quebraRow('18','2026-03-17','400.0400R','SAI','39830',1,0,52000,0,0,0,0,0,0,0,0,0,0),
  quebraRow('18','2026-03-17','400.0400R','EST','0039830',1,52000,0,0,0,0,0,0,0,0,0,0,0),
  quebraRow('18','2026-03-17','400.0400R','ENT','51400',1,0,0,28000,28000,28000,28000,0,0,0,0,0,0),
  quebraRow('18','2026-03-17','400.0400R','EST','0051400',1,0,0,0,0,0,0,0,0,0,0,0,0),
  // Empresa 20 — 17/03/2026 — Item 400.0404A
  quebraRow('20','2026-03-17','400.0404A','ENT','51459',1,0,0,0,0,0,0,0,0,0,0,3960,0),
  quebraRow('20','2026-03-17','400.0404A','EST','51459',1,0,0,0,0,0,0,0,0,0,0,0,0),
  quebraRow('20','2026-03-17','400.0404A','SAI','15250',1,0,3960,0,0,0,0,0,0,0,0,0,0),
  quebraRow('20','2026-03-17','400.0404A','SAI','15242',1,0,10240,0,0,0,0,0,0,0,0,0,0),
  // Empresa 20 — 17/03/2026 — Item 500.0017A
  quebraRow('20','2026-03-17','500.0017A','ENT','51459',2,0,0,0,0,0,0,0,0,0,0,10140,0),
  quebraRow('20','2026-03-17','500.0017A','EST','0015250',2,10140,0,0,0,0,0,0,0,0,0,0,0),
  quebraRow('20','2026-03-17','500.0017A','EST','51459',2,0,0,0,0,0,0,0,0,0,0,10140,0),
  quebraRow('20','2026-03-17','500.0017A','SAI','15250',2,0,10140,0,0,0,0,0,0,0,0,0,0),
]

const quebraColumns = [
  { key: 'cod_empresa', label: 'Empresa', sortable: true, filterable: true },
  { key: 'cod_item', label: 'Item', sortable: true, filterable: true },
  { key: 'origem', label: 'Origem', sortable: true, filterable: true },
  { key: 'dat_movto', label: 'Data Movimento', sortable: true, type: 'date' },
  { key: 'num_docum', label: 'Num Docum', sortable: true },
  { key: 'num_seq', label: 'Num Seq', sortable: true, type: 'number' },
  { key: 'saidas_estoque', label: 'Saídas Estoque', sortable: true, type: 'currency' },
  { key: 'saidas_nf', label: 'Saídas NF', sortable: true, type: 'currency' },
  { key: 'devol_estoque', label: 'Devol Estoque', sortable: true, type: 'currency' },
  { key: 'devol_nf', label: 'Devol NF', sortable: true, type: 'currency' },
  { key: 'refat_estoque', label: 'Refat Estoque', sortable: true, type: 'currency' },
  { key: 'refat_nf', label: 'Refat NF', sortable: true, type: 'currency' },
  { key: 'baixa_estoque', label: 'Baixa Estoque', sortable: true, type: 'currency' },
  { key: 'baixa_nf', label: 'Baixa NF', sortable: true, type: 'currency' },
  { key: 'rem_terc_estoque', label: 'Rem Terc Estoque', sortable: true, type: 'currency' },
  { key: 'rem_terc_nf', label: 'Rem Terc NF', sortable: true, type: 'currency' },
  { key: 'ret_terc_estoque', label: 'Ret Terc Estoque', sortable: true, type: 'currency' },
  { key: 'ret_terc_nf', label: 'Ret Terc NF', sortable: true, type: 'currency' },
]

const quebraSumCols = quebraColumns.filter(c => c.type === 'currency').map(c => c.key)

// ═══════════════════════════════════════════════
// 4. QUEBRA (fixa) — já aplicada
// ═══════════════════════════════════════════════
export const BreakdownFixed = () => ({
  components: { GenericDataGrid },
  setup() {
    return { columns: quebraColumns, data: quebraData, sumCols: quebraSumCols }
  },
  template: `
    <div class="p-4">
      <h2 class="text-lg font-bold text-gray-800 mb-1">Breakdown (fixed)</h2>
      <p class="text-xs text-gray-400 mb-3">Breakdown pre-applied by Company/Date/Item — detailed data with hierarchical subtotals.</p>
      <GenericDataGrid :columns="columns" :data="data" :page-size="100" export-filename="quebra" :group-by="['cod_empresa', 'dat_movto', 'cod_item']" :sum-columns="sumCols" group-mode="quebra" max-height="70vh" />
    </div>
  `,
})

// ═══════════════════════════════════════════════
// 5. BREAKDOWN DYNAMIC
// ═══════════════════════════════════════════════
export const BreakdownDynamic = () => ({
  components: { GenericDataGrid, SecondaryButton, DangerButton },
  setup() {
    const groupableColumns = movDevColumns.filter(c => !['number', 'currency'].includes(c.type))
    const selectedGroupBy = ref([])
    const showPanel = ref(false)

    function toggle(key) {
      const idx = selectedGroupBy.value.indexOf(key)
      if (idx >= 0) selectedGroupBy.value.splice(idx, 1)
      else selectedGroupBy.value.push(key)
    }
    function moveUp(idx) { if (idx > 0) { const a = selectedGroupBy.value; [a[idx-1], a[idx]] = [a[idx], a[idx-1]] } }
    function moveDown(idx) { const a = selectedGroupBy.value; if (idx < a.length-1) { [a[idx], a[idx+1]] = [a[idx+1], a[idx]] } }

    return { columns: movDevColumns, data: movDevData, sumCols: movDevSumCols, groupableColumns, selectedGroupBy, showPanel, toggle, moveUp, moveDown }
  },
  template: `
    <div class="p-4">
      <h2 class="text-lg font-bold text-gray-800 mb-1">Breakdown (dynamic)</h2>
      <p class="text-xs text-gray-400 mb-3">Choose grouping fields for breakdown mode.</p>
      <div class="mb-3 flex items-center gap-2">
        <SecondaryButton size="sm" @click="showPanel = !showPanel" class="!border-blue-600 !text-blue-600 hover:!bg-blue-50">
          Quebra
          <span v-if="selectedGroupBy.length" class="ml-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">{{ selectedGroupBy.length }}</span>
        </SecondaryButton>
        <DangerButton v-if="selectedGroupBy.length || showPanel" variant="outline" size="sm" @click="selectedGroupBy = []; showPanel = false">
          <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
          Limpar
        </SecondaryButton>
      </div>
      <div v-if="showPanel" class="mb-4 rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
        <p class="text-xs font-semibold text-gray-500 mb-2">Selecione os campos para agrupar:</p>
        <div class="flex flex-wrap gap-2">
          <SecondaryButton v-for="col in groupableColumns" :key="col.key" size="sm" @click="toggle(col.key)"
            :class="selectedGroupBy.includes(col.key) ? '!bg-blue-600 !text-white !border-blue-600' : ''">
            {{ col.label }} <span v-if="selectedGroupBy.includes(col.key)" class="ml-0.5 text-blue-200 font-bold">{{ selectedGroupBy.indexOf(col.key) + 1 }}</span>
          </SecondaryButton>
        </div>
        <div v-if="selectedGroupBy.length > 1" class="mt-3 flex items-center gap-2 text-xs">
          <span class="text-gray-400">Order:</span>
          <template v-for="(key, idx) in selectedGroupBy" :key="key">
            <span class="font-semibold text-blue-700">{{ groupableColumns.find(c => c.key === key)?.label }}</span>
            <button v-if="idx > 0" @click="moveUp(idx)" class="text-gray-400 hover:text-blue-600">↑</button>
            <button v-if="idx < selectedGroupBy.length - 1" @click="moveDown(idx)" class="text-gray-400 hover:text-blue-600">↓</button>
            <span v-if="idx < selectedGroupBy.length - 1" class="mx-1 text-gray-300">›</span>
          </template>
        </div>
      </div>
      <GenericDataGrid :columns="columns" :data="data" :page-size="100" export-filename="breakdown" :group-by="selectedGroupBy" :sum-columns="sumCols" group-mode="quebra" :show-group-toggle="false" max-height="70vh" />
    </div>
  `,
})

// ═══════════════════════════════════════════════
// 6. COMPLETA — Normal com botões dinâmicos
// ═══════════════════════════════════════════════
export const Complete = () => ({
  components: { GenericDataGrid, SecondaryButton, DangerButton },
  setup() {
    const groupableColumns = movDevColumns.filter(c => !['number', 'currency'].includes(c.type))
    const selectedGroupBy = ref([])
    const showGroupPanel = ref(false)
    const gridMode = ref('normal') // 'normal', 'resumo', 'quebra'

    const activeGroupBy = computed(() => gridMode.value === 'normal' ? [] : selectedGroupBy.value)
    const activeGroupMode = computed(() => gridMode.value === 'quebra' ? 'quebra' : 'resumo')

    function toggleGroupColumn(key) {
      const idx = selectedGroupBy.value.indexOf(key)
      if (idx >= 0) { selectedGroupBy.value.splice(idx, 1) }
      else { selectedGroupBy.value.push(key) }
    }
    function moveUp(idx) {
      if (idx <= 0) return
      const arr = selectedGroupBy.value
      ;[arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]]
    }
    function moveDown(idx) {
      const arr = selectedGroupBy.value
      if (idx >= arr.length - 1) return
      ;[arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]]
    }
    function clearGrouping() {
      selectedGroupBy.value = []
      gridMode.value = 'normal'
    }
    function setMode(mode) {
      if (mode === 'normal') {
        gridMode.value = 'normal'
        showGroupPanel.value = false
      } else {
        gridMode.value = mode
        if (!selectedGroupBy.value.length) {
          showGroupPanel.value = true
        }
      }
    }

    return { columns: movDevColumns, data: movDevData, sumCols: movDevSumCols, groupableColumns, selectedGroupBy, showGroupPanel, gridMode, activeGroupBy, activeGroupMode, toggleGroupColumn, moveUp, moveDown, clearGrouping, setMode }
  },
  template: `
    <div class="p-4">
      <h2 class="text-lg font-bold text-gray-800 mb-1">Complete</h2>
      <p class="text-xs text-gray-400 mb-3">Normal grid with buttons to switch between Normal, Summary and Breakdown. Dynamic grouping fields.</p>

      <div class="mb-3 flex items-center gap-3 flex-wrap">
        <!-- Mode selector -->
        <div class="inline-flex rounded-lg border border-gray-200 bg-white p-0.5">
          <SecondaryButton v-for="mode in [{ key: 'normal', label: 'Detalhado' }, { key: 'resumo', label: 'Resumo' }, { key: 'quebra', label: 'Quebra' }]"
            :key="mode.key" size="sm" @click="setMode(mode.key)"
            :class="gridMode === mode.key ? '!bg-blue-600 !text-white !border-blue-600 !shadow-sm' : '!border-transparent !shadow-none'">
            {{ mode.label }}
          </SecondaryButton>
        </div>

        <DangerButton v-if="selectedGroupBy.length || gridMode !== 'normal'" variant="outline" size="sm" @click="clearGrouping">
          <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
          Limpar
        </SecondaryButton>
      </div>

      <!-- Group fields panel -->
      <div v-if="showGroupPanel && gridMode !== 'normal'" class="mb-4 rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
        <p class="text-xs font-semibold text-gray-500 mb-2">Selecione os campos para agrupar (clique para adicionar/remover):</p>
        <div class="flex flex-wrap gap-2">
          <SecondaryButton v-for="col in groupableColumns" :key="col.key" size="sm" @click="toggleGroupColumn(col.key)"
            :class="selectedGroupBy.includes(col.key) ? '!bg-blue-600 !text-white !border-blue-600' : ''">
            {{ col.label }}
            <span v-if="selectedGroupBy.includes(col.key)" class="ml-0.5 text-blue-200 font-bold">{{ selectedGroupBy.indexOf(col.key) + 1 }}</span>
          </SecondaryButton>
        </div>
        <div v-if="selectedGroupBy.length > 1" class="mt-3 flex items-center gap-2">
          <span class="text-xs text-gray-400">Order:</span>
          <div v-for="(key, idx) in selectedGroupBy" :key="key" class="inline-flex items-center gap-0.5 text-xs">
            <span class="font-semibold text-blue-700">{{ groupableColumns.find(c => c.key === key)?.label }}</span>
            <button v-if="idx > 0" @click="moveUp(idx)" class="text-gray-400 hover:text-blue-600">↑</button>
            <button v-if="idx < selectedGroupBy.length - 1" @click="moveDown(idx)" class="text-gray-400 hover:text-blue-600">↓</button>
            <span v-if="idx < selectedGroupBy.length - 1" class="mx-1 text-gray-300">›</span>
          </div>
        </div>
      </div>

      <GenericDataGrid
        :columns="columns"
        :data="data"
        :page-size="100"
        export-filename="mov-dev-terceiros"
        :group-by="activeGroupBy"
        :sum-columns="sumCols"
        :group-mode="activeGroupMode"
        :show-group-toggle="false"
        max-height="70vh"
      />
    </div>
  `,
})

// ── Dados Packing List (master-detail) ──
const packingMasterColumns = [
  { key: 'cod_empresa', label: 'Empresa', sortable: true, align: 'center' },
  { key: 'processo', label: 'Processo', sortable: true, align: 'center' },
  { key: 'ano', label: 'Ano', sortable: true, align: 'center' },
  { key: 'embarque', label: 'Embarque', sortable: true, align: 'center' },
  { key: 'num_pedido', label: 'Num Pedido', sortable: true, align: 'center' },
  { key: 'cod_item', label: 'Cód Item', sortable: true, align: 'center' },
  { key: 'acoes', label: 'Ações', sortable: false, filterable: false, align: 'center', width: '110px' },
]

const packingMasterData = [
  { id: 1, cod_empresa: '28', processo: '6', ano: '2026', embarque: 'B', num_pedido: '34253', cod_item: 'EXP.0230I' },
  { id: 2, cod_empresa: '01', processo: '59', ano: '2026', embarque: 'A', num_pedido: '284799', cod_item: 'EXP.0712J' },
  { id: 3, cod_empresa: '01', processo: '59', ano: '2026', embarque: 'B', num_pedido: '284800', cod_item: 'EXP.0712J' },
  { id: 4, cod_empresa: '01', processo: '52', ano: '2026', embarque: 'A', num_pedido: '284689', cod_item: 'EXP.0712J' },
]

const packingDetails = {
  1: [
    { id: 101, production_date: '2026-01-29', date_expiry: '2027-01-29', cartons: 149, net_weight: 1490, gross_weight: 0, lots: '', palete: '' },
    { id: 102, production_date: '2026-01-30', date_expiry: '2027-01-30', cartons: 1795, net_weight: 17950, gross_weight: 0, lots: '', palete: '' },
    { id: 103, production_date: '2026-02-02', date_expiry: '2027-02-02', cartons: 856, net_weight: 8560, gross_weight: 0, lots: '', palete: '' },
  ],
  2: [
    { id: 201, production_date: '2026-02-10', date_expiry: '2027-02-10', cartons: 500, net_weight: 5000, gross_weight: 100, lots: 'L001', palete: 'P1' },
  ],
  3: [],
  4: [
    { id: 401, production_date: '2026-03-01', date_expiry: '2027-03-01', cartons: 200, net_weight: 2000, gross_weight: 50, lots: 'L010', palete: 'P3' },
    { id: 402, production_date: '2026-03-05', date_expiry: '2027-03-05', cartons: 300, net_weight: 3000, gross_weight: 75, lots: 'L011', palete: 'P4' },
  ],
}

export const Expandable = () => ({
  components: { GenericDataGrid },
  setup() {
    const expandedId = ref(null)
    const details = ref([])

    function handleExpand(id) {
      if (id === null) {
        expandedId.value = null
        details.value = []
        return
      }
      expandedId.value = id
      details.value = packingDetails[id] || []
    }

    function formatDate(val) {
      if (!val) return ''
      const [y, m, d] = val.substring(0, 10).split('-')
      return `${d}/${m}/${y}`
    }

    return { columns: packingMasterColumns, data: packingMasterData, expandedId, details, handleExpand, formatDate }
  },
  template: `
    <div class="p-4">
      <h2 class="text-lg font-bold text-gray-800 mb-1">Expandable (Master-Detail)</h2>
      <p class="text-xs text-gray-400 mb-3">Grid with expandable rows for master-detail pattern (e.g. Packing List).</p>

      <GenericDataGrid
        :columns="columns"
        :data="data"
        :page-size="25"
        :show-excel="false"
        :show-expand="false"
        :expandable="true"
        :expanded-row-id="expandedId"
        row-key="id"
        export-filename="packing-list"
        @row-expand="handleExpand"
      >
        <template #toolbar-right>
          <button class="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-white shadow-[0_4px_14px_0_rgba(9,63,135,0.35)] transition-all duration-200 hover:-translate-y-px hover:brightness-110" style="background: linear-gradient(135deg, #093F87 0%, #0B56B3 100%)">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            Novo
          </button>
        </template>

        <template #cell-acoes="{ row, toggleExpand }">
          <div class="flex items-center justify-center gap-1">
            <button @click.stop="toggleExpand()" class="p-1.5 rounded-lg transition-colors" :class="expandedId === row.id ? 'text-blue-600 bg-blue-50' : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'" title="Ver itens">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" /></svg>
            </button>
            <button class="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors" title="Editar">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>
            </button>
            <button class="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors" title="Excluir">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
            </button>
          </div>
        </template>

        <template #expanded-row="{ row, close }">
          <div class="flex items-center justify-between mb-3">
            <div>
              <h3 class="text-sm font-semibold text-gray-700">Itens do Packing List</h3>
              <p class="text-xs text-gray-400 mt-0.5">Pedido {{ row.num_pedido }} · {{ row.cod_item }}</p>
            </div>
            <div class="flex items-center gap-2">
              <button class="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-white" style="background: linear-gradient(135deg, #093F87 0%, #0B56B3 100%)">
                <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                Novo Item
              </button>
              <button @click="close" class="inline-flex items-center rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50">Fechar</button>
            </div>
          </div>

          <div v-if="details.length === 0" class="text-center py-4 text-sm text-gray-400">
            Nenhum item cadastrado.
          </div>

          <div v-else class="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table class="min-w-full text-xs">
              <thead>
                <tr style="background: linear-gradient(180deg, #0B56B3 0%, #093F87 100%);" class="text-white">
                  <th class="px-3 py-2 text-center text-[11px] uppercase tracking-wider font-semibold">Data Produção</th>
                  <th class="px-3 py-2 text-center text-[11px] uppercase tracking-wider font-semibold">Data Expiração</th>
                  <th class="px-3 py-2 text-right text-[11px] uppercase tracking-wider font-semibold">Caixas</th>
                  <th class="px-3 py-2 text-right text-[11px] uppercase tracking-wider font-semibold">Peso Líquido</th>
                  <th class="px-3 py-2 text-right text-[11px] uppercase tracking-wider font-semibold">Peso Bruto</th>
                  <th class="px-3 py-2 text-left text-[11px] uppercase tracking-wider font-semibold">Lotes</th>
                  <th class="px-3 py-2 text-left text-[11px] uppercase tracking-wider font-semibold">Palete</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100/80">
                <tr v-for="(d, idx) in details" :key="d.id" :class="idx % 2 === 0 ? 'bg-white hover:bg-blue-100/50' : 'bg-slate-50/70 hover:bg-blue-100/50'">
                  <td class="px-3 py-2 text-center">{{ formatDate(d.production_date) }}</td>
                  <td class="px-3 py-2 text-center">{{ formatDate(d.date_expiry) }}</td>
                  <td class="px-3 py-2 text-right">{{ Number(d.cartons).toLocaleString('pt-BR') }}</td>
                  <td class="px-3 py-2 text-right">{{ Number(d.net_weight).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) }}</td>
                  <td class="px-3 py-2 text-right">{{ Number(d.gross_weight).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) }}</td>
                  <td class="px-3 py-2">{{ d.lots || '—' }}</td>
                  <td class="px-3 py-2">{{ d.palete || '—' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </GenericDataGrid>
    </div>
  `,
})

export const Empty = () => ({
  components: { GenericDataGrid },
  setup() {
    return { columns: movDevColumns, data: [] }
  },
  template: `
    <div class="p-4">
      <GenericDataGrid :columns="columns" :data="data" export-filename="vazio" />
    </div>
  `,
})
