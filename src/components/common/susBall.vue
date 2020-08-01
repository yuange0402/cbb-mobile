<template>
    <div class="susBall">
         <div :class="{'removable':true}" 
           @touchstart = "handleTouchstart"
           @touchmove = "handleTouchmove"
           @touchend = "handleTouchend"
           :style="'left:'+source.clientX+'px; top:'+source.clientY+'px;'">
              <div class="reItem animate__animated animate__fadeInUp animate__faster" v-if="show"></div>
              <div class="reItem animate__animated animate__fadeInUp animate__faster" v-if="show"></div>
              <div class="reItem animate__animated animate__fadeInUp animate__faster" v-if="show"></div>
              <div class="reItem animate__animated animate__fadeInUp animate__faster" @click="show = !show"></div>
      </div>
    </div>
</template>
<script>
export default {
    data(){
       return{
         //小球初始位置
          source:{
             clientX:0,
             clientY:0
          },
          relativex:0,
          relativey:0,
          show:true,

       }
    },
    mounted(){
      //  alert(1111)
    },
    methods:{

       handleTouchstart(e){
            let element = e.targetTouches[0];
            //手指的初始位置
            let fx = element.clientX;
            let fy = element.clientY;

            // 小球的初始位置
            let ballx = this.source.clientX;
            let bally = this.source.clientY;

            //计算出相对距离
            this.relativex = fx - ballx;
            this.relativey = fy - bally;
       },
      //处理拖拽
       handleTouchmove (e) { // 拖拽中
            let element = e.targetTouches[0];
            // 记录手指的位置
            // 计算出小球半径是多少px
            // 10vw 的话
            // widthPX / 10
            // let bWidth = document.body.clientWidth;
            // bWidth = bWidth / 10 / 2;

            // 

            this.source.clientX = element.clientX - this.relativex;
            this.source.clientY = element.clientY - this.relativey;  
       },

       handleTouchend(e){
            // 获取y 的值
            let clientX = e.changedTouches[0].clientX;
            console.log(clientX)
            // 获取屏幕总宽度
            let bWidth = document.body.clientWidth;
            if(clientX > bWidth/2){
                 console.log("右边",e);
                  this.source.clientX = bWidth -  bWidth / 10;


                 
            }else{
                 console.log("左边");
                  this.source.clientX = 0;

            }


            

       }

    }
}
</script>>
<style lang="scss" scoped>
   #app{
    //  background-color: red;


   }


   .removable{
      width: 10vw;
      height:60vw;
      border-radius: 5vw;
      position: fixed;
         // top: 0px;
         z-index: 99;
         // background-color:red;
         border: 1px solid red;
          display:flex;
            justify-content:flex-end;
            flex-direction: column;


         .reItem{
            width: 10vw;
            height: 10vw;
            border-radius: 50%;
            background-color:darkgoldenrod;
            margin-top: 7vw;
            flex-shrink: 0;
         }
      }
  
</style>
