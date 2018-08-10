<template>
  <div id="app">
    
        hi, im {{number}}
        <button @click="add">Add</button>
        <button @click="shift">shift</button>
        <button @click="shuffle">shuffle</button>

<transition-group name="fade" tag="ul">
        <!-- <ul> -->
          <li v-for="item in items" :key="item">{{item}}</li>
        <!-- </ul> -->
</transition-group>

  </div>
</template>

<script>
directives: {
  yellow: {
    inserted: function(el){
      el.style.color = 'yellow'
    }
  }
}
export default {
  data() {
    return {
      items: [3, 5, 6]
    };
  },
  methods: {
    add: function() {
      this.items.push(Math.floor(Math.random() * 100));
    },
    shift: function() {
      this.items.shift();
    },
    shuffle: function () {
      this.items = _.shuffle(this.items)
    }
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

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
