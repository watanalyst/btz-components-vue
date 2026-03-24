<script setup>
// RadioGroup é um alias para SegmentedControl — mantido para compatibilidade
import SegmentedControl from './SegmentedControl.vue'
</script>

<template>
  <SegmentedControl v-bind="$attrs" />
</template>

<script>
export default { inheritAttrs: false }
</script>
