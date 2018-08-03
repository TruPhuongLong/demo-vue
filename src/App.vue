<template>
  <div id="app">
    work
    <hello name="Long" @age="age"></hello>
    <hr />
    <bye></bye>
    <hr />
    <labelx></labelx>
  </div>
</template>

<script>

import hello from './components/composit.js'
import Labelx from './components/Label.vue'

export default {
  components: {hello, Labelx},
  methods: {
    age(n){
      window.alert(n)
    }
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
