<script lang="ts">
import { defineComponent } from 'vue';
import {mapActions, mapGetters} from "vuex";

export default defineComponent({
  data () {
    return {
      productCard: [],
    };
  },
  mounted () {
    this.fetchModulesCard()
  },
  computed: {
    ...mapGetters(['getModulesCard'])
  },
  methods: {
    ...mapActions(['postModuleCard']),
    async fetchModulesCard () {
      await this.postModuleCard()
      this.productCard = this.getModulesCard
    },
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
  </div>
</template>
