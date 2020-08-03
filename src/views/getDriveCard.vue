<template>
     <div class="getDriveCard">
          <!-- 相框 -->
          <div class="borderPanelW">
            <div class="borderPanel">
                <img src="../../public/img/pgTemplate.png" alt="">
            </div>
              <!-- 播放实行头的画面 -->
            <video id = "video"></video>

          </div>


          <!-- 中间的图片 -->
          <div class="driverCardP">
              <div class="title">将行驶证正页放入框内拍照</div>
              <img src="../../public/img/pzxsz.png" alt="">
          </div>

          <!-- 下面的三个按钮 -->
          <div class="buttonW">
               <div>11</div>
               <div>22</div>
               <div>33</div>
          </div>
     </div>
</template>
<script>
export default {
     components:{
        
     },
     mounted(){
         let that =this;
         setTimeout(function(){
             that.init()
         },500)
     },
     methods:{
          init(){
                 console.log("init 初始化==========")
                               var video = document.getElementById("video");
                               var videoObj = { "video":{width:250,height:150} };
                               var  errBack = function(error) {
                                    console.log("Video capture error: ", error.code);
                                };

                                console.log()
                
                        // Put video listeners into place
                        if(navigator.getUserMedia) { // Standard
                            navigator.getUserMedia(videoObj, function(stream) {
                                console.log(stream,1);
                                video.srcObject = stream;
                                video.play();
                            }, errBack);
                        } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
                            navigator.webkitGetUserMedia(videoObj, function(stream){
                                console.log(stream,2);
                                video.src = window.webkitURL.createObjectURL(stream);
                                video.play();
                            }, errBack);
                        } else if(navigator.mozGetUserMedia) { // WebKit-prefixed
                            navigator.mozGetUserMedia(videoObj, function(stream){
                                console.log(stream,3);
                                video.src = window.URL.createObjectURL(stream);
                                video.play();
                            }, errBack);
                        }
                

          }
     }
}
</script>
<style lang="scss" scoped>
 *{
    padding: 0; 
    margin: 0;
 }
  .getDriveCard{
      background-color:white;
      width:100vw;
    //   height:69vw;
      height: 100vh;
    //   border: 2px solid darkblue;

      position: relative;
       .borderPanelW{
             width: 100%;
            //  border: 2px solid darkorange;
             position: relative;
             height:73vw;
            .borderPanel{
                top: 0;
                z-index: 99999;
                position: absolute; 
                img{
                    width: 100%;
                    height: auto;
                }
            }

            #video{
                // border: 3px solid darkgreen;
                width: 100%;
                height: 100%; 
                position: absolute;
                z-index:99;
                padding: 0;
                z-index: 1;
                //   background-color:red;
            }
     
        }

       // 中间的图片
      .driverCardP{
          &> .title{
              margin:7vw 0 2vw;
          }
           width: 100%;
           text-align: center;
           img{

               width: 65%;
            //    margin-left: 17.5%;
               height: auto;
           }
      }

      .buttonW{
           border: 1px solid red;
           height: 10vh;
           width: 100vw;
           display: flex;
           justify-content: space-around;
           align-items: center;
           position: absolute;
           bottom: 0;
           background-color: #fff;

      }


       



  }
     

</style>

<style>

</style>