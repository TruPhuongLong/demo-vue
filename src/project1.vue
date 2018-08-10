<template>
    <div>
        project1
        <div v-html="html"></div>
        <input v-model="content.name" />
    </div>
</template>

<script>
export default {
  data() {
    return {
      html: "<h1>hi</h1>",
      content: {
          name: 'long'
      }
    };
  },
  watch: {
    //   content: {
    //       handler(newval, oldval){
    //           console.log(newval)
    //       },
    //       immediate: false,
    //       deep: true
    //   }
    content: {
        handler: 'log',
        deep: true
    },
    
  },
  methods: {
      log(val){
          console.log(val.name)
      }
  }, 
  beforeCreate(){
      console.log('beforeCreate')
  },
  created(){
      console.log('created')
  },
  beforeMount(){
      console.log('beforeMout')
  },
  mounted(){
      console.log('mounted')
  },
  beforeUpdate(){
      console.log('beforeUpdate')
  },
  updated(){
      console.log('updated')
  },
  beforeDestroy(){
      console.log('beforeDestroy')
  },
  destroyed(){
      console.log('destroy')
  }
};
</script>

<style>
</style>


