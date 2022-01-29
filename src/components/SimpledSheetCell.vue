<template>
  <input
    v-if="isEditMode"
    :value="cells[row - 1][col - 1]"
    class="flex items-center p-1 w-24 h-10"
    @vnode-mounted="onInputMounted"
    @change="updateCell"
    @blur="isEditMode = false"
    @keydown="(e) => e.keyCode === 13 && (isEditMode = false)"
  />
  <span v-else class="flex items-center p-1 w-24 h-10" @click="isEditMode = true">
    {{ useCellValue(row, col) }}
  </span>
</template>

<script setup lang="ts">
import { useCellValue, useCells } from '~/composables'

const $props = defineProps<{
  row: number
  col: number
}>()

const { row, col } = toRefs($props)

const isEditMode = ref(false)
const cells = useCells()

function onInputMounted({ el }: { el: HTMLInputElement }) {
  el.focus()
}

function updateCell(e: Event) {
  const { value } = e.target as HTMLInputElement
  cells.value[row.value - 1][col.value - 1] = value.toString().trim()
}
</script>
