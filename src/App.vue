<template>
  <component :is="$route.meta.layout || 'div'">

  </component>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app'
})
</script>
