import Vue from 'vue';

export default Vue.component('list', {
    template: `
        <div>
            <ul>
                <li v-for="item in itemSource">{{item}}</li>
            </ul>
        </div>
    `,
    props: {
        itemSource: Array,
    }
})