$(document).ready(function() {

$("#firstName").keyup(function() {
  firstname = $("#firstName").val();
  console.log(firstname);
})

$("#lastName").keyup(function() {
  lastname = $("#lastName").val();
  console.log(lastname);
})

$("#birthDate").keyup(function() {
  birthDate = $("#birthDate").val();
  console.log(birthDate);
})

$("#birthPlace").keyup(function() {
  birthplace = $("#birthPlace").val();
  console.log(birthplace);
})

$("#work").keyup(function() {
  work = $("#work").val();
  console.log(work);
})

$("#company").keyup(function() {
  company = $("#company").val();
  console.log(company);
})

$( "#generate" ).click(function() {
  event.preventDefault();
  alert(firstname + " " + lastname + ", geboren op " + birthDate + " in " + birthplace + " ," + " momenteel een " + work + " in Genk." );
});

});
