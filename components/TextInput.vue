<script setup>
import { onMounted, ref } from 'vue'

const model = defineModel({ type: String })

defineProps({
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
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
    :type="type"
    v-model="model"
    :placeholder="placeholder"
    :disabled="disabled"
    class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
  />
</template>
