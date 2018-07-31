<template>
    <div>
        Test {{array}}
        <!-- <ul>
            <li v-for="e, index in array" >{{e}} - {{index}}</li>
        </ul>    -->
        <button v-on:click="toogle">{{'click me' | capital}}</button>

        <transition name="toggle">
            <p v-show="show">toogle</p>
        </transition>

        <hr />
        filter array:
        <ul>
            <li v-for="e in even(array)">{{e}}</li>
        </ul>
        


    </div>
</template>


<script>
export default {
    data(){
        return {
            array: [1,5,6, 4, 8],
            side: 10,
            show: true
        }
    },

    computed: {
        square(){
            return this.side * this.side;
        }
    },

    methods: {
        toogle(){
            console.log('toogle')
            if(this.show)
                this.show = false;
            else this.show = true;
        },

        even(array){
            return array.filter(e => e % 2 == 0);
        }
    }

    // data: {
    //     array: [1,5,6]
    // }
}
</script>





<style>
    .toggle-enter{
        /* opacity: 0; */
        transform: translateX(200px);
    }

    .toggle-enter-active{
        transition: all 2s ease-in;
    }
</style>

