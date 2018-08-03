<template>
  <div id="app">
      <button @click="alert">alert props number</button>
    <labelx :number.sync="number" ></labelx>
  </div>
</template>

<script>
import Labelx from "./Label.vue";

export default {
  components: {Labelx },
  methods: {
    alert() {
      window.alert(this.number);
    }
  },
  props: ['number']
  
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
