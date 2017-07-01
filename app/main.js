import jQuery from 'jquery'
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import App from './App.vue';
import BoostrapVue from 'bootstrap-vue';
// pages to load
import PracticePage from './pages/Practice.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const routes = [
  {
    path: '/practice',
    name: 'practice',
    component: PracticePage,
  },
  {
    path: '*',
    redirect: {
      name: 'practice',
    },
  },
];
const router = new VueRouter({
  routes,
  root: '/practice',
});

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(BoostrapVue);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: h => h(App),
});