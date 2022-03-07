import Vue from 'vue'
import Home from '../pages/home.vue'

console.log('test')
new Vue({
    el: '#main',
    render: h => h(Home),
    components: { Home }
});