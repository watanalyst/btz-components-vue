<script setup>
defineProps({
  type: { type: String, default: 'button' },
  size: { type: String, default: 'md', validator: v => ['sm', 'md', 'lg'].includes(v) },
})

const sizeClasses = {
  sm: 'px-2.5 py-1.5 text-xs gap-1.5 rounded-md',
  md: 'px-3 py-2 text-sm gap-2 rounded-lg',
  lg: 'px-4 py-2.5 text-sm gap-2 rounded-lg',
}
</script>

<template>
  <button
    :type="type"
    class="inline-flex items-center justify-center border border-gray-200 bg-white font-medium text-gray-600 shadow-sm transition-all duration-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
    :class="sizeClasses[size]"
  >
    <slot />
  </button>
</template>
