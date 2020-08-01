<template>
     <div class="integralApp">
           <!-- <div class="header"></div> -->
           <div class="header">
                 <div class="integralNum">
                      <div class="title">积分总额</div>
                      <div class="num">54864</div>
                 </div>
                 <div class="integralLsit">
                         <div class="item">
                             <div class="title">普通积分</div>
                             <div class="num">46545</div>
                         </div>
                         <!-- <span>|</span> -->
                         <div class="item">
                             <div class="title">
                                 月赠积分&nbsp;&nbsp;
                                 <svg @click="toAlert"  t="1595660655224" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2108" ><path d="M923.905 338.957c-23.457-54.238-55.37-101.537-95.759-141.871-40.373-40.346-87.577-72.236-141.593-95.676-54.022-23.446-111.859-35.166-173.511-35.166-61.657 0-119.496 11.721-173.516 35.166-54.016 23.44-101.208 55.329-141.593 95.676-40.385 40.335-72.297 87.627-95.766 141.871-23.463 54.245-35.188 112.159-35.188 173.767 0 61.602 11.725 119.378 35.188 173.343 23.467 53.977 55.381 101.13 95.759 141.475 40.385 40.335 87.577 72.225 141.592 95.676 54.021 23.435 111.859 35.16 173.516 35.16 61.653 0 119.489-11.721 173.511-35.16 54.016-23.451 101.218-55.342 141.592-95.676 40.38-40.346 72.303-87.499 95.759-141.475 23.474-53.965 35.199-111.747 35.199-173.343 0.011-61.614-11.721-119.523-35.193-173.767l0 0zM513.042 800.443c-27.891 0-50.495-22.582-50.495-50.451 0-27.857 22.61-50.451 50.495-50.451 27.896 0 50.49 22.593 50.49 50.451 0 27.874-22.598 50.451-50.49 50.451l0 0zM563.532 590.709c0 27.863-22.598 50.462-50.49 50.462-27.891 0-50.495-22.598-50.495-50.462l0-316.084c0-27.874 22.61-50.462 50.495-50.462 27.896 0 50.49 22.588 50.49 50.462l0 316.084zM563.532 590.709z" p-id="2109" fill="#ffffff"></path></svg>
                             </div>
                             <div class="num">125</div>
                         </div>
                 </div>
           </div> 
           <div class="list">
                <div class="listItem" v-for="(item,idx) in 2" :key = "item">
                      <div class="listKey">2020年6月</div> 
                      <div class="listValue" v-if="activeList[idx]">
                          <input type="hiddex" v-model="activeList[idx]">
                          <div class="valueItem ybox" v-for="item in 2" :key = "item">
                             <div class="frow">
                                 <div class="address ymoreTitle1">违章图片查询充值</div>
                                 <div class="integral">+10积分</div> 
                             </div>
                             <div class="srow">
                                 <div class="time">2020.12.25.14:56</div>
                                 <div class="status">订单分类</div>
                             </div>
                          </div>
                      </div>

                      <div class="listValue">
                          <div class="valueItem ybox" v-for="item in 2" :key = "item">
                             <div class="frow">
                                 <div class="address ymoreTitle1">违章图片查询充值</div>
                                 <div class="integral1">-10积分</div> 
                             </div>
                             <div class="srow">
                                 <div class="time">2020.12.25.14:56</div>
                                 <div class="status">订单分类</div>
                             </div>
                          </div>
                      </div>
                </div>
           </div>

           <div class="inteBtn">积分充值</div>
     </div>
</template>

<script>
export default {
      data() {
            return {
                activeList: [0],
            };
      },
      mounted(){
          setTimeout(() => {
              console.log(this.activeList)
          }, 1000);
           
      },
      methods:{
           toAlert(){
               this.$dialog.alert({
                  message: "月赠积分每月1号重置，在支付时优先扣除"
               })
           }
      }

}
</script>
<style lang="scss" scoped>
   .integralApp{
       .header{
            background-color:#F1AC28;
            color: white;
            text-align: center;
             font-family:DIN Next W1G;
            .integralNum{
                padding: 10vw;
                .title{
                    font-size:4vw;
                }
                .num{
                    font-size:10vw;
                }
            }
            .integralLsit{
                height: 20vw;
                background:rgba(245,245,245,0.2);
                display: flex;
                align-items: center;
                justify-content: space-around;
                span{
                    background:rgba(245,245,245,0.1);;
                }
                .item{
                    // border: 1px solid red;
                    width: 50%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    // div{
                    //     margin:0.5;
                    // }

                    .title{
                        font-size:4vw;
                        display: flex;
                        align-items: center;
                        .icon{
                            width:3.7vw;
                            height:3.7vw;
                        }
                    }

                    .num{
                    margin-top:3px;
                    font-size:6vw;
                    }
                }
            }
       }


        .list{
            // border: 1px solid red;
            .listItem{
                 .listKey{
                     padding:2vw;
                     background-color: #fff;
                     display: inline-block;
                     border-radius:3vw;
                     margin-top: 3vw;
                     margin-left: 3vw;
                     color: #333;
                 }

                 .listValue{
                      .valueItem{
                        padding: 2vw;
                         .frow{
                                    display: flex; 
                                    justify-content: space-between;
                                    //    border: 1px solid red;
                                    .address{
                                            font-family:PingFang SC;
                                            font-weight:500; 
                                            // background-color:red;
                                            color:#333;
                                            margin-right: 5vw;
                                            font-size: 15px;
                                    }

                                    .money{
                                        flex-shrink: 0;
                                            font-size:15px;
                                            font-family:PingFang SC;
                                            font-weight:bold;
                                            color:rgba(251,77,85,1);
                                    }


                                    .integral{
                                            flex-shrink: 0;
                                            font-size:15px;
                                            font-family:PingFang SC;
                                            font-weight:bold;
                                            color:rgba(252,186,72,1);
                                    }

                                     .integral1{
                                            flex-shrink: 0;
                                            font-size:15px;
                                            font-family:PingFang SC;
                                            font-weight:bold;
                                            color:#555;

                                    }
                                }


                                .srow{
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;
                                    margin-top: 2vw;
                                    .time{
                                            font-size: 12px;
                                            font-family:PingFang SC;
                                            font-weight:500;
                                            color:rgba(153,153,153,1);
                                    }
                                    .status{
                                            font-size: 13px;
                                            font-family:PingFang SC;
                                            font-weight:500;
                                            color:rgba(51,51,51,1);
                                    }
                                    .status1{
                                        color: #0A89FE;
                                    }
                                    .status2{
                                        color:#999999!important;
                                    }
                                }
                      }
                 }
            }
          



        }


        .inteBtn{
            width: 100vw;
            background-color: #F1AC28;
            text-align: center;
            color: white;
            padding:3vw;
        }
   }

   
</style>
<style lang = "scss">
  
</style>