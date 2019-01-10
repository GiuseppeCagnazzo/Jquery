$(document).keydown(function(e){
    switch (e.which){
    case 37:    //left arrow key
        $(".vierkant").css("left","-=50");
        break;
    case 38:    //up arrow key
        $(".vierkant").css("top","-=50");
        break;
    case 39:    //right arrow key
        $(".vierkant").css("left","+=50");
        break;
    case 40:    //bottom arrow key
        $(".vierkant").css("top","+=50");
    }


    if (parseInt($(".vierkant").css("top")) < 0) {
    $(".vierkant").css("top", window.innerHeight);
    }
    else if (parseInt($(".vierkant").css("top")) > window.innerHeight) {
      $(".vierkant").css("top", 0);
    }
    else if (parseInt($(".vierkant").css("left")) < 0) {
      $(".vierkant").css("left", window.innerWidth);
    }
    else if (parseInt($(".vierkant").css("left")) > window.innerWidth) {
      $(".vierkant").css("left", 0);
    }
});
