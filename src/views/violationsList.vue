<template>
     <div class="violationsList">
          <commonHeader/>
          <div class="top">
                <!-- <div class="angle">1</div> -->
          </div>
          <div class="topHeader ybox">

          </div>
          <div class="checkCard ybox"></div>

          <div class="ybox source">
              <span>数据来源</span>
              <span>|</span>
              <span>查看历史违章</span>
          </div>

          <div class="vioList">
               <div class="vioItem">
                   
               </div>
          </div>
     </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
   @import '../assets/common.scss';
     .violationsList{
         width: 100%;


         .top{
             width: 100%;
             height:30vw;
             background-color:$theamColor;
             position: relative;
            //  border-radius: 0px 0px 5vw 5vw;
             border-bottom-left-radius: 10vw 5vw;
             border-bottom-right-radius: 10vw 5vw;
             margin-top:5vw;
                 .angle{
                       //border: 1px solid red;
                        background-color: red;
                        // background-color:#ddd;
                        width:10vw;
                        height:10vw;
                        box-sizing: border-box;
                        position: absolute;
                        // bottom:-0vw;
                        left:-0vw;
                        // border-radius: 50px;
                        // transform: rotate(35deg);

                    }
         }

         .topHeader{
             height:40vw;
            //  background-color: red;
             margin-top: -28vw;
             position: relative;
            //  position: relative;

         }
         
        // 超正检测
         .checkCard{
            height:20vw;
            margin-top: -3vw;
            background-color:rgb(205, 235, 196);
         }

         .source{
            display: flex;
            justify-content: space-between!important;
         }


     }
</style>

<style>

</style>