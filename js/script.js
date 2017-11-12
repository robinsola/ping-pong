// Business Logic

var inputNums = [];
var pingPongNums = [];


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
       pingPongNums.push("PING-PONG!");
     } else if (inputNum % 5 === 0) {
       pingPongNums.push("PONG!");
     } else if (inputNum % 3 === 0) {
       pingPongNums.push("PING!");
     } else {
       pingPongNums.push(inputNum);
     }
    });
    pingPongNums.map(function(pingPongNum) {
      $("#result").append("<li>" + pingPongNum + "</li>");
    });

  });
});
