<template>
    <div>
        <div v-for="item in itemSource" :key="item.id">
            <slot :item="item"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        itemSource: Array,
    }
}
</script>

