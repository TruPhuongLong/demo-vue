import Vue from 'vue';
import list from './list';

export default Vue.component('show-list', {
    template: `
        <div>
            <h1>show list page</h1>
            <list :itemSource="[1,2,3,4]"></list>

        </div>
    `
})