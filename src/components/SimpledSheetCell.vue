<template>
  <span v-if="mode === 'show'" class="flex items-center p-1 w-24 h-10" @click="mode = 'edit'">
    {{ value }}
  </span>
  <input
    v-else
    v-model="rawValue"
    class="flex items-center p-1 w-24 h-10"
    @vnode-mounted="onInputMounted"
    @blur="mode = 'show'"
    @keydown="(e) => e.keyCode === 13 && (mode = 'show')"
  />
</template>

<script setup lang="ts">
import { useCell } from '~/composables'

const $props = defineProps<{
  row: number
  col: number
}>()

const { row, col } = toRefs($props)

const mode = ref('show')
const rawValue = ref('')
const { value } = useCell(row.value, col.value, rawValue)

function onInputMounted({ el }: { el: HTMLInputElement }) {
  el.focus()
}
</script>
