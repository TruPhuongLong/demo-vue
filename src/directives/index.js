import Vue from 'vue'

export default Vue.directive('high-light', {
    inserted: function (el, binding){
        el.style.color = binding.value
    }
})


