<template>
     <div class="getIntegral">
               <div class="header">
                   1元=10积分            
                </div>
              <div class="spec">
                   <!-- <span class="titleName">规格：</span> -->
                   <div :class="{'specChecked':specItem == 6,'specItem':true,'ymouse':true}" @click="specItem = 6">
                       100积分
                       <span v-if="specItem == 6" class="iconfont mark icon-xuanzhongjiaobiao"></span>
                   </div>
                   <div :class="{'specChecked':specItem == 12,'specItem':true,'ymouse':true}"  @click="specItem = 12">
                        500积分
                        <span v-if="specItem == 12" class="iconfont mark icon-xuanzhongjiaobiao"></span>
                    </div>
                   <div :class="{'specChecked':specItem == 18,'specItem':true,'ymouse':true}" @click="specItem = 18">
                        1000积分
                        <span v-if="specItem == 18" class="iconfont mark icon-xuanzhongjiaobiao"></span>
                    </div>
                   <div :class="{'specChecked':specItem == 24,'specItem':true,'ymouse':true}" @click="specItem = 24">
                        3000积分
                        <span v-if="specItem == 24" class="iconfont mark icon-xuanzhongjiaobiao"></span>
                    </div>
                   <div :class="{'specChecked':specItem == 24,'specItem':true,'ymouse':true}" @click="specItem = 24">
                        10000积分
                        <span v-if="specItem == 24" class="iconfont mark icon-xuanzhongjiaobiao"></span>
                    </div>
                   <div :class="{'specChecked':specItem == 24,'specItem':true,'ymouse':true}" @click="specItem = 24">
                        50000积分
                        <span v-if="specItem == 24" class="iconfont mark icon-xuanzhongjiaobiao"></span>
                    </div>
              </div>
              <div class="custom">
                  <input type="text" placeholder="自定义数额，最少10积分">
              </div>


                 <div class="pay">
                   <!-- <span class="titleName">支付方式：</span> -->
                   <van-radio-group v-model="radio" class="radioGroup">
                        <van-cell  clickable @click="radio = '2'">
                            <template #title>
                                 <div class="specItem">
                                     <svg t="1594781036294" class="wxicon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1626" width="25" height="25"><path d="M395.846 603.585c-3.921 1.98-7.936 2.925-12.81 2.925-10.9 0-19.791-5.85-24.764-14.625l-2.006-3.864-78.106-167.913c-0.956-1.98-0.956-3.865-0.956-5.845 0-7.83 5.928-13.68 13.863-13.68 2.965 0 5.928 0.944 8.893 2.924l91.965 64.43c6.884 3.864 14.82 6.79 23.708 6.79 4.972 0 9.85-0.945 14.822-2.926L861.71 282.479c-77.149-89.804-204.684-148.384-349.135-148.384-235.371 0-427.242 157.158-427.242 351.294 0 105.368 57.361 201.017 147.323 265.447 6.88 4.905 11.852 13.68 11.852 22.45 0 2.925-0.957 5.85-2.006 8.775-6.881 26.318-18.831 69.334-18.831 71.223-0.958 2.92-2.013 6.79-2.013 10.75 0 7.83 5.929 13.68 13.865 13.68 2.963 0 5.928-0.944 7.935-2.925l92.922-53.674c6.885-3.87 14.82-6.794 22.756-6.794 3.916 0 8.889 0.944 12.81 1.98 43.496 12.644 91.012 19.53 139.48 19.53 235.372 0 427.24-157.158 427.24-351.294 0-58.58-17.78-114.143-48.467-163.003l-491.39 280.07-2.963 1.98z" fill="#09BB07" p-id="1627"></path></svg>
                                     <span>微信支付</span> 
                                 </div>
                            </template>
                            <template #right-icon>
                                <van-radio name="2" />
                            </template>
                        </van-cell>
                        <van-cell  clickable @click="radio = '1'">
                            <template #title>
                                <div class="specItem">
                                    <svg t="1595676812642" class="yeicon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6248" width="23" height="23"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zM361.6 220.8c38.4-32 121.6 35.2 150.4 32 28.8 3.2 112-64 150.4-32 38.4 32-44.8 102.4-44.8 102.4h-208c-3.2 0-86.4-70.4-48-102.4zM624 361.6c0 9.6-9.6 19.2-19.2 19.2H416c-9.6 0-19.2-9.6-19.2-19.2s9.6-19.2 19.2-19.2h188.8c9.6 0 19.2 9.6 19.2 19.2z m-112 448c-144 0-262.4 12.8-262.4-108.8 0-89.6 64-233.6 156.8-300.8h208c92.8 67.2 156.8 211.2 156.8 300.8C774.4 822.4 656 809.6 512 809.6z m0 0" p-id="6249" fill="#F1AC28"></path><path d="M614.4 483.2c6.4-6.4 6.4-12.8 0-16-3.2-3.2-12.8-3.2-16 0L512 553.6l-86.4-86.4c-6.4-6.4-12.8-6.4-16 0-3.2 3.2-3.2 12.8 0 16l92.8 92.8v6.4H416c-6.4 0-12.8 6.4-12.8 12.8S409.6 608 416 608h83.2v48H416c-6.4 0-12.8 6.4-12.8 12.8s6.4 12.8 12.8 12.8h83.2v60.8c0 6.4 6.4 12.8 12.8 12.8s12.8-6.4 12.8-12.8v-60.8H608c6.4 0 12.8-6.4 12.8-12.8S614.4 656 608 656h-83.2v-48H608c6.4 0 12.8-6.4 12.8-12.8s-6.4-12.8-12.8-12.8h-83.2V576l89.6-92.8z m0 0" p-id="6250" fill="#F1AC28"></path></svg>                       
                                    <span>余额支付</span>
                                </div>
                            </template>
                            <template #right-icon>
                                <van-radio name="1"/>
                            </template>
                        </van-cell>
                   </van-radio-group>
            </div>
            <div class="submitBar">
                  <div class="left">
                       订单金额：<span style="color:#FD555D;"><span style="font-size:3vw">￥</span>160</span>
                  </div>
                  <div class="right">
                      立即支付
                  </div>
              </div>
     </div>
