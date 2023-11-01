<script lang="ts">
import { defineComponent } from 'vue';
import {mapActions, mapGetters} from "vuex";

<<<<<<< HEAD

export default defineComponent({
  data () {
    return {
      modulesCard: [],
    };
  },
  mounted () {
    this.fetchProductCardSel()
=======
export default defineComponent({
  data () {
    return {
      productCard: [],
    };
  },
  mounted () {
    this.fetchModulesCard()
>>>>>>> 5406860f4e0ef11849a5cf9ecd5f68e3395330e7
  },
  computed: {
    ...mapGetters(['getModulesCard'])
  },
  methods: {
<<<<<<< HEAD
    ...mapActions(['postModulesCardSel']),
    async fetchProductCardSel() {
      await this.postModulesCardSel()
      this.modulesCard = this.getModulesCard
=======
    ...mapActions(['postModuleCard']),
    async fetchModulesCard () {
      await this.postModuleCard()
      this.productCard = this.getModulesCard
>>>>>>> 5406860f4e0ef11849a5cf9ecd5f68e3395330e7
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
<<<<<<< HEAD
    <div v-for="nl in modulesCard" v-html="parseText(nl.texts, nl)"></div>
=======
    <div v-for="nl in productCard" v-html="parseText(nl.texts, nl)"></div>
>>>>>>> 5406860f4e0ef11849a5cf9ecd5f68e3395330e7
  </div>
</template>
