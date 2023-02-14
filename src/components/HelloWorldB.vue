<script setup lang="ts">
import type { BaseProps } from './types'

interface IProps extends BaseProps {
  bar: string,
}

const props = defineProps<IProps>()
</script>

<template>
  <div>
    HellowWorldB Props:<br>
    {{ JSON.stringify(props, null, 2) }}
  </div>
</template>
