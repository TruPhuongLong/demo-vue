<template>
    <div class="container">
        Test {{array}}
        <!-- <ul>
            <li v-for="e, index in array" >{{e}} - {{index}}</li>
        </ul>    -->
        <button @click="toogle">{{'click me' | capital}}</button>

        <!-- <transition name="toggle">
            <p v-show="show">toogle</p>
        </transition> -->

        <hr />
        filter array:
        <ul>
            <!-- <li v-for="e in even(array)">{{e}}</li> -->
        </ul>

        <hr />
        transition many element:
        <!-- <div >
        <transition name="oppacity" >
            <p v-if="show" key="1">element 1</p>
            <p v-if="show == false" key="2">element 2</p>
        </transition>
        </div> -->
        <hr />
        <div >
            <transition name="slide" >
                <p :key="tran[index%(tran.length)]">{{tran[index%(tran.length)]}}</p>
            </transition>
        </div>
        


    </div>
</template>


<script>
export default {
  data() {
    return {
      array: [1, 5, 6, 4, 8],
      side: 10,
      show: true,
      index: 0,
      tran: ["element 1", "what are you doing", "hiiiiii"]
    };
  },

  computed: {
    square() {
      return this.side * this.side;
    }
  },

  methods: {
    toogle() {
      console.log("toogle");
      if (this.show) this.show = false;
      else this.show = true;

      this.index++;
    },

    even(array) {
      return array.filter(e => e % 2 == 0);
    }
  }

  // data: {
  //     array: [1,5,6]
  // }
};
</script>





<style>
.toggle-enter {
  /* opacity: 0; */
  transform: translateX(200px);
}

.toggle-enter-active {
  transition: all 2s ease-in-out;
}

.oppacity-enter,
.oppacity-leave {
  opacity: 0;
}
.oppacity-enter-active,
.oppacity-leave-active {
  transition: 1s;
}

.slide-enter{
    transform: translateX(200px);
}

.slide-enter-active{
    transition: 1s;
}

.slide-leave-active{
    transform: translateX(-200px)
}

p {
  margin: 0;
  position: absolute;
  font-size: 3em;
}

.container{
    width: 80%;
    margin: auto;
}


</style>

