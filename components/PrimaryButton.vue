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
    class="inline-flex items-center justify-center font-semibold text-white shadow-[0_4px_14px_0_rgba(9,63,135,0.35)] transition-all duration-200 hover:-translate-y-px hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
    :class="sizeClasses[size]"
    :style="{ background: 'linear-gradient(135deg, #093F87 0%, #0B56B3 100%)' }"
  >
    <slot />
  </button>
</template>
