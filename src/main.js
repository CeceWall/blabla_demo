import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/packages/theme-chalk/lib/index.css';
import 'iview/dist/styles/iview.css';
import IView from 'iview';
import App from './App.vue';
import router from './router';
import './styles/main.scss';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(IView);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
