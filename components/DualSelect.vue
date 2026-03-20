<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
  options: { type: Array, default: () => [] },
  leftLabel: { type: String, default: 'Disponíveis' },
  rightLabel: { type: String, default: 'Selecionados' },
  height: { type: String, default: 'h-28' },
})

const emit = defineEmits(['update:modelValue'])

const leftSelected = ref(new Set())
const rightSelected = ref(new Set())

const selected = computed(() => {
  if (!props.modelValue) return new Set()
  return new Set(props.modelValue.split(',').filter(Boolean))
})

const available = computed(() =>
  props.options.filter(o => !selected.value.has(o.value))
)
const chosen = computed(() =>
  props.options.filter(o => selected.value.has(o.value))
)

function emitUpdate(newSet) {
  emit('update:modelValue', [...newSet].join(','))
}

function clickLeft(value, event) {
  const s = new Set(leftSelected.value)
  if (event.ctrlKey || event.metaKey) {
    if (s.has(value)) s.delete(value); else s.add(value)
  } else {
    s.clear()
    s.add(value)
  }
  leftSelected.value = s
}

function clickRight(value, event) {
  const s = new Set(rightSelected.value)
  if (event.ctrlKey || event.metaKey) {
    if (s.has(value)) s.delete(value); else s.add(value)
  } else {
    s.clear()
    s.add(value)
  }
  rightSelected.value = s
}

function moveRight() {
  if (!leftSelected.value.size) return
  const s = new Set(selected.value)
  leftSelected.value.forEach(v => s.add(v))
  leftSelected.value = new Set()
  emitUpdate(s)
}

function moveAllRight() {
  leftSelected.value = new Set()
  emitUpdate(new Set(props.options.map(o => o.value)))
}

function moveLeft() {
  if (!rightSelected.value.size) return
  const s = new Set(selected.value)
  rightSelected.value.forEach(v => s.delete(v))
  rightSelected.value = new Set()
  emitUpdate(s)
}

function moveAllLeft() {
  rightSelected.value = new Set()
  emitUpdate(new Set())
}

function dblLeft(value) {
  const s = new Set(selected.value)
  s.add(value)
  leftSelected.value = new Set()
  emitUpdate(s)
}

function dblRight(value) {
  const s = new Set(selected.value)
  s.delete(value)
  rightSelected.value = new Set()
  emitUpdate(s)
}
</script>

<template>
  <div class="inline-grid items-center gap-1.5" style="grid-template-columns: auto 36px auto;">
    <div>
      <div class="mb-1 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">{{ leftLabel }}</div>
      <div
        :class="['dual-select-list w-full rounded-lg border border-gray-300 bg-white px-1 py-1 text-sm text-gray-700', height]"
      >
        <div
          v-for="opt in available"
          :key="opt.value"
          class="dual-select-item"
          :class="{ 'dual-select-item--active': leftSelected.has(opt.value) }"
          @click="clickLeft(opt.value, $event)"
          @dblclick="dblLeft(opt.value)"
        >
          {{ opt.label }}
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center gap-1 pt-3">
      <button type="button" @click="moveAllRight" :disabled="!available.length" title="Adicionar todas"
        class="flex items-center justify-center w-7 h-6 rounded border border-gray-300 bg-gray-50 text-gray-500 font-bold text-[10px] leading-none cursor-pointer transition-all hover:bg-primary hover:text-white hover:border-primary disabled:opacity-25 disabled:cursor-default disabled:hover:bg-gray-50 disabled:hover:text-gray-500 disabled:hover:border-gray-300"
      >▶▶</button>
      <button type="button" @click="moveRight" title="Adicionar"
        class="flex items-center justify-center w-7 h-6 rounded border border-gray-300 bg-gray-50 text-gray-500 font-bold text-[10px] leading-none cursor-pointer transition-all hover:bg-primary hover:text-white hover:border-primary"
      >▶</button>
      <button type="button" @click="moveLeft" title="Remover"
        class="flex items-center justify-center w-7 h-6 rounded border border-gray-300 bg-gray-50 text-gray-500 font-bold text-[10px] leading-none cursor-pointer transition-all hover:bg-primary hover:text-white hover:border-primary"
      >◀</button>
      <button type="button" @click="moveAllLeft" :disabled="!chosen.length" title="Remover todas"
        class="flex items-center justify-center w-7 h-6 rounded border border-gray-300 bg-gray-50 text-gray-500 font-bold text-[10px] leading-none cursor-pointer transition-all hover:bg-primary hover:text-white hover:border-primary disabled:opacity-25 disabled:cursor-default disabled:hover:bg-gray-50 disabled:hover:text-gray-500 disabled:hover:border-gray-300"
      >◀◀</button>
    </div>

    <div>
      <div class="mb-1 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">{{ rightLabel }}</div>
      <div
        :class="['dual-select-list w-full rounded-lg border border-gray-300 bg-white px-1 py-1 text-sm text-gray-700', height]"
      >
        <div
          v-for="opt in chosen"
          :key="opt.value"
          class="dual-select-item"
          :class="{ 'dual-select-item--active': rightSelected.has(opt.value) }"
          @click="clickRight(opt.value, $event)"
          @dblclick="dblRight(opt.value)"
        >
          {{ opt.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dual-select-list {
  overflow-y: auto;
  user-select: none;
}
.dual-select-item {
  padding: 0 4px;
  cursor: default;
  white-space: nowrap;
  line-height: 1.3;
  font-size: 13px;
}
.dual-select-item:hover {
  background: #dbeafe;
}
.dual-select-item--active {
  background: #3b82f6;
  color: #fff;
}
.dual-select-item--active:hover {
  background: #2563eb;
}
.dual-select-list::-webkit-scrollbar {
  width: 12px;
}
.dual-select-list::-webkit-scrollbar-track {
  background: transparent;
}
.dual-select-list::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  border-radius: 7px;
  border: 2px solid transparent;
  background-clip: padding-box;
  min-height: 40px;
}
.dual-select-list::-webkit-scrollbar-thumb:hover {
  background: #888;
  border: 2px solid transparent;
  background-clip: padding-box;
}
.dual-select-list::-webkit-scrollbar-button:single-button {
  display: block;
  height: 14px;
  background: transparent;
}
.dual-select-list::-webkit-scrollbar-button:single-button:vertical:decrement {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M5 0.5 L9.5 5.5 L0.5 5.5 Z' fill='%23888' stroke='%23888' stroke-width='0.5' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat center center transparent;
}
.dual-select-list::-webkit-scrollbar-button:single-button:vertical:decrement:hover {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M5 0.5 L9.5 5.5 L0.5 5.5 Z' fill='%23555' stroke='%23555' stroke-width='0.5' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat center center transparent;
}
.dual-select-list::-webkit-scrollbar-button:single-button:vertical:increment {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0.5 0.5 L9.5 0.5 L5 5.5 Z' fill='%23888' stroke='%23888' stroke-width='0.5' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat center center transparent;
}
.dual-select-list::-webkit-scrollbar-button:single-button:vertical:increment:hover {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0.5 0.5 L9.5 0.5 L5 5.5 Z' fill='%23555' stroke='%23555' stroke-width='0.5' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat center center transparent;
}
</style>
