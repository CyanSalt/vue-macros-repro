<script setup lang="ts">
import HelloWorldA from './components/HelloWorldA.vue'
import HelloWorldB from './components/HelloWorldB.vue'
</script>

<template>
  <HelloWorldA :foo="1" bar="abc" />
  <HelloWorldB :foo="1" bar="abc" />
</template>
