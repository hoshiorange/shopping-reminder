import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBWt0xdKp6sU7SSpn2VulTDMugdV3s54Y0",
  authDomain: "my-address-pj-e8e1a.firebaseapp.com",
  projectId: "my-address-pj-e8e1a",
  storageBucket: "my-address-pj-e8e1a.appspot.com",
  messagingSenderId: "327404377921",
  appId: "1:327404377921:web:7b52097558f458c099f3c0",
  measurementId: "G-JLZ8ELRDT6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
