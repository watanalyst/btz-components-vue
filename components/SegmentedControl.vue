<script setup>
defineProps({
  modelValue: { type: String, default: '' },
  options: { type: Object, required: true },
  name: { type: String, required: true },
  size: { type: String, default: 'md', validator: v => ['sm', 'md', 'lg'].includes(v) },
  disabled: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue'])

const sizeClasses = {
  sm: 'px-2.5 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-sm',
}
</script>

<template>
  <div class="inline-flex rounded-lg border border-gray-200 bg-gray-100 p-0.5" :class="disabled ? 'opacity-50' : ''">
    <button
      v-for="(label, value) in options"
      :key="value"
      type="button"
      :disabled="disabled"
      :class="[
        'font-medium rounded-md transition-all duration-200',
        sizeClasses[size],
        modelValue === value
          ? 'bg-white text-primary shadow-sm'
          : 'text-gray-500 hover:text-gray-700',
        disabled ? 'cursor-not-allowed' : '',
      ]"
      @click="!disabled && emit('update:modelValue', value)"
    >
      {{ label }}
    </button>
  </div>
</template>
