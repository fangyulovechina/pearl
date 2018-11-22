<template>
  <div class="userhead">
    <header>
      <a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
      <div class="head-mid">
        <slot name="log"></slot>
        <slot name="reg"></slot>
      </div>
    </header>
    <div class="head-top">
      <img src="./../assets/images/head.jpg" />
    </div><!--head-top/-->
  </div>
</template>

<script>
export default {
  name: "userHead",
};
</script>

<style scoped>
</style>