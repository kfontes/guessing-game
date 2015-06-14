$(function(){
  var compGuess = Math.floor((Math.random() * 10) + 1), userGuess, i = 0;
  console.log(compGuess);
  
  $("#guess").submit(function(){
    event.preventDefault();

    userGuess = $("#userGuess").val();

    if (userGuess === compGuess){
      $("#result").html("Congratulations! '" + userGuess + "' was the right number. Click the button below to play again.");
      $("<button>PLAY AGAIN</button>").insertAfter("#result");
      $("button").addClass("pure-button").click(function(){
      });

    } else {
      $("#result").html("Sorry, '" + userGuess + "' was not what the computer guessed. Keep trying!!!");
      $("#userGuess").val("");
      if(i===0){
        $('#pastGuesses').text("Previous guesses:").append(" " + userGuess);
        i++;
      } else {
        $("#pastGuesses").append(", " + userGuess); 
        i++;
      }
    }
  });  
});
