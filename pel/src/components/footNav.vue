<template>
  <div class="footNav">
      <router-link
        :to = "{name:'home'}"
        tag = "dl"
        active-class = "navbar"
      >
        <dt><span class="glyphicon glyphicon-home"></span></dt>
        <dd>首页</dd>  
      </router-link>
      <router-link
        :to = "{name:'allList'}"
        tag = "dl"
        active-class = "navbar"
        @click.native = "changeDisc"
      >
        <dt><span class="glyphicon glyphicon-th"></span></dt>
        <dd>发现</dd>  
      </router-link> 
      <router-link
        :to = "{name:'car'}"
        tag = "dl"
        active-class = "navbar"
      >
        <dt><span class="glyphicon glyphicon-shopping-cart"></span></dt>
        <dd>购物车</dd>  
      </router-link>
      <router-link
        :to = "{name:'user'}"
        tag = "dl"
        active-class = "navbar"
      >
        <dt><span class="glyphicon glyphicon-user"></span></dt>
        <dd>我的</dd>
      </router-link>
      <div class="clearfix"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "footNav",
  data() {
    return {
      msg: [1, 2, 3, 4]
    };
  },
  methods: {
    ...mapActions(["changeDisc"])
  },
  mounted() {
    
  }
};
</script>

<style scoped>
.footNav {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999999;
  width: 100%;
  height: 55px;
  border-top: #ddd 1px solid;
  background: #fff url("../assets/images/ftbg.jpg") left bottom repeat-x;
}
.footNav dl {
  float: left;
  width: 25%;
  text-align: center;
}
.footNav dt {
  height: 35px;
  line-height: 35px;
  font-size: 2rem;
}
.footNav dd {
  height: 20px;
  line-height: 20px;
}
.footNav dl.ftnavCur a {
  color: #f60;
}
.navbar {
  color: #f60;
}
</style>