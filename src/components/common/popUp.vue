<template>
  <div class="popUp">
    <van-popup v-model="show" position="bottom" :overlay="overlay">
      <div class="header" v-if="title">
        {{title}}
        <span style="font-size:6vw; color:#999" @click="show = false">×</span>
      </div>
      <slot class="content"></slot>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    overlay: {
      default: true
    }
  }
};
</script>
<style lang="scss">
.popUp {
  // padding-bottom:vh;


  .popPanel {
    // border: 1px solid red;
    // border-radius: 10vw;
  }
  .van-popup {
    border-radius: 3vmin 3vmin 0 0;
    // padding-bottom: 5vw;
    // border: 1px solid red;
    padding-bottom: 15vw;
    // padding-top: 5vw;
  }

  

  .header {
    // height: 60px;
    padding: 3vw;
    // font-size: 18px;
    font-size: 4vw;
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom:3vw;
    border-bottom:1px solid #EDEDED;

    &>span {
      position: absolute;
      right: 5vw;
      top: 0;
      // background-color: red;
      // display: inline-block;
      height: 100%;
      display: flex;
      align-items: center;
    
    }
  }
}
</style>

<style>
</style>