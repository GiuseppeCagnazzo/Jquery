let computerChoice = 0;
let myChoice = 0;
$(document).ready(function() {

  $("#reset").click(function() {
    myChoice = 0;
    computerChoice = 0;
    console.log(myChoice);
    console.log(computerChoice);
  })

  $('#rock').click(function() {
    myChoice = "rock"; //rock 1
    console.log(myChoice);
  });
  $('#paper').click(function() {
    myChoice = "paper"; //paper 2
    console.log(myChoice);
  });
  $('#scissors').click(function() {
    myChoice = "scissors"; //scissors 3
    console.log(myChoice);
  });
  $("#myButton").click(function newComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3) + 1;
    //take the random number from computerChoice above and assign it rock paper or scissors.
    if (computerChoice == 1) {
      computerChoice = "rock";
    } else if (computerChoice == 2) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }

    console.log(computerChoice);

    $("#pcchoice").html(computerChoice);
    if (computerChoice === myChoice) {
      $(".result").html("it's a tie");
    } else if (myChoice === "rock" && computerChoice === "scissors") {
      $(".result").html("you win, rock beats scissors");
    } else if (myChoice === "rock" && computerChoice === "paper") {
      $(".result").html("you lose, paper beats rock");
    } else if (myChoice === "paper" && computerChoice === "scissors") {
      $(".result").html("you lose, scissors beats paper");
    } else if (myChoice === "paper" && computerChoice === "rock") {
      $(".result").html("you win, paper beats rock");
    } else if (myChoice === "scissors" && computerChoice === "rock") {
      $(".result").html("you lose, rock beats scisscors");
    } else if (myChoice === "scissors" && computerChoice === "paper") {
      $(".result").html("you win, scissors beat paper");
    }
  })

});