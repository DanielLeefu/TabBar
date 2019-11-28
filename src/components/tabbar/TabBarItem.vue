<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
      
       <!-- <img src="../../assets/img/tabbar/home.png" alt="">
        <div>首页</div> -->
    </div>
</template>

<script>
export default {
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return{
      // isActive:true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {} 
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>

.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  
}

/*  设置图片大小 */
.tab-bar-item img{
  margin-top: 3px;
  width: 24px;
  height: 24px;
  /* 去除图片下面的空间，默认的3像素 */
  vertical-align: middle;
  margin-bottom: 2px;
}


</style>