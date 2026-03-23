<script setup>
import { ref, computed, watch } from 'vue'
import SecondaryButton from './SecondaryButton.vue'
import SuccessButton from './SuccessButton.vue'
import {
  ArrowUpIcon,
  ArrowDownIcon,
  FunnelIcon,
  XMarkIcon,
  TableCellsIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/vue/24/solid'

const props = defineProps({
  columns: { type: Array, required: true },
  data: { type: Array, required: true },
  pageSize: { type: Number, default: 25 },
  exportFilename: { type: String, default: 'relatorio' },
  selectable: { type: Boolean, default: false },
  groupBy: { type: Array, default: () => [] },
  sumColumns: { type: Array, default: () => [] },
  groupMode: { type: String, default: 'resumo' }, // 'resumo' ou 'quebra'
  maxHeight: { type: String, default: '' },
})

const emit = defineEmits(['update:selected'])

// Highlight row on click
const highlightedRow = ref(-1)

// Selection state
const selectedSet = ref(new Set())
const selectAllChecked = ref(false)

function toggleSelectAll() {
  if (selectAllChecked.value) {
    selectedSet.value = new Set(sortedData.value.map((_, i) => i))
  } else {
    selectedSet.value = new Set()
  }
  emitSelected()
}

function toggleRow(index) {
  const globalIndex = (currentPage.value - 1) * perPage.value + index
  const s = new Set(selectedSet.value)
  if (s.has(globalIndex)) {
    s.delete(globalIndex)
  } else {
    s.add(globalIndex)
  }
  selectedSet.value = s
  selectAllChecked.value = s.size === sortedData.value.length
  emitSelected()
}

function isRowSelected(index) {
  const globalIndex = (currentPage.value - 1) * perPage.value + index
  return selectedSet.value.has(globalIndex)
}

function emitSelected() {
  const rows = [...selectedSet.value].sort().map(i => sortedData.value[i]).filter(Boolean)
  emit('update:selected', rows)
}

watch(() => props.data, () => {
  selectedSet.value = new Set()
  selectAllChecked.value = false
  emitSelected()
})

// Sort state
const sortKey = ref('')
const sortOrder = ref('asc')

// Column filters
const columnFilters = ref({})
const showFilters = ref(false)

// Pagination
const currentPage = ref(1)
const perPage = ref(props.pageSize)

// Initialize column filters
props.columns.forEach(col => {
  if (col.filterable !== false) {
    columnFilters.value[col.key] = ''
  }
})

watch(() => props.data, () => { currentPage.value = 1 })
watch(columnFilters, () => { currentPage.value = 1 }, { deep: true })

// Filtered data
const filteredData = computed(() => {
  let result = props.data

  for (const [key, value] of Object.entries(columnFilters.value)) {
    if (!value) continue
    const term = value.toLowerCase()
    const col = props.columns.find(c => c.key === key)
    result = result.filter(row => {
      const cell = row[key]
      if (cell == null) return false
      const display = col?.filterMap?.[cell] ?? String(cell)
      return display.toLowerCase().includes(term)
    })
  }

  return result
})

// Sorted data
const sortedData = computed(() => {
  if (!sortKey.value) return filteredData.value

  const col = props.columns.find(c => c.key === sortKey.value)
  const type = col?.type || 'text'

  return [...filteredData.value].sort((a, b) => {
    let va = a[sortKey.value]
    let vb = b[sortKey.value]
    if (va == null) va = ''
    if (vb == null) vb = ''

    let cmp = 0
    if (type === 'number' || type === 'currency') {
      cmp = (parseFloat(va) || 0) - (parseFloat(vb) || 0)
    } else if (type === 'date') {
      cmp = new Date(va || 0) - new Date(vb || 0)
    } else {
      cmp = String(va).localeCompare(String(vb), 'pt-BR', { sensitivity: 'base' })
    }

    return sortOrder.value === 'desc' ? -cmp : cmp
  })
})

// Pagination
const totalPages = computed(() => Math.max(1, Math.ceil(sortedData.value.length / perPage.value)))

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  return sortedData.value.slice(start, start + perPage.value)
})

const visiblePages = computed(() => {
  const pages = []
  const total = totalPages.value
  const cur = currentPage.value

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i)
  } else {
    pages.push(1)
    if (cur > 3) pages.push('...')
    for (let i = Math.max(2, cur - 1); i <= Math.min(total - 1, cur + 1); i++) pages.push(i)
    if (cur < total - 2) pages.push('...')
    pages.push(total)
  }

  return pages
})

// Sort
function toggleSort(key) {
  const col = props.columns.find(c => c.key === key)
  if (!col?.sortable) return

  if (sortKey.value === key) {
    if (sortOrder.value === 'asc') {
      sortOrder.value = 'desc'
    } else {
      sortKey.value = ''
      sortOrder.value = 'asc'
    }
  } else {
    sortKey.value = key
    sortOrder.value = 'asc'
  }
}

// Format
function formatCell(value, col) {
  if (value == null || value === '') return '—'

  switch (col.type) {
    case 'date':
      try {
        const d = new Date(value)
        if (isNaN(d)) return value
        return d.toLocaleDateString('pt-BR')
      } catch {
        return value
      }
    case 'number':
      return Number(value).toLocaleString('pt-BR')
    case 'currency':
      return Number(value).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    default:
      return String(value).trim()
  }
}

function cellAlign(col) {
  if (col.align) return `text-${col.align}`
  if (col.type === 'number' || col.type === 'currency') return 'text-right'
  return 'text-left'
}

function quebraColWidth(col) {
  if (col.width) return col.width
  if (col.type === 'currency') return '120px'
  if (col.type === 'number') return '80px'
  if (col.type === 'date') return '110px'
  return '100px'
}

