<template>
  <div class="pronav">
    <ul class="pronav">
      <li><router-link :to = "{name:'allList',query:{type:1}}">书籍</router-link></li>
      <li><router-link :to = "{name:'allList',query:{type:2}}">数码</router-link></li>
      <li><router-link :to = "{name:'allList',query:{type:3}}">家居</router-link></li>
      <li><router-link :to = "{name:'allList',query:{type:4}}">海外代购</router-link></li>
      <div class="clearfix"></div>
    </ul><!--pronav/-->
  </div>
</template>

<script>
  export default {
    name: "ProNav" ,
  }
</script>

<style scoped>
  /*pronav*/
.pronav{padding:5px;}
.pronav li{
	float:left;
	width:50%;
	padding:5px;
	}
.pronav li a{
	display:block;
	width:100%;
	height:35px;
	line-height:35px;
	text-align:center;
	background:#f60;
	color:#fff;
	}
</style>