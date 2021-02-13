/* 
Game function:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remainning
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = -3,
  max = 20,
  winningNum = getRandomNumber(min, max),
  guessesLeft = 3;

// UI elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-value"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener("mousedown", function (event) {
  if (event.target.className == "play-again") {
    window.location.reload();
  }
})

// Listen for Guess 
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Por favor ingrese un numero entre ${min} y ${max}`, "red")
    return;
  }

  // Check if won
  if (guess === winningNum) {
    //Game won
    gameOver(true, `Felicitaciones en adivinar: ${winningNum}. Ganaste!`)

  } else {

    // Wrong number
    guessesLeft--;

    if (guessesLeft === 0) {
      // Game lost
      gameOver(false, `El numero correcto es ${winningNum}. Perdiste!`);

    } else {

      // Game border color
      guessInput.style.borderColor = "red";

      // Clear input
      guessInput.value = "";

      // Continue
      setMessage(`${guess} no es correcto. Cantidad de intentos restante: ${guessesLeft}`);
    }
  }
});

// Set Message
function setMessage(msg) {
  message.textContent = msg;
}

function gameOver(won, msg) {
  let color;
  won === true ? color = "green" : color = "red";

  // Disable input
  guessInput.disabled = true;

  // Change border y text color
  guessInput.style.borderColor = color;
  message.style.color = color;

  // Set message
  setMessage(msg);

  // Play again?
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}