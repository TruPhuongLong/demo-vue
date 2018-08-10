<template>
  <div id="app">
    <button @click="alert">alert props number</button>
      <hr />
          <labelx :number.sync="number" ></labelx>
<hr />
    <labelx :number.sync="number" ></labelx>
  </div>
</template>

<script>
import Labelx from "./Label.vue";

export default {
  components: { Labelx },
  methods: {
    alert() {
      window.alert(this.number);
    }
  },
//  props: ["number"],
// data(){
//     return {
//         number: 5
//     }
// },
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
