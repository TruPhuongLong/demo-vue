const hello = {
    template: `
      <div>
        <h1>hello {{name}}</h1>
        <button @click="onclick">pass age to App</button>
      </div>
    `,
    props: ['name'],
    methods: {
        onclick(e){
            this.$emit('age', 30)
        }
    }
  }

  export default hello;