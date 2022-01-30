<template>
  <input
    v-if="isEditMode"
    :value="cells[row - 1][col - 1]"
    class="cell-input"
    @vnode-mounted="onInputMounted"
    @change="updateCell"
    @blur="isEditMode = false"
    @keydown="onKeyDown"
  />
  <span v-else class="flex items-center p-1 w-24 h-10 cursor-text" @click="isEditMode = true">
    {{ useCellValue(row, col) }}
  </span>
</template>

<script setup lang="ts">
import { useCellValue, useCells } from '~/composables'

const $props = defineProps<{
  row: number
  col: number
  isActive: boolean
}>()

// set up the initial state
const $emit = defineEmits(['select', 'move'])
const { row, col, isActive } = toRefs($props)
const isEditMode = ref(false)

// get cells 2D array
const cells = useCells()

// set focus when cell input is mounted
function onInputMounted({ el }: { el: HTMLInputElement }) {
  el.focus()
}

// emit select event when cell is on edit mode
watch(isEditMode, (isEditMode) => {
  if (isEditMode) {
    $emit('select', { row: row.value, col: col.value })
  }
})

// auto editMode when cell is activated from parent
watch(isActive, (isActive) => {
  if (isActive) {
    isEditMode.value = true
  }
})

// emit move event when user is using keys
const mappingKeys: {
  [key: string]: { rowShift: number; colShift: number }
} = {
  Tab: { rowShift: 0, colShift: 1 },
  Enter: { rowShift: 1, colShift: 0 },
  ArrowUp: { rowShift: -1, colShift: 0 },
  ArrowDown: { rowShift: 1, colShift: 0 },
  ArrowLeft: { rowShift: 0, colShift: -1 },
  ArrowRight: { rowShift: 0, colShift: 1 },
}

function onKeyDown(e: KeyboardEvent) {
  if (mappingKeys[e.key]) {
    e.preventDefault()
    isEditMode.value = false

    if (e.shiftKey && !e.key.includes('Arrow')) {
      mappingKeys[e.key].rowShift *= -1
      mappingKeys[e.key].colShift *= -1
    }

    $emit('move', mappingKeys[e.key])
  }
}

// update cell value when input is changed
function updateCell(e: Event) {
  const { value } = e.target as HTMLInputElement
  cells.value[row.value - 1][col.value - 1] = value.trim()
}
</script>
