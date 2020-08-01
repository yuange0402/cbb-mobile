import Vue from 'vue'
import App from './App.vue'
import router from './router'
//第三方库 
import "./assets/common.scss";
import 'animate.css';
import Vant from 'vant';
import 'vant/lib/index.css';
//全局组件
import commonHeader from './components/common/header.vue';
// import mark from './components/common/mark.vue';
import yPopUp from './components/common/popUp.vue';
import dialogAlert from './components/common/dialogAlert.vue';
Vue.use(Vant);
Vue.config.productionTip = false;
Vue.component("commonHeader",commonHeader)
// Vue.component("ymark",mark)
Vue.component("yPopUp",yPopUp)
Vue.component("dialogAlert",dialogAlert)
new Vue({
   router,
   render: h => h(App)
}).$mount('#app')


      
      //禁止ios 缩放 
      window.onload=function () {
        document.addEventListener('touchstart',function (event) {
          if(event.touches.length>1){
            event.preventDefault();
          }
        });
        var lastTouchEnd=0;
        document.addEventListener('touchend',function (event) {
          var now=(new Date()).getTime();
          if(now-lastTouchEnd<=300){
            event.preventDefault();
          }
          lastTouchEnd=now;
        },false);
        document.addEventListener('gesturestart', function (event) {
          event.preventDefault();
        });
      }
