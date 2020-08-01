<template>
     <div class="feedback">
          <textarea  rows="10"></textarea>
               <div class="spec">
                   <div :class="{'specChecked':specItem == 6,'specItem':true,'ymouse':true}" @click="specItem = 6">
                       BUG反馈
                       <span v-if="specItem == 6" class="iconfont mark icon-xuanzhongjiaobiao"></span>
                   </div>
                   <div :class="{'specChecked':specItem == 12,'specItem':true,'ymouse':true}"  @click="specItem = 12">
                        功能需求
                        <span v-if="specItem == 12" class="iconfont mark icon-xuanzhongjiaobiao"></span>
                    </div>
                   <div :class="{'specChecked':specItem == 18,'specItem':true,'ymouse':true}" @click="specItem = 18">
                        其他反馈
                        <span v-if="specItem == 18" class="iconfont mark icon-xuanzhongjiaobiao"></span>
                    </div>
               </div>
               <div class="btnW">
                     <van-button type="info">信息按钮</van-button>
               </div>
     </div>
</template>

<script>
export default {
     data(){
         return{
               specItem:6,
         }
     }

}
</script>
<style lang="scss" scoped>
@import '../assets/common.scss';
   .feedback{
       width:100vw;
       height: 100vh;
       padding: 3vw;
       background-color: #fff;

       textarea{
           width: 100%;
           border-radius:3vw;
           border: 1px solid #D1D1D1;
           padding:3vw;
           box-sizing: border-box;
       }


               .specChecked{
                    border-color: $theamColor!important;
                    color: $theamColor;
                }
       
       
               .spec{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    // flex-wrap: wrap;
                   .specItem{
                    border: 1px solid #eee;
                    //   margin:10px;
                     width: 28vw;
                     margin:1.5vw 1.5vw; 
                     padding: 3vw 4vw;
                     font-size: 3.8vw;
                    //    padding: 5px 15px;
                       position: relative;
                       border-radius: 5px;
                       flex-shrink: 0;
                       text-align: center;
                       
                       //overflow: hidden;
                       .mark{
                        //    border: 1px solid red;
                           position: absolute;
                           width: 10px;
                           height: 10px;
                           right:19px;
                           bottom:13px;
                           font-size: 30px;
                           color:$theamColor; 
                       }
                   }
                } 
   
   
            

            .btnW{
                text-align: center;
                margin-top: 15vw;

                .van-button{
                    padding: 0 18vw;
                    border-radius: 6vw;
                }
            }
   }
</style>

<style>

</style>