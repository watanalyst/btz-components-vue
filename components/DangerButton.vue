<script setup>
defineProps({
  type: { type: String, default: 'button' },
})
</script>

<template>
  <button
    :type="type"
    class="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_0_rgba(220,38,38,0.35)] transition-all duration-200 hover:-translate-y-px hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
    :style="{ background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)' }"
  >
    <slot />
  </button>
</template>
