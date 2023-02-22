<script setup lang="ts">
import { getCurrentInstance } from "vue";

const { values = [] } = defineProps<{
  values?: number[];
}>();

const instance = getCurrentInstance();

function add() {
  values.push(values.length);
  instance!.proxy!.$forceUpdate();
}
</script>

<template>
  <div>
    <code>
      <pre>{{ JSON.stringify(values) }}</pre>
    </code>
    <button @click="add">Add</button>
  </div>
</template>
