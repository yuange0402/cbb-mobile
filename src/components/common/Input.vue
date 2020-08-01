<template>
  <div class="weizhang-query-page-inputW">
    <!-- 中文键盘 -->
    <van-popup :overlay="false" v-model="show" duration="0.2" position="bottom">
      <div class="keyboard">
        <div class="header">
          <span @click="show = false">完成</span>
        </div>
        <div
          @click="clickItem(item)"
          class="keyItem"
          v-for="item in keyList"
          :key="item.id"
          :class="'keyItem'+item.id"
        >
          <span v-if="item.id != 99">{{item.name}}</span>
          <span
            v-if="item.id == 99"
            style="font-size:6vw;"
            :class="{'iconfont':true,'icon-icon_jianpan_jianpanshanchu2x':true}"
          ></span>
        </div>
      </div>
    </van-popup>

    <!-- 英文键盘 -->
    <van-popup :overlay="false" v-model="showE" duration="0.2" position="bottom">
      <div class="keyboardE">
        <div class="header">
          <span @click="showE = false">完成</span>
        </div>
        <div
          @click="clickItem(item)"
          class="keyItem"
          v-for="item in English_Number"
          :key="item.id"
          :class="'keyItem'+item.id"
        >
          <span
            v-if="item.id == 99"
            style="font-size:6vw;"
            :class="{'iconfont':true,'icon-icon_jianpan_jianpanshanchu2x':true}"
          ></span>
          <span
          style="font-size:5vw"
            v-else-if="item.id == 100"
            :class="{'iconfont':true,'icon-A':true}"
          ></span>
          <span v-else>{{item.name}}</span>
        </div>
      </div>
    </van-popup>
    <!-- 输入框 -->
    <div class="weizhang-query-page-input" id="inputW">
      <div
        v-for="(item,idx) in 8"
        :class="{'inputItem':true,'active':(show==true||showE==true)&&inputList.length == idx}"
        :key="item.id"
        :style="idx == 7?'border:1px dashed #ACDC8B;':''"
      >
        <input
          @focus="focusInput"
          @blur="blurInput"
          :value="inputList[idx]"
          :class="'input'+idx"
          maxlength="1"
          :placeholder="idx == 7?placeholder:''"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      inputList: [], //输入的所有的值都会放到数组里面
      // listLength:0,//标记当前输入框的长度
      // focusIdx:0,//标注当前哪个输入框是聚焦的，或者最后一次聚焦的输入框，从1开始
      show: false, //控制键盘是否显示
      showE: false,
      placeholder: "新能源",
      isFocus: false,
      English_Number: [
        { name: "1", id: 28 },
        { name: "2", id: 29 },
        { name: "3", id: 30 },
        { name: "4", id: 31 },
        { name: "5", id: 32 },
        { name: "6", id: 33 },
        { name: "7", id: 34 },
        { name: "8", id: 35 },
        { name: "9", id: 36 },
        { name: "0", id: 37 },
        { name: "Q", id: 38 },
        { name: "W", id: 39 },
        { name: "E", id: 40 },
        { name: "R", id: 41 },
        { name: "T", id: 42 },
        { name: "Y", id: 43 },
        { name: "U", id: 44 },
        { name: "I", id: 45 },
        { name: "O", id: 46 },
        { name: "P", id: 47 },
        { name: "A", id: 48 },
        { name: "S", id: 49 },
        { name: "D", id: 50 },
        { name: "F", id: 51 },
        { name: "G", id: 52 },
        { name: "H", id: 53 },
        { name: "J", id: 54 },
        { name: "K", id: 55 },
        { name: "L", id: 56 },
        { name: "Z", id: 57 },
        { name: "100", id: 100 },
        { name: "X", id: 58 },
        { name: "C", id: 59 },
        { name: "V", id: 60 },
        { name: "B", id: 61 },
        { name: "N", id: 62 },
        { name: "M", id: 63 },
        { name: "←", id: 99 }
      ],

      keyList: [
        { name: "京", id: 1 },
        { name: "津", id: 2 },
        { name: "冀", id: 3 },
        { name: "晋", id: 4 },
        { name: "蒙", id: 5 },
        { name: "辽", id: 6 },
        { name: "吉", id: 7 },
        { name: "黑", id: 8 },
        { name: "沪", id: 9 },
        { name: "苏", id: 10 },
        { name: "浙", id: 11 },
        { name: "皖", id: 12 },
        { name: "闽", id: 13 },
        { name: "赣", id: 14 },
        { name: "鲁", id: 15 },
        { name: "豫", id: 16 },
        { name: "鄂", id: 17 },
        { name: "湘", id: 18 },
        { name: "粤", id: 19 },
        { name: "桂", id: 20 },
        { name: "琼", id: 21 },
        { name: "渝", id: 22 },
        { name: "川", id: 23 },
        { name: "贵", id: 24 },
        { name: "云", id: 25 },
        { name: "藏", id: 26 },
        { name: "陕", id: 27 },
        { name: "甘", id: 28 },
        { name: "青", id: 29 },
        { name: "宁", id: 30 },
        { name: "ABC", id: 31 },
        { name: "新", id: 32 },
        { name: "使", id: 33 },
        { name: "领", id: 34 },
        { name: "挂", id: 35 },
        { name: "学", id: 36 },
        { name: "港", id: 37 },
        { name: "澳", id: 38 },
        // {name:'X',id:39},
        { name: "←", id: 99 }
      ]
    };
  },

  mounted() {
    // 在第二个输入框后面添加一个 .
    function insertAfter(newElement, targentElement) {
      var parent = targentElement.parentNode;
      if (parent.lastChild == targentElement) {
        parent.appendChild(newElement);
      } else {
        parent.insertBefore(newElement, targentElement.nextSibling);
      }
    }
    var inputItem = document
      .getElementById("inputW")
      .querySelectorAll(".inputItem")[1];
    // var header1 = document.getElementById("header");
    var span = document.createElement("span"); // 创建一个元素节点
    insertAfter(span, inputItem);
    document.getElementById("inputW").querySelector("span").innerHTML = "●";
  },
  watch: {
    inputList(data) {
      console.log(data);
      // setTimeout(function(){
         this.pupKeyboard();
      // },3000);
      if (this.inputList.length == 8) {
        this.show = false;
        this.showE = false;
      }
    }
  },
  methods: {
    pupKeyboard() {
      setTimeout(() => {
           if (this.inputList.length > 0) {
              this.showE = true;
              this.show = false;
            } else {
              this.show = true;
              this.showE = false;
            }
      },200);
    },
    focusInput(e) {
      this.pupKeyboard();
      this.isFocus = true;
      console.log(e.srcElement.classList[0]);
      let className = e.srcElement.classList[0];
      var dom = document.getElementsByClassName(className)[0];
      dom.blur();
    },
    blurInput() {
      this.isFocus = false;
    },
    clickItem(item) {
      console.log(item);
      if (item.id == 39 || item.id == 99) {
        //删除按钮
        this.inputList.pop();
        return;
      }
      if (item.id == 100) {
        //切换到简称键盘
        console.log("id 是100");
        this.show = true;
        this.showE = false;
        return;
      }
      if (item.id == 31) {
        //切换到英文键盘
        this.showE = true;
        this.show = false;
        return;
      }
      if (this.inputList.length < 8) {
        this.inputList.push(item.name);
        return;
      }
    }
  },
  computed: {
  }
};
</script>
<style lang="scss" scoped>
    @import "../../assets/common.scss";
    .weizhang-query-page-inputW {
      box-sizing: border-box;
      .active {
        border: 1px solid $theamColor!important;
      }

      .keyboard {
        // padding-bottom:2vh;
        padding: 0vw 2.5vw 3vh;
        .header {
          //  border: 1px solid red;
          background-color: #f1f1f3;
          height: 10vw;
          width: 100vw;
          flex-shrink: 0;
          color: $theamColor;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0 5vw;
          font-size: 4vw;
        }
        background-color: #d2d4d8;
        //border: 1px solid red;
        //height: 100vw;
        display: flex;
        flex-wrap: wrap;
        align-content: start;
        justify-content: center;

        .keyItem {
          position: relative;
          margin: 1.5vw 0.7%;
          width: 8.5%;
          border-radius: 1.2vw;
          //  border: none;
          padding: 0;
          background-color: #fcfeff;
           color: #333;
          height: 10vw;
          box-sizing: border-box;
           box-shadow: 0px 1px 1px 0px #888;
          flex-shrink: 0;
          font-size: 4vw;
          font-weight: 500;
          display: flex;
          justify-content: center!important;
          align-items: center;
          border: none;
          padding: 0;
          // border: 1px solid red;
        }

        .keyItem31 {
          // background-color: #adb4bf;
          color: $theamColor;
          width: 13%;
        }
        .keyItem99 {
          // background-color: #adb4bf;
          color: $theamColor;
          width: 13%;
          & > .iconfont {
            // font-size:vw;
          }
        }
      }

      .keyboardE {
        // padding-bottom: 2vw;
        padding: 0vw 1vw 3vh;
        .header {
          //  border: 1px solid red;
          background-color: #f1f1f3;
          height: 10vw;
          width: 100vw;
          flex-shrink: 0;
          color: $theamColor;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0 5vw;
        }
        background-color: #d2d4d8;
        //  border: 1px solid red;
        //  height: 100vw;
        display: flex;
        flex-wrap: wrap;
        align-content: start;
        justify-content: center;
        .keyItem {
          border-radius: 1.2vw;
          border: none;
          // padding: 2vw;
          // border: 1px solid red!important; 
          background-color: #fcfeff;
          // margin: 1.1vw;
          
          margin: 1.5vw 0.7%;
          height: 10vw;
          box-sizing: border-box;
          width: 8.5%;
          font-size: 4.6vw;
          color: #333;
          font-weight: 500;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          box-shadow: 0px 1px 1px 0px #888;
        }

        .keyItem100 {
          // background-color: #adb4bf;
          color: $theamColor;
          width: 17.5%;
        }
        .keyItem99 {
          // background-color: #adb4bf;
          color: $theamColor;
          width: 17.5%;
        }
      }

      .weizhang-query-page-input {
        //border:1px solid red;
        margin-bottom: 7px;
        //margin-top:-5px;
        display: flex;
        justify-content: space-between;
        .active {
          border: 1px solid $theamColor!important;
          border-radius:1vw;
          overflow: hidden;
        }

        .inputItem {
          // border: 1px solid red;
          width:9vw;
          height:10.2vw;
          // margin:1vw;
           border-radius:1vw;

          .input0 {
            background-color: #e5f3ff;
          
          }
          .input7 {
            background:rgba(242,255,233,1)!important;
           
            padding: 0!important;
            
            &::-webkit-input-placeholder {
                font-size:2.4vw!important;
                color:rgba(172,220,139,1);
                text-align: center;
                line-height:5.5vw;

            }
          
          }

          input {

            // border: 1px solid blue;
            width: 100%;
            height: 100%;
            border: none;
            padding: 0;
            border: none;
            background-color: #f5f5f5;
            border-radius: 1vw; 
            text-align: center;
            color: #333;
            font-weight: bold;
            font-size: 4.7vw;
          }
        }

        //自定义键盘
      }
    }
</style>

<style>
    .weizhang-query-page-input > span {
      color: #cccccc;
      display: flex;
      align-items: center;
      font-size: 7px;
      /* background-color:red;  */
    }
</style>