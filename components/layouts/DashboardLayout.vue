<script setup>
import { DocumentTextIcon, HomeIcon, FolderIcon } from '@heroicons/vue/24/outline'
import { Bars3Icon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
import { ref, computed, reactive, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  appName: { type: String, default: 'App' },
  appNameHighlight: { type: String, default: '' },
  navigation: { type: Array, default: () => [] },
  version: { type: String, default: '' },
  user: { type: Object, default: null },
  currentPath: { type: String, default: '' },
  homeHref: { type: String, default: '/' },
  linkComponent: { type: [String, Object], default: 'a' },
})

const emit = defineEmits(['logout'])

const isSmallScreen = () => typeof window !== 'undefined' && window.innerWidth < 1024
const sidebarOpen = ref(isSmallScreen() ? false : localStorage.getItem('sidebarOpen') !== 'false')
const menuOpen = ref(false)

const userInitials = computed(() => {
  const name = props.user?.name || ''
  if (!name) return '?'
  const parts = name.trim().split(/\s+/)
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  return name.substring(0, 2).toUpperCase()
})

const brandMonogram = computed(() => {
  const full = props.appName + props.appNameHighlight
  if (!full) return '?'
  const words = full.trim().split(/(?=[A-Z])|[\s]+/).filter(Boolean)
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase()
  return full.substring(0, 2).toUpperCase()
})

function isActive(item) {
  if (item.active !== undefined) return item.active
  if (!props.currentPath || !item.href) return false
  return props.currentPath === item.href || props.currentPath.startsWith(item.href + '/')
}

function hasActiveChild(item) {
  if (!item.children) return isActive(item)
  return item.children.some(child => isActive(child))
}

function hasActiveInSection(section) {
  return section.items.some(item => hasActiveChild(item))
}

function isHomePath() {
  return props.currentPath === props.homeHref || props.currentPath === props.homeHref + '/'
}

// --- Section & subgroup collapse state ---
const SECTIONS_KEY = 'sidebarSections'
const SUBGROUPS_KEY = 'sidebarSubgroups'

function loadSectionState() {
  try { return JSON.parse(localStorage.getItem(SECTIONS_KEY)) || {} }
  catch { return {} }
}

function saveSectionState() {
  localStorage.setItem(SECTIONS_KEY, JSON.stringify({ ...sectionExpanded }))
}

function loadSubgroupState() {
  try { return JSON.parse(localStorage.getItem(SUBGROUPS_KEY)) || {} }
  catch { return {} }
}

function saveSubgroupState() {
  localStorage.setItem(SUBGROUPS_KEY, JSON.stringify({ ...subgroupExpanded }))
}

const sectionExpanded = reactive((() => {
  const saved = loadSectionState()
  const state = {}
  for (const section of props.navigation) {
    const key = section.key || section.title
    const active = hasActiveInSection(section)
    state[key] = active ? true : (key in saved ? saved[key] : false)
  }
  return state
})())

const subgroupExpanded = reactive((() => {
  const saved = loadSubgroupState()
  const state = {}
  for (const section of props.navigation) {
    for (const item of section.items) {
      if (item.children) {
        const key = item.key || item.label
        const active = item.children.some(child => isActive(child))
        state[key] = active ? true : (key in saved ? saved[key] : false)
      }
    }
  }
  return state
})())

function toggleSection(key) {
  sectionExpanded[key] = !sectionExpanded[key]
  saveSectionState()
}

function toggleSubgroup(key) {
  subgroupExpanded[key] = !subgroupExpanded[key]
  saveSubgroupState()
}

watch(() => props.currentPath, () => {
  for (const section of props.navigation) {
    const key = section.key || section.title
    if (hasActiveInSection(section)) {
      sectionExpanded[key] = true
      saveSectionState()
    }
    for (const item of section.items) {
      if (item.children) {
        const subKey = item.key || item.label
        if (item.children.some(child => isActive(child))) {
          subgroupExpanded[subKey] = true
          saveSubgroupState()
        }
      }
    }
  }
})

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
  localStorage.setItem('sidebarOpen', sidebarOpen.value)
}

