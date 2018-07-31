<template>
    <div>
        Test {{array}}
        <!-- <ul>
            <li v-for="e, index in array" >{{e}} - {{index}}</li>
        </ul>    -->

        <p>{{square}}</p>

        <button v-on:click="side++">{{'click me' | capital}}</button>
    </div>
</template>


<script>
export default {
    data(){
        return {
            array: [1,5,6],
            side: 10
        }
    },

    computed: {
        square(){
            return this.side * this.side;
        }
    },

    methods: {

    }

    // data: {
    //     array: [1,5,6]
    // }
}
</script>

<style>

</style>

