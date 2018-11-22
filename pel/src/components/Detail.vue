<template>
  <div class="detail">
    <header>
      <a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
      <div class="head-mid">
        <h1>产品详情</h1>
      </div>
    </header>
    <swipe class="my-swipe" :continuous = "true" :auto= "2000">
    <swipe-item class="slide"
     
    >
      <img :src = "pro.pic"/>
    </swipe-item>
    </swipe>
    <table class="jia-len">
      <tr>
       <th><strong class="orange">{{pro.price}}$</strong></th>
       <td>
       </td>
      </tr>
      <tr>
       <td>
        <p class="hui">{{pro.goods_name}}</p>
       </td>
       <td align="right">
        <a href="javascript:;" class="shoucang"><span class="glyphicon glyphicon-star-empty"></span></a>
       </td>
      </tr>
    </table>
    <div class="bbox">
      数量：
      <span>{{$store.state.proCount}}</span>
      <button class="add bg-primary" @click = "addPro">加入购物车</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";
import store from './../store.js';
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "Banner",
  data() {
    return {
      msg: null,
      pro: {},
      route: this.$route
    };
  },
  components: {
    swipe: Swipe,
    swipeItem: SwipeItem
  },
  methods: {
    ...mapActions(["addPro"])
  },
  computed: {
    // ...mapGetters(["proCount"])
  },
  mounted() {
    if (this.$route.params.aid[0] == "A") {
      this.$store.state.listA.map((item, index) => {
        if (item.id == this.$route.params.aid.slice(1)) this.pro = item;
      });
    } else if (this.$route.params.aid[0] == "B") {
      this.$store.state.list.map((item, index) => {
        if (item.id == this.$route.params.aid.slice(1)) this.pro = item;
      });
    }
  },
  // beforeDestroy(){
  //   // store.dispatch("proInfo",this.pro)
  // },
  beforeDestroy(){
    if(this.$store.state.proCount != 0){
      let Info = localStorage.getItem("fang")
      let userInfo = JSON.parse(Info)
        // console.log(userInfo)
        let carList = {}
        carList.pro = this.pro
        carList.count = this.$store.state.proCount
        userInfo[this.$store.state.proIndex].car.push(carList)
        // console.log(userInfo)
        store.dispatch("proInfo",this.pro)
        localStorage.setItem("fang",JSON.stringify(userInfo))
        // console.log(this.$store.state.proIndex)
        // console.log(this.$store.state.proInfo)
        // console.log(this.$store.state.proCount)
      store.dispatch("zero")
    }
  }
};
</script>

<style lang="scss" scoped>
/*加减*/
.jia-len {
  width: 100%;
  margin: 10px 0 0 0;
  overflow: hidden;
}
.jia-len tr {
  box-sizing: border-box;
  width: 80%;
}
.jia-len td {
  padding: 15px 5px;
  border-bottom: #ddd 1px solid;
  border-top: #ddd 1px solid;
  width: 100%;
}
.jia-len th {
  border-bottom: #ddd 1px solid;
  font-size: 1.6rem;
  border-top: #ddd 1px solid;
  padding: 15px 5px;
}
.shoucang {
  font-size: 3rem;
  color: #999;
}
.shoucang:hover {
  color: #f60;
}
.proTitle {
  height: 37px;
  border-top: #ddd 1px solid;
  border-bottom: #ddd 1px solid;
  line-height: 35px;
  font-size: 1.4rem;
  padding-left: 10px;
}
.bbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  font: 20px/30px "";
  .count {
    outline-color: transparent;
    margin-top: 10px;
    // padding-left:20px;
    width: 15%;
    height: 30%;
    text-align: center;
  }
  .add {
    height: 60%;
    right: 20px;
    top: 15px;
    font: 20px/30px "";
    outline-color: transparent;
  }
}
.my-swipe {
  height: 380px;
}

.slide {
  // background-color: #0089dc;
  // color: #fff;
  img {
    width: 100%;
    display: block;
    margin: 0 auto;
  }
}
td {
  .name {
    // width:300px; ;
    display: block;
  }
}
</style>