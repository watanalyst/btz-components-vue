<script setup>
import Modal from './Modal.vue'
import SecondaryButton from './SecondaryButton.vue'

defineProps({
  show: { type: Boolean, default: false },
  title: { type: String, default: 'Confirmar ação' },
  message: { type: String, default: '' },
  confirmLabel: { type: String, default: 'Confirmar' },
  cancelLabel: { type: String, default: 'Cancelar' },
  variant: { type: String, default: 'danger' },
})

const emit = defineEmits(['confirm', 'cancel'])

const variantClasses = {
  danger: {
    barGradient: 'linear-gradient(to right, #dc2626, #ef4444, #f87171)',
    icon: 'bg-red-100 text-red-600',
    gradient: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
    shadow: 'rgba(220,38,38,0.35)',
  },
  success: {
    barGradient: 'linear-gradient(to right, #047857, #059669, #10b981)',
    icon: 'bg-green-100 text-green-600',
    gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
    shadow: 'rgba(5,150,105,0.35)',
  },
  warning: {
    barGradient: 'linear-gradient(to right, #b45309, #d97706, #f59e0b)',
    icon: 'bg-amber-100 text-amber-600',
    gradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
    shadow: 'rgba(217,119,6,0.35)',
  },
}
</script>

<template>
  <Modal :show="show" max-width="md" :accent-bar="false" @close="emit('cancel')">
    <div class="h-1.5 rounded-t-lg" :style="{ background: variantClasses[variant]?.barGradient }"></div>
    <div class="p-6">
      <div class="flex items-start gap-4">
        <!-- Ícone -->
        <div
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
          :class="variantClasses[variant]?.icon"
        >
          <!-- Danger: exclamation -->
          <svg v-if="variant === 'danger'" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
          </svg>
          <!-- Warning: exclamation circle -->
          <svg v-else-if="variant === 'warning'" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
          <!-- Success: check -->
          <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>

        <!-- Conteúdo -->
        <div class="flex-1">
          <h3 class="text-base font-semibold text-gray-900">{{ title }}</h3>
          <p class="mt-2 text-sm text-gray-600">{{ message }}</p>
        </div>
      </div>

      <!-- Botões -->
      <div class="mt-6 flex justify-end gap-3">
        <SecondaryButton @click="emit('cancel')">
          {{ cancelLabel }}
        </SecondaryButton>
        <button
          type="button"
          @click="emit('confirm')"
          class="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:brightness-110"
          :style="{
            background: variantClasses[variant]?.gradient,
            boxShadow: `0 4px 14px 0 ${variantClasses[variant]?.shadow}`,
          }"
        >
          {{ confirmLabel }}
        </button>
      </div>
    </div>
  </Modal>
</template>
