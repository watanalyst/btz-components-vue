<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  appName: { type: String, default: 'App' },
  logoSrc: { type: String, default: '' },
  user: { type: Object, default: null },
  navItems: { type: Array, default: () => [] },
  linkComponent: { type: [String, Object], default: 'a' },
})

const emit = defineEmits(['logout'])

const showDropdown = ref(false)
const showMobileNav = ref(false)
const dropdownRef = ref(null)

const userInitials = computed(() => {
  if (!props.user?.name) return '?'
  const parts = props.user.name.trim().split(/\s+/)
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  return parts[0][0].toUpperCase()
})

function handleClickOutside(e) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    showDropdown.value = false
  }
}

function handleKeydown(e) {
  if (e.key === 'Escape') showDropdown.value = false
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="min-h-screen" style="background: #f5f6fa">
    <!-- Accent bar -->
    <div class="fixed inset-x-0 top-0 z-50 h-[2px]" style="background: linear-gradient(to right, #0A1E44, #093F87, #1565C0)" />

    <!-- Navbar -->
    <nav class="sticky top-[2px] z-20 bg-white" style="box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex h-14 items-center justify-between">
          <!-- Left: logo + nav links -->
          <div class="flex items-center">
            <!-- Logo -->
            <slot name="logo">
              <div class="flex shrink-0 items-center gap-2">
                <img v-if="logoSrc" :src="logoSrc" :alt="appName" class="h-8 w-auto" />
                <span class="hidden text-lg font-bold text-gray-800 sm:block">{{ appName }}</span>
              </div>
            </slot>

            <!-- Nav links -->
            <div v-if="navItems.length" class="hidden sm:ml-8 sm:flex sm:items-center sm:space-x-1">
              <component
                :is="linkComponent"
                v-for="item in navItems"
                :key="item.href"
                :href="item.href"
                class="px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                :class="item.active
                  ? 'text-primary bg-primary/5'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'"
                style="--tw-text-opacity: 1"
              >
                {{ item.label }}
              </component>
            </div>
          </div>

          <!-- Right: header slot + user menu -->
          <div class="flex items-center gap-3">
            <slot name="header-right" />

            <!-- User menu -->
            <div v-if="user" ref="dropdownRef" class="relative">
              <button
                type="button"
                class="flex items-center gap-2 rounded-lg p-1.5 transition-colors hover:bg-gray-50"
                @click="showDropdown = !showDropdown"
              >
                <div
                  class="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white"
                  style="background: linear-gradient(135deg, #0A1E44, #093F87)"
                >
                  {{ userInitials }}
                </div>
                <div class="hidden sm:block text-left">
                  <span class="block text-sm font-semibold text-gray-800 leading-tight">{{ user.name }}</span>
                  <span v-if="user.subtitle" class="block text-[11px] text-gray-400 leading-tight">{{ user.subtitle }}</span>
                </div>
                <svg class="h-4 w-4 text-gray-400 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              <!-- Dropdown -->
              <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-1 scale-95"
                enter-to-class="opacity-100 translate-y-0 scale-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0 scale-100"
                leave-to-class="opacity-0 -translate-y-1 scale-95"
              >
                <div
                  v-if="showDropdown"
                  class="absolute right-0 mt-2 w-52 overflow-hidden rounded-xl bg-white z-50"
                  style="border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 12px 48px -8px rgba(0,0,0,0.12)"
                >
                  <!-- User info header -->
                  <div class="px-4 py-3" style="background: #f8fafc; border-bottom: 1px solid rgba(0,0,0,0.04)">
                    <div class="flex items-center gap-3">
                      <div
                        class="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
                        style="background: linear-gradient(135deg, #0A1E44, #093F87)"
                      >
                        {{ userInitials }}
                      </div>
                      <div class="min-w-0">
                        <p class="truncate text-sm font-semibold text-gray-800">{{ user.name }}</p>
                        <p v-if="user.subtitle" class="truncate text-[11px] text-gray-400">{{ user.subtitle }}</p>
                      </div>
                    </div>
                  </div>

                  <!-- Menu items slot -->
                  <slot name="dropdown-items" />

                  <!-- Logout -->
                  <div style="border-top: 1px solid rgba(0,0,0,0.04)">
                    <button
                      type="button"
                      @click="showDropdown = false; emit('logout')"
                      class="flex w-full items-center gap-2.5 px-4 py-2.5 text-sm transition-colors hover:bg-red-50"
                    >
                      <svg class="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                      </svg>
                      <span class="text-red-500 font-medium">Sair</span>
                    </button>
                  </div>
                </div>
              </Transition>
            </div>

            <!-- Mobile hamburger -->
            <button
              type="button"
              class="sm:hidden rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
              @click="showMobileNav = !showMobileNav"
            >
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path v-if="!showMobileNav" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile nav -->
      <div v-if="showMobileNav" class="sm:hidden border-t border-gray-100">
        <div class="space-y-1 px-4 py-3">
          <component
            :is="linkComponent"
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="block rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            :class="item.active ? 'text-primary bg-primary/5' : 'text-gray-600 hover:bg-gray-50'"
            @click="showMobileNav = false"
          >
            {{ item.label }}
          </component>
        </div>

        <div v-if="user" class="border-t border-gray-100 px-4 py-3">
          <div class="flex items-center gap-3 mb-3">
            <div
              class="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold text-white"
              style="background: linear-gradient(135deg, #0A1E44, #093F87)"
            >
              {{ userInitials }}
            </div>
            <div>
              <p class="text-sm font-semibold text-gray-800">{{ user.name }}</p>
              <p v-if="user.subtitle" class="text-xs text-gray-400">{{ user.subtitle }}</p>
            </div>
          </div>
          <button
            type="button"
            @click="showMobileNav = false; emit('logout')"
            class="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
          >
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
            </svg>
            Sair
          </button>
        </div>
      </div>
    </nav>

    <!-- Page header -->
    <div v-if="$slots.header" class="mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <slot name="header" />
    </div>

    <!-- Content -->
    <main class="mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <slot />
    </main>
  </div>
</template>
