<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from '@/components/ProductCard.vue'

export default defineComponent({
  name: 'ProductSelect',
  components: {
    ProductCard: ProductCard
  }
})
</script>

<template>
  <section class="container card mt-5 mb-5 pt-3 pb-3">
    <header class="card-header">
      <h3>商品列表</h3>
    </header>
    <article class="card-body">
      <ProductCard></ProductCard>
    </article>
    <footer class="card-footer">
    </footer>
  </section>
</template>
