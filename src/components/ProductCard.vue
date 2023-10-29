<script lang="ts">
import { defineComponent } from 'vue';
import RequestAPIService from '@/service/requestAPI.service';

export default defineComponent({
  data () {
    return {
      productCard: null,
    };
  },
  async mounted () {
    this.productCard = await RequestAPIService.postProductCard();
  },
  methods: {
    parseText (text: any, data: any) {
      return text.replace(/{{\s*(\w+)\s*}}/g, (match: any, key: any) => {
        return data[key]
      })
    }
  },
})
</script>
<template>
  <div class="d-flex flex-wrap justify-content-around text-center">
    <div v-for="nl in productCard" v-html="parseText(nl.texts, nl)"></div>
    <p>hello</p>
  </div>
</template>
