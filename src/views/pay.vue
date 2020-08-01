<template>
     <div class="payApp">
               <div class="icon">
                   <svg t="1595674949022" class="integralIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4750" width="200" height="200"><path d="M789.8112 234.1888C715.5712 159.9488 616.96 119.0912 512 119.0912s-203.5712 40.8576-277.8112 115.0976S119.0912 407.04 119.0912 512s40.8576 203.5712 115.0976 277.8112S407.04 904.9088 512 904.9088s203.5712-40.8576 277.8112-115.0976S904.9088 616.96 904.9088 512s-40.8576-203.5712-115.0976-277.8112z m-68.1984 242.3808l-78.6432 76.6976L661.504 661.504c2.3552 13.9264-3.1744 27.648-14.6432 35.9424-6.4512 4.7104-14.0288 7.0656-21.6064 7.0656-5.8368 0-11.6736-1.4336-17.1008-4.3008l-97.28-51.0976-97.28 51.0976c-12.4928 6.5536-27.3408 5.5296-38.7072-2.7648-11.3664-8.2944-16.9984-22.1184-14.6432-35.9424L378.88 553.1648l-78.6432-76.6976c-10.1376-9.8304-13.7216-24.2688-9.3184-37.6832 4.4032-13.4144 15.7696-23.04 29.696-24.9856l108.6464-15.7696 48.64-98.5088c6.2464-12.6976 18.8416-20.48 32.9728-20.48 14.1312 0 26.7264 7.8848 32.9728 20.48l48.64 98.5088 108.6464 15.7696c13.9264 2.048 25.3952 11.5712 29.696 25.088 4.5056 13.312 0.9216 27.7504-9.216 37.6832z" p-id="4751" fill="#F1AC28"></path></svg>
               </div>
               <div class="title">积分充值</div>
               <div class="num">100元</div>
               <div class="spec">
                   <!-- <span class="titleName">支付方式：</span> -->
                   <div class="specItem wxBorder" @click="toPay">
                       <svg t="1594781036294" class="wxicon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1626" width="25" height="25"><path d="M395.846 603.585c-3.921 1.98-7.936 2.925-12.81 2.925-10.9 0-19.791-5.85-24.764-14.625l-2.006-3.864-78.106-167.913c-0.956-1.98-0.956-3.865-0.956-5.845 0-7.83 5.928-13.68 13.863-13.68 2.965 0 5.928 0.944 8.893 2.924l91.965 64.43c6.884 3.864 14.82 6.79 23.708 6.79 4.972 0 9.85-0.945 14.822-2.926L861.71 282.479c-77.149-89.804-204.684-148.384-349.135-148.384-235.371 0-427.242 157.158-427.242 351.294 0 105.368 57.361 201.017 147.323 265.447 6.88 4.905 11.852 13.68 11.852 22.45 0 2.925-0.957 5.85-2.006 8.775-6.881 26.318-18.831 69.334-18.831 71.223-0.958 2.92-2.013 6.79-2.013 10.75 0 7.83 5.929 13.68 13.865 13.68 2.963 0 5.928-0.944 7.935-2.925l92.922-53.674c6.885-3.87 14.82-6.794 22.756-6.794 3.916 0 8.889 0.944 12.81 1.98 43.496 12.644 91.012 19.53 139.48 19.53 235.372 0 427.24-157.158 427.24-351.294 0-58.58-17.78-114.143-48.467-163.003l-491.39 280.07-2.963 1.98z" fill="#09BB07" p-id="1627"></path></svg>
                       <span>微信支付</span> 
                   </div>
                   <div class="specItem zfbBorder"  @click="toPay">
                        <svg t="1594781505208" class="wxicon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3093" width="25" height="25"><path d="M902.095 652.871l-250.96-84.392s19.287-28.87 39.874-85.472c20.59-56.606 23.539-87.689 23.539-87.689l-162.454-1.339v-55.487l196.739-1.387v-39.227H552.055v-89.29h-96.358v89.294H272.133v39.227l183.564-1.304v59.513h-147.24v31.079h303.064s-3.337 25.223-14.955 56.606c-11.615 31.38-23.58 58.862-23.58 58.862s-142.3-49.804-217.285-49.804c-74.985 0-166.182 30.123-175.024 117.55-8.8 87.383 42.481 134.716 114.728 152.139 72.256 17.513 138.962-0.173 197.04-28.607 58.087-28.391 115.081-92.933 115.081-92.933l292.486 142.041c-11.932 69.3-72.067 119.914-142.387 119.844H266.37c-79.714 0.078-144.392-64.483-144.466-144.194V266.374c-0.074-79.72 64.493-144.399 144.205-144.47h491.519c79.714-0.073 144.396 64.49 144.466 144.203v386.764z m-365.76-48.895s-91.302 115.262-198.879 115.262c-107.623 0-130.218-54.767-130.218-94.155 0-39.34 22.373-82.144 113.943-88.333 91.519-6.18 215.2 67.226 215.2 67.226h-0.047z" fill="#02A9F1" p-id="3094"></path></svg>
                        <span>支付宝支付</span>
                    </div>
               </div>
     </div>
</template>
<script>
export default {
    methods:{
        toPay(){

        }
    }

}
</script>
<style lang="scss" scoped>
@import '../assets/common.scss';
    .payApp{ 
       border: 1px solid #fff;
       height: 100vh;
       width: 100vw;
       background-color: #fff;
       position: relative;
            // border-top: 1px solid #eee;
            // border-bottom: 1px solid #eee;

            .icon{
                text-align: center;
                margin-top: 10vh;
                .integralIcon{
                    width: 20vw;
                    height:20vw;
                }
            }

            .title{
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(51,51,51,1);
                font-size: 3vw;
                text-align: center;
                margin-top:5vw;

            
            }

            .num{
                font-size:30px;
                font-family:PingFang SC;
                font-weight:bold;
                color:rgba(51,51,51,1);
                 text-align: center;
                 margin-top: 3vw;

            }

            .spec{
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    // border: 1px solid red;
                    position: absolute;
                    width: 100%;
                    bottom: 20vw;
                   .specItem{ 
                        //  border: 1px solid #eee;
                         //position: relative;
                         font-family:Microsoft YaHei;
                         font-weight:400;
                         width: 80vw;
                         height: 12vw;
                         border-radius: 5vw;
                        //  line-height:5vw;
                        display:flex;
                        align-items: center;
                        justify-content: center;
                        margin-top: 5vw;
                        span{
                            margin-left: 2vw;
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

                   .wxBorder{
                      border: 1px solid #03AE02;
                      color:#03AE02;

                   }

                   .zfbBorder{
                       border: 1px solid #00A7FF;
                       color:#00A7FF; 

                   }

         }

      }

</style>

<style>

</style>