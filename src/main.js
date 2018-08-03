import Vue from 'vue'
import App from './App.vue'
// import Label from './components/Label.vue'
// import Test from './components/Test'
// import Com from './components/Test-component.vue'
// import Vuex from 'vuex';
// import p1 from './components/page1.vue'



new Vue({
  el: '#app',
  render: h => h(App)
})









// Vue.use(Vuex)

// let store = new Vuex.Store({
//   state: {
//     number: 0
//   },
//   mutations: {
//     increment(state){
//       state.number++
//     }
//   }
// })

// store.commit('increment')
// console.log(store.state.number)




// Vue.filter('capital', string => {
//   return string.toUpperCase();
// })

// // Define a new component called todo-item
// Vue.component('hi', {
//   template: `
//     <div>
//       <h1>welcome here {{name}}, your level: {{level}}</h1>
//     </div>
//   `,
//   // props: ['name']
//   // props: {
//   //   name: Number
//   // }
//   props: {
//     name: [Number, String], 
//     level: {
//       required: true,
//       default: 0,
//       validator (value) {
//         return value >= 0 && value <= 3
//       }
//     }
//   }
// })

// //component 
// Vue.component('r', {
//   functional: true,
//   render: h => h('p', 'hi im new')
// })

// Vue.component('blabber', {
//   template: "<p>{{dialogue[currentLine%dialogue.length]}}</p>",
//   data () {
//     return {
//       currentLine: 0,
//       dialogue: [
//         'hello',
//         'how are you?',
//         'fine thanks',
//         'let\'s go drink!',
//         'alright, where?',
//         'to hello\'s bar',
//         'hello?'
//       ] 
//     }
//   },
//   mounted () {
//     setInterval(() => {
//       this.currentLine++
//     }, 2000) 
//   }
// })


// //pass to props:
// Vue.component('abc', {
//   template: `
//   <div>
//     <p>hi every body, im {{yourName || 'no name'}}</p>
//     <h1>{{this.$store.state.number}}</h1>
//     <button @click="inc">increment</button>
//   </div>
//   `,
//   props: {
//     yourName: String
//   },
//   // data: {
//   //   _name: this.yourName || 'no name'
//   // }
//   created(){
//     bus.$on('data', (data) => {
//       console.log(data)
//     })
//   },
//   mounted(){
//     bus.$emit('data', 'this is data')
//   }, 
//   methods: {
//     inc(){
//       this.$store.commit('increment')
//     }
//   }
// })

// var bus = new Vue()
// new Vue({
//   el: '#app',
//   store,
//   render: h => h(Com)
// })





