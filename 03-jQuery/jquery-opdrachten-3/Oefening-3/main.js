// let randomNumber = Math.floor(Math.random()*100) + 0;
// // console.log(randomNumber);
// inputValue = $("#myButton").click(function(){
//   $("#myInput").val();
//   if (inputValue === randomNumber) {
//     alert("juist");
//   } else if (inputValue > randomNumber) {
//     alert("less");
//   } else if (inputValue < randomNumber) {
//     alert("more");
//   }
// });

$("#myButton").click(function() {
  let random = parseInt(Math.floor(Math.random()*100) + 0);
  let inputValue = $("#myInput").val();
  let count = 0;
  console.log(random);
  console.log(inputValue);
if (inputValue < random) {
    alert("more");
    count++
  } else if (inputValue > random) {
    alert("less");
    count++
  } else if (inputValue === random) {

    count++;
    alert("correct, u used " + count + " counts to get the right result");
  }
})
