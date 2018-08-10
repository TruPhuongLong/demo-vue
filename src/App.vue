<template>
  <div id="app">
    
        hi, im {{number}}
        <button @click="view = view === 'v-a' ? 'v-b' : 'v-a'">toggle</button>
        <transition name="fade" mode="out-in">
          <component :is="view"></component>
        </transition>

  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 10,
      view: "v-a"
    };
  },
  components: {
    "v-a": { template: `<div>v-a</div>` },
    "v-b": { template: `<div>v-b</div>` }
  }
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

.fade-enter-active, .fade-leave-active{
  transition: 0.5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}


</style>
