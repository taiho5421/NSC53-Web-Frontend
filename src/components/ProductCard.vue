<script lang="ts">
import { defineComponent } from 'vue';
import {mapActions, mapGetters} from "vuex";


export default defineComponent({
  data () {
    return {
      modulesCard: [],
    };
  },
  mounted () {
    this.fetchProductCardSel()
  },
  computed: {
    ...mapGetters(['getModulesCard'])
  },
  methods: {
    ...mapActions(['postModulesCardSel']),
    async fetchProductCardSel() {
      await this.postModulesCardSel()
      this.modulesCard = this.getModulesCard
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
    <div v-for="nl in modulesCard" v-html="parseText(nl.texts, nl)"></div>
  </div>
</template>
