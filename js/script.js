// Business Logic

var inputNums = [];
var pongNums = [];

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

    inputNums.map(function(inputNum) {
      if (inputNum % 15 === 0) {
       pongNums.push("BEER-PONG!");
     } else if (inputNum % 5 === 0) {
       pongNums.push("BEER");
     } else if (inputNum % 3 === 0) {
       pongNums.push("PONG");
     } else {
       pongNums.push(inputNum);
     }
    });

    pongNums.map(function(pingPongNum) {
      $("#result").append("<li>" + pingPongNum + "</li>");
    });

    $("#game").hide();
    $("#output").show();

  });
});
