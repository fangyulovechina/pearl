<template>
  <div class="index-pro1">
    <router-link class="index-pro1-list"
			v-for = "(item,index) in $store.state.listA"
			:key = "index"
			:to = "{name:'detail',params:{aid:'A'+item.id}}"
			@click.native = "changeDetail({name:111})"
		>
      <dl>
      <dt><a href="javascript:;"><img :src = "item.pic"/></a></dt>
      <dd class="ip-text over"><a href="javascript:;">{{item.goods_name}}</a></dd>
      <dd class="ip-price"><strong>¥{{item.price_after_coupons}}</strong> <span>¥{{item.price}}</span></dd>
      </dl>
    </router-link>
  </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex"
export default {
	name: "ListA",
	data(){
		return {
			aid:null
		}
	},
	methods: {
		...mapActions(["changeDetail"]),
	},
	watch:{
		list:{
			handler: function (val, oldVal) { 
				this.$store._actions.changeDetail[0]()
			},
      immediate: true
		}
	},
	created(){
		this.list = this.$store.state.listA
	}
};
</script>

<style scoped>
  /*index-pro1*/
.index-pro1{
	padding:5px;
	}
.index-pro1 .index-pro1-list{
	float:left;
	width:50%;
	padding:5px;
	}
.index-pro1 .index-pro1-list dl{
	border:#ddd 1px solid;
	padding:5px;
	}
.index-pro1 .index-pro1-list dt{
	text-align:center;
	}
.index-pro1 .index-pro1-list .ip-text{
	height:40px;
	/* line-height:40px; */
	font-size:1.4rem;
	border-top:#ddd 2px solid;
	border-bottom:#ddd 1px dotted;
	}
.index-pro1 .index-pro1-list .ip-text span{
	font-size:1.2rem;
	color:#999;
	margin-left:10px;
	}
.index-pro1 .index-pro1-list .ip-price{
	height:30px;
	line-height:30px;
	color:#f60;
	}
.index-pro1 .index-pro1-list .ip-price span{
	color:#999;
	text-decoration:line-through;
	margin-left:10px;
	}
</style>