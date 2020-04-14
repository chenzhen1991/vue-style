import Vue from 'vue'
import App from './App.vue'
import create from './utils/create';
console.dir(create);
// import '@/icons';

Vue.config.productionTip = false
Vue.prototype.$create = create
new Vue({
  render: h => h(App),
}).$mount('#app')
