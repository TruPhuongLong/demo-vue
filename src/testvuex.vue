<template>
  <div>

    <button @click="inc()">inc</button>
    <hr />

    test vuex
    {{count}}

  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    inc () {
      this.$store.commit('increment')
    }
  }
}
</script>

<style>

</style>
