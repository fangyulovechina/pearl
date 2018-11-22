<template>
  <div class="prolist">
		<!-- <keep-alive> -->
    <router-link :to = "{name:'detail',params:{aid:'B'+item.id}}" tag= "dl"
			v-for = "(item) in $store.state.list"
			:key = "item.id"
			
		>
      <dt>
				<a href="javascript:;">
					<img :src="item.pic" width="100" height="100" />
				</a>
			</dt>
      <dd class="over">
        <h3>
					<a href="javascript:;">{{item.goods_name}}</a>
				</h3>
        <div class="prolist-price">
					<strong>¥{{item.price_after_coupons}}</strong> <span>¥{{item.price}}</span>
				</div>
        <div class="prolist-yishou"><span>5.0折</span> <em>已售：{{item.sales}}</em></div>
      </dd>
      <div class="clearfix"></div>
    </router-link>
		<!-- </keep-alive> -->
  </div>
</template>

<script>
import Vue from 'vue'
  export default {
		name: "ListB",
		data(){
		return {
				list:null
			}
		},
		methods: {
				
		},
		mounted(){
			// console.v g                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    \log(this.$store.state.list)
		}
		
  }
</script>

<style scoped>
  .prolist{
	padding:0 10px;
	}
.prolist dl{
	padding:10px 0;
	border-bottom:#ddd 1px solid;
	}
.prolist dt{
	float:left;
	width:20%;
	margin-top:35px;
	}
.prolist dd{
	float:left;
	width:80%;
	padding-left:30px;
	}
.prolist dd h3{
	font-size:1.4rem;
	font-weight:bold;
	line-height:30px;
	}
.prolist-price{
	height:30px;
	line-height:30px;
	color:#f60;
	font-size:1.4rem;
	}
.prolist-price span{
	color:#999;
	text-decoration:line-through;
	margin-left:10px;
	}
.prolist-yishou span{
	display:inline-block;
	height:20px;
	line-height:20px;
	width:50px;
	text-align:center;
	font-size:1.2rem;
	color:#fff;
	background:#f60;
	}
.prolist-yishou em{
	font-style:normal;
	font-size:1.2rem;
	color:#999;margin-left:10px;	
	}
</style>