function toggleMenu(e) {
  e.stopPropagation()
  menuOpen.value = !menuOpen.value
}

function handleClickOutside(event) {
  const menu = document.getElementById('jagua-user-menu')
  if (menu && !menu.contains(event.target)) {
    menuOpen.value = false
  }
}

function handleKeydown(event) {
  if (event.key === 'Escape') menuOpen.value = false
}

function handleLogout() {
  menuOpen.value = false
  emit('logout')
}

function handleResize() {
  if (isSmallScreen() && sidebarOpen.value) {
    sidebarOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Accent bar -->
    <div class="fixed inset-x-0 top-0 z-50 h-[2px]" style="background: linear-gradient(to right, #0A1E44, #093F87, #1565C0)" />

    <!-- Sidebar -->
    <aside
      :class="[
        'fixed inset-y-0 left-0 z-40 flex flex-col pt-[2px] transition-all duration-300',
        sidebarOpen ? 'w-[260px] overflow-hidden' : 'w-14 overflow-visible',
      ]"
    >
      <div class="flex flex-1 flex-col" style="background: linear-gradient(180deg, #071631 0%, #0A1E44 40%, #082040 100%)">
        <!-- Glow overlay -->
        <div class="pointer-events-none absolute inset-0 opacity-30" style="background: radial-gradient(ellipse at 50% 0%, rgba(9,63,135,0.3) 0%, transparent 70%)" />

        <!-- Brand -->
        <slot name="brand">
          <component
            :is="linkComponent"
            :href="homeHref"
            class="relative flex h-14 items-center justify-center cursor-pointer"
            style="background: linear-gradient(180deg, rgba(9,63,135,0.18) 0%, transparent 100%); box-shadow: inset 0 -1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.25)"
          >
            <span v-if="sidebarOpen" class="text-[22px] font-black text-white tracking-tight whitespace-nowrap drop-shadow-[0_0_10px_rgba(21,101,192,0.4)]">
              {{ appName }}<span v-if="appNameHighlight" class="text-primary-light">{{ appNameHighlight }}</span>
            </span>
            <span v-else class="text-lg font-black text-white drop-shadow-[0_0_8px_rgba(21,101,192,0.4)]">
              {{ brandMonogram }}
            </span>
          </component>
        </slot>

        <!-- Navigation -->
        <nav class="relative flex-1 py-4" :class="sidebarOpen ? 'px-2.5' : 'px-1'">
          <!-- Painel link (expanded) -->
          <component
            :is="linkComponent"
            v-if="sidebarOpen"
            :href="homeHref"
            class="group relative flex w-full items-center gap-2.5 rounded-lg px-3.5 py-2 mb-1.5
                   text-[13px] font-bold uppercase tracking-wide text-white transition-all duration-200
                   hover:brightness-110"
            style="background: linear-gradient(to right, #093F87, #062D5A); box-shadow: 0 2px 8px 0 rgba(9,63,135,0.25)"
          >
            <HomeIcon class="h-[18px] w-[18px] flex-shrink-0" />
            Painel
          </component>

          <!-- Painel link (collapsed) -->
          <component
            :is="linkComponent"
            v-else
            :href="homeHref"
            class="group relative flex items-center justify-center rounded-xl py-2.5 mb-1 transition-all duration-200"
            :class="isHomePath() ? 'bg-white/15 text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'"
          >
            <HomeIcon class="h-5 w-5 flex-shrink-0" />
            <span
              class="absolute left-full ml-3 whitespace-nowrap text-white text-xs py-1.5 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-50 pointer-events-none"
              style="background: #0A1E44"
            >
              Painel
            </span>
          </component>

          <!-- Sections -->
          <div v-for="section in navigation" :key="section.key || section.title">
            <!-- Section header (expanded) — gradient button -->
            <button
              v-if="sidebarOpen"
              type="button"
              @click="toggleSection(section.key || section.title)"
              class="flex w-full items-center gap-2.5 rounded-lg px-3.5 py-2 mb-1.5
                     text-[13px] font-bold uppercase tracking-wide text-white
                     transition-all duration-200 hover:brightness-110
                     focus:outline-none"
              style="background: linear-gradient(to right, #093F87, #062D5A); box-shadow: 0 2px 8px 0 rgba(9,63,135,0.25)"
            >
              <FolderIcon class="h-[18px] w-[18px] flex-shrink-0" />
              <span class="flex-1 text-left">{{ section.title }}</span>
              <ChevronRightIcon
                class="h-4 w-4 transition-transform duration-200"
                :class="sectionExpanded[section.key || section.title] ? 'rotate-90' : ''"
              />
            </button>

            <!-- Section header (collapsed) -->
            <button
              v-else
              type="button"
              @click="toggleSection(section.key || section.title)"
              class="group relative flex w-full items-center justify-center rounded-xl py-2.5 mb-1
                     text-gray-300 hover:bg-white/10 hover:text-white
                     transition-all duration-200 focus:outline-none"
            >
              <FolderIcon class="h-5 w-5 flex-shrink-0" />
              <span
                class="absolute left-full ml-3 whitespace-nowrap text-white text-xs py-1.5 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-50 pointer-events-none"
                style="background: #0A1E44"
              >
                {{ section.title }}
              </span>
            </button>

            <!-- Section items -->
            <div
              class="grid transition-[grid-template-rows] duration-200 ease-out"
              :style="{ gridTemplateRows: (!sidebarOpen || sectionExpanded[section.key || section.title]) ? '1fr' : '0fr' }"
            >
              <div :class="sidebarOpen ? 'overflow-hidden' : ''">
                <div :class="sidebarOpen ? 'space-y-0.5 mb-2' : 'space-y-1'">
                  <template v-for="item in section.items" :key="item.href || item.key || item.label">

                    <!-- Subgroup (item with children) -->
                    <template v-if="item.children">
                      <!-- Subgroup toggle (expanded sidebar) -->
                      <button
                        v-if="sidebarOpen"
                        type="button"
                        @click="toggleSubgroup(item.key || item.label)"
                        class="group relative flex w-full items-center gap-2.5 rounded-lg px-4 py-2
                               text-[13px] font-semibold transition-all duration-200
                               nav-subgroup focus:outline-none border border-white/[0.06]"
                        :class="hasActiveChild(item)
                          ? 'text-white border-white/[0.08]'
                          : 'text-white/70 hover:text-white'"
                      >
                        <component :is="item.icon || FolderIcon" class="h-[18px] w-[18px] flex-shrink-0" />
                        <span class="flex-1 text-left truncate">{{ item.label }}</span>
                        <ChevronRightIcon
                          class="h-3.5 w-3.5 flex-shrink-0 transition-transform duration-200"
                          :class="subgroupExpanded[item.key || item.label] ? 'rotate-90' : ''"
                        />
                      </button>

                      <!-- Subgroup toggle (collapsed sidebar — shows as folder tooltip) -->
                      <button
                        v-else
                        type="button"
                        @click="toggleSubgroup(item.key || item.label)"
                        class="group relative flex w-full items-center justify-center rounded-lg py-2.5 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 focus:outline-none"
                      >
                        <FolderIcon class="h-5 w-5 flex-shrink-0" />
                        <span
                          class="absolute left-full ml-3 whitespace-nowrap text-white text-xs py-1.5 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-50 pointer-events-none"
                          style="background: #0A1E44"
                        >
                          {{ item.label }}
                        </span>
                      </button>

                      <!-- Subgroup children -->
                      <div
                        class="grid transition-[grid-template-rows] duration-200 ease-out"
                        :style="{ gridTemplateRows: (!sidebarOpen || subgroupExpanded[item.key || item.label]) ? '1fr' : '0fr' }"
                      >
                        <div :class="sidebarOpen ? 'overflow-hidden' : ''">
                          <div :class="sidebarOpen ? 'space-y-0.5 ml-3' : 'space-y-1'">
                            <component
                              :is="linkComponent"
                              v-for="child in item.children"
                              :key="child.href || child.label"
                              :href="child.href"
                              class="group relative flex items-center text-[13px] font-medium transition-all duration-200"
                              :class="[
                                sidebarOpen
                                  ? 'gap-2.5 py-2 px-4 rounded-lg'
                                  : 'justify-center py-2.5 rounded-lg',
                                isActive(child)
                                  ? 'nav-child-active text-white border border-white/[0.08]'
                                  : 'nav-child text-white/75 border border-transparent hover:text-white'
                              ]"
                            >
                              <div
                                v-if="isActive(child)"
                                class="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full shadow-[0_0_8px_rgba(21,101,192,0.6)]"
                                style="background: #1565C0"
                              />
                              <component :is="child.icon || DocumentTextIcon" class="flex-shrink-0" :class="sidebarOpen ? 'h-[18px] w-[18px]' : 'h-5 w-5'" />
                              <span v-if="sidebarOpen" class="truncate">{{ child.label }}</span>
                              <span
                                v-else
                                class="absolute left-full ml-3 whitespace-nowrap text-white text-xs py-1.5 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-50 pointer-events-none"
                                style="background: #0A1E44"
                              >
                                {{ child.label }}
                              </span>
                            </component>
                          </div>
                        </div>
                      </div>
                    </template>

                    <!-- Regular item (no children) -->
                    <component
                      v-else
                      :is="linkComponent"
                      :href="item.href"
                      class="group relative flex items-center text-[13px] font-medium transition-all duration-200"
                      :class="[
                        sidebarOpen
                          ? 'gap-2.5 py-2 px-4 rounded-lg'
                          : 'justify-center py-2.5 rounded-lg',
                        isActive(item)
                          ? 'nav-item-active text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.2)] border border-white/[0.08]'
                          : 'nav-item text-white/70 border border-white/[0.06]'
                      ]"
                    >
                      <div
                        v-if="isActive(item)"
                        class="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full shadow-[0_0_8px_rgba(21,101,192,0.6)]"
                        style="background: #1565C0"
                      />
                      <component :is="item.icon || DocumentTextIcon" class="flex-shrink-0" :class="sidebarOpen ? 'h-[18px] w-[18px]' : 'h-5 w-5'" />
                      <span v-if="sidebarOpen" class="truncate">{{ item.label }}</span>
                      <span
                        v-else
                        class="absolute left-full ml-3 whitespace-nowrap text-white text-xs py-1.5 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-50 pointer-events-none"
                        style="background: #0A1E44"
                      >
                        {{ item.label }}
                      </span>
                    </component>

                  </template>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <!-- Footer -->
        <div class="relative border-t border-white/10 px-4 py-3 text-center">
          <span v-if="sidebarOpen && version" class="text-[10px] tracking-wider text-gray-500/50">{{ version }}</span>
          <span v-else-if="version" class="text-[10px] tracking-wider text-gray-500/50">{{ version.replace(/^v?(\d+\.\d+).*/, 'v$1') }}</span>
        </div>
      </div>
    </aside>

    <!-- Main content -->
    <div
      class="flex flex-col min-h-screen transition-all duration-300"
      :class="sidebarOpen ? 'ml-[260px]' : 'ml-14'"
    >
      <!-- Navbar -->
      <header class="sticky top-[2px] z-20 flex h-14 items-center justify-between bg-white px-4 lg:px-6" style="box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)">
        <div class="flex items-center">
          <!-- Hamburger -->
          <button
            type="button"
            class="p-2 rounded-lg text-gray-400 hover:text-[#093F87] hover:bg-gray-100/80 transition-all duration-200"
            @click="toggleSidebar"
          >
            <Bars3Icon class="h-5 w-5" />
          </button>

          <!-- Divider -->
          <div class="ml-3 mr-3 h-6 w-px bg-gray-200" />

          <!-- Header slot -->
          <div>
            <slot name="header" />
          </div>
        </div>

        <div class="flex items-center gap-3">
          <slot name="header-right" />

          <!-- User menu -->
          <div v-if="user" id="jagua-user-menu" class="relative">
            <button
              @click="toggleMenu"
              class="flex items-center gap-3 pl-2 pr-2 py-1.5 rounded-xl transition-all duration-200 hover:bg-gray-50"
            >
              <div
                class="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold"
                style="background: linear-gradient(180deg, #0B56B3 0%, #093F87 100%); box-shadow: 0 2px 6px rgba(9,63,135,0.3)"
              >
                {{ userInitials }}
              </div>
              <div class="text-left hidden sm:block">
                <span class="font-semibold text-sm text-gray-800 block leading-tight">{{ user.name }}</span>
                <span v-if="user.subtitle" class="text-[11px] text-gray-400 block leading-tight">{{ user.subtitle }}</span>
              </div>
              <ChevronDownIcon
                class="w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ml-1 hidden sm:block"
                :class="{ 'rotate-180': menuOpen }"
              />
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
                v-if="menuOpen"
                class="absolute right-0 mt-2 w-52 bg-white rounded-xl z-50 overflow-hidden"
                style="border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 12px 48px -8px rgba(0,0,0,0.12)"
              >
                <!-- Header -->
                <div class="flex items-center gap-3 px-4 py-3" style="background: #f8fafc; border-bottom: 1px solid rgba(0,0,0,0.04)">
                  <div
                    class="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style="background: linear-gradient(180deg, #0B56B3 0%, #093F87 100%); box-shadow: 0 2px 6px rgba(9,63,135,0.3)"
                  >
                    {{ userInitials }}
                  </div>
                  <div class="min-w-0">
                    <p class="text-sm font-semibold text-gray-800 truncate">{{ user.name }}</p>
                    <p v-if="user.subtitle" class="text-xs text-gray-400 mt-0.5 truncate">{{ user.subtitle }}</p>
                  </div>
                </div>

                <!-- Menu items slot -->
                <slot name="dropdown-items" />

                <!-- Logout -->
                <div style="border-top: 1px solid rgba(0,0,0,0.04)">
                  <button
                    @click="handleLogout"
                    class="w-full text-left px-4 py-2.5 text-sm hover:bg-red-50 flex items-center gap-3 text-red-500 transition-colors"
                  >
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                    </svg>
                    Sair
                  </button>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </header>

      <!-- Page content -->
      <main class="flex-1 px-6 pb-6 pt-3 lg:px-8 lg:pb-8 lg:pt-4">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Level 2 — items diretos (sem subgrupo) */
.nav-item {
  background: linear-gradient(to right, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
}
.nav-item:hover {
  background: linear-gradient(to right, rgba(255,255,255,0.12), rgba(255,255,255,0.07));
  border-color: rgba(255,255,255,0.1);
  color: #fff;
}
.nav-item-active {
  background: linear-gradient(to right, rgba(255,255,255,0.12), rgba(255,255,255,0.07));
}

/* Level 2 — subgrupo (toggle) */
.nav-subgroup {
  background: linear-gradient(to right, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
}
.nav-subgroup:hover {
  background: linear-gradient(to right, rgba(255,255,255,0.12), rgba(255,255,255,0.07));
  border-color: rgba(255,255,255,0.1);
}

/* Level 3 — relatórios (children) */
.nav-child {
  background: linear-gradient(to right, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
}
.nav-child:hover {
  background: linear-gradient(to right, rgba(255,255,255,0.08), rgba(255,255,255,0.05));
  color: #fff;
}
.nav-child-active {
  background: linear-gradient(to right, rgba(255,255,255,0.08), rgba(255,255,255,0.05));
}
</style>
