<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#tab-bar{
  display: flex;
  background-color: #f6f6f6;

  /*让他到下面  */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /* 看起来有阴影 */
  box-shadow: 0px -3px 1px rgba(100,100,100,.2)

}



</style>