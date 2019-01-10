$(document).ready(function() {

  $("#submit").click(function(event) {
    event.preventDefault();
    let firstname = $("#firstName").val();
    let lastname = $("#lastName").val();
    let email = $("#email").val();
    let phone = $("#phone").val();

    // console.log(firstname);
    // console.log(lastname);
    // console.log(email);
    // console.log(phone);

    let phoneCheck = /^[0-9]*$/;
    let numbers = /\d/;
    if (!(firstname.match(numbers) == null)) {
      alert("Voornaam mag alleen letters bevatten.");
      $("#firstName").val("");
    };
    if (!(lastname.match(numbers) == null)) {
      alert("Voornaam mag geen getal bevatten");
      $("#lastName").val("");
    };
    if(!(email.includes("@"))){
      alert("geen email");
      $("#email").val("");
    };
    if(!(phone.match(phoneCheck))){
        alert("Telefoon is enkel cijfers");
        $("#phone").val("");
    };
  })

});
