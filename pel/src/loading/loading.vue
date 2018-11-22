<template>
<div class="main">
  <div class="loading">
      <span :style = "{background:bgColor}"></span>
      <span :style = "{background:bgColor}"></span>
      <span :style = "{background:bgColor}"></span>
      <span :style = "{background:bgColor}"></span>
      <span :style = "{background:bgColor}"></span>
  </div>
</div>  
</template>

<script>
export default {
  name: "Loading",
  props:{
    bgColor:{
      type:String,
      default:'yellow'
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 200%;
  height: 200%;
  position: fixed;
  z-index: 99999999;
  .loading{
    left:50%;
    top:50%; 
    position: fixed ;
    margin:-12.5%;
  }
}
.loading span {
  display: inline-block;
  width: 8px;
  height: 20px;
  border-radius: 4px;
  /* background: red; */
  -webkit-animation: load 1.04s ease infinite;
  margin:5px;
}
@-webkit-keyframes load {
  0%,
  100% {
    height: 10px;
    /* background: red; */
  }
  50% {
    height: 40px;
    margin-top: -20px;
    /* background: red; */
  }
}
.loading span:nth-child(2) {
-webkit-animation-delay: 0.13s;
}
.loading span:nth-child(3) {
  -webkit-animation-delay: 0.26s;
}
.loading span:nth-child(4) {
  -webkit-animation-delay: 0.39s;
}
.loading span:nth-child(5) {
  -webkit-animation-delay: 0.52s;
}
</style>
