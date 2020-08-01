<template>
     <div class="order">
          <div class="orderHeader">
               <van-search
                    v-model="value"
                    show-action
                    placeholder="订单名称关键字搜索"
                    @search="onSearch"
                    >
                    <template #action>
                        <div @click="onSearch">搜索</div>
                    </template>
                </van-search>
 
                <van-tabs v-model="active">
                    <van-tab title="代付款">
                         <div class="ybox">
                             <div class="frow">
                                 <div class="address ymoreTitle1">广东省广州市番禺区，南村镇看电视剧安抚了</div>
                                 <div class="money">1200元</div> 
                             </div>
                             <div class="srow">
                                 <div class="time">2020.12.25.14:56</div>
                                 <div class="status">代付款</div>
                             </div>
                         </div>
                         <div class="ybox" v-for="item in 10" :key="item">
                             <div class="frow">
                                 <div class="address ymoreTitle1">广东省广州市番禺区，南村镇看电视剧安抚了</div>
                                 <div class="integral">10积分</div> 
                             </div>
                             <div class="srow">
                                 <div class="time">2020.12.25.14:56</div>
                                 <div class="status">代付款</div>
                             </div>
                         </div>
                    </van-tab>
                    <van-tab title="处理中">
                          <div class="ybox" :key="item">
                             <div class="frow">
                                 <div class="address ymoreTitle1">广东省广州市番禺区，南村镇看电视剧安抚了</div>
                                 <div class="integral">10积分</div> 
                             </div>
                             <div class="srow">
                                 <div class="time">2020.12.25.14:56</div>
                                 <div class="status status1">退款待审核</div>
                             </div>
                         </div>
                          <div class="ybox" :key="item">
                             <div class="frow">
                                 <div class="address ymoreTitle1">广东省广州市番禺区，南村镇看电视剧安抚了</div>
                                 <div class="integral">10积分</div> 
                             </div>
                             <div class="srow">
                                 <div class="time">2020.12.25.14:56</div>
                                 <div class="status status1">退款待审核</div>
                             </div>
                         </div>
                    </van-tab>
                    <van-tab title="已完成">
                        <div class="ybox" :key="item">
                             <div class="frow">
                                 <div class="address ymoreTitle1">广东省广州市番禺区，南村镇看电视剧安抚了</div>
                                 <div class="integral">10积分</div> 
                             </div>
                             <div class="srow">
                                 <div class="time">2020.12.25.14:56</div>
                                 <div class="status status2">退款待审核</div>
                             </div>
                         </div>
                        <div class="ybox" :key="item">
                             <div class="frow">
                                 <div class="address ymoreTitle1">广东省广州市番禺区，南村镇看电视剧安抚了</div>
                                 <div class="integral">10积分</div> 
                             </div>
                             <div class="srow">
                                 <div class="time">2020.12.25.14:56</div>
                                 <div class="status status2">提现审核未通过</div>
                             </div>
                         </div>
                        <div class="ybox" :key="item">
                             <div class="frow">
                                 <div class="address ymoreTitle1">广东省广州市番禺区，南村镇看电视剧安抚了</div>
                                 <div class="integral">10积分</div> 
                             </div>
                             <div class="srow">
                                 <div class="time">2020.12.25.14:56</div>
                                 <div class="status">提现成功</div>
                             </div>
                        </div>
                        <div class="ybox" :key="item">
                             <div class="frow">
                                 <div class="address ymoreTitle1">广东省广州市番禺区，南村镇看电视剧安抚了</div>
                                 <div class="integral">10积分</div> 
                             </div>
                             <div class="srow">
                                 <div class="time">2020.12.25.14:56</div>
                                 <div class="status">交易关闭</div>
                             </div>
                        </div>
                    </van-tab>
                </van-tabs>
          </div>
     </div>
</template>

<script>
export default {
    data(){
        return{
            value:"",
            active:""
        }
    },
    methods:{
        onSearch(){
             console.log("点击搜搜")
        }
    }

}
</script>
<style lang="scss" scoped>
    
</style>

<style lang="scss">
@import '@/assets/common.scss';
.order{
      .orderHeader{
          .ybox{
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





.van-tabs__line {
    background-color: $theamColor;
    // background-color: orange;
}

.van-tab--active{
    color: $theamColor;
}

</style>