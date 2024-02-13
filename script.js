// Get references to HTML elements
const spinButton = document.getElementById("spinButton");
const spinResult = document.getElementById("spinResult");
const timer = document.getElementById("timer");
const reload = document.getElementById("reload");

// Set initial game variables
let tries = 10; // Number of attempts allowed
let minTries = 0; // Minimum number of attempts to continue playing

// Function to handle the FizzBuzz game logic
function fizzGame() {
  // Generate a random number between 1 and 100
  const ranNum = Math.floor(Math.random() * 100) + 1;

  // Check if the random number is divisible by both 3 and 5
  if (ranNum % 3 === 0 && ranNum % 5 === 0) {
    // Disable the spin button and show the reload button
    spinButton.disabled = true;
    reload.style.display = "block";
    // Display winning message for FizzBuzz
    spinResult.textContent = `${ranNum} - FizzBuzz! - 🏆!!!YOU WIN!!!🏆`;
  } else if (ranNum % 3 === 0) {
    // Display message for numbers divisible by 3
    spinResult.textContent = `${ranNum} - Fizz - So close! Try again`;
  } else if (ranNum % 5 === 0) {
    // Display message for numbers divisible by 5
    spinResult.textContent = `${ranNum} - Buzz - Almost had it! Try again`;
  } else {
    // Display message for other numbers
    spinResult.textContent = `${ranNum} - Try again`;
  }

  // Decrease the remaining attempts
  tries--;

  // Check if there are no more attempts left
  if (tries <= minTries) {
    // Disable the spin button and show the reload button
    spinButton.disabled = true;
    reload.style.display = "block";

    // Display game over message if no winning conditions are met
    if (
      (ranNum % 3 != 0 && ranNum % 5 != 0) ||
      ranNum % 3 != 0 ||
      ranNum % 5 != 0
    ) {
      spinResult.textContent = `${ranNum} - Game Over - Better luck next time`;
    }
  }

  // Update the remaining attempts in the timer display
  timer.textContent = tries;
}

// Attach the fizzGame function to the click event of the spin button
spinButton.addEventListener("click", fizzGame);
