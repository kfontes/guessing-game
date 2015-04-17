$document.ready(function(){

  var play = prompt("Welcome to the game! You will need to correctly guess the randomly selected number between 1 and 10 in order to win. Enter in 'Yes' if you want to play or 'No' to exit.");

  if (play.toLowerCase() == "yes"){
  var number = Math.floor(Math.random() * 10); //Generates the random number
  var answer = prompt("Great! Guess the number the computer has selected. Your options are from 1 to 10.");    

    //Analyzing answer to see if it matches number
    while(answer != number){
        alert("Sorry, that wasn't correct. Try again!")
        answer = prompt("Guess the number the computer has selected. Remember, your options are from 1 to 10.");
    }
    
    //Do this if the player guesses correctly
    if (answer == number) {
        alert("OMG, you did it! Congratulations! Refresh the page to play again.");
    }

  //Handling the responses other than 'yes'
  } else if (play.toLowerCase() == "no") {
    alert("Maybe later, then! Take care.");
  } else {
    alert("Your entry doesn't seem to match a 'Yes' or a 'No'. Please refresh the page to reattempt a response.");
  }


});

/*
<script>
The following is a guessing game where a user will be asked to guess a number between 1 and 10, which the computer will randomly generate beforehand

</script>*/