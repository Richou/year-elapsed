import Vue from 'vue'
import App from './App.vue'
import {MdProgress} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(MdProgress);

new Vue({
  render: h => h(App),
}).$mount('#app');