// Fullscreen in new tab
function openFullscreen() {
  const cols = props.columns
  const rows = sortedData.value

  const dataJson = JSON.stringify(rows.map(row =>
    cols.reduce((obj, col) => { obj[col.key] = row[col.key]; return obj }, {})
  ))
  const colsJson = JSON.stringify(cols.map(col => ({
    key: col.key, label: col.label, type: col.type || 'text', align: col.align || '', sortable: !!col.sortable
  })))
  const groupByJson = JSON.stringify(props.groupBy)
  const sumColumnsJson = JSON.stringify(props.sumColumns)
  const currentGroupMode = groupingActive.value ? props.groupMode : 'normal'

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>${props.exportFilename} — Visualização expandida</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:Inter,system-ui,sans-serif;font-size:12px;color:#374151;padding:16px;background:#f3f4f6;overflow:auto;scrollbar-width:auto}
  body::-webkit-scrollbar{width:12px;height:12px}
  body::-webkit-scrollbar-track{background:#e5e7eb}
  body::-webkit-scrollbar-thumb{background:#9ca3af}
  body::-webkit-scrollbar-thumb:hover{background:#6b7280}
  body::-webkit-scrollbar-corner{background:#e5e7eb}
  body::-webkit-scrollbar-button:single-button:vertical:decrement{display:block;height:14px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M5 0l5 6H0z' fill='%23666'/%3E%3C/svg%3E") no-repeat center center #e5e7eb}
  body::-webkit-scrollbar-button:single-button:vertical:decrement:hover{background-color:#d1d5db}
  body::-webkit-scrollbar-button:single-button:vertical:increment{display:block;height:14px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0h10L5 6z' fill='%23666'/%3E%3C/svg%3E") no-repeat center center #e5e7eb}
  body::-webkit-scrollbar-button:single-button:vertical:increment:hover{background-color:#d1d5db}
  body::-webkit-scrollbar-button:single-button:horizontal:decrement{display:block;width:14px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='10'%3E%3Cpath d='M6 0v10L0 5z' fill='%23666'/%3E%3C/svg%3E") no-repeat center center #e5e7eb}
  body::-webkit-scrollbar-button:single-button:horizontal:decrement:hover{background-color:#d1d5db}
  body::-webkit-scrollbar-button:single-button:horizontal:increment{display:block;width:14px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='10'%3E%3Cpath d='M0 0v10l6-5z' fill='%23666'/%3E%3C/svg%3E") no-repeat center center #e5e7eb}
  body::-webkit-scrollbar-button:single-button:horizontal:increment:hover{background-color:#d1d5db}
  .toolbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px}
  .toolbar .left{font-size:13px;color:#6b7280}
  .toolbar .left b{color:#111827;font-weight:600}
  .toolbar .right{display:flex;align-items:center;gap:8px}
  .btn{padding:6px 14px;font-size:12px;font-weight:600;border:1px solid #d1d5db;border-radius:8px;background:#fff;color:#374151;cursor:pointer;transition:all .2s;box-shadow:0 2px 6px rgba(0,0,0,0.06)}
  .btn:hover{background:#f0f5ff;border-color:#93c5fd;color:#1d4ed8;box-shadow:0 3px 10px rgba(29,78,216,0.12)}
  .btn-excel{background:linear-gradient(135deg,#047857 0%,#059669 100%);color:#fff;border-color:#047857;font-weight:600;box-shadow:0 4px 14px rgba(4,120,87,0.35)}
  .btn-excel:hover{filter:brightness(1.1);box-shadow:0 4px 14px rgba(4,120,87,0.45)}
  .btn-sair{background:linear-gradient(135deg,#DC2626 0%,#B91C1C 100%);color:#fff;border-color:#DC2626;font-weight:600;box-shadow:0 4px 14px rgba(220,38,38,0.35)}
  .btn-sair:hover{transform:translateY(-1px);filter:brightness(1.1);box-shadow:0 4px 14px rgba(220,38,38,0.45)}
  .table-wrap{overflow:visible;border-radius:12px;border:1px solid #e5e7eb;box-shadow:0 1px 3px rgba(0,0,0,0.06)}
  .table-wrap thead{position:sticky;top:0;z-index:1}
  .table-wrap::-webkit-scrollbar{width:12px;height:12px}
  .table-wrap::-webkit-scrollbar-track{background:#e5e7eb}
  .table-wrap::-webkit-scrollbar-thumb{background:#9ca3af}
  .table-wrap::-webkit-scrollbar-thumb:hover{background:#6b7280}
  .table-wrap::-webkit-scrollbar-corner{background:#e5e7eb}
  .table-wrap::-webkit-scrollbar-button:single-button:vertical:decrement{display:block;height:14px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M5 0l5 6H0z' fill='%23666'/%3E%3C/svg%3E") no-repeat center center #e5e7eb}
  .table-wrap::-webkit-scrollbar-button:single-button:vertical:decrement:hover{background-color:#d1d5db}
  .table-wrap::-webkit-scrollbar-button:single-button:vertical:increment{display:block;height:14px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0h10L5 6z' fill='%23666'/%3E%3C/svg%3E") no-repeat center center #e5e7eb}
  .table-wrap::-webkit-scrollbar-button:single-button:vertical:increment:hover{background-color:#d1d5db}
  .table-wrap::-webkit-scrollbar-button:single-button:horizontal:decrement{display:block;width:14px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='10'%3E%3Cpath d='M6 0v10L0 5z' fill='%23666'/%3E%3C/svg%3E") no-repeat center center #e5e7eb}
  .table-wrap::-webkit-scrollbar-button:single-button:horizontal:decrement:hover{background-color:#d1d5db}
  .table-wrap::-webkit-scrollbar-button:single-button:horizontal:increment{display:block;width:14px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='10'%3E%3Cpath d='M0 0v10l6-5z' fill='%23666'/%3E%3C/svg%3E") no-repeat center center #e5e7eb}
  .table-wrap::-webkit-scrollbar-button:single-button:horizontal:increment:hover{background-color:#d1d5db}
  table{min-width:100%;border-collapse:collapse;background:#fff;width:max-content}
  thead tr{background:linear-gradient(180deg,#0B56B3 0%,#093F87 100%);color:#fff}
  thead th{padding:10px 12px;white-space:nowrap;font-weight:600;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;user-select:none}
  thead th.sortable{cursor:pointer;transition:background .15s}
  thead th.sortable:hover{background:rgba(255,255,255,0.1)}
  .sort-arrow{display:inline-flex;margin-left:6px;opacity:0.25;vertical-align:middle}
  .sort-arrow.active{opacity:1;filter:drop-shadow(0 0 4px rgba(255,255,255,0.5))}
  .sort-arrow svg{width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}
  tbody tr{transition:background .15s}
  tbody tr:hover{background:#bfdbfe !important}
  td{padding:8px 12px;white-space:nowrap;border-bottom:1px solid rgba(243,244,246,0.8)}
  .pagination{display:flex;align-items:center;justify-content:space-between;margin-top:16px;flex-wrap:wrap;gap:8px}
  .pagination .page-size{display:flex;align-items:center;gap:6px;font-size:12px;color:#6b7280}
  .pg-select{padding:4px 24px 4px 10px;font-size:12px;font-weight:600;border:1px solid #e5e7eb;border-radius:8px;background:#fff;color:#374151;cursor:pointer}
  .pg-nav{display:inline-flex;align-items:center;gap:4px;border:1px solid #e5e7eb;border-radius:8px;background:#fff;padding:4px}
  .pg-btn{padding:4px 10px;font-size:12px;font-weight:600;border:none;border-radius:6px;background:transparent;color:#4b5563;cursor:pointer;min-width:32px;text-align:center;transition:all .15s}
  .pg-btn:hover:not(:disabled):not(.active){background:#f3f4f6;color:#1f2937}
  .pg-btn.active{background:linear-gradient(180deg,#0B56B3 0%,#093F87 100%);color:#fff;box-shadow:0 1px 3px rgba(9,63,135,0.3)}
  .pg-btn:disabled{opacity:.35;cursor:default}
  @media print{.toolbar,.pagination{display:none}body{padding:0;background:#fff}.table-wrap{border:none;box-shadow:none;border-radius:0}}
</style>
<script src="https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js"><\/script>
</head>
<body>
<div class="toolbar">
  <span class="left"><b id="countDisplay">0</b> registro(s)</span>
  <div class="right">
    <button class="btn btn-excel" onclick="exportExcel()">Excel</button>
    <button class="btn" onclick="window.print()">Imprimir</button>
    <button class="btn btn-sair" onclick="window.close()">Sair</button>
  </div>
</div>
<div class="table-wrap">
  <table>
    <thead><tr id="tableHead"></tr></thead>
    <tbody id="tableBody"></tbody>
  </table>
</div>
<div class="pagination" id="paginationBar">
  <div class="page-size">
    <span>Exibir</span>
    <select class="pg-select" id="pageSizeSelect" onchange="changePageSize()">
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="100">100</option>
      <option value="0">Todos</option>
    </select>
    <span>por página</span>
  </div>
  <nav class="pg-nav" id="pageButtons"></nav>
</div>
<script>
var DATA=${dataJson};
var COLS=${colsJson};
var GROUP_BY=${groupByJson};
var SUM_COLS=${sumColumnsJson};
var GROUP_MODE='${currentGroupMode}';
var currentPage=1;
var pageSize=0;
var filename='${props.exportFilename}';
var sortKey='';
var sortOrder='asc';

function formatCell(v,col){
  if(v==null||v==='')return '—';
  if(col.type==='date'){try{var d=new Date(v);return isNaN(d)?v:d.toLocaleDateString('pt-BR')}catch(e){return v}}
  if(col.type==='number')return Number(v).toLocaleString('pt-BR');
  if(col.type==='currency')return Number(v).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
  return String(v).trim();
}
function getAlign(col){
  if(col.align)return 'text-align:'+col.align;
  return(col.type==='number'||col.type==='currency')?'text-align:right':'text-align:left';
}
function toggleSort(key){
  var col=COLS.find(function(c){return c.key===key});
  if(!col||!col.sortable)return;
  if(sortKey===key){if(sortOrder==='asc')sortOrder='desc';else{sortKey='';sortOrder='asc'}}
  else{sortKey=key;sortOrder='asc'}
  sortData();currentPage=1;renderHead();render();
}
function sortData(){
  if(!sortKey){return}
  var col=COLS.find(function(c){return c.key===sortKey});
  var type=col?col.type:'text';
  DATA.sort(function(a,b){
    var va=a[sortKey],vb=b[sortKey];
    if(va==null)va='';if(vb==null)vb='';
    var cmp=0;
    if(type==='number'||type==='currency')cmp=(parseFloat(va)||0)-(parseFloat(vb)||0);
    else if(type==='date')cmp=new Date(va||0)-new Date(vb||0);
    else cmp=String(va).localeCompare(String(vb),'pt-BR',{sensitivity:'base'});
    return sortOrder==='desc'?-cmp:cmp;
  });
}
function buildGroupedRows(data){
  if(!GROUP_BY.length||GROUP_MODE==='normal')return null;
  var rows=[],levels=GROUP_BY.length;
  var sorted=data.slice().sort(function(a,b){
    for(var i=0;i<GROUP_BY.length;i++){
      var va=String(a[GROUP_BY[i]]||''),vb=String(b[GROUP_BY[i]]||'');
      var c=va.localeCompare(vb,'pt-BR',{sensitivity:'base'});
      if(c!==0)return c;
    }return 0;
  });
  var curKeys=new Array(levels).fill(null);
  var lvlSums=[];for(var i=0;i<levels;i++){var s={};SUM_COLS.forEach(function(k){s[k]=0});lvlSums.push(s)}
  var lvlVals=[];for(var i=0;i<levels;i++)lvlVals.push({});
  var grand={};SUM_COLS.forEach(function(k){grand[k]=0});
  function emitSub(from){
    for(var lv=levels-1;lv>=from;lv--){
      if(curKeys[lv]!==null){
        var gv={};for(var j=0;j<=lv;j++)Object.assign(gv,lvlVals[j]);
        rows.push({_type:'subtotal',_level:lv,_groupKeys:GROUP_BY.slice(0,lv+1),_groupValues:gv,_sums:Object.assign({},lvlSums[lv])});
      }
    }
  }
  for(var ri=0;ri<sorted.length;ri++){
    var row=sorted[ri],changed=-1;
    for(var lv=0;lv<levels;lv++){if(String(row[GROUP_BY[lv]]||'')!==curKeys[lv]){changed=lv;break}}
    var first=changed>=0;
    if(changed>=0){
      emitSub(changed);
      for(var lv=changed;lv<levels;lv++){
        curKeys[lv]=String(row[GROUP_BY[lv]]||'');
        var o={};o[GROUP_BY[lv]]=row[GROUP_BY[lv]];lvlVals[lv]=o;
        var s={};SUM_COLS.forEach(function(k){s[k]=0});lvlSums[lv]=s;
      }
      if(GROUP_MODE==='quebra'){
        for(var lv=changed;lv<levels;lv++){
          rows.push({_type:'group_header',_level:lv,_key:GROUP_BY[lv],_label:row[GROUP_BY[lv]]});
        }
        rows.push({_type:'column_header'});
      }
    }
    rows.push({_type:'data',_first:first,_row:row});
    SUM_COLS.forEach(function(k){
      var v=parseFloat(row[k])||0;
      for(var lv=0;lv<levels;lv++)lvlSums[lv][k]+=v;
      grand[k]+=v;
    });
  }
  emitSub(0);
  rows.push({_type:'grand_total',_sums:grand});
  return rows;
}
function renderHead(){
  if(GROUP_MODE==='quebra'&&GROUP_BY.length){document.getElementById('tableHead').innerHTML='';return}
  document.getElementById('tableHead').innerHTML=COLS.map(function(c){
    var cls=c.sortable?' class="sortable" onclick="toggleSort(\\''+c.key+'\\')"':'';
    var arrow='';
    var svgUp='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"/></svg>';
    var svgDown='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"/></svg>';
    if(c.sortable){
      if(sortKey===c.key){arrow='<span class="sort-arrow active">'+(sortOrder==='asc'?svgUp:svgDown)+'</span>'}
      else{arrow='<span class="sort-arrow">'+svgUp+'</span>'}
    }
    return '<th'+cls+' style="'+getAlign(c)+'">'+c.label+arrow+'</th>'
  }).join('');
}
function render(){
  var total=DATA.length;
  document.getElementById('countDisplay').textContent=total;
  var grouped=buildGroupedRows(DATA);
  if(grouped){
    renderGrouped(grouped);
  } else {
    var start=pageSize>0?(currentPage-1)*pageSize:0;
    var end=pageSize>0?Math.min(start+pageSize,total):total;
    var slice=DATA.slice(start,end);
    document.getElementById('tableBody').innerHTML=slice.map(function(row,i){
      var bg=i%2===0?'#fff':'#edf2f7';
      return '<tr style="background:'+bg+'">'+COLS.map(function(c){return '<td style="'+getAlign(c)+'">'+formatCell(row[c.key],c)+'</td>'}).join('')+'</tr>';
    }).join('');
  }
  renderPagination(total);
}
function renderGrouped(rows){
  var html='';
  var isQuebra=GROUP_MODE==='quebra';
  for(var i=0;i<rows.length;i++){
    var r=rows[i];
    if(r._type==='group_header'){
      var col=COLS.find(function(c){return c.key===r._key});
      var label=col?col.label:r._key;
      var val=col?formatCell(r._label,col):r._label;
      html+='<tr><td colspan="'+COLS.length+'" style="padding:8px 12px;padding-left:'+(r._level*24+12)+'px;font-weight:600;font-size:12px;color:#475569;background:#fff;border-top:1px solid #e2e8f0"><span style="color:#94a3b8">'+label+':</span> <span style="color:#1e293b">'+val+'</span></td></tr>';
    } else if(r._type==='column_header'){
      html+='<tr style="background:linear-gradient(180deg,#0B56B3 0%,#093F87 100%);color:#fff">'+COLS.map(function(c){return '<th style="padding:8px 12px;white-space:nowrap;font-weight:600;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;'+getAlign(c)+'">'+c.label+'</th>'}).join('')+'</tr>';
    } else if(r._type==='data'){
      var bg=i%2===0?'#fff':'#edf2f7';
      var row=r._row;
      html+='<tr style="background:'+bg+'">'+COLS.map(function(c){
        var val=formatCell(row[c.key],c);
        if(!isQuebra&&GROUP_BY.indexOf(c.key)>=0){
          if(r._first){val='<span style="color:#1d4ed8;font-weight:600">'+val+'</span>'}
          else{val='<span style="color:transparent">'+val+'</span>'}
        }
        return '<td style="'+getAlign(c)+'">'+val+'</td>';
      }).join('')+'</tr>';
    } else if(r._type==='subtotal'){
      var lvl=r._level,maxLvl=GROUP_BY.length-1;
      var bg,color;
      if(lvl===0){bg='rgba(37,99,235,0.9)';color='#fff'}
      else if(lvl===1){bg='rgba(191,219,254,0.8)';color='#111827'}
      else{bg='#eff6ff';color='#374151'}
      html+='<tr style="background:'+bg+';color:'+color+';font-weight:600;border-top:1px solid rgba(59,130,246,0.3)">';
      html+=COLS.map(function(c,ci){
        var val='';
        if(ci===0){val=(lvl===maxLvl?'Subtotal':'Total')+' '+(COLS.find(function(x){return x.key===r._groupKeys[lvl]})||{}).label}
        else if(SUM_COLS.indexOf(c.key)>=0){val=formatCell(r._sums[c.key],c)}
        return '<td style="'+getAlign(c)+'">'+val+'</td>';
      }).join('');
      html+='</tr>';
    } else if(r._type==='grand_total'){
      html+='<tr style="background:linear-gradient(180deg,#0B56B3 0%,#093F87 100%);color:#fff;font-weight:700">';
      html+=COLS.map(function(c,ci){
        var val='';
        if(ci===0)val='TOTAL GERAL';
        else if(SUM_COLS.indexOf(c.key)>=0)val=formatCell(r._sums[c.key],c);
        return '<td style="'+getAlign(c)+'">'+val+'</td>';
      }).join('');
      html+='</tr>';
    }
  }
  document.getElementById('tableBody').innerHTML=html;
}
function renderPagination(total){
  var bar=document.getElementById('paginationBar');
  if(GROUP_MODE!=='normal'){bar.style.display='none';return}
  if(pageSize===0||total<=pageSize){bar.style.display='none';return}
  bar.style.display='flex';
  var totalPages=Math.ceil(total/pageSize);
  var btns='';
  btns+='<button class="pg-btn" onclick="goTo('+(currentPage-1)+')"'+(currentPage<=1?' disabled':'')+'>&laquo;</button>';
  var pages=[];
  if(totalPages<=7){for(var i=1;i<=totalPages;i++)pages.push(i)}
  else{pages.push(1);if(currentPage>3)pages.push('...');for(var i=Math.max(2,currentPage-1);i<=Math.min(totalPages-1,currentPage+1);i++)pages.push(i);if(currentPage<totalPages-2)pages.push('...');pages.push(totalPages)}
  for(var j=0;j<pages.length;j++){var p=pages[j];if(p==='...')btns+='<span style="padding:4px 2px;color:#9ca3af">...</span>';else btns+='<button class="pg-btn'+(p===currentPage?' active':'')+'" onclick="goTo('+p+')">'+p+'</button>'}
  btns+='<button class="pg-btn" onclick="goTo('+(currentPage+1)+')"'+(currentPage>=totalPages?' disabled':'')+'>&raquo;</button>';
  document.getElementById('pageButtons').innerHTML=btns;
}
function goTo(p){var tp=pageSize>0?Math.ceil(DATA.length/pageSize):1;if(p>=1&&p<=tp){currentPage=p;render()}}
function changePageSize(){pageSize=parseInt(document.getElementById('pageSizeSelect').value);currentPage=1;render()}
function exportExcel(){
  var wb=XLSX.utils.table_to_book(document.querySelector('table'),{sheet:'Dados'});
  XLSX.writeFile(wb,filename+'_'+new Date().toISOString().slice(0,10)+'.xlsx');
}
renderHead();render();
<\/script>
</body>
</html>`

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  window.open(url, '_blank')
}

// Export Excel (requires xlsx to be available globally or installed)
function exportExcel() {
  const XLSX = window.XLSX
  if (!XLSX) {
    // Fallback: open fullscreen view which has CDN xlsx
    openFullscreen()
    return
  }

  const headers = props.columns.map(c => c.label)
  const rows = sortedData.value.map(row =>
    props.columns.map(col => {
      const val = row[col.key]
      if (val == null) return ''
      if (col.type === 'number' || col.type === 'currency') return Number(val) || 0
      return String(val).trim()
    })
  )

  const ws = XLSX.utils.aoa_to_sheet([headers, ...rows])

  const colWidths = props.columns.map((col, i) => {
    const maxLen = Math.max(
      col.label.length,
      ...rows.map(r => String(r[i]).length)
    )
    return { wch: Math.min(maxLen + 2, 40) }
  })
  ws['!cols'] = colWidths

  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, 'Dados')
  XLSX.writeFile(wb, `${props.exportFilename}_${new Date().toISOString().slice(0, 10)}.xlsx`)
}

// ── Grouping (quebra) ──
const groupingActive = ref(props.groupBy.length > 0)
const hasGrouping = computed(() => props.groupBy.length > 0)
const collapsedGroups = ref(new Set())

function toggleCollapse(groupId) {
  const s = new Set(collapsedGroups.value)
  if (s.has(groupId)) s.delete(groupId)
  else s.add(groupId)
  collapsedGroups.value = s
}

function isCollapsed(groupId) {
  return collapsedGroups.value.has(groupId)
}

watch(groupingActive, () => { currentPage.value = 1 })
watch(() => props.groupBy, (val) => {
  groupingActive.value = val.length > 0
  currentPage.value = 1
}, { deep: true })

const groupedDisplayData = computed(() => {
  if (!groupingActive.value || !hasGrouping.value) return null

  const data = sortedData.value
  if (!data.length) return null

  const rows = []
  const groupKeys = props.groupBy
  const sumCols = props.sumColumns
  const levels = groupKeys.length

  // Sort data by group keys first
  const sorted = [...data].sort((a, b) => {
    for (const key of groupKeys) {
      const va = a[key] ?? ''
      const vb = b[key] ?? ''
      const cmp = String(va).localeCompare(String(vb), 'pt-BR', { sensitivity: 'base' })
      if (cmp !== 0) return cmp
    }
    return 0
  })

  // Track current group key at each level and their sums
  const currentKeys = new Array(levels).fill(null)
  const levelSums = Array.from({ length: levels }, () => {
    const s = {}; sumCols.forEach(k => { s[k] = 0 }); return s
  })
  const levelValues = Array.from({ length: levels }, () => ({}))
  const grandTotals = {}
  sumCols.forEach(k => { grandTotals[k] = 0 })

  function emitSubtotals(fromLevel) {
    // Emit subtotals from deepest changed level up to fromLevel
    for (let lv = levels - 1; lv >= fromLevel; lv--) {
      if (currentKeys[lv] !== null) {
        const gv = {}
        for (let j = 0; j <= lv; j++) {
          Object.assign(gv, levelValues[j])
        }
        const _ancestorIds = []
        for (let j = 0; j <= lv; j++) {
          _ancestorIds.push(groupKeys.slice(0, j + 1).map((k, idx) => gv[k] ?? currentKeys[idx] ?? '').join('|'))
        }
        rows.push({
          _type: 'subtotal',
          _level: lv,
          _groupKeys: groupKeys.slice(0, lv + 1),
          _groupValues: gv,
          _sums: { ...levelSums[lv] },
          _ancestorIds,
        })
      }
    }
  }

  for (const row of sorted) {
    // Determine which level changed
    let changedLevel = -1
    for (let lv = 0; lv < levels; lv++) {
      const val = String(row[groupKeys[lv]] ?? '')
      if (val !== currentKeys[lv]) {
        changedLevel = lv
        break
      }
    }

    const isFirstInGroup = changedLevel >= 0

    if (changedLevel >= 0) {
      // Emit subtotals for levels that ended
      emitSubtotals(changedLevel)

      // Reset changed levels and deeper
      for (let lv = changedLevel; lv < levels; lv++) {
        currentKeys[lv] = String(row[groupKeys[lv]] ?? '')
        levelValues[lv] = { [groupKeys[lv]]: row[groupKeys[lv]] }
        sumCols.forEach(k => { levelSums[lv][k] = 0 })
      }

      // Emit group headers for each changed level (quebra mode)
      if (props.groupMode === 'quebra') {
        for (let lv = changedLevel; lv < levels; lv++) {
          const groupId = groupKeys.slice(0, lv + 1).map(k => row[k] ?? '').join('|')
          const parentId = lv > 0 ? groupKeys.slice(0, lv).map(k => row[k] ?? '').join('|') : null
          rows.push({
            _type: 'group_header',
            _level: lv,
            _key: groupKeys[lv],
            _label: row[groupKeys[lv]],
            _groupId: groupId,
            _parentId: parentId,
          })
        }
        // Emit column header row after deepest group header
        const colHeaderAncestors = []
        for (let lv = 0; lv < levels; lv++) {
          colHeaderAncestors.push(groupKeys.slice(0, lv + 1).map(k => row[k] ?? '').join('|'))
        }
        rows.push({
          _type: 'column_header',
          _ancestorIds: colHeaderAncestors,
        })
      }
    }

    // Build ancestor group IDs for this data row
    const _ancestorIds = []
    for (let lv = 0; lv < levels; lv++) {
      _ancestorIds.push(groupKeys.slice(0, lv + 1).map(k => row[k] ?? '').join('|'))
    }

    // Data row — mark first row of group
    rows.push({ _type: 'data', _firstInGroup: isFirstInGroup, _ancestorIds, ...row })

    // Accumulate sums at every level
    sumCols.forEach(k => {
      const v = parseFloat(row[k]) || 0
      for (let lv = 0; lv < levels; lv++) {
        levelSums[lv][k] += v
      }
      grandTotals[k] += v
    })
  }

  // Emit remaining subtotals
  emitSubtotals(0)

  // Grand total
  rows.push({ _type: 'grand_total', _sums: grandTotals })

  return rows
})

// Filter out collapsed rows
const visibleGroupedData = computed(() => {
  if (!groupedDisplayData.value) return null
  if (!collapsedGroups.value.size) return groupedDisplayData.value

  return groupedDisplayData.value.filter(row => {
    if (row._type === 'grand_total') return true
    if (row._type === 'group_header') {
      if (!row._parentId) return true
      // Hide if any ancestor group is collapsed
      // Check all ancestor levels, not just parent
      const parts = row._groupId.split('|')
      for (let len = 1; len < parts.length; len++) {
        const ancestorId = parts.slice(0, len).join('|')
        if (collapsedGroups.value.has(ancestorId)) return false
      }
      return true
    }
    // Data, subtotal, column_header rows: hide if any ancestor is collapsed
    if (row._ancestorIds) {
      return !row._ancestorIds.some(id => collapsedGroups.value.has(id))
    }
    return true
  })
})

// Paginated grouped data
const paginatedGroupedData = computed(() => {
  const data = visibleGroupedData.value
  if (!data) return null
  const start = (currentPage.value - 1) * perPage.value
  return data.slice(start, start + perPage.value)
})

const totalGroupedPages = computed(() => {
  const data = visibleGroupedData.value
  if (!data) return 1
  return Math.max(1, Math.ceil(data.length / perPage.value))
})

const activeTotalPages = computed(() =>
  groupingActive.value && groupedDisplayData.value
    ? totalGroupedPages.value
    : totalPages.value
)

const activeVisiblePages = computed(() => {
  const pages = []
  const total = activeTotalPages.value
  const cur = currentPage.value
  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i)
  } else {
    pages.push(1)
    if (cur > 3) pages.push('...')
    for (let i = Math.max(2, cur - 1); i <= Math.min(total - 1, cur + 1); i++) pages.push(i)
    if (cur < total - 2) pages.push('...')
    pages.push(total)
  }
  return pages
})

// Filters
const hasActiveFilters = computed(() =>
  Object.values(columnFilters.value).some(v => v !== '')
)

function clearFilters() {
  for (const key of Object.keys(columnFilters.value)) {
    columnFilters.value[key] = ''
  }
}

function goToPage(p) {
  if (typeof p === 'number' && p >= 1 && p <= activeTotalPages.value) {
    currentPage.value = p
  }
}
</script>

<template>
  <div>
    <!-- Toolbar -->
    <div class="flex items-center justify-between mb-3 gap-3">
      <div class="flex items-center gap-3 min-w-0">
        <p class="text-sm text-gray-500 whitespace-nowrap">
          <span class="font-semibold text-gray-700">{{ filteredData.length }}</span>
          <span v-if="filteredData.length !== data.length" class="text-gray-400"> de {{ data.length }}</span>
          registro(s)
        </p>
        <slot name="toolbar-left" />
      </div>

      <div class="flex items-center gap-2">
        <SecondaryButton type="button" @click="showFilters = !showFilters">
          <FunnelIcon class="h-4 w-4" />
          <span>Filtros</span>
          <span
            v-if="hasActiveFilters"
            class="ml-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white"
          >
            {{ Object.values(columnFilters).filter(v => v !== '').length }}
          </span>
        </SecondaryButton>

        <SecondaryButton v-if="hasActiveFilters" type="button" @click="clearFilters">
          <XMarkIcon class="h-4 w-4" />
          <span>Limpar</span>
        </SecondaryButton>

        <SecondaryButton v-if="hasGrouping" type="button" @click="groupingActive = !groupingActive">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" /></svg>
          <span>{{ groupingActive ? 'Detalhado' : (groupMode === 'quebra' ? 'Quebra' : 'Resumo') }}</span>
        </SecondaryButton>

        <SecondaryButton type="button" @click="openFullscreen" :disabled="!sortedData.length">
          <ArrowsPointingOutIcon class="h-4 w-4" />
          <span>Expandir</span>
        </SecondaryButton>

        <SuccessButton type="button" @click="exportExcel">
          <TableCellsIcon class="h-4 w-4" />
          <span>Excel</span>
        </SuccessButton>
      </div>
    </div>

    <!-- Table -->
    <div class="grid-table-container overflow-auto rounded-xl border border-gray-200 shadow-sm" :style="maxHeight ? { maxHeight } : {}">
      <table class="min-w-full text-xs">
        <thead v-if="!(groupingActive && groupMode === 'quebra')" class="sticky top-0 z-10">
          <tr style="background: linear-gradient(180deg, #0B56B3 0%, #093F87 100%);" class="text-white">
            <th v-if="selectable" class="px-3 py-3 w-10 text-center">
              <input
                type="checkbox"
                :checked="selectAllChecked"
                @change="selectAllChecked = $event.target.checked; toggleSelectAll()"
                class="h-3.5 w-3.5 rounded border-white/40 text-primary focus:ring-primary/50"
              />
            </th>
            <th
              v-for="col in columns"
              :key="col.key"
              class="px-3 py-3 font-semibold whitespace-nowrap select-none text-[11px] uppercase tracking-wider"
              :class="[
                cellAlign(col),
                col.sortable ? 'cursor-pointer hover:bg-white/10 transition-colors' : '',
              ]"
              :style="col.width ? { width: col.width } : {}"
              @click="toggleSort(col.key)"
            >
              <span class="inline-flex items-center gap-1.5">
                {{ col.label }}
                <template v-if="sortKey === col.key">
                  <ArrowUpIcon v-if="sortOrder === 'asc'" class="h-3.5 w-3.5 text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]" />
                  <ArrowDownIcon v-else class="h-3.5 w-3.5 text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]" />
                </template>
                <ArrowUpIcon v-else-if="col.sortable" class="h-3 w-3 text-white/25" />
              </span>
            </th>
          </tr>

          <tr v-if="showFilters" class="bg-gray-50 border-b border-gray-200 sticky top-[38px] z-10">
            <th v-if="selectable" class="px-1.5 py-1.5"></th>
            <th v-for="col in columns" :key="'f-' + col.key" class="px-1.5 py-1.5">
              <input
                v-if="col.filterable !== false"
                v-model="columnFilters[col.key]"
                type="text"
                :placeholder="col.label"
                class="w-full min-w-[60px] rounded border border-gray-200 bg-white px-2 py-1 text-xs text-gray-700 placeholder:text-gray-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </th>
          </tr>
        </thead>

        <!-- Normal tbody -->
        <tbody v-if="!groupingActive || !groupedDisplayData" class="divide-y divide-gray-100/80">
          <tr
            v-for="(row, i) in paginatedData"
            :key="i"
            class="transition-colors duration-150"
            :class="[
              selectable && isRowSelected(i)
                ? 'bg-blue-50/80 hover:bg-blue-200/60 ring-inset ring-1 ring-blue-200/50'
                : highlightedRow === i
                  ? 'bg-blue-100 ring-inset ring-1 ring-blue-300'
                  : i % 2 === 0
                    ? 'bg-white hover:bg-blue-200/70'
                    : 'bg-slate-100/70 hover:bg-blue-200/70',
              'cursor-pointer',
            ]"
            @click="selectable ? toggleRow(i) : (highlightedRow = highlightedRow === i ? -1 : i)"
          >
            <td v-if="selectable" class="px-3 py-2.5 text-center" @click.stop>
              <input
                type="checkbox"
                :checked="isRowSelected(i)"
                @change="toggleRow(i)"
                class="h-3.5 w-3.5 rounded border-gray-300 text-primary focus:ring-primary/50"
              />
            </td>
            <td
              v-for="col in columns"
              :key="col.key"
              class="px-3 py-2.5 whitespace-nowrap text-gray-700"
              :class="cellAlign(col)"
            >
              <slot :name="'cell-' + col.key" :row="row" :value="row[col.key]" :col="col">
                {{ formatCell(row[col.key], col) }}
              </slot>
            </td>
          </tr>
        </tbody>

        <!-- Grouped tbody (resumo mode) -->
        <tbody v-else-if="groupMode !== 'quebra'" class="divide-y divide-gray-100/80">
          <template v-for="(row, i) in paginatedGroupedData" :key="i">
            <!-- Data row -->
            <tr
              v-if="row._type === 'data'"
              class="transition-colors duration-150 cursor-pointer"
              :class="[
                highlightedRow === i
                  ? 'bg-blue-100 ring-inset ring-1 ring-blue-300'
                  : i % 2 === 0 ? 'bg-white hover:bg-blue-200/70' : 'bg-slate-100/70 hover:bg-blue-200/70',
                row._firstInGroup ? 'border-t-2 border-blue-200' : '',
              ]"
              @click="highlightedRow = highlightedRow === i ? -1 : i"
            >
              <td
                v-for="col in columns"
                :key="col.key"
                class="px-3 py-2 whitespace-nowrap"
                :class="[
                  cellAlign(col),
                  groupBy.includes(col.key)
                    ? row._firstInGroup ? 'text-blue-700 font-semibold' : 'text-transparent'
                    : 'text-gray-700',
                ]"
              >
                {{ formatCell(row[col.key], col) }}
              </td>
            </tr>

            <!-- Subtotal row -->
            <tr
              v-else-if="row._type === 'subtotal'"
              class="border-t"
              :class="[
                row._level === 0
                  ? 'bg-blue-600/90 text-white font-bold border-blue-700'
                  : row._level === 1
                    ? 'bg-blue-200/80 text-gray-900 font-semibold border-blue-300'
                    : 'bg-blue-50 text-gray-700 font-medium border-blue-100'
              ]"
            >
              <td
                v-for="col in columns"
                :key="col.key"
                class="px-3 py-2 whitespace-nowrap"
                :class="cellAlign(col)"
              >
                <template v-if="row._groupKeys.includes(col.key)">
                  <template v-if="row._groupKeys[0] === col.key">
                    {{ formatCell(row._groupValues[col.key], col) }} Subtotal
                  </template>
                  <template v-else>
                    {{ formatCell(row._groupValues[col.key], col) }}
                  </template>
                </template>
                <template v-else-if="sumColumns.includes(col.key)">
                  {{ formatCell(row._sums[col.key], col) }}
                </template>
              </td>
            </tr>

            <!-- Grand total row -->
            <tr
              v-else-if="row._type === 'grand_total'"
              class="font-bold text-white border-t-2 border-navy-800"
              style="background: linear-gradient(180deg, #0B56B3 0%, #093F87 100%);"
            >
              <td
                v-for="(col, ci) in columns"
                :key="col.key"
                class="px-3 py-2.5 whitespace-nowrap text-xs"
                :class="cellAlign(col)"
              >
                <template v-if="ci === 0">TOTAL GERAL</template>
                <template v-else-if="sumColumns.includes(col.key)">
                  {{ formatCell(row._sums[col.key], col) }}
                </template>
              </td>
            </tr>
          </template>
        </tbody>
      </table>

      <!-- Quebra mode: indented mini-tables per group -->
      <div v-if="groupingActive && groupMode === 'quebra' && paginatedGroupedData">
        <template v-for="(row, i) in paginatedGroupedData" :key="'q-' + i">
          <!-- Group header -->
          <div
            v-if="row._type === 'group_header'"
            class="cursor-pointer hover:bg-slate-100 transition-colors py-2 text-xs font-semibold text-slate-600 border-t border-slate-100"
            :style="{ paddingLeft: (row._level * 24 + 12) + 'px' }"
            @click="toggleCollapse(row._groupId)"
          >
            <svg
              class="inline-block h-3.5 w-3.5 mr-1 text-slate-400 transition-transform duration-200"
              :class="isCollapsed(row._groupId) ? '' : 'rotate-90'"
              fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <span class="text-slate-400">{{ columns.find(c => c.key === row._key)?.label }}:</span>
            <span class="ml-1 text-slate-800">{{ columns.find(c => c.key === row._key) ? formatCell(row._label, columns.find(c => c.key === row._key)) : row._label }}</span>
          </div>

          <!-- Column header -->
          <div
            v-else-if="row._type === 'column_header'"
            class="quebra-row"
            :style="{ marginLeft: (groupBy.length * 24 + 12) + 'px' }"
            style="background: linear-gradient(180deg, #0B56B3 0%, #093F87 100%);"
          >
            <div
              v-for="col in columns"
              :key="'qh-' + col.key"
              class="quebra-cell px-3 py-2 font-semibold whitespace-nowrap text-[11px] uppercase tracking-wider text-white"
              :class="cellAlign(col)"
              :style="{ width: quebraColWidth(col), minWidth: quebraColWidth(col) }"
            >
              {{ col.label }}
            </div>
          </div>

          <!-- Data row -->
          <div
            v-else-if="row._type === 'data'"
            class="quebra-row cursor-pointer transition-colors duration-150"
            :class="highlightedRow === i
              ? 'bg-blue-100'
              : i % 2 === 0 ? 'bg-white hover:bg-blue-200/70' : 'bg-slate-100/70 hover:bg-blue-200/70'"
            :style="{ marginLeft: (groupBy.length * 24 + 12) + 'px' }"
            @click="highlightedRow = highlightedRow === i ? -1 : i"
          >
            <div
              v-for="col in columns"
              :key="col.key"
              class="quebra-cell px-3 py-2 whitespace-nowrap text-xs text-gray-700"
              :class="cellAlign(col)"
              :style="{ width: quebraColWidth(col), minWidth: quebraColWidth(col) }"
            >
              {{ formatCell(row[col.key], col) }}
            </div>
          </div>

          <!-- Subtotal row -->
          <div
            v-else-if="row._type === 'subtotal'"
            class="quebra-row border-t text-xs"
            :class="[
              row._level === 0
                ? 'bg-blue-600/90 text-white font-bold border-blue-700'
                : row._level === 1
                  ? 'bg-blue-200/80 text-gray-900 font-semibold border-blue-300'
                  : 'bg-blue-50 text-gray-700 font-medium border-blue-100'
            ]"
            :style="{ marginLeft: (groupBy.length * 24 + 12) + 'px' }"
          >
            <div
              v-for="(col, ci) in columns"
              :key="col.key"
              class="quebra-cell px-3 py-2 whitespace-nowrap"
              :class="cellAlign(col)"
              :style="{ width: quebraColWidth(col), minWidth: quebraColWidth(col) }"
            >
              <template v-if="ci === 0">
                {{ row._level === groupBy.length - 1 ? 'Subtotal' : 'Total' }} {{ columns.find(c => c.key === row._groupKeys[row._level])?.label }}
              </template>
              <template v-else-if="sumColumns.includes(col.key)">
                {{ formatCell(row._sums[col.key], col) }}
              </template>
            </div>
          </div>

          <!-- Grand total -->
          <div
            v-else-if="row._type === 'grand_total'"
            class="quebra-row font-bold text-white text-xs mt-1"
            style="background: linear-gradient(180deg, #0B56B3 0%, #093F87 100%);"
          >
            <div
              v-for="(col, ci) in columns"
              :key="col.key"
              class="quebra-cell px-3 py-2.5 whitespace-nowrap"
              :class="cellAlign(col)"
              :style="{ width: quebraColWidth(col), minWidth: quebraColWidth(col) }"
            >
              <template v-if="ci === 0">TOTAL GERAL</template>
              <template v-else-if="sumColumns.includes(col.key)">
                {{ formatCell(row._sums[col.key], col) }}
              </template>
            </div>
          </div>
        </template>
      </div>

      <div v-if="(groupingActive && groupedDisplayData ? paginatedGroupedData : paginatedData).length === 0" class="py-12 text-center text-gray-400 text-sm">
        Nenhum registro encontrado.
      </div>
    </div>

    <!-- Pagination -->
    <div v-if="(groupingActive && groupedDisplayData ? groupedDisplayData.length : sortedData.length) > 0" class="mt-5 flex items-center justify-between">
      <div class="inline-flex items-center gap-1.5 text-xs text-gray-500">
        <span>Exibir</span>
        <select
          v-model.number="perPage"
          @change="currentPage = 1"
          class="rounded-lg border border-gray-200 bg-white pl-2.5 pr-7 py-1.5 text-xs font-semibold text-gray-700 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary/40 cursor-pointer"
        >
          <option :value="25">25</option>
          <option :value="50">50</option>
          <option :value="100">100</option>
          <option :value="200">200</option>
        </select>
        <span>por página</span>
      </div>

      <nav class="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white p-1">
        <button
          type="button"
          :disabled="currentPage <= 1"
          @click="goToPage(currentPage - 1)"
          class="rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors"
          :class="currentPage <= 1
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'"
        >
          &laquo; Anterior
        </button>

        <template v-for="p in activeVisiblePages" :key="p">
          <span v-if="p === '...'" class="px-1.5 text-xs text-gray-300">...</span>
          <button
            v-else
            type="button"
            @click="goToPage(p)"
            class="min-w-[32px] rounded-md px-2 py-1.5 text-xs font-semibold transition-all"
            :class="p === currentPage
              ? 'text-white shadow-sm'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'"
            :style="p === currentPage ? 'background: linear-gradient(180deg, #0B56B3 0%, #093F87 100%)' : ''"
          >
            {{ p }}
          </button>
        </template>

        <button
          type="button"
          :disabled="currentPage >= activeTotalPages"
          @click="goToPage(currentPage + 1)"
          class="rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors"
          :class="currentPage >= activeTotalPages
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'"
        >
          Próximo &raquo;
        </button>
      </nav>
    </div>
  </div>
</template>

<style scoped>
/* Container da grid com scroll interno */
.grid-table-container {
  scrollbar-width: auto;
}
.grid-table-container::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}
.grid-table-container::-webkit-scrollbar-track {
  background: #e5e7eb;
}
.grid-table-container::-webkit-scrollbar-thumb {
  background: #9ca3af;
}
.grid-table-container::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
.grid-table-container::-webkit-scrollbar-corner {
  background: #e5e7eb;
}
/* Vertical arrows */
.grid-table-container::-webkit-scrollbar-button:single-button:vertical:decrement {
  display: block;
  height: 14px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M5 0l5 6H0z' fill='%23666'/%3E%3C/svg%3E") no-repeat center center #e5e7eb;
}
.grid-table-container::-webkit-scrollbar-button:single-button:vertical:decrement:hover {
  background-color: #d1d5db;
}
.grid-table-container::-webkit-scrollbar-button:single-button:vertical:increment {
  display: block;
  height: 14px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0h10L5 6z' fill='%23666'/%3E%3C/svg%3E") no-repeat center center #e5e7eb;
}
.grid-table-container::-webkit-scrollbar-button:single-button:vertical:increment:hover {
  background-color: #d1d5db;
}
/* Horizontal arrows */
.grid-table-container::-webkit-scrollbar-button:single-button:horizontal:decrement {
  display: block;
  width: 14px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='10'%3E%3Cpath d='M6 0v10L0 5z' fill='%23666'/%3E%3C/svg%3E") no-repeat center center #e5e7eb;
}
.grid-table-container::-webkit-scrollbar-button:single-button:horizontal:decrement:hover {
  background-color: #d1d5db;
}
.grid-table-container::-webkit-scrollbar-button:single-button:horizontal:increment {
  display: block;
  width: 14px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='10'%3E%3Cpath d='M0 0v10l6-5z' fill='%23666'/%3E%3C/svg%3E") no-repeat center center #e5e7eb;
}
.grid-table-container::-webkit-scrollbar-button:single-button:horizontal:increment:hover {
  background-color: #d1d5db;
}
/* Quebra mode: flex rows for aligned columns */
.quebra-row {
  display: flex;
  min-width: fit-content;
}
.quebra-cell {
  flex: 0 0 auto;
  box-sizing: border-box;
}
</style>
