import Vue from 'vue'
import App from './App.vue'
import Label from './components/Label.vue'
import Test from './components/Test'

new Vue({
  el: '#app',
  render: h => h(Test)
})


Vue.filter('capital', string => {
  return string.toUpperCase();
})