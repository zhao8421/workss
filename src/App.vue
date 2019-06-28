<template>
  <div id="app">
    <router-view></router-view>
    <Nav></Nav>
  </div>
</template>
<script>
import Nav from 'components/nav'
export default {
  components:{
    Nav
  }
}
</script>

<style lang="less" scope>

</style>
