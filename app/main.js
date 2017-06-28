import jQuery from 'jquery'
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import App from './App.vue';
// import HomePage from './pages/HomePage.vue';
// import AboutPage from './pages/AboutPage.vue';
import ExamplePage from './pages/ExamplePage.vue';
import BoostrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const routes = [
  {
    path: '/examples',
    name: 'examples',
    component: ExamplePage,
  },
  {
    path: '*',
    redirect: {
      name: 'examples',
    },
  },
];
const router = new VueRouter({
  routes,
  root: '/examples',
});

Vue.use(Vuetify);
Vue.use(VueRouter);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: h => h(App),
});