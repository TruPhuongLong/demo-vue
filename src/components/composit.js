import Vue from 'vue';

const hello = {
    template: `
      <div>
        <h1>hello {{name}} you are {{age}} year olds</h1>
        <button @click="onclick">pass age to App</button>
      </div>
    `,
    props: ['name'],
    methods: {
        onclick(e) {
            this.$emit('age', 30)
        }
    },
    data() {
        return {
            age: 30
        }
    }
}

export const by = Vue.component('bye', {
    template: '<h1>bye {{name}}</h1>',
    data() {
        return {
            name: 'long'
        }
    }
})

export default hello;