// Business Logic


// var listNumbers = function(inputNums) {

// }

// var listNumbers = [];
//
// function finalNumbers(listNumbers) {
//   for (var n = 0; n <= listNumbers.length; n++) {
//     if (n % 3 === 0) {
//       return ("PING!");
//     } else if (n % 5 === 0) {
//       return ("PONG!");
//     } else if (n % 15 === 0) {
//       return ("PING-PONG");
//     } else {
//       return n;
//     }
//   };
// };


var inputNums = [];
var pingPongNums = [];





// User Logic

$(document).ready(function() {
  $("#game").submit(function(event) {
    debugger;
    event.preventDefault();


    var input = parseInt($("#number").val());
    for (var i = 1; i <= input; i++) {
      inputNums.push(i);
    }

    inputNums.forEach(function(inputNum) {
      if (inputNum % 15 === 0) {
       pingPongNums.push("PING-PONG!");
      } else {
       pingPongNums.push(inputNum);
      }
    });


    pingPongNums.map(function(pingPongNum) {
      $("#result").append("<li>" + pingPongNum + "</li>");
    });

  });
});
