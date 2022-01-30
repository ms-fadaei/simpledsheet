<template>
  <div>
    <table un-border="collapse 1">
      <thead>
        <tr>
          <th></th>
          <th v-for="col in cols" :key="col" un-border="1" class="w-24 h-10">
            {{ String.fromCharCode(64 + col) }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row">
          <th un-border="1" class="w-24 h-10">{{ row }}</th>
          <td v-for="col in cols" :key="col" un-border="1">
            <SimpledSheetCell
              :row="row"
              :col="col"
              :is-active="row === currentRow + 1 && col === currentCol + 1"
              @select="setCurrentCell"
              @move="moveCell"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { initCells } from '~/composables'

const $props = defineProps<{
  rows: number
  cols: number
}>()

// set up the initial state
const { rows, cols } = toRefs($props)
const currentRow = ref(-1)
const currentCol = ref(-1)

// init table cells
initCells(rows.value, cols.value)

// set current cell position when it is selected
function setCurrentCell({ row, col }: { row: number; col: number }) {
  currentRow.value = row - 1
  currentCol.value = col - 1
}

// move current cell position
function moveCell({ rowShift, colShift }: { rowShift: number; colShift: number }) {
  currentRow.value = (currentRow.value + rowShift + rows.value) % rows.value
  currentCol.value = (currentCol.value + colShift + cols.value) % cols.value
}
</script>
