import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import '@/registerServiceWorker';

Vue.config.productionTip = false;

const appNumber = 2;
[...Array(appNumber)].forEach(() => {
  const vm = new Vue({
    router,
    render: (h) => h(App),
  }).$mount();
  document.body.appendChild(vm.$el);
});
