<template>
  <div id="app">
    <router-view></router-view>
    <Main-tab-bar></Main-tab-bar>
  </div>
</template>

<script>

import MainTabBar from './components/tabbar/MainTabBar'

export default {
  name: 'App',
  components: {
   MainTabBar
  }
}
</script>

<style>
/* 引入初始化样式 */
@import "./assets/css/base.css";

</style>
