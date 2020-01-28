$(document).ready(function(){

    // init variables
    let selectCanvas;

    $("p").click(function(){
      $(this).hide();
    });

    // activate target canvas
    $(".canvas").click(function() {
        selectCanvas = $(this).attr("id");
        console.log(selectCanvas);
    });

  });