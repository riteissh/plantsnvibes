// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueTouch from 'vue-touch';
import Trend from 'vuetrend';
import Toasted from 'vue-toasted';
import VueApexCharts from 'vue-apexcharts';

import store from './store';
import router from './Routes';
import App from './App';
import layoutMixin from './mixins/layout';
import Widget from './components/Widget/Widget';
import firebase from "firebase";
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyD7smlm1LtQdvEwilx6pUuqULl86oawDqQ",
  authDomain: "plants-n-vibes.firebaseapp.com",
  projectId: "plants-n-vibes",
  storageBucket: "plants-n-vibes.appspot.com",
  messagingSenderId: "381574353843",
  appId: "1:381574353843:web:c29801343131cf6a1eb1c6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
  
});


Vue.use(BootstrapVue);
Vue.use(VueTouch);
Vue.use(Trend);
Vue.component('Widget', Widget);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg',
  },
});
Vue.component('apexchart', VueApexCharts);
Vue.mixin(layoutMixin);
Vue.use(Toasted, {duration: 10000});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
