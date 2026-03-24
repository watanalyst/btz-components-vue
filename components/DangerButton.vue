<script setup>
defineProps({
  type: { type: String, default: 'button' },
  size: { type: String, default: 'md', validator: v => ['sm', 'md', 'lg'].includes(v) },
  variant: { type: String, default: 'solid', validator: v => ['solid', 'outline'].includes(v) },
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
    class="inline-flex items-center justify-center font-semibold transition-all duration-200 hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
    :class="[
      sizeClasses[size],
      variant === 'outline'
        ? 'border border-red-400 text-red-600 bg-white hover:bg-red-50 hover:border-red-500 hover:text-red-700 shadow-sm'
        : 'text-white shadow-[0_4px_14px_0_rgba(220,38,38,0.35)] hover:brightness-110',
    ]"
    :style="variant === 'solid' ? { background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)' } : {}"
  >
    <slot />
  </button>
</template>
