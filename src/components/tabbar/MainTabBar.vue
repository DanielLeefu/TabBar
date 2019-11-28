<template>
   <Tab-bar>
      <Tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="~@/assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/h.jpg" alt="">
        <div slot="item-text">首页</div>
      </Tab-bar-item>
      <Tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="../../assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/h.jpg" alt="">
        <div slot="item-text">分类</div>
      </Tab-bar-item>
      <Tab-bar-item path="/cart" activeColor="blue">
        <img slot="item-icon" src="../../assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/h.jpg" alt="">
        <div slot="item-text">购物车</div>
      </Tab-bar-item>
      <Tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="../../assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/h.jpg" alt="">
        <div slot="item-text">我的</div>
      </Tab-bar-item>
      
    </Tab-bar>
</template>

<script>

import TabBar from './TabBar'
import TabBarItem from './TabBarItem'

export default {
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>