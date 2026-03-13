<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'

const props = defineProps({
  show: { type: Boolean, default: false },
  status: { type: String, default: 'loading' }, // 'loading' | 'success' | 'error'
  title: { type: String, default: '' },
  message: { type: String, default: '' },
  autoCloseDelay: { type: Number, default: 1500 },
})

const emit = defineEmits(['close'])

// --- Internal progress bar ---
const progress = ref(0)
let progressTimer = null

function startProgress() {
  progress.value = 0
  clearInterval(progressTimer)
  progressTimer = setInterval(() => {
    if (progress.value < 30) {
      progress.value += 3
    } else if (progress.value < 60) {
      progress.value += 2
    } else if (progress.value < 85) {
      progress.value += 0.5
    } else if (progress.value < 92) {
      progress.value += 0.15
    }
  }, 200)
}

function completeProgress() {
  clearInterval(progressTimer)
  progress.value = 100
}

function resetProgress() {
  clearInterval(progressTimer)
  progress.value = 0
}

// Watch status changes to drive progress
watch(() => props.status, (newStatus, oldStatus) => {
  if (newStatus === 'loading') {
    startProgress()
  } else if (oldStatus === 'loading' && (newStatus === 'success' || newStatus === 'error')) {
    completeProgress()
  }
})

// Watch show to reset when modal opens/closes
watch(() => props.show, (isOpen) => {
  if (isOpen && props.status === 'loading') {
    startProgress()
  }
  if (!isOpen) {
    resetProgress()
  }
})

// Auto-close on success
watch(() => props.status, (newStatus) => {
  if (newStatus === 'success' && props.autoCloseDelay > 0) {
    setTimeout(() => emit('close'), props.autoCloseDelay)
  }
})

onBeforeUnmount(() => clearInterval(progressTimer))

const accentGradient = {
  primary: 'linear-gradient(to right, #0A1E44, #093F87, #1565C0)',
  error: 'linear-gradient(to right, #dc2626, #ef4444, #f87171)',
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        class="fixed inset-0 z-[100] flex items-start justify-center pt-32 bg-gray-900/50 backdrop-blur-sm"
      >
        <div class="relative w-full max-w-sm mx-4 overflow-hidden rounded-2xl bg-white shadow-2xl">
          <!-- Accent bar -->
          <div
            class="h-1"
            :style="{ background: status === 'error' ? accentGradient.error : accentGradient.primary }"
          />

          <!-- Close button (error only) -->
          <button
            v-if="status === 'error'"
            @click="emit('close')"
            class="absolute top-3 right-3 p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="px-6 py-8 text-center">
            <!-- Loading -->
            <div v-if="status === 'loading'" class="space-y-4">
              <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <svg class="h-7 w-7 animate-spin text-primary" viewBox="0 0 24 24" fill="none">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              </div>
              <div>
                <h3 class="text-base font-semibold text-gray-800">{{ title }}</h3>
                <p class="mt-1 text-sm text-gray-500">{{ message }}</p>
              </div>
              <!-- Progress bar -->
              <div class="mx-auto w-4/5">
                <div class="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    class="h-full rounded-full transition-all duration-300 ease-out"
                    :style="{
                      width: progress + '%',
                      background: accentGradient.primary,
                    }"
                  />
                </div>
                <p class="mt-1.5 text-xs text-gray-400">{{ Math.round(progress) }}%</p>
              </div>
            </div>

            <!-- Success -->
            <div v-else-if="status === 'success'" class="space-y-4">
              <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                <svg class="h-7 w-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <h3 class="text-base font-semibold text-gray-800">{{ title }}</h3>
                <p class="mt-1 text-sm text-gray-500">{{ message }}</p>
              </div>
            </div>

            <!-- Error -->
            <div v-else-if="status === 'error'" class="space-y-4">
              <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
                <svg class="h-7 w-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
              </div>
              <div>
                <h3 class="text-base font-semibold text-gray-800">{{ title }}</h3>
                <p class="mt-1 text-sm text-gray-500">{{ message }}</p>
              </div>
              <button
                @click="emit('close')"
                class="mt-2 inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
