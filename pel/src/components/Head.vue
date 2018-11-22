<template>
  <div class="head">
    <form action="#" method="get" class="search">
			<input type="text" class="seaText fl" />
			<input type="submit" value="搜索" class="seaSub fr" />
    </form>
    <ul class="reg-login-click" v-if = "!$store.state.logFlag">
			<li>
				<router-link
					:to = "{name:'login'}"
					class="lbg"
				>
					登录
				</router-link>
			</li>
			<li>
				<router-link
					:to = "{name:'reg'}"
					class="rbg"
				>
					注册
				</router-link>
			</li>
			<div class="clearfix"></div>
    </ul>
  </div>
</template>

<script>
import store from './../store.js'
export default {
  name: "Head",
  mounted() {
    // console.log(this)
  }
};
</script>

<style scoped>
.search {
  /* margin:50px 0 0 0; */
  width: 100%;
  height: 50px;
  padding: 10px;
}
.search input {
  border: 0;
  background: none;
  margin: 0;
  padding: 0;
}
.search .seaText {
  width: 80%;
  height: 30px;
  line-height: 30px;
  border: #ddd 1px solid;
  -moz-border-radius: 3px; /* Gecko browsers */
  -webkit-border-radius: 3px; /* Webkit browsers */
  border-radius: 3px; /* W3C syntax */
  background: #f1f1f1;
}
.search .seaSub {
  width: 18%;
  height: 30px;
  line-height: 30px;
  -moz-border-radius: 3px; /* Gecko browsers */
  -webkit-border-radius: 3px; /* Webkit browsers */
  border-radius: 3px; /* W3C syntax */
  background: #f60;
  color: #fff;
}
.reg-login-click {
  padding: 0 5px 10px 5px;
}
.reg-login-click li {
  width: 50%;
  padding: 0 5px;
  float: left;
}
.reg-login-click li a {
  display: block;
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background: #f60;
  color: #fff;
}
.reg-login-click li a.rlbg {
  background: #06f;
}
.reg-login-click li a.lbg{
	background: #f60 ;
}
.reg-login-click li a.rbg{
	background: #06f;
}
</style>