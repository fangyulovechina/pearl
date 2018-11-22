<template>
  <div class="car">
     <header>
      <a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
      <div class="head-mid">
       <h1>购物车</h1>
      </div>
     </header>
     <div class="head-top">
      <img src="../assets/images/head.jpg" />
     </div><!--head-top/-->
     <table class="shoucangtab">
      <tr>
       <td width="75%"><span class="hui">购物车共有：<strong class="orange">{{car.length-1}}</strong> 件商品</span></td>
       <td width="25%" align="center" style="background:#fff url(../assets/images/xian.jpg) left center no-repeat;">
        <span class="glyphicon glyphicon-shopping-cart" style="font-size:2rem;color:#666;"></span>
       </td>
      </tr>
     </table>
      <ul class="list">
        <li
          v-for = "(item,index) in car"
          :key = "index"
          v-if = "index>0"
         >
         <div class="imgBox">
          <img :src = "item.pro.pic"/>
          <span>${{item.pro.price}}</span>
         </div>
         <div class="contBox">
          <p class="goods_name">
            {{item.pro.goods_name}}
          </p>
         </div>
         <div class="count">
           *{{item.count}}
         </div>
         </li>
      </ul>
     <div class="height1"></div>
    </div><!--gwcpiao/-->
  <!-- </div> -->
</template>

<script>
import store from './../store.js'
export default {
  name: "Car",
  data(){
    return{
      car:[]
    }
  },
  mounted(){
    this.car = JSON.parse(localStorage.getItem("fang"))[store.state.proIndex].car
    console.log(this.car)
  },
  
  beforeRouteEnter(to,from,next){
    if(!store.state.logFlag){
      next("/login")
    }else{
      next()
    }
  }
};
</script>

<style lang = "scss" scoped>

/*我的收藏*/
.shoucangtab {
  width: 100%;
}
.shoucangtab td {
  padding: 13px;
  background-color: #fff;
  border-bottom: #ddd 1px solid;
}
.jiesuan:hover{
	background:#f00;
	color:#fff;
  }
  .name{
    width:60%
  }
.list li{
  display: flex;
  justify-content: space-between ;
  padding:10px 0 0 20px;
  .imgBox{
    flex:2;
    img{
      width:80%;
      display: block;
      
      max-height: 50px;
    }
    span{
      display:block;
      margin:10px 30px;
    }
  }
  .contBox{
    flex:4;
    .goods_name{
      /* padding:10px 0 0 20px; */
      color:chocolate;
    }
  }
  .count{
    flex:1;
    padding-left:20px;
    padding-top:20px;
  }
}
</style>