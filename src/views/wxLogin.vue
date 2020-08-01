<template>
  <div class="wxLogin">
    <img src="../../public/img/wxLogin.png" alt />
     <!-- <div class="test"></div> -->


     <div class="wxLoginBtn">
         <span class="iconfont icon-gongzhonghao"></span>
         微信一键登录/注册
      </div>
     <div class="phoneLogin">
        <span class="iconfont icon-shouji54"></span>
         手机号登录/注册
     </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.wxLogin {
  height: 100vh;
  width: 100vw;
  overflow: hidden;




   .wxLoginBtn{
        // position
        position: absolute;
        bottom: 40vw;
        margin: auto;
        left: 10vw;
        width: 80vw;
        background:red; 
        height: 12vw;
        border-radius: 5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #00C005;
        color: white;

        &>span{
           font-size:5.5vw;
          //  margin-left: 3vw;
           margin-right:2vw;
        }
   }

   .phoneLogin{
         // position
        position: absolute;
        bottom:20vw;
        margin: auto;
        left:10vw;
        width: 80vw;
        background:red;
        height: 12vw;
        border-radius: 5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        color: #333;
          &>span{
           font-size:5.5vw;
          //  margin-left: 3vw;
           margin-right:2vw;
        }
   } 











  img {
    width: 100%;
    height: 100%;
    background:red;
     /* 动画名称 动画时长 延时时间 匀速 无限循环 逆播 */ 
	 animation: myfirst 20s 0.2s linear infinite;
  }






@keyframes myfirst
{
    0%{
        height: 100%;
        width: 100%;
       
    }

     25%{
        height: 120%;
        width: 120%;
        //  transform: translate3d();
    }

     
    //  75%{
    //     height: 110%;
    //     width: 110%;
    // }

    100%{
        height: 100%;
        width: 100%;
    }
}









}
</style>

<style>
</style>