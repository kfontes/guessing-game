$(function(){
  var compGuess = Math.floor((Math.random() * 10) + 1), userGuess, i = 0;
  console.log(compGuess);
  
  $("#guess").submit(function(){
    event.preventDefault();

    userGuess = $("#userGuess").val();
    console.log(userGuess);

    if (userGuess == compGuess){

      $("#result").html("Congratulations! '" + userGuess + "' was the right number. Total number of tries = " + (i+1) + ". Click the button below to play again. See if you can beat your previous number of guesses!");
      $("<button>OTHER BROWSER GAMES</button>").addClass("pure-button").insertAfter("#result").click(function(){
          var newWindow = window.open("http://imgur.com/gallery/9fi4h", "Top 8 list in IMGUR");
      });
      $("<button>PLAY AGAIN</button>").addClass("pure-button").insertAfter("#result").click(function(){
        location.reload();
      });

    } else {

      $("#result").html("Sorry, '" + userGuess + "' was not what the computer guessed. Keep trying!");
      $("#userGuess").val("");
      if(i==0){
        $('#pastGuesses').text("Previous guesses:").append(" " + userGuess);
        i++;
      } else {
        $("#pastGuesses").append(", " + userGuess); 
        i++;
      }
    }
  });  
});