</template>

<script>
export default {
   data(){
       return{
             specItem:6,
             radio:""
       }
   }
}
</script>
<style lang="scss" scoped>
@import '../assets/common.scss'; 
.getIntegral{
     .header{
        //  border: 1px solid red;
        padding: 2vw;
        color: #999999;
        font-size: 3.5vw;
      }
      background-color: #fff;
      padding-bottom: 5vw;

      .specChecked{
          border-color: $theamColor!important;
      }



          .pay{
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    // border: 1px solid red;
                    width: 100%;
                    padding: 0vw 2vw;
                    margin-top: 5vw;


                    .radioGroup{
                        width: 100%;
                        .van-radio{
                            // border: 1px solid red;
                        }
                        
                    }






                   .specItem{ 
                        //  border: 1px solid #eee;
                         //position: relative;
                         font-family:Microsoft YaHei;
                         font-weight:400;
                         width:100%;
                        //  height:8vw;
                         border-radius: 5vw;
                        //  line-height:5vw;
                        display:flex;
                        align-items: center;
                        justify-content: flex-start;
                        margin-top: 5vw;
                        transform: translateY(-2.5vw);
                        span{
                            margin-left: 2vw;
                        }

                        .wxicon{
                           width:6.5vw;
                           height:6.5vw;
                        }

                        .yeicon{
                            width:5.5vw;
                            margin-right: 1vw;
                            height:5.5vw;
                        }
                         



                       .mark{
                        //    border: 1px solid red;
                           position: absolute;
                           width: 10px;
                           height: 10px;
                           right:20px;
                           bottom:13px;
                           font-size: 30px;
                       }
                   }

                //    .wxBorder{
                //       border: 1px solid #03AE02;
                //       color:#03AE02;

                //    }

                //    .zfbBorder{
                //        border: 1px solid #00A7FF;
                //        color:#00A7FF; 

                //    }

         }











               .spec{
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                   .specItem{
                       border: 1px solid #eee;
                    //    margin:10px;
                     width: 28vw;
                     margin:1.5vw 2.6vw; 
                     padding: 2vw 4vw;
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


                 .custom{
                    //   border: 1px solid red;
                      padding: 2vw;
                      input{
                          border: 1px solid #eee;
                          width: 100%;
                          height: 10vw;
                          text-align: center;
                      }
                 }

                 .submitBar{
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      color: #333;
                      position: absolute;
                      bottom: 0;
                      width: 100%;
                      background-color: #fff;
                    //   padding: 3vw;
                     .left{
                        //  border: 1px solid red;
                         margin: 0 3vw;
                          
                     }

                     .right{
                        //  border: 1px solid red;
                         padding: 3vw 6vw;
                         background-color:$theamColor;
                          color: white;
                         
                     }
                 }


}
</style>

<style>

</style>