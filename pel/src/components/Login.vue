<template>
  <div class="login">
     <userHead>
        <h1 slot="log">登录</h1>       
     </userHead>
     <form action="#" method="get" class="reg-login">
      <h3>还没有账号？点此<router-link class="orange" :to="{'name':'reg'}">注册</router-link></h3>
      <div class="lrBox">
       <div class="lrList"><input type="text" placeholder="输入手机号码或者邮箱号" v-model = "tel"/></div>
       <div class="lrList"><input type="text" placeholder="输入密码" v-model = "pass"/></div>
      </div><!--lrBox/-->
      <div class="lrSub">
       <input type="button" value="立即登录" @click = "log"/>
      </div>
     </form><!--reg-login/-->
     <div class="height1"></div>
  </div>
</template>

<script>
import userHead from "./userHead.vue";
import store from './../store.js'
export default {
  name: "Login",
  components: {
    userHead
  },
  data() {
    return {
      tel: "",
      pass: ""
    };
  },
  methods: {
    log() {
      var login = { username: this.tel, password: this.pass };
      var dataJson = window.localStorage.getItem("fang");
      var success = null;
      dataJson = eval("(" + dataJson + ")");
      for (var i = 0; i < dataJson.length; i++) {
        if (
          dataJson[i].tel == login.username &&
          dataJson[i].pass == login.password
        ) {
          store.dispatch("sentNike",{products:dataJson[i],index:i})
          store.dispatch("changeLog") 
          this.$router.replace({ name: "user" });
          success = 1;
        }
      }
      if (success == null) {
        alert("用户名或密码错误");
      }
    }
  }
};
</script>

<style scoped>
.reg-login h3 {
  font-size: 1.4rem;
  height: 30px;
  line-height: 30px;
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
.lrList {
  border-bottom: #ddd 1px solid;
}
.lrList input,
.lrBox select {
  width: 100%;
}
.lrBox select {
  color: #a9a9a9;
}
</style>