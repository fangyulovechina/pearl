<template>
  <swipe class="my-swipe" :continuous = "true" :auto= "2000">
    <swipe-item class="slide"
      v-for = "(item,index) in msg"
      :key = "index"
    >
      <img :src = "item.src"/>
    </swipe-item>
  </swipe>
</template>

<script>
// import Vue from 'vue'
// import Swiper from 'swiper' ;
// import './../assets/css/swiper.min.css'
import 'vue-swipe/dist/vue-swipe.css'
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
  name: "Banner",
  data(){
    return{
      msg:null
    }
  },
  methods: {
    swip() {
      axios("/data/banner.json").then(res => {
        this.msg = res.data;
      })
    }
  },
  created() {
    this.swip();
  },
  components: {
    swipe: Swipe,
    swipeItem:SwipeItem
  }
};
</script>

<style lang='scss' scoped>
.my-swipe {
  height: 200px;
 
}
 
.slide {
  // background-color: #0089dc;
  // color: #fff;
  img{
    height:220px;
    display: block ;
    margin:0 auto ;
  }
}

</style>