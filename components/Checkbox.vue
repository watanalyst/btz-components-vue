<script setup>
const model = defineModel({ type: Boolean, default: false })

defineProps({
  label: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
})
</script>

<template>
  <label class="inline-flex items-center gap-2 cursor-pointer select-none" :class="disabled ? 'opacity-50 cursor-not-allowed' : ''">
    <input
      type="checkbox"
      v-model="model"
      :disabled="disabled"
      class="h-4 w-4 rounded border-gray-300 text-primary shadow-sm focus:ring-1 focus:ring-primary/50 focus:ring-offset-0 disabled:cursor-not-allowed"
    />
    <span v-if="label" class="text-sm text-gray-700">{{ label }}</span>
    <span v-else class="text-sm text-gray-700"><slot /></span>
  </label>
</template>
