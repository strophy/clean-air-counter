import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import i18n from './i18n'
import App from './App.vue'
import './plugins/axios'


Vue.config.productionTip = false
const mountEl = document.querySelector('#app');

new Vue({
  i18n,
  render: createElement => {
    const context = {
      props: { ...mountEl.dataset },
    };
    return createElement(App, context);
  }
}).$mount('#app')
