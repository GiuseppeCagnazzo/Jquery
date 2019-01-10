$("#button-1").click(function(){
  let h = $(".rechthoek").height();
  // console.log(h);
  $(".rechthoek").css("height", "+=10px");
  console.log(h);
  if (h>=100) {
    $(".rechthoek").css("height", "10px");
  }
})


$("#button-2").click(function(){
  $(".rechthoek").css("background-color","green");
})

$("#button-3").click(function(){
  $(".rechthoek").css("background-color","grey");
})

$("#button-4").click(function(){
  $(".rechthoek").css("display","none");
})

$("#button-5").click(function(){
  $(".rechthoek").css("display","block");
})
