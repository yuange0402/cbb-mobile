<template>
  <div class="getDriveCardByInput">
    <!-- <input type="password" autofocus> -->
    <!-- 顶部小的提示信息 -->
    <div class="topTip">
      <span class="iconfont icon-anquan1" style="font-size:12px; "></span>
      以下信息仅供交管局查询使用，我们将严格保密
    </div>
    <div class="ybox">
      <van-cell class="carNum" style="border:none;">
        <span>车牌号码</span>
        <span class="photograph" style="display:flex; algin-item:center; ">
          <span class="iconfont icon-xiangji" style="margin-right:2px;"></span>拍照识别
        </span>
      </van-cell>
      <!-- 输入框 -->
      <van-cell class="inputBox">
        <Input ref="inputFlag" />
      </van-cell>
      <!-- 下面的车辆代码 -->
      <van-cell class="carCode" style="overflow:hidden;">
        <template slot="title">
          <span class="van-cell-text">车辆识别代码</span>
          <span class="iconfont icon-icon" @click="$refs.xsz.show = true"></span>
        </template>
        <van-field
          @focus="focusCarNum"
          input-align="right"
          @input = "changeToBigWithCarNum"
          v-model="carNum"
          placeholder="车辆识别代码后6位"
        />
      </van-cell>
      <!--发动机号码  -->
      <van-cell class="carCode" style="overflow:hidden;">
        <template slot="title">
          <span class="van-cell-text">发动机号</span>
          <span class="iconfont icon-icon" @click="$refs.fdj.show = true"></span>
        </template>
        <van-field @input="changeToBigWithFdjNum" @focus="focusCarNum" v-model="fdjNum" placeholder="发动机号后6位" />
      </van-cell>
    </div>
    <div class="ybox">
      <van-cell title="车辆类型" @click="$refs['carType'].show = true" is-link value="选择车辆类型" />
      <van-cell title="车辆性质" @click="$refs['carProps'].show = true" is-link value="选择车辆性质" />
      <van-cell title="数据来源" class="dataFrom" @click="$refs['dataFrom'].show = true" is-link>
        <template slot="right-icon">
          <!-- 只有在全国一线的时候才显示推荐按钮 -->
          <span class="suggestLine">推荐</span>
          <span class="van-cell-text" style="color:#333; font-size:16px;">
            {{dataFrom}}
            <span class="icon-right iconfont" style="color:#999"></span>
          </span>
        </template>
      </van-cell>
    </div>

    <div class="ybox">
      <van-field name="switch" label="超证检测" class="switchW">
        <template #input>
          <van-switch v-model="switchChecked" size="20" class="switchItem" />
        </template>
      </van-field>
      <van-field name="switch" label="查历史违章" class="switchW">
        <template #input>
          <van-switch v-model="switchChecked" size="20" class="switchItem" />
        </template>
      </van-field>
    </div>

    <div class="submitBtn">
      <van-button type="default">保存并查询</van-button>
      <van-button type="default" class="btnDisabled">保存并查询</van-button>
    </div>
    <div class="carList" @click="$refs.carList.show = true">车辆列表</div>

    <!-- 选择数据来源 -->
    <yPopUp ref="dataFrom" :title="'请选择线路'">
      <div class="dataFromPop">
        <div class="dataItem dataActive">
          广东省
          <span class="iconfont mark icon-xuanzhong"></span>
        </div>
        <div class="dataItem">广东省</div>
        <div class="dataItem">广东省</div>
        <div class="dataItem">广东省</div>
        <div class="dataItem">广东省</div>
      </div>
    </yPopUp>

    <!-- 车辆性质 -->
    <!-- 如果不传递title 那么默认没有头部 -->
    <yPopUp ref="carProps" :title="'选择车辆性质'">
      <div class="carType">
        <div class="typeItem">
          <span class="iconfont icon-xuanzhong mark"></span>
          <img src="../../public/img/sjc.png" alt />
          <span class="rightTitle">私家车</span>
        </div>
        <div class="typeItem">
          <span class="iconfont icon-xuanzhong mark"></span>
          <img src="../../public/img/gsc.png" alt />
          <span class="rightTitle">公司车</span>
        </div>
        <div class="typeItem">
          <span class="iconfont icon-xuanzhong mark"></span>
          <img src="../../public/img/wyc.png" alt />
          <span class="rightTitle">网约车</span>
        </div>
        <div class="typeItem">
          <span class="iconfont icon-xuanzhong mark"></span>
          <img src="../../public/img/yyc.png" alt />
          <span class="rightTitle">营运车</span>
        </div>
      </div>
    </yPopUp>

    <!-- 选择车辆列表 -->
    <yPopUp ref="carList" :title="'切换车辆'"> 
      <div class="carListPop">
        <div class="typeItem" @click="carListActive = item" v-for = "item in 3" :key = "item"  :class="{'carListActive':carListActive==item}">
          <span v-if="carListActive == item" class="iconfont icon-xuanzhong mark "></span>
          <img src="../../public/img/carList.png" alt />
          <span class="rightTitle">粤A&nbsp;64R22
              <span class="rightType">小型轿车</span>
          </span>
        </div>
      </div>
    </yPopUp>

    <!-- 车辆类型 -->
    <yPopUp ref="carType">
      <div class="carTypePop">
        <van-picker
          title="选择车辆类型"
          show-toolbar
          :columns="carType"
          @confirm="onConfirm"
          @cancel="onCancel"
          @change="onChange"
        />
      </div>
    </yPopUp>

    <dialogAlert ref="xsz">
      <span class="xsz">
        <img src="../../public/img/xsz.png" alt />
      </span>
    </dialogAlert>

    <dialogAlert ref="fdj">
      <span class="xsz">
        <img src="../../public/img/fdj.png" alt />
      </span>
    </dialogAlert>

    <!-- <div v-for="item in 50" :key = "item">66</div> -->
  </div>
