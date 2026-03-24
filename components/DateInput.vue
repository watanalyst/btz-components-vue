<script setup>
import { ref, onMounted } from 'vue'

const model = defineModel({ type: String })

defineProps({
  placeholder: { type: String, default: 'dd/mm/aaaa' },
  disabled: { type: Boolean, default: false },
  min: { type: String, default: '' },
  max: { type: String, default: '' },
})

const input = ref(null)

onMounted(() => {
  if (input.value?.hasAttribute('autofocus')) {
    input.value.focus()
  }
})

defineExpose({ focus: () => input.value?.focus() })
</script>

<template>
  <input
    ref="input"
    type="date"
    v-model="model"
    :placeholder="placeholder"
    :disabled="disabled"
    :min="min"
    :max="max"
    class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
  />
</template>
