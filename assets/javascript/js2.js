$(document).ready(function() {
  $("#start").click(function() {
    var number = 60;
    alert("Get ready!");
    $("#start").on("click", start);
    $("#submit").on("click", finish);
    $("#retry").on("click", restart);

    function start() {
      counter = setInterval(timer, 2000);
      showMe(".question");
      showMe(".answers");
      showMe("#submit");
      hideMe("#start");
      hideMe(".how-to-play");
      hideMe("#retry");
      hideMe("#responses");
    }
    function timer() {
      number--;
      $("#responsesRevealed").html("<h2>" + number + "</h2>");
      if (number === 0) {
        alert("Sorry - you're out of time!!");
        stop();
      }
    }
    function stop() {
      clearInterval(counter);
      $("#responses").show();
      $("#retry").show();
      $(".question").hide();
      $(".answers").hide();
      $("#submit").hide();
    }
    function finish() {
      number = 1;
      clearInterval(counter);
      timer();
    }

    function restart() {
      number = 60;
      start();
    }
  });
});
