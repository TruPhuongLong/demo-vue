import Vue from 'vue'
import App from './App.vue'
import Label from './components/Label.vue'
import Test from './components/Test'
import Com from './components/Test-component.vue'

Vue.filter('capital', string => {
  return string.toUpperCase();
})

// Define a new component called todo-item
Vue.component('hi', {
  template: `
    <div>
      <h1>welcome here {{name}}</h1>
    </div>
  `,
  // props: ['name']
  // props: {
  //   name: Number
  // }
  props: {
    name: [Number, String]
  }
})

//component 
Vue.component('r', {
  functional: true,
  render: h => h('p', 'hi im new')
})

new Vue({
  el: '#app',
  render: h => h(Com)
})





