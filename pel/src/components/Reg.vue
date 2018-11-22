<template>
  <div class="reg">
    <userHead>
      <h1 slot="reg">注册</h1>
    </userHead>
    <form action="#" method="get" class="reg-login">
      <!-- 无接口本地储存模拟 -->
      <h3>已经有账号了？点此<router-link class="orange" :to = "{name:'login'}">登录</router-link></h3>
      <div class="lrBox">
       <div class="lrList2"><input type="text" placeholder="起个可爱的昵称" v-model = "nikeName"/> </div>
       <div class="lrList"><input type="text" placeholder="输入手机号码或者邮箱号------/^\d/" v-model = "tel"/>{{tel}}</div>
       <div class="lrList"><input type="text" placeholder="设置新密码（6-18位数字或字母" v-model = "pass" /></div>
       <div class="lrList"><input type="text" placeholder="再次输入密码" v-model = "passAgain"/></div>
      </div><!--lrBox/-->
      <div class="lrSub">
       <input type="button" value="立即注册" @click = "reg" />
      </div>
     </form><!--reg-login/-->
     <div class="height1"></div>
  </div>
</template>

<script>
import userHead from "./userHead.vue";
import store from './../store.js'
export default {
  name: "reg",
  data() {
    return {
      userInfo:[],
      nikeName: "",
      tel: "",
      pass: "",
      passAgain: "",
      userInfo: {},
      errorBorder: false
    };
  },
  components: {
    userHead
  },
  methods: {
    reg() {
      let userInfo = eval(localStorage.getItem("fang"));
        let newId = {};
      if (/^\d/.test(this.tel) && this.pass == this.passAgain) {
        for (let i = 0; i < userInfo.length; i++) {
          if (userInfo[i].tel == this.tel ) {
            // alert("老铁，你来晚了，换个号试试");
            break
          }
           else{
            newId.tel = this.tel;
            newId.nikeName = this.nikeName;
            newId.pass = this.pass;
            newId.car = [{pro:{},count:0}];
            userInfo.push(newId);
            localStorage.setItem("fang", JSON.stringify(userInfo));
            this.$router.replace({ name: "login" });
          }
        }
      } else {
        confirm("你是不是哪嘎错了？");
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.lrList {
  input {
    width: 80%;
  }
}
.lrList2 {
  border-bottom: #ddd 1px solid;
  height: 46px;
}
.lrList2 input {
  float: left;
  width: 70%;
}
.lrList2 button {
  float: right;
  border: 0;
  padding: 0;
  margin: 0;
  margin: 3px 0;
  width: 28%;
  height: 38px;
  line-height: 38px;
  background: #f60;
  color: #fff;
  -moz-border-radius: 4px; /* Gecko browsers */
  -webkit-border-radius: 4px; /* Webkit browsers */
  border-radius: 4px; /* W3C syntax */
}
.lrBox {
  padding: 0 8px;
  background: #fff;
}
.lrBox input,
.lrBox select {
  border: 0;
  padding: 0;
  margin: 0;
  height: 45px;
  line-height: 45px;
  background: none;
}
</style>