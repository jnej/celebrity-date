$(document).ready(function() {
  $("#datingQuiz").submit(function(event) {
    var music = $("input:radio[name=music]:checked").val();
    var movie = $("input:radio[name=movie]:checked").val();

    if (music === "option1" && movie === "action") {
      $(".tomCruise").show();
    }else if (music === "option2" && movie === "scary") {
      $(".johnnyDepp").show();
    }else if (music === "option3" && movie === "romantic") {
      $(".christianSlater").show();
    }else{
      $(".chrisPratt").show();
    }


    event.preventDefault();
  })

})
