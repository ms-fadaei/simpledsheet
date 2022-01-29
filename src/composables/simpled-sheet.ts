import { Ref } from 'vue'

let cells: Ref<string[][]>

export function initCells(rows: number, cols: number) {
  cells = ref(Array(rows).fill([...Array(cols).fill('')]))
}

export function useCell(row: number, col: number, rawValue: Ref<string>) {
  cells.value[row - 1][col - 1] = rawValue.value
  watch(rawValue, (value) => (cells.value[row - 1][col - 1] = value))

  const value = computed(() => {
    const cell = rawValue.value

    if (cell.startsWith('=')) {
      return new Function('return ' + cell.slice(1))()
    } else {
      return cell
    }
  })

  return {
    value,
  }
}
