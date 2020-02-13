import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import i18n from './i18n'
import App from './App.vue'
import './plugins/axios'

var lang = '';
var citylist = '';
const appLoader = Vue.component('clean-air-counter', {
  functional: true,
  props: [lang, citylist],
  render: function (createElement, context) {
    return createElement(App, context.data, context.children);
  }
});

new Vue({
  el: '#app',
  i18n,
  components: {appLoader}
});

// Why do I need to nest loaders 3 times like this? Can I move the component to App.vue and put the props there?
// Why doesn't it render in live build mode anymore? Fix this first
// Then work out how to store the vars in a sensible place and act on them


/*
new Vue({
  i18n,
  render: createElement => {
    return createElement(App);
  }
}).$mount('#app')
*/
