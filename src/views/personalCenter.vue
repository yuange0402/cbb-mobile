<template>
     <div class="personalCenter">
           <div class="header">
               <div class="msg">
                    <img  src="https://img-blog.csdnimg.cn/20200408150810260.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpbmF0XzI3OTMzMzAx,size_16,color_FFFFFF,t_70" alt="颐和园">
                    <div class="title">违章代办专员</div>
               </div>
           </div>
           <div class="ybox integral">
                <img  src="https://img-blog.csdnimg.cn/20200408150810260.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpbmF0XzI3OTMzMzAx,size_16,color_FFFFFF,t_70" alt="颐和园">
                <div class="title">
                     <div style="color:#444;">积分管理</div>
                     <div style="color:#999; font-size:13px">2000积分</div>
                </div>
                <div class="rightIcon" style="font-weight:bold; color:#555;">〉</div>
           </div>
           <div class="ybox callback">
               <svg t="1595645394637" style="margin-right:2vw" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7564" width="18" height="18"><path d="M873.6 275.2c-16 0-25.6 12.8-25.6 25.6v550.4c0 28.8-22.4 51.2-51.2 51.2H153.6c-28.8 0-51.2-22.4-51.2-51.2V204.8c0-28.8 22.4-51.2 51.2-51.2h521.6c16 0 25.6-12.8 25.6-25.6s-12.8-25.6-25.6-25.6H153.6C96 102.4 48 150.4 48 204.8v646.4c0 57.6 48 102.4 105.6 102.4h643.2c57.6 0 105.6-44.8 105.6-102.4V300.8c-3.2-16-12.8-25.6-28.8-25.6z" fill="" p-id="7565"></path><path d="M483.2 361.6H204.8c-16 0-25.6 12.8-25.6 25.6s12.8 25.6 25.6 25.6h278.4c16 0 25.6-12.8 25.6-25.6 0-16-12.8-25.6-25.6-25.6zM179.2 566.4c0 12.8 12.8 25.6 25.6 25.6h460.8c16 0 25.6-12.8 25.6-25.6s-12.8-25.6-25.6-25.6H204.8c-12.8 0-25.6 12.8-25.6 25.6zM969.6 57.6c-9.6-9.6-25.6-9.6-38.4 0L604.8 380.8c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 38.4 0L969.6 92.8c9.6-9.6 9.6-25.6 0-35.2z" fill="" p-id="7566"></path></svg>
               意见反馈</div>
     </div>
</template>

<script>
export default {
 
}
</script>
<style lang="scss" scoped>
        @import '../assets/common.scss';
       .personalCenter{
           height: 100vh;
           width: 100vw;
           background-color: #fff;
           .header{
                height:55vw;
                background-color:$theamColor;
                padding-top: 15vw;
                


                .msg{
                    //  border: 1px solid red;
                     display: flex;
                     align-items: center;
                     padding:3vw;

                     img{
                         width: 60px;
                         height: 60px;
                         border-radius:50%;
                     }

                     .title{
                         font-size:23px;
                         color: white;
                         margin-left: 3vw;
                     }

                }
           }

           .integral{
               margin-top:-40px;
               width: 92vw;
               margin-left: 4vw;
               padding: 5vw;
               display: flex;
               justify-content: flex-start;
               align-items: center;
               position: relative;
               box-shadow: 1px 1px 3px 1px #eee;

               img{
                   width:45px;
                   height:45px;
                   border-radius: 5px;
               }

               .title{
                   display: flex;
                   flex-direction: column;
                   margin-left: 3vw;
                   color: #666;
                   font-weight:bold;
                   display: flex;
                   justify-content: space-around;
                   //border: 1px solid red;
                   height:45px;
               }


               .rightIcon{
                    position: absolute;
                    right:5vw;

               }

           }


           .callback{
               box-shadow: 1px 1px 2px 1px #eee;
               padding: 3vw 5vw;
               color: #333;
               display: flex;
           }
       }
</style>
<style>

</style>