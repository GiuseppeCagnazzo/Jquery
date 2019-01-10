let count = 0;

  $("#Button1").click(function() {
  count++;
  $("#myInput").val(count);
})
  $("#Button2").click(function() {
  count--;
  $("#myInput").val(count);
})
