<script setup>
defineProps({
  value: { type: String },
  required: { type: Boolean, default: false },
})
</script>

<template>
  <label class="block text-sm font-medium text-gray-700 mb-1">
    <span v-if="value">{{ value }}</span>
    <span v-else><slot /></span>
    <span v-if="required" class="ml-0.5 text-red-500">*</span>
  </label>
</template>
