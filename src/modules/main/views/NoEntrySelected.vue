<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div class="d-flex justify-content-center">
      <h1 class="align-self-center">Loading articles</h1>
    </div>
   <Fab/>
  
  </template>


<script>
import { defineAsyncComponent } from 'vue'

export default{
  components:{
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
}
}
</script> 



<style lang="scss" scoped>
div{
    height: 100%;
    background-color: red;
}
</style>


