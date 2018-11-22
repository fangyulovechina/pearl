<template>
  <div id="app">
    <!-- <ListHead></ListHead> -->
    <!-- <AllList></AllList> -->
    <!-- <Head></Head> -->
    <!-- <Home></Home> -->
    <!-- {{}} -->
    <Loading v-if = "$store.state.loadFlag"></Loading>
    <transition
      enter-active-class="animated fadeIn"
    >
      <router-view></router-view>
    </transition>
    <footNav></footNav>
  </div>
</template>
<script>
import Head from "./components/Head.vue";
import Home from "./components/Home.vue";
import footNav from "./components/footNav.vue";
import AllList from "./components/AllList.vue";
import ListHead from "./components/ListHead.vue";
import Loading from "./loading/loading.vue";
import store from "./store.js";
export default {
  name: "App",
  components: {
    AllList,
    ListHead,
    Home,
    footNav,
    Head
  },
  
  watch: {
    $route(a, b) {
      if (a.query.type == 1) {
        store.dispatch("changeBook");
      } else if (a.query.type == 2) {
        store.dispatch("changeDigital");
      } else if (a.query.type == 3) {
        store.dispatch("changeHouse");
      } else if (a.query.type == 4) {
        store.dispatch("changeOversea");
      }
    }
  },
  mounted() {
    if (!localStorage.getItem("fang")) {
      let userInfoF = [
        {
          tel: "123456",
          nikeName: "fangyu",
          pass: "123",
          car:[{pro:{},count:0}]
        }
      ];
      localStorage.setItem("fang", JSON.stringify(userInfoF));
    }
  }
};
</script>

<style lang="scss">
</style>
