<template>
  <div class="home">
    <Head></Head>
    <Banner></Banner>
    <ProNav></ProNav>
    <ListA></ListA>
    <ListB></ListB>
    <Copy></Copy>
  </div>
</template>

<script>
  import Head from './Head.vue'
  import Banner from './Banner.vue'
  import ProNav from './ProNav.vue'
  import ListA from './ListA.vue'
  import ListB from './ListB.vue'
  import Copy from './Join.vue'
  export default {
    name: 'Home',
    components: {
      Banner, ProNav, ListA, ListB, Copy, Head
    }
  }
</script>

<style scoped>

</style>