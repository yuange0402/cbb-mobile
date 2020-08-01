<template>
     <div class="getDriveCard">
         <!-- 播放实行头的画面 -->
         <video id = "video"></video>

         <!-- 里面的模板长宽比例1.37:1 -->
         <div class="photoBox">
              
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
      background-color: #666;
      width:100vw;
      height: 73vw;
      #video{
           border: 1px solid red;
           width: 100vw;
        //    height:60vw;
          height: 73vw;
          padding: 0;
      }

      .photoBox{
          border: 1px solid #fff;
          border-radius:10px;
          width: 94vw;
          height:67vw;
          position: absolute;
          z-index:9;
          top:2.8vw;
          left:3vw;
           
      }
  }
     

</style>

<style>

</style>