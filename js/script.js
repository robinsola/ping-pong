// Business Logic
var listNumbers = [];





// User Logic

$(document).ready(function() {
  $("#game").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("#number").val());
    for (var i = 1; i <= number; i++) {
      listNumbers.push(i);
    }


    listNumbers.map(function(listNumber) {
      $("#result").append("<li>" + listNumber + "</li>");
    });

  });
});
