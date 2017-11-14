// Business Logic

var inputNums = function(input) {
  var pongNums = [];
  for (var i = 1; i <= input; i++) {
    if (i % 15 === 0) {
     pongNums.push("BEER-PONG! DRINK UP BRO!");
    } else if (i % 5 === 0) {
     pongNums.push("BEER");
    } else if (i % 3 === 0) {
     pongNums.push("PONG");
    } else {
     pongNums.push(i);
    }
  }
  return pongNums;
};


// User Logic


function refreshPage() {
  location.reload();
}

$(document).ready(function() {
  $("#game").submit(function(event) {
    event.preventDefault();

    var input = parseInt($("#number").val());
    if (isNaN(input) || (input === " ") || (input <= 0)) {
      alert("BUZZ KILL, BRO! Enter a positive number!")
    } else {
    var results = inputNums(input);
    }

    results.map(function(result) {
      $("#result").append("<li>" + result + "</li>");
    });

    $("#game").hide();
    $("#output").show();

  });
});
