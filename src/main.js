import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入px2rem
import '@/assets/rem';
//引入 axios
import axiosC from '@/httpRequest';
Vue.prototype.ajax = new axiosC();

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')