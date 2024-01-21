const spinButton = document.getElementById("spinButton");
const spinResult = document.getElementById("spinResult");
const timer = document.getElementById("timer");
const reload = document.getElementById("reload");
let tries = 10;
let minTries = 0;

function fizzGame() {
  const ranNum = Math.floor(Math.random() * 100) + 1;
  if (ranNum % 3 === 0 && ranNum % 5 === 0) {
    spinButton.disabled = true;
    reload.style.display = "block";
    spinResult.textContent = `${ranNum} - FizzBuzz! - 🏆!!!YOU WIN!!!🏆`;
  } else if (ranNum % 3 === 0) {
    spinResult.textContent = `${ranNum} - Fizz - So close! Try again`;
  } else if (ranNum % 5 === 0) {
    spinResult.textContent = `${ranNum} - Buzz - Almost had it! Try again`;
  } else {
    spinResult.textContent = `${ranNum} - Try again`;
  }
  tries--;
  if (tries <= minTries) {
    spinButton.disabled = true;
    reload.style.display = "block";
    if (
      (ranNum % 3 != 0 && ranNum % 5 != 0) ||
      ranNum % 3 != 0 ||
      ranNum % 5 != 0
    ) {
      spinResult.textContent = `${ranNum} - Game Over - Better luck next time`;
    }
  }
  timer.textContent = tries;
}

spinButton.addEventListener("click", fizzGame);
