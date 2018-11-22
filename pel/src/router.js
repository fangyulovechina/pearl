import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/Home.vue"
// let Home = () => import('./components/Home.vue')
let AllList = () => import(/* webpackChunkName: "group-fangyu" */ './components/AllList.vue')
let User = () => import(/* webpackChunkName: "group-666666" */ './components/User.vue')
// let Car = () => import(/* webpackChunkName: "group-555555" */ './components/Car.vue')
let Login = () => import(/* webpackChunkName: "group-444444" */ './components/Login.vue')
let Reg = () => import(/* webpackChunkName: "group-333333" */ './components/Reg.vue')
let Detail = () => import(/* webpackChunkName: "group-222222" */ './components/Detail.vue')
// import AllList from "./components/AllList.vue"
// import User from "./components/User.vue"
import Car from "./components/Car.vue"
// import Login from "./components/Login.vue"
// import Reg from "./components/Reg.vue"
// import Detail from "./components/Detail.vue"
Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      name: "home",
      path:"/home",
      component:Home
    },
    {
      name: "allList",
      path: "/allList",
      component: AllList,
    },
    {
      name: "user",
      path: "/user",
      component: User
    },
    {
      name: "car",
      path: "/car",
      component: Car
    },
    {
      name: "login",
      path: "/login",
      component: Login
    },
    {
      name: "reg",
      path: "/reg",
      component: Reg
    },
    {
      name: "detail",
      path: "/detail/:aid",
      component: Detail
    },
    // {
    //   name:"load",
    //   path:"/load",
    //   component: Loading
    // },
    {
      path:"/",
      redirect:"/home"
    }
  ]
})
