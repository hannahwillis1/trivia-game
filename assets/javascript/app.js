$(document).ready(function() {
  $("#reponses").click(function() {
    if (
      !$("input[@name=q1]:checked").val() ||
      !$("input[@name=q2]:checked").val() ||
      !$("input[@name=q3]:checked").val() ||
      !$("input[@name=q4]:checked").val() ||
      !$("input[@name=q5]:checked").val() ||
      !$("input[@name=q6]:checked").val() ||
      !$("input[@name=q7]:checked").val() ||
      !$("input[@name=q8]:checked").val() ||
      !$("input[@name=q9]:checked").val() ||
      !$("input[@name=q10]:checked").val()
    ) {
      alert("Wrong-o!");
    } else {
      var onename = "1";
      var twoname = "2";
      var threename = "3";
      var fourname = "4";
      var fivename = "5";
      var sixname = "6";
      var sevenname = "7";
      var eightname = "8";
      var ninename = "9";
      var tenname = "10";
      var elevename = "None";

      var one = $("input[@name=q1]:checked").val() != "a";

      var two = $("input[@name=q2]:checked").val() != "b";

      var three = $("input[@name=q3]:checked").val() != "c";

      var four = $("input[@name=q4]:checked").val() != "d";

      var five = $("input[@name=q5]:checked").val() != "a";

      var six = $("input[@name=q6]:checked").val() != "b";

      var seven = $("input[@name=q7]:checked").val() != "c";

      var eight = $("input[@name=q8]:checked").val() != "d";

      var nine = $("input[@name=q9]:checked").val() != "a";

      var ten = $("input[@name=q10]:checked").val() != "b";

      var oneonename =
        !one &&
        !two &&
        !three &&
        !four &&
        !five &&
        !six &&
        !seven &&
        !eight &&
        !nine &&
        !ten;
      var movies = [];

      if (one) {
        movies.push(onename);
      }
      if (two) {
        movies.push(twoname);
      }
      if (three) {
        movies.push(threename);
      }
      if (four) {
        movies.push(fourname);
      }
      if (five) {
        movies.push(fivename);
      }
      if (six) {
        movies.push(sixname);
      }
      if (seven) {
        movies.push(sevenname);
      }
      if (eight) {
        movies.push(eightname);
      }
      if (nine) {
        movies.push(ninename);
      }
      if (ten) {
        movies.push(tenname);
      }
      if (eleven) {
        movies.push(elevename);
      }

      var Wrong =
        "You answered the following questions incorrectly: " +
        movies.join(", ") +
        "";
      $("#categorylist").text(Wrong);
      $("#categorylist").show("slow");

      if (one) {
        $("#category1").show("slow");
      }
      if (two) {
        $("#category2").show("slow");
      }
      if (three) {
        $("#category3").show("slow");
      }
      if (four) {
        $("#category4").show("slow");
      }
      if (five) {
        $("#category5").show("slow");
      }
      if (six) {
        $("#category6").show("slow");
      }
      if (seven) {
        $("#category7").show("slow");
      }
      if (eight) {
        $("#category8").show("slow");
      }
      if (nine) {
        $("#category9").show("slow");
      }
      if (ten) {
        $("#category10").show("slow");
      }
      if (eleven) {
        $("#category11").show("slow");
      }
      {
        $("#closing").show("slow");
      }
    }
  });
});
