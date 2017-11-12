// Business Logic

var inputNums = [];
var pongNums = [];

// This is set to reload the form when button is clicked

function refreshPage() {
  location.reload();
}

// User Logic

$(document).ready(function() {
  $("#game").submit(function(event) {
    event.preventDefault();

    var input = parseInt($("#number").val());

    for (var i = 1; i <= input; i++) {
      inputNums.push(i);
    }

// conditions set and pushed into var pongNums

    inputNums.map(function(inputNum) {
      if (inputNum % 15 === 0) {
       pongNums.push("BEER-PONG! DRINK UP BRO!");
      } else if (inputNum % 5 === 0) {
       pongNums.push("BEER");
      } else if (inputNum % 3 === 0) {
       pongNums.push("PONG");
      } else {
       pongNums.push(inputNum);
      }
    });

// display pongNums as a list in index.html

    pongNums.map(function(pongNum) {
      $("#result").append("<li>" + pongNum + "</li>");
    });

    $("#game").hide();
    $("#output").show();

  });
});
