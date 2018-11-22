import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
// import './assets/css/style.css'
import './assets/css/comon.css'
import './assets/js/jquery.min.js'
import './assets/js/bootstrap.js'
import './assets/css/bootstrap.css'
import './assets/css/response.css'
import './assets/css/response2.css'
import './assets/css/bootstrap-theme.min.css'
import './assets/js/jquery.spinner.js'
import router from './router'
import store from './store'
import * as filter from './filters'
import Loading from './loading/index.js'
import 'animate.css'
// console.log(import('animate.css'))
// let filKey = Object.keys(filter)
Vue.use(Loading)
Vue.filter("data",filter.fill.dateformat)
Vue.filter("zero",filter.zero)
Vue.config.productionTip = false
console.log(Vue.version)
let obj = {}
let b = Vue.set(obj,"fang",111)
console.log(obj)
obj.fang = 222
let vm = new Vue({
  router,
  store,
  data: {
    'class':{
      fangyu:true
    }
  },
  
  render: h => h(App)//createElement
}).$mount('#app')


// console.log(vm)
















// var obj = new Proxy(
    //   {},
    //   {
    //     get: function(target, key, receiver) {
    //       console.log(`getting ${key}!`);
    //       console.log(`target ${target}!`);
    //       return Reflect.get(target, key, receiver);
    //       // return 35
    //     },
    //     set: function(target, key, value, receiver) {
    //       console.log(`setting ${key}!`);
    //       console.log(`target ${target}!`);
    //       console.log(`value ${value}!`);
    //       return Reflect.set(target, key, value, receiver);
    //     }
    //   }
    // );
    // obj.name = 1
    // console.log(obj.name)
    