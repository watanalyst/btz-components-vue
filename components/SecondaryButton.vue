<script setup>
defineProps({
  type: { type: String, default: 'button' },
})
</script>

<template>
  <button
    :type="type"
    class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 shadow-sm transition-all duration-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <slot />
  </button>
</template>
