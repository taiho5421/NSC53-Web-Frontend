<script lang="ts">
import { defineComponent } from 'vue'
import ProductNavbar from '@/components/ProductNavbar.vue'

export default defineComponent({
  name: 'ProductInsert',
  components: {
    ProductNavbar: ProductNavbar
  }
})
</script>

<template>
<section class="container card mt-5 mb-5 pt-3 pb-3">
  <ProductNavbar></ProductNavbar>
</section>
</template>
