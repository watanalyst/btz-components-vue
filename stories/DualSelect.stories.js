import DualSelect from '../components/DualSelect.vue'
import { ref } from 'vue'

export default {
  title: 'Inputs/DualSelect',
  component: DualSelect,
  tags: ['autodocs'],
}

const empresas = [
  { value: '01', label: '01 - JAGUA-MTZ' },
  { value: '02', label: '02 - JAGUA-SJP' },
  { value: '03', label: '03 - JAGUA-RAC' },
  { value: '04', label: '04 - JAGUA-GRU' },
  { value: '05', label: '05 - JAGUA-FFO' },
  { value: '06', label: '06 - JAGUA-ASB' },
  { value: '07', label: '07 - JAGUA-SP' },
  { value: '08', label: '08 - JAGUA-SBC' },
  { value: '09', label: '09 - JAGUA-AST' },
  { value: '10', label: '10 - IMOBILIARI' },
  { value: '11', label: '11 - JAGUA-INCB' },
  { value: '12', label: '12 - JAGUA-DST' },
  { value: '13', label: '13 - JAGUA-OFIC' },
  { value: '14', label: '14 - CONESUL MT' },
  { value: '15', label: '15 - CONESUL FL' },
  { value: '16', label: '16 - JAGUA-XRE' },
  { value: '17', label: '17 - JAGUA-NVP' },
  { value: '18', label: '18 - JAGUA-RON' },
  { value: '19', label: '19 - JAGUA-STFE' },
  { value: '20', label: '20 - JAGUA-ARAP' },
  { value: '21', label: '21 - JAGUA-RS' },
  { value: '22', label: '22 - JAGUA-RXRE' },
  { value: '23', label: '23 - JAGUA-CDRO' },
  { value: '24', label: '24 - JAGUA-RARA' },
  { value: '25', label: '25 - JAGUA-FARR' },
  { value: '26', label: '26 - JAGUA-LOND' },
  { value: '27', label: '27 - JAGUA-RXRE' },
  { value: '28', label: '28 - JAGUA-AIPU' },
  { value: '29', label: '29 - JAGUA-IVAI' },
  { value: '30', label: '30 - BTZ PARTC' },
  { value: '31', label: '31 - JAGUA-DEP' },
  { value: '32', label: '32 - JAGUA-TUB' },
  { value: '35', label: '35 - B E F-MATR' },
  { value: '36', label: '36 - VALE IVAI' },
  { value: '37', label: '37 - AGRO IVAI' },
  { value: '40', label: '40 - GTB-ABATE' },
  { value: '41', label: '41 - GTB-RACAO' },
  { value: '42', label: '42 - GTB-MATRIZ' },
  { value: '43', label: '43 - JAGUA-ABGO' },
  { value: '44', label: '44 - JAGUA-RAGO' },
  { value: '45', label: '45 - JAGUA-INGO' },
  { value: '46', label: '46 - JAGUA-MTGO' },
  { value: '47', label: '47 - JF-ESCR GO' },
  { value: '48', label: '48 - BTZ-RACMTZ' },
  { value: '50', label: '50 - JOIB-MTZ' },
  { value: '51', label: '51 - JOIB-SJP' },
  { value: '52', label: '52 - JOIB-SP' },
  { value: '53', label: '53 - PROSPERITA' },
  { value: '70', label: '70 - JAGUA FERT' },
  { value: '71', label: '71 - FORTE SULL' },
  { value: 'A1', label: 'A1 - S&P PART' },
  { value: 'A2', label: 'A2 - S&PB-HOL' },
  { value: 'A3', label: 'A3 - PAULO-HOL' },
  { value: 'A4', label: 'A4 - JAGUA-PART' },
]

export const Default = () => ({
  components: { DualSelect },
  setup() {
    const value = ref('')
    return { value, empresas }
  },
  template: `
    <div class="max-w-lg space-y-3">
      <DualSelect v-model="value" :options="empresas" />
      <p class="text-sm text-gray-500">Valor: <strong>{{ value || '(vazio)' }}</strong></p>
    </div>
  `,
})

export const WithPreselected = () => ({
  components: { DualSelect },
  setup() {
    const value = ref('01,05')
    return { value, empresas }
  },
  template: `
    <div class="max-w-lg">
      <DualSelect v-model="value" :options="empresas" />
    </div>
  `,
})

export const CustomLabels = () => ({
  components: { DualSelect },
  setup() {
    const value = ref('')
    const items = [
      { value: 'pdf', label: 'PDF' },
      { value: 'excel', label: 'Excel' },
      { value: 'csv', label: 'CSV' },
    ]
    return { value, items }
  },
  template: `
    <div class="max-w-lg">
      <DualSelect v-model="value" :options="items" left-label="Formatos" right-label="Selecionados" />
    </div>
  `,
})
