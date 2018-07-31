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
        


    </div>
</template>


<script>
export default {
    data(){
        return {
            array: [1,5,6],
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
        transition: 2s;
    }
</style>

