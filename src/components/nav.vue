<template>
  <ul class='nav'>
      <router-link active-class='sel' tag='li' to='/Home'>
        <span>首页</span>
      </router-link>
      <router-link active-class='sel' tag='li' to='/classify'>
       <span>分类</span>
      </router-link>
      <router-link active-class='sel' tag='li' to='/shoppingcar'>
        <span>购物车</span>
      </router-link>
      <router-link active-class='sel' tag='li' to='/my'>
        <span>我的</span>
      </router-link>      
  </ul>
</template>
<script>
export default {
}
</script>
<style lang="less" scope>
@import '~style/index.less';
.nav{
  display: flex;
  background: @bg-color-black;
  justify-content: space-around;
  .w(375);
  
}
</style>
