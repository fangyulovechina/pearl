<template>
  <div class="user">
    <div class="userName">
      <dl class="names">
       <dt><img src="../assets/images/user01.png" /></dt>
       <dd>
        <h3>{{$store.state.userInfo.nikeName}}</h3>
       </dd>
       <div class="clearfix"></div>
      </dl>
      <div class="shouyi">
       <dl>
        <dt>我的余额</dt>
        <dd>0.00元</dd>
       </dl>
       <dl>
        <dt>我的积分</dt>
        <dd>0</dd>
       </dl>
       <div class="clearfix"></div>
      </div><!--shouyi/-->
     </div><!--userName/-->
     
     <ul class="userNav">
      <!-- <li><span class="glyphicon glyphicon-list-alt"></span><a href="order.html">我的订单</a></li> -->
      <!-- <div class="height2"></div> -->
      <div class="state">
         <dl>
          <dt><a href="javascript:;"><img src="../assets/images/user1.png" /></a></dt>
          <dd><a href="javascript:;">待支付</a></dd>
         </dl>
         <dl>
          <dt><a href="javascript:;"><img src="../assets/images/user2.png" /></a></dt>
          <dd><a href="javascript:;">代发货</a></dd>
         </dl>
         <dl>
          <dt><a href="javascript:;"><img src="../assets/images/user3.png" /></a></dt>
          <dd><a href="javascript:;">待收货</a></dd>
         </dl>
         <dl>
          <dt><a href="javascript:;"><img src="../assets/images/user4.png" /></a></dt>
          <dd><a href="javascript:;">全部订单</a></dd>
         </dl>
         <div class="clearfix"></div>
      </div><!--state/-->
      <li><span class="glyphicon glyphicon-usd"></span><a href="javascript:;">我的优惠券</a></li>
      <li><span class="glyphicon glyphicon-map-marker"></span><a href="javascript:;">收货地址管理</a></li>
      <li><span class="glyphicon glyphicon-star-empty"></span><a href="javascript:;">我的收藏</a></li>
      <li><span class="glyphicon glyphicon-heart"></span><a href="javascript:;">我的浏览记录</a></li>
      <li><span class="glyphicon glyphicon-usd"></span><a href="javascript:;">余额提现</a></li>
	 </ul><!--userNav/-->
     <div class="lrSub">
       <router-link :to = "{name:'login'}" @click.native = "logOut">退出登录</router-link>
     </div>
     <div class="height1"></div>
  </div>
</template>

<script>
import store from './../store.js'
import {mapActions} from 'vuex'
export default {
  name: "User" ,
  methods: {
    ...mapActions(["logOut"])
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

<style scoped>
.user {
  width: 100%;
  margin: 0 auto;
}
.userName {
  position: relative;
  height: 160px;
  background: url("../assets/images/user01.png") left center repeat-x;
}
.names {
  width: 280px;
  padding: 23px 0;
  margin: 0 auto;
  height: 102px;
}
.names dt {
  float: left;
  width: 50px;
  height: 50px;
  -moz-border-radius: 3px; /* Gecko browsers */
  -webkit-border-radius: 3px; /* Webkit browsers */
  border-radius: 3px; /* W3C syntax */
  overflow: hidden;
  border: #fff 1px solid;
}
.names dt img {
  width: 50px;
  height: 50px;
}
.names dd {
  float: right;
  width: 200px;
  font-size: 1.4em;
}
.names dd h3 {
  height: 30px;
  line-height: 30px;
  color: #fff;
  font-size: 1.2em;
}
.names dd a {
  color: #ccc;
}
.userNav li {
  position: relative;
  height: 40px;
  width: 100%;
  padding-left: 35px;
  font-size: 1.3rem;
  background-color: #fff;
  border-bottom: #ddd 1px solid;
}
.userNav li span {
  position: absolute;
  width: 20px;
  left: 5px;
  top: 12px;
  color: #666;
  font-size: 1.8rem;
}
.userNav li.un7 a {
  background: none;
}
.userNav li a {
  display: block;
  height: 40px;
  line-height: 40px;
  width: 100%;
  padding-right: 10px;
  background: url("../assets/images/jian-new.png") right center no-repeat;
}
.userNav li .tel {
  position: absolute;
  right: 15px;
  top: 2px;
  display: block;
  height: 35px;
  line-height: 35px;
  text-align: right;
  right: 15px;
  background: none;
  color: #e93967;
}
.state{
padding:13px 0;
margin:0px auto 10px auto;
}
.state dl{
float:left;
width:25%;
text-align:center;
}
.state dt{
padding:4px 0;
}
.state dd{
font-size:1em;
padding:2px 0;
}
.state dd a{
color:#7b7b7b;
}
.shouyi{
	padding:7px 0;
	height:58px;
	background:url("../assets/images/tou.png");
	}
.shouyi dl{
	width:50%;
	float:left;
	text-align:center;
	color:#fff;
	font-size:1.2em;
	border-right:#ccc 1px solid;
	}
</style>