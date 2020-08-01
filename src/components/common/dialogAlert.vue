<template>
    <div class="dialogAlert">
          <van-popup v-model="show">
               <div class="alert">
                    <slot></slot>
               </div>
               <div class="textBtn" @click="show = false">我知道了</div>
          </van-popup>
    </div>
</template>

<script>
export default {
    data(){
         return{
             show:false
         }
    }

}
</script>
<style lang="scss" scoped>
@import '../../assets/common.scss';

.dialogAlert{
         .popPanel{
               // border: 1px solid red;
               // border-radius: 10vw;
          }

          .van-popup{
               padding: 3vw;
                border-radius: 3vw;
                overflow: hidden;
          }


          .alert{
               // border: 1px solid red;
               width:70vw;
               // height:40vw;
               border-radius: 3vw;
               overflow: hidden;
          }

            .textBtn{
                    // text-align: center;
                    display:flex;
                    justify-content: center; 
                    width: 100%;
                    color: $theamColor;
                    font-size: 4vw;
                    margin-top:3vw;
                    // border: 1px solid red;
            }
}
    
</style>

<style>

</style>