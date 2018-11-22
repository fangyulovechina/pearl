<template>
  <div class='allList'>
    <ListHead></ListHead>
    <ListB></ListB>
  </div>
</template>

<script>
import ListHead from './ListHead.vue'
import ListB from './ListB.vue'
  export default {
    name: 'AllList',
    components: {
      ListHead, ListB
    }
  }
</script>

<style scoped>

</style>