</template>
<script>
import Input from "../components/common/Input.vue";
import keyboard from "../components/common/keyboard.vue";
import { Toast } from "vant";
// import popUp from '../components/common/popUp.vue';
export default {
  data() {
    return {
      carListActive:1,//车辆列表中选中的车辆
      carType: ["小型车", "紧凑型车", "中型车", "中大型车", "大型车"], //车辆类型
      switchChecked: false, //开关按钮
      dataFrom: "全国一线",
      fdjNum: "", //发动机号码
      carNum: "", //车辆唯一识别代码
    };
  },
  mounted() {
    //  this.$refs.keyboard.show = true;
  },
  components: {
    Input,
    keyboard
    //  yPopUp
  },
  methods: {
    onConfirm(value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
      this.$refs["carType"].show = false;
    },
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      // Toast('取消');
      this.$refs["carType"].show = false;
    },
    focusCarNum() {
      console.log("输入车辆信息");
      this.$refs.inputFlag.show = false;
      this.$refs.inputFlag.showE = false;
      // this.show = false;
      // this.showE = false;
    },
    changeToBigWithCarNum(value){
        value = value.toUpperCase();
        this.carNum = value;
    },
    changeToBigWithFdjNum(value){
        value = value.toUpperCase();
        this.fdjNum = value;
    }

  }
};
</script>
<style lang="scss" scoped>
@import "../assets/common.scss";
.getDriveCardByInput {
  //给头部流出空间
  .inputBox {
    padding-top: 0 !important;
    margin-top: -3px;
    // border: 1px solid red;
  }

  // padding2vw;
  .carType {
    // border: 1px solid red;
    // padding-bottom: 5vh;
    // padding: 10vw 0vw;

    .typeItem {
      border-radius: 2vw;
      border: 1px solid $theamColor;
      height: 21.6vw;
      width: 80vw;
      margin-left: 10vw;
      position: relative;
      margin-top: 3vw;
      display: flex;
      justify-content: space-around;
      align-items: center;
      overflow: hidden;

      img {
        height: 100%;
        width: auto;
      }

      .rightTitle {
        font-size: 4.5vw;
        font-family: PingFang SC;
        font-weight: bold;
        color: $theamColor;
        // margin-right:8vw;
        transform: translateX(-7vw);
      }
      .mark {
        position: absolute;
        bottom: -1.3vw;
        right: -0.8vw;
        font-size: 10vw;
        color: $theamColor;
      }
    }
  }
  .carTypePop {
    // padding-bottom: 3vh;
    // border: 1px solid red;
    .van-picker__cancel,
    .van-picker__confirm {
      color: $theamColor !important;
    }
  }
  .dataFrom {
    .van-cell__value {
      color: $theamColor;
    }
    //推荐图标
    .suggestLine {
      border: 1px solid $theamColor;
      color: $theamColor;
      margin-right: 5px;
      // padding: 0 ;
      border-radius: 3px;
      font-size: 11px;
      height: 18px;
      line-height: 11px;
      width: 30px;
      justify-content: center;
      display: flex;
      align-items: center;
      // padding: 0 5px;
    }
  }

  .carListPop {
      .carListActive{
         color: $theamColor!important;
         border: 1px solid $theamColor!important;
      }

    .typeItem {
      border-radius: 2vw;
      height: 21.6vw;
      width: 80vw;
      margin-left: 10vw;
      position: relative;
      margin-top: 3vw;
      display: flex;
      justify-content: space-around;
      align-items: center;
      overflow: hidden;
      border: 1px solid #EDEDED;;
      img {
        height: 15vw;
        width: 15vw;
      }

   
      .rightTitle {
        font-size: 4.5vw;
        font-family: PingFang SC;
        font-weight: bold;
        color: #333;
        // 
        transform: translateX(-5vw);

        .rightType{
            margin-left: 3vw;
            font-size:4vw;
        }
        
      }
      .mark {
        position: absolute;
        bottom: -1.3vw;
        right: -0.8vw;
        font-size: 10vw;
        color: $theamColor;
      }
    }
  }

  .dataFromPop {
    display: flex;
    flex-wrap: wrap;
    // padding-bottom: 10vh;

    .dataActive {
      border: 1px solid $theamColor !important;
    }

    .dataItem {
      border: 1px solid #dedede;
      width: 29%;
      border-radius: 1vw;
      margin: 2.1%;
      padding: 2vw 0;
      text-align: center;
      color: #666666;
      position: relative;
      overflow: hidden;
    }

    .mark {
      overflow: hidden;
      position: absolute;
      right: -0.5vw;
      bottom: -0.9vw;
      background-color: rgba(0, 0, 0, 0);
      font-size: 6vw;
      color: $theamColor;
    }
  }

  .topTip {
    //width:501px;
    //height:25px;
    //padding-top: 2vw;
    padding: 1vw;
    // padding-top:2vw;
    //border: 1px solid red;
    text-align: center;
    font-size: 12px;
    font-family: PingFang SC;
    //font-weight: 500;
    color: #e6b05b;
  }
  .yVanCell {
    display: flex;
    align-items: center;
  }
  ::-webkit-input-placeholder {
    text-align: right;
    color: #969799;
    font-size: 16px !important;
    // color: #333;
    // color:red;
  }
  input:-moz-placeholder {
    text-align: right;
    // color: red;
    color: #969799;
    font-size: 16px !important;
  }
  input::-moz-placeholder {
    text-align: right;
    //  color: red;
    color: #969799;
    font-size: 16px !important;
  }
  input:-ms-input-placeholder {
    text-align: right;
    //  color: red;
    font-size: 16px !important;
  }
  .ykeyboard {
    //   border: 1px solid red;
    width: 100%;
    height: 11vw;
    position: relative;
    padding-left: 2vw;
  }

  .carNum {
    // border: 1px solid red;
    padding-top: 3.5vw;
    border-bottom: none;
    &::after {
      border: none;
    }

    .photograph {
      color: $theamColor;
      // border: 1px solid red;
      // font-size:20px;
      .iconfont {
        font-size: 20px;
        // transform: translateY(-1px);
      }
    }
    & > .van-cell__value {
      display: flex;
      justify-content: space-between !important;
    }
  }
  .carCode {
    // border: 1px solid red;
    .icon-icon {
      color: $theamColor;
      // margin-left: 3px;
    }

    display: flex;
    .van-cell__title {
      // border: 1px solid darkgoldenrod;
    }

    .van-cell__value {
      //  flex: 1.4;
      //  border: 1px solid red;
    }

    // border: 1px solid red;
  }
  .switchW {
    display: flex;
    justify-content: space-between;
    .switchItem {
      position: absolute;
      right: 0;
    }
  }

  .xsz {
    img {
      width: 100%;
      height: auto;
    }
  }
  .van-picker__cancel,
  .van-picker__confirm {
    color: $theamColor;
  }

  .submitBtn {
    text-align: center;
    margin-top: 12vw;
    .van-button {
      background-color: $theamColor;
      color: white;
      border-radius: 10vw;
      font-size: 20px;
      padding: 25px 100px;
    }

    .btnDisabled{
       background-color:#E9E9E9;
       color: #999999;
    }
  }

  .carList {
    font-size: 16px;
    color: #666;
    text-align: center;
    margin-top: 3vw;
  }
}
</style>
<style lang="scss">
@import "../assets/common.scss";
.getDriveCardByInput {
  .carCode {
    .icon-icon {
      color: $theamColor;
      margin-left: 3px;
    }

    .van-field {
      // padding:2px;
      padding: 0;

      input {
        text-align: right;
      }

      // border: 1px solid darkcyan;
      text-align: right !important;
      // padding-right: 10px;
    }

    .van-cell__value {
      // border: 1px solid red;
      flex: 1.2;
      // padding:0;
    }

    .van-field__body {
      // border: 1px solid red;
      // font-size: 16px!important;
      input {
        // border: 1px solid red;
        // transform: translateX(10px);
      }
    }
  }

  .switchW {
    .switchItem {
      .van-switch__node {
        // transform: translateY(-1px);
        top: -1px;
      }
    }
  }

  /* 修改filed 左边不分的宽度，避免自动换行 */
  .van-field__label {
    width: 10em;
  }
  .van-cell {
    // padding-right: 10px;
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 7px 16px;
    color: #333 !important;

    .van-field__label {
      color: #333;
    }
    // border: 1px solid darkcyan;

    .van-cell__title {
      // border: 1px solid red!important;
      padding: 6px 0px;
    }

    .van-cell__value {
      //  flex: 1.4;
      //  border: 1px solid red;
    }
  }

  .van-cell__right-icon {
    // margin-left: -8px;
    color: #969799;
    // transform: translateX(8px);
  }
}
</style>