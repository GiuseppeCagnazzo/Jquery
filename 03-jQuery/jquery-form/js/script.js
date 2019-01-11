// Solution goes here

$(document).ready(function() {
  let pseudo, password, confirmation, email;

  $("#send").click(function() {
    event.preventDefault();
    // put inpul values in variables
    console.log("submit button works");

    pseudo = $("#pseudo").val();
    password = $("#pass").val();
    confirmation = $("#pass-confirm").val();
    email = $("#email").val();

//Empty field phoneCheck

    if (pseudo == "") {
      alert("Pseudo field is empty")
    }

    if (password == "") {
      alert("Password field is empty")
    }

    if (confirmation == "") {
      alert("Confirmation field is empty")
    }

    if (email == "") {
      alert("Email field is empty")
    }

//Input length phoneCheck

    if (pseudo.length <= 5) {
      // alert("Your pseudo name must be at least 5 characters");
      $("#mistake").show();
      $("#pseudo").css("border", "5px solid red");
    } else if (pseudo.length > 5) {
      $("#pseudo").css("border", "5px solid green");
      $("#mistake").hide();
    }


    if (password.length <= 5) {
      $("#mistake").show();
      $("#pass").css("border", "5px solid red");
    } else if (password.length > 5) {
      $("#pass").css("border", "5px solid green");
      $("#mistake").hide();
    }


    if (confirmation.length <= 5) {
      $("#mistake").show();
      $("#pass-confirm").css("border", "5px solid red");
    } else if (confirmation.length > 5) {
      $("#pass-confirm").css("border", "5px solid green");
      $("#mistake").hide();
    }


    if (email.length <= 5) {
      $("#mistake").show();
      $("#email").css("border", "5px solid red");
    } else if (email.length > 5) {
      $("#email").css("border", "5px solid green");
      $("#mistake").hide();
    }


    if (password === confirmation) {
      $("#pass-confirm").css("border", "5px solid green");
    } else {
      alert("passwords are not the same");
      $("#pass").css("border", "5px solid red");
      $("#pass-confirm").css("border", "5px solid red");
    }

//Email check

    if(!(email.includes("@"))){
      alert("This is not an email adres");
      $("#email").val("");
    };



})

// Reset button

$("#reset").click(function() {
// console.log("reset button works");
$("#pseudo").val("");
$("#pass").val("");
$("#pass-confirm").val("");
$("#email").val("");
$("#pseudo").css("border", "none");
$("#pass").css("border", "none");
$("#pass-confirm").css("border", "none");
$("#email").css("border", "none");
$("#mistake").hide();
})

});
