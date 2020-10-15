import Vue from 'vue'
import App from './App.vue'
import VueGoodTablePlugin from 'vue-good-table';

Vue.use(VueGoodTablePlugin);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
