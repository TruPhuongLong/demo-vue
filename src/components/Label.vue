<template>
    <div>
        label
        {{msg}}
        <h1>{{number}}</h1>
        <button @click="increment">Increment</button>
    </div>
</template>


<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  props: {
    number: Number
  },
  methods: {
    increment(){
      this.$emit('update:number', ++this.number)
    }
  }
};
</script>

<style>
</style>

