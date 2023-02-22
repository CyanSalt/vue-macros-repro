<script setup lang="ts">
const { values = [] } = defineProps<{
  values?: number[]
}>()

function add() {
  values.push(values.length)
}
</script>

<template>
  <div>
    <code><pre>{{ JSON.stringify(values) }}</pre></code>
    <button @click="add">Add</button>
  </div>
</template>
