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
            <SimpledSheetCell :row="row" :col="col" />
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

const { rows, cols } = toRefs($props)
initCells(rows.value, cols.value)
</script>
