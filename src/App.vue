<template>
  <main
    font-sans
    class="flex flex-col h-screen justify-center items-center"
    un-bg="gray-50 dark:gray-900"
    un-text="gray-700 dark:gray-200"
  >
    <h1 class="mb-3 text-cool-gray-600 dark:text-cool-gray-400 text-xl">SIMPLEDSHEET</h1>
    <SimpledSheet :rows="10" :cols="10" class="p-4 rounded-2" un-bg="gray-100 dark:gray-800" />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Simpledsheet',
  meta: [
    {
      name: `description`,
      content: `A simple implementation of the standard spreadsheet.`,
    },
  ],
})
</script>
