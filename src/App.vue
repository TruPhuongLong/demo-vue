<template>
  <div id="app">
    
        <list :item-source="itemSource">
          <template slot-scope="slotprops">
            <p>{{slotprops.item.text}}</p>
          </template>
        </list>

  </div>
</template>

<script>
import "./directives/index.js";
import list from './components/list.vue'

export default {
  components: {list},
  data(){
    return {
      itemSource: [
        {id: 0, text: '000'},
        {id: 1, text: '111'},
        {id: 2, text: '222'}
      ]
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
  height: 4000px;
}
</style>
