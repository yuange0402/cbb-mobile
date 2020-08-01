<template>
    <div class="homeIdxApp">
         <div class="swipper">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
         </div>


         <div class="appList">
              <div class="appItem" v-for="item in 20" :key = "item">
                    <img src="https://img-blog.csdnimg.cn/20200408150810260.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpbmF0XzI3OTMzMzAx,size_16,color_FFFFFF,t_70" alt="颐和园">
                    <div class="appTitle ymoreTitle1">违第三方的章查询</div>
              </div>
         </div> 

         <yfooter/>
    </div>
</template>

<script>
import yfooter from '@/components/home/footer'
export default {

    components:{
        yfooter
    }
    

}
</script>
<style lang="scss" scoped>
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    height: 42.47vw;
 
  }

 .homeIdxApp{
      padding: 5vw 2vw 0vw;
      background-color: #fff;
      height: 100vh;
     .swipper{
       .my-swipe{
           border-radius: 2vw;
       }
     }

     .appList{
        //  border: 1px solid red;
         display: flex;
         flex-wrap: wrap;
         margin-top: 5vw;
         .appItem{
            // border: 1px solid darkcyan;
            width:13.4vw;//19.2
            margin: 2.8vw;
            flex-shrink: 0;
         

            img{
                width: 100%;
                height:13.4vw;
                 border-radius:50%;
            }

            .appTitle{
                // font-size:;
                font-size:3.3vw;
                margin-top:0.6vw;
                color: #333;
            }
         }
     }
 }



</style>

<style>

</style>