$(document).ready(function() {
  $("#results").click(function() {
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
      alert("You're not done yet!");
    } else {
      var onename = "1";
      var twoname = "2";
      var threename = "3";
      var fourname = "4";
      var fivename = "5";
      var sixname = "6";
      var sevename = "7";
      var eightname = "8";
      var ninename = "9";
      var tenname = "10";
      var elevenname = "None";

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

      var one1 =
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
      var categories = [];

      if (one) {
        categories.push(onename);
      }
      if (two) {
        categories.push(twoname);
      }
      if (three) {
        categories.push(threename);
      }
      if (four) {
        categories.push(fourname);
      }
      if (five) {
        categories.push(fivename);
      }
      if (six) {
        categories.push(sixname);
      }
      if (seven) {
        categories.push(sevenname);
      }
      if (eight) {
        categories.push(eightname);
      }
      if (nine) {
        categories.push(ninename);
      }
      if (ten) {
        categories.push(tenname);
      }
      if (eleven) {
        categories.push(elevename);
      }

      var catStr =
        "You answered the following questions incorrectly: " +
        categories.join(", ") +
        "";
      $("#categorylist").text(catStr);
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
