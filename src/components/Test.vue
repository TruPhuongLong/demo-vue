<template>
    <div>
        Test {{array}}
        <ul>
            <li v-for="e, index in array" key="index">{{e}}</li>
        </ul>   
    </div>
</template>


<script>
export default {
    data(){
        return {
            array: [1,5,6]
        }
    }

    // data: {
    //     array: [1,5,6]
    // }
}
</script>

<style>

</style>

