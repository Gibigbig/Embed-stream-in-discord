

 $("head").append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">');
$("body").append('<div style="display:none" id="modal-iframe"><i class="fa fa-times-circle closestream" aria-hidden="true"></i><div class="cont"></div></div>');
 $("#modal-iframe").draggable();

var intervalId = null;
var varCounter = 0;
var varName = function(){
     if(varCounter <= 3) {
         

        
        var thingy =  '<button type="button" class="thing stream"><span><i class="fa fa-video-camera" aria-hidden="true"></i></span></button>';
        
        //var thingy = thingy.concat('<button type="button" class="thing shrug"><span><i class="fa fa-smile-o" aria-hidden="true"></i></span></button>');
         $(".thing").remove();
        $(".header-toolbar").prepend(thingy);
         
          varCounter++;
          /* your code goes here */
     } else {
          clearInterval(intervalId);
     }
};

$(document).ready(function(){
     intervalId = setInterval(varName, 10000);
});


$(document).on("click",".stream",function(){
    //alert("triggo");

    $("#modal-iframe div.cont").html('<video controls autoplay width="100%">  <source src="VIDEO_URL_HERE" type="video/webm">  Your browser does not support the video tag.</video>');    
    $("#modal-iframe").fadeIn();
    
    
});

$(document).on("click",".closestream",function(){
    //alert("triggo");

    $("#modal-iframe div.cont").html('');    
    $("#modal-iframe").fadeOut();

    
});

